import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './App.scss';
import MovieListing from './components/MovieListing/MovieListing';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetail} />
          <Route component={PageNotFound} />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
