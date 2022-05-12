import React from 'react';
import { Card } from 'react-bootstrap';


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
handleClick = () => {
  this.props.openModalHandler()
  this.props.selectABeast(this.props.beast)
}
  

  render() {
    return (
      <article>
        <Card style= {{ width: '18vw'}}>
          <Card.Img onClick={this.addClicks} src={this.props.imageUrl} variant='top'/>
          <Card.Body>
            <Card.Title onClick={this.handleClick}>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              <br></br>
              ❤️ {this.state.clicks}
            </Card.Text>
          </Card.Body>
        </Card>
      </article>
    )
  }
}

export default HornedBeast