import { ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-[#0099ff] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#0099ff]/20">
      <div className="aspect-video w-full overflow-hidden bg-gray-900">
        <img
          src={project.images[0]}
          alt={project.nom}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-[#0099ff] transition-colors">
            {project.nom}
          </h3>
          {project.lien && (
            <a
              href={project.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0099ff] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technos.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-[#0099ff]/20 text-[#0099ff] rounded-full border border-[#0099ff]/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0099ff] rounded-xl pointer-events-none transition-all duration-300"></div>
    </div>
  );
}
