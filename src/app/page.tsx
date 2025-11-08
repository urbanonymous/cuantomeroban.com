'use client';

import { useState, useEffect } from 'react';

// Spanish IRPF tax brackets for 2024 (state tax)
const TAX_BRACKETS = [
  { limit: 12450, rate: 0.19 },
  { limit: 20200, rate: 0.24 },
  { limit: 35200, rate: 0.30 },
  { limit: 60000, rate: 0.37 },
  { limit: 300000, rate: 0.45 },
  { limit: Infinity, rate: 0.47 }
];

// Social Security contribution rates (from real payslip 2023)
// Employee rates:
const EMPLOYEE_SS_CONTINGENCIAS = 0.048; // 4.80% - Contingencias Comunes
const EMPLOYEE_SS_FORMACION = 0.001; // 0.10% - Formación Profesional
const EMPLOYEE_SS_DESEMPLEO = 0.0155; // 1.55% - Desempleo
const EMPLOYEE_SS_RATE = EMPLOYEE_SS_CONTINGENCIAS + EMPLOYEE_SS_FORMACION + EMPLOYEE_SS_DESEMPLEO; // 6.45% total

// Employer rates:
const EMPLOYER_SS_CONTINGENCIAS = 0.241; // 24.10% - Contingencias Comunes
const EMPLOYER_SS_AT_EP = 0.015; // 1.50% - AT y EP
const EMPLOYER_SS_DESEMPLEO = 0.055; // 5.50% - Desempleo
const EMPLOYER_SS_FORMACION = 0.006; // 0.60% - Formación Profesional
const EMPLOYER_SS_FOGASA = 0.002; // 0.20% - Fondo de garantía salarial
const EMPLOYER_SS_RATE = EMPLOYER_SS_CONTINGENCIAS + EMPLOYER_SS_AT_EP + EMPLOYER_SS_DESEMPLEO + EMPLOYER_SS_FORMACION + EMPLOYER_SS_FOGASA; // 31.90% total

// SS base is typically lower than gross salary (some items excluded from SS base)
// Based on real payslip: SS base is ~66% of gross
const SS_BASE_FACTOR = 0.66; // SS base is 66% of gross salary

// IVA (VAT) rates in Spain
const IVA_STANDARD = 0.21; // 21% standard rate
const IVA_REDUCED = 0.10; // 10% reduced rate
const IVA_SUPER_REDUCED = 0.04; // 4% super-reduced rate

// Weighted average IVA based on typical Spanish spending patterns
// ~40% standard (21%), ~45% reduced (10%), ~15% super-reduced (4%)
const EFFECTIVE_IVA_RATE = (0.40 * IVA_STANDARD) + (0.45 * IVA_REDUCED) + (0.15 * IVA_SUPER_REDUCED); // ≈ 13%

const AVERAGE_SPENDING_RATE = 0.80; // Assume 80% of net salary is spent (20% saved)

// Calculate IRPF (income tax) from gross salary
// Uses progressive brackets with adjustment for typical deductions
// Based on real payslip: effective IRPF rate is ~30% for salaries around 80k
function calculateIRPF(grossAnnual: number): number {
  // Apply a small reduction factor to account for typical deductions
  // This brings the effective rate closer to real-world values (~30% vs ~34% theoretical)
  const adjustmentFactor = 0.90; // ~10% reduction to account for deductions
  const taxableBase = grossAnnual * adjustmentFactor;
  
  let tax = 0;
  let previousLimit = 0;

  for (const bracket of TAX_BRACKETS) {
    if (taxableBase > previousLimit) {
      const taxableInBracket = Math.min(taxableBase, bracket.limit) - previousLimit;
      tax += taxableInBracket * bracket.rate;
      previousLimit = bracket.limit;
    } else {
      break;
    }
  }

  return tax;
}

// Reverse calculation: from net to gross (iterative approach)
function calculateGrossFromNet(netAnnual: number): number {
  // Start with a better initial estimate: net * 1.5 (assuming ~33% effective tax rate)
  let grossEstimate = netAnnual * 1.5;
  let iterations = 0;
  const maxIterations = 200;
  const tolerance = 0.01; // More precise tolerance
  
  while (iterations < maxIterations) {
    const irpf = calculateIRPF(grossEstimate);
    // SS is calculated on SS base, not gross (SS base is typically ~66% of gross)
    const ssBase = grossEstimate * SS_BASE_FACTOR;
    const ss = ssBase * EMPLOYEE_SS_RATE;
    const calculatedNet = grossEstimate - irpf - ss;
    
    const difference = netAnnual - calculatedNet;
    
    if (Math.abs(difference) < tolerance) {
      break;
    }
    
    // Better adjustment: use the tax rate to estimate how much gross we need
    // If we're short by 'difference', we need to add more than 'difference' because of taxes
    const effectiveTaxRate = (irpf + ss) / grossEstimate;
    const adjustmentFactor = 1 / (1 - effectiveTaxRate);
    grossEstimate += difference * adjustmentFactor;
    
    iterations++;
  }
  
  return Math.round(grossEstimate * 100) / 100; // Round to 2 decimals
}

export default function Home() {
  const [netSalary, setNetSalary] = useState<string>('1800');
  const [period, setPeriod] = useState<'annual' | 'monthly'>('monthly');
  const [results, setResults] = useState<{
    gross: number;
    net: number;
    irpf: number;
    ss: number;
    totalTaxes: number;
    effectiveRate: number;
    employerSS: number;
    companyCost: number;
    ivaOnSpending: number;
    totalTaxBurden: number;
    realTakeHome: number;
  } | null>(null);

  useEffect(() => {
    const numericValue = parseFloat(netSalary);
    if (!isNaN(numericValue) && numericValue > 0) {
      const netAnnual = period === 'monthly' ? numericValue * 12 : numericValue;
      const grossAnnual = calculateGrossFromNet(netAnnual);
      const irpf = calculateIRPF(grossAnnual);
      // SS is calculated on SS base, not gross (SS base is typically ~66% of gross)
      const ssBase = grossAnnual * SS_BASE_FACTOR;
      const ss = ssBase * EMPLOYEE_SS_RATE;
      const totalTaxes = irpf + ss;
      const effectiveRate = (totalTaxes / grossAnnual) * 100;
      
      // Calculate employer contributions (also on SS base)
      const employerSS = ssBase * EMPLOYER_SS_RATE;
      const companyCost = grossAnnual + employerSS;
      
      // Calculate IVA on spending (using effective weighted average rate)
      const spendingAmount = netAnnual * AVERAGE_SPENDING_RATE;
      const ivaOnSpending = spendingAmount * (EFFECTIVE_IVA_RATE / (1 + EFFECTIVE_IVA_RATE)); // VAT included in price
      
      // Total tax burden (employee taxes + employer SS + IVA)
      const totalTaxBurden = totalTaxes + employerSS + ivaOnSpending;
      const realTakeHome = netAnnual - ivaOnSpending;

      setResults({
        gross: grossAnnual,
        net: netAnnual,
        irpf,
        ss,
        totalTaxes,
        effectiveRate,
        employerSS,
        companyCost,
        ivaOnSpending,
        totalTaxBurden,
        realTakeHome
      });
    }
  }, [netSalary, period]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ¿Cuánto me roban?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculadora de impuestos en España 🇪🇸
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Descubre cuánto pagas en impuestos según tu salario neto
        </p>
      </div>

        {/* Calculator Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
              Tu salario neto
            </label>
            
            {/* Period Toggle */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setPeriod('monthly')}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  period === 'monthly'
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setPeriod('annual')}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  period === 'annual'
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Anual
              </button>
            </div>

            {/* Input */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">€</span>
              <input
                type="number"
                value={netSalary}
                onChange={(e) => setNetSalary(e.target.value)}
                className="w-full pl-10 pr-4 py-4 text-2xl font-bold border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:bg-gray-700 dark:text-white transition-all"
                placeholder="30000"
        />
      </div>
          </div>

          {results && (
            <div className="space-y-6 mt-8">
              {/* Funnel Visualization */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900/50 dark:to-gray-800/50 p-8 rounded-xl border-2 border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
                  📊 El camino del dinero
                </h3>
                
                <div className="space-y-4 max-w-2xl mx-auto">
                  {/* Company Cost - Widest */}
                  <div className="relative">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium opacity-90">💼 Coste Total Empresa</div>
                          <div className="text-3xl font-bold mt-1">{formatCurrency(results.companyCost)}</div>
                          <div className="text-xs opacity-75 mt-1">{formatCurrency(results.companyCost / 12)} / mes</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">100%</div>
                        </div>
                      </div>
                    </div>
                    {/* Arrow down */}
                    <div className="flex justify-center my-2">
                      <div className="text-4xl text-blue-400 dark:text-blue-500">↓</div>
                    </div>
                  </div>

                  {/* Employer SS - What gets taken */}
                  <div className="mx-8">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 rounded-lg shadow-md transform transition-all hover:scale-105">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium">🏢 Seguridad Social Empresa</div>
                          <div className="text-2xl font-bold mt-1">-{formatCurrency(results.employerSS)}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">-{formatPercentage((results.employerSS / results.companyCost) * 100)}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center my-2">
                      <div className="text-4xl text-orange-400 dark:text-orange-500">↓</div>
                    </div>
                  </div>

                  {/* Gross Salary - Middle */}
                  <div className="mx-16">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-lg shadow-lg transform transition-all hover:scale-105">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium opacity-90">💰 Salario Bruto</div>
                          <div className="text-2xl font-bold mt-1">{formatCurrency(results.gross)}</div>
                          <div className="text-xs opacity-75 mt-1">{formatCurrency(results.gross / 12)} / mes</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">{formatPercentage((results.gross / results.companyCost) * 100)}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center my-2">
                      <div className="text-4xl text-green-400 dark:text-green-500">↓</div>
                    </div>
                  </div>

                  {/* IRPF + Employee SS - What gets taken */}
                  <div className="mx-24">
                    <div className="bg-gradient-to-r from-red-400 to-red-500 text-white p-4 rounded-lg shadow-md transform transition-all hover:scale-105">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium">🏛️ IRPF + Seguridad Social</div>
                          <div className="text-xl font-bold mt-1">-{formatCurrency(results.totalTaxes)}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">-{formatPercentage((results.totalTaxes / results.companyCost) * 100)}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center my-2">
                      <div className="text-4xl text-red-400 dark:text-red-500">↓</div>
                    </div>
                  </div>

                  {/* Net Salary - Narrowest */}
                  <div className="mx-32">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-5 rounded-lg shadow-lg transform transition-all hover:scale-105">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium opacity-90">✅ Salario Neto</div>
                          <div className="text-2xl font-bold mt-1">{formatCurrency(results.net)}</div>
                          <div className="text-xs opacity-75 mt-1">{formatCurrency(results.net / 12)} / mes</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">{formatPercentage((results.net / results.companyCost) * 100)}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center my-2">
                      <div className="text-4xl text-emerald-400 dark:text-teal-500">↓</div>
                    </div>
                  </div>

                  {/* IVA - What you'll pay when spending */}
                  <div className="mx-40">
                    <div className="bg-gradient-to-r from-pink-400 to-rose-500 text-white p-3 rounded-lg shadow-md transform transition-all hover:scale-105">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium">🛒 IVA en gastos</div>
                          <div className="text-lg font-bold mt-1">-{formatCurrency(results.ivaOnSpending)}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold">-{formatPercentage((results.ivaOnSpending / results.companyCost) * 100)}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center my-2">
                      <div className="text-4xl text-pink-400 dark:text-rose-500">↓</div>
                    </div>
                  </div>

                  {/* Real Take Home - Final */}
                  <div className="mx-48">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 rounded-lg shadow-xl transform transition-all hover:scale-105 border-2 border-yellow-400">
                      <div className="text-center">
                        <div className="text-xs font-medium opacity-90">💸 Te quedas realmente</div>
                        <div className="text-2xl font-bold mt-1">{formatCurrency(results.realTakeHome)}</div>
                        <div className="text-lg font-bold mt-2 text-yellow-300">{formatPercentage((results.realTakeHome / results.companyCost) * 100)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Breakdown */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-lg text-purple-900 dark:text-purple-200 mb-4">
                  Desglose completo de impuestos
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">IRPF (Impuesto sobre la Renta)</span>
                    <span className="font-bold text-purple-900 dark:text-purple-200">
                      {formatCurrency(results.irpf)}
            </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Seguridad Social empleado (6.45%)</span>
                    <span className="font-bold text-purple-900 dark:text-purple-200">
                      {formatCurrency(results.ss)}
                    </span>
                  </div>
                  <div className="text-xs text-purple-700 dark:text-purple-400 mt-1 ml-2">
                    4.80% Contingencias + 1.55% Desempleo + 0.10% Formación
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Seguridad Social empresa (31.90%)</span>
                    <span className="font-bold text-purple-900 dark:text-purple-200">
                      {formatCurrency(results.employerSS)}
                    </span>
                  </div>
                  <div className="text-xs text-purple-700 dark:text-purple-400 mt-1 ml-2">
                    24.10% Contingencias + 5.50% Desempleo + 1.50% AT/EP + 0.60% Formación + 0.20% FOGASA
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">IVA en gastos (≈13% efectivo sobre 80% gastado)</span>
                    <span className="font-bold text-purple-900 dark:text-purple-200">
                      {formatCurrency(results.ivaOnSpending)}
                    </span>
                  </div>
                  <div className="text-xs text-purple-700 dark:text-purple-400 mt-1 ml-2">
                    Promedio: 40% al 21%, 45% al 10%, 15% al 4%
                  </div>

                  <div className="border-t-2 border-purple-200 dark:border-purple-700 pt-3 mt-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">Tipo efectivo (directo)</span>
                      <span className="font-bold text-purple-900 dark:text-purple-200">
                        {formatPercentage(results.effectiveRate)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">Carga fiscal total</span>
                      <span className="font-bold text-xl text-purple-900 dark:text-purple-200">
                        {formatPercentage((results.totalTaxBurden / results.companyCost) * 100)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Progress Bars */}
              <div className="space-y-4">
                {/* What company pays */}
                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    De cada 100€ que paga la empresa:
                  </div>
                  <div className="flex gap-1 h-12 rounded-lg overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white font-bold text-sm px-2"
                      style={{ width: `${(results.net / results.companyCost) * 100}%` }}
                    >
                      {formatPercentage((results.net / results.companyCost) * 100)} neto
                    </div>
                    <div 
                      className="bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center text-white font-bold text-sm px-2"
                      style={{ width: `${(results.totalTaxes / results.companyCost) * 100}%` }}
                    >
                      {formatPercentage((results.totalTaxes / results.companyCost) * 100)} IRPF+SS
                    </div>
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm px-2"
                      style={{ width: `${(results.employerSS / results.companyCost) * 100}%` }}
                    >
                      {formatPercentage((results.employerSS / results.companyCost) * 100)} SS empresa
                    </div>
                  </div>
                </div>

                {/* Real purchasing power */}
                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Poder adquisitivo real (después de IVA):
                  </div>
                  <div className="flex gap-1 h-12 rounded-lg overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm px-2"
                      style={{ width: `${(results.realTakeHome / results.companyCost) * 100}%` }}
                    >
                      {formatPercentage((results.realTakeHome / results.companyCost) * 100)} te quedas
                    </div>
                    <div 
                      className="bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm px-2"
                      style={{ width: `${(results.totalTaxBurden / results.companyCost) * 100}%` }}
                    >
                      {formatPercentage((results.totalTaxBurden / results.companyCost) * 100)} total impuestos
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {formatCurrency(results.realTakeHome)} / año
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Poder adquisitivo real después de impuestos e IVA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-2">
            ⚠️ Esta calculadora es orientativa. Los cálculos reales pueden variar según deducciones, comunidad autónoma, y situación personal.
          </p>
          <p className="mb-2">
            El IVA se calcula con un tipo efectivo del ~13% (promedio ponderado: 40% al 21%, 45% al 10%, 15% al 4%) sobre el 80% del salario gastado.
          </p>
          <p>
            La Seguridad Social de la empresa (31.90%) incluye: 24.10% contingencias comunes, 5.50% desempleo, 1.50% AT/EP, 0.60% formación profesional, y 0.20% FOGASA. El empleado paga 6.45% (4.80% + 1.55% + 0.10%).
          </p>
        </div>
      </div>
    </main>
  );
}
