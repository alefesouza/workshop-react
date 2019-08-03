# Transpilação

É muito comum utilizarmos o Node.js no sistema de build de aplicações front-end modernas, assim podemos utilizar o JavaScript mais recente sem se preocupar se funciona em navegadores antigos, pois ele executa um processo chamado *transpilação de código*, que converte o código que escrevemos através do pacote [Babel](https://babeljs.io/) ou outra ferramenta de transpilação como o [TypeScript](https://www.typescriptlang.org/) por exemplo.

Dessa forma podemos escrever:

```js
const funcao = () => {
    this.bool = false;
};
```

Que o sistema de transpilação converte essa arrow function para: 

```js
var that = this;

var funcao = function () {
    that.bool = false;
};
```

Dessa forma podemos usar essa sintaxe moderna (de 2015 na verdade) sem se procupar se vai funcionar ou não em [navegadores que não suportam arrow functions](https://caniuse.com/#feat=arrow-functions), como o Internet Explorer 11 por exemplo.

Esse sistema de transpilação também é muito utilizado no JSX, que explicaremos mais para frente, pois o mesmo também não funciona nos navegadores por padrão.
