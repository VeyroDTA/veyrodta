import { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">PROJELERİMİZ</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Tasarladığımız Dijital Deneyimler</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group bg-[#0D1736] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1"
          >
            <div className="aspect-video bg-slate-950 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {project.concept && (
                <span className="absolute top-4 left-4 text-[11px] font-bold text-amber-300 bg-slate-950/80 backdrop-blur-sm border border-amber-500/40 px-3 py-1 rounded-full uppercase tracking-wide">
                  Konsept Çalışma
                </span>
              )}
            </div>
            <div className="p-8">
              <span className="text-xs text-cyan-400 font-bold">{project.category}</span>
              <h3 className="text-2xl font-black text-white mt-1 mb-2">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-6">{project.tags.join(' · ')}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-white font-bold text-sm hover:text-cyan-300 cursor-pointer inline-flex items-center space-x-1"
              >
                <span>Projeyi İncele (Case Study)</span>
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
