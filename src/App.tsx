import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, ArrowRight, ShieldCheck, Camera, 
  Moon, Sun, Bath, ClipboardCheck, 
  MessageCircle, Phone, AlertCircle, X, Send,
  Instagram, MapPin, CheckCircle2
} from "lucide-react";

const assets = {
  logo: "https://s.ntc.qzz.io/s/tia-le",
  hero: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop",
  hospedagem: "https://lh6.googleusercontent.com/VAViVE0QG6wpW2yeSzQA7tPOrNFf3hlmUrwr7mogM3oShMFGVVNPRpKFs6Sf23tL_c6tITmB5glV2WSR3O1a4Zxd4zj9o7sb39WLMpaA0n20IG3EK-JkeEvA8-OmWF6GeuLB3qwrUsDbALDzrQm27BZJqIdqTTEHXt-TTsaUKem2jwyQKWehdB8vPJtEdw",
  daycare: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1988&auto=format&fit=crop",
  spa: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop",
  tiLe: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop",
};

const LordIcon = "lord-icon" as any;

const testimonials = [
  {
    text: "A estrutura é fantástica. Receber os vídeos diários do Thor brincando solto no gramado me deu uma paz de espírito que nenhum outro hotel conseguiu.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Mariana Costa",
    role: "Tutora do Thor (Golden Retriever)",
  },
  {
    text: "O nível de profissionalismo impressiona. O formulário de pré-reserva com o upload de vacinas já mostra o rigor e o cuidado que eles têm.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Carlos Almeida",
    role: "Tutor da Luna (Spitz Alemão)",
  },
  {
    text: "Meu cachorro é idoso e precisa de medicação no horário exato. A equipe da Tia Lê não falhou um único dia. Um serviço verdadeiramente premium.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Beatriz Silva",
    role: "Tutora do Max (Beagle)",
  }
];

const services = [
  {
    id: "hospedagem",
    title: "Hospedagem",
    icon: <Moon size={32} />,
    image: assets.hospedagem,
    desc: "Pernoite com rotina noturna calma e monitorada em quartos individuais climatizados.",
    process: "Check-in: 08h-10h | Check-out: 10h."
  },
  {
    id: "daycare",
    title: "Daycare (Creche)",
    icon: <Sun size={32} />,
    image: assets.daycare,
    desc: "Gasto de energia, socialização e atividades cognitivas monitoradas durante o dia.",
    process: "07h às 19h."
  },
  {
    id: "spa",
    title: "Banho & Spa",
    icon: <Bath size={32} />,
    image: assets.spa,
    desc: "Serviço exclusivo para retornar para casa limpo e relaxado após a estadia.",
    process: "Hipoalergênico."
  }
];

// --- COMPONENTES AUXILIARES ---

const TestimonialsColumn = ({ testimonials, duration, className }: { testimonials: any[], duration: number, className?: string }) => (
  <div className={`flex flex-col gap-6 ${className}`}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
        <div key={i} className="p-8 rounded-[24px] bg-[#2A3622] border border-white/5 shadow-lg max-w-xs w-full">
          <div className="flex gap-1 text-yellow-500 mb-4">
            {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
          </div>
          <p className="text-[14px] leading-relaxed text-white/90 italic">"{t.text}"</p>
          <div className="flex items-center gap-3 mt-6">
            <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div>
              <div className="font-bold text-[14px]">{t.name}</div>
              <div className="text-[12px] text-white/50">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[300px] bg-white rounded-[24px] shadow-2xl overflow-hidden text-gray-800"
          >
            <div className="bg-[#3E5232] p-4 text-white flex justify-between items-center">
              <div>
                <h4 className="font-bold">Concierge Digital</h4>
                <p className="text-[12px] opacity-80">Como podemos ajudar hoje?</p>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Fechar"><X size={20} /></button>
            </div>
            <div className="p-4 space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left">
                <div className="bg-[#3E5232]/10 p-2 rounded-lg"><ClipboardCheck size={20} className="text-[#3E5232]" /></div>
                <div className="text-[14px] font-medium">Quero fazer uma reserva</div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left">
                <div className="bg-[#3E5232]/10 p-2 rounded-lg"><MessageCircle size={20} className="text-[#3E5232]" /></div>
                <div className="text-[14px] font-medium">Já sou cliente / Notícias</div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-[#CF2E2E]/10 rounded-xl hover:bg-[#CF2E2E]/20 transition-colors text-left">
                <div className="bg-[#CF2E2E] p-2 rounded-lg"><AlertCircle size={20} className="text-white" /></div>
                <div className="text-[14px] font-medium text-[#CF2E2E]">Emergência</div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [formStep, setFormStep] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    petName: "",
    breed: "",
    behavior: "Sociável e calmo",
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.petName.trim()) newErrors.petName = "Nome do pet é obrigatório";
    if (!formData.breed.trim()) newErrors.breed = "Raça é obrigatória";
    if (!file) newErrors.file = "Carteira de vacinas é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormStep(2);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setErrors(prev => ({ ...prev, file: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-[#1A2116] text-[#F5F2EB] font-sans selection:bg-[#3E5232] selection:text-white">
      
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-[90] transition-all duration-300 px-6 ${isScrolled ? 'py-4 bg-[#1A2116]/95 backdrop-blur-md shadow-xl' : 'py-8 bg-transparent'}`}>
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-[#F5F2EB] rounded-xl flex items-center justify-center p-1 shadow-lg overflow-hidden">
               <LordIcon
                  src="https://cdn.lordicon.com/zybujcxz.json"
                  trigger="in"
                  delay="1500"
                  state="in-reveal"
                  colors="primary:#1a2116,secondary:#3e5232"
                  style={{ width: '40px', height: '40px' }}
               />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] font-bold tracking-widest uppercase leading-none">Tia Lê</span>
              <span className="text-[9px] uppercase tracking-[0.2em] opacity-50">Hotel & Daycare</span>
            </div>
          </div>
          <nav className="hidden lg:flex gap-10 text-[12px] tracking-widest uppercase font-semibold text-[#ABB8C3]">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#reserva" className="hover:text-white transition-colors">Reservar</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
        <div className="absolute inset-0 z-0">
          <img 
            src={assets.hero} 
            alt="Interação com cão" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2116] via-[#1A2116]/50 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A2116]/70" />
        </div>

        <div className="container relative z-10 max-w-[1200px] px-6 mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#3E5232]/40 border border-[#3E5232] px-4 py-2 rounded-full text-[11px] uppercase tracking-widest font-bold backdrop-blur-sm">
              <ShieldCheck size={16} /> Monitoramento 24h & Carinho Real
            </div>
            <h1 className="text-[44px] lg:text-[72px] font-bold leading-[1.1] tracking-tight">
              O seu pet merece <span className="text-[#F5F2EB]/60 italic font-serif">férias de luxo.</span>
            </h1>
            <p className="text-[17px] text-[#ABB8C3] leading-relaxed max-w-[500px]">
              Onde o seu melhor amigo se sente em casa, com a segurança de profissionais dedicados e ambiente monitorado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#reserva" className="bg-[#3E5232] text-white px-10 py-5 rounded-full font-bold text-[16px] hover:bg-[#4E663F] transition-all shadow-xl hover:shadow-[#3E5232]/40 flex items-center justify-center gap-2 group">
                Verificar Disponibilidade <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS */}
      <section id="servicos" className="py-32 bg-[#141A11]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[38px] font-bold">Experiência Concierge</h2>
            <p className="text-[#ABB8C3] max-w-[600px] mx-auto text-[17px]">Cuidado individualizado para cada hóspede.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map(s => (
              <div key={s.id} className="bg-[#1A2116] rounded-[40px] border border-white/5 overflow-hidden hover:border-[#3E5232]/50 transition-all group shadow-2xl">
                <div 
                  className="h-64 overflow-hidden relative cursor-zoom-in"
                  onClick={() => setSelectedImage(s.image)}
                >
                   <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                   <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md p-3 rounded-2xl text-white">
                      {s.icon}
                   </div>
                </div>
                <div className="p-10">
                  <h3 className="text-[24px] font-bold mb-4">{s.title}</h3>
                  <p className="text-[#ABB8C3] text-[15px] mb-8 leading-relaxed">{s.desc}</p>
                  <div className="pt-6 border-t border-white/5 text-[12px] font-bold text-[#3E5232] flex items-center gap-2 uppercase tracking-widest">
                    <CheckCircle2 size={16} /> {s.process}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BANNER PREPARATIVOS */}
          <div className="mt-24 relative rounded-[48px] overflow-hidden p-10 lg:p-20 bg-[#3E5232] shadow-2xl">
             <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img src="https://www.transparenttextures.com/patterns/natural-paper.png" alt="Textura" referrerPolicy="no-referrer" />
             </div>
             <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left">
                  <h3 className="text-[30px] lg:text-[42px] font-bold leading-tight">Preparado para o Check-in?</h3>
                  <p className="text-white/80 text-[17px]">Garanta que tudo esteja pronto para a melhor estadia do seu pet.</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-[13px] font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl"><CheckCircle2 size={20} /> Ração habitual</div>
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl"><CheckCircle2 size={20} /> Guia e Peitoral</div>
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl"><CheckCircle2 size={20} /> Vacinas em dia</div>
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl"><CheckCircle2 size={20} /> Brinquedo favorito</div>
                  </div>
                </div>
                <div className="hidden lg:flex justify-end">
                   <img src={assets.tiLe} alt="Cão Tia Lê" className="rounded-[32px] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm" referrerPolicy="no-referrer" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* PRÉ-RESERVA */}
      <section id="reserva" className="py-32">
        <div className="container max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
             <div className="inline-block text-[#3E5232] font-bold uppercase tracking-[0.3em] text-[11px] mb-4">Agendamento Inteligente</div>
            <h2 className="text-[42px] font-bold leading-tight mb-8 italic font-serif text-[#F5F2EB]">Segurança em primeiro lugar.</h2>
            <p className="text-[#ABB8C3] text-[17px] mb-12 leading-relaxed">
              Diferente de hotéis comuns, nós filtramos os hóspedes para garantir que o seu pet conviva apenas com cães saudáveis e sociáveis.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-2xl bg-[#3E5232]/20 flex items-center justify-center shrink-0"><ShieldCheck className="text-[#3E5232]" /></div>
                <div>
                  <h4 className="font-bold mb-1">Análise de Perfil</h4>
                  <p className="text-[#ABB8C3] text-[14px]">Avaliamos o comportamento para garantir harmonia no grupo.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-2xl bg-[#3E5232]/20 flex items-center justify-center shrink-0"><Camera className="text-[#3E5232]" /></div>
                <div>
                  <h4 className="font-bold mb-1">Transparência Total</h4>
                  <p className="text-[#ABB8C3] text-[14px]">Receba notícias diárias por vídeo direto no seu WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F2EB] p-8 lg:p-12 rounded-[48px] shadow-2xl text-gray-900 relative">
            {formStep === 1 ? (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Nome do Pet</label>
                    <input 
                      type="text" 
                      className={`w-full bg-white border ${errors.petName ? 'border-red-500' : 'border-gray-100'} p-4 rounded-2xl focus:border-[#3E5232] outline-none transition-all`} 
                      placeholder="Ex: Thor" 
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    />
                    {errors.petName && <p className="text-red-500 text-[10px] font-bold">{errors.petName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Raça</label>
                    <input 
                      type="text" 
                      className={`w-full bg-white border ${errors.breed ? 'border-red-500' : 'border-gray-100'} p-4 rounded-2xl focus:border-[#3E5232] outline-none transition-all`} 
                      placeholder="Ex: Golden" 
                      value={formData.breed}
                      onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                    />
                    {errors.breed && <p className="text-red-500 text-[10px] font-bold">{errors.breed}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Comportamento</label>
                  <select 
                    className="w-full bg-white border border-gray-100 p-4 rounded-2xl outline-none appearance-none cursor-pointer"
                    value={formData.behavior}
                    onChange={(e) => setFormData({ ...formData, behavior: e.target.value })}
                  >
                    <option>Sociável e calmo</option>
                    <option>Ativo / Muita energia</option>
                    <option>Tímido / Ansioso</option>
                    <option>Reativo (Vaga Individual)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Carteira de Vacinas</label>
                  <label className={`border-2 border-dashed ${errors.file ? 'border-red-500' : 'border-[#3E5232]/20'} p-6 rounded-[28px] flex flex-col items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors group relative`}>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                    />
                    <div className="bg-[#3E5232]/10 p-3 rounded-full group-hover:scale-110 transition-transform"><Camera size={20} className="text-[#3E5232]" /></div>
                    <span className="text-[13px] text-gray-400 font-bold">
                      {file ? file.name : "Anexar foto ou PDF"}
                    </span>
                  </label>
                  {errors.file && <p className="text-red-500 text-[10px] font-bold text-center">{errors.file}</p>}
                </div>
                <button type="submit" className="w-full bg-[#3E5232] text-white py-5 rounded-[20px] font-bold text-[17px] shadow-xl flex items-center justify-center gap-3 hover:bg-[#2A3622] transition-all transform hover:-translate-y-1 cursor-pointer">
                  Enviar Pré-Reserva <Send size={20} />
                </button>
                <p className="text-[11px] text-center text-gray-400">Analisaremos os dados em até 24h.</p>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-6">
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-[28px] font-bold text-[#1A2116]">Pedido Recebido!</h3>
                <p className="text-gray-500 text-[17px]">Nossa equipe entrará em contato em breve para confirmar os detalhes.</p>
                <button onClick={() => setFormStep(1)} className="text-[#3E5232] font-bold underline hover:text-[#1A2116] cursor-pointer">Fazer nova pré-reserva</button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section id="depoimentos" className="py-32 bg-[#141A11] overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-24">
             <div className="inline-flex items-center gap-2 text-yellow-500 mb-6 font-bold tracking-[0.4em] uppercase text-[11px]">
              <Star size={16} fill="currentColor" /> 5.0 no Google Business
            </div>
            <h2 className="text-[42px] font-bold italic font-serif leading-tight">A confiança de quem <br/>trata como família.</h2>
          </div>

          <div className="flex justify-center gap-8 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[650px] overflow-hidden">
            <TestimonialsColumn testimonials={testimonials} duration={35} className="hidden sm:flex" />
            <TestimonialsColumn testimonials={testimonials} duration={40} className="flex" />
            <TestimonialsColumn testimonials={testimonials} duration={38} className="hidden lg:flex" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0E08] pt-24 pb-12 border-t border-white/5">
        <div className="container max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
               <div className="h-10 w-10 bg-white rounded flex items-center justify-center p-1">
                 <LordIcon
                    src="https://cdn.lordicon.com/zybujcxz.json"
                    trigger="in"
                    delay="1500"
                    state="in-reveal"
                    colors="primary:#1a2116,secondary:#3e5232"
                    style={{ width: '32px', height: '32px' }}
                 />
               </div>
               <span className="text-[16px] font-bold tracking-widest uppercase">Tia Lê</span>
            </div>
            <p className="text-[#ABB8C3] text-[14px] leading-relaxed">
              Elevando o padrão de hospedagem pet. Onde a segurança profissional encontra o amor incondicional.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/tialehotel" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3E5232] transition-colors text-white"><Instagram size={18} /></a>
              <a href="tel:+5511988776655" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3E5232] transition-colors text-white"><Phone size={18} /></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="font-bold uppercase text-[11px] tracking-[0.2em] text-[#3E5232]">Navegação</h5>
            <ul className="space-y-4 text-[13px] text-[#ABB8C3]">
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços Premium</a></li>
              <li><a href="#reserva" className="hover:text-white transition-colors">Pré-Reserva</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Avaliações</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase text-[11px] tracking-[0.2em] text-[#3E5232]">Contato</h5>
            <div className="space-y-4 text-[13px] text-[#ABB8C3]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#3E5232] shrink-0" />
                <span>Rua das Magnólias, 450<br/>Vila Madalena, São Paulo - SP</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#3E5232] shrink-0" />
                <span>(11) 98877-6655</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase text-[11px] tracking-[0.2em] text-[#3E5232]">Qualidade</h5>
            <div className="bg-[#3E5232]/10 p-5 rounded-[24px] border border-[#3E5232]/20">
               <ShieldCheck size={28} className="text-[#3E5232] mb-3" />
               <p className="text-[12px] font-bold text-white uppercase tracking-wider mb-1">Certificação</p>
               <p className="text-[11px] text-[#ABB8C3]">Monitoramento veterinário e controle rigoroso de higiene.</p>
            </div>
          </div>
        </div>
        
        <div className="container max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[11px] text-white/20 uppercase tracking-[0.3em]">
            © 2024 Hotelzinho Tia Lê • Todos os direitos reservados
          </p>
        </div>
      </footer>

      <FloatingWhatsApp />

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 m-4 text-white hover:text-[#3E5232] transition-colors z-10"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Visualização ampliada" 
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
