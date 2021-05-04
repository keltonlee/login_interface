import { render } from "@testing-library/react"
import { Component } from 'react'

var back = {
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        //width: "100%",
        //height: "400px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
  }
  export default class backGround extends Component{
    render(){
      return (<div style={back}></div> );
    }
  }