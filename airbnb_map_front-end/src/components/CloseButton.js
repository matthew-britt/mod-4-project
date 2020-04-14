import React from 'react'
import '../stylesheets/CloseButton.css'

class closeButton extends React.Component{
  render(){
    return <button className="close" onClick={this.props.closeButton}>X</button>
  }
}

export default closeButton;