import React from 'react';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
  }
  addClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  };
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img
          onClick={this.addClicks}
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title} />
        <p>{this.props.description}</p>
        <p>The {this.props.title} has {this.props.horns} horn(s)</p>
        <p>❤️{this.state.clicks}</p>
      </article>
    )
  }

}

export default HornedBeast