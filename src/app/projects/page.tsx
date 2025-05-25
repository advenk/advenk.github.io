import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const AVATAR_URL = '/AV2.jpeg';

const projects = [
  {
    title: "search2stay - Ranking and Recommending hotels",
    description: "Implemented a ranking and recommendation system for hotels using LightGBM trained on real-world expedia dataset as available on the kaggle platform. Technologies: Python, Machine Learning, Data Mining",
    imageUrl: '/project_photos/search2stay.jpeg', 
    projectUrl: "https://github.com/advenk/search2stay",
    paperLink: null
  },
  {
    title: "OpenDC Cost Awareness",
    description: "Integrated cost awareness in OpenDC simulation framework with cost based scheduling strategies for resource allocation. Technologies: Kotlin, Java.",
    imageUrl: '/project_photos/opendc.png', 
    projectUrl: "https://github.com/advenk/opendc/tree/cost-sch-final",
    paperLink: null
  },
  {
    title: "A Framework to Capture the Shift in Dynamics of a Multi-phase Protest",
    description: "Analyzed Hong Kong protests using Twitter data to map sentiment evolution and participant growth across the two Honk Kong protests of 2015 and 2019. Technologies: Python, NLP, Gephi. Paper available.", // Added note about paper
    imageUrl: '/project_photos/hk_protests.png', 
    projectUrl: "https://github.com/advenk/hong_kong_protests_analysis",
    paperLink: "https://www.researchgate.net/publication/351338940_A_Framework_to_Capture_the_Shift_in_Dynamics_of_a_Multi-phase_Protest-A_Case_Study_of_Hong_Kong_Protests"
  },
  {
    title: "URL Shortener",
    description: "URL shortener with JWT authentication and CRUD operations, deployed using Docker and Kubernetes. Technologies: Python, Flask, Docker, Kubernetes.",
    imageUrl: '/project_photos/url_shortener.png', 
    projectUrl: "https://github.com/advenk/URLShortener",
    paperLink: null
  },
  {
    title: "Social Network Graph Analysis",
    description: "Built and analyzed a social graph using co-occurrence from Harry Potter text. Technologies: Python, Gephi, NLP.",
    imageUrl: '/project_photos/hp_social_network.png', 
    projectUrl: "https://github.com/advenk/hp-social-network",
    paperLink: null
  },
  {
    title: "Web Crawler",
    description: "Built a web crawler which crawls the web based on given seed urls, extracts images based on a given aesthetic threshold evaluated via a NIMA model and stores them in a postgres db. Technologies: Python, scrapy, postgres.",
    imageUrl: '/project_photos/web_crawler.png', 
    projectUrl: "https://github.com/advenk/enakzi",
    paperLink: null
  }
];

export default function ProjectsPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-dark-bg group/design-root overflow-x-hidden">
      <Header pageTitle="Aditya's Portfolio" avatarUrl={AVATAR_URL} />
      <main className="flex-grow flex justify-center py-5 px-4 sm:px-10 md:px-40 pt-20">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-primary-text tracking-light text-[32px] font-bold leading-tight">Projects</h1>
              <p className="text-secondary-text text-sm font-normal leading-normal">A selection of projects I've worked on.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 