import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-20">
    <div className="mx-auto max-w-7xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
      >
        {title}
      </motion.h2>
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const AboutAndServices = () => {
  return (
    <div className="bg-slate-900 text-white">
      {/* About */}
      <Section id="about" title="Who We Are">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl text-white/80"
        >
          We're a small team of passionate developers from MVJCE, dedicated to empowering schools and small businesses with beautiful, affordable websites. We handle everything from design to deployment, so you can focus on your mission.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Why Choose Us?',
              text:
                'Every school and business deserves a strong online presence. Our custom sites are tailored to your needs, modern, and budget-friendly.'
            },
            {
              title: 'Our Mission',
              text:
                "Reach more people, modernize your image, and simplify operations with smart, user-friendly websites. We're gaining real-world experience and supporting our college fees by building quality websites for our clients."
            },
            {
              title: 'End-to-End Service',
              text:
                'Planning, design, development, content, hosting, security, and ongoing support — we handle every step so you get a stress-free experience.'
            }
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-white/80">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services & Pricing */}
      <Section id="services" title="What We Offer">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-3 text-white/85">
              {[
                'School Websites — admissions, galleries, announcements, dashboards',
                'Business Websites — service showcase, lead capture, trust builders',
                'Maintenance & Support — updates, security, hosting',
                'Custom Features — chatbots, portals, fee payment, and more'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 text-teal-400" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-semibold">Simple, Transparent Pricing</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { name: 'Starter Website', price: '₹9,999', desc: 'Static landing page (Basic)' },
                { name: 'Standard Website', price: '₹15,999', desc: 'Up to 3 pages + contact form' },
                { name: 'Advanced Site', price: '₹39,999', desc: 'Dashboard, CMS, login system, etc.' },
                { name: 'Custom Pricing', price: 'Contact Us', desc: 'Available for unique needs' }
              ].map((p, i) => (
                <div key={p.name} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{p.name}</p>
                    <span className="text-teal-300">{p.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/75">{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/70">
              We know budgets can be tight — that's why our packages are affordable. Custom pricing available for unique needs.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            <Star className="h-4 w-4 text-yellow-300" /> Technologies we love: React, Next.js, TypeScript, Express, Django, N8N
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default AboutAndServices;
