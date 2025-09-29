import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Hader from './Hader';


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hader/>
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
