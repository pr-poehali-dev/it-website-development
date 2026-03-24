import { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const SERVICES = [
  {
    icon: 'Monitor',
    title: 'ИТ-аутсорсинг',
    desc: 'Обслуживание компьютеров, техническая поддержка, настройка рабочих мест и оргтехники. Ваша IT-инфраструктура — наша ответственность.',
    features: ['Обслуживание ПК', 'Техподдержка 24/7', 'Настройка оргтехники'],
  },
  {
    icon: 'Camera',
    title: 'Видеонаблюдение',
    desc: 'Проектирование, установка и настройка систем видеонаблюдения. Безопасность вашего бизнеса под надёжным контролем.',
    features: ['Проектирование систем', 'Монтаж камер', 'Удалённый доступ'],
  },
  {
    icon: 'Server',
    title: 'ИТ-инфраструктура',
    desc: 'Аудит, проектирование и внедрение ИТ-инфраструктуры. Создаём надёжную основу для вашего бизнеса.',
    features: ['Аудит систем', 'Проектирование', 'Внедрение решений'],
  },
  {
    icon: 'Terminal',
    title: 'Системное администрирование',
    desc: 'Администрирование серверов и сервисов. Обеспечиваем стабильную и безопасную работу вашей инфраструктуры.',
    features: ['Управление серверами', 'Мониторинг', 'Резервное копирование'],
  },
  {
    icon: 'Phone',
    title: 'IP-телефония',
    desc: 'Установка, настройка и администрирование цифровой связи. Современная телефония для эффективного бизнеса.',
    features: ['Установка АТС', 'Настройка маршрутизации', 'Интеграция с CRM'],
  },
  {
    icon: 'Network',
    title: 'Монтаж локальных сетей',
    desc: 'Проектирование и монтаж ЛВС/СКС. Строим надёжные и быстрые сети для вашего офиса.',
    features: ['Проектирование ЛВС', 'Монтаж СКС', 'Тестирование сети'],
  },
];

const STATS = [
  { value: '500+', label: 'Обслуженных компаний' },
  { value: '12', label: 'Лет на рынке' },
  { value: '24/7', label: 'Техническая поддержка' },
  { value: '99.9%', label: 'Аптайм клиентских систем' },
];

const PORTFOLIO = [
  { title: 'Торговая сеть «Меридиан»', category: 'ИТ-инфраструктура', desc: 'Развёртывание полной ИТ-инфраструктуры для 15 филиалов: серверы, сети, видеонаблюдение.' },
  { title: 'Логистическая компания «ТрансЛайн»', category: 'IP-телефония', desc: 'Внедрение IP-АТС на 200 абонентов с интеграцией в 1С и CRM-систему.' },
  { title: 'Бизнес-центр «Сити Плаза»', category: 'Видеонаблюдение', desc: 'Установка 120 камер видеонаблюдения с единым центром мониторинга.' },
  { title: 'Юридическая фирма «Правовед»', category: 'ИТ-аутсорсинг', desc: 'Полное ИТ-обслуживание офиса на 50 рабочих мест с SLA 2 часа.' },
  { title: 'Производство «АгроМаш»', category: 'Локальные сети', desc: 'Проектирование и монтаж СКС для производственного комплекса площадью 8000 м².' },
  { title: 'Клиника «Здоровье Плюс»', category: 'Сисадмин', desc: 'Администрирование серверов и обеспечение отказоустойчивости медицинских информационных систем.' },
];

const CLIENTS = [
  'Меридиан', 'ТрансЛайн', 'Сити Плаза', 'Правовед', 'АгроМаш',
  'Здоровье Плюс', 'ФинансГрупп', 'МедиаПро', 'СтройИнвест', 'ФудМаркет',
];

const SERVICE_OPTIONS = [
  'ИТ-аутсорсинг',
  'Видеонаблюдение',
  'ИТ-инфраструктура',
  'Системное администрирование',
  'IP-телефония',
  'Монтаж локальных сетей',
];

const NAV_ITEMS = [
  { href: '#hero', label: 'Главная' },
  { href: '#services', label: 'Услуги' },
  { href: '#about', label: 'О компании' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#clients', label: 'Клиенты' },
  { href: '#contact', label: 'Контакты' },
];

const Index = () => {
  const containerRef = useScrollAnimation();
  const { toast } = useToast();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      toast({ title: 'Заполните обязательные поля', variant: 'destructive' });
      return;
    }
    toast({ title: 'Заявка отправлена!', description: 'Мы свяжемся с вами в ближайшее время.' });
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const scrollTo = (href: string) => {
    setMobileMenu(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      {/* HEADER */}
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

      {/* HERO */}
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

      {/* SERVICES */}
      <section id="services" className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="animate-in-view inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              <Icon name="Layers" size={14} />
              Наши направления
            </span>
            <h2 className="animate-in-view stagger-1 font-heading font-800 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
              Полный спектр{' '}
              <span className="gradient-text">ИТ-услуг</span>
            </h2>
            <p className="animate-in-view stagger-2 text-muted-foreground text-lg max-w-2xl mx-auto">
              Закрываем все потребности бизнеса в информационных технологиях — от обслуживания компьютеров до проектирования сетей
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className={`animate-in-view stagger-${Math.min(i + 1, 6)} group relative gradient-card rounded-2xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:glow-primary`}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <Icon name={service.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="animate-in-view-left inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Icon name="Building2" size={14} />
                О компании
              </span>
              <h2 className="animate-in-view-left stagger-1 font-heading font-800 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6">
                Работаем с технологиями,{' '}
                <span className="gradient-text">думаем о бизнесе</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="animate-in-view-left stagger-2">
                  <strong className="text-foreground">TechCore</strong> — команда сертифицированных специалистов
                  с более чем 12-летним опытом работы в сфере информационных технологий. Мы помогаем малому
                  и среднему бизнесу строить надёжную и эффективную ИТ-инфраструктуру.
                </p>
                <p className="animate-in-view-left stagger-3">
                  Наш подход — не просто «починить компьютер», а выстроить систему, которая работает
                  без сбоев и масштабируется вместе с вашим бизнесом. Мы берём ответственность за
                  технологии, чтобы вы могли сфокусироваться на главном.
                </p>
              </div>

              <div className="animate-in-view-left stagger-4 grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: 'Award', text: 'Сертифицированные специалисты' },
                  { icon: 'Clock', text: 'Реагирование за 30 минут' },
                  { icon: 'ShieldCheck', text: 'SLA до 99.9%' },
                  { icon: 'HeartHandshake', text: 'Индивидуальный подход' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name={item.icon} size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in-view-right relative">
              <div className="relative gradient-card rounded-3xl p-8 sm:p-10 border border-border/50 glow-primary">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                      <Icon name="Target" size={26} className="text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-lg">Наша миссия</div>
                      <div className="text-sm text-muted-foreground">Технологии доступны каждому</div>
                    </div>
                  </div>
                  <div className="h-px bg-border/50" />
                  <p className="text-muted-foreground leading-relaxed">
                    Сделать профессиональные ИТ-услуги доступными для каждой компании,
                    независимо от её размера. Мы верим, что надёжная инфраструктура —
                    это фундамент успешного бизнеса.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: '50+', label: 'Специалистов' },
                      { value: '1500+', label: 'Проектов' },
                      { value: '98%', label: 'Довольных клиентов' },
                    ].map((s, i) => (
                      <div key={i} className="text-center p-3 rounded-xl bg-secondary/50">
                        <div className="font-heading font-bold text-xl gradient-text">{s.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center animate-float">
                <Icon name="Rocket" size={32} className="text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="animate-in-view inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Icon name="FolderOpen" size={14} />
              Портфолио
            </span>
            <h2 className="animate-in-view stagger-1 font-heading font-800 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
              Проекты, которыми{' '}
              <span className="gradient-text">мы гордимся</span>
            </h2>
            <p className="animate-in-view stagger-2 text-muted-foreground text-lg max-w-2xl mx-auto">
              Каждый проект — это уникальное решение, разработанное под задачи конкретного бизнеса
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO.map((project, i) => (
              <div
                key={i}
                className={`animate-scale-in-view stagger-${Math.min(i + 1, 6)} group gradient-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="h-2 gradient-primary" />
                <div className="p-6 sm:p-7">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="animate-in-view inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              <Icon name="Users" size={14} />
              Клиенты
            </span>
            <h2 className="animate-in-view stagger-1 font-heading font-800 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
              Нам доверяют{' '}
              <span className="gradient-text">лидеры рынка</span>
            </h2>
            <p className="animate-in-view stagger-2 text-muted-foreground text-lg max-w-2xl mx-auto">
              Компании из различных отраслей выбирают TechCore как надёжного технологического партнёра
            </p>
          </div>

          <div className="animate-in-view stagger-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {CLIENTS.map((client, i) => (
              <div
                key={i}
                className="group gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 flex items-center justify-center hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                    <span className="font-heading font-bold text-lg gradient-text">
                      {client[0]}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{client}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-in-view stagger-4 mt-16 gradient-card rounded-3xl p-8 sm:p-12 border border-border/50 text-center">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
              {[
                { icon: 'TrendingUp', value: '95%', label: 'Клиентов продлевают контракт' },
                { icon: 'Star', value: '4.9', label: 'Средняя оценка на рынке' },
                { icon: 'MessageSquare', value: '2000+', label: 'Решённых обращений в год' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={stat.icon} size={22} className="text-primary" />
                  </div>
                  <div className="font-heading font-bold text-2xl gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="animate-in-view-left inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Icon name="Send" size={14} />
                Контакты
              </span>
              <h2 className="animate-in-view-left stagger-1 font-heading font-800 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6">
                Давайте обсудим{' '}
                <span className="gradient-text">ваш проект</span>
              </h2>
              <p className="animate-in-view-left stagger-2 text-muted-foreground text-lg leading-relaxed mb-10">
                Оставьте заявку — мы свяжемся с вами в течение 30 минут
                в рабочее время и предложим оптимальное решение для ваших задач.
              </p>

              <div className="animate-in-view-left stagger-3 space-y-6">
                {[
                  { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67' },
                  { icon: 'Mail', label: 'Email', value: 'info@techcore.ru' },
                  { icon: 'MapPin', label: 'Адрес', value: 'г. Москва, ул. Технологическая, 42' },
                  { icon: 'Clock', label: 'Режим работы', value: 'Пн-Пт: 9:00–18:00, Поддержка: 24/7' },
                ].map((contact, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name={contact.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in-view-right">
              <form onSubmit={handleSubmit} className="gradient-card rounded-3xl p-6 sm:p-8 border border-border/50 glow-primary space-y-5">
                <div className="text-center mb-2">
                  <h3 className="font-heading font-bold text-xl">Оставить заявку</h3>
                  <p className="text-sm text-muted-foreground mt-1">Заполните форму и мы перезвоним</p>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Имя *</label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border/50 h-12"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Телефон *</label>
                  <Input
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary/50 border-border/50 h-12"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border/50 h-12"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Тип услуги *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-12 px-3 rounded-lg bg-secondary/50 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
                  >
                    <option value="">Выберите услугу</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Сообщение</label>
                  <Textarea
                    placeholder="Опишите вашу задачу..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary/50 border-border/50 min-h-[100px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary text-white border-0 hover:opacity-90 font-heading font-semibold h-12 text-base"
                >
                  Отправить заявку
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <span className="font-heading font-bold">TechCore</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              {NAV_ITEMS.slice(1).map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="text-sm text-muted-foreground">
              © 2024 TechCore. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
