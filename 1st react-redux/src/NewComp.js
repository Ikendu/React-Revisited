import React, { Component } from "react";
const name = "Younglife Groups"
class NewComp extends Component { 
  
  style = {
   fontStyle: "italic",
    color: "purple",
  }
  
  render() {
    const {message} = this.state
    return (
      <div>
        <h2 style={this.style}>{this.props.message}</h2>
        <button onClick={this.props.buttonChange}>subscribe</button>
      </div>
    )
  }  
}
const mapStateToProps = (state) => {
  return {message: this.message}
}
const mapDispatchToProp = (dispatch) => {
  return {
    buttonChange: () => dispatch({type: "message type"})
  }
}
export default connect(mapDispatchToProp, mapStateToProps)(NewComp)