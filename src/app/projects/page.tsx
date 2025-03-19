import Navigation from '../../components/Navigation'

export default function ProjectsPage() {
  const projects = [
    {
      title: "OpenDC Cost Awareness",
      description: "Integrated cost awareness in OpenDC simulatiovn framework with cost based scheduling strategies for resource allocation.",
      technologies: ["Kotlin", "Java"],
      codeLink: "https://github.com/advenk/opendc/tree/cost-sch-final",
      paperLink: null
    },
    {
      title: "A Framework to Capture the Shift in Dynamics of a Multi-phase Protest",
      description: "Analyzed Hong Kong protests using Twitter data to map sentiment evolution and participant growth across the two Honk Kong protests of 2015 and 2019",
      technologies: ["Python", "NLP", "Gephi"],
      codeLink: "https://github.com/advenk/hong_kong_protests_analysis",
      paperLink: "https://www.researchgate.net/publication/351338940_A_Framework_to_Capture_the_Shift_in_Dynamics_of_a_Multi-phase_Protest-A_Case_Study_of_Hong_Kong_Protests"
    },
    {
      title: "URL Shortener",
      description: "URL shortener with JWT authentication and CRUD operations, deployed using Docker and Kubernetes.",
      technologies: ["Python", "Flask", "Docker", "Kubernetes"],
      codeLink: "https://github.com/advenk/URLShortener",
      paperLink: null
    },
    {
      title: "Social Network Graph Analysis",
      description: "Built and analyzed a social graph using co-occurrence from Harry Potter text.",
      technologies: ["Python", "Gephi", "NLP"],
      codeLink: "https://github.com/advenk/hp-social-network",
      paperLink: null
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
              <div
                key={index}
                className="block p-6 border border-[var(--text-secondary)] rounded-lg hover:neon-border transition-all"
              >
                <h2 className="text-2xl mb-2">{project.title}</h2>
                <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
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
                  <div className="flex gap-4">
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors"
                        title="View Code"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                    {project.paperLink && (
                      <a
                        href={project.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors"
                        title="View Paper"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        <span>Paper</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
} 