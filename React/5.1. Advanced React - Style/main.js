// Advanced React Techniques
// In this unit, you will learn a variety of useful techniques that React programmers are expected to know.

// You'll learn how to make a stateless functional component, how to make a propType, how to write a form, and how to use styles.

// You'll also be introduced to your second programming pattern: dividing components into presentational components and container components.

// Click Next to begin!

// ------------------------------------------------------------
// Inline Styles
// There are many different ways to use styles in React. This lesson is focused on one of them: inline styles.

// An inline style is a style that's written as an attribute, like this:

<h1 style={{ color: 'red' }}>Hello world</h1>
// Notice the double curly braces. What are those for?

// The outer curly braces inject JavaScript into JSX. They say, "everything between us should be read as JavaScript, not JSX."

// The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object:

{ color: 'red' }
// If you inject an object literal into JSX, and your entire injection is only that object literal, then you will end up with double curly braces. There's nothing unusual about how they work, but they look funny and can be confusing.

// Sample
import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style={{ background: 'lightblue', color : 'darkred'}}>Please style me! I am so bland!</h1>;

ReactDOM.render(
  styleMe, 
  document.getElementById('app')
);

// ------------------------------------------------------------
// Make A Style Object Variable
// That's all that you need to apply basic styles in React! Simple and straightforward.

// One problem with this approach is that it becomes obnoxious if you want to use more than just a few styles. An alternative that's often nicer is to store a style object in a variable, and then inject that variable into JSX.

// Look in the code editor for an example. The style object is defined on lines 3-6, and then injected on line 11.

// If you aren't used to using modules, then this code may have made you twitch uncontrollably:

const style = {
  color: 'darkcyan',
  background: 'mintcream'
};
// Defining a variable named style in the top-level scope would be an extremely bad idea in many JavaScript environments! In React, however, it's totally fine.

// Remember that every file is invisible to every other file, except for what you choose to expose via module.exports. You could have 100 different files, all with global variables named style, and there could be no conflicts.

import React from 'react';

const styles = {
  color: 'darkcyan',
  background: 'mintcream'
};

export class StyledClass extends React.Component {
  render() {
    return (
      <h1 style={styles}>
        Hello world
      </h1>
    );
  }
}

// Sample
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color: 'darkred'
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
  styleMe, 
  document.getElementById('app')
);

// ------------------------------------------------------------
// Style Name Syntax
// In regular JavaScript, style names are written in hyphenated-lowercase:

const styles = {
  'margin-top':       "20px",
  'background-color': "green"
};
// In React, those same names are instead written in camelCase:

const styles = {
  marginTop:       "20px",
  backgroundColor: "green"
};
// This has zero effect on style property values, only on style property names.

// Sample
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: '100px',
  fontSize: '50px'
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
  styleMe, 
  document.getElementById('app')
);

// ------------------------------------------------------------
// Style Value Syntax
// In the last exercise, you learned how style names are slightly different in React than they are in regular JavaScript.

// In this exercise, you will learn how style values are slightly different in React than they are in regular JavaScript.

// In regular JS, style values are almost always strings. Even if a style value is numeric, you usually have to write it as a string so that you can specify a unit. For example, you have to write "450px" or "20%".

// In React, if you write a style value as a number, then the unit "px" is assumed.

// How convenient! If you want a font size of 30px, you can write:

{ fontSize: 30 }
// If you want to use units other than "px," you can use a string:

{ fontSize: "2em" }
// Specifying "px" with a string will still work, although it's redundant.

// A few specific styles will not automatically fill in the "px" for you. These are styles where you aren't likely to use "px" anyway, so you don't really have to worry about it. Here is a list of styles that don't assume "px".
// (https://reactjs.org/docs/dom-elements.html)

// Sample
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: 100,
  fontSize: 50
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
  styleMe, 
  document.getElementById('app')
);

// ------------------------------------------------------------

// Share Styles Across Multiple Components
// What if you want to reuse styles for several different components?

// One way to make styles reusable is to keep them in a separate JavaScript file. This file should export the styles that you want to reuse, via export. You can then import your styles into any component that wants them.

// In the code editor, move back and forth between facebookStyles.js and FacebookColorThief.js to see a styles file in action.

// facebookStyles.js
// facebook color palette

const blue = 'rgb(139, 157, 195)';
const darkBlue = 'rgb(059, 089, 152)';
const lightBlue = 'rgb(223, 227, 238)';
const grey = 'rgb(247, 247, 247)';
const white = 'rgb(255, 255, 255)';

const colorStyles = {
  blue: blue,
  darkBlue: darkBlue,
  lightBlue: lightBlue,
  grey: grey,
  white: white
};

//FacebookColorThief.js
import React from 'react';
import ReactDOM from 'react-dom';
import { colorStyles } from './facebookStyles';

let divStyle = {
  backgroundColor: styles.darkBlue,
  color: styles.white
};

export class Wow extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        Wow, I stole these colors from Facebook!
      </div>
    );
  }
}

ReactDOM.render(
  <Wow />, 
  document.getElementById('app')
);


// Sample
//index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <link rel="stylesheet" href="/styles.css">
//   <title>Learn ReactJS</title>
// </head>

// <body>
//   <main id="app"></main>
//   <script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
//   <script src="/Home.compiled.js"></script>
// </body>
// </html>

//style.css
// html, body {
//   margin: 0;
//   height: 100%;
// }

// body {
//   background-color: #ffffff;
//   font-family: Helvetica, Arial, sans-serif;
//   text-align: center;
// }

// #app {
//   position: fixed;
//   margin: 0;
//   height: 100%;
//   width: 100%;
//   left: 0;
//   top: 0;
// }

// #app div {
//   width: 100%;
// }

// #app div div {
//   position: absolute;
//   height: 100%;
// }

// #app div div div {
//   position: relative;
//   height: auto;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// button {
//   margin: 20px;
//   padding: 7px 35px;
//   border-radius: 10px;
//   font-size: 16px;
//   cursor: pointer;
// }

// label {
//   display: block;
//   margin: 20px;
//   font-size: 30px;
//   font-weight: bold;
// }

// style.js
const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const background = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';
const fontSize = '4em';
const padding = '45px 0';
const color = 'green';

export const styles = {
  fontFamily: fontFamily,
  background: background,
  fontSize:   fontSize,
  padding:    padding,
  color:      color
};

//AttentionGrabber.js
import React from 'react';
import { styles } from './styles';

const h1Style = {
  color:      styles.color,
  fontSize:   styles.fontSize,
  fontFamily: styles.fontFamily,
  padding:    styles.padding,
  margin:     0
};

export class AttentionGrabber extends React.Component {
  render() {
    return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
  }
}

// Home.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AttentionGrabber } from './AttentionGrabber';
import { styles } from './styles';

const divStyle = {
  background: styles.background,
  height: '100%'
};

export class Home extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}

ReactDOM.render(
  <Home />, 
  document.getElementById('app')
);


// ------------------------------------------------------------
