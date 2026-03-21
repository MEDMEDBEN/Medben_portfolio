import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

// 🔑 Remplace ces 3 valeurs par les tiennes depuis emailjs.com
const EMAILJS_SERVICE_ID  = 'service_e1bzvk8';
const EMAILJS_TEMPLATE_ID = 'template_34gny9l';
const EMAILJS_PUBLIC_KEY  = 'Qg4NO8QWZhM_WiFUDwXR3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          subject:      formData.subject,
          message:      formData.message,
          to_name:      'Bennabi Mohamed',
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success('Message envoyé avec succès !', {
        description: 'Je vous répondrai dans les plus brefs délais.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      toast.error('Erreur lors de l\'envoi.', {
        description: 'Veuillez réessayer ou me contacter directement par email.',
      });
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'benamo.med312@gmail.com',
      href: 'mailto:benamo.med312@gmail.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Téléphone',
      value: '+213551382115',
      href: 'tel:+213551382115',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'github.com/MEDMEDBEN',
      href: 'https://github.com/MEDMEDBEN',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bennabimohamed',
      href: 'https://linkedin.com/in/bennabimohamed',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="contact-title" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--purple-accent)] bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un projet en tête ? Une question ? N'hésitez pas à me contacter
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bennabi-card">
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
                <CardDescription>
                  Plusieurs moyens de me joindre
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="text-primary mt-1 group-hover:scale-110 transition-transform" aria-hidden="true">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm mb-1">{info.label}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="bennabi-card border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-lg">Disponibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Je suis actuellement disponible pour de nouveaux projets freelance et
                  collaborations.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    Disponible pour de nouveaux projets
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bennabi-card">
              <CardHeader>
                <CardTitle>Envoyez-moi un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et je vous répondrai rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Nom complet <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      aria-required="true"
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      required
                      aria-required="true"
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Sujet <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de votre message"
                      required
                      aria-required="true"
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet ou votre question..."
                      required
                      aria-required="true"
                      className="min-h-[150px] bg-input-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                        Envoyer le message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté concernant votre demande.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
