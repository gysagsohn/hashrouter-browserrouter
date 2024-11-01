import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import SecondPage from './components/SecondPage';
import AnotherPage from './components/AnotherPage';

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/second-page">Second Page</Link></li>
                    <li><Link to="/another-page">Another Page</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/second-page" element={<SecondPage />} />
                <Route path="/another-page" element={<AnotherPage />} />
            </Routes>
        </Router>
    );
};

export default App;
