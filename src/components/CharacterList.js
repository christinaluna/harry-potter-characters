import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    const characters = props.characters.map((character) => {
        return <CharacterCard key={character._id} character={character} />;
    });
    return <div className="character-list">{characters}</div>;
};

export default CharacterList;