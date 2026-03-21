import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { HeroSphere } from './effects/HeroSphere';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-50 dark:to-slate-900"
      aria-labelledby="hero-title"
    >
      <div className="absolute -top-36 -left-36 w-[34rem] h-[34rem] rounded-full blur-3xl bg-blue-700/30 pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-[24rem] h-[24rem] rounded-full blur-3xl bg-violet-700/30 pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--purple-accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--blue-gradient-from)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[var(--green-accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" aria-hidden="true" />
            <span className="mono-text text-xs tracking-[0.2em] uppercase">Disponible pour projets</span>
          </div>

          <motion.h1
            id="hero-title"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="bg-gradient-to-r from-[var(--blue-gradient-from)] via-[var(--purple-accent)] to-[var(--green-accent)] bg-clip-text text-transparent">
              Bennabi Mohamed
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 mono-text tracking-[0.08em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            AI, Data Science, Programmation Web & DevOps
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Passionné par l'intelligence artificielle et le développement web moderne, je transforme
            des idées complexes en solutions innovantes et accessibles. Spécialisé dans l'automatisation
            intelligente et l'analyse de données.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90"
              aria-label="Me contacter"
            >
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              Me contacter
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('projets')}
              aria-label="Voir mes projets"
            >
              Voir mes projets
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="https://github.com/MEDMEDBEN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Profil GitHub"
            >
              <Github className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/bennabimohamed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Profil LinkedIn"
            >
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="mailto:benamo.med312@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="M'envoyer un email"
            >
              <Mail className="h-6 w-6" aria-hidden="true" />
            </a>
          </motion.div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <HeroSphere />
          </div>

          <button
            onClick={() => scrollToSection('competences')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-label="Défiler vers le bas"
          >
            <ArrowDown className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 15s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}