import Navigation from '../../components/Navigation'

export default function ProjectsPage() {
  const projects = [
    {
      title: "OpenDC Cost Awareness",
      description: "Integrated cost awareness in OpenDC simulation framework with cost based scheduling strategies for resource allocation.",
      technologies: ["Kotlin", "Java"],
      link: "https://github.com/advenk/opendc/tree/cost-sch-final"
    },
    {
      title: "URL Shortener",
      description: "URL shortener with JWT authentication and CRUD operations, deployed using Docker and Kubernetes.",
      technologies: ["Python", "Flask", "Docker", "Kubernetes"],
      link: "https://github.com/advenk/URLShortener"
    },
    {
      title: "Social Network Graph Analysis",
      description: "Built and analyzed a social graph using co-occurrence from Harry Potter text.",
      technologies: ["Python", "Gephi", "NLP"],
      link: "https://github.com/advenk/hp-social-network"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-light mb-12 neon-text">Projects</h1>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border border-[var(--text-secondary)] rounded-lg hover:neon-border transition-all"
              >
                <h2 className="text-2xl mb-2">{project.title}</h2>
                <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm border border-[var(--text-secondary)] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  )
} 