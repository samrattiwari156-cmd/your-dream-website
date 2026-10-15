import { Link, useLocation } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, Mic, Camera, SlidersHorizontal, CalendarCheck, Sparkles, Headphones, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/ransan-logo.avif.asset.json';

export const navigation = [
  { label: 'Home', to: '/' }, { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' }, { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return <header className="site-header"><div className="container header-inner">
    <Link to="/" aria-label="Ransan Media House home" className="logo-link"><img src={logo.url} alt="Ransan Media House" /></Link>
    <nav aria-label="Main navigation" className={open ? 'main-nav is-open' : 'main-nav'}>{navigation.map(item => <Button key={item.to} asChild variant="ghost" className={location.pathname === item.to ? 'nav-link active' : 'nav-link'}><Link to={item.to} onClick={() => setOpen(false)}>{item.label}</Link></Button>)}</nav>
    <Button variant="ghost" size="icon" className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-brand"><Link to="/"><img src={logo.url} alt="Ransan Media House" /></Link><p>Crafting powerful visuals for brands, businesses, and professionals.</p></div>
    <div><h3>Our Services</h3><Link to="/services">Podcast & Studio Production</Link><Link to="/services">Audio & Video Recording</Link><Link to="/services">Brand & Commercial</Link><Link to="/services">Video Editing & Lighting</Link></div>
    <div><h3>Quick Links</h3>{navigation.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div>
    <div><h3>Let's Connect</h3><Link to="/contact">Get in touch <ArrowUpRight size={14} /></Link><p>Jabalpur, Madhya Pradesh</p><Link to="/contact">Visit our studio</Link></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Ransan Media House. All rights reserved.</span><span>Made for stories that matter.</span></div></footer>;
}

export function ContactLink({ children = 'Book Your Session', light = false }: { children?: React.ReactNode; light?: boolean }) {
  return <Button asChild variant={light ? 'secondary' : 'default'} className="action-button"><Link to="/contact">{children}<ArrowUpRight size={16} /></Link></Button>;
}

export function PageBanner({ title, description, image }: { title: string; description: string; image: string }) {
  return <section className="container"><div className="page-banner"><img src={image} alt="Ransan podcast recording studio" /><div className="page-banner-content"><h1>{title}</h1><p>{description}</p><ContactLink light /></div></div></section>;
}

const benefits = [
  { icon: CalendarCheck, title: 'Easy Booking Process', text: 'Simple and quick booking via call, WhatsApp, or online enquiry — no complicated steps.' },
  { icon: Sparkles, title: 'Professional On-Set Support', text: 'Our experienced team guides you throughout the shoot to ensure smooth execution and quality results.' },
  { icon: Mic, title: 'High-End Studio Equipment', text: 'Advanced cameras, professional lighting, and audio gear for sharp, polished visuals.' },
];
export function Benefits({ dark = false }: { dark?: boolean }) {
  return <div className={dark ? 'benefit-grid dark-benefits' : 'benefit-grid'}>{benefits.map(({ icon: Icon, title, text }) => <div className="benefit" key={title}><span className="benefit-icon"><Icon size={23} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>;
}

export function StudioFeatures({ services = false }: { services?: boolean }) {
  const items = services ? [
    { icon: Mic, title: 'Podcast Shows', text: 'A space for meaningful conversations and stories, recorded with professional clarity.' },
    { icon: Camera, title: 'Audio & Video Recording', text: 'High-quality sound and visuals, captured together in one creative space.' },
    { icon: SlidersHorizontal, title: 'Video Editing & Lighting', text: 'Thoughtful lighting and polished edits to bring your content together.' },
  ] : [
    { icon: Headphones, title: 'Dedicated Technical Support', text: 'Our team takes care of the details so you can focus on your conversation.' },
    { icon: Mic, title: 'Noise Free Environment', text: 'A calm, acoustically considered space for focused, distraction-free recording.' },
    { icon: Camera, title: 'High-End Equipment', text: 'Professional cameras, microphones, and lighting for content that stands out.' },
  ];
  return <div className={services ? 'studio-features service-features' : 'studio-features'}>{items.map(({ icon: Icon, title, text }) => <div key={title}><span className="feature-icon"><Icon size={24} /></span><h3>{title}</h3><p>{text}</p></div>)}</div>;
}

export function CallToAction() {
  return <section className="container"><div className="cta-band"><span className="eyebrow">YOUR NEXT GREAT STORY STARTS HERE</span><h2>Let’s create something extraordinary.</h2><ContactLink light>Get in Touch</ContactLink></div></section>;
}

export function ReadMore({ onClick }: { onClick: () => void }) {
  return <Button variant="link" onClick={onClick} className="read-more">Read more <ChevronRight size={15} /></Button>;
}