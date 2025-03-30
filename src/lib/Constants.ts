export interface IProject {
  id: number
  title: string
  description: string
  tags: string[]
  images: string[]
  demoUrl?: string
  githubUrl: string
  githubUrlBack?: string
}

export const projects: IProject[] = [
  {
    id: 0,
    title: "Landing page Tanoni Agro",
    description:
      "Diseñé y desarrollé la landing page para Tanoni Agro en idioma Español e Ingles. Transmite el lema Conectando el campo con el mercado e incluye secciones como Nostros, Que hacemos, contacto y un diseño responsive optimizado para distintos dispositivos.",
    tags: ["Astro", "JavaScript", "Tailwind CSS"],
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
      "Sistema de gestión inmobiliaria con administración de contratos, alertas de vencimientos y aumentos automáticos. Permite gestionar locadores, locatarios, inmuebles, tipos de contrato e historial detallado de cada operación",
    tags: ["React", "React-query", "TypeScript", "Tailwind CSS", "shadcn/ui", "Node.js", "Express", "Sequelize", "Mysql", "JWT"],
    images: [
      "/projects/contratos.png",
      "/projects/aumentoImportes.png",
      "/projects/historialContrato.png",
      "/projects/dashboardInmo.png",
    ],
    githubUrl: "https://github.com/estefano99/Inmobiliaria_front.git",
    githubUrlBack: "https://github.com/julibosch/Inmobiliaria_back.git",
  },
  {
    id: 3,
    title: "Compra-venta",
    description:
      "Sistema de gestión para una bicicletería con control de stock, registro de compras y ventas, aumentos de precios masivos por filtros personalizados y un dashboard con métricas claves del negocio.",
    tags: ["React", "React-query", "TypeScript", "Tailwind CSS", "shadcn/ui", "Node.js", "Express", "Sequelize", "Mysql", "JWT"],
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
      "Sistema de reservas para canchas de fútbol 5 con calendario interactivo y configuración de horarios por cancha y por día. Incluye un panel de reportes con gráficos y un robusto sistema de gestión de permisos, que permite crear grupos y usuarios, asignar permisos por módulos y acciones de formularios, y aplicarlos tanto de forma individual como a través de los grupos a los que pertenece cada usuario. Ademas cuenta con auditorias de Login-Logout, Gestion de mantenimiento de las canchas asignado a los empleados",
    tags: ["React", "JavaScript", "Tailwind CSS", "Material Tailwind/ui", "React Big Calendar", "PHP", "Laravel", "Mysql", "JWT"],
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
    demoUrl: "#",
    githubUrl: "#",
  },
]