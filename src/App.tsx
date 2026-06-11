import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { 
  Zap, 
  Settings, 
  ShieldCheck, 
  ThermometerSnowflake, 
  Truck, 
  X, 
  CheckCircle2, 
  BatteryCharging,
  Leaf,
  Calculator,
  ArrowRight,
  ArrowLeft,
  RefreshCcw,
  MapPin,
  Phone,
  Mail,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  Package,
  Thermometer,
  HelpCircle,
  Plus,
  Minus,
  Trophy,
  ChevronDown
} from 'lucide-react';
import { products, categories, Product } from './data';

function Header() {
  const [activeSection, setActiveSection] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on initial load of home page if no hash
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, []); // Only once on mount

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }
    const handleScroll = () => {
      const products = document.getElementById('products');
      const about = document.getElementById('about');
      const contact = document.getElementById('contact');
      
      let current = '/';
      const scrollY = window.scrollY + 120; // Offset for header detection
      
      if (contact && scrollY >= contact.offsetTop) {
        current = 'contact';
      } else if (about && scrollY >= about.offsetTop) {
        current = 'about';
      } else if (products && scrollY >= products.offsetTop) {
        current = 'products';
      }
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    // Check hash on location change and scroll if on home page
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const getLinkClass = (section: string) => {
    const isHome = location.pathname === '/';
    const isActive = isHome ? activeSection === section : location.pathname === section;

    if (isActive) {
      return "text-brand-700 font-extrabold bg-brand-50 px-4 py-2 rounded-full transition-all";
    }
    return "text-slate-500 hover:text-brand-600 hover:bg-slate-50 font-medium px-4 py-2 rounded-full transition-all transition-colors";
  };

  const getMobileLinkClass = (section: string) => {
    const isHome = location.pathname === '/';
    const isActive = isHome ? activeSection === section : location.pathname === section;

    return `font-bold tracking-wider text-sm w-full py-3 block text-center rounded-lg transition-all ${
      isActive 
        ? "text-brand-700 bg-brand-50" 
        : "text-slate-900 hover:text-brand-600 hover:bg-slate-50"
    }`;
  };

  const navLinkClick = (hash: string) => {
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navLinkClickMobile = (hash: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => navLinkClick(hash), 100);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }} className="flex flex-shrink-0 items-center">
            <img 
              src="https://www.image2url.com/r2/default/images/1776844880206-6ab47a67-9326-49bb-87dc-410fc271aec1.png" 
              alt="Gensa Frigo - Profesyonel Araç Frigo Soğutucu Sistemleri" 
              title="Gensa Frigo Soğutucu Sistemleri"
              className="h-9 sm:h-10 w-auto object-contain"
            />
            <span className="ml-4 pl-4 border-l border-slate-200 text-[10px] font-extrabold text-slate-400 tracking-[0.2em] uppercase hidden lg:block">
              Zamanın Ötesinde
            </span>
          </Link>
          <nav className="hidden md:flex gap-2 text-sm font-medium tracking-wider items-center">
            <button onClick={() => {
              if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
              else navigate('/');
            }} className={getLinkClass('/')}>Ana Sayfa</button>
            <button onClick={() => navLinkClick('#products')} className={getLinkClass('products')}>Ürünlerimiz</button>
            <Link to="/hizmetlerimiz" className={getLinkClass('/hizmetlerimiz')}>Hizmetlerimiz</Link>
            <Link to="/sikca-sorulan-sorular" className={getLinkClass('/sikca-sorulan-sorular')}>S.S.S</Link>
            <button onClick={() => navLinkClick('#about')} className={getLinkClass('about')}>Hakkımızda</button>
            <button onClick={() => navLinkClick('#contact')} className={getLinkClass('contact')}>İletişim</button>
          </nav>
          <div className="flex items-center gap-3">
             <Link to="/bayi-girisi" className="hidden md:flex px-4 py-2 border-2 border-brand-950 text-brand-950 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-50 transition-all items-center gap-2">
                BAYİ GİRİŞİ
             </Link>
             <button onClick={() => navLinkClick('#contact')} className="hidden md:block px-5 py-2 bg-brand-950 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-600 transition-all border-2 border-brand-950">
                TEKLİF AL
             </button>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
             </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              <button 
                onClick={() => {
                  if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
                  else navigate('/');
                  setIsMobileMenuOpen(false);
                }} 
                className={getMobileLinkClass('/')}
              >
                Ana Sayfa
              </button>
              <button onClick={() => navLinkClickMobile('#products')} className={getMobileLinkClass('products')}>Ürünlerimiz</button>
              <button onClick={() => {
                navigate('/hizmetlerimiz');
                setIsMobileMenuOpen(false);
              }} className={getMobileLinkClass('/hizmetlerimiz')}>
                Hizmetlerimiz
              </button>
              <button onClick={() => {
                navigate('/sikca-sorulan-sorular');
                setIsMobileMenuOpen(false);
              }} className={getMobileLinkClass('/sikca-sorulan-sorular')}>
                Sıkça Sorulan Sorular
              </button>
              <button onClick={() => navLinkClickMobile('#about')} className={getMobileLinkClass('about')}>Hakkımızda</button>
              <button onClick={() => navLinkClickMobile('#contact')} className={getMobileLinkClass('contact')}>İletişim</button>
              <div className="w-full h-px bg-slate-100 my-4"></div>
              <Link to="/bayi-girisi" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 border-2 border-brand-950 text-brand-950 rounded-xl text-sm font-bold uppercase tracking-wider text-center hover:bg-brand-50 active:bg-brand-100 transition-colors">
                BAYİ GİRİŞİ
              </Link>
              <button onClick={() => navLinkClickMobile('#contact')} className="w-full py-3 bg-brand-950 text-white rounded-xl text-sm font-bold uppercase tracking-wider text-center hover:bg-brand-800 active:bg-brand-900 transition-colors">
                TEKLİF AL
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-brand-950 text-white flex justify-between items-center py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30 md:opacity-40 grayscale-[20%]"
          src="https://www.image2url.com/r2/default/images/1776940128435-58e8fdac-2ca6-4f43-8b08-82bebbe01c3d.png"
          alt="Gensa Frigo - Elektrikli Araç Frigo Sistemleri ve Frigorifik Soğutucu Araçları"
          title="Elektrikli Araç Frigo Sistemleri"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/70 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/20 border border-brand-500/30 rounded-full text-brand-300 text-[10px] font-bold uppercase tracking-widest mb-4">
              <Zap className="w-3 h-3" />
              YENİ NESİL SOĞUTMA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 text-balance">
              Zamanın Ötesinde <br/>Elektrikli Altyapı.
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 text-pretty">
              Araç motorundan bağımsız, yüksek performanslı elektrikli soğutma teknolojimizle tanışın. Maksimum verimlilik ve minimum karbon ayak iziyle, soğuk zinciriniz artık her an, her yerde güvende.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => {
                const el = document.getElementById('products');
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = el.getBoundingClientRect().top;
                  window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
                }
              }} className="px-6 py-3 bg-brand-600 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-500 transition-all flex items-center justify-center gap-2 w-fit shadow-lg shadow-brand-600/30">
                ÜRÜNLERİ İNCELE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </button>
              <button onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = el.getBoundingClientRect().top;
                  window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
                }
              }} className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 w-fit backdrop-blur-sm">
                İLETİŞİME GEÇİN
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:flex flex-col gap-4 border-l border-white/10 pl-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">DÜŞÜK ENERJİ TÜKETİMİ</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand-400 rounded-full"></div>
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">SIFIR EMİSYON</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">%100 ELEKTRİKLİ</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="bg-white border-t border-slate-200">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-2"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-brand-600">
             <BatteryCharging className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800 uppercase tracking-tight">MAKSİMUM VERİMLİLİK</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">DÜŞÜK TÜKETİM</div>
          </div>
        </div>
        <div className="hidden sm:block h-8 w-px bg-slate-100"></div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-brand-600">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800 uppercase tracking-tight">Esnek Montaj</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">TÜM ARAÇ TİPLERİNE</div>
          </div>
        </div>
        <div className="hidden sm:block h-8 w-px bg-slate-100"></div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-brand-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800 uppercase tracking-tight">GÜVENİLİR PERFORMANS</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">12 AY GARANTİ</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function IsolationSection() {
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    {
      src: "https://www.image2url.com/r2/default/images/1781175679439-60d1b273-dddb-469b-9d4f-0652f167f8c7.jfif",
      alt: "Panelvan Araç İzolasyon Uygulaması",
      title: "Profesyonel Panelvan Kaplama"
    },
    {
      src: "https://www.image2url.com/r2/default/images/1781176172311-f48b5500-ca41-4292-8d4b-f01e287ac660.jfif",
      alt: "Frigorifik Kasa Üretimi",
      title: "Yüksek Verimli Soğutucu Kasa"
    },
    {
      src: "https://www.image2url.com/r2/default/images/1781176359608-1865b92c-1e07-4b90-9445-970e0f21b898.jfif",
      alt: "Et ve Kasap Taşımacılığı Uygun İzolasyon",
      title: "Hiyjenik Et Taşımacılığı"
    },
    {
      src: "https://www.image2url.com/r2/default/images/1781176074496-6ce0cb0e-a946-4b1e-a1e8-4ea6fc661c5f.png",
      alt: "Sebze ve Meyve Lojistiği İçin Taze Gıda Çözümleri",
      title: "Taze Gıda (+4 Derece) Koruması"
    },
    {
      src: "https://www.image2url.com/r2/default/images/1781176048856-07d67e67-a101-4a5a-ab11-7122fe7613ee.jfif",
      alt: "Dondurulmuş Gıda Taşımacılığı -18 Derece",
      title: "Derin Dondurucu (-18) Çözümleri"
    },
    {
      src: "https://www.image2url.com/r2/default/images/1781176014244-f64ac07c-0baa-4d2c-97a2-019e5b6e9992.png",
      alt: "Gensa Frigo Özel Panel Üretimi",
      title: "Özel Tasarım Paneller"
    },
    {
      src: "https://www.image2url.com/r2/default/images/1781175899794-d719e6a7-ff2a-44d8-aa3f-9f31c324e1df.jfif",
      alt: "Lojistik Araç İzolasyonu İstanbul",
      title: "Modern Üretim Tesisi"
    },
    {
      src: "https://www.image2url.com/r2/default/images/1781175847037-e6e03ce9-80b4-4b31-88ec-6ba048aa562d.jfif",
      alt: "Doblo için Frigorifrik İzolasyon",
      title: "Sertifikalı Güvence"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-100 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              ÜSTÜN MÜHENDİSLİK & İZOLASYON
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Kusursuz İzolasyon, Kesintisiz Soğutma: <span className="text-brand-600">Gensa Frigo Panel Teknolojisi</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
              Lojistik sektöründe doğru soğutma kadar, soğuk havayı araç içinde muhafaza edebilmek de hayati önem taşır. Gensa Frigo olarak, ticari araçların iç hacmini en verimli şekilde koruyan, yüksek mühendislik ürünü izolasyon çözümleri sunuyoruz. İstanbul’daki 1200 m²’lik modern tesisimizde, panelvanlardan büyük kasalı araçlara kadar geniş bir yelpazede, aracın orijinal yapısını bozmadan profesyonel yalıtım uyguluyoruz.
            </p>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-brand-950 text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-600 transition-all shadow-2xl shadow-brand-950/20 active:scale-95"
            >
              {isOpen ? "BİLGİLERİ GİZLE" : "TEKNİK DETAYLARI İNCELE"}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl h-[400px] shadow-2xl relative group">
              <img 
                src={images[0].src} 
                alt={images[0].alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-400 font-bold text-xs tracking-widest uppercase mb-2">Sektörel Liderlik</span>
                <span className="text-white font-extrabold text-xl tracking-tight">{images[0].title}</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl h-[190px] shadow-xl">
              <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden rounded-2xl h-[190px] shadow-xl">
              <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-12 border-t border-slate-100 mt-8">
                <div className="text-center mb-16">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">Neden Gensa Frigo İzolasyonu?</h3>
                  <div className="w-20 h-1.5 bg-brand-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {[
                    {
                      title: "Yüksek Yoğunluklu Poliüretan Paneller",
                      desc: "Isı transferini minimuma indiren, uluslararası standartlarda yüksek yoğunluklu poliüretan köpük ve fiberglas (CTP) paneller kullanıyoruz. Bu sayede dış ortam sıcaklığı ne olursa olsun, kasa içi iklimlendirme stabilitesini maksimumda tutuyoruz.",
                      icon: <ThermometerSnowflake className="w-6 h-6" />
                    },
                    {
                      title: "Hafif, Dayanıklı ve Sağlık Standartlarına Uygun",
                      desc: "Panellerimiz aracınıza ekstra yük bindirmez, yakıt tüketimini optimize etmenize yardımcı olur. Kolay temizlenebilir, antibakteriyel ve gıda taşımacılığı standartlarına (HACCP) tamamen uygun yüzey yapısıyla uzun ömürlü kullanım sunar.",
                      icon: <Leaf className="w-6 h-6" />
                    },
                    {
                      title: "Araç Orijinalliğini Koruyan Kusursuz İşçilik",
                      desc: "Deneyimli teknik ekibimizle, aracın mekanik ve yapısal orijinalliğini koruyarak milimetrik işçilikle uygulama yapıyoruz. Panel birleşim noktalarında ısı köprülerini tamamen ortadan kaldıran sızdırmazlık teknolojisi uyguluyoruz.",
                      icon: <Settings className="w-6 h-6" />
                    },
                    {
                      title: "Geniş Araç Uyumluluğu",
                      desc: "Çözümlerimiz sadece panelvan araçlarla sınırlı değildir. Şehir içi dağıtım yapan küçük ticari araçlardan, büyük lojistik operasyonlarda kullanılan kasalı kamyon ve kamyonetlere kadar her segmentteki araca özel izolasyon tasarımı ve uygulaması gerçekleştiriyoruz.",
                      icon: <Truck className="w-6 h-6" />
                    },
                    {
                      title: "Tek Çatı Altında, Anahtar Teslim Çözüm!",
                      desc: "Aracınızın izolasyonu ve cihaz montajı için farklı servisler arasında zaman kaybetmeyin. Gensa Frigo güvencesiyle aracınızı fabrikamıza bırakın, izolasyonundan akıllı soğutucu montajına kadar tüm süreçleri tamamlanmış olarak, doğrudan 'işe hazır' teslim alın.",
                      icon: <Zap className="w-6 h-6" />
                    }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-300 hover:bg-white hover:shadow-2xl hover:shadow-brand-900/5 transition-all duration-300 group"
                    >
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                        {item.icon}
                      </div>
                      <h4 className="font-extrabold text-slate-900 mb-4 text-lg">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-8 rounded-3xl bg-brand-950 text-white flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-1000">
                      <Globe className="w-32 h-32" />
                    </div>
                    <p className="text-brand-400 font-extrabold text-xs tracking-[0.3em] uppercase mb-4 relative z-10">İLETİŞİME GEÇİN</p>
                    <h4 className="text-xl font-bold mb-8 leading-tight relative z-10">Filonuz için en uygun izolasyon çözümü ve fiyat teklifi almak için bizimle iletişime geçin.</h4>
                    <button 
                       onClick={() => {
                         const el = document.getElementById('contact');
                         if (el) el.scrollIntoView({ behavior: 'smooth' });
                       }}
                       className="px-8 py-4 bg-white text-brand-950 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-brand-500 hover:text-white transition-all duration-300 relative z-10 active:scale-95"
                    >
                      HEMEN TEKLİF ALIN
                    </button>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {images.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: idx % 2 === 0 ? 1 : -1
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 relative group cursor-pointer"
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-all duration-500 flex flex-col justify-end p-6">
                        <span className="text-white text-xs font-black tracking-[0.1em] uppercase leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</span>
                      </div>
                      {/* Hidden SEO Keywords */}
                      <span className="sr-only">
                        kasap, et taşımacılığı, -18 derece dondurulmuş gıda, +4 derece taze gıda, sebze meyve lojistiği, 
                        kasa izolasyonu, kayarperde, yalıtım kaplama, frigorifrik araç, panelvan yalıtım, İstanbul araç soğutma
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProductWizard({ onSelectProduct }: { onSelectProduct: (p: Product) => void }) {
  const [step, setStep] = useState(1);
  const [volume, setVolume] = useState('');
  const [temp, setTemp] = useState('');

  const handleVolume = (v: string) => { setVolume(v); setStep(2); };
  const handleTemp = (t: string) => { setTemp(t); setStep(3); };
  const reset = () => { setStep(1); setVolume(''); setTemp(''); };

  let recommendedProduct = products[0];
  let recommendedModelText = "";
  if (step === 3) {
     if (volume === 'v0') {
       recommendedProduct = products.find(p => p.id === 'gns1-e') || products[0];
       recommendedModelText = "GNS1-E";
     } else if (volume === 'v1') {
       recommendedProduct = products.find(p => p.id === 'gns2-e') || products[0];
       recommendedModelText = "GNS2-E";
     } else if (volume === 'v2') {
       recommendedProduct = products.find(p => p.id === 'gns3-series') || products[0];
       recommendedModelText = temp === 't2' ? "GNS3D-E" : "GNS3-E";
     } else if (volume === 'v3') {
       recommendedProduct = products.find(p => p.id === 'gns4-series') || products[0];
       recommendedModelText = temp === 't2' ? "GNS4D-E" : "GNS4-E";
     } else if (volume === 'v4') {
       recommendedProduct = products.find(p => p.id === 'gns5-series') || products[0];
       recommendedModelText = temp === 't2' ? "GNS5D-E" : "GNS5-E";
     } else if (volume === 'v5') {
       recommendedProduct = products.find(p => p.id === 'gns4k-e') || products[0];
       // Assuming kasalı versions don't have D versions yet, or we didn't specify D versions
       recommendedModelText = "GNS4K-E";
     } else if (volume === 'v6') {
       recommendedProduct = products.find(p => p.id === 'gns5k-e') || products[0];
       recommendedModelText = "GNS5K-E";
     }
  }

  return (
    <section className="bg-slate-50 border-b border-brand-100 py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-brand-900/5 overflow-hidden flex flex-col md:flex-row"
        >
            {/* Sidebar */}
            <div className="p-8 text-center md:text-left md:w-2/5 bg-brand-950 text-white flex flex-col justify-center relative overflow-hidden shrink-0">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                 <Calculator className="w-10 h-10 mb-6 mx-auto md:mx-0 text-brand-400" />
                 <h3 className="text-2xl font-bold mb-3 tracking-tight">Akıllı Seçim Asistanı</h3>
                 <p className="text-sm text-slate-400 leading-relaxed mb-6">Sadece 2 soruda aracınızın soğutma ihtiyacına en uygun Gensa Frigo modelini hesaplayalım.</p>
                 <div className="flex gap-2 justify-center md:justify-start">
                   <div className={`h-1.5 w-8 rounded-full ${step >= 1 ? 'bg-brand-500' : 'bg-slate-700'}`}></div>
                   <div className={`h-1.5 w-8 rounded-full ${step >= 2 ? 'bg-brand-500' : 'bg-slate-700'}`}></div>
                   <div className={`h-1.5 w-8 rounded-full ${step >= 3 ? 'bg-emerald-500' : 'bg-slate-700'}`}></div>
                 </div>
            </div>
            {/* Content Array */}
            <div className="p-8 md:p-12 w-full flex flex-col justify-center bg-white min-h-[320px]">
                 {step === 1 && (
                   <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}}>
                     <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                       <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs shrink-0">1</span>
                       Aracınızın ortalama iç hacmi nedir?
                     </h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4">
                       <button onClick={() => handleVolume('v0')} className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-sm transition-all group flex flex-col justify-center bg-white relative">
                          <div className="font-bold text-base md:text-lg text-slate-800 group-hover:text-brand-700 leading-tight mb-2 flex flex-col items-start w-full gap-1 transition-colors">
                            <span className="shrink-0">Panelvan Küçük</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-50 px-2 py-0.5 rounded-md group-hover:bg-brand-100/50 group-hover:text-brand-600 transition-colors">(0 - 7 m³)</span>
                          </div>
                          <div className="text-[13px] text-slate-500 leading-relaxed text-balance w-full text-left pr-2">Sanal market araçları, minivan tarzı ticari araçlar.</div>
                          <div className="mt-3 flex flex-wrap gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                            {["Doblo", "Combo", "Berlingo", "Courier", "Kangoo"].map(v => (
                              <span key={v} className="text-[9px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100 uppercase">
                                {v}
                              </span>
                            ))}
                          </div>
                        </button>
                       <button onClick={() => handleVolume('v2')} className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-sm transition-all group flex flex-col justify-center bg-white relative">
                          <div className="font-bold text-base md:text-lg text-slate-800 group-hover:text-brand-700 leading-tight mb-2 flex flex-col items-start w-full gap-1 transition-colors">
                            <span className="shrink-0">Panelvan Orta</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-50 px-2 py-0.5 rounded-md group-hover:bg-brand-100/50 group-hover:text-brand-600 transition-colors">(7 - 10 m³)</span>
                          </div>
                          <div className="text-[13px] text-slate-500 leading-relaxed text-balance w-full text-left pr-2">Orta şasi frigorifik panelvanlar veya ticari araçlar.</div>
                          <div className="mt-3 flex flex-wrap gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                            {["Expert", "Trafic", "Scudo", "Ducato"].map(v => (
                              <span key={v} className="text-[9px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100 uppercase">
                                {v}
                              </span>
                            ))}
                          </div>
                        </button>
                       <button onClick={() => handleVolume('v3')} className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-sm transition-all group flex flex-col justify-center bg-white relative">
                          <div className="font-bold text-base md:text-lg text-slate-800 group-hover:text-brand-700 leading-tight mb-2 flex flex-col items-start w-full gap-1 transition-colors">
                            <span className="shrink-0">Panelvan Büyük</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-50 px-2 py-0.5 rounded-md group-hover:bg-brand-100/50 group-hover:text-brand-600 transition-colors">(10 - 17 m³)</span>
                          </div>
                          <div className="text-[13px] text-slate-500 leading-relaxed text-balance w-full text-left pr-2">Geniş hacimli panelvanlar.</div>
                          <div className="mt-3 flex flex-wrap gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                            {["Transit", "Crafter", "Gazelle", "Sprinter"].map(v => (
                              <span key={v} className="text-[9px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100 uppercase">
                                {v}
                              </span>
                            ))}
                          </div>
                        </button>
                       <button onClick={() => handleVolume('v4')} className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-sm transition-all group flex flex-col justify-center bg-white relative">
                          <div className="font-bold text-base md:text-lg text-slate-800 group-hover:text-brand-700 leading-tight mb-2 flex flex-col items-start w-full gap-1 transition-colors">
                            <span className="shrink-0">Panelvan Maxi</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-50 px-2 py-0.5 rounded-md group-hover:bg-brand-100/50 group-hover:text-brand-600 transition-colors">(17+ m³)</span>
                          </div>
                          <div className="text-[13px] text-slate-500 leading-relaxed text-balance w-full text-left pr-2">En büyük hacimli panelvan araçlar.</div>
                          <div className="mt-3 flex flex-wrap gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                            {["Daily L", "Ducato L", "Boxer L"].map(v => (
                              <span key={v} className="text-[9px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100 uppercase">
                                {v}
                              </span>
                            ))}
                          </div>
                        </button>
                       <button onClick={() => handleVolume('v5')} className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-sm transition-all group flex flex-col justify-center bg-white relative">
                          <div className="font-bold text-base md:text-lg text-slate-800 group-hover:text-brand-700 leading-tight mb-2 flex flex-col items-start w-full gap-1 transition-colors">
                            <span className="shrink-0">Kasalı Araç</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-50 px-2 py-0.5 rounded-md group-hover:bg-brand-100/50 group-hover:text-brand-600 transition-colors">(-20 m³)</span>
                          </div>
                          <div className="text-[13px] text-slate-500 leading-relaxed text-balance w-full text-left pr-2">Frigorifik kasalı kamyonet tarzı araçlar.</div>
                          <div className="mt-3 flex flex-wrap gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                            {["Mercedes", "H100", "Bongo", "Kia"].map(v => (
                              <span key={v} className="text-[9px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100 uppercase">
                                {v}
                              </span>
                            ))}
                          </div>
                        </button>
                       <button onClick={() => handleVolume('v6')} className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-sm transition-all group flex flex-col justify-center bg-white relative">
                          <div className="font-bold text-base md:text-lg text-slate-800 group-hover:text-brand-700 leading-tight mb-2 flex flex-col items-start w-full gap-1 transition-colors">
                            <span className="shrink-0">Kasalı Kamyon</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 whitespace-nowrap bg-slate-50 px-2 py-0.5 rounded-md group-hover:bg-brand-100/50 group-hover:text-brand-600 transition-colors">(20+ m³)</span>
                          </div>
                          <div className="text-[13px] text-slate-500 leading-relaxed text-balance w-full text-left pr-2">Büyük hacimli kasalı araçlar ve kamyonlar.</div>
                          <div className="mt-3 flex flex-wrap gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                            {["Isuzu", "Mitsubishi", "Iveco", "NPR"].map(v => (
                              <span key={v} className="text-[9px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100 uppercase">
                                {v}
                              </span>
                            ))}
                          </div>
                        </button>
                     </div>
                   </motion.div>
                 )}

                 {step === 2 && (
                   <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}}>
                     <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                       <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs">2</span>
                       Hangi ısı aralığına ihtiyacınız var?
                     </h4>
                     <div className="space-y-3">
                       {volume === 'v0' && (
                         <button onClick={() => handleTemp('t0')} className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all hover:shadow-sm group flex items-center justify-between">
                           <div className="flex items-center gap-3">
                             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                               <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                             </div>
                             <div>
                               <div className="font-bold text-slate-800 text-base md:text-lg group-hover:text-brand-700 transition-colors">Sanal Market İçin</div>
                               <div className="text-[13px] text-slate-500 md:mt-0.5">Sanal market araçlarına özel, pratik soğutma çözümü.</div>
                             </div>
                           </div>
                           <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 shrink-0 transform group-hover:translate-x-1 transition-all" />
                         </button>
                       )}
                       <button onClick={() => handleTemp('t1')} className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all hover:shadow-sm group flex items-center justify-between">
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                             <Thermometer className="w-5 h-5 sm:w-6 sm:h-6" />
                           </div>
                           <div>
                             <div className="font-bold text-slate-800 text-base md:text-lg group-hover:text-brand-700 transition-colors">Taze Ürün Taşıma (+0°C ile +8°C)</div>
                             <div className="text-[13px] text-slate-500 md:mt-0.5">Süt, et, meyve/sebze ve ilaç taşıma için idealdir.</div>
                           </div>
                         </div>
                         <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 shrink-0 transform group-hover:translate-x-1 transition-all" />
                       </button>
                       <button onClick={() => handleTemp('t2')} className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all hover:shadow-sm group flex items-center justify-between">
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                             <ThermometerSnowflake className="w-5 h-5 sm:w-6 sm:h-6" />
                           </div>
                           <div>
                             <div className="font-bold text-slate-800 text-base md:text-lg group-hover:text-brand-700 transition-colors">Donuk Ürün Taşıma (-18°C ve altı)</div>
                             <div className="text-[13px] text-slate-500 md:mt-0.5">Dondurma, dondurulmuş gıda sevkiyatları için idealdir.</div>
                           </div>
                         </div>
                         <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 shrink-0 transform group-hover:translate-x-1 transition-all" />
                       </button>
                     </div>
                     <button onClick={() => setStep(1)} className="mt-6 text-sm text-slate-400 hover:text-slate-600 font-medium flex items-center gap-1">
                       Geri Dön
                     </button>
                   </motion.div>
                 )}

                 {step === 3 && (
                   <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="text-center md:text-left">
                     <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                       <CheckCircle2 className="w-4 h-4" /> EŞLEŞME BULUNDU
                     </div>
                     <h4 className="text-2xl font-bold text-slate-900 mb-2">Önerilen Sistem: <span className="text-brand-600">{recommendedModelText || recommendedProduct.model}</span></h4>
                     <p className="text-sm text-slate-500 mb-8 max-w-md mx-auto md:mx-0">{recommendedProduct.shortDesc}</p>
                     
                     <div className="flex flex-col sm:flex-row gap-3">
                        <button 
                          onClick={() => onSelectProduct(recommendedProduct)} 
                          className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-sm font-bold uppercase tracking-wider transition-colors shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2"
                        >
                          Ürün Detaylarını İncele <ArrowRight className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={reset} 
                          className="px-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                        >
                          <RefreshCcw className="w-4 h-4" /> Tekrar Hesapla
                        </button>
                     </div>
                   </motion.div>
                 )}
            </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name'),
      surname: formData.get('surname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@gencsogutma.org", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 10000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">İletişime Geçin</h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              Sistemlerimiz hakkında bilgi almak veya firmanız için en uygun teklifi oluşturmamız için bize ulaşın.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info & Map */}
            <div className="flex flex-col gap-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">MERKEZ OFİS & FABRİKA</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">Gensa Frigo, Ziya Gökalp Mahallesi B6 Blok No:5<br/>Organize San. Bölg. Pik Dök. San. Sit, İkitelli OSB, 34490 Başakşehir</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">MÜŞTERİ HİZMETLERİ</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">0850 611 09 93<br/>Pzt - Cmt: 09:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">E-POSTA</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">info@gencsogutma.org</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-64 sm:h-80 w-full rounded-3xl overflow-hidden border border-slate-200 relative bg-slate-100 group">
                <iframe 
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=tr&amp;q=41.090173,28.799341&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="absolute inset-0 w-full h-full border-0" 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gensa Frigo Location"
                ></iframe>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=41.090173,28.799341" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-brand-700 transition-all flex items-center gap-2 hover:scale-105 z-10 border-2 border-white"
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-brand-600">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22l10-3 10 3L12 2z" /></svg>
                  </div>
                  Tam Adrese Yol Tarifi Al
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Hızlı Mesaj Gönderin</h3>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold mb-1">Mesajınız başarıyla iletildi!</p>
                    <p className="text-[13px]">Lütfen e-posta kutunuzu (info@gencsogutma.org) kontrol ederek ilk sefere mahsus <b>FormSubmit Aktivasyonunu</b> onaylayın. Sonraki mesajlar direkt ulaşacaktır.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-sm flex items-start gap-3">
                   <X className="w-5 h-5 flex-shrink-0" />
                   <p>Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin veya direkt e-posta gönderin.</p>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">ADINIZ SOYADINIZ</label>
                    <input name="name" type="text" required disabled={status === 'submitting'} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm disabled:opacity-50" placeholder="Halil Genç" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">FİRMA ADI</label>
                    <input name="surname" type="text" required disabled={status === 'submitting'} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm disabled:opacity-50" placeholder="Opsiyonel" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">E-POSTA ADRESİ</label>
                  <input name="email" type="email" required disabled={status === 'submitting'} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm disabled:opacity-50" placeholder="merhaba@ornek.com" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">TELEFON NUMARASI</label>
                  <input name="phone" type="tel" disabled={status === 'submitting'} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm disabled:opacity-50" placeholder="+90 (___) ___ __ __" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">MESAJINIZ</label>
                  <textarea name="message" required disabled={status === 'submitting'} rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm resize-none disabled:opacity-50" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
                </div>

                <button type="submit" disabled={status === 'submitting'} className="w-full py-4 bg-brand-950 hover:bg-brand-600 text-white rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50">
                  {status === 'submitting' ? 'Gönderiliyor...' : (
                    <>Mesajı Gönder <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductModal({ product, onClose }: { product: Product, onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 rounded-full flex items-center justify-center shadow-sm backdrop-blur-md transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Section */}
          <div className="w-full md:w-2/5 h-64 md:h-auto bg-slate-100 relative">
            <img 
              src={product.image} 
              alt={product.altText} 
              title={product.altText}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
               <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                 {product.category.toLocaleUpperCase('TR')}
               </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto flex flex-col">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{product.model}</h2>
              <p className="text-slate-500 text-lg">{product.shortDesc}</p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-8 flex gap-3 items-start">
               <div className="flex-shrink-0 mt-0.5">
                  <Zap className="w-5 h-5 text-orange-500" />
               </div>
               <p className="text-orange-800 text-sm font-medium font-sans">
                  <span className="font-bold block mb-1">Önemli Not:</span>
                  Bu ünite, araç motoruna hiçbir müdahale edilmeden tamamen bağımsız elektrik altyapısıyla çalışır.
               </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Teknik Özellikler</h3>
            
            <div className="rounded-xl border border-slate-200 overflow-hidden mb-8">
              <table className="w-full text-sm text-left">
                 <tbody>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-500 w-2/5">Montaj Yeri</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{product.installLocation}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-white">
                    <td className="py-3 px-4 font-medium text-slate-500">Voltaj</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{product.voltage}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-500">Araç Hacmi</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{product.volume}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-white">
                    <td className="py-3 px-4 font-medium text-slate-500">Çalışma Sıcaklığı</td>
                    <td className="py-3 px-4 font-bold text-brand-600">{product.temp}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-500">Soğutma Kapasitesi</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{product.capacity}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-medium text-slate-500">Üfleme Hacmi</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{product.airflow}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-auto">
               <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider text-slate-500">SİSTEMİN AVANTAJLARI</h4>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    Aracın orijinal garantisi korunur
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <Leaf className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    Karbon salınımı azaltılır
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <Settings className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    Bakım maliyetleri düşüktür
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <Truck className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    Sessiz ve titreşimsiz çalışma
                  </li>
               </ul>
            </div>
            
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function KumandaSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          
          <div className="flex-1 w-full relative">
            <div className="absolute top-0 -left-12 w-72 h-72 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
            <div className="relative bg-white p-2 rounded-3xl border border-slate-200 shadow-2xl shadow-brand-900/5 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://www.image2url.com/r2/default/images/1776845249293-c47e4b05-f244-43ba-bd3d-a3ae49dfc48d.png" 
                 alt="Gensa Akıllı Kumanda - Elektrikli Araç Frigo Sistemleri İçin Dijital Kontrol Paneli" 
                 title="Araç içi frigorifik kontrol ünitesi"
                 className="w-full h-auto rounded-2xl"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute -bottom-6 -right-6 flex gap-2">
                 <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-[10deg] animate-pulse">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
                 </div>
               </div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-200 rounded-full text-brand-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Wireless Control Technology
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                GENSA Akıllı <br />Kumanda Teknolojisi
              </h2>
            </div>
            
            <p className="text-lg text-slate-500 leading-relaxed">
              Gensa elektrikli frigo sistemleri, geliştirilen kablosuz akıllı kumanda teknolojisi sayesinde araç içinden kolayca kontrol edilebilir. Sürücü, araçtan inmeden frigo sistemini açabilir, kapatabilir ve sıcaklık ayarlarını değiştirebilir.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-1">Operasyon Verimliliği</h4>
                  <p className="text-sm text-slate-500">Bu teknoloji özellikle dağıtım yapan araçlarda büyük kullanım kolaylığı sağlar ve operasyon hızını artırır.</p>
               </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">ÖNE ÇIKAN ÖZELLİKLER</h4>
              {[
                "Kablosuz kontrol sistemi",
                "Araç içinden frigo yönetimi",
                "Sıcaklık ayar kontrolü",
                "Anlık sistem durumu görüntüleme",
                "Kompakt ve ergonomik tasarım",
                "Tüm Gensa frigo sistemleri ile tam uyum"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center">
                     <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

function EfficiencyBanner() {
  return (
    <section className="bg-brand-600 text-white py-12 border-b border-brand-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-950 opacity-40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Kısa Sürede Amortisman, <br/>Maksimum Karlılık.</h3>
            <p className="text-brand-100 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
              Gensa elektrikli frigo sistemlerimiz, motordan tahrikli geleneksel soğutuculara kıyasla operasyonel süreçlerde <strong>%25 ila %35 oranında yakıt tasarrufu</strong> sağlar. Bu yüksek verimlilik oranı sayesinde cihaz, kısa sürede kendi yatırım maliyetini amorti ederek işletmenize uzun vadeli karlılık sunar.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-wrap justify-center gap-4">
             <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20 text-center min-w-[150px] shadow-lg shadow-brand-900/20">
                <div className="text-3xl font-extrabold text-white mb-1">%35'e Varan</div>
                <div className="text-brand-200 text-[10px] font-bold uppercase tracking-widest">Yakıt Tasarrufu</div>
             </div>
             <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20 text-center min-w-[150px] shadow-lg shadow-brand-900/20">
                <div className="text-3xl font-extrabold text-white mb-1">Hızlı</div>
                <div className="text-brand-200 text-[10px] font-bold uppercase tracking-widest">YATIRIM GERİ DÖNÜŞÜ</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[100%] rounded-full bg-brand-900/30 blur-[120px] mix-blend-screen"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[120%] rounded-full bg-brand-800/20 blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[60%] rounded-full bg-brand-600/10 blur-[100px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight flex flex-col mb-6">
              Hakkımızda
              <span className="w-16 h-1.5 bg-brand-500 mt-6 rounded-full shadow-[0_0_15px_rgba(38,82,89,0.6)]"></span>
            </h2>
            <p className="text-xl md:text-2xl font-medium text-slate-100 leading-relaxed border-l-4 border-brand-500 pl-6 lg:-ml-7">
              2014 yılından bu yana <strong className="text-brand-300">araç frigo</strong> ve <strong className="text-brand-300">frigo soğutucu</strong> sektöründe edindiğimiz tecrübeyle <span className="text-brand-400 font-semibold">sektöre yön vermeye</span> devam ediyoruz.
            </p>
          </div>
          <p className="text-slate-400 lg:w-1/3 leading-relaxed text-lg">
            Gelişen teknolojiye entegre, mühendislik odaklı frigorifik çözümlerimizle lojistik sektörünün güçlü partneriyiz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-brand-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-900/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-950 border border-slate-800 rounded-full text-brand-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              ZAMANIN ÖTESİNDE VİZYON
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight leading-snug">
              Soğutma Teknolojisinde Yeni Nesil Dönüşüm
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              AR-GE vizyonumuzun bir sonucu olarak, sektörde bir ilki gerçekleştirerek Türkiye’nin ilk elektrikli frigo soğutucusunu geliştirdik. Gelişmiş soğutma teknolojimiz ve özel üretim bakır iç peteklerimizle, -18 dereceye kadar hassas soğutma performansına ulaşarak en zorlu lojistik ihtiyaçlarına çözüm sunuyoruz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
               <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80 hover:border-brand-500/30 transition-colors">
                  <div className="w-12 h-12 bg-brand-500/10 text-brand-400 rounded-xl flex items-center justify-center mb-5">
                    <ThermometerSnowflake className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Üstün Performans</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">-18°C'ye ulaşan güçlü ve dayanıklı elektrikli soğutma teknolojisi.</p>
               </div>
               <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80 hover:border-brand-500/30 transition-colors">
                  <div className="w-12 h-12 bg-brand-500/10 text-brand-400 rounded-xl flex items-center justify-center mb-5">
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Çevreci Çözüm</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Motor bağımsız, sıfır emisyon ile karbon ayak izini düşüren yapılar.</p>
               </div>
            </div>
          </motion.div>
          
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-500/50 transition-colors flex-grow flex flex-col">
               <h4 className="text-xl font-bold text-white mb-4">İnovasyonun Kontrolü</h4>
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 Sadece soğutma değil, operasyonel kolaylık da tasarlıyoruz. "Kablosuz Akıllı Kumanda Teknolojisi" ile araçtan inmeden sistemi yönetebilirsiniz.
               </p>
               <div className="mt-auto flex items-center gap-4 text-brand-400 text-sm font-semibold pt-4 border-t border-slate-800/50">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-500/10"><Settings className="w-5 h-5" /></span>
                  Akıllı Yönetim
               </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-500/50 transition-colors flex-grow flex flex-col">
               <h4 className="text-xl font-bold text-white mb-4">Güçlü Hizmet Ağı</h4>
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 İstanbul’daki 1200m²'lik fabrikamızda üretim yaparken, Türkiye’nin dört bir yanındaki bayi ağımızla kesintisiz teknik destek ulaştırıyoruz.
               </p>
               <div className="mt-auto flex items-center gap-4 text-brand-400 text-sm font-semibold pt-4 border-t border-slate-800/50">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-500/10"><Globe className="w-5 h-5" /></span>
                  Geniş Kapsama
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="inline-block">
              <img 
                src="https://www.image2url.com/r2/default/images/1776950090027-c1f429d0-4bae-4d6d-a06f-77f7a621433d.png" 
                alt="Gensa Frigo Logo" 
                className="h-10 sm:h-12 w-auto object-contain" 
              />
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-brand-500 tracking-[0.2em] uppercase border-l-0 md:border-l border-slate-800 pt-2 md:pt-0 md:pl-4">
              Zamanın Ötesinde
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/genckalefrigo" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-slate-950 flex items-center justify-center text-brand-400 hover:text-brand-300 hover:bg-slate-900 transition-all border border-slate-800 hover:border-brand-500/40 shadow-sm hover:shadow-[0_0_15px_rgba(38,82,89,0.2)]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/gensafrigo/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-slate-950 flex items-center justify-center text-brand-400 hover:text-brand-300 hover:bg-slate-900 transition-all border border-slate-800 hover:border-brand-500/40 shadow-sm hover:shadow-[0_0_15px_rgba(38,82,89,0.2)]">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/126554026/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-slate-950 flex items-center justify-center text-brand-400 hover:text-brand-300 hover:bg-slate-900 transition-all border border-slate-800 hover:border-brand-500/40 shadow-sm hover:shadow-[0_0_15px_rgba(38,82,89,0.2)]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@gensafrigo37" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-slate-950 flex items-center justify-center text-brand-400 hover:text-brand-300 hover:bg-slate-900 transition-all border border-slate-800 hover:border-brand-500/40 shadow-sm hover:shadow-[0_0_15px_rgba(38,82,89,0.2)]">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-slate-900"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Gensa Frigo. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/sikca-sorulan-sorular" className="hover:text-brand-400 transition-colors">Sıkça Sorulan Sorular</Link>
            <a href="#" className="hover:text-brand-400 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const navigate = useNavigate();

  // JSON-LD Schema for Organization and LocalBusiness
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gensa Frigo",
    "image": "https://www.image2url.com/r2/default/images/1776844880206-6ab47a67-9326-49bb-87dc-410fc271aec1.png",
    "@id": "https://gensafrigo.com",
    "url": "https://gensafrigo.com",
    "telephone": "+905332826237",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "İkitelli Organize Sanayi Bölgesi",
      "addressLocality": "Başakşehir",
      "addressRegion": "İstanbul",
      "postalCode": "34490",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.090173,
      "longitude": 28.799341
    },
    "description": "Elektrikli araç frigo soğutucu sistemleri ve profesyonel araç izolasyon çözümleri üreticisi.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const filteredProducts = activeCategory === 'Tümü' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <Hero />
      <IsolationSection />
      <EfficiencyBanner />
      <ProductWizard onSelectProduct={(p) => navigate(`/urun/${p.id}`)} />
      
      <main id="products" className="scroll-mt-24 py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Elektrikli Araç Frigo ve Soğutucu Modellerimiz</h2>
          <p className="text-sm text-slate-500 max-w-2xl">
             Aracınızın taşıma kapasitesine ve hacmine en uygun tam elektrikli <strong className="text-slate-700">frigo soğutucu</strong> ve <strong className="text-slate-700">izolasyon</strong> çözümünü seçin. Tüm standart panelvan ve ticari araç segmentlerine uyumlu ürünlerimizle frigorifik dönüşümünüzü mükemmelleştirin.
          </p>
        </div>

        {/* Filter Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 bg-white border-b border-slate-200 px-4 mb-8 rounded-xl shadow-sm">
          <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-lg w-full sm:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 rounded-md text-xs whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? 'bg-white shadow-sm font-bold text-slate-800' 
                    : 'hover:bg-white/50 font-semibold text-slate-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden sm:block text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-4">
            {filteredProducts.length} ÜRÜN LİSTELENİYOR
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.id}
              onClick={() => navigate(`/urun/${product.id}`)}
              className="group bg-white rounded-2xl border border-slate-400 p-5 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 transition-all cursor-pointer border-b-4 hover:border-brand-500 flex flex-col h-full hover:-translate-y-1.5 duration-300"
            >
              <div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={`${product.model} - Frigo Soğutucu ve İzolasyon Çözümleri`}
                  title={`${product.model} Elektrikli Soğutucu Ünite`}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-bold text-lg mb-1">{product.model}</h3>
              <p className="text-xs text-slate-500 mb-4 flex-grow">{product.shortDesc}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-[11px] border-b border-slate-50 pb-1">
                  <span className="text-slate-400">Araç Hacmi:</span>
                  <span className="font-bold">{product.volume}</span>
                </div>
                <div className="flex justify-between text-[11px] border-b border-slate-50 pb-1">
                  <span className="text-slate-400">Voltaj:</span>
                  <span className="font-bold">{product.voltage}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Sıcaklık:</span>
                  <span className="font-bold text-brand-600">{product.temp}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                <span className="w-full text-[10px] font-bold text-slate-400 uppercase mb-1">Uyumlu Araçlar:</span>
                {product.vehicles?.map(v => (
                  <span key={v} className="bg-slate-100 text-slate-600 text-[9px] font-medium px-2 py-1 rounded-md border border-slate-200 hover:border-brand-300 transition-colors cursor-default" title={`${product.model} - ${v} Uyumlu Frigo Sistemleri`}>
                    {v}
                  </span>
                ))}
              </div>
              
              <button className="w-full py-2 bg-slate-50 group-hover:bg-brand-600 group-hover:text-white transition-colors rounded-lg text-[10px] font-bold uppercase tracking-wider">
                DETAYLARI İNCELE
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      <AboutSection />
      <KumandaSection />
      <TrustSection />
      <ContactSection />
    </>
  );
}

function ServicesPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSON-LD Schema for Services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Araç Frigo Soğutucu ve İzolasyon Çözümleri",
    "provider": {
      "@type": "Organization",
      "name": "Gensa Frigo",
      "url": "https://gensafrigo.com"
    },
    "description": "Panelvan ve ticari araçlar için elektrikli frigo soğutma sistemleri montajı, B2B paket satış ve profesyonel ısı izolasyon hizmetleri.",
    "areaServed": {
      "@type": "Country",
      "name": "Türkiye"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>
      <section className="bg-brand-950 text-white py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full blur-[100px] opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
            Sektörün Profesyonelleri İçin:<br/><span className="text-brand-400">Gensa Frigo Soğutma Üniteleri</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            Gensa Frigo olarak, soğutma sektöründeki çözüm ortaklarımız, oto elektrik servisleri ve üst yapı firmaları için dünyanın en kolay montajına sahip frigo soğutucu ünitelerini üretiyoruz. Geniş ürün gamımızla, küçük hacimli panelvanlardan büyük tonajlı kasalı araçlara kadar her ihtiyaca profesyonel çözümler sunuyoruz.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border-t-4 border-t-brand-500">
             <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <Settings className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">Dünyanın En Hızlı Montajlı Frigo Üniteleri</h3>
             <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
               Teknik ekiplerin ve servislerin vaktini kazanması için ünitelerimizi "ustalık dostu" bir mimariyle tasarladık. Teknik ekiplerin ve bayilerin montaj süresini minimuma indiren, karmaşık tesisat gerektirmeyen modüler tasarımı sayesinde iş kapasitenizi artırıyoruz.
             </p>
             <ul className="space-y-4 mt-auto border-t border-slate-100 pt-8">
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></div>
                 <div>
                   <strong className="text-slate-900 text-sm block mb-1">Zaman Verimliliği</strong>
                   <span className="text-sm text-slate-600 leading-relaxed">Montaj sürecini minimize eden modüler tasarım sayesinde gün içindeki iş kapasitenizi artırın.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></div>
                 <div>
                   <strong className="text-slate-900 text-sm block mb-1">Hatasız Kurulum</strong>
                   <span className="text-sm text-slate-600 leading-relaxed">Her araç tipine ve tavan yapısına saniyeler içinde uyum sağlayan, hata payını sıfıra indiren mühendislik.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></div>
                 <div>
                   <strong className="text-slate-900 text-sm block mb-1">Kabin İçi Ergonomi</strong>
                   <span className="text-sm text-slate-600 leading-relaxed">Araç iç tavanına monte edilen ünitelerimiz, hacim kaybını önler ve profesyonel bir görünüm sunar.</span>
                 </div>
               </li>
             </ul>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border-t-4 border-t-brand-500">
             <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <ThermometerSnowflake className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">Her İhtiyaca Uygun Geniş Ürün Gamı</h3>
             <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
               Lojistik sektörünün değişken ihtiyaçlarını biliyoruz. Bu yüzden, soğutma kapasitesinden araç tipine kadar çok geniş bir yelpazede üretim yapıyoruz.
             </p>
             <ul className="space-y-4 mt-auto border-t border-slate-100 pt-8">
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></div>
                 <div>
                   <strong className="text-slate-900 text-sm block mb-1">Elektrikli Seri</strong>
                   <span className="text-sm text-slate-600 leading-relaxed">Araç motorundan bağımsız çalışan, çevre dostu ve karbon emisyonunu düşüren yeni nesil elektrikli üniteler.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></div>
                 <div>
                   <strong className="text-slate-900 text-sm block mb-1">Farklı Kapasite Seçenekleri</strong>
                   <span className="text-sm text-slate-600 leading-relaxed">5 m³’ten en büyük kasalı araç hacimlerine kadar, her türlü taşıma koşuluna uygun ünite seçenekleri.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></div>
                 <div>
                   <strong className="text-slate-900 text-sm block mb-1">Tam Uyumluluk</strong>
                   <span className="text-sm text-slate-600 leading-relaxed">Sadece panelvanlar için değil; tüm kasalı kamyon ve kamyonet grupları için optimize edilmiş sistemler.</span>
                 </div>
               </li>
             </ul>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border-t-4 border-t-brand-500">
             <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <BatteryCharging className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">Kusursuz Paket Satışları</h3>
             <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
               Geleceğin soğutma çözümlerini bayilerimiz ve iş ortaklarımızla büyüterek sunuyoruz. Diğer frigo firmaları ve oto elektrik servisleri için hazırladığımız özel paket satış seçenekleriyle, yüksek kâr marjlı ve sürdürülebilir bir tedarik zinciri oluşturuyoruz.
             </p>
             <ul className="space-y-4 mt-auto border-t border-slate-100 pt-8">
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></div>
                 <div>
                   <strong className="text-slate-900 text-sm block mb-1">B2B Tedarik Avantajı</strong>
                   <span className="text-sm text-slate-600 leading-relaxed">Doğrudan üreticiden alım yaparak maliyet avantajı yakalayın ve rekabet gücünüzü artırın.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></div>
                 <div>
                   <strong className="text-slate-900 text-sm block mb-1">Ünite Paket Satış Odaklılık</strong>
                   <span className="text-sm text-slate-600 leading-relaxed">Tekli alımlar yerine bayi odaklı toplu paketlerle stok maliyetlerinizi optimize edin.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></div>
                 <div>
                   <strong className="text-slate-900 text-sm block mb-1">Tam Donanımlı Teknik Destek</strong>
                   <span className="text-sm text-slate-600 leading-relaxed">Sadece ünite değil, satış sonrası teknik dökümantasyon ve parça desteğiyle iş ortaklarımızın yanındayız.</span>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        <div className="mt-20 py-16 bg-white rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Uygulama Alanlarımızı Keşfedin</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-lg">
              Ford, Volkswagen, Mercedes, Renault, FIAT, Opel ve daha birçok marka araç için uyguladığımız profesyonel izolasyon ve soğutucu çözümlerimizi galerimizde inceleyebilirsiniz.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsGalleryOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-600 text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-brand-600/30 hover:bg-brand-700 transition-all"
            >
              Uygulama Alanlarını Gör <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isGalleryOpen && (
          <ApplicationAreasModal onClose={() => setIsGalleryOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function ApplicationAreasModal({ onClose }: { onClose: () => void }) {
  const areas = [
    { name: "Ford Transit", keywords: "fordtransit, frigoizolasyon, gensa", image: "https://www.image2url.com/r2/default/images/1777364677859-17c8b82c-d147-491d-9dec-d3d7664fbb79.png" },
    { name: "Volkswagen Crafter", keywords: "crafter, sogutucusistemleri, gensa", image: "https://www.image2url.com/r2/default/images/1777366557535-74dedbe0-c184-4a94-aa78-7d82a64ede80.jfif" },
    { name: "Mercedes Sprinter", keywords: "sprinter, elektriklisogutucu, izolasyon", image: "https://www.image2url.com/r2/default/images/1777365127471-cd1ad062-b9fb-4138-a172-11b59b601879.png" },
    { name: "Renault Master", keywords: "renaultmaster, frigoarac, gensafrigo", image: "https://www.image2url.com/r2/default/images/1777365155862-f992efaf-b203-4cfd-9c92-ab4791988b23.jfif" },
    { name: "Fiat Doblo", keywords: "fiatdoblo, minifrigo, gensa", image: "https://www.image2url.com/r2/default/images/1777365187750-5a21c672-8fe0-49aa-97e1-457539afd050.jfif" },
    { name: "Ford Courier", keywords: "fordcourier, hafiffrigo, gensafrigo", image: "https://www.image2url.com/r2/default/images/1777365239654-a3786707-bd84-4d88-83f1-0080ce153797.jfif" },
    { name: "Bursa Frigo", keywords: "bursafrigo, marmara, gensa", image: "https://www.image2url.com/r2/default/images/1777366406603-db92bf52-d659-4743-84de-159c863b026d.jfif" },
    { name: "İzmir Frigo", keywords: "izmirfrigo, egefrigo, panelvan", image: "https://www.image2url.com/r2/default/images/1777366475982-4d09de1a-8b53-4ba2-aab6-c9de15808418.jfif" },
    { name: "Antalya Frigo", keywords: "antalyafrigo, lojistik, akdeniz", image: "https://www.image2url.com/r2/default/images/1777366607405-79bcb54e-4e4f-4a90-b1ab-95e5b6573512.jfif" },
    { name: "Muğla Frigo", keywords: "muglafrigo, egesahil, gensa", image: "https://www.image2url.com/r2/default/images/1777367488411-c56e1e27-4cd7-4580-90ab-d012f18e8cb6.png" },
    { name: "Çanakkale Frigo", keywords: "canakkalefrigo, marmara, gensafrigo", image: "https://www.image2url.com/r2/default/images/1777367559690-2a7365e1-19a6-46ab-b1ef-725582059f83.jfif" },
    { name: "Hatay Frigo", keywords: "hatayfrigo, akdeniz, gensa", image: "https://www.image2url.com/r2/default/images/1777367631660-88b195d4-55a5-4760-bd9d-6107a04b5d8e.jfif" },
    { name: "Adıyaman Frigo", keywords: "adiyamanfrigo, guneydogu, gensafrigo", image: "https://www.image2url.com/r2/default/images/1777365787688-33853b97-64aa-425f-b210-5c8d9662169e.jfif" },
    { name: "Balıkesir Frigo", keywords: "balıkesirfrigo, ege, gensa", image: "https://www.image2url.com/r2/default/images/1777366808106-fc1105a5-36bb-4c38-bc5e-1e1ae2e63b5b.png" },
    { name: "Ege Frigo", keywords: "egefrigo, sogukzincir, gensa", image: "https://www.image2url.com/r2/default/images/1777366677922-c433ba74-3967-444e-9df0-2d753b06e32d.jfif" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose}></div>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white w-full max-w-7xl h-[85vh] rounded-[3rem] overflow-hidden flex flex-col shadow-2xl"
      >
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Uygulama Alanlarımız</h2>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Her Sektöre Profesyonel Çözümler</p>
          </div>
          <button onClick={onClose} className="w-12 h-12 bg-slate-100 hover:bg-brand-600 hover:text-white rounded-full flex items-center justify-center transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 md:p-10 custom-scrollbar">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {areas.map((area, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.12, zIndex: 20 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                className="group relative aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.4)] transition-all duration-500 cursor-pointer"
              >
                <img 
                  src={area.image} 
                  alt={area.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="flex flex-wrap gap-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 overflow-hidden">
                    {area.keywords.split(',').map((kw, idx) => (
                      <span key={idx} className="text-white/[0.03] font-bold text-[6px] uppercase tracking-[0.4em] bg-transparent px-2 py-1 rounded border border-white/[0.01]">
                        #{kw.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DealerLoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-50 rounded-2xl text-brand-600 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Bayi Girişi</h2>
          <p className="text-sm text-slate-500 mt-2">Sisteme giriş yapmak için bilgilerinizi giriniz.</p>
        </div>
        
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Sistem tarafına entegrasyon sonrası aktif edilecektir."); }}>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Bayi ID</label>
            <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm" placeholder="Bayi Numaranız" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Şifre</label>
            <input type="password" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm" placeholder="••••••••" />
          </div>
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" />
              <span className="text-slate-600">Beni Hatırla</span>
            </label>
            <a href="#" className="font-bold text-brand-600 hover:text-brand-700">Şifremi Unuttum</a>
          </div>
          <button type="submit" className="w-full py-4 bg-brand-950 hover:bg-brand-600 text-white rounded-xl text-sm font-bold uppercase tracking-wider transition-all">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

// FAQ Data with optimized content for GEO
const faqs = [
  {
    question: "Elektrikli frigo soğutucu nedir ve avantajları nelerdir?",
    answer: "Elektrikli frigo soğutucu, gücünü aracın ana motorundan bağımsız bir elektrikli kompresörden alan, %100 çevre dostu ve yeni nesil bir soğutma sistemidir. Geleneksel motordan tahrikli sistemlerin aksine aracı yormaz, yakıt tasarrufu sağlar ve sıfır araçlarda motor garantisini riske atmaz. Kompakt tasarımı sayesinde montajı son derece kolaydır ve düşük işletme maliyetiyle frigorifik taşımacılıkta devrim yaratır.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    question: "Türkiye'nin ilk elektrikli frigo sistemini kim üretti?",
    answer: "Türkiye'nin ilk elektrikli frigo soğutucu sistemlerini, uzun süren Ar-Ge süreçleri ve mühendislik çalışmalarıyla Gensa Frigo olarak biz başardık. Kullandığımız bileşenleri küresel teknoloji ortaklarımızdan temin etsek de, bu parçaların bir araya gelerek kusursuz ve stabil bir soğutma sistemi oluşturması tamamen Gensa'nın özgün yazılım ve Ar-Ge çalışmaları sayesinde gerçekleşmektedir. Bu ileri teknolojiyi sektöre kazandırmanın gururunu yaşıyoruz.",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    question: "Türkiye'nin ilk -18°C dereceye ulaşabilen elektrikli soğutucusu hangisidir?",
    answer: "Gensa Frigo'nun amiral gemisi modelleri olan GNS2, GNS4 ve GNS5 serileriyle Türkiye'de bir ilki gerçekleştirerek elektrikli ünitelerde -18°C bariyerini yıktık. Hatta saha testlerinde beklentilerin üzerine çıkarak -21°C dereceleri gördük. Bu dondurma kapasitesi şu anda Türkiye pazarında sadece Gensa Frigo'nun özel yazılımsal optimizasyonları ile mümkün olmaktadır.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    question: "Elektrikli frigo montajı nasıl yapılır ve nereye yerleştirilir?",
    answer: "Gensa elektrikli frigo soğutucular, aracın tavan kısmına (veya kasa üzerine) monte edilir. Sistemimiz doğrudan aracın kendi elektrik altyapısını kullandığı için motora hiçbir şekilde mekanik müdahale gerektirmez. Bu sayede 'en hızlı ve en kolay montajlanabilen frigo cihazı' ünvanına sahiptir. Aracın orijinal yapısı bozulmaz ve garanti kapsamı etkilenmez.",
    icon: <Settings className="w-5 h-5" />
  },
  {
    question: "Aracın aküsü ve elektrik sistemi bu işlem için güvenli midir?",
    answer: "Gensa üniteleri, doğrudan aracın kendi aküsünden ve alternatörün ürettiği enerjinin ihtiyaç fazlası olan kısmını kullanarak çalışır. Sisteme standart olarak dahil edilen akıllı akım koruma modülleri ve voltaj kontrol kartları sayesinde, aracın elektrik sistemi her zaman güvendedir. Harici bir batarya paketine gerek duymaz ve akıllı yazılımı sayesinde aracın marş basma gücünü asla tehlikeye atmaz.",
    icon: <CheckCircle2 className="w-5 h-5" />
  }
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  // JSON-LD Schema for GEO/SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Hero Section */}
      <section className="bg-brand-950 py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-600/20 text-brand-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-500/20"
          >
            <HelpCircle className="w-4 h-4" />
            Yardım Merkezi
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Sıkça Sorulan <span className="text-brand-500">Sorular</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Gensa Frigo elektrikli soğutma teknolojisi hakkında merak ettiğiniz her şey. Uzman ekibimiz tarafından hazırlanan kapsamlı rehber.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                openIndex === index ? "border-brand-500 shadow-xl shadow-brand-500/5 ring-1 ring-brand-500/10" : "border-slate-200 shadow-sm"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    openIndex === index ? "bg-brand-600 text-white" : "bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600"
                  }`}>
                    {faq.icon}
                  </div>
                  <span className={`font-bold text-base md:text-lg transition-colors ${
                    openIndex === index ? "text-brand-950" : "text-slate-700"
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-brand-600" : "text-slate-400"}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-slate-50 md:ml-14">
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-brand-600 rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-brand-600/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_5s_infinite]"></div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 relative z-10">Başka bir sorunuz mu var?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto relative z-10">
            Aradığınız cevabı bulamadıysanız, uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır. Hemen bizimle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button 
              onClick={() => navigate('/#contact')} 
              className="px-8 py-4 bg-white text-brand-600 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-brand-50 transition-all flex items-center gap-2"
            >
              Bize Ulaşın
              <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="tel:08506110993" 
              className="px-8 py-4 bg-brand-700 text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-brand-800 transition-all flex items-center gap-2"
            >
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ürün Bulunamadı</h2>
        <p className="text-slate-500 mb-8">Aradığınız ürün yayından kaldırılmış veya mevcut olmayabilir.</p>
        <button onClick={() => navigate('/')} className="px-6 py-3 bg-brand-950 text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-brand-600 transition-colors">
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  // JSON-LD Schema for Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.model,
    "image": product.image,
    "description": product.shortDesc,
    "brand": {
      "@type": "Brand",
      "name": "Gensa Frigo"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/#products')} 
          className="mb-8 inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 font-bold uppercase tracking-wider text-sm transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> GERİ DÖN
        </button>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200 border border-slate-200 overflow-hidden">
          <img 
            src={product.detailImage} 
            alt={`${product.model} Detaylı Özellikler`} 
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Bu Ürün İçin Teklif Almak İster misiniz?</h2>
            <Link to="/#contact" onClick={() => {
              setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }} className="inline-flex px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold uppercase tracking-wider transition-colors shadow-xl shadow-brand-600/30 gap-2 items-center">
              HEMEN TEKLİF AL <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hizmetlerimiz" element={<ServicesPage />} />
          <Route path="/sikca-sorulan-sorular" element={<FAQPage />} />
          <Route path="/bayi-girisi" element={<DealerLoginPage />} />
          <Route path="/urun/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
      <Footer />
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/905332826237"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] text-white p-3 pr-5 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-300"
        aria-label="WhatsApp Canlı Destek"
      >
        <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#25D366] shadow-sm">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
        <span className="text-sm font-extrabold uppercase tracking-widest hidden sm:block">Canlı Destek</span>
      </a>
    </div>
  );
}

