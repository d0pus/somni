import { Star } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    "15 scientifically proven techniques for better sleep",
    "Backed by 150+ scientific studies",
    "Gamified experience to keep you engaged",
    "Builds lasting habits and routines",
    "Just 10-15 minutes before bed"
  ];

  return (
    <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 md:px-8">
      <div className="md:w-1/2">
        <div className="space-y-3 md:space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-4 text-white/90 animate-fade-in" style={{
              animationDelay: `${index * 200}ms`
            }}>
              <Star className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 animate-twinkle" />
              <span className="text-base md:text-lg text-left">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;