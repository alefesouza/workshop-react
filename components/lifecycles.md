# Life Cycles

Nos componentes stateful temos acesso a eventos de lifecycle, que são códigos JavaScript que podemos emitir assim que algo acontecer com o componentes, como por exemplo assim que ele aparecer na tela.

Deixe nosso **src/HelloStateful.js** como no código abaixo:

```jsx
import React from 'react'; 

class HelloStateful extends React.Component {
    state = {
        clicou: 'ainda não clicou'
    }

    componentDidMount() {
        console.log('[HelloStateful] Apareceu na tela');
    }

    handleClick() {
        this.setState({
            clicou: 'clicou'
        });
    }

    render() {
        return (
            <div>
                Olá, {this.props.nome} você {this.state.clicou}.

                <button onClick={this.handleClick.bind(this)}>Clique aqui</button>
            </div>
        );
    }
}

export default HelloStateful;
```

Agora abra o DevTools do seu navegador (F12), na aba console deve estar assim:

![DevTools exibindo mensagem de "[HelloStateful] Apareceu na tela"](./assets/4.png)

Note que aparece `2` na lado esquerdo do nosso console, isso porque utilizamos o componente duas vezes no **src/App.js** exibindo a mesma mensagem, esse é um exemplo de life cycle event, os principais são:

```jsx
componentDidMount()
/* Executado depois do componente aparecer na tela,
ideal para chamadas de API */
componentWillUnmount()
/* Executado antes do componentes ser excluído/sair da tela,
ideal para cancelar chamadas de API e outras coisas que o
componente esteja executando */
componentDidUpdate()
/* Executado após o componente receber novas props,
ideal para atualizar dados e fazer novas requisições */
```

Também existe alguns métodos de lifecycle que [foram descontinuados](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) e com o uso desencorajado, mas pode ser que você encontre em códigos mais antigos:

```jsx
componentWillMount()
// Executado antes do componente aparecer na tela
componentWillReceiveProps()
// Executado antes das props do componente forem atualizadas pelo componente pai
componentWillUpdate()
/* Mesma coisa do componentWillReceiveProps,
porém também executando antes do state do componente ser alterado */
```

Você pode ver mais sobre os eventos de lifecycle [clicando aqui](https://reactjs.org/docs/react-component.html).
