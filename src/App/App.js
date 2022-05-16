import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js'
import Modal from 'react-bootstrap/Modal'
import data from '../Data.json'
import '../App/App.css'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null,
      isModalDisplaying: false,
    }
  }

  

  selectABeast = (beast) => {
    this.setState({
      selectedBeast: beast
    })
  }

  openModalHandler = () => {
    this.setState({
      isModalDisplaying: true
    });
  };
  closeModalHandler = () => {
    this.setState({
      isModalDisplaying: false
    });
  };



  render() {
    return (
      <>
        <Header>

        </Header>
        <Main
          data={data}
          openModalHandler={this.openModalHandler}
          selectABeast={this.selectABeast}
        >
         
        </Main>
        <Footer />
        <Modal
          show={this.state.isModalDisplaying}
          onHide={this.state.closeModalHandler}
        >{this.state.selectedBeast && this.state.selectedBeast.title}
        </Modal>
      </>
    );
  }
};

export default App;
