import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'McDonalds'
    }
  }

  render() {
    return (
    <div> App Components go here! Show info for {this.state.name}</div>
    )
  }  
}

ReactDOM.render( <App />, document.getElementById('root'));