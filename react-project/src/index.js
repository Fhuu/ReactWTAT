import React from 'react';
import ReactDOM from 'react-dom';

//By using import we can link css into react js file
import './index.css';

/*
  This is with class
  //In this case, this is the class that being rendered.
  //Class always extends Reac.Component
  class Test extends React.Component {
    //This function is to tell React that when a class is specified in ReachDOM.render() function, 
    //It will render the thing inside the render() class
    render() {
      return (
        <div>
          <h1>Hello</h1>
          <span id="hell-yeah">This is my first react application</span>
        </div>
        
      );
    };
  }

  //This is to render the class that being passed to.
  //To render we need ReactDOM.render();
  ReactDOM.render(
    //The class to be rendered
    <Test />, 
    //The position of rendering
    document.getElementById("root")
  );
*/

/*
  //---------------WITHOUT CLASS--------------------//
  function formatName(name) {
    return name.frontName + " " + name.lastName;
  }

  const name = {
    frontName: "Diro",
    lastName: "Baloska"
  };

  
  //variable can be passed with {}
  const myname = <h1>{name}</h1>
  

  //
  function checkName(name) {
    if(name) return <h1>{formatName(name)}</h1>
    else return <h1>no name</h1>;
  }

  const myname = <h1>{formatName(name)}</h1>;

  ReactDOM.render(
    //To render only a variable, we dont need the tag. The tag is only for class.
    //Function can also be called to render something
    checkName(),
    document.getElementById("root")
  );
*/

class Car extends React.Component {
  render() {
    return <h1>{this.props.sound}</h1>
  };
}
// Props value of a function or a class should never be changed by its own 
//first letter must be capitalized, because ReactDOM represents lowcase first letter as html tag
function WhichNoise(props) {
  return <h1>{props.noise}</h1>;
}

function MakeSomeNoise() {
  //The result of this return is <h1>hiiiiihaaaa</h1>
  return (<div><WhichNoise noise="hiiiiihaaaa" /></div>);
}

ReactDOM.render(
  //This is called a suer defined component.
  //Attribute passed to the component is passed to the class' props
  <MakeSomeNoise />,
  document.getElementById("root")
);