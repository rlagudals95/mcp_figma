import React from 'react';

interface HeaderProps {
  description: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ description, className = '' }) => {
  // 텍스트에 {SKT}와 같은 형식의 변수가 있으면 하이라이트 처리
  const formattedText = description.replace(
    /\{([^}]+)\}/g, 
    (match, p1) => `<span class="text-[#40C057]">${p1}</span>`
  );

  return (
    <div className={`flex flex-col items-end w-full gap-2 ${className}`}>
      <h1 
        className="text-2xl font-bold text-center text-[#24292E] leading-[1.44] tracking-tighter"
        dangerouslySetInnerHTML={{ __html: formattedText }}
        aria-label={description.replace(/\{([^}]+)\}/g, '$1')}
        tabIndex={0}
      />
    </div>
  );
};

export default Header; 