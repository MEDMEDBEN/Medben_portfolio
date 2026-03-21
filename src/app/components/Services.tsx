import {
  BarChart3,
  Brain,
  Globe,
  Smartphone,
  ServerCog,
  ShoppingCart,
  Zap,
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
};

const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Applications & Sites Web',
    description:
      "Pages web personnalisées, boutiques en ligne avec déploiement, sites officiels d'entreprise et applications web complexes — responsive, performantes et optimisées SEO.",
    icon: <Globe className="h-6 w-6" />,
    tags: ['React', 'Next.js', 'Django', 'FastAPI', 'Vercel'],
  },
  {
    number: '02',
    title: 'Algorithmes IA & Computer Vision',
    description:
      "Systèmes de reconnaissance faciale, détection d'objets, analyse de sentiment, chatbots intelligents, et toute fonctionnalité IA utile à votre domaine métier.",
    icon: <Brain className="h-6 w-6" />,
    tags: ['OpenCV', 'TensorFlow', 'PyTorch', 'LangChain', 'Ollama'],
  },
  {
    number: '03',
    title: 'Apps Mobile & Desktop',
    description:
      'Applications iOS/Android avec React Native et applications desktop multi-plateformes avec Electron — UX soignée et performances natives.',
    icon: <Smartphone className="h-6 w-6" />,
    tags: ['React Native', 'Electron', 'Expo', 'Cross-platform'],
  },
  {
    number: '04',
    title: 'Pipelines Data & Dashboards',
    description:
      'Collecte, traitement et visualisation de vos données. Tableaux de bord analytiques en temps réel pour piloter vos décisions métier.',
    icon: <BarChart3 className="h-6 w-6" />,
    tags: ['Pandas', 'Plotly', 'Streamlit', 'Power BI'],
  },
  {
    number: '05',
    title: 'DevOps & Déploiement',
    description:
      'Containerisation, orchestration, CI/CD et mise en production sécurisée. Vos applications déployées, scalables et hautement disponibles.',
    icon: <ServerCog className="h-6 w-6" />,
    tags: ['Docker', 'Kubernetes', 'Nginx', 'GitHub Actions'],
  },
  {
    number: '06',
    title: 'E-commerce & Boutiques',
    description:
      'Sites boutique personnalisés avec gestion des produits, paiements sécurisés, suivi des commandes et déploiement complet en production.',
    icon: <ShoppingCart className="h-6 w-6" />,
    tags: ['Stripe', 'WooCommerce', 'Custom', 'Full Deploy'],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20"
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-title" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--blue-gradient-from)] to-[var(--purple-accent)] bg-clip-text text-transparent">
              Services & Expertises
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions innovantes pour vos besoins digitaux — de la conception au déploiement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.number}
              className="bennabi-card flex flex-col hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary" aria-hidden="true">
                    {service.icon}
                  </div>
                  <Badge className="bg-blue-600 text-white">{service.number}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} className="bg-slate-700 text-slate-200 hover:bg-slate-600 text-[11px] tracking-wide">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bennabi-card mt-12 p-8 max-w-4xl mx-auto border-2 hover:border-primary/20 bg-gradient-to-r from-[rgba(124,58,237,0.1)] to-[rgba(96,165,250,0.1)]">
          <div className="flex items-start gap-6">
            <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0" aria-hidden="true">
              <Zap className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                Automatisation N8n — <span className="bg-gradient-to-r from-[var(--purple-accent)] to-[var(--blue-gradient-from)] bg-clip-text text-transparent">Workflows Intelligents</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Je crée des workflows d'automatisation complets qui connectent vos outils et éliminent les tâches répétitives — sans code ou avec du code, selon vos besoins.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Réponse auto aux messages',
                  'Campagnes email',
                  'Rapports automatiques',
                  'Alertes en temps réel',
                  'Sync CRM ↔ DB',
                  'Notifications multi-canaux',
                ].map((item) => (
                  <Badge key={item} className="bg-slate-700 text-slate-200 hover:bg-slate-600">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
