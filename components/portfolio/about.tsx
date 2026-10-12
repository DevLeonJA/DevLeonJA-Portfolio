import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const skills = [
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    "Node.js", "Python", "Java", "C++", "JavaScript", "HTML", "CSS",
    "JUnit (iniciándome)", "PostgreSQL", "MongoDB Atlas Vector Search",
    "LangChain", "Búsqueda Vectorial (RAG)", "Embeddings", "Supabase", "Git/GitHub"
  ]

  return (
    <section id="about" className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Sobre Mí</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Soy estudiante de Ingeniería Informática con mención en Ingeniería del Software por la Universidad de Huelva. Me apasiona construir soluciones tecnológicas robustas.
            </p>
            <p>
              Tengo sólida experiencia en el desarrollo de arquitecturas web (Next.js, React), sistemas backend y bases de datos relacionales y NoSQL. Recientemente, me he especializado en la integración de Inteligencia Artificial utilizando <strong>Retrieval-Augmented Generation (RAG)</strong>.
            </p>
            <p>
              Mi enfoque actual está en emplear herramientas como <strong>LangChain</strong>, modelos de <strong>Embeddings</strong> y <strong>MongoDB Atlas Vector Search</strong> para construir agentes y sistemas de IA capaces de consultar documentos y datos complejos, optimizando el contexto y garantizando resultados precisos.
            </p>
            <p>
              También desarrollo con <strong>Java</strong>, tanto para diseño web como para aplicaciones de consola, y con <strong>C++</strong> para aplicaciones de consola. Actualmente estoy iniciándome en la creación de pruebas con <strong>JUnit</strong> y continúo reforzando mis conocimientos de <strong>JavaScript</strong>, <strong>HTML</strong> y <strong>CSS</strong>.
            </p>
          </div>
        </div>
        <Card className="bg-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Habilidades Técnicas e IA</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}