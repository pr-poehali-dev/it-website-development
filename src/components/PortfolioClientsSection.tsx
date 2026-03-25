import Icon from '@/components/ui/icon';

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

const PortfolioClientsSection = () => {
  return (
    <>
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
    </>
  );
};

export default PortfolioClientsSection;
