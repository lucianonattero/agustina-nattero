import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Biography from './components/Biography/biography';
import WorksArt from './components/WorksArt';
import Art from './components/Art';

function App() {
  return (
    <Router>
    <div className="App">
      <IntlProvider locale="en">
        <Header name="Agustina Nattero"/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bio" element={<Biography />} />
            <Route path="/works-art" element={<WorksArt />} />
            <Route path="/works-art/:art" element={<Art />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer name="Agustina Nattero"/>
      </IntlProvider>
    </div>
    </Router>
  );
}

export default App;
