import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';


class App extends Component {
  render(){

    return(
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
export default App;
