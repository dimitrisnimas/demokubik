import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/I18nContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-kubik-gray border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              KUBIK<span className="text-kubik-purple">.</span>
            </h3>
            <p className="max-w-xs">{t('footerDescription')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footerQuickLinks')}</h4>
            <ul>
              <li className="mb-2"><Link to="/" className="hover:text-kubik-purple">{t('navHome')}</Link></li>
              <li className="mb-2"><Link to="/about" className="hover:text-kubik-purple">{t('navAbout')}</Link></li>
              <li className="mb-2"><Link to="/services" className="hover:text-kubik-purple">{t('navServices')}</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:text-kubik-purple">{t('navContact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t('navServices')}</h4>
            <ul>
              <li className="mb-2">{t('serviceTitleWebsiteCreation')}</li>
              <li className="mb-2">{t('serviceTitleEshop')}</li>
              <li className="mb-2">{t('serviceTitleSocialMedia')}</li>
              <li className="mb-2">{t('serviceTitleCustomApps')}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footerConnect')}</h4>
            <p>contact@kubik.agency</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} KUBIK Agency. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
