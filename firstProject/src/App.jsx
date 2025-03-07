// // import Navbar from "./components/Navbar.jsx";
// // import Hero from "./components/Hero.jsx";
// // import Features from "./components/Features.jsx";
// // import Testimonials from "./components/Testimonials.jsx";
// // import CTA from "./components/CTA.jsx";
// // import Footer from "./components/Footer.jsx";

// // const App = () => {
// //   return (
// //     <div>
// //       <Navbar />
// //       <Hero />
// //       <Features />
// //       <Testimonials />
// //       <CTA />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default App;

// // /src/App.jsx
// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <Navbar />
      
//       {/* Main Content */}
//       <main>
//         <section id="home" className="bg-blue-100 py-20">
//           <div className="max-w-7xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-gray-800">Welcome to Our Website</h2>
//             <p className="text-lg text-gray-600 mt-4">Your journey begins here. Discover amazing content.</p>
//           </div>
//         </section>

//         <section id="about" className="bg-white py-20">
//           <div className="max-w-7xl mx-auto text-center">
//             <h3 className="text-2xl font-semibold text-gray-800">About Us</h3>
//             <p className="text-lg text-gray-600 mt-4">We are passionate about creating innovative solutions for our users.</p>
//           </div>
//         </section>

//         <section id="services" className="bg-gray-100 py-20">
//           <div className="max-w-7xl mx-auto text-center">
//             <h3 className="text-2xl font-semibold text-gray-800">Our Services</h3>
//             <p className="text-lg text-gray-600 mt-4">Explore the various services we offer to help you succeed.</p>
//           </div>
//         </section>

//         <section id="contact" className="bg-white py-20">
//           <div className="max-w-7xl mx-auto text-center">
//             <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
//             <p className="text-lg text-gray-600 mt-4">Get in touch with us to learn more or get started!</p>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default App;

import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
