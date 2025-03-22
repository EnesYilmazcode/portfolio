import { SpotlightNewDemo } from "./components/SpotlightPreview";
import { FloatingDockDemo } from "./components/FloatingDockPreview";
import { BentoGridDemo } from "./components/bentogriddemo";
import { GlowingEffectDemoSecond } from "./components/glowingeffectdemo";
import { ExpandableCardDemo } from "./components/outsideclicdemo";
import { AnimatedTestimonialsDemo } from "./components/animatedtestimonialsdemo";
import './style.css';

export default function Home() {
  return (
    <div className="flex flex-col bg-custom-color min-h-screen">
      <SpotlightNewDemo />
      <FloatingDockDemo />
      
      <h2 className="text-4xl md:text-6xl font-bold text-center animated-gradient mt-8">
        Hobbies
      </h2>

      <div style={{ height: '5rem' }} />

      <BentoGridDemo />

      <div style={{ height: '10rem' }} />

      <h2 className="text-4xl md:text-6xl font-bold text-center animated-gradient mt-8">
        Experiences
      </h2>
      <div style={{ height: '5rem' }} />
      <GlowingEffectDemoSecond />

      <div style={{ height: '10rem' }} />

      <h2 className="text-4xl md:text-6xl font-bold text-center animated-gradient mt-8 leading-relaxed">
  Projects
</h2>
<div style={{ height: '5rem' }} />
        <AnimatedTestimonialsDemo />
        <div style={{ height: '5rem' }} />
      
    </div>
  );
}
//https://www.youtube.com/watch?v=mrc6r1lQ9m0&ab_channel=reactwithutkarsh