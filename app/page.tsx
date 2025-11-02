'use client';

import Image from 'next/image';
import { BookOpen, Video, FileText, ExternalLink, Send, MessageCircle, Download, Building2, Users, ShoppingCart, GraduationCap, ChevronLeft, Newspaper } from 'lucide-react';
import { useEffect, useState, useMemo, lazy, Suspense } from 'react';

const CommunicationSection = lazy(() => import('./components/CommunicationSection'));

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [enableHeavyAnimations, setEnableHeavyAnimations] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    // Comprehensive device capability check
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowEndDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Check connection speed (with type safety)
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const isSlowConnection = connection ?
      (connection.effectiveType === 'slow-2g' ||
        connection.effectiveType === '2g' ||
        connection.effectiveType === '3g') : false;

    // Only enable heavy animations on capable desktop devices with good connection
    const shouldEnableAnimations = supportsHover &&
      !prefersReducedMotion &&
      !isLowEndDevice &&
      !isMobile &&
      !isSlowConnection;

    setEnableHeavyAnimations(shouldEnableAnimations);

    if (shouldEnableAnimations) {
      const handleMouseMove = (e: MouseEvent) => {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
        });
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Memoize particles to prevent recalculation - only generate when needed
  const particles = useMemo(() => {
    if (!enableHeavyAnimations) return [];
    return Array.from({ length: 3 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${4 + Math.random() * 2}s`
    }));
  }, [enableHeavyAnimations]);
  const sections = [
    {
      title: "کتابچه‌ی طبقه دوم",
      bgColor: "bg-gradient-to-br from-emerald-600 to-emerald-700",
      icon: BookOpen,
      links: [
        { text: "مشاهده و دانلود کتابچه", href: "/ویژه‌نامه چشم‌انداز - کتابچه طبقه‌ دوم.pdf", icon: Download },
      ],
    },
    {
      title: "نشریه دانشجویی چشم‌انداز",
      bgColor: "bg-gradient-to-br from-rose-600 to-rose-700",
      icon: Newspaper,
      links: [
        { text: "کانال تلگرام", href: "https://t.me/Cheshmandaz_GU", icon: Send },
        { text: "اینستاگرام", href: "https://www.instagram.com/cheshmandaz_gu", icon: MessageCircle },
      ],
    },
    {
      title: "ویدیو آموزش کار با کارتابل دانشجویی",
      bgColor: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      icon: Video,
      links: [
        { text: "مشاهده ویدیو آموزشی", href: "https://www.aparat.com/v/g69a54m", icon: ExternalLink },
      ],
    },
    {
      title: "چارت درسی",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      icon: FileText,
      links: [
        { text: "مدیریت صنعتی", href: "/industrial-management.jpg", icon: Download },
        { text: "مدیریت بازرگانی", href: "/bussines-management.jpg", icon: Download },
        { text: "اقتصاد", href: "/economics.jpg", icon: Download },
        { text: "حسابداری", href: "/accounting.jpg", icon: Download },
      ],
    },
    {
      title: "سایت‌های دانشگاه",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      icon: Building2,
      links: [
        { text: "سامانه سادا", href: "https://sada.guilan.ac.ir/", icon: ExternalLink },
        { text: "سامانه ایسنت", href: "https://ecent2.guilan.ac.ir/", icon: ExternalLink },
        { text: "سایت سماد (سلف)", href: "https://food.guilan.ac.ir/index.rose", icon: ExternalLink },
        { text: "صندوق رفاه دانشجویان", href: "https://swf.ir/fa", icon: ExternalLink },
      ],
    },
    {
      title: "گروه‌ها و چنل‌های تلگرام دانشگاه",
      bgColor: "bg-gradient-to-br from-teal-600 to-teal-700",
      icon: Users,
      links: [
        { text: "گروه شورای صنفی", href: "https://t.me/goftegooshorasenfi", icon: Send },
        { text: "گیلان بوک (خرید و فروش کتاب)", href: "https://t.me/+FE_36sMKaX04OTU0", icon: ShoppingCart },
        { text: "گروه دانشجویان مدیریت - اقتصاد - حسابداری", href: "https://t.me/+oPeMzrn7dYYyMDNk", icon: GraduationCap },
        { text: "آشنایی با اساتید (استادیاب)", href: "https://t.me/guilan_ostad", icon: Users },
        { text: "اساتید دانشکده مدیریت و اقتصاد", href: "https://guilan.ac.ir/%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D9%87%DB%8C%D8%A6%D8%AA-%D8%B9%D9%84%D9%85%DB%8C?p_p_id=ir_sain_university_people_UniversityFacultyListPortlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_ir_sain_university_people_UniversityFacultyListPortlet_universityDepartmentId=12908446", icon: ExternalLink },
      ],
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements - Only on capable devices */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl ${enableHeavyAnimations ? 'animate-float' : ''}`}
          style={{
            top: '10%',
            right: '10%',
            animationDelay: '0s'
          }}
        />
        <div
          className={`absolute w-96 h-96 bg-purple-400/10 rounded-full blur-3xl ${enableHeavyAnimations ? 'animate-float' : ''}`}
          style={{
            bottom: '10%',
            left: '10%',
            animationDelay: '2s'
          }}
        />
        {enableHeavyAnimations && (
          <div
            className="absolute w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-float"
            style={{
              top: '50%',
              left: '50%',
              animationDelay: '1s'
            }}
          />
        )}
      </div>

      {/* Mouse Follower Effect - Only on desktop with hover */}
      {enableHeavyAnimations && (
        <div
          className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      )}

      {/* Header with Image */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src="/header.png"
          alt="دانشکده مدیریت و اقتصاد - دانشگاه گیلان"
          fill
          priority
          quality={60}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1920px"
          className="object-cover object-top"
          style={{
            transition: enableHeavyAnimations ? 'transform 0.7s ease' : 'none',
            willChange: enableHeavyAnimations ? 'transform' : 'auto'
          }}
          onMouseEnter={(e) => enableHeavyAnimations && (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => enableHeavyAnimations && (e.currentTarget.style.transform = 'scale(1)')}
          loading="eager"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>

        {/* Animated Particles - Only on desktop */}
        {enableHeavyAnimations && particles.length > 0 && (
          <div className="absolute inset-0">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration
                }}
              />
            ))}
          </div>
        )}

        {/* Text Content */}
        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
          <div className="text-center">
            <div className="animate-fade-in-scale">
              <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-3 drop-shadow-2xl tracking-tight">
                دانشکده مدیریت و اقتصاد
              </h1>
              <div className="h-1 w-32 md:w-48 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-3 opacity-60"></div>
              <p className="text-white/95 text-base md:text-xl lg:text-2xl drop-shadow-lg font-medium">
                دانشگاه گیلان
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            const isFeatured = index === 0 || index === 1;
            return (
              <div
                key={index}
                className={`box-container ${isLoaded ? `animate-fade-in-scale stagger-${(index % 6) + 1}` : 'opacity-0'} ${enableHeavyAnimations ? 'hover:-translate-y-2' : ''} transition-all duration-300`}
                style={{
                  animationFillMode: 'both'
                }}
              >
                <div className={`${isFeatured ? 'featured-box-special' : ''} ${section.bgColor} ${enableHeavyAnimations ? 'animate-gradient' : ''} text-white rounded-2xl p-6 shadow-xl transition-all duration-300 ${enableHeavyAnimations ? 'hover:shadow-2xl' : 'active:opacity-90'} relative group h-full overflow-hidden`}>
                  {/* Shimmer Effect on Hover - Desktop only */}
                  {enableHeavyAnimations && (
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`bg-white/20 p-3 rounded-xl transition-all duration-300 ${enableHeavyAnimations ? 'group-hover:scale-110 group-hover:rotate-12' : ''}`}>
                        <IconComponent className="w-8 h-8 opacity-90" />
                      </div>
                      <h2 className={`text-lg md:text-xl font-bold transition-transform duration-300 ${enableHeavyAnimations ? 'group-hover:scale-105' : ''}`}>
                        {section.title}
                      </h2>
                    </div>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => {
                        const LinkIcon = link.icon;
                        return (
                          <li key={linkIndex} className="animate-slide-in-right" style={{ animationDelay: `${linkIndex * 0.1}s`, animationFillMode: 'both' }}>
                            <a
                              href={link.href}
                              className={`group/link flex items-center justify-between gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 transition-all duration-200 border border-white/0 ${enableHeavyAnimations ? 'hover:bg-white/25 hover:scale-105 hover:shadow-lg hover:border-white/20' : 'active:bg-white/20'}`}
                            >
                              <LinkIcon className={`w-5 h-5 flex-shrink-0 opacity-90 transition-all duration-300 ${enableHeavyAnimations ? 'group-hover/link:scale-125 group-hover/link:rotate-12' : ''}`} />
                              <span className="text-sm md:text-base flex-1 text-right font-medium">{link.text}</span>
                              <ChevronLeft className={`w-4 h-4 opacity-60 transition-all duration-300 ${enableHeavyAnimations ? 'group-hover/link:opacity-100 group-hover/link:-translate-x-2' : ''}`} />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Communication Section Cards - Separate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Suspense fallback={<div className="col-span-full h-32"></div>}>
            <CommunicationSection isLoaded={isLoaded} enableHeavyAnimations={enableHeavyAnimations} />
          </Suspense>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-8 mt-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-float" style={{ top: '-50%', right: '10%' }}></div>
          <div className="absolute w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-float" style={{ bottom: '-50%', left: '10%', animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            <p className="text-base md:text-lg opacity-90 font-medium mb-2">
              دانشکده مدیریت و اقتصاد - دانشگاه گیلان
            </p>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-3"></div>
            <p className="text-xs md:text-sm opacity-60">
              ساخته شده با ❤️ برای دانشجویان
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


