import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './base/Navbar';
import Footer from './base/Footer';
import HomePage from './base/HomePage';
import About from './base/About';
import ContactUs from './base/ContactUs';
import Login from './user/Login';
import Signup from './user/Signup';
import PrivateRoute from './user/PrivateRoute';
import { AuthProvider } from './user/AuthContext';
import './App.css';
import CantileverWallCalculator from './wallDesign/Walldesign_homepage';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="app">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contactus" element={<ContactUs />} />
                            
                            <Route path="cantilever_wall" element={
                                
                                    <CantileverWallCalculator />
                                
                            } />

                            {/* Add more routes as needed */}
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;

