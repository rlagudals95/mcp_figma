import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// 스타일 추가를 위한 함수
const addStylesheet = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
  document.head.appendChild(link);
};

// 앱 초기화 함수
const initApp = () => {
  // 루트 요소 생성
  const rootElement = document.createElement('div');
  rootElement.id = 'root';
  document.body.appendChild(rootElement);

  // 스타일 추가
  addStylesheet();

  // 앱 렌더링
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// 문서가 로드되면 앱 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

export default initApp; 