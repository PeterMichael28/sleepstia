import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useEffect } from 'react';
const PageLayout = () => {
 const { pathname } = useLocation();

 useEffect(() => {
  window.scrollTo(0, 0);
 }, [pathname]);

 return (
  <div className='antialiased'>
   <Header />
   <main className="w-full h-full overflow-x-hidden">
    <Outlet />
   </main>
   <div className="">
    <Footer />
   </div>
  </div>
 );
};

export default PageLayout;
