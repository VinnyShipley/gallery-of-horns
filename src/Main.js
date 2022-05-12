import React from "react";
import HornedBeast from "./HornedBeast.js";


class App extends React.Component {
  render() {
   
    let beast =  this.props.data.map((beast, idx) => {
     return( 
      <HornedBeast
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        key={idx}
        openModalHandler={this.props.openModalHandler}
        selectABeast={this.props.selectABeast}
        beast={beast}
      />)
    })
    return (
      <main>
        {beast}
      </main>
    )
  }
}

export default App;