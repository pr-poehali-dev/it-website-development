import Icon from '@/components/ui/icon';

const ADVANTAGES = [
  {
    icon: 'Timer',
    title: 'Реакция за 15 минут',
    desc: 'Среднее время отклика на критичные инциденты. Не ждите часами — мы уже работаем над решением.',
    stat: '15 мин',
    statLabel: 'среднее время отклика',
  },
  {
    icon: 'PiggyBank',
    title: 'Экономия до 40%',
    desc: 'Аутсорсинг обходится значительно дешевле содержания штатного ИТ-отдела при более высоком качестве.',
    stat: '40%',
    statLabel: 'экономия на ИТ-затратах',
  },
  {
    icon: 'ShieldCheck',
    title: 'SLA с гарантией',
    desc: 'Каждый контракт закреплён договором с чёткими SLA. Не выполнили — компенсируем.',
    stat: '99.9%',
    statLabel: 'выполнение SLA',
  },
];

const TECH_STACK = [
  { name: 'Cisco', icon: 'Router' },
  { name: 'Microsoft', icon: 'AppWindow' },
  { name: 'Linux', icon: 'Terminal' },
  { name: 'VMware', icon: 'Layers' },
  { name: 'Fortinet', icon: 'Shield' },
  { name: 'Hikvision', icon: 'Camera' },
  { name: 'Asterisk', icon: 'Phone' },
  { name: '1С', icon: 'Database' },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="animate-in-view inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Icon name="ThumbsUp" size={14} />
            Преимущества
          </span>
          <h2 className="animate-in-view stagger-1 font-heading font-800 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Почему выбирают{' '}
            <span className="gradient-text">TechCore</span>
          </h2>
          <p className="animate-in-view stagger-2 text-muted-foreground text-lg max-w-2xl mx-auto">
            Цифры говорят лучше слов — мы измеряем качество работы конкретными показателями
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {ADVANTAGES.map((item, i) => (
            <div
              key={i}
              className={`animate-in-view stagger-${i + 1} group gradient-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon name={item.icon} size={22} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="font-heading font-800 text-2xl gradient-text">{item.stat}</div>
                    <div className="text-xs text-muted-foreground">{item.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="h-1 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="animate-in-view">
          <div className="gradient-card rounded-3xl p-8 sm:p-12 border border-border/50">
            <div className="text-center mb-8">
              <h3 className="font-heading font-bold text-xl sm:text-2xl mb-2">Работаем с ведущими вендорами</h3>
              <p className="text-muted-foreground text-sm">Сертифицированные партнёры мировых технологических брендов</p>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {TECH_STACK.map((tech, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon name={tech.icon} size={18} className="text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
