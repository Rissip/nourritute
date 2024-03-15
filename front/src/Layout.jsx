import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="">
      <nav className="">
        <ul className="flex justify-center">
          <li>
            <Link to="/" className="hover:underline">
              Liste
            </Link>
          </li>
          <li>
            <Link to="/favori" className="hover:underline">
              Favori
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
