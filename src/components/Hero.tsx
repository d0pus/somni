import { Moon } from 'lucide-react';
import SleepChart from './SleepChart';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
          Better Sleep,<br />Same Schedule ⏰
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6 md:mb-8">
          A science-backed, interactive program that improves your sleep in just 10 minutes a day
        </p>
        <button className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105">
          Start for Free
        </button>
      </div>

      <div className="hidden md:block w-1/2 pl-8">
        <div className="relative">
          <div className="absolute top-[-80px] right-[-50px] z-10">
            <Moon size={80} className="text-moonYellow md:w-[120px] md:h-[120px] animate-float" />
            <div className="absolute inset-0 blur-xl bg-moonYellow/20 rounded-full" />
          </div>
          <SleepChart />
        </div>
      </div>
    </div>
  );
};

export default Hero;