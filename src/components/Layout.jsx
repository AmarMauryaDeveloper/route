
import { Outlet } from 'react-router-dom';
import Header from './Hader';
import Footer from './Footer';


const Layout = () => {
  return (
    <>du
       <Header />
      <main className='h-auto h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
   

  );
};

export default Layout;
