import { Zap, Mail, Calendar, FileText } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface WorkflowExample {
  title: string;
  description: string;
  icon: React.ReactNode;
  trigger: string;
  actions: string[];
  useCase: string;
  tools: string[];
}

const workflows: WorkflowExample[] = [
  {
    title: 'Auto-réponse aux clients',
    description: 'Système automatisé de réponse aux emails clients avec IA',
    icon: <Mail className="h-6 w-6" />,
    trigger: 'Réception d\'un email client',
    actions: [
      'Analyse du contenu avec GPT-4',
      'Détection de l\'intention et du sentiment',
      'Génération d\'une réponse contextuelle',
      'Envoi automatique ou validation humaine selon priorité',
      'Enregistrement dans CRM',
    ],
    useCase:
      'Réduit le temps de réponse de 80% et améliore la satisfaction client avec des réponses personnalisées 24/7',
    tools: ['N8n', 'OpenAI API', 'Gmail API', 'Airtable'],
  },
  {
    title: 'Génération de rapports automatiques',
    description: 'Création et envoi de rapports analytiques personnalisés',
    icon: <FileText className="h-6 w-6" />,
    trigger: 'Planification hebdomadaire/mensuelle',
    actions: [
      'Extraction des données depuis bases de données',
      'Analyse et calcul des KPIs',
      'Génération de visualisations graphiques',
      'Compilation dans un rapport PDF',
      'Distribution par email aux parties prenantes',
    ],
    useCase:
      'Économise 10h/semaine en automatisant la création et distribution de rapports d\'activité',
    tools: ['N8n', 'PostgreSQL', 'Python', 'Chart.js', 'SendGrid'],
  },
  {
    title: 'Gestion de rendez-vous intelligente',
    description: 'Coordination automatique des calendriers et rappels',
    icon: <Calendar className="h-6 w-6" />,
    trigger: 'Demande de rendez-vous reçue',
    actions: [
      'Vérification des disponibilités multiples calendriers',
      'Proposition de créneaux optimaux',
      'Création de l\'événement après confirmation',
      'Envoi de rappels automatiques (24h, 1h avant)',
      'Gestion des annulations et reprogrammations',
    ],
    useCase:
      'Élimine les allers-retours d\'emails et réduit les absences de 60% grâce aux rappels',
    tools: ['N8n', 'Google Calendar', 'Twilio', 'Calendly'],
  },
];

export function Workflows() {
  return (
    <section
      id="workflows"
      className="py-20"
      aria-labelledby="workflows-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="workflows-title" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--green-accent)] to-[var(--blue-gradient-to)] bg-clip-text text-transparent">
              Workflows N8n & Automatisations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exemples d'automatisations intelligentes pour optimiser les processus métier
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {workflows.map((workflow, index) => (
              <AccordionItem
                key={index}
                value={`workflow-${index}`}
                className="bennabi-card border-2 rounded-lg px-6 bg-card hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className="mt-1 text-primary" aria-hidden="true">
                      {workflow.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{workflow.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {workflow.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-6">
                  <div className="space-y-6 pt-4">
                    {/* Trigger */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-yellow-500" aria-hidden="true" />
                        Déclencheur
                      </h4>
                      <Card className="p-3 bg-muted/50">
                        <p className="text-sm">{workflow.trigger}</p>
                      </Card>
                    </div>

                    {/* Actions */}
                    <div>
                      <h4 className="font-semibold mb-3">Actions automatisées</h4>
                      <div className="space-y-2">
                        {workflow.actions.map((action, actionIndex) => (
                          <div
                            key={actionIndex}
                            className="flex items-start gap-3 p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors"
                          >
                            <Badge
                              variant="outline"
                              className="mt-0.5 min-w-[2rem] justify-center"
                            >
                              {actionIndex + 1}
                            </Badge>
                            <p className="text-sm flex-1">{action}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Case */}
                    <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border-l-4 border-primary">
                      <h4 className="font-semibold mb-2 text-sm">
                        💼 Cas d'usage concret
                      </h4>
                      <p className="text-sm text-muted-foreground italic">
                        {workflow.useCase}
                      </p>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Outils intégrés</h4>
                      <div className="flex flex-wrap gap-2">
                        {workflow.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="secondary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
