export interface IProject {
  id: number
  title: string
  description: string
  longDescription: string
  challenges: string[]
  learnings: string[]
  tags: string[]
  image: string
  images: string[]
  demoUrl?: string
  githubUrl: string
  githubUrlBack?: string
}

export const projects: IProject[] = [
  {
    id: 1,
    title: "Landing page Tanoni Agro",
    description:
      "Landing page profesional para Tanoni Agro en español e inglés, optimizada para SEO y adaptada a dispositivos móviles.",
    longDescription:
      "Desarrollé una landing page responsive para Tanoni Agro, optimizada para SEO y enfocada en brindar una experiencia de usuario fluida. La web incluye una sección de 'Inicio', 'Nosotros', 'Qué hacemos', 'Contacto'. Implementé la lógica de internacionalización para ofrecer contenido en español e inglés, mejorando el alcance de la empresa.",
    challenges: [
      "Implementar la internacionalización (i18n) para múltiples idiomas.",
      "Optimizar el rendimiento de la página para mejorar el SEO.",
      "Adaptar el diseño para distintos dispositivos sin perder consistencia visual.",
    ],
    learnings: [
      "Profundicé mis conocimientos en Astro y Tailwind CSS.",
      "Aprendí a manejar y optimizar SEO para mejorar el tráfico orgánico.",
      "Aprendí a utilizar SSR para mejorar la velocidad de carga de la página.",
      "Aprendí a utilizar la API de Google Maps para mostrar ubicaciones.",
      "Aprendí a optimizar imagenes para mejorar la velocidad de carga.",
    ],
    tags: ["Astro", "JavaScript", "Tailwind CSS", "Flowbite"],
    image: "/projects/tanoniAgro.png",
    images: [
      "/projects/tanoniAgro.png",
      "/projects/misionTanoni.png",
      "/projects/quehacemos.png",
      "/projects/location.png",
    ],
    demoUrl: "https://tanoniagro.com.ar/es/",
    githubUrl: "https://github.com/estefano99/tanoni_agro.git",
  },
  {
    id: 2,
    title: "Inmobiliaria",
    description:
      "Sistema de gestión inmobiliaria para administración de contratos y alertas automáticas.",
    longDescription:
      "Desarrollé un sistema para la gestión de contratos inmobiliarios que permite administrar locadores, locatarios, inmuebles, contratos y tipo de contratos. Implementé alertas automáticas para vencimientos de contratos y actualizaciones de importes, en función de los plazos definidos por el usuario. Además, incorporé un módulo para registrar el historial completo de cada contrato, incluyendo la evolución de su valor en distintas fechas.",
    challenges: [
      "Implementar un sistema de alertas para vencimientos y aumentos automáticos.",
      "Manejar correctamente las fechas y recurrencias para calcular aumentos según diferentes tipos de contratos.",
      "Evitar duplicaciones y asegurar integridad de datos entre locadores, locatarios e inmuebles relacionados.",
      "Diseñar una interfaz intuitiva que permita visualizar el estado de cada contrato y su historial de cambios.",
    ],
    learnings: [
      "Mejoré mis habilidades en React Query y gestión de estados complejos.",
      "Profundicé en la integración de Sequelize con MySQL para modelos relacionales.",
      "Aprendí el manejo de cache con React Query para mejorar el rendimiento.",
    ],
    tags: [
      "React",
      "React-query",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express",
      "Sequelize",
      "Mysql",
      "JWT",
    ],
    image: "/projects/contratos.PNG",
    images: [
      "/projects/contratos.PNG",
      "/projects/aumentoImportes.PNG",
      "/projects/historialContrato.PNG",
      "/projects/dashboardInmo.PNG",
      "/projects/inmuebles.PNG",
    ],
    githubUrl: "https://github.com/estefano99/Inmobiliaria_front.git",
    githubUrlBack: "https://github.com/julibosch/Inmobiliaria_back.git",
  },
  {
    id: 3,
    title: "Compra-venta",
    description:
      "Sistema de gestión para una bicicletería con control de stock, registro de compras y ventas, aumentos de precios masivos por filtros personalizados y un dashboard con métricas claves del negocio.",
    longDescription:
      "Desarrollé un sistema completo para la gestión de stock, compras y ventas de una bicicletería. Implementé aumentos de precios masivos mediante filtros personalizados y un panel de control con métricas clave para una visión completa del negocio. El sistema permite visualizar movimientos de artículos y generar reportes detallados.",
    challenges: [
      "Optimizar las consultas SQL para mantener la velocidad en la carga de datos, especialmente en dashboards con múltiples filtros y métricas en tiempo real.",
      "Implementar un sistema de aumento de precios masivos filtrado por categorías específicas.",
      "Implementar un sistema de autenticación seguro con JWT.",
    ],
    learnings: [
      "Aprendí a crear dashboards dinámicos con métricas clave para el negocio.",
      "Profundicé en el uso de JWT y en la creación de middlewares de autenticación y autorización.",
      "Me familiaricé con técnicas de optimización de consultas SQL, índices y uso eficiente de JOINs.",
    ],
    tags: [
      "React",
      "React-query",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express",
      "Sequelize",
      "Mysql",
      "JWT",
    ],
    image: "/projects/bicicleteria/dashboardBici.png",
    images: [
      "/projects/bicicleteria/login.png",
      "/projects/bicicleteria/dashboardBici.png",
      "/projects/bicicleteria/compraVenta.png",
      "/projects/bicicleteria/Egresos.png",
      "/projects/bicicleteria/articulos.png",
      "/projects/bicicleteria/movimientos.png",
      "/projects/bicicleteria/venta.png",
    ],
    githubUrl: "https://github.com/estefano99/bicicleteria_front.git",
    githubUrlBack: "https://github.com/estefano99/bicicleteria_back.git",
  },
  {
    id: 4,
    title: "Turnero canchas de futbol 5",
    description:
      "Sistema de reservas para canchas de fútbol 5 con calendario interactivo y configuración de horarios por cancha y por día. Un robusto sistema de gestión de permisos, que permite crear grupos y usuarios, asignar permisos por módulos y acciones de formularios, y aplicarlos tanto de forma individual como a través de los grupos a los que pertenece cada usuario. Ademas cuenta con auditorias de Login-Logout, Gestion de mantenimiento de las canchas asignado a los empleados",
    longDescription:
      "Desarrollé un sistema de reservas para canchas de fútbol 5, con un calendario interactivo que permite configurar horarios por cancha y por día. Incluí un panel de reportes con gráficos para analizar la ocupación de las canchas. También implementé un sistema robusto de permisos que permite asignar acciones a usuarios y grupos de manera flexible, junto con un sistema de auditoría para registrar logs de login y logout. Además, incorporé la gestión de mantenimiento asignada a empleados específicos.",
    challenges: [
      "Implementar un sistema de permisos granular para módulos, formularios y acciones específicas por usuario y grupos.",
      "Crear un calendario interactivo que permita reservar turnos en diferentes horarios.",
      "Configurar auditorías para registrar acciones importantes como login, logout y mantenimiento.",
      "Gestionar correctamente la asignación de tareas de mantenimiento a empleados.",
      "Implementar el uso de mails con mailtrap para notificaciones de reservas.",
    ],
    learnings: [
      "Perfeccioné mis habilidades en React Big Calendar para trabajar con calendarios complejos y reservas.",
      "Aprendí a trabajar con librerías de manejo de fechas como Day.js para operaciones temporales precisas.",
      "Desarrollé experiencia en sistemas de gestión de permisos avanzados para controlar el acceso a funcionalidades específicas.",
      "Implementé auditorías para registrar acciones críticas del sistema, mejorando la trazabilidad y seguridad.",
    ],
    tags: [
      "React",
      "React-big-calendar",
      "Day-js",
      "JavaScript",
      "Tailwind CSS",
      "Material Tailwind/ui",
      "React Big Calendar",
      "PHP",
      "Laravel",
      "Mysql",
      "JWT",
    ],
    image: "/projects/futdraft/turnos.png",
    images: [
      "/projects/futdraft/login.png",
      "/projects/futdraft/reservarTurnos.png",
      "/projects/futdraft/turnos.png",
      "/projects/futdraft/turnos3.png",
      "/projects/futdraft/horarios.png",
      "/projects/futdraft/usuarios2.png",
      "/projects/futdraft/accionesUsuario.png",
      "/projects/futdraft/grupos.png",
      "/projects/futdraft/grupos2.png",
      "/projects/futdraft/auditoria.png",
    ],
    githubUrl: "https://github.com/estefano99/Futdraft_front.git",
    githubUrlBack: "https://github.com/estefano99/Futdraft_back.git",
  }
];

export const skills: Record<string, string> = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JAVASCRIPT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TYPESCRIPT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  REACT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  NEXTJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  ASTRO: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
  NODEJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  EXPRESS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MYSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MONGODB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MONGOOSE: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
  SEQUELIZE: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
  TAILWIND: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  LARAVEL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
}