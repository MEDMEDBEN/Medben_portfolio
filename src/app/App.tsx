import { useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Workflows } from './components/Workflows';
import { Shop } from './components/Shop';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const PARTICLE_COLORS = [
  'rgba(37,99,235,',
  'rgba(124,58,237,',
  'rgba(5,150,105,',
  'rgba(6,182,212,',
];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

function App() {
  useEffect(() => {
    // Set page title
    document.title = 'Bennabi Mohamed - Portfolio | AI, Data Science & Web Development';

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    cursor.setAttribute('aria-hidden', 'true');

    const cursorTrail = document.createElement('div');
    cursorTrail.id = 'cursor-trail';
    cursorTrail.setAttribute('aria-hidden', 'true');

    const progress = document.createElement('div');
    progress.className = 'progress-bar';
    progress.setAttribute('aria-hidden', 'true');

    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    canvas.setAttribute('aria-hidden', 'true');

    document.body.appendChild(cursor);
    document.body.appendChild(cursorTrail);
    document.body.appendChild(progress);
    document.body.appendChild(canvas);

    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 900;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    let cursorAnimationId = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX - 6}px`;
      cursor.style.top = `${mouseY - 6}px`;
    };

    const animateCursor = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      cursorTrail.style.left = `${trailX}px`;
      cursorTrail.style.top = `${trailY}px`;
      cursorAnimationId = window.requestAnimationFrame(animateCursor);
    };

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progress.style.height = `${pct}%`;
    };

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      cursor.remove();
      cursorTrail.remove();
      progress.remove();
      canvas.remove();
      return;
    }

    let width = 0;
    let height = 0;
    const particles: Particle[] = [];
    let particleAnimationId = 0;

    const setCanvasSize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const seedParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 80; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}0.7)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const neighbor = particles[j];
          const dx = particle.x - neighbor.x;
          const dy = particle.y - neighbor.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.strokeStyle = `${particle.color}${(1 - distance / 130) * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particleAnimationId = window.requestAnimationFrame(draw);
    };

    const onResize = () => {
      setCanvasSize();
      seedParticles();
    };

    setCanvasSize();
    seedParticles();
    draw();

    if (!isTouchDevice) {
      window.addEventListener('mousemove', onMouseMove);
      animateCursor();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onScroll();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.cancelAnimationFrame(particleAnimationId);
      window.cancelAnimationFrame(cursorAnimationId);
      cursor.remove();
      cursorTrail.remove();
      progress.remove();
      canvas.remove();
    };
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('section, footer, .bennabi-card'));
    targets.forEach((target) => target.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('up');
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.bennabi-card')) as HTMLElement[];

    const cleanups = cards.map((card) => {
      const onMouseMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-4px) rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
      };

      const onMouseLeave = () => {
        card.style.transform = '';
      };

      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);

      return () => {
        card.removeEventListener('mousemove', onMouseMove);
        card.removeEventListener('mouseleave', onMouseLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div className="min-h-screen portfolio-bennabi">
      <Navigation />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <Workflows />
        <Shop />
        <Contact />
      </main>

      <Footer />

      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
