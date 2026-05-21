export type BlogContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  keywords: string[];
  cityMentions: string[];
  hero: string;
  content: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'impuestos-espana-expats-cuanto-se-paga',
    title: 'Impuestos en España para expats: cuanto se paga y por que parece tanto',
    description:
      'Guia clara sobre IRPF, Seguridad Social e IVA en España para expats. Incluye ejemplos y ciudades clave como Madrid, Barcelona y Valencia.',
    date: '2026-01-14',
    readingMinutes: 8,
    keywords: [
      'impuestos en España',
      'IRPF expats',
      'Seguridad Social',
      'IVA España',
      'mudarse a España',
      'salario neto',
      'residencia fiscal'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Valencia', 'Malaga', 'Sevilla', 'Bilbao'],
    hero:
      'Si vienes a España por trabajo, el primer shock suele ser el IRPF y la Seguridad Social. Aqui tienes el mapa completo en lenguaje sencillo.',
    content: [
      {
        type: 'paragraph',
        text:
          'Para muchos expats, el primer mes en España es un contraste: buen clima y calidad de vida, pero una nomina que baja mas de lo esperado. Esto no es magia, es IRPF + Seguridad Social + IVA.'
      },
      {
        type: 'heading',
        text: 'Lo basico: eres residente fiscal o no'
      },
      {
        type: 'paragraph',
        text:
          'Si pasas mas de 183 dias al ano en España o tu centro de intereses economicos esta aqui, normalmente eres residente fiscal. Eso afecta a como tributas tu renta mundial.'
      },
      {
        type: 'heading',
        text: 'IRPF: el impuesto que mas duele'
      },
      {
        type: 'paragraph',
        text:
          'El IRPF es progresivo. A mas ingresos, mayor tipo medio. En ciudades como Madrid o Barcelona, muchos profesionales ven que el tipo efectivo se dispara cuando suman bonus o stock.'
      },
      {
        type: 'heading',
        text: 'Seguridad Social: lo que no ves'
      },
      {
        type: 'paragraph',
        text:
          'El empleado paga una parte visible en la nomina, y la empresa paga otra parte importante por ti. Esa diferencia explica por que el coste total empresa es mucho mayor que tu bruto.'
      },
      {
        type: 'heading',
        text: 'IVA: el impuesto silencioso'
      },
      {
        type: 'paragraph',
        text:
          'Aunque tu salario ya llego neto, al gastar en Valencia, Malaga o Sevilla vuelves a pagar impuestos via IVA. En la vida real, esto recorta tu poder adquisitivo.'
      },
      {
        type: 'heading',
        text: 'Conclusiones para expats'
      },
      {
        type: 'list',
        items: [
          'Calcula tu neto real: no es solo IRPF, tambien IVA.',
          'Compara coste total empresa vs neto para entender la diferencia.',
          'La ciudad importa por salario y coste de vida, no solo por impuestos.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Si necesitas una estimacion rapida, usa la calculadora de la portada y luego ajusta con tus circunstancias personales.'
      }
    ]
  },
  {
    slug: 'salario-neto-bruto-espana-expats',
    title: 'Salario neto vs bruto en España: guia rapida para expats',
    description:
      'Entiende la diferencia entre salario bruto y neto en España, con ejemplos y claves para negociar ofertas de trabajo como expat.',
    date: '2026-01-14',
    readingMinutes: 7,
    keywords: [
      'salario neto',
      'salario bruto',
      'nomina España',
      'IRPF',
      'negociar salario'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Valencia'],
    hero:
      'Si te ofrecen 45.000 EUR brutos, tu neto real no sera la mitad exacta. Aqui tienes una guia corta y practica.',
    content: [
      {
        type: 'paragraph',
        text:
          'En España, el salario bruto es el punto de partida. El neto es lo que llega a tu cuenta. La diferencia es IRPF + Seguridad Social.'
      },
      {
        type: 'heading',
        text: 'Por que el bruto no cuenta la historia completa'
      },
      {
        type: 'paragraph',
        text:
          'El empleador paga mas que tu bruto, y tu recibes menos que tu bruto. Por eso conviene mirar el coste total empresa y tu poder adquisitivo real.'
      },
      {
        type: 'heading',
        text: 'Ejemplo rapido'
      },
      {
        type: 'paragraph',
        text:
          'Un expat en Madrid con salario medio puede ver un descuento notable en la nomina, y luego un recorte adicional cuando gasta en alquiler, ocio y supermercado.'
      },
      {
        type: 'heading',
        text: 'Consejos para negociar'
      },
      {
        type: 'list',
        items: [
          'Pregunta por el coste total empresa, no solo por el bruto.',
          'Negocia beneficios que reduzcan gastos (seguro medico, transporte).',
          'Pide ejemplos de neto mensual para evitar sorpresas.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Si ya tienes una oferta, usa la calculadora para estimar tu neto anual y mensual antes de decidir.'
      }
    ]
  },
  {
    slug: 'comparativa-impuestos-espana-portugal-andorra-uk',
    title: 'Comparativa fiscal: España vs Portugal, Andorra y otros destinos',
    description:
      'Comparacion cualitativa para expats entre España y otros paises: Portugal, Andorra, Reino Unido, Alemania y Paises Bajos.',
    date: '2026-02-02',
    readingMinutes: 9,
    keywords: [
      'comparativa impuestos',
      'España vs Portugal',
      'Andorra impuestos',
      'expats Europa',
      'mudarse de pais'
    ],
    cityMentions: ['Madrid', 'Lisboa', 'Andorra la Vella', 'Londres', 'Berlin', 'Amsterdam'],
    hero:
      'Cambiar de pais solo por impuestos puede ser un error si no miras el coste de vida y la residencia fiscal.',
    content: [
      {
        type: 'paragraph',
        text:
          'Es normal comparar España con Portugal o Andorra, pero la realidad fiscal depende de tus ingresos, tu tipo de contrato y tu estatus de residencia.'
      },
      {
        type: 'heading',
        text: 'Portugal'
      },
      {
        type: 'paragraph',
        text:
          'Portugal ha sido popular entre expats por ciertos regimens especiales, pero cambian con el tiempo. Aun asi, muchos valoran Lisboa por clima y coste de vida.'
      },
      {
        type: 'heading',
        text: 'Andorra'
      },
      {
        type: 'paragraph',
        text:
          'Andorra suele tener tipos mas bajos, pero el acceso a residencia, el estilo de vida y el mercado laboral son muy distintos a Madrid o Barcelona.'
      },
      {
        type: 'heading',
        text: 'Reino Unido, Alemania y Paises Bajos'
      },
      {
        type: 'paragraph',
        text:
          'En Reino Unido, Alemania o Paises Bajos, los impuestos pueden ser altos, pero los salarios tambien. Evalua el neto real y el coste de vivienda.'
      },
      {
        type: 'heading',
        text: 'La regla de oro'
      },
      {
        type: 'list',
        items: [
          'No compares solo tipos de IRPF, compara neto real.',
          'Incluye IVA y costes locales de vida.',
          'Consulta tratados de doble imposicion antes de mudarte.'
        ]
      }
    ]
  },
  {
    slug: 'autonomos-en-espana-impuestos-y-cuotas',
    title: 'Autonomos en España: impuestos, cuotas y errores comunes',
    description:
      'Resumen para expats que trabajan como autonomos en España: cuotas, IRPF, IVA y consejos para evitar sorpresas.',
    date: '2026-02-03',
    readingMinutes: 10,
    keywords: [
      'autonomos España',
      'cuota autonomo',
      'IVA autonomos',
      'IRPF autonomo',
      'freelance expat'
    ],
    cityMentions: ['Barcelona', 'Valencia', 'Malaga'],
    hero:
      'Ser autonomo en España puede ser rentable, pero necesitas planificar impuestos y cuotas desde el primer mes.',
    content: [
      {
        type: 'paragraph',
        text:
          'Muchos expats trabajan como freelance desde Barcelona o Malaga. El problema es que mezclan ingresos con impuestos y luego llega la sorpresa.'
      },
      {
        type: 'heading',
        text: 'Cuota de autonomo'
      },
      {
        type: 'paragraph',
        text:
          'La cuota es un coste fijo mensual que depende de tu base. No es un impuesto, pero afecta tu flujo de caja.'
      },
      {
        type: 'heading',
        text: 'IRPF e IVA'
      },
      {
        type: 'paragraph',
        text:
          'El IRPF grava tu beneficio anual, mientras que el IVA lo repercutes en facturas y luego lo declaras. No confundas caja con beneficio.'
      },
      {
        type: 'heading',
        text: 'Errores comunes'
      },
      {
        type: 'list',
        items: [
          'No separar cuentas personales y profesionales.',
          'Gastar el IVA cobrado como si fuera ingreso.',
          'No prever pagos trimestrales.'
        ]
      }
    ]
  },
  {
    slug: 'mudarte-por-impuestos-checklist-expats',
    title: 'Mudarte por impuestos: checklist realista para expats',
    description:
      'Checklist para expats que quieren mudarse por impuestos: residencia fiscal, coste oculto y comparacion real de poder adquisitivo.',
    date: '2026-02-04',
    readingMinutes: 8,
    keywords: [
      'mudarse por impuestos',
      'residencia fiscal',
      'doble imposicion',
      'expats España',
      'power adquisitivo'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'],
    hero:
      'Mudarse por impuestos puede tener sentido, pero solo si haces numeros completos y entiendes la residencia fiscal.',
    content: [
      {
        type: 'paragraph',
        text:
          'Cambiar de pais no es solo cambiar de IRPF. Hay costes de mudanza, vivienda, sanidad y adaptacion. En España, el equilibrio calidad de vida vs impuestos es clave.'
      },
      {
        type: 'heading',
        text: 'Checklist antes de decidir'
      },
      {
        type: 'list',
        items: [
          'Confirma tu residencia fiscal y el tratado con tu pais de origen.',
          'Compara tu neto real y no solo el tipo marginal.',
          'Incluye IVA y coste de vivienda en la ciudad destino.'
        ]
      },
      {
        type: 'heading',
        text: 'Consejo final'
      },
      {
        type: 'paragraph',
        text:
          'Si tu objetivo es optimizar impuestos, asesora tu caso y usa herramientas de simulacion. Y si buscas calidad de vida, compara ciudades como Valencia o Sevilla con tu destino alternativo.'
      }
    ]
  },
  {
    slug: 'mejores-ciudades-espana-expats-impuestos-coste-vida',
    title: 'Mejores ciudades de Espana para expats: impuestos y coste de vida',
    description:
      'Analisis GEO para expats entre Madrid, Barcelona, Valencia, Malaga, Sevilla y Bilbao: cuanto se paga y cuanto rinde tu neto.',
    date: '2026-02-05',
    readingMinutes: 8,
    keywords: [
      'mejores ciudades Espana expats',
      'coste de vida Espana',
      'impuestos Madrid Barcelona Valencia',
      'vivir en Malaga',
      'vivir en Sevilla'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Valencia', 'Malaga', 'Sevilla', 'Bilbao'],
    hero:
      'No todas las ciudades se sienten igual en tu bolsillo. Tu neto puede rendir mucho mas segun alquiler, transporte y estilo de vida.',
    content: [
      {
        type: 'paragraph',
        text:
          'Para expats, elegir ciudad en Espana es casi tan importante como negociar salario. Los impuestos nacionales pesan, pero el coste local define tu calidad de vida.'
      },
      {
        type: 'heading',
        text: 'Madrid y Barcelona'
      },
      {
        type: 'paragraph',
        text:
          'Suelen ofrecer mas oportunidades y mejores salarios, pero la vivienda puede comerse gran parte de tu neto mensual.'
      },
      {
        type: 'heading',
        text: 'Valencia, Malaga y Sevilla'
      },
      {
        type: 'paragraph',
        text:
          'En muchas zonas de estas ciudades, el equilibrio entre ingresos y gastos es mas favorable para familias y perfiles remotos.'
      },
      {
        type: 'heading',
        text: 'Checklist rapido'
      },
      {
        type: 'list',
        items: [
          'Compara salario neto y alquiler en la misma hoja.',
          'Incluye transporte, colegios o coworking si aplica.',
          'Mide tu ahorro anual real, no solo el sueldo.'
        ]
      }
    ]
  },
  {
    slug: 'irpf-por-tramos-espana-explicado-facil',
    title: 'IRPF por tramos en Espana: explicado facil para expats',
    description:
      'Aprende como funcionan los tramos de IRPF en Espana y por que subir de tramo no significa perder dinero.',
    date: '2026-02-06',
    readingMinutes: 7,
    keywords: [
      'IRPF por tramos',
      'tramos IRPF Espana',
      'tipo marginal',
      'tipo efectivo',
      'expats IRPF'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Valencia'],
    hero:
      'Subir de tramo no implica que todo tu salario pague mas. Solo el tramo adicional tributa al nuevo tipo.',
    content: [
      {
        type: 'paragraph',
        text:
          'Una confusion frecuente entre expats es creer que ganar mas puede reducir el neto. En un sistema progresivo, cada tramo se grava por separado.'
      },
      {
        type: 'heading',
        text: 'Tipo marginal vs tipo efectivo'
      },
      {
        type: 'paragraph',
        text:
          'El marginal es el porcentaje del ultimo euro ganado. El efectivo es la media total que realmente pagas sobre tu renta.'
      },
      {
        type: 'heading',
        text: 'Por que importa en la negociacion'
      },
      {
        type: 'paragraph',
        text:
          'Cuando comparas ofertas en Madrid o Barcelona, usa siempre neto anual estimado y no solo bruto. Asi evitas decisiones basadas en intuicion.'
      },
      {
        type: 'list',
        items: [
          'No temas subir de tramo: sigues ganando mas.',
          'Evalua bonus y stock por separado.',
          'Haz simulaciones de neto con y sin variable.'
        ]
      }
    ]
  },
  {
    slug: 'impuestos-para-remote-workers-en-espana',
    title: 'Impuestos para remote workers en Espana: guia para expats',
    description:
      'Que debe revisar un trabajador remoto en Espana: residencia fiscal, doble imposicion, factura internacional e IVA.',
    date: '2026-02-07',
    readingMinutes: 9,
    keywords: [
      'remote workers Espana',
      'residencia fiscal remoto',
      'doble imposicion expats',
      'freelance internacional',
      'IVA servicios digitales'
    ],
    cityMentions: ['Valencia', 'Malaga', 'Barcelona', 'Palma'],
    hero:
      'Trabajar remoto para otro pais desde Espana puede ser perfecto, pero fiscalmente exige orden desde el primer dia.',
    content: [
      {
        type: 'paragraph',
        text:
          'Cada vez mas expats viven en ciudades costeras y trabajan para empresas extranjeras. El reto no es tecnico: es fiscal y administrativo.'
      },
      {
        type: 'heading',
        text: 'Residencia fiscal y 183 dias'
      },
      {
        type: 'paragraph',
        text:
          'Si resides fiscalmente en Espana, tus obligaciones cambian aunque la empresa pagadora este fuera.'
      },
      {
        type: 'heading',
        text: 'Doble imposicion'
      },
      {
        type: 'paragraph',
        text:
          'Comprueba tratados entre Espana y el pais de origen de tus ingresos para evitar tributar dos veces por la misma renta.'
      },
      {
        type: 'heading',
        text: 'Buenas practicas'
      },
      {
        type: 'list',
        items: [
          'Guarda contratos, facturas y certificados de retencion.',
          'Separa cuenta personal y cuenta profesional.',
          'Planifica pagos trimestrales y cierre anual.'
        ]
      }
    ]
  },
  {
    slug: 'ley-beckham-expats-cuando-compensa',
    title: 'Ley Beckham para expats en Espana: cuando compensa y cuando no',
    description:
      'Resumen practico del regimen para desplazados (Ley Beckham): ventajas, limites y casos donde no compensa.',
    date: '2026-02-08',
    readingMinutes: 8,
    keywords: [
      'Ley Beckham',
      'regimen impatriados Espana',
      'expats alta cualificacion',
      'impuestos no residentes',
      'mudanza laboral Espana'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Malaga', 'Valencia'],
    hero:
      'La Ley Beckham puede reducir la factura fiscal en ciertos perfiles, pero no es universal ni automatica.',
    content: [
      {
        type: 'paragraph',
        text:
          'Muchos profesionales internacionales preguntan por este regimen al llegar a Espana. Bien aplicado puede ser muy util, mal evaluado puede salir caro.'
      },
      {
        type: 'heading',
        text: 'Que suele atraer de este regimen'
      },
      {
        type: 'paragraph',
        text:
          'La principal ventaja es un tratamiento fiscal distinto durante un periodo limitado para quienes cumplen requisitos concretos.'
      },
      {
        type: 'heading',
        text: 'Donde se equivoca la gente'
      },
      {
        type: 'list',
        items: [
          'Asumir que aplica a cualquier expat.',
          'No analizar rentas extranjeras y patrimonio.',
          'No comparar con tributacion ordinaria a varios anos.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Antes de decidir, conviene modelar escenarios con asesor fiscal segun tu salario, bonus, acciones y pais de origen.'
      }
    ]
  },
  {
    slug: 'impuestos-compra-vivienda-espana-expats',
    title: 'Impuestos al comprar vivienda en Espana para expats',
    description:
      'Guia sobre impuestos al comprar casa en Espana: ITP, IVA, AJD y costes de cierre en ciudades como Madrid y Valencia.',
    date: '2026-02-09',
    readingMinutes: 9,
    keywords: [
      'comprar vivienda Espana',
      'ITP',
      'AJD',
      'IVA vivienda nueva',
      'expats inmobiliario Espana'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Valencia', 'Alicante', 'Malaga'],
    hero:
      'El precio de la vivienda no es el unico numero importante: los impuestos de compra pueden cambiar por completo tu presupuesto.',
    content: [
      {
        type: 'paragraph',
        text:
          'Si compras vivienda en Espana siendo expat, necesitas calcular no solo la hipoteca sino tambien impuestos y gastos de cierre.'
      },
      {
        type: 'heading',
        text: 'Vivienda nueva vs segunda mano'
      },
      {
        type: 'paragraph',
        text:
          'La vivienda nueva suele llevar IVA y AJD. La segunda mano suele tributar por ITP. Los porcentajes varian segun comunidad autonoma.'
      },
      {
        type: 'heading',
        text: 'Costes a tener en cuenta'
      },
      {
        type: 'list',
        items: [
          'Impuesto principal de compra (ITP o IVA/AJD).',
          'Notaria, registro y gestoria.',
          'Margen para reformas y mudanza.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'En mercados tensionados como Madrid o Barcelona, planificar estos costes evita quedarte corto en liquidez.'
      }
    ]
  },
  {
    slug: 'impuestos-empresa-vs-autonomo-espana-expats',
    title: 'Empresa o autonomo en Espana: que paga menos impuestos',
    description:
      'Comparativa para expats emprendedores entre operar como autonomo o sociedad en Espana, con enfoque practico.',
    date: '2026-02-10',
    readingMinutes: 10,
    keywords: [
      'autonomo o sociedad Espana',
      'impuesto sociedades',
      'IRPF autonomos',
      'emprender en Espana',
      'expats business'
    ],
    cityMentions: ['Madrid', 'Valencia', 'Malaga', 'Barcelona'],
    hero:
      'No existe una respuesta unica: depende de facturacion, gastos, riesgo y horizonte de crecimiento.',
    content: [
      {
        type: 'paragraph',
        text:
          'Muchos expats empiezan como autonomos por simplicidad. Cuando crecen ingresos o equipo, valorar una sociedad puede tener sentido.'
      },
      {
        type: 'heading',
        text: 'Autonomo: simple pero sensible al IRPF'
      },
      {
        type: 'paragraph',
        text:
          'Es facil de arrancar, pero el beneficio puede escalar rapido en tipos altos de IRPF.'
      },
      {
        type: 'heading',
        text: 'Sociedad: mas estructura'
      },
      {
        type: 'paragraph',
        text:
          'Implica contabilidad y obligaciones adicionales, pero da herramientas para planificar retribucion y reinversion.'
      },
      {
        type: 'list',
        items: [
          'Compara coste administrativo total anual.',
          'Revisa responsabilidad legal y riesgo del negocio.',
          'Haz numeros a 12 y 36 meses, no solo a corto plazo.'
        ]
      }
    ]
  },
  {
    slug: 'deducciones-fiscales-expats-espana-guia-practica',
    title: 'Deducciones fiscales para expats en Espana: guia practica',
    description:
      'Que deducciones pueden impactar tu IRPF en Espana y como organizar documentos para no pagar de mas.',
    date: '2026-02-11',
    readingMinutes: 7,
    keywords: [
      'deducciones IRPF Espana',
      'declaracion renta expats',
      'ahorro fiscal legal',
      'gastos deducibles',
      'documentacion fiscal'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Sevilla', 'Valencia'],
    hero:
      'No todo es tipo marginal: una buena organizacion de deducciones puede mejorar mucho tu resultado anual.',
    content: [
      {
        type: 'paragraph',
        text:
          'Muchos expats pagan de mas por falta de orden documental. La clave esta en revisar con tiempo posibles deducciones estatales y autonomicas.'
      },
      {
        type: 'heading',
        text: 'Que preparar durante el ano'
      },
      {
        type: 'list',
        items: [
          'Certificados de empresa y retenciones.',
          'Justificantes de gastos potencialmente deducibles.',
          'Documentacion de mudanza y residencia, si aplica.'
        ]
      },
      {
        type: 'heading',
        text: 'Errores que encarecen la renta'
      },
      {
        type: 'paragraph',
        text:
          'Presentar tarde, no reconciliar datos o no revisar borrador puede traducirse en pagos innecesarios.'
      },
      {
        type: 'paragraph',
        text:
          'Con una revision anual y simulaciones trimestrales puedes evitar sustos y mantener mejor liquidez.'
      }
    ]
  },
  {
    slug: 'jubilacion-ahorro-fiscal-espana-expats',
    title: 'Jubilacion y ahorro fiscal en Espana para expats',
    description:
      'Como planificar ahorro de largo plazo en Espana si eres expat: fiscalidad, liquidez y estrategias prudentes.',
    date: '2026-02-12',
    readingMinutes: 8,
    keywords: [
      'jubilacion expats Espana',
      'ahorro fiscal largo plazo',
      'planificacion financiera expats',
      'impuestos y patrimonio',
      'residencia fiscal futura'
    ],
    cityMentions: ['Madrid', 'Bilbao', 'Valencia', 'Malaga'],
    hero:
      'Pensar en impuestos solo en el presente suele ser caro. La optimizacion real se construye a 10 o 20 anos.',
    content: [
      {
        type: 'paragraph',
        text:
          'Si tu proyecto de vida en Espana es estable, conviene integrar fiscalidad, ahorro e inversion en una estrategia unica.'
      },
      {
        type: 'heading',
        text: 'Tres capas de planificacion'
      },
      {
        type: 'list',
        items: [
          'Liquidez mensual para imprevistos y pagos fiscales.',
          'Ahorro de medio plazo para vivienda o familia.',
          'Inversion de largo plazo adaptada a tu residencia futura.'
        ]
      },
      {
        type: 'heading',
        text: 'Enfoque para expats'
      },
      {
        type: 'paragraph',
        text:
          'Como tu residencia puede cambiar, diseña una cartera que soporte movimientos internacionales sin friccion fiscal excesiva.'
      }
    ]
  },
  {
    slug: 'impuesto-patrimonio-espana-expats',
    title: 'Impuesto de patrimonio en Espana: ¿te afecta como expat?',
    description:
      'Guia sobre el impuesto de patrimonio en Espana para expats. Como varia segun la region y estrategias basicas de planificacion.',
    date: '2026-02-15',
    readingMinutes: 9,
    keywords: [
      'impuesto de patrimonio',
      'patrimonio Espana expats',
      'tributacion riqueza',
      'impuestos Madrid vs Barcelona',
      'planificacion fiscal'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Malaga'],
    hero:
      'El impuesto de patrimonio en Espana puede ser una gran sorpresa para expats de rentas altas o con activos significativos. Dependiendo de la region donde vivas, la diferencia puede ser abismal.',
    content: [
      {
        type: 'paragraph',
        text:
          'A diferencia de otros paises de la UE que han eliminado este tributo, Espana mantiene un impuesto sobre la riqueza neta global. Esto significa que si eres residente fiscal, tus activos en todo el mundo se tienen en cuenta.'
      },
      {
        type: 'heading',
        text: 'La gran diferencia regional: Madrid y Andalucia vs Cataluña'
      },
      {
        type: 'paragraph',
        text:
          'Las comunidades autonomas tienen competencias para modificar el minimo exento y las tarifas. Por ejemplo, Madrid y Andalucia ofrecen bonificaciones de casi el 100%, mientras que en Cataluña o la Comunidad Valenciana se empieza a tributar desde importes mas bajos y con tipos progresivos.'
      },
      {
        type: 'heading',
        text: '¿Cual es el minimo exento en Espana?'
      },
      {
        type: 'paragraph',
        text:
          'A nivel estatal, el minimo exento general es de 700.000 euros, mas 300.000 euros adicionales para la vivienda habitual. Sin embargo, comunidades como Cataluña rebajan este minimo exento a 500.000 euros, haciendo que mas personas tengan que declarar.'
      },
      {
        type: 'heading',
        text: 'Recomendaciones antes de mudarte'
      },
      {
        type: 'list',
        items: [
          'Elige bien tu region: el lugar donde establezcas tu residencia fiscal determina tu factura por patrimonio.',
          'Haz inventario de activos globales: cuentas bancarias, inmuebles, acciones y participaciones societarias.',
          'Ojo con el Impuesto de Solidaridad: para patrimonios netos superiores a 3 millones de euros, existe un gravamen estatal armonizado.'
        ]
      }
    ]
  },
  {
    slug: 'criptomonedas-impuestos-espana-expats',
    title: 'Fiscalidad de criptomonedas en Espana: guia basica para expats',
    description:
      'Como tributan las criptomonedas en Espana, la obligacion de declararlas y que modelos debes conocer como el Modelo 721.',
    date: '2026-02-20',
    readingMinutes: 8,
    keywords: [
      'criptomonedas Espana',
      'impuestos crypto',
      'declarar Bitcoin',
      'Modelo 721',
      'expats cripto'
    ],
    cityMentions: ['Barcelona', 'Madrid', 'Valencia'],
    hero:
      'Si tienes Bitcoin u otras criptomonedas y te mudas a Espana, Hacienda querra saber de ellas. La normativa se ha endurecido notablemente en los ultimos años.',
    content: [
      {
        type: 'paragraph',
        text:
          'En Espana, las ganancias derivadas del intercambio, venta o uso de criptomonedas tributan en la base imponible del ahorro. Esto incluye tanto la conversion a dinero fiat como el intercambio de una cripto por otra.'
      },
      {
        type: 'heading',
        text: 'Tramos del impuesto sobre el ahorro'
      },
      {
        type: 'paragraph',
        text:
          'Los tipos impositivos para las ganancias patrimoniales por criptomonedas van desde el 19% para los primeros 6.000 euros de ganancia, hasta el 28% para ganancias que superen los 300.000 euros.'
      },
      {
        type: 'heading',
        text: 'La obligacion de informar: Modelo 721'
      },
      {
        type: 'paragraph',
        text:
          'Si custodias criptomonedas en plataformas de intercambio situadas fuera de Espana (como Binance o Coinbase internacional) y el valor conjunto de tus monedas supera los 50.000 euros a 31 de diciembre, debes presentar el Modelo 721.'
      },
      {
        type: 'heading',
        text: 'Checklist para inversores cripto'
      },
      {
        type: 'list',
        items: [
          'Usa el metodo FIFO (First In, First Out) para calcular tus ganancias y perdidas de forma correcta.',
          'Registra cada transaccion: Hacienda exige documentar el precio de compra y venta de cada operacion.',
          'Las perdidas tambien se declaran: puedes compensar las perdidas con ganancias del mismo año o de los 4 años siguientes.'
        ]
      }
    ]
  },
  {
    slug: 'modelo-720-espana-declaracion-bienes-extranjero',
    title: 'El temido Modelo 720 en Espana: que es y como evitar multas',
    description:
      'Guia sobre el Modelo 720 para expats: cuentas, inversiones y propiedades en el extranjero. Quien debe declararlo y plazos.',
    date: '2026-02-25',
    readingMinutes: 9,
    keywords: [
      'Modelo 720',
      'bienes en el extranjero',
      'declarar cuentas fuera',
      'expats España impuestos',
      'evitar multas Hacienda'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Valencia', 'Alicante'],
    hero:
      'El Modelo 720 es una de las declaraciones que mas asusta a los extranjeros que se mudan a Espana. No es un impuesto directo, sino una obligacion informativa sobre tus bienes en el exterior.',
    content: [
      {
        type: 'paragraph',
        text:
          'Si eres residente fiscal en Espana, estas obligado a declarar los bienes y derechos situados en el extranjero cuando superen ciertos limites. El objetivo de la Agencia Tributaria es prevenir el fraude fiscal.'
      },
      {
        type: 'heading',
        text: 'Los tres bloques de bienes'
      },
      {
        type: 'paragraph',
        text:
          'El Modelo 720 se divide en tres bloques independientes: 1) cuentas bancarias en el extranjero, 2) valores, derechos, seguros y rentas depositados o gestionados fuera, y 3) bienes inmuebles. Debes declarar cada bloque que supere individualmente los 50.000 euros.'
      },
      {
        type: 'heading',
        text: 'Cambios recientes y multas'
      },
      {
        type: 'paragraph',
        text:
          'Anteriormente, no presentar este modelo acarreaba multas desproporcionadas y la no prescripción de la renta no declarada. Tras una sentencia del Tribunal de Justicia de la UE, las multas se han equiparado al régimen general, pero siguen existiendo sanciones por presentarlo fuera de plazo.'
      },
      {
        type: 'heading',
        text: 'Puntos clave a recordar'
      },
      {
        type: 'list',
        items: [
          'El plazo de presentacion es del 1 de enero al 31 de marzo de cada año.',
          'Solo debes volver a presentarlo en años siguientes si el valor de algun bloque de bienes se incrementa en mas de 20.000 euros respecto a la ultima declaracion.',
          'Aplica a residentes fiscales, por lo que los expats bajo la Ley Beckham suelen estar exentos de declarar la mayoria de bienes extranjeros.'
        ]
      }
    ]
  },
  {
    slug: 'ley-beckham-autonomos-emprendedores-espana',
    title: 'Ley Beckham para autonomos y emprendedores: ¿es posible hoy?',
    description:
      'Analisis de la ampliacion de la Ley Beckham para nomadas digitales, administradores y emprendedores en Espana.',
    date: '2026-03-02',
    readingMinutes: 8,
    keywords: [
      'Ley Beckham autonomos',
      'nomada digital España',
      'impuestos emprendedores',
      'regimen especial impatriados',
      'Beckham law digital nomad'
    ],
    cityMentions: ['Madrid', 'Barcelona', 'Malaga', 'Valencia'],
    hero:
      'Historicamente, el regimen especial de impatriados (Ley Beckham) estaba reservado exclusivamente a empleados asalariados. Sin embargo, la reciente Ley de Startups ha ampliado considerablemente el abanico de beneficiarios.',
    content: [
      {
        type: 'paragraph',
        text:
          'La gran ventaja de la Ley Beckham es que permite a los nuevos residentes tributar a un tipo fijo del 24% hasta los primeros 600.000 euros de ingresos del trabajo, en lugar de los tipos progresivos generales de IRPF que pueden superar el 47%.'
      },
      {
        type: 'heading',
        text: 'Nuevos perfiles admitidos: emprendedores y nomadas digitales'
      },
      {
        type: 'paragraph',
        text:
          'Con la reforma, ahora pueden acogerse a este regimen: 1) profesionales altamente cualificados que realicen actividades economicas (autonomos) prestando servicios a empresas emergentes, 2) nomadas digitales con visado de teletrabajo de caracter internacional, y 3) administradores de empresas, sin importar su porcentaje de participacion en la compañia (salvo que sea una sociedad patrimonial).'
      },
      {
        type: 'heading',
        text: 'Reduccion del periodo de no residencia'
      },
      {
        type: 'paragraph',
        text:
          'Otro cambio muy favorable es que el requisito de no haber sido residente fiscal en Espana se ha reducido de 10 a 5 años. Esto facilita la vuelta de profesionales que se marcharon al extranjero recientemente.'
      },
      {
        type: 'heading',
        text: 'Condiciones y plazos'
      },
      {
        type: 'list',
        items: [
          'Debes solicitar la adhesion al regimen dentro de los 6 meses siguientes al inicio de la actividad o relacion laboral.',
          'La duracion del beneficio fiscal es del año de mudanza mas los 5 años siguientes.',
          'Permite tambien incluir en el regimen especial al conyuge y a los hijos menores de 25 años bajo ciertas condiciones.'
        ]
      }
    ]
  }
];

export const blogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
