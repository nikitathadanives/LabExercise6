import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Courses from './components/Courses';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MainContent} />
        <Route path="/courses" component={Courses} />
        {/* Add more routes as needed */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
