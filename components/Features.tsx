import React from 'react';
import { Cpu, Shield, Zap, Globe, BarChart3, Layers } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-900/20 flex items-center justify-center mb-4 sm:mb-6 text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/20 transition-colors">
      {icon}
    </div>
    <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white">{title}</h3>
    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hyper-Performance",
      description: "Engineered for speed. Our core infrastructure delivers sub-millisecond latency for real-time applications."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Visualize every request, packet, and transaction with our immersive, zero-delay observability dashboard."
    }
  ];

  return (
    <section id="technology" className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 px-4">
            Built for the <span className="text-purple-400">Void</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Experience a suite of tools designed to survive the harshest digital environments while delivering elegance and efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};