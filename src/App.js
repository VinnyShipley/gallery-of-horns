import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js'

class App extends React.Component{

  render(){
    return (
      <body>
      <Header/>
      <Main/>
      <Footer/>
      </body>
      );
  }
};

export default App;
