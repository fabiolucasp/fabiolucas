import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieIconProps {
  src?: string;
  icon?: React.ReactNode;
  size?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  playOnHover?: boolean;
  className?: string;
}

const LottieIcon: React.FC<LottieIconProps> = ({ 
  src, 
  icon,
  size = 24, 
  loop = true, 
  autoplay = true, 
  playOnHover = false,
  className = "" 
}) => {
  const [dotLottie, setDotLottie] = useState<any>(null);
  const [error, setError] = useState(false);
  
  const effectiveAutoplay = playOnHover ? false : autoplay;
  const effectiveLoop = playOnHover ? true : loop;

  const handleMouseEnter = () => {
    if (playOnHover && dotLottie) {
      dotLottie.play();
    }
  };

  const handleMouseLeave = () => {
    if (playOnHover && dotLottie) {
      dotLottie.stop(); 
    }
  };

  // Se não houver src ou ocorrer erro, renderiza o ícone de fallback
  if (!src || error) {
    if (icon) {
        return (
            <div 
                style={{ width: size, height: size }} 
                className={`flex items-center justify-center text-current ${className} ${playOnHover ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}
            >
                {/* Clone element to force size inheritance if needed, though parent div constrains it */}
                {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { 
                    size: typeof size === 'number' ? size : '100%', 
                    width: typeof size === 'number' ? size : '100%', 
                    height: typeof size === 'number' ? size : '100%' 
                }) : icon}
            </div>
        );
    }
    return <div style={{ width: size, height: size }} className={`bg-[#333]/20 rounded-full ${className}`} />;
  }

  return (
    <div 
      style={{ width: size, height: size }} 
      className={`relative flex items-center justify-center ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DotLottieReact
        src={src}
        loop={effectiveLoop}
        autoplay={effectiveAutoplay}
        dotLottieRefCallback={setDotLottie}
        onError={() => setError(true)}
        renderConfig={{
            autoResize: true,
            devicePixelRatio: window.devicePixelRatio || 1,
        }}
      />
    </div>
  );
};

export default LottieIcon;