// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
//       <h1 className="text-2xl font-bold">CityWeb</h1>
//       <div className="space-x-6">
//         <Link to="/home" className="hover:text-gray-200">
//           Home
//         </Link>
//         <Link to="/about" className="hover:text-gray-200">
//           About
//         </Link>

//         <Link to="/features" className="hover:text-gray-200">
//           Features
//         </Link>
//         <Link to="/team" className="hover:text-gray-200">
//           Team
//         </Link>
//         <Link to="/contact" className="hover:text-gray-200">
//           Contact
//         </Link>
//       </div>
//     </nav>
//   );
// }

// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
//       <Link to="/home" className="text-2xl font-bold">
//         CityWeb
//       </Link>
//       <div className="space-x-6">
//         <Link to="/home" className="hover:text-gray-200">
//           Home
//         </Link>
//         <Link to="/about" className="hover:text-gray-200">
//           About
//         </Link>
//         <Link to="/features" className="hover:text-gray-200">
//           Features
//         </Link>
//         <Link to="/team" className="hover:text-gray-200">
//           Team
//         </Link>
//         <Link to="/contact" className="hover:text-gray-200">
//           Contact
//         </Link>
//       </div>
//     </nav>
//   );
// }

// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   const { user, logout } = useAuth();

//   return (
//     <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
//       <Link to="/home" className="text-2xl font-bold">
//         CityWeb
//       </Link>
//       <div className="space-x-6 flex items-center">
//         <Link to="/home" className="hover:text-gray-200">
//           Home
//         </Link>
//         <Link to="/about" className="hover:text-gray-200">
//           About
//         </Link>
//         <Link to="/features" className="hover:text-gray-200">
//           Features
//         </Link>
//         <Link to="/team" className="hover:text-gray-200">
//           Team
//         </Link>
//         <Link to="/contact" className="hover:text-gray-200">
//           Contact
//         </Link>
//         {user && (
//           <button onClick={logout} className="hover:text-gray-200">
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-green-800 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">
        CityWeb
      </Link>
      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-200">
          About
        </Link>
        <Link to="/features" className="hover:text-gray-200">
          Features
        </Link>
        <Link to="/team" className="hover:text-gray-200">
          Team
        </Link>
        <Link to="/contact" className="hover:text-gray-200">
          Contact
        </Link>
        {user && (
          <button onClick={logout} className="hover:text-gray-200">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
