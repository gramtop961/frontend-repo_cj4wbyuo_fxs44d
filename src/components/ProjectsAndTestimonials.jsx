import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const ProjectCard = ({ title, domain, desc, tech, href }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5"
  >
    <div className="h-32 w-full bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-blue-500/20" />
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 transition hover:bg-white/10"
        >
          <ExternalLink className="h-3.5 w-3.5" /> Check Live Site
        </a>
      </div>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
      <div className="mt-3 text-xs text-teal-300">{domain}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Testimonial = ({ quote, name, role }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="rounded-xl border border-white/10 bg-white/5 p-6"
  >
    <div className="flex items-center gap-2 text-yellow-300">
      <Star className="h-4 w-4" /> <Star className="h-4 w-4" /> <Star className="h-4 w-4" /> <Star className="h-4 w-4" /> <Star className="h-4 w-4" />
    </div>
    <p className="mt-3 text-white/85">“{quote}”</p>
    <p className="mt-4 text-sm text-white/70">{name} — {role}</p>
  </motion.div>
);

const ProjectsAndTestimonials = () => {
  return (
    <div id="projects" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
        >
          A small selection of recent projects
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="JPR Public School"
            domain="jprpublicschool.com"
            desc="A clean, professional school website with dashboard and notice board integration."
            tech={['Django', 'PostgreSQL', 'Railway', 'HTML', 'CSS', 'JavaScript']}
            href="https://jprpublicschool.com"
          />
          <ProjectCard
            title="Whitefield International Islamic School"
            domain="wiis.in"
            desc="Modern school website with admission forms, photo galleries, announcements, and a student dashboard."
            tech={['React', 'Tailwind CSS', 'TypeScript']}
            href="https://wiis.in"
          />
          <ProjectCard
            title="ANS Title Solution"
            domain="anstitlesolution.com"
            desc="Business website featuring service showcase, lead capture, and contact integration."
            tech={['HTML5', 'CSS', 'JavaScript', 'PHP']}
            href="https://anstitlesolution.com"
          />
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-16 bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent"
        >
          Kind words from satisfied clients
        </motion.h3>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Testimonial
            quote="The team created a beautiful website for our school. It's user-friendly, and the dashboard has been a game-changer."
            name="Principal, WIIS"
            role="School Principal"
          />
          <Testimonial
            quote="Working with this team was a fantastic experience. They delivered on time and exceeded expectations."
            name="Amit Kumar, JPR Public School"
            role="Founder"
          />
          <Testimonial
            quote="Professional, responsive, and creative. Highly recommend for any school or business!"
            name="Najib, ANS Title Solution"
            role="Business Manager"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndTestimonials;
