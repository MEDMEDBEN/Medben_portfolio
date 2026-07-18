import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import tahourImg from '@/assets/projects/tahour.png';
import yamopsImg from '@/assets/projects/yamops-monitoring.png';
import visualisationImg from '@/assets/projects/visualisation-waste.png';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  links: { label: string; url: string; icon?: React.ReactNode }[];
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'MyPrescription',
    description: 'Plateforme médicale complète pour cabinets et praticiens',
    longDescription:
      "Écosystème de gestion de cabinet médical conforme RGPD/ANPDP : dossiers patients, ordonnances, rendez-vous, facturation et assistant IA. Architecture polyrepo — application web (Next.js), API REST (Bun / Express / PostgreSQL), application desktop offline-first (Electron), application mobile (React Native) et chatbot IA (FastAPI / LangChain).",
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Bun',
      'Express',
      'PostgreSQL',
      'Electron',
      'React Native',
      'FastAPI',
      'LangChain',
    ],
    image: 'https://images.unsplash.com/photo-1758691461916-dc7894eb8f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJlc2NyaXB0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQwNzkzODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'border-blue-500/20',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/myprescription2026',
        icon: <Github className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Tahour (طاهور)',
    description: 'Super-app de la pharmacie algérienne',
    longDescription:
      "Application mobile pour trouver et réserver des médicaments en officine, localiser les pharmacies de garde et conventionnées Chifa, et envoyer une photo d'ordonnance aux pharmacies proches pour vérifier la disponibilité en temps réel. Interface bilingue français / arabe avec support RTL complet et animation de matching signature.",
    technologies: ['Expo', 'React Native', 'TypeScript', 'Zustand', 'Reanimated 3', 'Expo Router', 'i18next'],
    image: tahourImg,
    color: 'border-emerald-500/20',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MEDMEDBEN/Tahour',
        icon: <Github className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'YamOps — Monitoring Dashboard',
    description: "Tableau de bord de supervision d'infrastructure en temps réel",
    longDescription:
      "Dashboard de supervision (SSR) pour piloter une infrastructure Docker en temps réel : état des conteneurs, pipeline de déploiement, CPU et mémoire par service, flux d'activité et suivi des incidents. Rendu côté serveur avec React 19, Express et Vite pour des performances optimales. Déployé en production pour superviser l'infrastructure MyPrescription.",
    technologies: ['React 19', 'Express 5', 'Vite', 'SSR', 'Node.js', 'Docker'],
    image: yamopsImg,
    color: 'border-cyan-500/20',
    links: [
      {
        label: 'Voir le dashboard',
        url: 'https://yamops.afaq.sa:8444/',
        icon: <ExternalLink className="h-4 w-4" />,
      },
      {
        label: 'GitHub',
        url: 'https://github.com/MEDMEDBEN',
        icon: <Github className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'ISEO — Sécurité & Assistant IA',
    description: "Site vitrine 3D immersif + assistant de vente IA multicanal",
    longDescription:
      "Écosystème digital complet pour ISEO (sécurité et serrurerie, 30 ans d'expertise en Algérie) : site vitrine haut de gamme Next.js avec expérience 3D interactive (Three.js / R3F, GSAP, scroll storytelling), catalogue produits et ~58 pages bilingues FR/AR. Couplé à un assistant de vente IA multicanal (WhatsApp, Telegram, Messenger) : RAG sur le catalogue, LLM configurable (Gemini / OpenAI / Groq), sécurité anti-injection et anti-spam intégrée.",
    technologies: ['Next.js 15', 'React 19', 'Three.js', 'GSAP', 'Flask', 'RAG', 'LLM', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: 'border-amber-500/20',
    links: [
      {
        label: 'Voir le site',
        url: 'https://iseo-site.vercel.app',
        icon: <ExternalLink className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Data Viz — Déchets urbains',
    description: 'Dashboard interactif de visualisation de données (D3.js)',
    longDescription:
      "Tableau de bord analytique pour explorer et visualiser des données environnementales sur la gestion des déchets (étude de cas : rivière Yamuna, Inde). Visualisations sur-mesure entièrement construites avec D3.js (dont diagrammes de Sankey), thème sombre glassmorphism, navigation multi-pages (analyse, solutions, interprétation).",
    technologies: ['React 19', 'Vite', 'D3.js', 'd3-sankey', 'React Router'],
    image: visualisationImg,
    color: 'border-teal-500/20',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MEDMEDBEN',
        icon: <Github className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Brain Tumor Classification',
    description: 'Détection de tumeurs cérébrales par CNN et Machine Learning',
    longDescription:
      "Système de classification binaire de tumeurs cérébrales combinant deux approches : un CNN analysant directement les images IRM, et un modèle ML classant à partir de données patient (âge, symptômes). Architecture modulaire avec pipelines d'entraînement, serveur d'inférence FastAPI, interface Streamlit, conteneurisation Docker et intégration CI/CD Azure Pipelines.",
    technologies: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'FastAPI', 'Streamlit', 'Docker', 'Azure'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: 'border-rose-500/20',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MEDMEDBEN',
        icon: <Github className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'Majlis',
    description: 'Plateforme collaborative de gestion de réunions et décisions',
    longDescription:
      'Application web moderne pour orchestrer des réunions efficaces, prendre des décisions collaboratives, gérer des ordres du jour et suivre les actions. Intégration avec calendriers et notifications intelligentes.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'WebSocket', 'Redis'],
    image: 'https://images.unsplash.com/photo-1760611656615-db3fad24a314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzQwNzkzODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'border-purple-500/20',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/MEDMEDBEN',
        icon: <Github className="h-4 w-4" />,
      },
      {
        label: 'Site web',
        url: 'https://majlis.com',
        icon: <ExternalLink className="h-4 w-4" />,
      },
    ],
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Tableau de bord analytique alimenté par IA',
    longDescription:
      'Dashboard interactif pour visualiser et analyser des données complexes avec des prédictions IA en temps réel. Graphiques dynamiques, alertes intelligentes et rapports automatisés.',
    technologies: ['React', 'Python', 'FastAPI', 'Scikit-learn', 'Recharts', 'AWS'],
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQwNzkzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'border-green-500/20',
    links: [
      {
        label: 'Demo',
        url: 'https://demo.com',
        icon: <ExternalLink className="h-4 w-4" />,
      },
    ],
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projets"
      className="py-20"
      aria-labelledby="projects-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="projects-title" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--purple-accent)] to-[var(--green-accent)] bg-clip-text text-transparent">
              Projets Réalisés
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes projets les plus significatifs en développement web et IA
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Project Card */}
          <Card
            className={`bennabi-card border-2 ${currentProject.color} shadow-xl transition-all duration-500 animate-in fade-in`}
          >
            <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
              <ImageWithFallback
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-background/80 backdrop-blur-sm">
                  {currentIndex + 1} / {projects.length}
                </Badge>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">{currentProject.title}</CardTitle>
              <CardDescription className="text-base">
                {currentProject.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground mb-6">{currentProject.longDescription}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-3">Technologies utilisées :</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-wrap gap-3">
              {currentProject.links.map((link, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? 'default' : 'outline'}
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                  </a>
                </Button>
              ))}
            </CardFooter>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              aria-label="Projet précédent"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                  aria-label={`Aller au projet ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              aria-label="Projet suivant"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Project Grid Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                  index === currentIndex
                    ? 'border-primary bg-primary/5 scale-105'
                    : 'border-border hover:border-primary/50 hover:scale-102'
                }`}
                aria-label={`Sélectionner ${project.title}`}
              >
                <h4 className="font-semibold mb-1 text-sm">{project.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}