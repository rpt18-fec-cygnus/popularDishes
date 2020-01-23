import React from 'react';
// import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';

class MainInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.data.name
    }
  }


  render() {

    const Link = ({ className, children }) => (
      <a className={className}>
        {children}
      </a>
    );
    
    const StyledLink = styled(Link)`
      color: palevioletred;
      font-weight: bold;
    `;

    return (
      <div> 
        <div>
          <h1>{this.props.data.name}</h1>
        </div>
        <div>
          <h4>STAR RATING {this.props.data.rating} {this.props.data.reviewCount} Reviews</h4>
        </div>
        <div>
          <h4>{this.props.data.cost}</h4>
          <StyledLink>Styled, exciting Link</StyledLink>
        </div>
      </div>
      
    )
  }  
}

export default MainInfo;