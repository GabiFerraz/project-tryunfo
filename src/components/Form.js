import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input data-testid="name-input" type="text" id="name" name="name" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea data-testid="description-input" name="description" />
          </label>
          <label htmlFor="number">
            Attr01
            <input type="number" data-testid="attr1-input" name="number" />
          </label>
          <label htmlFor="number">
            Attr02
            <input type="number" data-testid="attr2-input" name="number" />
          </label>
          <label htmlFor="number">
            Attr03
            <input type="number" data-testid="attr3-input" name="number" />
          </label>
          <label htmlFor="image">
            Imagem
            <input data-testid="image-input" type="text" id="image" name="image" />
          </label>
          <label htmlFor="text">
            Raridade
            <select data-testid="rare-input" type="placeholder" name="text">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="checkbox">
            Super Trybe Trunfo
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="checkbox"
              name="checkbox"
            />
          </label>
          <button data-testid="save-button" type="button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
