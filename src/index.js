import React from 'react';

// (1) Create a new component
// This component should produce some HTML
const App = function() {
    return <div>Hi!</div>;
}

// (2) Take this component's generated HTML and put it on the page (in the DOM)
React.render(App);