import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS_LIST } from '../data/projectsData';
import { MachineryVisual } from './MachineryVisuals';
import { ArrowRight, MapPin, Calendar, CheckCircle2, Building, HardHat } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Commercial' | 'Infrastructure' | 'Industrial'>('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F5F7FA] border-b border-[#E8EDF3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#09295B] text-xs font-black tracking-[0.25em] uppercase mb-3">
              <span className="w-5 h-[2px] bg-[#F4C400]" />
              <span>PROJECT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#061C3D] font-heading uppercase tracking-tight">
              Powering Projects That Move the World
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Commercial', 'Infrastructure', 'Industrial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as any)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs border transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#09295B] text-white border-[#09295B]'
                    : 'bg-white text-[#172033] border-[#CBD5E1] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Project Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-[#E8EDF3] rounded-xs shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Area with Overlay Gradient */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#061C3D]">
                  <div className="transition-transform duration-700 group-hover:scale-105 w-full h-full">
                    <MachineryVisual type={project.imageType} className="h-full" />
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-[#09295B] text-white px-3 py-1 text-[11px] font-black uppercase tracking-wider rounded-xs border border-[#123D78] shadow-sm">
                    {project.category}
                  </div>

                  {/* Top Right Metric Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-[#F4C400] text-[#061C3D] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-xs shadow-sm">
                    {project.badge}
                  </div>

                  {/* Location Overlay Badge Bottom */}
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 text-white text-xs font-medium bg-[#061C3D]/80 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-[#F4C400]" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#667085] mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#09295B]" />
                    <span>TIMELINE: {project.year}</span>
                  </div>

                  <h3 className="text-xl font-black text-[#061C3D] font-heading uppercase tracking-tight mb-3 group-hover:text-[#09295B] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#667085] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Output Volume Highlight Banner */}
                  <div className="bg-[#F5F7FA] border-l-4 border-[#F4C400] p-3 rounded-xs mb-4">
                    <div className="text-[10px] font-mono-tech uppercase text-[#667085]">CONCRETE VOLUME POURED</div>
                    <div className="text-sm font-black text-[#061C3D] font-mono-tech mt-0.5">
                      {project.volumeOutput}
                    </div>
                  </div>

                  {/* Machinery Employed */}
                  <div className="text-[11px] text-[#09295B] font-bold bg-[#E8EDF3]/60 p-2.5 rounded-xs">
                    <span className="text-[#667085] font-normal uppercase block text-[9px] mb-0.5">EQUIPMENT COMMISSIONED</span>
                    {project.equipmentUsed}
                  </div>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#E8EDF3] flex items-center justify-between text-xs font-bold text-[#09295B] group-hover:text-[#C92323] transition-colors">
                  <span className="uppercase tracking-wider">Client: {project.clientType}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
