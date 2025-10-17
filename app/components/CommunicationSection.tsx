'use client';

import { Send, MessageCircle, ChevronLeft } from 'lucide-react';

interface CommunicationSectionProps {
  isLoaded: boolean;
}

export default function CommunicationSection({ isLoaded }: CommunicationSectionProps) {
  const categories = [
    {
      name: "مدیریت صنعتی",
      bgColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
      icon: Send,
      links: [
        { text: "کانال تلگرام", href: "https://t.me/modiriat_sanaty", icon: Send },
        { text: "اینستاگرام", href: "https://www.instagram.com/modiriat_sanaty", icon: MessageCircle },
      ],
    },
    {
      name: "مدیریت بازرگانی",
      bgColor: "bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700",
      icon: MessageCircle,
      links: [
        { text: "کانال تلگرام", href: "https://t.me/businessmanagementguilan", icon: Send },
        { text: "اینستاگرام", href: "https://www.instagram.com/management.guilan", icon: MessageCircle },
      ],
    },
    {
      name: "اقتصاد",
      bgColor: "bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700",
      icon: Send,
      links: [
        { text: "کانال تلگرام", href: "https://t.me/Ecostu_Gu", icon: Send },
        { text: "اینستاگرام", href: "https://www.instagram.com/guilan_economics", icon: MessageCircle },
      ],
    },
    {
      name: "حسابداری",
      bgColor: "bg-gradient-to-br from-fuchsia-500 via-fuchsia-600 to-fuchsia-700",
      icon: MessageCircle,
      links: [
        { text: "کانال تلگرام", href: "https://t.me/accounting_guilan", icon: Send },
        { text: "اینستاگرام", href: "https://www.instagram.com/accounting_guilan", icon: MessageCircle },
      ],
    },
  ];

  return (
    <>
      {categories.map((category, index) => {
        const IconComponent = category.icon;
        
        return (
          <div
            key={category.name}
            className={`${category.bgColor} animate-gradient text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 card-hover relative overflow-hidden group ${isLoaded ? `animate-fade-in-scale stagger-${(index % 4) + 1}` : 'opacity-0'}`}
            style={{
              animationFillMode: 'both',
              animationDelay: `${0.7 + index * 0.1}s`
            }}
          >
            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="bg-white/20 p-3 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <IconComponent className="w-8 h-8 opacity-90" />
                </div>
                <h3 className="text-lg md:text-xl font-bold group-hover:scale-105 transition-transform duration-300">
                  {category.name}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => {
                  const LinkIcon = link.icon;
                  return (
                    <li key={linkIndex} className="animate-slide-in-right" style={{ animationDelay: `${0.8 + index * 0.1 + linkIndex * 0.1}s`, animationFillMode: 'both' }}>
                      <a
                        href={link.href}
                        className="group/link flex items-center justify-between gap-3 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-xl px-4 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/0 hover:border-white/20"
                      >
                        <LinkIcon className="w-5 h-5 flex-shrink-0 opacity-90 group-hover/link:scale-125 group-hover/link:rotate-12 transition-all duration-300" />
                        <span className="text-sm md:text-base flex-1 text-right font-medium">{link.text}</span>
                        <ChevronLeft className="w-4 h-4 opacity-60 group-hover/link:opacity-100 group-hover/link:-translate-x-2 transition-all duration-300" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        );
      })}
    </>
  );
}
