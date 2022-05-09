import React from "react";
import HornedBeast from "./HornedBeast.js";

class App extends React.Component {
  render() {
    return(
      <main>
        <HornedBeast title='Goat' imageUrl='https://images.unsplash.com/photo-1624307297763-2f6e91b38071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' description='small and has horns'/>
        <HornedBeast title='Moose' imageUrl='https://images.unsplash.com/photo-1611113402218-b8f26dd57c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9vc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' description='large and moose-like'/>
      </main>
    )
  }
}

export default App;