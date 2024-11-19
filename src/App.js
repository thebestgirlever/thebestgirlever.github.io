import './App.css';
import React, { useState, useEffect } from 'react';

import Project from './components/project';
import GitHub from "./components/gh.svg";
import Number from "./components/number.svg";
import Mail from "./components/mail.svg";
import Telegram from "./components/tg.svg";
import Whatsup from "./components/whatsup.svg";

const PhoneCopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (e) => {
    e.preventDefault();
    const phoneNumber = '89778630403';

    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Ошибка при копировании:', error);
      });
  };

  return (
    <div className="link" onClick={handleCopyClick}>
      <img src={Number} alt="Number" />
      {isCopied && <span className="copied-message">Скопировано!</span>}
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (section) => {
    setActiveSection(section);

    if (section === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'projects') {
      document.querySelector('.l-projects').scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const resumeButton = document.querySelector('.l-resume');
    if (resumeButton) {
      resumeButton.addEventListener('click', function () {
        var pdfUrl = 'images/cv.pdf';
        window.open(pdfUrl, '_blank');
      });
    }
    return () => {
      if (resumeButton) {
        resumeButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="root">
      <div className="rigth">
        <div className="r-title">
          <div className="r-name">Майя Молдабекова</div>
          <div className="r-prof">Frontend developer</div>
        </div>
        <div className="r-nav">
          <div
            className={`nav-block ${activeSection === 'about' ? 'nav-block-active' : ''}`}
            id="about"
            onClick={() => handleNavClick('about')}
          >
            <div className={`nav-line ${activeSection === 'about' ? 'nav-line-active' : ''}`}></div>
            <div className={`nav-title ${activeSection === 'about' ? 'nav-title-active' : ''}`}>About</div>
          </div>

          <div
            className={`nav-block ${activeSection === 'projects' ? 'nav-block-active' : ''}`}
            id="projects"
            onClick={() => handleNavClick('projects')}
          >
            <div className={`nav-line ${activeSection === 'projects' ? 'nav-line-active' : ''}`}></div>
            <div className={`nav-title ${activeSection === 'projects' ? 'nav-title-active' : ''}`}>Projects</div>
          </div>
        </div>

        <div className="r-links">
          <a className='link' href='https://github.com/thebestgirlever' target='_blank' rel="noopener noreferrer">
            <img src={GitHub} alt="GitHub" />
          </a>
          <a className='link' href='https://api.whatsapp.com/send?phone=79778630403' target='_blank' rel="noopener noreferrer">
            <img src={Whatsup} alt="What's Up" />
          </a>
          <a className='link' href='https://t.me/ribbit_r_ribbit' target='_blank' rel="noopener noreferrer">
            <img src={Telegram} alt="Telegram" />
          </a>
          <a className='link' href="mailto:maya.mol@bk.ru" target='_blank' rel="noopener noreferrer">
            <img src={Mail} alt="Mail" />
          </a>
          <PhoneCopyButton />
        </div>
      </div>

      <div className="left">
        <div className="l-about">
          Я выпускница геологического факультета МГУ, где завершила обучение на бакалавриате и в магистратуре. Уже во время учебы увлеклась программированием, изучая языки самостоятельно и на специализированных курсах. Этот интерес перерос в настоящее увлечение и стремление развиваться в разработке.
        </div>
        <div className="l-about">
          Мой путь в программировании начался с изучения Python, который помог мне понять основы логики программирования и решения сложных задач. Со временем я познакомилась с различными направлениями разработки, и больше всего меня привлек Frontend. Возможность создавать визуально понятные и удобные интерфейсы для пользователей вдохновила меня углубиться именно в эту область.
        </div>
        <div className="l-about">
          Поскольку на данный момент у меня нет коммерческого опыта, готова продемонстрировать свои навыки на примере pet-проектов. Эти проекты отражают мой уровень владения инструментами разработки, внимание к деталям и готовность к трудным задачам.
        </div>

        <div className="l-resume">
          Посмотреть полное резюме ⬈
        </div>

        <div className='l-projects'>
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
