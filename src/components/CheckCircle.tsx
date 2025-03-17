import React from 'react';

interface CheckCircleProps {
  size?: number;
  className?: string;
}

const CheckCircle: React.FC<CheckCircleProps> = ({ size = 64, className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <img 
        src="/images/checkCircle.svg" 
        alt="체크 아이콘" 
        width={size} 
        height={size} 
        className="w-full h-full"
        aria-label="완료"
        tabIndex={0}
      />
    </div>
  );
};

export default CheckCircle; 