import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string; // Optional project link
}

export default function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div className="p-2">
      <div className="flex flex-col max-w-sm mx-auto bg-dark-bg-alt rounded-lg overflow-hidden shadow-lg">
        {/* Image at the top */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        
        {/* Content below image */}
        <div className="p-4 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-primary-text text-lg font-bold leading-tight">{title}</h3>
            <p className="text-secondary-text text-sm font-normal leading-normal">
              {description}
            </p>
          </div>
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg h-8 px-4 bg-accent-bg text-primary-text text-sm font-medium leading-normal hover:bg-accent-bg-alt transition-colors w-full"
            >
              <span className="truncate">View Project</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 