import React from 'react';

class CharacterCard extends React.Component {
    render() {
        const { name, house, role, bloodStatus } = this.props.character;

        return (
            <div className="character-card">{ name }, { house }, { role }, { bloodStatus }</div>
        );
    }
}

export default CharacterCard;