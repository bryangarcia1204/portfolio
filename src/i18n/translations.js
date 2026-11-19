export const translations = {
  es: {
    profile: {
      name: 'Brayan Manuel García Guibert',
      role: 'Desarrollador de Software & Especialista en Automatización',
      tagline:
        'Construyo APIs, integraciones y automatizaciones que reducen trabajo manual, errores y tiempos operativos.',
      location: 'Camagüey, Cuba · Disponible para trabajo remoto',
    },
    contact: {
      email: 'bgarciaguibert@gmail.com',
      github: 'https://github.com/bryangarcia1204',
      linkedin: '',
    },
    nav: {
      projects: 'Proyectos',
      services: 'Servicios',
      about: 'Sobre mí',
      skills: 'Skills',
      experience: 'Experiencia',
      contact: 'Contacto',
      github: 'GitHub',
    },
    hero: {
      whoami: '$ whoami',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contactarme',
      scroll: 'scroll',
    },
    sections: {
      projects: {
        title: 'Proyectos destacados',
        subtitle:
          'Casos reales donde la automatización y el backend resuelven problemas concretos.',
      },
      services: {
        title: 'Qué puedo aportar',
        subtitle:
          'Servicios enfocados en resolver problemas reales de negocio con tecnología.',
      },
      about: { title: 'Sobre mí' },
      skills: {
        title: 'Stack técnico',
        subtitle: 'Tecnologías que uso a diario en proyectos reales.',
      },
      experience: {
        title: 'Experiencia',
        subtitle: 'Trayectoria profesional y formación.',
        educationTitle: 'Educación',
      },
      contact: {
        title: 'Hablemos',
        subtitle:
          '¿Tienes un proyecto, una automatización pendiente o necesitas reforzar tu equipo? Estoy disponible para trabajo remoto.',
        response: 'Respondo normalmente en menos de 24 horas.',
      },
    },
    about: {
      bio: `Soy estudiante de Ingeniería Informática y desarrollador de software con más de 3 años de experiencia en automatización, APIs y soporte TI. Me especializo en optimizar flujos operativos mediante soluciones tecnológicas eficientes: reduciendo tiempos de ejecución, automatizando procesos manuales y manteniendo sistemas críticos con alta disponibilidad. Proactivo, autodidacta y con facilidad para comunicarme con usuarios técnicos y no técnicos.`,
      quickFacts: 'Datos rápidos',
      locationLabel: 'Ubicación',
      locationValue: 'Camagüey, Cuba',
      modalityLabel: 'Modalidad',
      modalityValue: 'Remoto',
      languagesLabel: 'Idiomas',
      languagesValue: 'Español · Inglés B1',
      emailLabel: 'Email',
    },
    services: [
      {
        icon: 'server',
        title: 'Desarrollo backend y APIs REST',
        description:
          'Diseño y consumo de APIs con Django, FastAPI y Node.js. Integración de sistemas internos, autenticación y gestión de bases de datos.',
      },
      {
        icon: 'zap',
        title: 'Automatización de procesos',
        description:
          'Scripts personalizados y flujos automatizados que reducen tareas manuales, errores y tiempos operativos.',
      },
      {
        icon: 'layout',
        title: 'Desarrollo web',
        description:
          'Interfaces con React y Next.js, consumo de APIs y paneles administrativos modernos.',
      },
      {
        icon: 'database',
        title: 'Soporte TI y bases de datos',
        description:
          'Administración de PostgreSQL, MySQL, SQLite y MongoDB. Docker, Linux, respaldos y recuperación.',
      },
    ],
    projects: {
      labels: {
        problem: 'Problema:',
        solution: 'Solución:',
        result: 'Resultado:',
        code: 'Código',
        demo: 'Demo',
      },
      list: [
        {
          title: 'Compiler',
          subtitle: 'Herramienta de compilación multiplataforma',
          problem:
            'Compilar y empaquetar código en varios lenguajes suele requerir comandos distintos y flujos poco claros.',
          solution:
            'Herramienta con interfaz gráfica que compila y empaqueta código en múltiples lenguajes, con logs en tiempo real, errores coloreados, configuración persistente y flujos automatizados.',
          result:
            'Demuestra integración de tecnologías, automatización de flujos y enfoque en la experiencia de usuario.',
          stack: ['Python', 'C++'],
          repo: 'https://github.com/bryangarcia1204/compiler',
          demo: '',
        },
        {
          title: 'Cyberlab.security',
          subtitle: 'Plataforma de ciberseguridad empresarial',
          problem:
            'Las redes corporativas necesitan visibilidad, control y detección de anomalías en un solo lugar.',
          solution:
            'Plataforma unificada con servidor DHCP, DNS propio, WAF, control de tráfico y detección de anomalías mediante Isolation Forest. Panel de administración moderno y agentes distribuidos.',
          result: 'Sistema integral para monitoreo y control de redes corporativas.',
          stack: ['FastAPI', 'Python', 'WebSockets', 'SQLite', 'C++'],
          repo: 'https://github.com/bryangarcia1204/cyberseguridad',
          demo: '',
        },
        {
          title: 'Automatización de procesos administrativos',
          subtitle: 'Caso de estudio freelance',
          problem:
            'Tareas administrativas repetitivas consumían tiempo y generaban errores manuales.',
          solution:
            'Soluciones personalizadas para automatizar tareas administrativas e integrar sistemas internos mediante APIs REST con Django y FastAPI.',
          result: 'Reducción del 40% en tiempo de ejecución de tareas administrativas.',
          stack: ['Django', 'FastAPI', 'PostgreSQL', 'MySQL', 'Python'],
          repo: '',
          demo: '',
        },
      ],
    },
    skills: {
      groups: [
        { label: 'Backend', items: ['Python', 'Django', 'FastAPI', 'Node.js'] },
        { label: 'Frontend', items: ['JavaScript', 'React', 'Next.js'] },
        { label: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'] },
        { label: 'DevOps y herramientas', items: ['Docker', 'Git', 'Linux'] },
        {
          label: 'Otros',
          items: ['C++', 'REST APIs', 'Microservicios', 'Ciberseguridad básica'],
        },
      ],
    },
    experience: [
      {
        role: 'Desarrollador de Software Freelance & Soporte TI',
        company: 'Freelance',
        period: 'Dic. 2024 – Actualidad',
        bullets: [
          'Automatización de procesos empresariales, reduciendo en un 40% el tiempo de ejecución de tareas administrativas.',
          'Implementación de APIs REST con Django y FastAPI para integración de sistemas internos.',
          'Soporte técnico y mantenimiento de infraestructuras TI para clientes del sector servicios.',
          'Gestión y optimización de bases de datos PostgreSQL y MySQL.',
        ],
      },
      {
        role: 'Técnico de Informática',
        company: 'Complejo Militar de Datos, Región Militar Camagüey',
        period: '2023 – Actualidad',
        bullets: [
          'Administración y mantenimiento de sistemas informáticos críticos, con 99.5% de disponibilidad.',
          'Digitalización y automatización de flujos operativos, reduciendo procesos manuales en un 30%.',
          'Resolución de incidencias en redes, hardware y software con tiempo medio de respuesta inferior a 2 horas.',
          'Implementación de medidas de seguridad informática y respaldo de datos.',
        ],
      },
    ],
    education: [
      {
        title: 'Ingeniería Informática',
        place: 'Universidad Ignacio Agramonte',
        period: '2024 – Actualidad',
      },
      {
        title: 'Técnico Medio en Informática',
        place: 'IPI Máximo Gómez Báez',
        period: '2019 – 2022',
      },
    ],
    stats: {
      title: 'Impacto en números',
      subtitle: 'Resultados medibles de proyectos reales.',
      items: [
        { value: 40, suffix: '%', label: 'Reducción de tiempo en tareas administrativas' },
        { value: 30, suffix: '%', label: 'Reducción de procesos manuales' },
        { value: 99.5, suffix: '%', label: 'Disponibilidad de sistemas críticos', decimals: 1 },
        { value: 3, suffix: '+', label: 'Años de experiencia' },
      ],
    },
    footer: { madeWith: 'Hecho con' },
  },

  en: {
    profile: {
      name: 'Brayan Manuel García Guibert',
      role: 'Software Developer & Automation Specialist',
      tagline:
        'I build APIs, integrations, and automation solutions that reduce manual work, errors, and operational time.',
      location: 'Camagüey, Cuba · Available for remote work',
    },
    contact: {
      email: 'bgarciaguibert@gmail.com',
      github: 'https://github.com/bryangarcia1204',
      linkedin: '',
    },
    nav: {
      projects: 'Projects',
      services: 'Services',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      github: 'GitHub',
    },
    hero: {
      whoami: '$ whoami',
      ctaProjects: 'View projects',
      ctaContact: 'Contact me',
      scroll: 'scroll',
    },
    sections: {
      projects: {
        title: 'Featured projects',
        subtitle:
          'Real cases where automation and backend solve concrete problems.',
      },
      services: {
        title: 'What I bring to the table',
        subtitle:
          'Services focused on solving real business problems with technology.',
      },
      about: { title: 'About me' },
      skills: {
        title: 'Tech stack',
        subtitle: 'Technologies I use daily in real projects.',
      },
      experience: {
        title: 'Experience',
        subtitle: 'Professional background and education.',
        educationTitle: 'Education',
      },
      contact: {
        title: "Let's talk",
        subtitle:
          'Do you have a project, a pending automation, or need to strengthen your team? I am available for remote work.',
        response: 'I usually reply within 24 hours.',
      },
    },
    about: {
      bio: `I'm a Computer Engineering student and software developer with over 3 years of experience in automation, APIs, and IT support. I specialize in optimizing operational flows through efficient technological solutions: reducing execution times, automating manual processes, and maintaining critical systems with high availability. Proactive, self-taught, and comfortable communicating with both technical and non-technical users.`,
      quickFacts: 'Quick facts',
      locationLabel: 'Location',
      locationValue: 'Camagüey, Cuba',
      modalityLabel: 'Work mode',
      modalityValue: 'Remote',
      languagesLabel: 'Languages',
      languagesValue: 'Spanish · English B1',
      emailLabel: 'Email',
    },
    services: [
      {
        icon: 'server',
        title: 'Backend development & REST APIs',
        description:
          'API design and consumption with Django, FastAPI, and Node.js. Internal system integration, authentication, and database management.',
      },
      {
        icon: 'zap',
        title: 'Process automation',
        description:
          'Custom scripts and automated workflows that reduce manual tasks, errors, and operational times.',
      },
      {
        icon: 'layout',
        title: 'Web development',
        description:
          'Interfaces with React and Next.js, API consumption, and modern admin panels.',
      },
      {
        icon: 'database',
        title: 'IT support & databases',
        description:
          'Administration of PostgreSQL, MySQL, SQLite, and MongoDB. Docker, Linux, backup, and recovery.',
      },
    ],
    projects: {
      labels: {
        problem: 'Problem:',
        solution: 'Solution:',
        result: 'Result:',
        code: 'Code',
        demo: 'Demo',
      },
      list: [
        {
          title: 'Compiler',
          subtitle: 'Multi-language compilation tool',
          problem:
            'Compiling and packaging code in multiple languages often requires different commands and unclear workflows.',
          solution:
            'GUI tool that compiles and packages code in multiple languages, with real-time logs, colored error output, persistent configuration, and automated workflows.',
          result:
            'Demonstrates my ability to integrate multiple technologies and my focus on quality and user experience.',
          stack: ['Python', 'C++'],
          repo: 'https://github.com/bryangarcia1204/compiler',
          demo: '',
        },
        {
          title: 'Cyberlab.security',
          subtitle: 'Enterprise cybersecurity platform',
          problem:
            'Corporate networks need visibility, control, and anomaly detection in a single place.',
          solution:
            'Unified platform with DHCP server, custom DNS, WAF, traffic control, and anomaly detection using Isolation Forest. Modern admin panel and distributed agents.',
          result: 'Comprehensive system for monitoring and controlling corporate networks.',
          stack: ['FastAPI', 'Python', 'WebSockets', 'SQLite', 'C++'],
          repo: 'https://github.com/bryangarcia1204/cyberseguridad',
          demo: '',
        },
        {
          title: 'Administrative process automation',
          subtitle: 'Freelance case study',
          problem:
            'Repetitive administrative tasks consumed time and generated manual errors.',
          solution:
            'Custom solutions to automate administrative tasks and integrate internal systems through REST APIs with Django and FastAPI.',
          result: '40% reduction in administrative task execution time.',
          stack: ['Django', 'FastAPI', 'PostgreSQL', 'MySQL', 'Python'],
          repo: '',
          demo: '',
        },
      ],
    },
    skills: {
      groups: [
        { label: 'Backend', items: ['Python', 'Django', 'FastAPI', 'Node.js'] },
        { label: 'Frontend', items: ['JavaScript', 'React', 'Next.js'] },
        { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'] },
        { label: 'DevOps & tools', items: ['Docker', 'Git', 'Linux'] },
        {
          label: 'Other',
          items: ['C++', 'REST APIs', 'Microservices', 'Basic cybersecurity'],
        },
      ],
    },
    experience: [
      {
        role: 'Freelance Software Developer & IT Support',
        company: 'Freelance',
        period: 'Dec. 2024 – Present',
        bullets: [
          'Automation of business processes, reducing administrative task execution time by 40%.',
          'Implementation of REST APIs with Django and FastAPI for internal system integration.',
          'Technical support and IT infrastructure maintenance for clients in the services sector.',
          'Management and optimization of PostgreSQL and MySQL databases.',
        ],
      },
      {
        role: 'IT Technician',
        company: 'Military Data Complex, Camagüey Military Region',
        period: '2023 – Present',
        bullets: [
          'Administration and maintenance of critical IT systems, achieving 99.5% availability.',
          'Digitization and automation of operational workflows, reducing manual processes by 30%.',
          'Resolution of network, hardware, and software incidents with an average response time under 2 hours.',
          'Implementation of IT security measures and data backup.',
        ],
      },
    ],
    education: [
      {
        title: 'Computer Engineering',
        place: 'Ignacio Agramonte University',
        period: '2024 – Present',
      },
      {
        title: 'IT Technician (Associate Degree)',
        place: 'IPI Máximo Gómez Báez',
        period: '2019 – 2022',
      },
    ],
    stats: {
      title: 'Impact in numbers',
      subtitle: 'Measurable results from real projects.',
      items: [
        { value: 40, suffix: '%', label: 'Reduction in administrative task time' },
        { value: 30, suffix: '%', label: 'Reduction of manual processes' },
        { value: 99.5, suffix: '%', label: 'Critical systems uptime', decimals: 1 },
        { value: 3, suffix: '+', label: 'Years of experience' },
      ],
    },
    footer: { madeWith: 'Made with' },
  },
}