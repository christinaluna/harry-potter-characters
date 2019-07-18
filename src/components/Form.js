import React from 'react';

class Form extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    // toCamelCase = (str) => {
    //     return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    //       if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    //       return index == 0 ? match.toLowerCase() : match.toUpperCase();
    //     });
    // };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    placeholder="Search HP characters"
                    value={this.state.term}
                    onChange={e => this.setState({ term : e.target.value })} />
            </form>
        );
    }
}

export default Form;