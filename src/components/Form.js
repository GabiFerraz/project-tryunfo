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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div>
        <form className="form">
          <label htmlFor="input-text" className="name">
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
          <label htmlFor="input-description" className="description">
            Descrição
            <textarea
              data-testid="description-input"
              id="input-description"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="input-number1" className="attr01">
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
          <label htmlFor="input-number2" className="attr02">
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
          <label htmlFor="input-number3" className="attr03">
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
          <label htmlFor="input-image" className="image">
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
          <label htmlFor="select-text" className="rare">
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
          {hasTrunfo
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <label htmlFor="input-checkbox" className="trunfo">
                Super Trybe Trunfo
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  id="input-checkbox"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>) }
          <button
            className="button"
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

Form.propTypes = { cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func }.isRequired;

export default Form;

// https://pt-br.reactjs.org/docs/forms.html
// requisito 1: criei o formulário, colocando dentro do return do render as tags html com suas especificações de tipo, id, name e o atributo datatestid. Para funcionar eu exportei ele e importei no App.js que é o componente principal, o pai.
// requisito 2: dentro do render, antes do return, eu adicionei as props necessárias ao componente de formulário e utilizei elas conforme pedido no requisito através da propriedade value que recebia uma prop específica e outra prop onChange que recebia o valor de outra prop específica. Importei as proptypes no início do arquivo e no final, eu especifiquei elas dizendo o que elas eram, nesse caso, strings, booleanos e funções.
