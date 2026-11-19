export const profile = {
  name: "Brayan Manuel García Guibert",
  role: "Desarrollador de Software & Especialista en Automatización",
  tagline:
    "Construyo APIs, integraciones y automatizaciones que reducen trabajo manual, errores y tiempos operativos.",
  location: "Camagüey, Cuba · Disponible para trabajo remoto",
  email: "bgarciaguibert@gmail.com",
  github: "https://github.com/bryangarcia1204",
  linkedin: "", // agrega el tuyo cuando lo tengas
}

export const about = `Soy estudiante de Ingeniería Informática y desarrollador de software con más de 3 años de experiencia en automatización, APIs y soporte TI. Me especializo en optimizar flujos operativos mediante soluciones tecnológicas eficientes: reduciendo tiempos de ejecución, automatizando procesos manuales y manteniendo sistemas críticos con alta disponibilidad. Proactivo, autodidacta y con facilidad para comunicarme con usuarios técnicos y no técnicos.`

export const services = [
  {
    title: "Desarrollo backend y APIs REST",
    description:
      "Diseño y consumo de APIs con Django, FastAPI y Node.js. Integración de sistemas internos, autenticación y gestión de bases de datos.",
    icon: "server",
  },
  {
    title: "Automatización de procesos",
    description:
      "Scripts personalizados y flujos automatizados que reducen tareas manuales, errores y tiempos operativos.",
    icon: "zap",
  },
  {
    title: "Desarrollo web",
    description:
      "Interfaces con React y Next.js, consumo de APIs y paneles administrativos modernos.",
    icon: "layout",
  },
  {
    title: "Soporte TI y bases de datos",
    description:
      "Administración de PostgreSQL, MySQL, SQLite y MongoDB. Docker, Linux, respaldos y recuperación.",
    icon: "database",
  },
]

export const projects = [
  {
    title: "Compiler",
    subtitle: "Herramienta de compilación multiplataforma",
    problem:
      "Compilar y empaquetar código en varios lenguajes suele requerir comandos distintos y flujos poco claros.",
    solution:
      "Herramienta con interfaz gráfica que compila y empaqueta código en múltiples lenguajes, con logs en tiempo real, errores coloreados, configuración persistente y flujos automatizados.",
    result:
      "Demuestra integración de tecnologías, automatización de flujos y enfoque en la experiencia de usuario.",
    stack: ["Python", "C++"],
    repo: "https://github.com/bryangarcia1204/compiler",
    demo: "",
  },
  {
    title: "Cyberlab.security",
    subtitle: "Plataforma de ciberseguridad empresarial",
    problem:
      "Las redes corporativas necesitan visibilidad, control y detección de anomalías en un solo lugar.",
    solution:
      "Plataforma unificada con servidor DHCP, DNS propio, WAF, control de tráfico y detección de anomalías mediante Isolation Forest. Panel de administración moderno y agentes distribuidos.",
    result:
      "Sistema integral para monitoreo y control de redes corporativas.",
    stack: ["FastAPI", "Python", "WebSockets", "SQLite", "C++"],
    repo: "https://github.com/bryangarcia1204/cyberseguridad",
    demo: "",
  },
  {
    title: "Automatización de procesos administrativos",
    subtitle: "Caso de estudio freelance",
    problem:
      "Tareas administrativas repetitivas consumían tiempo y generaban errores manuales.",
    solution:
      "Soluciones personalizadas para automatizar tareas administrativas e integrar sistemas internos mediante APIs REST con Django y FastAPI.",
    result:
      "Reducción del 40% en tiempo de ejecución de tareas administrativas.",
    stack: ["Django", "FastAPI", "PostgreSQL", "MySQL", "Python"],
    repo: "",
    demo: "",
  },
]

export const skills = {
  Backend: ["Python", "Django", "FastAPI", "Node.js"],
  Frontend: ["JavaScript", "React", "Next.js"],
  "Bases de datos": ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  "DevOps y herramientas": ["Docker", "Git", "Linux"],
  Otros: ["C++", "REST APIs", "Microservicios", "Ciberseguridad básica"],
}

export const experience = [
  {
    role: "Desarrollador de Software Freelance & Soporte TI",
    company: "Freelance",
    period: "Dic. 2024 – Actualidad",
    bullets: [
      "Automatización de procesos empresariales, reduciendo en un 40% el tiempo de ejecución de tareas administrativas.",
      "Implementación de APIs REST con Django y FastAPI para integración de sistemas internos.",
      "Soporte técnico y mantenimiento de infraestructuras TI para clientes del sector servicios.",
      "Gestión y optimización de bases de datos PostgreSQL y MySQL.",
    ],
  },
  {
    role: "Técnico de Informática",
    company: "Complejo Militar de Datos, Región Militar Camagüey",
    period: "2023 – Actualidad",
    bullets: [
      "Administración y mantenimiento de sistemas informáticos críticos, con 99.5% de disponibilidad.",
      "Digitalización y automatización de flujos operativos, reduciendo procesos manuales en un 30%.",
      "Resolución de incidencias en redes, hardware y software con tiempo medio de respuesta inferior a 2 horas.",
      "Implementación de medidas de seguridad informática y respaldo de datos.",
    ],
  },
]

export const education = [
  {
    title: "Ingeniería Informática",
    place: "Universidad Ignacio Agramonte",
    period: "2024 – Actualidad",
  },
  {
    title: "Técnico Medio en Informática",
    place: "IPI Máximo Gómez Báez",
    period: "2019 – 2022",
  },
]