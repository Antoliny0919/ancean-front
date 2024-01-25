import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, currentPathName }) {
  // Pages to which the default layout will not apply
  const exceptRoute = ['/posts/newpost', '/category'];

  return (
    <>
      {exceptRoute.includes(currentPathName) || (
        <Navbar currentPathName={currentPathName} />
      )}
      {children}
      {exceptRoute.includes(currentPathName) || <Footer />}
    </>
  );
}
