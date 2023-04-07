import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import ContactUs from './pages/ContactUs';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Counter from "./pages/Counter";

function App() {
  return (
    <div>
        <NavigationBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    </div>);
}

export default App;
