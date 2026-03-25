import Icon from '@/components/ui/icon';

const STEPS = [
  {
    num: '01',
    icon: 'MessageCircle',
    title: 'Консультация',
    desc: 'Выясняем потребности вашего бизнеса, проводим аудит текущей инфраструктуры и определяем ключевые задачи.',
    color: 'primary',
  },
  {
    num: '02',
    icon: 'FileSearch',
    title: 'Проектирование',
    desc: 'Разрабатываем техническое решение, подбираем оборудование и ПО, составляем план внедрения с точными сроками.',
    color: 'accent',
  },
  {
    num: '03',
    icon: 'Wrench',
    title: 'Внедрение',
    desc: 'Монтаж, настройка и интеграция всех систем. Работаем без простоев для вашего бизнеса — в нерабочее время.',
    color: 'primary',
  },
  {
    num: '04',
    icon: 'HeadphonesIcon',
    title: 'Поддержка',
    desc: 'Круглосуточный мониторинг, оперативное реагирование и регулярное обслуживание. Ваша инфраструктура — под контролем.',
    color: 'accent',
  },
];

const WorkProcessSection = () => {
  return (
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="animate-in-view inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Icon name="Route" size={14} />
            Процесс работы
          </span>
          <h2 className="animate-in-view stagger-1 font-heading font-800 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            От заявки до{' '}
            <span className="gradient-text">результата</span>
          </h2>
          <p className="animate-in-view stagger-2 text-muted-foreground text-lg max-w-2xl mx-auto">
            Прозрачный процесс на каждом этапе — вы всегда знаете, что происходит и когда ждать результат
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STEPS.map((step, i) => (
            <div key={i} className={`animate-in-view stagger-${i + 1} group relative`}>
              <div className="gradient-card rounded-2xl p-6 sm:p-7 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 h-full relative overflow-hidden">
                <div className="absolute -top-3 -right-3 font-heading font-900 text-7xl text-border/30 select-none leading-none">
                  {step.num}
                </div>

                <div className={`w-12 h-12 rounded-xl ${step.color === 'accent' ? 'bg-accent/15' : 'bg-primary/15'} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                  <Icon name={step.icon} size={22} className={step.color === 'accent' ? 'text-accent' : 'text-primary'} />
                </div>

                <h3 className="font-heading font-bold text-lg mb-3 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>

              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-2 z-20">
                  <Icon name="ChevronRight" size={16} className="text-muted-foreground/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="animate-in-view stagger-5 mt-16 gradient-card rounded-3xl p-8 sm:p-12 border border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-[0.03]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shrink-0">
                <Icon name="Zap" size={28} className="text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl mb-1">Первая консультация — бесплатно</div>
                <p className="text-muted-foreground">Проведём аудит вашей инфраструктуры и предложим решение без обязательств</p>
              </div>
            </div>
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="shrink-0 px-8 py-4 rounded-xl gradient-primary text-white font-heading font-semibold hover:opacity-90 transition-opacity glow-primary"
            >
              Записаться на аудит
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
