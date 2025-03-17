import React from 'react';

interface CarrierIconProps {
  className?: string;
  carrier?: 'kt' | 'skt' | 'lg' | 'default';
}

const CarrierIcon: React.FC<CarrierIconProps> = ({ className = '', carrier = 'default' }) => {
  // 통신사별 색상 설정
  const getColor = () => {
    switch (carrier) {
      case 'kt':
        return '#ED2126';
      case 'skt':
        return '#EA1C5A';
      case 'lg':
        return '#A50034';
      default:
        return '#425AD5';
    }
  };

  return (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="24" cy="24" r="24" fill={getColor()} />
      <path 
        d="M24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12ZM24 16C28.4183 16 32 19.5817 32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16Z" 
        fill="white" 
        fillOpacity="0.8"
      />
    </svg>
  );
};

export default CarrierIcon; 