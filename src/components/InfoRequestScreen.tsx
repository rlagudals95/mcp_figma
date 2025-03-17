import React from 'react';
import CheckCircle from './CheckCircle';
import Header from './Header';

interface InfoRequestScreenProps {
  companyName?: string;
  className?: string;
}

const InfoRequestScreen: React.FC<InfoRequestScreenProps> = ({ 
  companyName = 'SKT', 
  className = '' 
}) => {
  const description = `{${companyName}}에서 확인하기 어려운\n정보만 알려주시면 끝이에요`;

  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      <CheckCircle size={64} />
      <Header description={description} />
    </div>
  );
};

export default InfoRequestScreen; 