import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state={
            name: 'Viviana'
        }
        console.log("se ha montado el constructor");
    }

    componentDidMount(){
        console.log("se ha montado el componente class ");
    }
    componentDidUpdate(){
        console.log("se ha actualizado el componente class");
    }
  render() {
    console.log("se ha montado el render");
    return (
      <div>
        <h1>{this.props.titulo}</h1> 
        <h1>{this.props.name}</h1> 
    </div>
      
    
    )
  }
}
