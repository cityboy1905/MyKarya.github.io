import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, headerProps = {} }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header {...headerProps} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;