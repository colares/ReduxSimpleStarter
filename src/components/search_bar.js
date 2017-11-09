import React, { Component } from 'react'; // temos que fazer import, por que no fim das contas o <inpunt /> será uma chamada de método

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                Value of the input: {this.state.term}
            </div>
        )
    }
}

export default SearchBar;
// qualquer código que importar search_bar, terá acesso somente à SearchBar