// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// // import React from "react";
// // function App() {
// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-green-200">
// //       <h1 className="text-4xl font-bold text-green-900">
// //         Tailwind is Working! 🌿
// //       </h1>
// //     </div>
// //   );
// // }

// // export default App;

// // import WelcomeScreen from "./components/WelcomeScreen";

// // function App() {
// //   return <WelcomeScreen />;
// // }

// // export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WelcomeScreen from "./components/WelcomeScreen";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Features from "./pages/Features";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<WelcomeScreen />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Pages
// import WelcomeScreen from "./components/WelcomeScreen";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Features from "./pages/Features";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar stays at the top */}
//         <Navbar />

//         {/* Page content */}
//         <main className="flex-grow">
//           <Routes>
//             {/* Landing/Login */}
//             <Route path="/" element={<WelcomeScreen />} />

//             {/* Website Pages */}
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/features" element={<Features />} />
//             <Route path="/team" element={<Team />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>

//         {/* Footer always at bottom */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import WelcomeScreen from "./components/WelcomeScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Route */}
            <Route path="/" element={<Home />} />

            {/* Auth Page (Login/Signup) */}
            <Route path="/auth" element={<WelcomeScreen />} />

            {/* Protected Routes */}
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/features"
              element={
                <ProtectedRoute>
                  <Features />
                </ProtectedRoute>
              }
            />
            <Route
              path="/team"
              element={
                <ProtectedRoute>
                  <Team />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
