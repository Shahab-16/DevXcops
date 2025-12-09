import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../assets/project/projects.json';

const StatCard = ({ label, value }) => (
  <div className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
    <div className="text-2xl font-bold text-black">{value}</div>
    <div className="text-sm text-gray-500 mt-1">{label}</div>
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-block text-xs font-medium px-3 py-1 rounded-full border border-gray-200 bg-white/80">
    {children}
  </span>
);

const Feature = ({ children }) => (
  <li className="flex items-start gap-3 mb-3">
    <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 111.414-1.414L8.414 12.172l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
    <span className="text-gray-700">{children}</span>
  </li>
);

const WorkDetail = () => {
  const { workName } = useParams();
  const project = projects.find((p) => p.slug === workName);

  if (!project) {
    return (
      <div className="mt-[5%] min-h-[60vh] flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
          <Link to="/works" className="px-4 py-2 rounded-full text-white bg-purple-600 hover:bg-purple-800 transition">
            Back to Works
          </Link>
        </div>
      </div>
    );
  }

  // hero image (vite-friendly)
  const heroUrl = new URL(`../assets/project/${project.image}`, import.meta.url).href;

  return (
    <div className="bg-[#fff] text-black mt-[5%]">
      {/* HERO */}
      <section
        className="relative md:h-[56vh] lg:h-[85vh] bg-fit bg-center flex items-center"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.4)), url(${heroUrl})` }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{project.title}</h1>
            <p className="text-white/90 mt-4 text-lg md:text-xl">{project.shortDescription}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.techStacks.slice(0, 6).map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-800 text-white font-medium transition">
                  View Live
                </a>
              ) : (
                <button className="px-5 py-2 rounded-full bg-purple-600 text-white font-medium opacity-90 cursor-not-allowed">View Live</button>
              )}

              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full border border-gray-200 text-black bg-white hover:shadow">
                  View Repo
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left / Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-700 mb-4">{project.longDescription}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm text-gray-500">Industry</h4>
                  <div className="mt-2 text-black font-medium">{project.industry || 'Education / HR'}</div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Duration</h4>
                  <div className="mt-2 text-black font-medium">{project.duration || '3 months'}</div>
                </div>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Problem</h3>
                <span className="text-sm text-gray-500">What the client faced</span>
              </div>
              <p className="mt-3 text-gray-700">{project.problemStatement}</p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold">Solution</h3>
                <p className="mt-3 text-gray-700">{project.solutionSummary}</p>

                <ul className="mt-4">
                  {project.features.map((f, idx) => (
                    <Feature key={idx}>{f}</Feature>
                  ))}
                </ul>
              </div>
            </div>

            {/* Impact / Metrics */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Impact & Results</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <StatCard label="Uptime / Availability" value={project.metrics.uptime || '99.9%'} />
                <StatCard label="Test Coverage" value={project.metrics.tests || '—'} />
                <StatCard label="Users (first 3 months)" value={project.metrics.users || project.metrics.firstUsers || '1,200'} />
                <StatCard label="Conversion uplift" value={project.metrics.conversion || project.metrics.uplift || '18%'} />
              </div>

              <p className="text-gray-700">{project.impactSummary}</p>
            </div>

            {/* Gallery / Screenshots */}
            {project.screenshots?.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Screenshots</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.screenshots.map((img, i) => {
                    const src = new URL(`../assets/project/${img}`, import.meta.url).href;
                    return (
                      <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-44 object-cover rounded-lg border" />
                    );
                  })}
                </div>
                <p className="text-sm text-gray-500 mt-3">Screenshots are representative — full demo available on request.</p>
              </div>
            )}
          </div>

          {/* Right aside */}
          <aside className="space-y-6">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <img src={heroUrl} alt={`${project.title} thumbnail`} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <div className="text-sm text-gray-500">Client</div>
                  <div className="font-medium text-black">{project.clientName || 'Confidential Client'}</div>
                  <div className="text-xs text-gray-400 mt-1">{project.role || 'Design + Development'}</div>
                </div>
              </div>

              <div className="mt-5">
                <h5 className="text-sm text-gray-600 mb-2">Project quick facts</h5>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Team size</span>
                    <span className="font-medium text-black">{project.teamSize || '4'}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Role</span>
                    <span className="font-medium text-black">{project.role || 'Frontend + Backend'}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Completed</span>
                    <span className="font-medium text-black">{project.completedAt || project.year || '2025'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <Link to="/works" className="px-4 py-2 rounded-full text-white bg-purple-600 hover:bg-purple-800 transition text-sm">
                  Back to works
                </Link>
                {project.caseStudyUrl && (
                  <a href={project.caseStudyUrl} className="px-4 py-2 rounded-full border border-gray-200 text-sm" target="_blank" rel="noreferrer">
                    Download Case Study
                  </a>
                )}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold mb-3">Client review</h4>
              <blockquote className="text-sm text-gray-700 italic">“{project.clientReview}”</blockquote>

              <div className="mt-4">
                <div className="text-sm text-gray-500 mb-2">Tech stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.techStacks.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border border-gray-200 bg-white/90">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-5 text-sm text-gray-600">
              <h5 className="font-medium mb-2">Contact</h5>
              <p>If you'd like a full demo or architecture walkthrough, reach out and we’ll schedule a session.</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default WorkDetail;
