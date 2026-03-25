import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const STATS = [
  { value: '500+', label: 'Обслуженных компаний' },
  { value: '12', label: 'Лет на рынке' },
  { value: '24/7', label: 'Техническая поддержка' },
  { value: '99.9%', label: 'Аптайм клиентских систем' },
];

const NAV_ITEMS = [
  { href: '#hero', label: 'Главная' },
  { href: '#services', label: 'Услуги' },
  { href: '#about', label: 'О компании' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#clients', label: 'Клиенты' },
  { href: '#contact', label: 'Контакты' },
];

const HeroSection = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollTo = (href: string) => {
    setMobileMenu(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <Icon name="Zap" size={18} className="text-white" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight">TechCore</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollTo('#contact')}
              size="sm"
              className="hidden sm:flex gradient-primary text-white border-0 hover:opacity-90 font-heading font-semibold"
            >
              Оставить заявку
            </Button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <Icon name={mobileMenu ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo('#contact')}
                className="mt-2 gradient-primary text-white border-0 hover:opacity-90 font-heading font-semibold"
              >
                Оставить заявку
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section id="hero" className="relative min-h-screen flex items-center pt-16 noise-bg overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-in-view">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Icon name="Shield" size={14} />
                Надёжные ИТ-решения для бизнеса
              </span>
            </div>

            <h1 className="animate-in-view stagger-1 font-heading font-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6">
              Технологии,{' '}
              <span className="gradient-text">которые работают</span>{' '}
              на ваш бизнес
            </h1>

            <p className="animate-in-view stagger-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Комплексные ИТ-услуги для малого и среднего бизнеса. От аутсорсинга
              до проектирования инфраструктуры — берём на себя всю технику.
            </p>

            <div className="animate-in-view stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollTo('#contact')}
                size="lg"
                className="gradient-primary text-white border-0 hover:opacity-90 font-heading font-semibold text-base px-8 h-13 glow-primary"
              >
                Получить консультацию
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button
                onClick={() => scrollTo('#services')}
                variant="outline"
                size="lg"
                className="font-heading font-semibold text-base px-8 h-13 border-border/50 hover:bg-secondary/50"
              >
                Наши услуги
              </Button>
            </div>

            <div className="animate-in-view stagger-4 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-heading font-800 text-2xl sm:text-3xl gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <button onClick={() => scrollTo('#services')} className="p-2 rounded-full border border-border/50 hover:border-primary/50 transition-colors">
            <Icon name="ChevronDown" size={20} className="text-muted-foreground" />
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
