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
  }
];

export const blogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
