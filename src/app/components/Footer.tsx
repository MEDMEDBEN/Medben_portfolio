import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/MEDMEDBEN',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com/in/bennabimohamed',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:benamo.med312@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Workflows', href: '#workflows' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-200" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Bennabi Mohamed
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Développeur Full-Stack spécialisé en IA, Data Science et automatisation.
              Transformons vos idées en solutions innovantes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav aria-label="Liens de pied de page">
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-semibold mb-4">Restons connectés</h4>
            <p className="text-slate-400 text-sm mb-4">
              Intéressé par mes projets et articles sur l'IA et le développement web ?
            </p>
            <a
              href="#contact"
              className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Bennabi Mohamed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
