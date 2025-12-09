import React from 'react';
import work_img from '../assets/images/work_img.png'; // keep your hero image
import projects from '../assets/project/projects.json';
import ProjectCard from '../components/ProjectCard';

const Works = () => {
  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section
        className="mt-[5%] relative h-[70vh] md:h-[88vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${work_img})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Works</h2>
          <p className="text-lg md:text-xl mb-6">
            Projects we built — open them to see tech stacks and client reviews.
          </p>

          <a href="#projects" className="mt-4 inline-block px-8 py-3 bg-purple-700 text-white text-lg font-semibold rounded-full hover:bg-purple-800 transition">
            See Projects
          </a>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section id="projects" className="container mx-auto px-4 py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Works;
