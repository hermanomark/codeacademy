// Updating Lifecycle Methods
// There are two categories that we haven't yet discussed: updating and unmounting lifecycle methods. This lesson covers both.

// What is updating?

// The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.

// There are five updating lifecycle methods:

// componentWillReceiveProps
// shouldComponentUpdate
// componentWillUpdate
// render
// componentDidUpdate
// Whenever a component instance updates, it automatically calls all five of these methods, in order.

// ------------------------------------------------------------
// componentWillReceiveProps
// The first updating lifecycle method is called componentWillReceiveProps.

// When a component instance updates, componentWillReceiveProps gets called before the rendering begins.

// As one might expect, componentWillReceiveProps only gets called if the component will receive props:

// componentWillReceiveProps will get called here:
ReactDOM.render(
  <Example prop="myVal" />,
  document.getElementById('app')
);

// componentWillReceiveProps will NOT get called here:
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);
// Look in the code editor for an example of componentWillReceiveProps. Read it through and try to figure out how it works.

// componentWillReceiveProps automatically gets passed one argument: an object called nextProps. nextProps is a preview of the upcoming props object that the component is about to receive.

// On line 6, nextProps.text will evaluate to "Hello world".

import React from 'react';

export class Example extends React.Component {
  componentWillReceiveProps(nextProps) {
    alert("Check out the new props.text that "
      + "I'm about to get:  " + nextProps.text);
  }

  render() {
    return <h1>{this.props.text}</h1>;
  }
}


// The first render won't trigger
// componentWillReceiveProps:
ReactDOM.render(
  <Example text="Hello world" />,
  document.getElementById('app')
);

// After the first render, 
// subsequent renders will trigger
// componentWillReceiveProps:
setTimeout(() => {
  ReactDOM.render(
    <Example text="Hello world" />,
    document.getElementById('app')
  );
}, 1000);

// Sample
// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers';

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0
    };

    this.intervals = null;

    this.hitTarget = this.hitTarget.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(setInterval(function(){
      let targets = clone(this.state.targets);
      let num = random(1, 1000*1000);
      targets[key] = targets[key] != 0 ? 0 : num;
      this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget(e) {
    if (e.target.className != 'target') return;
    let num = parseInt(e.target.innerText);
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true
    });
  }

  endGame() {
    this.intervals.forEach((int) => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0
    });
  }

  componentWillMount() {
    this.intervals = [];
  }

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(
        <Target 
          number={this.state.targets[key]} 
          key={key} />
      );
    }
    return (
      <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// TopNumber.js
import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }
  
  componentWillReceiveProps(nextProps) {
  if (nextProps.number > this.state.highest ) {
    this.setState({highest: nextProps.number})
  }
}
  
  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};

// ------------------------------------------------------------
// shouldComponentUpdate
// The second updating lifecycle method is called shouldComponentUpdate.

// When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps, but still before the rendering begins.

// Look at Example.js in the code editor. Read it through and try to figure out how shouldComponentUpdate works.

// shouldComponentUpdate should return either true or false.

// If shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update! None of the remaining lifecycle methods for that updating period will be called, including render.

// The best way to use shouldComponentUpdate is to have it return false only under certain conditions. If those conditions are met, then your component will not update.

// shouldComponentUpdate automatically receives two arguments: nextProps and nextState. It's typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do. See how Example.js does this on lines 10-19.

import React from 'react';

export class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = { subtext: 'Put me in an <h2> please.' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ((this.props.text == nextProps.text) && 
      (this.state.subtext == nextState.subtext)) {
      alert("Props and state haven't changed, so I'm not gonna update!");
      return false;
    } else {
      alert("Okay fine I will update.")
      return true;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>{this.state.subtext}</h2>
      </div>
    );
  }
}

// Sample
//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers'; 

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0
    };

    this.intervals = null;

    this.hitTarget = this.hitTarget.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(setInterval(function(){
      let targets = clone(this.state.targets);
      let num = random(1, 1000*1000);
      targets[key] = targets[key] != 0 ? 0 : num;
      this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget(e) {
    if (e.target.className != 'target') return;
    let num = parseInt(e.target.innerText);
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true
    });
  }

  endGame() {
    this.intervals.forEach((int) => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0
    });
  }

  componentWillMount() {
    this.intervals = [];
  }

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(
        <Target 
          number={this.state.targets[key]} 
          key={key} />
      );
    }
    return (
      <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// Target.js
import React from 'react';
import { random } from './helpers';

export class Target extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
  return this.props.number != nextProps.number;
}

  render() {
    let visibility = this.props.number ? 'visible' : 'hidden';
    let style = {
      position: 'absolute',
      left: random(0, 100) + '%',
      top: random(0, 100) + '%',
      fontSize: 40,
      cursor: 'pointer',
      visibility: visibility
    };

    return (
      <span style={style} className="target">
        {this.props.number}
      </span>
    )
  }
}

Target.propTypes = {
  number: React.PropTypes.number.isRequired
};

// ------------------------------------------------------------
// componentWillUpdate
// The third updating lifecycle method is componentWillUpdate.

// componentWillUpdate gets called in between shouldComponentUpdate and render.

// componentWillUpdate receives two arguments: nextProps and nextState. Read Example in the code editor to see it in action.

// You cannot call this.setState from the body of componentWillUpdate! Which begs the question, why would you use it?

// The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that.

// If that sounds abstract, that's okay! All of the lifecycle methods might feel a bit theoretical, until you've used them in real-life scenarios. You'll be doing more of that in the next course.

import React from 'react';

export class Example extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    alert('Component is about to update!  Any second now!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

// Sample
// Take note App.js still exist see previous exercise
// TopNumber.js
import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.number > this.state.highest) {
      this.setState({
        highest: nextProps.number
      });
    }
  }
  
  componentWillUpdate(nextProps, nextState) {
  if (document.body.style.background != yellow && this.state.highest >= 950*1000) {
    document.body.style.background = yellow;
  } else if (!this.props.game && nextProps.game) {
    document.body.style.background = 'white';
  }
}

  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};

// ------------------------------------------------------------
// componentDidUpdate
// The last updating lifecycle method is componentDidUpdate.

// When a component instance updates, componentDidUpdate gets called after any rendered HTML has finished loading.

// Look at Example for an an example of componentDidUpdate.

// componentDidUpdate automatically gets passed two arguments: prevProps and prevState. prevProps and prevState are references to the component's props and state before the current updating period began. You can compare them to the current props and state.

// componentDidUpdate is usually used for interacting with things outside of the React environment, like the browser or APIs. It's similar to componentWillUpdate in that way, except that it gets called after render instead of before.

import React from 'react';

export class Example extends React.component {
  componentDidUpdate(prevProps, prevState) {
    alert('Component is done rendering!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

// Sample
// take note other components files still exist
// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers'; 

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0
    };

    this.intervals = null;

    this.hitTarget = this.hitTarget.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(setInterval(function(){
      let targets = clone(this.state.targets);
      let num = random(1, 1000*1000);
      targets[key] = targets[key] != 0 ? 0 : num;
      this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget(e) {
    if (e.target.className != 'target') return;
    let num = parseInt(e.target.innerText);
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true
    });
  }

  endGame() {
    this.intervals.forEach((int) => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0
    });
  }

  componentWillMount() {
    this.intervals = [];
  }
  
  componentDidUpdate(prevProps, prevState) {  
    if (this.state.latestClick < prevState.latestClick) {
    this.endGame();
  }
}

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(
        <Target 
          number={this.state.targets[key]} 
          key={key} />
      );
    }
    return (
      <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// ------------------------------------------------------------
// componentWillUnmount
// A component's unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.

// componentWillUnmount is the only unmounting lifecycle method!

// componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods that require cleanup, then componentWillUnmount is where you should put that cleanup.

// You can see an example in Example.js, as usual.

import React from 'react';

export class Example extends React.Component {
  componentWillUnmount() {
    alert('Goodbye world');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

// Sample
// Enthused.js
import React from 'react';

export class Enthused extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText('!');
    }, 15);
  }
  
  componentWillUnmount(prevProps, prevState) {
    clearInterval(this.interval);
}
  
  render() {
    return (
      <button onClick={this.props.toggle}>
        Stop!
      </button>
    );
  }
}

// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Enthused } from './Enthused';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enthused: false,
      text: ''
    };

    this.toggleEnthusiasm = this.toggleEnthusiasm.bind(this);
    this.addText = this.addText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEnthusiasm() {
    this.setState({
      enthused: !this.state.enthused
    });
  }

  setText(text) {
    this.setState({ text: text });
  }

  addText(newText) {
    let text = this.state.text + newText;
    this.setState({ text: text });
  }

  handleChange(e) {
    this.setText(e.target.value);
  }

  render() {
    let button;
    if (this.state.enthused) {
      button = (
        <Enthused toggle={this.toggleEnthusiasm} addText={this.addText} />
      );
    } else {
      button = (
        <button onClick={this.toggleEnthusiasm}>
          Add Enthusiasm!
        </button>
      );
    }

    return (
      <div>
        <h1>Auto-Enthusiasm</h1>
        <textarea rows="7" cols="40" value={this.state.text} 
          onChange={this.handleChange}>
        </textarea>
        {button}
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// ------------------------------------------------------------
// Lifecycle Methods Recap
// Congratulations on making it to the end of our Introductory React courses! By this point, you have acquired all of the tools that you need to program in React!

// However, you aren't quite done with this course yet! You might be asking yourself how to create a React app on your own computer. We've created an article to walk you through this process. Click here to get started!
// (https://www.codecademy.com/articles/how-to-create-a-react-app)