import React from 'react';
import PropTypes from 'prop-types';
import downloadEu from '../img/downloadEu.png';

class Card extends React.Component {
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
      <section className="dadVisualization">
        <section className="greenBorder">
          <section className="cardTitle">
            <p data-testid="name-card">{cardName}</p>
          </section>
          <section className="imgCard">
            <img
              src={ cardImage || downloadEu }
              alt={ cardName }
              data-testid="image-card"
            />
            <section className="greenTriangle" />
            {cardTrunfo
              && (
                <section className="superTrunfo">
                  <p data-testid="trunfo-card">Super Trunfo</p>
                </section>
              )}
            {/* se a prop cardTrunfo for verdadeira, a tag P com o texto Super trunfo vai aparecer, se a prop for falsa a tag não vai aparecer. É uma forma reduzida de verificação. Uso dessa forma pq eu não quero uma string vazia, eu quero que a tag apareça ou não. */}
          </section>
          <section className="whiteTriangle" />
          <section className="attrs">
            <p>
              Attr1.............
              <span data-testid="attr1-card">{cardAttr1}</span>
            </p>
            <p>
              Attr2.............
              <span data-testid="attr2-card">{cardAttr2}</span>
            </p>
            <p>
              Attr3.............
              <span data-testid="attr3-card">{cardAttr3}</span>
            </p>
            <section className="cardRare">
              <span>Raridade: </span>
              <p data-testid="rare-card">{cardRare}</p>
            </section>
          </section>
        </section>
        <section className="descriptionP">
          <p data-testid="description-card">{cardDescription}</p>
        </section>
      </section>
    );
  }
}

Card.propTypes = { cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool }.isRequired;

export default Card;

// requisito 3: criei o component Card, recebendo algumas props e passando elas nas tags html. Importei o proptypes e especifiquei quais eram os tipos da props. Para completar, eu exportei o componente e importei lá no app.js para poder funcionar.
