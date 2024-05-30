import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './inc/Header';
import Footer from './inc/Footer';
import Index from './pages/Index';
import Company from './pages/Company';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <div id="content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;