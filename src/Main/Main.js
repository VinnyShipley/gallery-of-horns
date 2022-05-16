import React from "react";
import HornedBeast from "../HornedBeast/HornedBeast.js";


class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      beastArray: this.props.data
    }
  }


  //fuction that displays beasts based on how many horns were put into the dropdown option
  hornDecider = (e) => {
    let selectedHorn = parseInt(e.target.value);
    let allBeasts = this.props.data;
    if (selectedHorn) {
      let filteredBeasts = allBeasts.filter(beast => beast.horns === selectedHorn)
      this.setState({
        beastArray: filteredBeasts
      })
    }
    else {
      this.setState({
      beastArray: this.props.data
      })
    }


  };

  render() {


    let beast = this.state.beastArray.map((beast, idx) => {
      return (
        <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          horns={beast.horns}
          key={idx}
          openModalHandler={this.props.openModalHandler}
          selectABeast={this.props.selectABeast}
          beast={beast}
        />)
    })
    return (
      <main>
        <form >
          <fieldset>
            <legend>How Many Horns</legend>
            <select onChange={this.hornDecider} name="selected">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
              <option>all</option>
            </select>
          </fieldset>
        </form>
        {beast}
      </main>
    )
  }
}

export default Main;