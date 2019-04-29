import React,{Component} from 'react';

export class Stepper extends Component {
    constructor(){
        super()
        this.state={
            counter :0
        }
}
 increment = ()=> {
     console.log("[Increment")

     this.setState({
        counter: this.state.counter + 1
      })
  
    }
 decrement = ()=> {
   console.log("[Increment")

   this.setState({
     counter:this.state.counter -1
 })
}
    render() {
        console.log("[Render]")
        return (
          <div>
            <button onClick={this.decrement}>-</button>
            <label>{this.state.counter}</label>
            <button onClick={this.increment}>+</button>
         
          

        </div>
    )
  }

}






