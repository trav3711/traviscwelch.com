import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import './App.css';

import Footer from './components/Footer';
import Stamp from './components/Stamp'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PhotoPage from './pages/PhotoPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Travis Welch',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hello There!',
        subTitle: 'Welcome to my website where I try to outline my professional skills and personal interests',
      },
      about: {
        title: 'About Me'
      },
      photography: {
        title: 'My Photography',
        text: 'A collection of the images I\'m most proud of having made'
      },
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="" bg="white" expand="lg">

            <Navbar.Brand><Stamp /></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/photography">Photography</Link>
                <a className="nav-link" href="https://github.com/trav3711"><img src={require('./content/icons/github_black.png')} /></a>
                <a className="nav-link" href="https://www.instagram.com/theweirdwelch/?hl=en"><img src={require('./content/icons/instagram_black.png')} /></a>
                <a className="nav-link" href="https://twitter.com/theweirdwelch"><img src={require('./content/icons/twitter_black.png')} /></a>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}/>} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/photography" render={() => <PhotoPage title={this.state.photography.title} text={this.state.photography.text}/>} />

        </Container>
      </Router>
    );
  }
}

export default App;
