import React from 'react';
import ReactDOM from 'react-dom';

// (1) Create a new component
// This component should produce some HTML
const App = () => {
    return <div>{process.env.API_KEY}</div>;
}

// (2) Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));