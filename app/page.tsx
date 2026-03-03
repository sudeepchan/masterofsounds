import { 
  getChannelVideos, 
  getChannelInfo, 
  CHANNELS, 
  formatViewCount, 
  timeAgo,
  Video 
} from '@/lib/youtube';
import Link from 'next/link';

function LegalBanner() {
  return (
    <div className="legal-banner fixed top-0 left-0 right-0 z-[1001] backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-[5%] py-4 flex items-center gap-4">
        <span className="text-xl flex-shrink-0">⚖️</span>
        <div className="flex-1 text-sm text-red-300">
          <strong className="text-white">Legal Notice:</strong> All tracks are recreations for educational purposes only. 
          We do not hold licenses for original Bollywood/film songs. 
          Content used under fair use for teaching. 
          Objections? Contact support@masterofsounds.in for immediate removal.
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-[60px] left-0 right-0 z-[1000] glass px-[5%] py-4">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_40px_rgba(99,102,241,0.3)] animate-bounce">
            ♪
          </div>
          <span className="font-display text-2xl font-bold gradient-text">
            Master of Sounds
          </span>
        </Link>
        
        <ul className="hidden md:flex gap-8 list-none">
          <li><Link href="#channels" className="text-text-muted hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">Channels</Link></li>
          <li><Link href="#learn" className="text-text-muted hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">Learn</Link></li>
          <li><Link href="#legal" className="text-text-muted hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">Legal</Link></li>
          <li><Link href="#services" className="text-text-muted hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">Services</Link></li>
          <li><Link href="#contact" className="text-text-muted hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-[5%] pt-40 pb-16 relative">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <h1 className="hero-title text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
            Where Every Voice Finds Its <span className="gradient-text">Perfect Sound</span>
          </h1>
          <p className="text-xl text-text-muted mb-8 max-w-xl mx-auto md:mx-0">
            Learn music through songs. Master the art of karaoke with professional backing track recreations. 
            17+ years of expertise in vocal production and performance coaching.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent">50K+</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent">3</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">Channels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent">1.2K+</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">Recreations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent">17+</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">Years</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link href="#channels" className="btn-primary px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2">
              Explore Channels
            </Link>
            <Link href="#legal" className="px-8 py-4 rounded-xl font-semibold border-2 border-border hover:bg-card hover:border-primary transition-all">
              Legal Notice
            </Link>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="bg-card rounded-3xl p-8 border border-border relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="flex items-end justify-center gap-1 h-48 mb-8">
              {[40, 70, 50, 90, 60, 80, 45, 95].map((height, i) => (
                <div 
                  key={i} 
                  className="equalizer-bar"
                  style={{ 
                    height: `${height}%`, 
                    animationDelay: `${i * 0.1}s`,
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    borderRadius: '4px'
                  }}
                ></div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 border border-primary/30 text-primary">
                @masterofsounds
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 border border-primary/30 text-primary">
                @karaokemaestro
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 border border-primary/30 text-primary">
                @hindibollywoodbackingtracks
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

async function ChannelCard({ 
  channelId, 
  type, 
  description, 
  delay 
}: { 
  channelId: string; 
  type: string;
  description: string;
  delay: number;
}) {
  const [videos, channel] = await Promise.all([
    getChannelVideos(channelId, 3),
    getChannelInfo(channelId)
  ]);

  const icons: Record<string, string> = {
    'masterofsounds': '🎵',
    'karaokemaestro': '🎤',
    'hindibollywood': '🎬'
  };

  const typeLabels: Record<string, string> = {
    'masterofsounds': 'Original Content',
    'karaokemaestro': 'Non-OST Recreations',
    'hindibollywood': 'OST-Style Recreations'
  };

  const typeBadgeColors: Record<string, string> = {
    'masterofsounds': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
    'karaokemaestro': 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    'hindibollywood': 'bg-purple-500/20 text-purple-400 border-purple-500/40'
  };

  return (
    <div 
      className="bg-card rounded-2xl overflow-hidden border border-border card-glow animate-fade-in"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="p-8 bg-gradient-to-br from-dark to-indigo-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-3xl mb-4">
            {icons[type]}
          </div>
          <h3 className="font-display text-2xl font-bold mb-2">{channel?.title || type}</h3>
          <p className="text-text-muted text-sm">{description}</p>
          <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${typeBadgeColors[type]}`}>
            {typeLabels[type]}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col gap-4">
          {videos.map((video: Video) => (
            <a 
              key={video.id}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-3 rounded-xl bg-dark/50 hover:bg-card-hover border border-transparent hover:border-primary transition-all group"
            >
              <div className="w-32 h-18 bg-gradient-to-br from-primary to-secondary rounded-lg flex-shrink-0 flex items-center justify-center text-white text-xl relative overflow-hidden">
                {video.thumbnail ? (
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                ) : (
                  <span>▶</span>
                )}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-2xl">▶</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h4>
                <div className="text-xs text-text-muted">
                  {formatViewCount(video.viewCount)} views • {timeAgo(video.publishedAt)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <a 
          href={`https://youtube.com/channel/${channelId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 text-center rounded-xl border-2 border-border hover:bg-card hover:border-primary transition-all font-semibold"
        >
          View Channel →
        </a>
      </div>
    </div>
  );
}

async function ChannelsSection() {
  return (
    <section id="channels" className="py-24 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-display font-bold mb-4">
            Three Channels, <span className="gradient-text">One Mission</span>
          </h2>
          <p className="text-text-muted text-lg">
            All backing tracks are recreations made for educational purposes. 
            Learn the difference between custom productions and OST-style recreations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ChannelCard 
            channelId={CHANNELS.masterofsounds} 
            type="masterofsounds"
            description="Original Music & Advanced Production Techniques"
            delay={0}
          />
          <ChannelCard 
            channelId={CHANNELS.karaokemaestro} 
            type="karaokemaestro"
            description="Custom Non-OST Recreations & Performance Training"
            delay={1}
          />
          <ChannelCard 
            channelId={CHANNELS.hindibollywood} 
            type="hindibollywood"
            description="OST-Style Bollywood Recreations for Practice"
            delay={2}
          />
        </div>
      </div>
    </section>
  );
}

function LegalSection() {
  return (
    <section id="legal" className="py-24 px-[5%]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-500/10 border-2 border-red-500 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 flex items-center gap-3 text-white">
            ⚖️ Legal Notice & Disclaimer
          </h2>
          
          <div className="space-y-6 text-red-200">
            <p>
              <strong className="text-white">Master of Sounds</strong> operates as an educational platform 
              teaching music through karaoke and vocal performance techniques. We want to make our legal 
              position absolutely clear:
            </p>
            
            <div className="bg-red-500/20 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
              <p className="text-white font-semibold mb-2">NO LICENSES HELD:</p>
              <p>
                We do not own, hold, or claim any licenses, rights, or permissions for the original 
                Bollywood songs, film soundtracks, or any copyrighted musical works referenced or 
                recreated on our platform, channels, or website.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">What We Do:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create <strong className="text-white">recreations</strong> and <strong className="text-white">reproductions</strong> of popular songs for educational and practice purposes</li>
                <li>Teach vocal techniques, performance skills, and music production using these recreations</li>
                <li>Provide backing tracks that sound similar to original OST recordings, but are entirely recreated by our team</li>
                <li>Explain the difference between original copyrighted works and educational recreations</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Educational Purpose Only:</h3>
              <p>
                All content on this website and our YouTube channels is provided for <strong className="text-white">educational purposes only</strong> under the doctrine of fair use (or fair dealing). This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vocal coaching and singing lessons</li>
                <li>Music production tutorials</li>
                <li>Performance technique demonstrations</li>
                <li>Practice backing tracks for students</li>
              </ul>
            </div>

            <div className="bg-red-500/20 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
              <p className="text-white font-semibold mb-4">TAKEDOWN POLICY:</p>
              <p className="mb-4">
                If you are a copyright owner, authorized representative, or legal entity with rights 
                to any material referenced on our platform, and you object to our educational use:
              </p>
              <p className="text-white mb-2">Contact us immediately at support@masterofsounds.in with:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Your name and contact information</li>
                <li>Specific work(s) you claim rights to</li>
                <li>Proof of ownership or authorization</li>
                <li>Nature of your objection</li>
              </ul>
              <p className="text-white font-semibold">
                We will promptly review and remove any content upon valid request, typically within 48-72 hours.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Jurisdiction:</h3>
              <p>This legal notice applies globally, including India, United States, European Union, and all other jurisdictions. We comply with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indian Copyright Act, 1957 (as amended)</li>
                <li>Digital Millennium Copyright Act (DMCA) - USA</li>
                <li>EU Copyright Directive</li>
                <li>All applicable international copyright treaties</li>
              </ul>
            </div>

            <p className="text-sm opacity-80 pt-4 border-t border-red-500/30">
              <strong>Last Updated:</strong> March 2024 | <strong>Contact:</strong> support@masterofsounds.in | <strong>Business Location:</strong> India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningPathsSection() {
  const paths = [
    {
      stage: "Stage 1",
      title: "Karaoke Fundamentals",
      description: "Learn the difference between casual singing and performance. Master basic pitch, timing, and microphone technique using custom non-OST recreations.",
      features: ["Pitch Basics", "Mic Technique", "Non-OST Practice", "@karaokemaestro"]
    },
    {
      stage: "Stage 2",
      title: "OST-Style Recreation Mastery",
      description: "Learn to work with OST-style recreations that mirror original Bollywood productions. Understand arrangement, instrumentation, and authentic performance cues.",
      features: ["OST Analysis", "Arrangement Study", "Authentic Performance", "@hindibollywoodbackingtracks"]
    },
    {
      stage: "Stage 3",
      title: "Advanced Performance",
      description: "Develop stage presence, advanced vocal techniques, and learn to command an audience. Preparation for competitions and live shows using professional recreations.",
      features: ["Stage Presence", "Advanced Techniques", "Competition Prep", "@karaokemaestro"]
    },
    {
      stage: "Stage 4",
      title: "Original Creation",
      description: "Create your own music. Learn composition, production, and how to develop your unique sound as an artist while understanding copyright and legal boundaries.",
      features: ["Songwriting", "Production Basics", "Copyright Awareness", "@masterofsounds"]
    }
  ];

  return (
    <section id="learn" className="py-24 px-[5%]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-display font-bold mb-4">
            Your Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-text-muted text-lg">
            Structured paths to take you from karaoke enthusiast to confident performer 
            using our recreation-based teaching method.
          </p>
        </div>

        <div className="relative pl-12 md:pl-16">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
          
          {paths.map((path, index) => (
            <div 
              key={index}
              className="relative mb-12 last:mb-0 bg-card p-8 rounded-2xl border border-border hover:border-primary transition-all hover:translate-x-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute left-[-3rem] md:left-[-4rem] top-10 w-3 h-3 bg-accent rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]"></div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent mb-4">
                {path.stage}
              </span>
              <h3 className="font-display text-2xl font-bold mb-3">{path.title}</h3>
              <p className="text-text-muted mb-6">{path.description}</p>
              <div className="flex flex-wrap gap-3">
                {path.features.map((feature, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-sm bg-primary/10 text-text-muted">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: "🎵",
      title: "Custom Recreations",
      description: "Need a specific song recreated in your key? We create custom backing track recreations tailored to your vocal range and style.",
      price: "Starting at ₹1,500"
    },
    {
      icon: "🎙️",
      title: "Vocal Production",
      description: "Professional pitch correction, timing adjustment, and vocal polishing. Transform your raw recordings into radio-ready vocals.",
      price: "Starting at ₹2,500"
    },
    {
      icon: "🎧",
      title: "Mixing & Mastering",
      description: "Full song production services. We mix and master your vocals with backing tracks for a cohesive, professional sound.",
      price: "Starting at ₹4,000"
    },
    {
      icon: "👨‍🏫",
      title: "Private Coaching",
      description: "One-on-one online vocal coaching sessions. Personalized training for your specific goals, from basics to competition prep.",
      price: "₹1,000/hour"
    }
  ];

  return (
    <section id="services" className="py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-text-muted text-lg">
            Ready to take your sound to the next level? Our studio services help you 
            achieve professional quality from home recordings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border card-glow animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted mb-6 text-sm">{service.description}</p>
              <div className="text-xl font-bold text-accent mb-6">{service.price}</div>
              <a 
                href="mailto:support@masterofsounds.in"
                className="block w-full py-3 text-center rounded-xl btn-primary font-semibold"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border pt-16 pb-8 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 no-underline mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                ♪
              </div>
              <span className="font-display text-xl font-bold gradient-text">
                Master of Sounds
              </span>
            </Link>
            <p className="text-text-muted text-sm">
              Where Every Voice Finds Its Perfect Sound. Teaching music through educational recreations since 2007.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Channels</h4>
            <ul className="space-y-3">
              <li><a href="https://youtube.com/@masterofsounds" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors text-sm">@masterofsounds</a></li>
              <li><a href="https://youtube.com/@karaokemaestro" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors text-sm">@karaokemaestro</a></li>
              <li><a href="https://youtube.com/@hindibollywoodbackingtracks" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors text-sm">@hindibollywoodbackingtracks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Learn</h4>
            <ul className="space-y-3">
              <li><Link href="#learn" className="text-text-muted hover:text-primary transition-colors text-sm">Learning Paths</Link></li>
              <li><Link href="#library" className="text-text-muted hover:text-primary transition-colors text-sm">Recreation Library</Link></li>
              <li><Link href="#services" className="text-text-muted hover:text-primary transition-colors text-sm">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:support@masterofsounds.in" className="text-text-muted hover:text-primary transition-colors text-sm">support@masterofsounds.in</a></li>
              <li><span className="text-text-muted text-sm">India</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-red-500/10 border border-red-500 rounded-xl p-6 mb-8">
          <h4 className="text-white font-bold mb-2 flex items-center gap-2">
            ⚖️ Legal Disclaimer
          </h4>
          <p className="text-red-200 text-sm leading-relaxed">
            All backing tracks are recreations for educational purposes only. We do not hold licenses 
            for original Bollywood/film songs. No copyright infringement intended. Content used under 
            fair use for teaching purposes. If you are a rights holder and object to our use, 
            contact support@masterofsounds.in for immediate removal. We comply with all applicable 
            copyright laws including Indian Copyright Act, DMCA, and international treaties.
          </p>
        </div>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-text-muted text-sm">
            © 2024 Master of Sounds. All rights reserved. Since 2007. | Educational Use Only.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default async function Home() {
  return (
    <main className="relative">
      <div className="bg-animation"></div>
      <LegalBanner />
      <Navigation />
      <HeroSection />
      <ChannelsSection />
      <LegalSection />
      <LearningPathsSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}