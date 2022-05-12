import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      horns: ''
    };
  }

  handleSubmit= (event) => {
    event.preventDefault();
    this.setState({
      horns: event.target.selected.value
    })
  }
  
  render() {
    return (
      <>
        <h1>Select How Many Horns</h1>
        
      </>
    );
  };
};

export default App;