// this.props
// Previously, you learned one way that components can interact: a component can render another component.

// In this lesson, you will learn another way that components can interact: a component can pass information to another component.

// Information that gets passed from one component to another is known as "props."

// Click Next to enter props-land!

// ------------------------------------------------------------
// Access a Component's props
// Every component has something called props.

// A component's props is an object. It holds information about that component.

// To see a component's props object, you use the expression this.props. Here's an example of this.props being used inside of a render method:

render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}
// Most of the information in this.props is pretty useless! But some of it is extremely important, as you'll see.

// Sample
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer />, document.getElementById('app'));

// ------------------------------------------------------------
// Pass `props` to a Component
// You can pass information to a React component.

// How? By giving that component an attribute:

<MyComponent foo="bar" />
// Let's say that you want to pass a component the message, "This is some top secret info.". Here's how you could do it:

<Example message="This is some top secret info." />
// As you can see, to pass information to a component, you need a name for the information that you want to pass.

// In the above example, we used the name message. You can use any name you want.

// If you want to pass information that isn't a string, then wrap that information in curly braces. Here's how you would pass an array:

<Greeting myInfo={["top", "secret", "lol"]} />
// In this next example, we pass several pieces of information to <Greeting />. The values that aren't strings are wrapped in curly braces:

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />

// Sample
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello" />, document.getElementById('app'));

// ------------------------------------------------------------
// Render a Component's props
// You just passed information to a component's props object!

// You will often want a component to display the information that you pass.

// Here's how to make a component display passed-in information:

// 1 - Find the component class that is going to receive that information.
// 2 - Include this.props.name-of-information in that component class's render method's return statement.

//Sample
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Mark' />, 
  document.getElementById('app')
);

// ------------------------------------------------------------
// Pass props From Component To Component
// You have learned how to pass a prop to a component:

<Greeting firstName="Esmerelda" />
// You have also learned how to access and display a passed-in prop:

render() {
  return <h1>{this.props.firstName}</h1>;
}
// The most common use of props is to pass information to a component, from a different component. You haven't done that yet, but it's very similar to what you've seen already.

// In this exercise, you will pass a prop from one component to another.

// A curmudgeonly clarification about grammar:
// You may have noticed some loose usage of the words prop and props. Unfortunately, this is pretty inevitable.

// props is the name of the object that stores passed-in information. this.props refers to that storage object. At the same time, each piece of passed-in information is called a prop. This means that props could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information :(

// app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Mark"/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// greeting.js
import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

// ------------------------------------------------------------
// Render Different UI Based on props
// Awesome! You passed a prop from a component to a different component, accessed that prop from the receiver component, and rendered it!

// You can do more with props than just display them. You can also use props to make decisions.

// In the code editor, look at the Welcome component class.

// Welcome.js
import React from 'react';

export class Welcome extends React.Component {
  render() {
    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
        <h2>
          hello sir it is truly great to meet you here on the web
        </h2>
      );
    } else {
      return (
        <h2>
          WELCOME "2" MY WEB SITE BABYYY!!!!!
        </h2>
      );
    }
  }
}

// You can tell from this.props.name on line 5 that Welcome expects to receive a piece of information called name. However, Welcome never renders this piece of information! Instead, it uses the information to make a decision.

// <Welcome /> instances will render the text WELCOME "2" MY WEB SITE BABYYY!!!!!, unless the user is Mozart, in which case they will render the more respectful
// hello sir it is truly great to meet you
// here on the web.

// The passed-in name is not displayed in either case! The name is used to decide what will be displayed. This is a common technique.

// Select Home.js and look at the Home component class. What will <Welcome /> render to the screen?

//Home.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';

class Home extends React.Component {
  render() {
    return <Welcome name='Ludwig van Beethoven' />;
  }
}

ReactDOM.render(
  <Home />, 
  document.getElementById('app')
);

// Sample
// Greeting.js
import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
    if (this.props.signedIn == false) {
      return <h1>GO AWAY</h1>;
    } else {
      return <h1>Hi there, {this.props.name}!</h1>;
    }
  }
}

//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true}/>
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// ------------------------------------------------------------
// Put an Event Handler in a Component Class
// You can, and often will, pass functions as props. It is especially common to pass event handler functions.

// In the next lesson, you will pass an event handler function as a prop. However, you have to define an event handler before you can pass one anywhere. In this lesson, you will define an event handler function.

// How do you define an event handler in React?

// You define an event handler as a method on the component class, just like the render method. Almost all functions that you define in React will be defined in this way, as methods in a class.

// Take a look in the code editor. On lines 4 through 8, an event handler method is defined, with similar syntax as the render method. On line 12, that event handler method is attached to an event (a click event, in this case).

import React from 'react';

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}

// Sample
// Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk () {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah';
    }
    alert(speech);
  }
    
  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button>
        Click me!
      </button>
    );
  }
}

// ------------------------------------------------------------
// Pass an Event Handler as a prop
// Good! You've defined a new method on the Talker component class. Now you're ready to pass that function to another component.

// You can pass a method in the exact same way that you pass any other information. Behold, the mighty JavaScript.

// Sample
// Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button>
        Click me!
      </button>
    );
  }
}

// ------------------------------------------------------------
// Receive an Event Handler as a prop
// Great! You just passed a function from <Talker /> to <Button />.

// In the code editor, select Button.js. Notice that Button renders a <button></button> element.

// If a user clicks on this <button></button> element, then you want your passed-in talk function to get called.

// That means that you need to attach talk to the <button></button> as an event handler.

// How do you do that? The same way that you attach any event handler to a JSX element: you give that JSX element a special attribute. The attribute's name should be something like onClick or onHover. The attribute's value should be the event handler that you want to attach.

//Sample
// Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// Button.js
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me
      </button>
    );
  }
}

// ------------------------------------------------------------
// handleEvent, onEvent, and this.props.onEvent
// Let's talk about naming things.
// When you pass an event handler as a prop, as you just did, there are two names that you have to choose.
// Both naming choices occur in the parent component class - that is, in the component class that defines the event handler and passes it.
// The first name that you have to choose is the name of the event handler itself.
// Look at Talker.js, lines 6 through 12. This is our event handler. We chose to name it talk.
// The second name that you have to choose is the name of the prop that you will use to pass the event handler. This is the same thing as your attribute name.
// For our prop name, we also chose talk, as shown on line 15:

return <Button talk={this.talk} />;
// These two names can be whatever you want. However, there is a naming convention that they often follow. You don't have to follow this convention, but you should understand it when you see it.

// Here's how the naming convention works: first, think about what type of event you are listening for. In our example, the event type was "click."

// If you are listening for a "click" event, then you name your event handler handleClick. If you are listening for a "keyPress" event, then you name your event handler handleKeyPress:

class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}
// Your prop name should be the word on, plus your event type. If you are listening for a "click" event, then you name your prop onClick. If you are listening for a "keyPress" event, then you name your prop onKeyPress:

class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }

  render() {
    return <Child onHover={this.handleHover} />;
  }
}

// Sample
// Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// Button.js

import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me
      </button>
    );
  }
}

// Note:
// One major source of confusion is the fact that names like onClick have special meaning, but only if they're used on HTML-like elements.

// Look at Button.js. When you give a <button></button> an attribute named onClick, then the name onClick has special meaning. As you've learned, this special onClick attribute creates an event listener, listening for clicks on the <button></button>:

// // Button.js
// // The attribute name onClick
// // creates an event listner:
<button onClick={this.props.onClick}>
  Click me!
</button>

// Now look at Talker.js. Here, when you give <Button /> an attribute named onClick, then the name onClick doesn't do anything special. The name onClick does not create an event listener when used on <Button /> - it's just an arbitrary attribute name:

// // Talker.js
// // The attribute name onClick
// // is just a normal attribute name:
<Button onClick={this.handleClick} />

// The reason for this is that in <Button /> is not an HTML-like JSX element; it's a component instance.

// Names like onClick only create event listeners if they're used on HTML-like JSX elements. Otherwise, they're just ordinary prop names.

// ------------------------------------------------------------
// this.props.children
// Every component's props object has a property named children.

// this.props.children will return everything in between a component's opening and closing JSX tags.

// So far, all of the components that you've seen have been self-closing tags, such as <MyComponentClass />. They don't have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

// this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

// Look at BigButton.js. In Example 1, <BigButton>'s this.props.children would equal the text, "I am a child of BigButton."

// In Example 2, <BigButton>'s this.props.children would equal a <LilButton /> component.

// In Example 3, <BigButton>'s this.props.children would equal undefined.

// If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.

import React from 'react';
import { LilButton } from './LilButton';

class BigButton extends React.Component {
  render() {
    console.log(this.props.children);
    return <button>Yo I am big</button>;
  }
}


// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
<BigButton>
  <LilButton />
</BigButton>


// Example 3
<BigButton />

// Sample
//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
          <li>Arya the Guitarist</li>
        </List>
      </div>
    );
  }
}

// Note:
// Notice that App renders two <List><List /> instances, and that each <List><List /> has at least one <li></li> child.

// Now open List.js, and take a look at the List component class.

// Think about the fact that each List instance is going to be rendered with two JSX tags:

// <List>  // opening tag
// </List> // closing tag
// ...and that there will be at least one <li></li> child in between those tags:

// <List>  // opening tag
//   <li></li> // child
// </List> // closing tag

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// List.js
import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
      titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

// ------------------------------------------------------------
// defaultProps
// Take a look at the Button component class.

// Notice that on line 8, Button expects to receive a prop named text. The received text will be displayed inside of a <button></button> element.

// What if nobody passes any text to Button?

// If nobody passes any text to Button, then Button's display will be blank. It would be better if Button could display a default message instead.

// You can make this happen by giving your component class a property named defaultProps:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

// Example.defaultProps;
// The defaultProps property should be equal to an object:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

// Set defaultProps equal to an object:
// Example.defaultProps = {};
// Inside of this object, write properties for any default props that you'd like to set:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

// Example.defaultProps = { text: 'yo' };
// If an <Example /> doesn't get passed any text, then it will display "yo."

// If an <Example /> does get passed some text, then it will display that passed-in text.

//Sample
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button' };

ReactDOM.render(
  <Button text="Button"/>, 
  document.getElementById('app')
);

// Note: Gave the Button text so it it will display 'Button' on it.

// ------------------------------------------------------------
// this.props Recap
// That completes our lesson on props!

// props is quite possibly the longest and most difficult lesson in all of our React courses. Congratulations on getting this far!

// Here are some of the skills that you have learned:

// Passing a prop by giving an attribute to a component instance
// Accessing a passed-in prop via this.props.prop-name
// Displaying a prop
// Using a prop to make decisions about what to display
// Defining an event handler in a component class
// Passing an event handler as a prop
// Receiving a prop event handler and attaching it to an event listener
// Naming event handlers and event handler attributes according to convention
// this.props.children
// getDefaultProps
// That's a lot! Don't worry if it's all a bit of a blur. Soon you'll get plenty of practice!