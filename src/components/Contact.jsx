import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check } from 'lucide-react';

const Contact = () => {
  const email = 'hello@buildforu.dev';
  const phone = '+91 90000 00000';
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
        >
          Let's Build Your Website!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 max-w-3xl text-white/80"
        >
          Ready to get started? Contact us for a free quote and let's make your vision a reality.
        </motion.p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">Phone</label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
                  placeholder="Optional"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Your Requirements</label>
                <textarea
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
                  placeholder="Tell us a bit about your project"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                className="rounded-lg bg-teal-500 px-5 py-2.5 font-medium text-slate-900 transition hover:bg-teal-400"
              >
                Submit
              </button>
              <a
                href={`mailto:${email}`}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 hover:bg-white/10"
              >
                Or email us directly
              </a>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-white/80">
              Reach out and let's discuss how we can help you achieve your goals.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-white/85">
                <Mail className="h-4 w-4 text-teal-300" /> {email}
              </div>
              <div className="flex items-center gap-3 text-white/85">
                <Phone className="h-4 w-4 text-teal-300" /> {phone}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-teal-300" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-teal-300" /> Copy my email address
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              <p className="font-medium">My approach</p>
              <ol className="mt-3 space-y-2">
                <li>
                  <span className="font-semibold">Phase 1:</span> Planning & Strategy — goals, audience, structure, content.
                </li>
                <li>
                  <span className="font-semibold">Phase 2:</span> Development & Progress Update — collaborative, iterative builds.
                </li>
                <li>
                  <span className="font-semibold">Phase 3:</span> Development & Launch — quality checks and smooth go-live.
                </li>
              </ol>
            </div>

            <p className="mt-8 text-xs text-white/60">
              Copyright © 2025 BuildForU
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
