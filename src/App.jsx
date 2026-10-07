import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

import ProjectDetailModal from './components/modals/ProjectDetailModal';

import { DEFAULT_PROFILE, DEFAULT_PROJECTS } from './data/defaultData';

export default function App() {
  const profile = DEFAULT_PROFILE;
  const projects = DEFAULT_PROJECTS;

  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-obsidian text-zinc-900 flex flex-col font-sans selection:bg-champagne selection:text-black">
      
      {/* Sticky Navbar */}
      <Navbar profile={profile} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero profile={profile} />

        <Marquee />

        <Portfolio
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <Services />

        <About profile={profile} />

        <Contact profile={profile} onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Project Case Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Notification Toast */}
      <Toast toast={toast} />

    </div>
  );
}
