import { Code, ExternalLink, Package, Rocket, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ShopItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  status: 'available' | 'coming-soon' | 'beta';
  links?: { label: string; url: string }[];
}

const shopItems: ShopItem[] = [
  {
    title: 'Templates de Workflows N8n',
    description: 'Collection de workflows prêts à l\'emploi pour automatiser vos processus',
    icon: <Package className="h-8 w-8" />,
    status: 'available',
    features: [
      'Auto-réponse emails avec IA',
      'Génération de rapports automatique',
      'Gestion de calendrier intelligente',
      'Pipeline CRM automatisé',
      'Documentation complète',
      'Support et mises à jour',
    ],
    links: [
      { label: 'Demander une démo', url: 'https://shop.example.com' },
    ],
  },
  {
    title: 'Sites Web & Applications sur mesure',
    description: 'Applications mobiles, desktop et sites web professionnels — de la vitrine au déploiement complet',
    icon: <Code className="h-8 w-8" />,
    status: 'fullstack',
    features: [
      'Applications mobiles iOS & Android',
      'Applications desktop multi-plateformes',
      'Sites vitrine & landing pages',
      'Boutiques en ligne (e-commerce)',
      'Dashboards de visualisation de données',
      'Portails clients & intranets',
      'Progressive Web Apps (PWA)',
      'Déploiement & hébergement inclus',
    ],
    links: [
      { label: 'Voir les réalisations', url: 'https://shop.example.com' },
    ],
  },
  {
    title: 'Solutions IA clés en main',
    description: 'Applications d\'intelligence artificielle déployables rapidement',
    icon: <Shield className="h-8 w-8" />,
    status: 'coming-soon',
    features: [
      'Chatbots conversationnels',
      'Analyse de documents automatique',
      'Classification de données',
      'Recommandations personnalisées',
      'APIs sécurisées',
      'Hébergement cloud inclus',
    ],
  },
];

export function Shop() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge className="bg-green-600">Disponible</Badge>;
      case 'beta':
        return <Badge className="bg-blue-600">En Bêta</Badge>;
      case 'fullstack':
        return <Badge className="bg-purple-600">Full Stack</Badge>;
      case 'coming-soon':
        return <Badge variant="outline">Prochainement</Badge>;
      default:
        return null;
    }
  };

  return (
    <section
      id="boutique"
      className="py-20"
      aria-labelledby="shop-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="shop-title" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--blue-gradient-from)] to-[var(--purple-accent)] bg-clip-text text-transparent">
              Boutique & Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Produits et services pour accélérer votre transformation digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {shopItems.map((item, index) => (
            <Card
              key={index}
              className="bennabi-card flex flex-col hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary" aria-hidden="true">
                    {item.icon}
                  </div>
                  {getStatusBadge(item.status)}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-2" role="list">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 mt-0.5" aria-hidden="true">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <div className="p-6 pt-0">
                {item.links ? (
                  item.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      className="w-full"
                      variant={item.status === 'available' ? 'default' : 'outline'}
                      disabled={item.status === 'coming-soon'}
                      asChild={item.status !== 'coming-soon'}
                    >
                      {item.status !== 'coming-soon' ? (
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      ) : (
                        <span>{link.label}</span>
                      )}
                    </Button>
                  ))
                ) : (
                  <Button className="w-full" variant="outline" disabled>
                    Bientôt disponible
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bennabi-card border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Projet sur mesure ?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Besoin d'une solution personnalisée ? Je développe des applications web et IA
                adaptées à vos besoins spécifiques. Déploiement cloud, maintenance et support inclus.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Discutons de votre projet
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
