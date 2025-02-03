import { Moon } from 'lucide-react';
import SleepChart from './SleepChart';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen px-4 md:px-8 overflow-auto">
      

      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
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


      <div className="w-full md:w-1/2 flex flex-col items-center mt-12 md:mt-0">
        

        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-4 sm:mt-10">
          <Moon size={80} className="text-moonYellow w-[80px] h-[80px] md:w-[120px] md:h-[120px] animate-float" />
          <div className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] blur-lg bg-moonYellow/30 rounded-full" />
        </div>


        <div className="w-full mt-40 sm:mt-64 px-4 sm:px-8">
          <SleepChart />
        </div>

      </div>
    </div>
  );
};

export default Hero;
