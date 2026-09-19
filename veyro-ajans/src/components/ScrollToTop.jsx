import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../analytics';

// react-router sayfa değiştirince scroll konumunu otomatik sıfırlamaz ve
// GA4 gibi araçlar SPA'da rota değişimini kendiliğinden algılamaz.
// Bu component ikisini de tek yerden halleder.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
