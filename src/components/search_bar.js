import React, { Component } from 'react'; // temos que fazer import, por que no fim das contas o <inpunt /> será uma chamada de método

class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value) } />
    }
}

export default SearchBar;
// qualquer código que importar search_bar, terá acesso somente à SearchBar