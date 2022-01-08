import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="input-text">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="input-text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="input-description">
            Descrição
            <textarea
              data-testid="description-input"
              id="input-description"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="input-number1">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              id="input-number1"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="input-number2">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              id="input-number2"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="input-number3">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              id="input-number3"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="input-image">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="input-image"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="select-text">
            Raridade
            <select
              data-testid="rare-input"
              id="select-text"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="input-checkbox">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="input-checkbox"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = { cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired };

export default Form;

// https://pt-br.reactjs.org/docs/forms.html
// requisito 1: criei o formulário, colocando dentro do return do render as tags html com suas especificações de tipo, id, name e o atributo datatestid. Para funcionar eu exportei ele e importei no App.js que é o componente principal, o pai.
// requisito 2: dentro do render, antes do return, eu adicionei as props necessárias ao componente de formulário e utilizei elas conforme pedido no requisito através da propriedade value que recebia uma prop específica e outra prop onChange que recebia o valor de outra prop específica. Importei as proptypes no início do arquivo e no final, eu especifiquei elas dizendo o que elas eram, nesse caso, strings, booleanos e funções.
