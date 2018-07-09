// Separate Container Components From Presentational Components: Explanation
// In this lesson, you will learn your second programming pattern: separating presentational components from display components.

// Click Run. In the browser, navigate to https://localhost:8000.

// You are looking at an rendered <GuineaPigs /> component.

// <GuineaPigs />'s job is to render a photo carousel of guinea pigs. It does this perfectly well! And yet, it has a problem: it does too much stuff.

// We can break <GuineaPigs /> into smaller components, but before we do: how do we know that GuineaPigs does too much stuff? How can you tell when a component has too many responsibilities?

// Separating container components from presentational components helps to answer that question. It shows you when it might be a good time to divide a component into smaller components. It also shows you how to perform that division.

// ------------------------------------------------------------
// Separate Container Components From Presentational Components: Apply
// Separating container components from presentational components is a popular React programming pattern.

// Here's the basic idea behind it: if a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn't also have to render HTML-like JSX.

// Instead of rendering HTML-like JSX, the component should render another component. It should be that component's job to render HTML-like JSX.

// Following this pattern separates your business logic from your presentational logic, which is a Good Thing.

// Sample
// components/GuineaPigs.js
import React from 'react';

export class GuineaPigs extends React.Component {
  
  render() {
    const src = this.props.src;
    
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}


//container/GuineaPigsContainer.js
import React from 'react';
import ReactDOM from 'react-dom';
import { GuineaPigs } from '../components/GuineaPigs';

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src}/>;
  }
}

ReactDOM.render(
  <GuineaPigsContainer />,
  document.getElementById('app')
);


// Note:
// That should do it!

// You divided GuineaPigs into two separate component classes: GuineaPigs and GuineaPigsContainer.

// In this programming pattern, the container component does the work of figuring out what to display. The presentational component does the work of actually displaying it. If a component does a significant amount of work in both areas, then that's a sign that you should use this pattern!

// You can find a lot of intelligent articles written about this pattern. Here's a nice one to start with. (https://medium.com/@learnreact/container-components-c0e67432e005)