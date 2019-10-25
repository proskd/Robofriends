import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
                <img src={`https://robohash.org/test${this.props.id}?size=300x300`} alt='robots'/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;