// src/components/Header/Header.tsx
import React from 'react';

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'accordion', label: 'Аккордеон' },
  { id: 'toasts', label: 'Тосты' },
] as const;

type NavItem = typeof navItems[number];

export const Header: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: NavItem['id']) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={headerStyle}>
      <div style={navContainerStyle}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={(e) => handleScroll(e, item.id)}
            style={buttonStyle}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};

// Стили
const headerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  padding: '1rem 0',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const navContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'wrap',
};

const buttonStyle: React.CSSProperties = {
  background: 'none',
  border: '2px solid #fff',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background 0.3s, color 0.3s',
};

// Ховер: можно добавить CSS