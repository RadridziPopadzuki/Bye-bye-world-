import React from 'react';
import './Button.css';



class Button extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         h1: "Hello",
         h2: "blya",
         message: "",
         message2: ""
      }
      this.inputText = this.inputText.bind(this);
   }

   push = () => {
      this.setState({ message: "you push the button" })
   }

   inputText(e) {
      this.setState({ message2: e.target.value });
   }

   render() {
      return (
         <div className="button">
            <div style={{ marginTop: "3rem", width: "40%", display: "flex", justifyContent: 'space-between', position: "relative", left: "30%" }}>
               <h1 style={{ color: "blanchedalmond" }}>{this.state.h1}</h1>
               <h2 style={{ color: "blanchedalmond" }}>{this.state.h2}</h2>
            </div>
            <div style={{ color: "red" }}>
               <button type='button' onClick={this.push}>Push the button</button>
               <p>{this.state.message}</p>
               <p>{this.state.message2}</p>
               <input defaultValue={this.state.h2} onInput={this.inputText} />
            </div>
         </div >
      );
   }
}

export default Button;
