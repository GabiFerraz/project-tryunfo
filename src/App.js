import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      newCards: [],
    };
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare } = this.state;
      const totalMaxValueNumber = 210;
      const attributeValue = Number(cardAttr1)
        + Number(cardAttr2)
        + Number(cardAttr3) <= totalMaxValueNumber;
      const maxValueNumber = 90;
      const valueAttributes = (Number(cardAttr1) <= maxValueNumber)
      && (Number(cardAttr2) <= maxValueNumber) && (Number(cardAttr3) <= maxValueNumber);
      const valueNeg = (cardAttr1 >= 0) && (cardAttr2 >= 0) && (cardAttr3 >= 0);
      if (cardName
        && cardDescription
        && cardImage && cardRare && attributeValue && valueAttributes && valueNeg) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  handleClick = () => {
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
      newCards } = this.state;

    this.setState({
      newCards: [...newCards,
        { cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo }],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: cardTrunfo || hasTrunfo,
      // se o cardTrunfo ou o hasTrunfo for verdadeiro, ele vai ser verdadeiro e não modifica mais.
    });
  }

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
      isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;

// para completar o requisito 1, eu importei o componente Form e chamei ele no return do render.
// para completar o requisito 3, eu importei o componente Card e chamei ele no return do render.
// requisito 4: criei o construtor e passei o estado inicial dos componentes. Depois, criei uma função genérica (handleChange), onde eu desestruturei o evento, pegando o target e também desestruturei ele para pegar exatamente o que eu iria precisar, que era o nome, valor, tipo e o checked. Aí, eu abri o setState para poder alterar o estado inicial dos componentes. Para que eles funcionem, dentro do render eu chamei o estado dos componentes e passei eles nas tags form e card.
// requisito 5: para que o botão de salvar funcione, eu precisei fazer a validação dele, alterando o seu estado. A função handleChange pode receber 2 parâmetros, o primeiro eu já tinha passado que foi a desestruturação do target, o segundo é uma função, então eu fiz uma arrow function onde eu chamei os estados novamente para poder ser visualizado e usado ali dentro e comecei a fazer a validação. Eu salvei o valor total da soma dos 3 atributos em uma variável, depois eu salvei em uma variável a transformação dos atributos de string para número, fiz a soma e coloquei que tinha que ser menor ou igual ao valor total salvo. Depois, salvei em uma variável o valor máximo de cada atributo e salvei em outra variável as comparações de que cada atributo transformado em número teria que ser menor ou igual ao valor máximo de cada atributo. Por último, eu salvei em uma variável a verificação de que cada atributo tem que ser maior ou igual a zero, para que não possa receber um valor negativo. Aí para funcionar a validação, eu fiz um if, que se todos as props necessárias (nome, descrição, imagem, raridade e os valores dos atributos) forem verdadeiras, ou seja, estiverem preenchidas, o estado do botão irá mudar para falso e ele será habilitado para funcionar, se alguma não tiver preenchida, ele volta ao seu estado original de desabilitado. E aí passei ele no Form para poder completar.
