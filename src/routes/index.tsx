import { createFileRoute, Link } from '@tanstack/react-router';
import { Quote, Star, ArrowUpRight } from 'lucide-react';
import { Benefits, ContactLink, CallToAction } from '@/components/site';
import { Button } from '@/components/ui/button';
import { media } from '@/lib/media';
import { pageMeta } from '@/lib/page-meta';

export const Route = createFileRoute('/')({
  head: () => pageMeta('Best Podcast Studio for Creators & Brands', 'Record professional podcasts and videos in a fully equipped studio designed for clarity, comfort, and impact.'),
  component: Home,
});

function Home() {
  return <>
    <section className="container home-opening"><div className="home-hero"><img src={media.hero} alt="Ransan Media House studio with two chairs, microphones, and professional lighting" /><div className="home-hero-content"><span className="eyebrow">BUILT FOR PROFESSIONAL STORIES</span><h1>Best Podcast Studio for Creators & Brands</h1><p>Record professional podcasts and videos in a fully equipped studio designed for clarity, comfort, and impact.</p><ContactLink light>Explore the Studio</ContactLink></div></div><Benefits dark /></section>
    <section className="container home-about section-space"><div className="section-heading"><div><span className="eyebrow">ABOUT RANSAN MEDIA HOUSE</span><h2>Ransan Media House captures your<br className="desktop-break" /> most beautiful memories</h2></div><Button asChild className="dark-button"><Link to="/about">About Us <ArrowUpRight size={15} /></Link></Button></div><div className="two-column"><div className="framed-photo"><img src={media.wide} alt="Comfortable chairs and microphones inside our podcast studio" /></div><div className="body-copy"><p>We don’t just take photographs. We create experiences worth remembering. Ransan Media House is a professional photography studio driven by creativity, passion, and storytelling.</p><p>We believe every moment has a story, and our goal is to capture it naturally, beautifully, and timelessly.</p><p>From weddings and portraits to fashion and events, our team focuses on emotions, details, and real expressions — turning moments into memories that last forever.</p></div></div></section>
    <section className="container creative-partner"><span className="eyebrow">RANSAN MEDIA HOUSE</span><h2>Your One-Stop Creative Partner</h2><p>From concept planning and studio shoots to post-production and digital-ready content, we help you tell your story with clarity, consistency, and visual impact.</p><div className="process-row">{['Studio Space', 'Production', 'Post Production', 'Digital & Content'].map((title, i) => <div key={title}><span>0{i + 1}</span><h3>{title}</h3></div>)}</div></section>
    <section className="testimonial-band"><img src={media.chair} alt="" /><div className="container"><div className="testimonial"><div className="testimonial-top"><span className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill="currentColor" />)}</span><Quote /></div><p>Ransan Media House delivered exactly what we were looking for — professional, clean, and high-quality visuals. The team made the entire process smooth and comfortable.</p><strong>Ankit Sharma</strong><span className="review-place">Jabalpur, MP</span></div></div></section>
    <CallToAction />
  </>;
}
