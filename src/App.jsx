import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Zap, Battery, Leaf, Calendar, Check, MessageCircle, Gauge, Shield, ArrowRight, ChevronDown, Award, Wallet, MapPin, Coffee } from 'lucide-react';

// ============================================
// CONFIGURATION
// ============================================
const ACCENT_COLOR = "#FF5F00"; // High Voltage Orange

// ============================================
// NEW COMPONENT: FAQItem
// ============================================
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-medium text-zinc-200 group-hover:text-white transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-zinc-500"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-8 text-zinc-400 leading-relaxed text-base md:text-lg max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ============================================
// ASSETS
// ============================================

const XC90Orange = () => (
  <svg 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 677 291" 
    className="w-full h-auto drop-shadow-[0_0_25px_rgba(255,95,0,0.4)]"
  >
    <g fill={ACCENT_COLOR} stroke={ACCENT_COLOR} strokeWidth="0.1">
      <path id="svg_2" d="m332.67424,47.97349c57.89447,19.59126 82.62356,39.9143 111.75256,54.9073c5.03,2.589 13.17006,6.61746 19.10898,7.882c5.93892,1.26454 14.92046,1.1977 22.28746,2.2397c30.471,4.307 61.066,7.993 90.366,18.09c5.174,1.783 10.226,3.963 15.22,6.214c4.218,1.9 6.29,5.19 5.657,10.042c-0.322,2.463 -0.016,5.002 -0.246,7.483c-0.545,5.874 -0.207,11.211 6.028,14.31c1.13,0.563 2.296,2.35 2.33,3.602c0.18,6.457 0.562,12.994 -0.222,19.368c-0.76,6.167 -4.373,10.798 -10.182,13.916c-6.43,3.451 -12.166,8.26 -18.723,11.39c-4.776,2.28 -10.362,2.953 -15.653,4.015c-1.968,0.395 -4.498,0.61 -4.676,-2.823c-0.025,-0.482 -2.014,-1.47 -2.575,-1.19c-1.111,0.557 -2.153,1.695 -2.71,2.842c-2.878,5.937 -4.738,12.567 -8.512,17.838c-19.538,27.293 -62.618,23.694 -77.996,-6.232c-2.76,-5.372 -11.48789,-5.92633 -11.669,-6.3c-0.1811,-0.37367 -12.967,-0.296 -14.444,-0.34a9284,9284 0 0 0 -79.43,-2.005c-53.79,-1.14 -107.582,-2.159 -161.369,-3.396c-3.585,-0.083 -4.34,1.413 -5.255,4.308c-6.385,20.197 -25.868,33.719 -46.395,32.438c-22.34,-1.394 -39.481,-16.229 -43.57,-37.872c-0.49,-2.6 -1.208,-4.28 -4.184,-4.513a716,716 0 0 1 -21.532,-2.011c-6.423,-0.696 -12.89,-1.244 -19.22,-2.465c-14.222,-2.744 -24.686,-15.35 -25.572,-30.358c-0.245,-4.155 -0.037,-8.35 -0.498,-12.476c-0.567,-5.069 1.292,-8.386 6.07,-9.994c3.403,-1.145 4.206,-3.33 4.032,-6.84c-0.56,-11.308 -0.853,-22.633 -0.989,-33.955c-0.133,-11.122 3.658,-21.128 10.988,-29.264c8.854,-9.827 18.511,-18.932 27.85,-28.38l-3,-2.17c3.485,-5.377 8.933,-5.486 14.087,-6.087a84,84 0 0 1 9.422,-0.541c8.03,-0.031 18.56369,-6.58342 21.62573,-7.45742c3.06203,-0.874 5.29615,-1.45316 7.69827,-1.56758c1.13131,1.07083 2.26262,2.14167 3.39393,3.2125l1.65807,3.1165c175.79315,2.99494 184.315,4.256 192.76,5.192c-5.62339,3.89824 -4.19301,-2.43975 -3.48201,-3.01975c1.594,-1.267 8.33001,-0.21425 9.76801,-1.14925" />
      <path id="svg_4" d="m308.58558,59.83548l5.6549,-9.87569c1.33936,-3.6816 -47.24519,-5.5564 -59.60157,-8.08345c-12.35638,-2.52706 -29.27945,0.38673 -10.5342,-3.10103c4.68631,-0.87194 13.20684,-0.83591 23.18862,-0.26368c9.98179,0.57222 21.15852,1.28118 31.68989,2.55405c21.06273,2.54574 32.5743,4.41768 34.94987,7.16906m-21.15553,-2.92794" />
      <path id="svg_25" d="m157.69958,38.28334c12.6589,-0.54652 25.31779,-1.09303 37.97669,-1.63955l19.42599,-0.38215c7.20472,0.31026 14.84708,-0.03593 22.0518,0.27433c12.69537,0.80286 25.46366,1.3869 36.55437,1.97095c11.09071,0.58404 22.40023,2.69981 33.49093,4.15913c9.50248,0.73343 18.52327,4.63171 27.09366,6.56354l-22.27966,-2.85002l-47.9716,-2.9663l-46.22105,-1.21577l-46.11165,0.20655l-46.54928,1.51948l-1.03199,-1.41004c0.56619,-0.51782 1.54527,-1.03564 2.11146,-1.55347c4.54097,-0.82061 5.69632,-0.89802 9.90698,-1.38832l21.55335,-1.28836z" />
      <path id="svg_33" d="m184.06755,41.32343l3.22152,0.91888l0,6.04027l-3.13199,0l-0.08953,-6.95915z" transform="rotate(-21 185.678 44.803)" />
      <path id="svg_34" d="m191.72271,40.5906l4.42923,0.22633l-0.64292,9.37191l-3.78631,-2.21569l0,-7.38255z" transform="rotate(-27 193.937 45.3897)" />
      <path id="svg_36" d="m186.55589,46.35038l8.00964,-0.05856l3.61,3.97354l-3.2797,-1.23042l-8.10281,0l0,-1.45414l-0.11857,-0.61521l-0.11856,-0.61521z" />
    </g>
  </svg>
);

const WireBenefit = ({ icon: Icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center md:justify-center w-full mb-16 md:mb-24 group">
      <div className={`hidden md:flex w-full items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}
        >
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
        <div className="absolute left-1/2 -translate-x-1/2 z-10">
          <div className="w-12 h-12 rounded-full bg-black border-2 flex items-center justify-center shadow-[0_0_20px_rgba(255,95,0,0.3)]" style={{ borderColor: ACCENT_COLOR }}>
            <Icon className="w-5 h-5" style={{ color: ACCENT_COLOR }} />
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="flex md:hidden w-full px-6">
         <div className="absolute left-6 top-0 z-10">
          <div className="w-10 h-10 rounded-full bg-black border-2 flex items-center justify-center" style={{ borderColor: ACCENT_COLOR }}>
            <Icon className="w-4 h-4" style={{ color: ACCENT_COLOR }} />
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="pl-14 pt-1 pr-4"
        >
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  // Formspree Hook
  const [state, handleFormspreeSubmit] = useForm("xvzbodoz");
  
  const { scrollYProgress } = useScroll();
  const wireHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);
  const overlayColor = useTransform(scrollYProgress, [0, 0.6], ["rgba(5, 5, 5, 0.98)", "rgba(8, 28, 8, 0.85)"]);
  
  const [demoDay, setDemoDay] = useState(null); 
  const [isVip, setIsVip] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('ref') === 'vip') {
      setIsVip(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!demoDay) return alert("Kies een datum.");
    handleFormspreeSubmit(e);
  };

  const waMessage = isVip 
    ? "Hi Steef, ik heb de Final Spark box geopend en heb een vraag over de techniek van de XC90..."
    : "Hi Steef, ik heb de brief over de XC90 ontvangen en ben benieuwd naar de ombouw...";

  return (
    <div className="min-h-screen font-sans text-zinc-100 relative selection:bg-orange-500/30">
      
      {/* ============ FIXED BACKGROUND LAYERS ============ */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/images/video.mp4" type="video/mp4" />
          <img src="/images/Greentimer12.jpg" alt="Backup Background" />
        </video>
        <motion.div className="absolute inset-0 z-10" style={{ backgroundColor: overlayColor }} />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-[100] w-full bg-black/40 backdrop-blur-md border-b border-white/5">
  <div className="flex justify-between items-center max-w-6xl mx-auto w-full px-4 py-4 md:py-6">
    <div className="flex items-center gap-3 font-bold tracking-wider">
      {/* WE LOVO LINK */}
      <a href="https://www.welovo.nl/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img src="/images/hartje.png" alt="Logo Icon" className="h-7 md:h-9 w-auto object-contain" />
        <span className="text-base md:text-lg leading-none">WELOVO</span>
      </a>
      
      <span className="text-zinc-600 text-xl opacity-40">×</span>
      
      {/* GREENTIMER LINK */}
      <a href="https://greentimer.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
        <img src="/images/greentimer logo.png" alt="Greentimer" className="h-6 md:h-8 w-auto object-contain" />
      </a>

      {/* VIP PROJECT LABEL - Alleen zichtbaar voor box-groep op desktop/tablet */}
      {isVip && (
        <div className="hidden md:flex items-center ml-4 pl-4 border-l border-white/10">
          <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-medium">
            The Final Spark
          </span>
        </div>
      )}
    </div>

    <button 
      onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
      className="px-5 py-2 rounded-full text-[10px] md:text-xs font-bold bg-white/10 hover:bg-white/20 transition-colors uppercase tracking-widest"
    >
      MELD AAN
    </button>
  </div>
</header>
      
        <section className="relative min-h-[90vh] flex flex-col px-4 pt-12 overflow-hidden">
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto z-10 px-4">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
              {isVip ? (
                <>
                  <h1 className="text-4xl md:text-7xl font-bold leading-[0.95] tracking-tighter mb-6 uppercase">
                    TIJDLOOS DESIGN.<br /><span style={{ color: ACCENT_COLOR }}>NIEUWE ENERGIE.</span>
                  </h1>
                  <p className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl mx-auto">Behoud het karakter. Kies voor de techniek van morgen.</p>
                </>
              ) : (
                <>
                  <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-6">
                    TIJDLOOS DESIGN.<br /><span style={{ color: ACCENT_COLOR }}>NIEUWE ENERGIE.</span>
                  </h1>
                  <p className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl mx-auto">Behoud het karakter. Kies voor de techniek van morgen.</p>
                </>
              )}
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="w-full max-w-[550px] mb-6 pointer-events-none">
              <XC90Orange />
            </motion.div>
            {isVip && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="flex flex-col items-center mb-10">
                <p className="text-zinc-500 italic font-serif text-sm md:text-base mb-6 max-w-sm">"U heeft het symbool van het verleden in handen. Scrol naar beneden voor de toekomst."</p>
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-px h-12 rounded-full" style={{ background: `linear-gradient(to bottom, ${ACCENT_COLOR}, transparent)` }} />
              </motion.div>
            )}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: [`0 0 20px ${ACCENT_COLOR}30`, `0 0 40px ${ACCENT_COLOR}60`, `0 0 20px ${ACCENT_COLOR}30`] }}
              transition={{ repeat: Infinity, duration: 3 }}
              onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 px-10 py-5 rounded-full font-bold text-black text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: ACCENT_COLOR }}
            >
              <Calendar className="w-5 h-5" /> AANMELDEN DEMO DAGEN
            </motion.button>
          </div>
          <div className="flex justify-center pb-8 opacity-30"><ChevronDown className="w-6 h-6 animate-bounce" /></div>
        </section>

        <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-800/50 border border-white/10 mb-6">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-bold tracking-widest uppercase">EXCLUSIEF VOOR WELOVO RELATIES.</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Een Unieke Showroom Introductie</h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-center">
                <strong className="text-white font-bold">WeLovo</strong> verwelkomt de innovatie van <strong className="text-white font-bold">Greentimer</strong>. 
                Tijdens de <strong className="text-white font-bold">WeLovo x Greentimer Demo Dagen</strong> slaan we the handen ineen om u 
                exclusief kennis te laten maken met de <strong className="text-white font-bold">omgebouwde elektrische XC90</strong>. 
                Ontdek het <strong className="text-white font-bold">vakmanschap</strong> van dichtbij en bespreek met de 
                <strong className="text-white font-bold"> experts</strong> wat deze techniek voor uw Volvo kan betekenen.
              </p>
          </div>
        </section>

        <section className="relative py-24 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto relative">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">De Specificaties</h2>
              <p className="text-zinc-500">Geen compromis, alleen vooruitgang.</p>
            </div>
            <div className="absolute left-6 md:left-1/2 top-[160px] bottom-0 w-0.5 bg-zinc-900 -translate-x-1/2 md:translate-x-0">
              <motion.div className="w-full bg-gradient-to-b from-orange-500 via-orange-500 to-transparent" style={{ height: wireHeight, boxShadow: `0 0 15px ${ACCENT_COLOR}` }} />
            </div>
            <div className="relative z-10">
              <WireBenefit 
  icon={Battery} 
  title="82kWh of 55kwh Batterijpakket" 
  description={<>Keuze uit een 82kWh of 55kWh batterijpakket met een <strong>actieradius tot 450 km (WLTP).</strong> Slim geïntegreerd in het chassis, waardoor de iconische interieurruimte en flexibiliteit volledig behouden blijven.</>} 
  index={0} 
/>
              <WireBenefit icon={Zap} title="Laden terwijl u luncht." description="Snelladen tijdens de lunch of een koffiestop. Met 75kW CCS snelladen laadt u in circa 40 minuten weer bij tot 80% - goed voor de volgende 250 kilometer zorgeloos rijden." index={1} />
              <WireBenefit icon={Wallet} title="Financieel Voordeel" description="Bespaar direct op brandstof en belasting door de overstap naar elektrisch. Benut extra fiscaal voordeel door inruil naar een volledig omgebouwde bijna youngtimer XC90 uit 2003." index={2} />
              <WireBenefit icon={Shield} title="1,5 Jaar Volledige Garantie" description="Zorgeloos rijden met volledige garantie op de motor, batterijen en software." index={3} />
              <WireBenefit icon={Leaf} title="Maximale Duurzaamheid" description="Het behouden van een bestaand voertuig is de groenste keuze. Bespaar de enorme CO2-footprint van een nieuw productieproces." index={4} />
              <WireBenefit icon={Gauge} title="Direct Koppel" description="Ervaar het plezier van elektrisch rijden. Sneller, stiller en krachtiger dan de originele brandstofmotor." index={5} />
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-video rounded-3xl overflow-hidden group border border-white/5 shadow-2xl">
                <img src="/images/Greentimer_4_720.jpg" alt="Engine Integration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                  <span className="text-orange-500 font-bold mb-1 uppercase tracking-tighter">De Techniek</span>
                  <p className="text-white text-xl font-bold italic">Vanaf € 30.000 — Modulaire Ombouw</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden group border border-white/5 shadow-2xl">
                <img src="/images/wekplaats_bg.jpg.jpg" alt="Volvo Classic Looks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                  <span className="text-orange-500 font-bold mb-1 uppercase tracking-tighter">Het Resultaat</span>
                  <p className="text-white text-xl font-bold italic">Binnen 2 weken — Rijden in Stijl</p>
                </div>
              </div>
          </div>
        </section>

        {/* ============ FAQ SECTION ============ */}
        <section className="py-24 px-4 bg-black/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center italic tracking-tight uppercase">Veelgestelde Vragen</h2>
            <div className="flex flex-col">
              <FAQItem 
  question="Hoe ver kom ik echt met een elektrische XC90?" 
  answer={<>Met het 82kWh accupakket haalt de XC90 een actieradius van <strong>450 km (WLTP)</strong>. In de praktijk komt dit neer op <strong>ruim 350 km</strong> puur elektrisch rijden. Dankzij de CCS-snellaadtechniek is de accu bovendien in <strong>40 minuten weer voor 80% vol</strong>, ideaal voor langere ritten of vakanties.</>}
/>
<FAQItem 
  question="Wat zijn de grootste besparingen na de ombouw?" 
  answer={<>De grootste winst zit in het dagelijks gebruik. Gemiddeld bespaart u <strong>ruim €280 per maand</strong> aan brandstofkosten (bij 15.000 km/jaar). Daarnaast dalen de onderhoudskosten met <strong>zo'n 60%</strong>; een elektromotor heeft immers nauwelijks bewegende delen en behoeft geen dure beurten voor filters, olie of distributieriemen.</>}
/>
<FAQItem 
  question="Wat kost een volledige transformatie?" 
  answer={<>Een complete ombouw begint bij <strong>€30.000 (ex. BTW)</strong> voor het 55kWh pakket. Voor het grotere 82kWh pakket (450 km range) ligt de investering rond de <strong>€35.000</strong>.</>}
/>
<FAQItem 
  question="Welke Volvo XC90 modellen zijn geschikt voor ombouw?" 
  answer={<>De huidige ombouwset is specifiek ontwikkeld voor de <strong>eerste generatie XC90 (modeljaar 2002 t/m 2014)</strong>. Zowel de 5- als de '7-zitplaats' versies kunnen worden omgebouwd naar een volledig elektrische aandrijving.</>}
/>
<FAQItem 
  question="Wat is de 'Electric Youngtimer' optie precies?" 
  answer={<>Voor ondernemers die willen blijven profiteren van de <strong>Youngtimer-regeling</strong>, is er de mogelijkheid om uw huidige XC90 in te ruilen voor een reeds omgebouwd bijna youngtimer 2003-model. Zo rijdt u <strong>emissievrij</strong> met de maximale fiscale voordelen.</>}
/>
<FAQItem 
  question="Is een bestaande auto ombouwen echt duurzamer dan een nieuwe EV?" 
  answer={<>Absoluut. De productie van een nieuwe elektrische SUV kost gemiddeld <strong>20 ton CO2</strong>. Door uw huidige XC90 te behouden en te elektrificeren, bespaart u die enorme uitstoot én krijgt u <strong>onbeperkt toegang tot alle toekomstige milieuzones</strong>. Het is de meest circulaire manier van autorijden.</>}
/>
            </div>
          </div>
        </section>

        <section id="register" className="py-24 px-4">
          <div className="max-w-xl mx-auto bg-black/90 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight italic uppercase">STAP ACHTER HET STUUR</h2>
              <div className="space-y-2">
                <p className="text-zinc-400">Persoonlijk advies en een proefrit in Beverwijk. <a href="https://www.google.com/maps/place/Welovo/@52.4785188,4.6623645,17z/data=!3m1!4b1!4m6!3m5!1s0x47c5e5e035ba107d:0x83b72df7db37cc0b!8m2!3d52.4785156!4d4.6649394!16s%2Fg%2F1td5_x_x?coh=277534&entry=tts&g_ep=EgoyMDI2MDIwNC4wIPu8ASoKLDEwMDc5MjA3MUgBUAM%3D&skid=a1a900fb-2539-4291-b0fa-0873013fd209" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white transition-colors">WeLovo Beverwijk <MapPin className="w-3.5 h-3.5" /></a></p>
                <p className="text-zinc-400 font-medium">De proefrit en het advies zijn volledig kosteloos en vrijblijvend.</p>
              </div>
            </div>

            {state.succeeded ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"><Check className="w-10 h-10" strokeWidth={3} /></div>
                <h3 className="text-3xl font-bold text-white mb-2 italic">Bevestigd!</h3>
                <p className="text-zinc-400">We nemen binnen 24 uur contact op om het exacte tijdstip voor {demoDay} af te spreken.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden Fields voor context in de mail */}
                <input type="hidden" name="Campagne_Type" value={isVip ? "VIP (Box ontvangen)" : "Regulier (Brief ontvangen)"} />
                <input type="hidden" name="Gekozen_Dag" value={demoDay || 'Nog niet gekozen'} />
                
                <div className="flex gap-4 mb-6">
                  {['28 Maart', '11 April'].map((day) => (
                    <button key={day} type="button" onClick={() => setDemoDay(day)} className={`flex-1 p-5 rounded-2xl border-2 transition-all ${demoDay === day ? 'bg-orange-500/10 border-orange-500 text-orange-500' : 'bg-zinc-900 border-transparent hover:border-white/10'}`}>
                      <div className="text-2xl font-black">{day.split(' ')[0]}</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">{day.split(' ')[1]} (Za)</div>
                    </button>
                  ))}
                </div>
                <div className="space-y-3">
                  <input type="text" name="Naam" required placeholder="Uw Naam" className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 focus:border-orange-500 outline-none transition-colors" />
                  <input type="email" name="Email" required placeholder="E-mailadres" className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 focus:border-orange-500 outline-none transition-colors" />
                  <ValidationError prefix="Email" field="Email" errors={state.errors} className="text-red-500 text-xs" />
                  <input type="tel" name="Telefoon" required placeholder="Telefoonnummer" className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 focus:border-orange-500 outline-none transition-colors" />
                </div>
                <motion.button type="submit" disabled={state.submitting} className="w-full py-5 rounded-2xl font-black text-black mt-6 flex items-center justify-center gap-3 text-lg uppercase tracking-tight" style={{ backgroundColor: ACCENT_COLOR }}>
                  {state.submitting ? 'Verwerken...' : 'IK BEN ERBIJ'}
                  {!state.submitting && <ArrowRight className="w-5 h-5" />}
                </motion.button>
                <p className="text-[10px] text-zinc-500 text-center mt-3 italic">Beperkt aantal plekken beschikbaar om persoonlijke aandacht te garanderen.</p>
              </form>
            )}

            <div className="mt-12 pt-10 border-t border-white/5 text-center">
              <p className="text-zinc-500 text-sm mb-4">Directe vraag over de techniek?</p>
              <a href={`https://wa.me/31647234285?text=${encodeURIComponent(waMessage)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all group">
                <MessageCircle className="w-5 h-5 fill-[#25D366]" />
                <span className="font-bold">App met Steef (Founder Greentimer)</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-white/5 text-center text-zinc-600 text-xs tracking-widest uppercase bg-black/80 backdrop-blur-sm">
          <p>&copy; {new Date().getFullYear()} WeLovo & Greentimer — The Final Spark</p>
        </footer>
      </div>
    </div>
  );
}