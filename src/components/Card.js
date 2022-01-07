import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     cardTrunfo: false,
  //   };

  //   this.superTrunfo = this.superTrunfo.bind(this);
  // }

  // superTrunfo(event) {
  //   const { name } = event.target;
  //   const value = (event.target === true) ? 'Super Trunfo' : '';
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <>
        <p data-testid="name-card">{cardName}</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </>
    );
  }
}

Card.propTypes = { cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired };

export default Card;
