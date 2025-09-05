// src/components/Header/Header.tsx
import React from 'react';
import './Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const navItems = [
  { id: 'home', label: 'Projects' },
  { id: 'gallery', label: 'About' },
  { id: 'accordion', label: 'News' },
  { id: 'toasts', label: 'Team' },
  { id: 'toasts', label: 'Contact' },
] as const;

type NavItem = typeof navItems[number];

export const Header = () => {
  const handleScroll = (e: any, targetId: NavItem['id']) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>

      <div className='d-flex'>
        <div className='p-2 flex-grow-1 '>
          <img src='/IMAGE.svg' className='header_logo'></img>
        </div>

        <div className='p-2 buttons'>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={(e) => handleScroll(e, item.id)}
         
          >
            {item.label}
          </button>
        ))}
        </div>

        <div className='p-2'>
          <div className='t'>
          <button type="button" className="btn btn-dark ">Get template</button>
          </div>
        </div>
      </div>


  
























    </header>
  );
};

