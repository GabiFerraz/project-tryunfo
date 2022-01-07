import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-text">
            Nome
            <input type="text" data-testid="name-input" id="input-text" name="name" />
          </label>
          <label htmlFor="input-description">
            Descrição
            <textarea
              data-testid="description-input"
              id="input-description"
              name="description"
            />
          </label>
          <label htmlFor="input-number1">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              id="input-number1"
              name="atributo1"
            />
          </label>
          <label htmlFor="input-number2">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              id="input-number2"
              name="atributo2"
            />
          </label>
          <label htmlFor="input-number3">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              id="input-number3"
              name="atributo3"
            />
          </label>
          <label htmlFor="input-image">
            Imagem
            <input type="text" data-testid="image-input" id="input-image" name="image" />
          </label>
          <label htmlFor="select-text">
            Raridade
            <select
              data-testid="rare-input"
              id="select-text"
              name="rarity"
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
              name="trunfo"
            />
          </label>
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
