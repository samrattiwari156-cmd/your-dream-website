import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { PageBanner } from '@/components/site';
import { Button } from '@/components/ui/button';
import { media } from '@/lib/media';
import { pageMeta } from '@/lib/page-meta';
const articles = [
  { title: 'Beginners guide to start your photography journey', image: media.landscape, slug: 'beginners-guide-to-start-your-photography-journey-2' },
  { title: 'Twenty photography tips to make photos amazing', image: media.camera, slug: 'twenty-photography-tips-to-make-photos-amazing' },
  { title: 'What Norway is best spots For Photography', image: media.lighting, slug: 'what-norway-is-best-spots-for-photography' },
  { title: 'How I Take my cool Shots for my Reels', image: media.wide, slug: 'how-i-take-my-cool-shots-for-my-wildlife-reels' },
];
export const Route = createFileRoute('/blog')({ head: () => pageMeta('Blog — Learn Create Grow', 'Photography insights, practical studio tips, and creative inspiration from Ransan Media House.'), component: Blog });
function Blog() {
  const [selected, setSelected] = useState<typeof articles[number] | null>(null);
  return <div className="blog-page"><PageBanner title="Learn Create Grow" description="Explore insights, ideas, and practical tips to help you improve your content, strengthen your brand, and grow with confidence." image={media.microphone} /><section className="container"><div className="blog-grid">{articles.map(article => <article className="blog-card" key={article.title}><Button variant="ghost" className="article-image" onClick={() => setSelected(article)} aria-label={`Read ${article.title}`}><img src={article.image} alt={article.title} /></Button><div className="article-details"><time dateTime="2024-03-15">15 MAR 2024</time><Button variant="link" className="article-title" onClick={() => setSelected(article)}><h2>{article.title}</h2></Button><p>By Ransanstudiosadmin</p></div></article>)}</div></section>
    {selected && <div className="article-overlay" onClick={() => setSelected(null)}><section className="article-modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={event => event.stopPropagation()}><Button variant="ghost" size="icon" className="modal-close" onClick={() => setSelected(null)} aria-label="Close article"><X /></Button><img src={selected.image} alt={selected.title} /><time>15 MAR 2024</time><h2>{selected.title}</h2><p>Explore the full photography article from Ransan Media House.</p><Button asChild><a href={`https://ransanstudios.com/${selected.slug}/`} target="_blank" rel="noreferrer">Read Full Article <ArrowUpRight size={16} /></a></Button></section></div>}
  </div>;
}