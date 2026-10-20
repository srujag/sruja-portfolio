import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
