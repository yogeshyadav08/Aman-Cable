// import React, { useState, useEffect } from "react";
// import HeroSection from "./components/HeroSection";
// import Login from "./components/Login";
// import { auth } from "./firebase";

// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         Loading...
//       </div>
//     );
//   }

//   return <>{user ? <HeroSection /> : <Login />}</>;
// }

// export default App;

import React from "react";
import HeroSection from "./components/HeroSection";

export const App = () => {
  return <HeroSection />;
};
