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
    date: '2026-01-14',
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
    date: '2026-01-14',
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
    date: '2026-01-14',
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
  }
];

export const blogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
