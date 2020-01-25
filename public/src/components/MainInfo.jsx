import React from 'react';
// import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';

class MainInfo extends React.Component {
  constructor(props) {
    super(props);

    // star system can be a part of this state
    this.state = {
      name: this.props.data.name
    }
    // this.createDesc = this.createDesc.bind(this);
  }

  createDesc() {
    var descriptions = '';
    var keyDesc = this.props.data.keyDesc;
    //initial load props.data.keyDesc does not exist
    //handle return
    if (!keyDesc) {
      return descriptions;
    }
    descriptions = keyDesc.join(', ')
    console.log(descriptions)
    return descriptions
    // keyDesc.forEach(ele => console.log(ele))
  }

  render() {

    const Link = ({ className, children }) => (
      <a className={className}>
        {children}
      </a>
    );
    
    // const Text = ()

    
    const StyledKeyDescription = styled(Link)`
      color: palevioletred;
      font-weight: bold;
    `;

    return (
      <div> 
        <div>
          <h1>{this.props.data.name}</h1>
        </div>
        <div>
          {/* make image source dynamic */}
          <img src="https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_5%402x.png"></img><span>  {this.props.data.reviewCount} Reviews</span>
          {/* <h4>STAR RATING {this.props.data.rating} {this.props.data.reviewCount} Reviews</h4> */}
        </div>
        <div>
          <span>{this.props.data.cost} . </span><span>{this.createDesc()}</span>
          {/* <StyledKeyDescription>{this.createDesc()}</StyledKeyDescription> */}
        </div>
      </div>
      
    )
  }  
}

export default MainInfo;