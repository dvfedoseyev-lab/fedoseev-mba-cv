/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Linkedin, Download, ExternalLink, Globe } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'motion/react';

// Configuration
const PROFILE_URL = "https://www.linkedin.com/in/dmitry-fedoseev-4270ab295"; // Change to your actual domain/profile
const CONTACT_EMAIL = "dv.fedoseyev@gmail.com";
const CONTACT_PHONE = "+1 (917) 345-6499";
const LOCATION = "Boca Raton, FL";

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-1 mb-3 section-spacing">
    {title}
  </h2>
);

const ExperienceItem = ({ company, role, period, achievements }: { company: string, role: string, period: string, achievements: string[] }) => (
  <div className="mb-4 item-spacing">
    <div className="flex justify-between items-baseline flex-wrap">
      <h3 className="text-base font-bold text-slate-900">{company}</h3>
      <span className="text-xs font-medium text-slate-500 italic">{period}</span>
    </div>
    <div className="text-sm font-semibold text-blue-700 mb-1">{role}</div>
    <ul className="list-disc list-outside ml-4 space-y-0.5">
      {achievements.map((item, idx) => (
        <li key={idx} className="text-sm text-slate-700 leading-relaxed">{item}</li>
      ))}
    </ul>
  </div>
);

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      {/* Floating Action Buttons - Hidden in Print */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 no-print z-50">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-xl hover:bg-slate-800 transition-all active:scale-95 font-medium"
        >
          <Download size={18} />
          Download PDF
        </button>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl hover:bg-blue-700 transition-all active:scale-95 font-medium"
        >
          <Mail size={18} />
          Contact
        </a>
      </div>

      {/* Main Resume Container */}
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="resume-container max-w-[850px] mx-auto bg-white shadow-2xl rounded-sm overflow-hidden print:shadow-none print:max-w-none"
      >
        {/* Header Section */}
        <div className="bg-slate-900 text-white p-8 sm:p-10 print:p-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-2">
                Dmitry Fedoseev
              </h1>
              <p className="text-blue-400 text-lg sm:text-xl font-medium mb-6">
                Operations & Strategy Leader | MBA Candidate | Multi-Site & Healthcare Operations
              </p>
              <div className="max-w-2xl text-slate-300 text-sm leading-relaxed space-y-3">
                <p>
                  Operations and regional coordination leader with 20+ years of experience managing complex, multi-unit environments across healthcare technology, higher education, and international programs.
                </p>
                <p>
                  Currently oversee multi-account operations within a U.S. healthcare workforce platform, aligning organizational policy, labor constraints, and system execution in regulated environments.
                </p>
                <p>
                  MBA candidate focused on Strategy & Organizational Leadership. Proven ability to integrate systems, lead cross-functional teams, and drive operational stability at scale.
                </p>
              </div>
            </div>

            {/* Contact Info Block */}
            <div className="flex flex-col gap-3 text-sm text-slate-300 min-w-[220px]">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400 shrink-0" />
                <span>{LOCATION}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <span>{CONTACT_PHONE}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors underline decoration-blue-400/30 underline-offset-4">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={16} className="text-blue-400 shrink-0" />
                <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-blue-400/30 underline-offset-4">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-10 print:p-6 grid grid-cols-1 md:grid-cols-3 gap-8 print:gap-6">
          
          {/* Left Column (Main Content) */}
          <div className="md:col-span-2 space-y-8 print:space-y-4">
            
            {/* Professional Experience */}
            <section>
              <SectionHeader title="Professional Experience" />
              
              <ExperienceItem 
                company="Intrigma (Healthcare Workforce Platform)"
                role="Client Operations Manager"
                period="2025 – Present"
                achievements={[
                  "Oversee 3 healthcare client accounts (50–150 providers per account)",
                  "Act as primary liaison between hospital leadership and technical teams",
                  "Translate operational constraints into system configuration and execution",
                  "Manage high-volume requests under compliance and deadline pressure",
                  "Ensure system reliability and operational continuity",
                  "Contribute to client retention through structured problem resolution"
                ]}
              />

              <ExperienceItem 
                company="University of Michigan (NCAA Division I)"
                role="Graduate Assistant – Operations"
                period="2024 – 2025"
                achievements={[
                  "Supported Division I operational logistics, compliance, and coordination",
                  "Assisted performance tracking and reporting processes",
                  "Collaborated across academic and administrative departments"
                ]}
              />

              <ExperienceItem 
                company="Florida Atlantic University (NCAA Division I)"
                role="Graduate Assistant – Operations"
                period="2023 – 2024"
                achievements={[
                  "Supported logistics, scheduling, and internal coordination",
                  "Contributed to performance tracking systems",
                  "Worked across multiple organizational units"
                ]}
              />

              <ExperienceItem 
                company="BC Peresvet-SFU / Rostov-Don-SFU (Russia)"
                role="Program Director"
                period="2017 – 2022"
                achievements={[
                  "Directed full operational management of multi-level organization",
                  "Built vertically integrated structure (youth → development → professional)",
                  "Managed budgeting, staffing, scheduling, and logistics",
                  "Led cross-functional teams (coaching, admin, medical)",
                  "Secured sponsorships and external funding",
                  "Implemented performance tracking systems"
                ]}
              />

              <ExperienceItem 
                company="Southern Federal University"
                role="Special Advisor to the President"
                period="2020 – 2022"
                achievements={[
                  "Advised on organizational strategy and development initiatives",
                  "Coordinated cross-department projects",
                  "Managed stakeholder and government relations",
                  "Contributed to infrastructure and capital planning"
                ]}
              />

              <ExperienceItem 
                company="BC Dynamo Moscow"
                role="Program Manager"
                period="2015 – 2017"
                achievements={[
                  "Managed operations, budgeting, and staff coordination",
                  "Oversaw scheduling and resource allocation"
                ]}
              />
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8 print:space-y-4">
            
            {/* Core Competencies */}
            <section>
              <SectionHeader title="Core Competencies" />
              <div className="flex flex-wrap gap-2">
                {[
                  "Multi-Account Operations",
                  "Regional Coordination",
                  "Healthcare Workforce Ops",
                  "Process Optimization",
                  "KPI Development",
                  "Cross-Functional Leadership",
                  "Organizational Structuring",
                  "Executive Communication"
                ].map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-[11px] font-semibold rounded uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionHeader title="Education" />
              <div className="space-y-4 item-spacing">
                <div>
                  <div className="text-sm font-bold text-slate-900">MBA, Strategy & Organizational Leadership</div>
                  <div className="text-xs text-slate-600">Florida Atlantic University</div>
                  <div className="text-xs text-blue-600 font-medium italic">Expected 2026</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">PhD, Education</div>
                  <div className="text-xs text-slate-600">Southern Federal University</div>
                  <div className="text-xs text-slate-400">2020</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Specialist Degree, Automation</div>
                  <div className="text-xs text-slate-600">NUST MISIS</div>
                  <div className="text-xs text-slate-400">2007</div>
                </div>
              </div>
            </section>

            {/* International Experience */}
            <section>
              <SectionHeader title="International" />
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <Globe size={14} className="text-blue-500 shrink-0 mt-1" />
                  <span>Professional leadership experience in the U.S. and Russia</span>
                </li>
                <li className="flex gap-2">
                  <Globe size={14} className="text-blue-500 shrink-0 mt-1" />
                  <span>Managed regional and national-level operations</span>
                </li>
              </ul>
            </section>

            {/* QR Code Section */}
            <section className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                Scan to View Full Profile
              </h3>
              <div className="flex justify-center mb-3">
                <QRCodeSVG 
                  value={PROFILE_URL} 
                  size={100}
                  level="H"
                  includeMargin={false}
                  className="bg-white p-1"
                />
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Scan to access full professional profile and digital portfolio
              </p>
            </section>

          </div>
        </div>

        {/* Footer (Print Only) */}
        <div className="hidden print:block border-t border-slate-100 p-4 text-center text-[9px] text-slate-400 italic">
          Dmitry Fedoseev | Operations & Strategy Leader | {CONTACT_EMAIL} | {CONTACT_PHONE}
        </div>
      </motion.main>

      {/* Footer (Web Only) */}
      <footer className="max-w-[850px] mx-auto mt-8 pb-12 text-center no-print">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Dmitry Fedoseev. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
