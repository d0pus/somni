import ParticleBackground from "../components/ParticleBackground";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden bg-gradient-dark">
      <ParticleBackground />
      <div className="relative z-10 h-full flex flex-col">
        <Hero />
        <Benefits />
      </div>
    </div>
  );
};

export default Index;