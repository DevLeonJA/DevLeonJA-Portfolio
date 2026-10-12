import { ProjectCard, Project } from "./project-card"

const webProjects: Project[] = [
  {
    title: "Sistema RAG con Búsqueda Vectorial",
    description: "Desarrollo de un sistema de generación aumentada por recuperación (RAG) para consultas inteligentes a documentos. Utiliza flujos de IA avanzados para optimizar el contexto y reducir alucinaciones en los modelos generativos.",
    image: "/projects/rag-project.jpg", 
    technologies: ["Python", "MongoDB Atlas Vector Search", "LangChain", "Embeddings"],
    repoUrl: "https://github.com/DevLeonJA/RAG_Estudio" 
  }
  ,
  {
    title: "Inazuma Victory Road Foro",
    description: "Foro dedicado a la comunidad de Inazuma Victory Road para discutir sobre alineaciones usando un drag and drop para añadir los jugadores.",
    image: "/projects/VRF.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "React.js", "Python"],
    demoUrl: "https://victoryroadforo.vercel.app",
    repoUrl: "https://github.com/DevLeonJA/inazuma-foro",
  },
]

export function WebsSection() {
  return (
    <section id="webs" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Proyectos Web
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis proyectos web más destacados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
