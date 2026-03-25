import Icon from '@/components/ui/icon';

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

const ServicesSection = () => {
  return (
    <>
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
    </>
  );
};

export default ServicesSection;
