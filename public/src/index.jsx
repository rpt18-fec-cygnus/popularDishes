import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button.jsx'
import mendocinoFarms from '../../mockData/createData.js'
import MainInfo from './components/MainInfo.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.sampleData.name
    }
  }

  render() {
    return (
      <div> 
        {/* App Components go here! Show info for {this.props.sampleData.name} */}
        <br></br>
        <MainInfo data={this.props.sampleData} />
        <div>
          <Button>Write a Review</Button>
          <Button secondary>Add Photo</Button>
          <Button secondary>Share</Button>
          <Button secondary>Save</Button>
        </div>
      </div>
      
    )
  }  
}

ReactDOM.render( <App sampleData={mendocinoFarms}/>, document.getElementById('root'));