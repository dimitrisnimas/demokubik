import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from '../i18n/I18nContext';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useTranslation();

    return (
        <div className="flex items-center space-x-2 text-sm text-gray-400 border-l border-gray-700 ml-4 pl-4">
            <button 
                onClick={() => setLanguage('en')}
                className={`font-semibold transition-colors duration-200 ${language === 'en' ? 'text-kubik-purple' : 'hover:text-white'}`}
            >
                EN
            </button>
            <span>|</span>
            <button 
                onClick={() => setLanguage('el')}
                className={`font-semibold transition-colors duration-200 ${language === 'el' ? 'text-kubik-purple' : 'hover:text-white'}`}
            >
                EL
            </button>
        </div>
    );
};

const NavLinks: React.FC<{onLinkClick?: () => void}> = ({ onLinkClick }) => {
    const { t } = useTranslation();
    const linkStyle = "px-4 py-2 text-gray-300 hover:text-kubik-purple transition-colors duration-300";
    const activeLinkStyle = { color: '#8B5CF6' };

    return (
        <>
            <NavLink to="/" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={onLinkClick}>{t('navHome')}</NavLink>
            <NavLink to="/about" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={onLinkClick}>{t('navAbout')}</NavLink>
            <NavLink to="/services" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={onLinkClick}>{t('navServices')}</NavLink>
            <NavLink to="/contact" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined} onClick={onLinkClick}>{t('navContact')}</NavLink>
        </>
    );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative overflow-hidden ${hasScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
      {/* Lines Effect Container */}
      <div 
          className={`absolute inset-0 w-full h-full animate-lines-pan transition-opacity duration-500 pointer-events-none ${hasScrolled ? 'opacity-100' : 'opacity-0'}`}
          style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '3rem 3rem',
          }}
      />
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <Link to="/" className="text-3xl font-bold text-white">
          KUBIK<span className="text-kubik-purple">.</span>
        </Link>
        <div className="hidden md:flex items-center">
          <NavLinks />
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none ml-4">
                {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-kubik-gray absolute w-full z-10">
          <div className="flex flex-col items-center py-4">
            <NavLinks onLinkClick={() => setIsOpen(false)}/>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;