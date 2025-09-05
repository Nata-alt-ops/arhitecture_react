// src/main/Main.tsx
import React from 'react';
import '../main/Main.scss';


export const Main: React.FC = () => {
  return (
    <div className="example_page">
      <main>
        {/* Секция: Главная */}
        <section id="home" className="section" style={{ backgroundColor: '#e3f2fd', minHeight: '100vh', padding: '2rem' }}>
          <h1>Главная</h1>
          <p>Добро пожаловать на главную страницу!</p>
          <button type="button" className="btn btn-dark">Добавить картинку</button>
        </section>

        {/* Секция: Галерея */}
        <section id="gallery" className="section" style={{ backgroundColor: '#f3e5f5', minHeight: '100vh', padding: '2rem' }}>
          <h1>Галерея</h1>
          <p>Здесь будет ваша карусель с картинками...</p>
        </section>

        {/* Секция: Аккордеон */}
        <section id="accordion" className="section" style={{ backgroundColor: '#ffe0b2', minHeight: '100vh', padding: '2rem' }}>
          <h1>Аккордеон</h1>
          <p>Здесь будет аккордеон с шутками...</p>
        </section>

        {/* Секция: Тосты */}
        <section id="toasts" className="section" style={{ backgroundColor: '#c8e6c9', minHeight: '100vh', padding: '2rem' }}>
          <h1>Тосты</h1>
          <p>Примеры всплывающих уведомлений</p>
        </section>
      </main>
    </div>
  );
};