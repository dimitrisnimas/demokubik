import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/I18nContext';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-8xl font-extrabold text-kubik-purple">404</h1>
      <p className="text-3xl font-bold text-white mt-4">{t('notFoundTitle')}</p>
      <p className="text-lg text-gray-300 mt-2">
        {t('notFoundSubtitle')}
      </p>
      <Link 
        to="/" 
        className="mt-8 bg-kubik-purple text-white font-bold py-3 px-8 rounded-full hover:bg-kubik-purple/80 transition-colors duration-300"
      >
        {t('notFoundButton')}
      </Link>
    </div>
  );
};

export default NotFoundPage;
