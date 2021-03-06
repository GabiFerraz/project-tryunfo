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
      // se o cardTrunfo ou o hasTrunfo for verdadeiro, ele vai ser verdadeiro e n??o modifica mais.
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
            <h2 className="visualizationH2">Pr??-visualiza????o</h2>
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
// requisito 4: criei o construtor e passei o estado inicial dos componentes. Depois, criei uma fun????o gen??rica (handleChange), onde eu desestruturei o evento, pegando o target e tamb??m desestruturei ele para pegar exatamente o que eu iria precisar, que era o nome, valor, tipo e o checked. A??, eu abri o setState para poder alterar o estado inicial dos componentes. Para que eles funcionem, dentro do render eu chamei o estado dos componentes e passei eles nas tags form e card.
// requisito 5: para que o bot??o de salvar funcione, eu precisei fazer a valida????o dele, alterando o seu estado. A fun????o handleChange pode receber 2 par??metros, o primeiro eu j?? tinha passado que foi a desestrutura????o do target, o segundo ?? uma fun????o, ent??o eu fiz uma arrow function onde eu chamei os estados novamente para poder ser visualizado e usado ali dentro e comecei a fazer a valida????o. Eu salvei o valor total da soma dos 3 atributos em uma vari??vel, depois eu salvei em uma vari??vel a transforma????o dos atributos de string para n??mero, fiz a soma e coloquei que tinha que ser menor ou igual ao valor total salvo. Depois, salvei em uma vari??vel o valor m??ximo de cada atributo e salvei em outra vari??vel as compara????es de que cada atributo transformado em n??mero teria que ser menor ou igual ao valor m??ximo de cada atributo. Por ??ltimo, eu salvei em uma vari??vel a verifica????o de que cada atributo tem que ser maior ou igual a zero, para que n??o possa receber um valor negativo. A?? para funcionar a valida????o, eu fiz um if, que se todos as props necess??rias (nome, descri????o, imagem, raridade e os valores dos atributos) forem verdadeiras, ou seja, estiverem preenchidas, o estado do bot??o ir?? mudar para falso e ele ser?? habilitado para funcionar, se alguma n??o tiver preenchida, ele volta ao seu estado original de desabilitado. E a?? passei ele no Form para poder completar.
// requisito 6: criei um novo estado (newCards) na minha aplica????o e coloquei ela iniciando como um array vazio. A?? eu escrevi a fun????o handleClick, desestruturei os estados que eu vou precisar usar e fiz o setState. Nele eu coloquei o newCards que ?? o meu novo estado onde irei guardar as cartas, a?? abri o array e usei o spreed operator pra fazer uma c??pia do array existente, abri um objeto e passei todos os estados que utilizo para fazer uma carta, com isso ele vai estar adicionando uma nova carta no meu array. Depois, para que quando adicionar a carta no baralho, o local de escrever para adicionar volte a estar livre pra eu escrever novamente, eu coloquei meus estados de novo e zerei eles com strings vazias e zero.
// requisito 7: Para que o baralho s?? tenha 1 carta super trunfo eu coloquei dentro da fun????o handleClick de salvar as cartas, na parte onde o local de construir as cartas devem voltar a ficar livres para escrever, o estado cardTrunfo como sendo falso e coloquei o estado hasTrunfo como sendo o cardTrunfo ou o hasTrunfo, isso significa que se um deles for verdadeiro ?? pq existe o super trunfo no baralho e ele n??o deve modificar, mas se os dois forem falsos, significa que n??o existe ou se existia a carta super trunfo foi apagada e a op????o de marcar ela deve voltar a aparecer na tela.
// requisito 8: para as cartas aparecerem, desestruturei meu newCards, criei uma section, abri as chaves para usar o javascript, chamei a newCards que ?? onde eu t?? guardando as cartas, passei o map, criei uma div para cada carta ficar em uma div distinta, a?? chamei o componente Card para poder ajudar a criar as cartas na div, dessa forma a lista fica sendo atualizada automaticamente.
// requisito 9: criei a tag button com o texto excluir e o atributo pedido, depois, criei a fun????o deleteCard para excluir a carta quando o bot??o for clicado e passei no onclick a fun????o. Usei a arrow function pq a fun????o deleteCard recebe um par??metro. Dentro da fun????o, desestruturei o newCards, depois criei uma vari??vel que recebe o meu newCards com o filter que faz a verifica????o de que se o nome da carta que eu apertei excluir for diferente do nome das cartas do array, ele vai fazer um novo array sem essa carta. A?? eu abri o meu setState onde eu chamei meu newCards que ?? quem eu quero mudar o estado e coloquei ele recebendo a minha vari??vel que foi filtrada formando um novo array. A?? depois, para garantir que se a carta super trunfo for exclu??da o checkbox do formul??rio apare??a novamente, eu chamei o meu hasTrunfo e coloquei ele pra receber a minha vari??vel filtrada e passei o some nela, a?? mandei ela verificar se alguma carta possu??a o cardTrunfo. Dessa forma, se possuir ele mant??m, se n??o possuir ele muda!
