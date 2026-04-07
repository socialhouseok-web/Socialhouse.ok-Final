import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown, Menu, X, ArrowUpRight, BarChart3, Layout, Zap, Users, Target, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-xl tracking-tighter">
          SOCIAL<span className="text-muted">HOUSE</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted">
          <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Casos de Éxito</a>
          <a href="#proceso" className="hover:text-foreground transition-colors">Proceso</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>

        <div className="hidden md:block">
          <a href="#contacto" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
            Agendar Llamada <ArrowRight size={16} />
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col space-y-4">
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Servicios</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Casos de Éxito</a>
          <a href="#proceso" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Proceso</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">FAQ</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="bg-white text-black px-5 py-3 rounded-full text-center font-semibold mt-4">
            Agendar Llamada
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/5 text-xs font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Aceptando nuevos proyectos para Q3
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter mb-6 text-balance"
        >
          No hacemos páginas web. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Construimos máquinas de conversión.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto text-balance"
        >
          Diseño premium y estrategia de ventas para marcas que no se conforman con lo ordinario. Transformamos clics en clientes de alto valor.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contacto" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            Agendar Sesión Estratégica <ArrowRight size={18} />
          </a>
          <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium border border-border hover:bg-white/5 transition-colors flex items-center justify-center">
            Ver Casos de Éxito
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-12 border-y border-border bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-medium text-muted mb-8 uppercase tracking-widest">Confiado por marcas ambiciosas</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {/* Placeholder Logos */}
          {['NEXUS', 'ELEVATE', 'APEX', 'LUMINA', 'VERTEX'].map((logo, i) => (
            <div key={i} className="font-display font-bold text-2xl tracking-widest flex items-center">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Diseño Web Estratégico",
      description: "Sitios web corporativos diseñados para posicionar tu marca como líder de la industria y guiar al usuario hacia la compra.",
      for: "Empresas B2B y marcas personales consolidadas."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Landing Pages de Alta Conversión",
      description: "Páginas de un solo objetivo optimizadas psicológicamente para maximizar la captura de leads o ventas directas.",
      for: "Campañas de ads, lanzamientos y embudos de venta."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Optimización CRO",
      description: "Analizamos tu sitio actual y aplicamos mejoras basadas en datos para aumentar tu tasa de conversión sin gastar más en tráfico.",
      for: "E-commerces y negocios con tráfico existente."
    }
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Tu web no debería ser un gasto.<br/>Debe ser tu mejor vendedor.</h2>
        <p className="text-muted text-lg max-w-2xl">Nos enfocamos en la intersección entre estética premium y psicología del consumidor.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/[0.03] border border-border rounded-2xl p-8 hover:bg-white/[0.05] transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted mb-6 leading-relaxed">{service.description}</p>
            <div className="border-t border-border pt-4 mt-auto">
              <p className="text-sm"><span className="text-white font-medium">Ideal para:</span> <span className="text-muted">{service.for}</span></p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      client: "Elevate SaaS",
      metric: "+150%",
      metricLabel: "Aumento en Leads",
      problem: "Sitio web genérico que no comunicaba el valor del software, resultando en alto rebote.",
      solution: "Rediseño completo enfocado en la claridad del producto y CTAs estratégicos.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
      client: "Apex Consulting",
      metric: "3x",
      metricLabel: "Agendamientos",
      problem: "Percepción de marca barata que atraía clientes no calificados.",
      solution: "Identidad visual premium y embudo de cualificación integrado en la web.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Resultados que hablan.</h2>
          <p className="text-muted text-lg max-w-xl">No mostramos diseños bonitos sin contexto. Mostramos problemas de negocio resueltos a través del diseño.</p>
        </div>
      </div>

      <div className="space-y-12 md:space-y-24">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
          >
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-border aspect-[4/3] relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img src={project.image} alt={project.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">{project.client}</h3>
                <div className="inline-flex items-center gap-2 text-green-400 font-mono text-sm bg-green-400/10 px-3 py-1 rounded-full">
                  <ArrowUpRight size={14} /> {project.metric} {project.metricLabel}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-1">El Problema</h4>
                  <p className="text-muted">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-1">La Solución</h4>
                  <p className="text-muted">{project.solution}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Auditoría y Estrategia",
      desc: "No diseñamos a ciegas. Analizamos tu mercado, competencia y objetivos para definir la arquitectura de conversión."
    },
    {
      num: "02",
      title: "Diseño UX/UI",
      desc: "Creamos interfaces premium que guían el ojo del usuario exactamente hacia donde queremos que vaya."
    },
    {
      num: "03",
      title: "Desarrollo y Animación",
      desc: "Código limpio, carga ultrarrápida y microinteracciones que elevan la percepción de valor de tu marca."
    },
    {
      num: "04",
      title: "Lanzamiento y Optimización",
      desc: "Desplegamos tu sitio y configuramos analíticas para medir el rendimiento desde el día uno."
    }
  ];

  return (
    <section id="proceso" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Un proceso sin fricción.</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">Predecible, transparente y enfocado en entregar valor rápido.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-border -z-10"></div>
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center font-mono text-sm mb-6">
              {step.num}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Differentiation = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Por qué Social House no es "otra agencia más".</h2>
          <p className="text-gray-600 text-lg mb-8">
            La mayoría de agencias te venden sitios web bonitos que nadie visita y que no generan ventas. Nosotros somos socios de crecimiento.
          </p>
          <ul className="space-y-4">
            {[
              "Enfoque 100% en conversión y ROI.",
              "Diseño editorial premium que justifica precios altos.",
              "Comunicación directa, sin intermediarios ni burocracia.",
              "Entregas rápidas sin comprometer calidad."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-black shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 p-8 md:p-12 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6">El costo de una web barata</h3>
          <p className="text-gray-600 mb-6">Un sitio web mal diseñado no te ahorra dinero, te cuesta clientes todos los días. Es la diferencia entre un visitante que confía en ti y uno que se va a tu competencia.</p>
          <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider">
            <span>Invierte en calidad</span> <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "¿Cuánto tiempo toma crear un sitio web?",
      a: "Típicamente entre 4 a 6 semanas, dependiendo de la complejidad del proyecto y la rapidez con la que nos proporciones el contenido y feedback."
    },
    {
      q: "¿Trabajan con mi industria?",
      a: "Trabajamos principalmente con empresas B2B, startups, consultoras y marcas personales de alto nivel. Si vendes un servicio o producto premium, somos el equipo adecuado."
    },
    {
      q: "¿Qué incluye el proceso de diseño?",
      a: "Incluye estrategia de conversión, diseño UX/UI, desarrollo frontend/backend, optimización SEO básica, y configuración de analíticas."
    },
    {
      q: "¿Ofrecen mantenimiento después del lanzamiento?",
      a: "Sí, ofrecemos planes de soporte y optimización continua (CRO) para asegurar que tu sitio siga mejorando sus tasas de conversión mes a mes."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Preguntas Frecuentes</h2>
        <p className="text-muted text-lg">Todo lo que necesitas saber antes de empezar.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-border rounded-2xl overflow-hidden bg-white/[0.02]"
          >
            <button 
              className="w-full px-6 py-5 text-left flex justify-between items-center font-medium text-lg"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.q}
              <ChevronDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-muted">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-gradient-to-b from-white/10 to-transparent border border-border rounded-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/5 blur-3xl -z-10"></div>
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-balance">
          Tu próxima gran etapa empieza con una gran web.
        </h2>
        <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
          Deja de perder clientes por culpa de un sitio web que no refleja la calidad de tu trabajo. Hablemos de tu proyecto.
        </p>
        
        <a href="mailto:hola@socialhouse.com" className="inline-flex items-center justify-center gap-2 bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300">
          Agendar Sesión Estratégica <ArrowRight size={20} />
        </a>
        <p className="mt-6 text-sm text-muted">Sin compromisos. Solo una charla sobre cómo podemos ayudarte a crecer.</p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-bold text-xl tracking-tighter">
          SOCIAL<span className="text-muted">HOUSE</span>
        </div>
        
        <div className="flex gap-6 text-sm text-muted">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Social House. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Portfolio />
        <Process />
        <Differentiation />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
