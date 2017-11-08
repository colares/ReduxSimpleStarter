import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
// SearchBar poderia ser qualquer nome!
// Quem diz o que SearchBard é aqui, é o export de search_bar

// (1) Create a new component
// This component should produce some HTML
// {process.env.API_KEY}
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

// (2) Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));