import { Code, Database, Brain, Server, Workflow, GitBranch } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface Skill {
  category: string;
  icon: React.ReactNode;
  description: string;
  technologies: { name: string; utility: string }[];
  color: string;
}

const skills: Skill[] = [
  {
    category: 'Programmation',
    icon: <Code className="h-6 w-6" />,
    description: 'Langages et frameworks de développement',
    color: 'text-blue-600',
    technologies: [
      { name: 'Python', utility: 'Data Science, IA, automatisation backend, scripts ML' },
      { name: 'JavaScript/TypeScript', utility: 'Applications web modernes, React, Node.js' },
      { name: 'React', utility: 'Interfaces utilisateur interactives et performantes' },
      { name: 'Next.js', utility: 'Applications web full-stack avec SSR/SSG' },
      { name: 'Tailwind CSS', utility: 'Design système rapide et responsive' },
    ],
  },
  {
    category: 'Data Science & IA',
    icon: <Brain className="h-6 w-6" />,
    description: 'Intelligence artificielle et analyse de données',
    color: 'text-purple-600',
    technologies: [
      { name: 'TensorFlow/PyTorch', utility: 'Modèles de deep learning et réseaux neuronaux' },
      { name: 'Scikit-learn', utility: 'Machine learning classique, prédictions, clustering' },
      { name: 'Pandas/NumPy', utility: 'Analyse et manipulation de données massives' },
      { name: 'OpenAI API', utility: 'Intégration de modèles de langage avancés (GPT)' },
      { name: 'Computer Vision', utility: 'Détection d\'objets, classification d\'images' },
      { name: 'NLP', utility: 'Traitement du langage naturel, analyse de sentiments' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: <Server className="h-6 w-6" />,
    description: 'Infrastructure et déploiement',
    color: 'text-green-600',
    technologies: [
      { name: 'Docker', utility: 'Conteneurisation d\'applications, environnements isolés' },
      { name: 'Kubernetes', utility: 'Orchestration de containers à grande échelle' },
      { name: 'AWS/Azure', utility: 'Hébergement cloud, services managés, CI/CD' },
      { name: 'GitHub Actions', utility: 'Automatisation des workflows de développement' },
      { name: 'Nginx', utility: 'Reverse proxy, load balancing, serveur web' },
    ],
  },
  {
    category: 'Bases de données',
    icon: <Database className="h-6 w-6" />,
    description: 'Gestion et optimisation des données',
    color: 'text-orange-600',
    technologies: [
      { name: 'PostgreSQL', utility: 'Base de données relationnelle robuste et performante' },
      { name: 'MongoDB', utility: 'Base NoSQL pour données non structurées' },
      { name: 'Redis', utility: 'Cache en mémoire, sessions, file d\'attente' },
      { name: 'Supabase', utility: 'Backend-as-a-Service avec authentification et stockage' },
    ],
  },
  {
    category: 'Automatisation',
    icon: <Workflow className="h-6 w-6" />,
    description: 'Workflows et processus automatisés',
    color: 'text-cyan-600',
    technologies: [
      { name: 'N8n', utility: 'Automatisation de workflows, intégrations sans code' },
      { name: 'Zapier', utility: 'Connexion d\'applications, automatisation business' },
      { name: 'Python Scripts', utility: 'Scripts personnalisés pour tâches répétitives' },
      { name: 'Selenium', utility: 'Automatisation de tests et web scraping' },
    ],
  },
  {
    category: 'Outils & Versioning',
    icon: <GitBranch className="h-6 w-6" />,
    description: 'Collaboration et gestion de code',
    color: 'text-red-600',
    technologies: [
      { name: 'Git/GitHub', utility: 'Versioning de code, collaboration en équipe' },
      { name: 'VS Code', utility: 'Éditeur de code moderne avec extensions' },
      { name: 'Postman', utility: 'Tests et documentation d\'APIs' },
      { name: 'Figma', utility: 'Design d\'interfaces et prototypage' },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="competences"
      className="py-20"
      aria-labelledby="skills-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="skills-title" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--blue-gradient-from)] to-[var(--purple-accent)] bg-clip-text text-transparent">
              Compétences & Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies maîtrisées et leurs applications concrètes dans le monde professionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`bennabi-card p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20 ${
                index % 2 === 0 ? '' : 'mauve'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${skill.color}`} aria-hidden="true">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>

              <Accordion type="single" collapsible>
                <AccordionItem value="technologies" className="border-0">
                  <AccordionTrigger className="text-sm hover:no-underline py-2">
                    <span className="flex items-center gap-2">
                      <Badge variant="secondary">
                        {skill.technologies.length} technologies
                      </Badge>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="p-3 bg-muted/50 rounded-md hover:bg-muted transition-colors"
                        >
                          <div className="font-medium text-sm mb-1">{tech.name}</div>
                          <div className="text-xs text-muted-foreground italic">
                            → {tech.utility}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            💡 Cliquez sur "technologies" pour découvrir les cas d'usage de chaque compétence
          </p>
        </div>
      </div>
    </section>
  );
}
