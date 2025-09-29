// src/components/Header/Header.jsx
import { Link } from "react-router-dom";

const Hader = () => {
  return (
    <header className="bg-blue-600 text-white ">
      <div className="container mx-auto">
        <nav className="flex justify-between text-md py-2">
          <h1 className="text-xl font-bold">My App</h1>
          <ul className="flex gap-12">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contect" className="hover:underline">
                Contact us
              </Link>
            </li>

            <li>
              <Link to="/skill" className="hover:underline">
                Skill
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Hader;
