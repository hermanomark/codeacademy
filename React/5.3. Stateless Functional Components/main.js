// Stateless Functional Components
// In the code editor, take a look at GuineaPigs from the last lesson.

// Notice that its instructions object only has one property: render().

// When you separate a container component from a presentational component, the presentational component will always end up like this: one render() function, and no other properties.

// If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.Component, you can write it as JavaScript function!

// A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes. We'll cover those advantages in this lesson.

// Click on Example.js to see a stateless functional component in action.

// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);



// Sample
import React from 'react';
import ReactDOM from 'react-dom';

//Before
// export class Friend extends React.Component {
//   render() {
//     return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
//   }
// }

//After
export const Friend = () => {
  return  <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
}

ReactDOM.render(
  <Friend />,
  document.getElementById('app')
);

// ------------------------------------------------------------
// Stateless Functional Components and Props
// Stateless functional components usually have props passed to them.

// To access these props, give your stateless functional component a parameter. This parameter will automatically be equal to the component's props object.

// It's customary to name this parameter props. Read Example.js to see how it works.

// Not only are stateless functional components more concise, but they will subtly influence how you think about components in a positive way. They emphasize the fact that components are basically functions! A component takes two optional inputs, props and state, and outputs HTML and/or other components.

// You'll be seeing a lot of stateless functional components in the next React course!
// Normal way to display a prop:

export class MyComponentClass extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

// Stateless functional component way to display a prop:
export const MyComponentClass = (props) => {
  return <h1>{props.title}</h1>;
}

// Normal way to display a prop using a variable:
export class MyComponentClass extends React.component {
  render() {
    let title = this.props.title;
    return <h1>{title}</h1>;
  }
}

// Stateless functional component way to display a prop using a variable:
export const MyComponentClass = (props) => {
  let title = props.title;
  return <h1>{title}</h1>;
}

// Sample
import React from 'react';

//Before
// export class GuineaPigs extends React.Component {
//   render() {
//     let src = this.props.src;
//     return (
//       <div>
//         <h1>Cute Guinea Pigs</h1>
//         <img src={src} />
//       </div>
//     );
//   }
// }

//After
export const GuineaPigs = (props) => {
  let src = props.src;
  return (<div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} />
    </div>
    );
}