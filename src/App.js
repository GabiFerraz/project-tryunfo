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

  deleteCard = (name) => {
    const { newCards } = this.state;
    const filterCards = newCards.filter((card) => name !== card.cardName);
    this.setState({
      newCards: filterCards,
      hasTrunfo: filterCards.some((card) => card.cardTrunfo),
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
      isSaveButtonDisabled,
      newCards } = this.state;

    return (
      <section>
        <h1>Tryunfo</h1>
        <section className="dadSectionsCards">
          <section>
            <h2>Adicionar Nova Carta:</h2>
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
          </section>
          <section>
            <h2 className="visualizationH2">Pré-visualização</h2>
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
          </section>
        </section>
        <h1>Cartas do Baralho</h1>
        <section className="granpaCard">
          {newCards.map((card) => (
            <section key={ card.cardName } className="dadCard">
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                type="button"
                className="button-delete"
                data-testid="delete-button"
                onClick={ () => this.deleteCard(card.cardName) }
              >
                Excluir
              </button>
            </section>
          ))}
        </section>
      </section>
    );
  }
}

export default App;

// para completar o requisito 1, eu importei o componente Form e chamei ele no return do render.
// para completar o requisito 3, eu importei o componente Card e chamei ele no return do render.
// requisito 4: criei o construtor e passei o estado inicial dos componentes. Depois, criei uma função genérica (handleChange), onde eu desestruturei o evento, pegando o target e também desestruturei ele para pegar exatamente o que eu iria precisar, que era o nome, valor, tipo e o checked. Aí, eu abri o setState para poder alterar o estado inicial dos componentes. Para que eles funcionem, dentro do render eu chamei o estado dos componentes e passei eles nas tags form e card.
// requisito 5: para que o botão de salvar funcione, eu precisei fazer a validação dele, alterando o seu estado. A função handleChange pode receber 2 parâmetros, o primeiro eu já tinha passado que foi a desestruturação do target, o segundo é uma função, então eu fiz uma arrow function onde eu chamei os estados novamente para poder ser visualizado e usado ali dentro e comecei a fazer a validação. Eu salvei o valor total da soma dos 3 atributos em uma variável, depois eu salvei em uma variável a transformação dos atributos de string para número, fiz a soma e coloquei que tinha que ser menor ou igual ao valor total salvo. Depois, salvei em uma variável o valor máximo de cada atributo e salvei em outra variável as comparações de que cada atributo transformado em número teria que ser menor ou igual ao valor máximo de cada atributo. Por último, eu salvei em uma variável a verificação de que cada atributo tem que ser maior ou igual a zero, para que não possa receber um valor negativo. Aí para funcionar a validação, eu fiz um if, que se todos as props necessárias (nome, descrição, imagem, raridade e os valores dos atributos) forem verdadeiras, ou seja, estiverem preenchidas, o estado do botão irá mudar para falso e ele será habilitado para funcionar, se alguma não tiver preenchida, ele volta ao seu estado original de desabilitado. E aí passei ele no Form para poder completar.
// requisito 6: criei um novo estado (newCards) na minha aplicação e coloquei ela iniciando como um array vazio. Aí eu escrevi a função handleClick, desestruturei os estados que eu vou precisar usar e fiz o setState. Nele eu coloquei o newCards que é o meu novo estado onde irei guardar as cartas, aí abri o array e usei o spreed operator pra fazer uma cópia do array existente, abri um objeto e passei todos os estados que utilizo para fazer uma carta, com isso ele vai estar adicionando uma nova carta no meu array. Depois, para que quando adicionar a carta no baralho, o local de escrever para adicionar volte a estar livre pra eu escrever novamente, eu coloquei meus estados de novo e zerei eles com strings vazias e zero.
// requisito 7: Para que o baralho só tenha 1 carta super trunfo eu coloquei dentro da função handleClick de salvar as cartas, na parte onde o local de construir as cartas devem voltar a ficar livres para escrever, o estado cardTrunfo como sendo falso e coloquei o estado hasTrunfo como sendo o cardTrunfo ou o hasTrunfo, isso significa que se um deles for verdadeiro é pq existe o super trunfo no baralho e ele não deve modificar, mas se os dois forem falsos, significa que não existe ou se existia a carta super trunfo foi apagada e a opção de marcar ela deve voltar a aparecer na tela.
// requisito 8: para as cartas aparecerem, desestruturei meu newCards, criei uma section, abri as chaves para usar o javascript, chamei a newCards que é onde eu tô guardando as cartas, passei o map, criei uma div para cada carta ficar em uma div distinta, aí chamei o componente Card para poder ajudar a criar as cartas na div, dessa forma a lista fica sendo atualizada automaticamente.
// requisito 9: criei a tag button com o texto excluir e o atributo pedido, depois, criei a função deleteCard para excluir a carta quando o botão for clicado e passei no onclick a função. Usei a arrow function pq a função deleteCard recebe um parâmetro. Dentro da função, desestruturei o newCards, depois criei uma variável que recebe o meu newCards com o filter que faz a verificação de que se o nome da carta que eu apertei excluir for diferente do nome das cartas do array, ele vai fazer um novo array sem essa carta. Aí eu abri o meu setState onde eu chamei meu newCards que é quem eu quero mudar o estado e coloquei ele recebendo a minha variável que foi filtrada formando um novo array. Aí depois, para garantir que se a carta super trunfo for excluída o checkbox do formulário apareça novamente, eu chamei o meu hasTrunfo e coloquei ele pra receber a minha variável filtrada e passei o some nela, aí mandei ela verificar se alguma carta possuía o cardTrunfo. Dessa forma, se possuir ele mantêm, se não possuir ele muda!
