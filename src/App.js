import React from 'react';
import hpapi from './api/hpapi';
import Form from './components/Form';
import CharacterList from './components/CharacterList';

const KEY = process.env.REACT_APP_KEY;

class App extends React.Component {
  state = { characters: [] };
  
  onSearchSubmit = async (term) => {
    // get request
    const response = await hpapi.get(`/characters/?key=${KEY}`, {
      params: { name: term }
    });

    this.setState({ characters: response.data });
  }

  render() {
    return (
      <div>
        <h1>Welcome to HP-World</h1>
        <div>
          Search by character name, house or patronous
        </div>
        <Form onSubmit={this.onSearchSubmit} />
        <CharacterList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
