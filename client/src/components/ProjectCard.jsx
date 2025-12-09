import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  // Vite-friendly image URL resolution
  const imageUrl = new URL(`../assets/project/${project.image}`, import.meta.url).href;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <img src={imageUrl} alt={project.title} className="w-full h-56 object-fit" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStacks.slice(0, 6).map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md border border-gray-200">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Link
            to={`/works/${project.slug}`}
            className="px-4 py-2 rounded-full text-white bg-purple-600 hover:bg-purple-800 transition font-medium"
          >
            Learn more
          </Link>

          <span className="text-sm text-gray-500">Client review</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
