/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Smartphone, 
  Battery, 
  Droplets, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  MessageCircle, 
  MapPin, 
  Phone,
  CheckCircle2,
  Star,
  ChevronDown,
  ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = "5513988415819";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para conserto de celular.`;

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center text-center"
  >
    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-semibold text-zinc-900 mb-2">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Feature = ({ title, description }: { title: string, description: string }) => (
  <div className="flex gap-4">
    <div className="mt-1 text-blue-500">
      <CheckCircle2 size={20} />
    </div>
    <div>
      <h4 className="font-medium text-zinc-900">{title}</h4>
      <p className="text-sm text-zinc-500">{description}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-zinc-400 group-hover:text-blue-600 transition-colors"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-zinc-500 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="TopCell Logo" 
              className="h-10 w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <MessageCircle size={18} />
            <span>Orçamento Grátis</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck size={14} />
                <span>Especialistas em Assistência Técnica</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-[1.1] mb-6">
                Seu celular quebrou? <br />
                <span className="text-blue-600">Nós consertamos hoje!</span>
              </h1>
              <p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
                Reparos rápidos de tela, bateria, conectores e muito mais. Peças de alta qualidade e garantia em todos os serviços.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30"
                >
                  <MessageCircle size={24} />
                  Chamar no WhatsApp
                </a>
                <div className="flex items-center gap-3 px-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        className="w-10 h-10 rounded-full border-2 border-white"
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex text-yellow-400">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                    <p className="text-zinc-500 font-medium">+500 clientes satisfeitos</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-200/30 rounded-[40px] blur-3xl -z-10 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000" 
                alt="Conserto de Celular" 
                className="rounded-3xl shadow-2xl border border-white/20 object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase">Reparo Expresso</p>
                  <p className="text-lg font-bold text-zinc-900">Em até 40 min</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Nossos Serviços</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Trabalhamos com todas as marcas e modelos: iPhone, Samsung, Motorola, Xiaomi e outros.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={Smartphone} 
              title="Troca de Tela" 
              description="Telas originais e de primeira linha com o melhor brilho e sensibilidade ao toque."
            />
            <ServiceCard 
              icon={Battery} 
              title="Troca de Bateria" 
              description="Sua bateria não dura mais? Trocamos por uma nova com garantia de performance."
            />
            <ServiceCard 
              icon={Droplets} 
              title="Limpeza Química" 
              description="Caiu na água? Fazemos a desoxidação completa para tentar recuperar seu aparelho."
            />
            <ServiceCard 
              icon={Wrench} 
              title="Reparo de Placa" 
              description="Serviços avançados de micro-soldagem para problemas complexos de hardware."
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="sobre" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=1000" 
                alt="Técnico trabalhando" 
                className="rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Por que escolher a TopCell?</h2>
              <div className="space-y-8">
                <Feature 
                  title="Peças de Qualidade" 
                  description="Utilizamos apenas componentes testados e aprovados para garantir a durabilidade do seu aparelho."
                />
                <Feature 
                  title="Garantia de 90 Dias" 
                  description="Todos os nossos serviços contam com garantia total contra defeitos de fabricação ou mão de obra."
                />
                <Feature 
                  title="Orçamento na Hora" 
                  description="Traga seu aparelho e receba um diagnóstico preciso e orçamento sem compromisso em poucos minutos."
                />
                <Feature 
                  title="Técnicos Certificados" 
                  description="Nossa equipe passa por treinamentos constantes para lidar com as tecnologias mais recentes."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black rounded-[40px] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 relative z-10">
              Não deixe para depois, <br />
              <span className="text-blue-400">recupere seu celular agora!</span>
            </h2>
            <p className="text-zinc-400 mb-10 text-lg relative z-10">
              Atendimento personalizado e o melhor preço da região.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-zinc-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-zinc-100 transition-all relative z-10 shadow-2xl"
            >
              <MessageCircle size={28} className="text-blue-600" />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-zinc-500">
              Confira as respostas para as perguntas mais comuns dos nossos clientes.
            </p>
          </div>
          <div className="bg-zinc-50 rounded-3xl p-8 lg:p-12">
            <FAQItem 
              question="Quanto tempo demora o conserto?" 
              answer="A maioria dos reparos comuns, como troca de tela e bateria, é realizada em cerca de 40 minutos. Problemas mais complexos podem levar de 24h a 48h."
            />
            <FAQItem 
              question="Vocês oferecem garantia?" 
              answer="Sim! Todos os nossos serviços e peças possuem garantia total de 90 dias contra qualquer defeito de fabricação ou falha na mão de obra."
            />
            <FAQItem 
              question="Preciso agendar um horário?" 
              answer="Não é necessário agendar, atendemos por ordem de chegada. No entanto, agendar via WhatsApp garante que teremos a peça em estoque e prioridade no seu atendimento."
            />
            <FAQItem 
              question="Quais marcas vocês consertam?" 
              answer="Trabalhamos com todas as principais marcas do mercado: Apple (iPhone), Samsung, Motorola, Xiaomi, LG e Asus."
            />
            <FAQItem 
              question="O orçamento é gratuito?" 
              answer="Sim, a avaliação técnica e o orçamento são totalmente gratuitos e sem compromisso. Você só paga se autorizar e realizar o serviço."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="/logo.png" 
                  alt="TopCell Logo" 
                  className="h-8 w-auto object-contain" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Sua assistência técnica de confiança. Especialistas em soluções rápidas e eficazes para o seu smartphone.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Phone size={18} />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-all">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-500 shrink-0" />
                  <span>(13) 98841-5819</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-blue-500 shrink-0" />
                  <span>WhatsApp: (13) 98841-5819</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Horário de Funcionamento</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium text-blue-500">Fechado</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} TopCell Assistência Técnica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button for Mobile */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all md:hidden"
      >
        <MessageCircle size={32} />
      </a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:right-10 z-50 bg-zinc-900 text-white p-4 rounded-full shadow-2xl hover:bg-zinc-800 transition-all hidden md:flex items-center justify-center"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
