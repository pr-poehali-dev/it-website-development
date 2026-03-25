import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const SERVICE_OPTIONS = [
  'ИТ-аутсорсинг',
  'Видеонаблюдение',
  'ИТ-инфраструктура',
  'Системное администрирование',
  'IP-телефония',
  'Монтаж локальных сетей',
];

const NAV_ITEMS = [
  { href: '#services', label: 'Услуги' },
  { href: '#about', label: 'О компании' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#clients', label: 'Клиенты' },
  { href: '#contact', label: 'Контакты' },
];

const ContactSection = () => {
  const { toast } = useToast();
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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
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
              {NAV_ITEMS.map((item) => (
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
    </>
  );
};

export default ContactSection;
