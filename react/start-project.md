# Iniciar projeto

Criar um projeto front-end em um framework moderno do 0 requer muitos conhecimentos como Webpack, plugins do mesmo, criar um servidor local, coisas que facilitem o desenvolvimento e saber uma boa arquitetura para o framework em questão.

Para não precisarmos nos preocupar com isso, é comum eles também possuirem ferramentas de linhas de comando para facilitar o processo de desenvolvimento abstraindo tudo isso para gente, no Angular tem o `angular-cli`, no Vue.js o `vue-cli`, já no React temos o [`create-react-app`](https://github.com/facebook/create-react-app).

Ele já configura para você o sistema de transpilação de JSX e JavaScript moderno, para você escrever o JavaScript mais recente sem se preocupar se vai funcionar no navegador, adiciona o servidor local em Node.js para rodar na sua aplicação com suporte a hot reloading, dessa forma sempre que você salvar um arquivo ele já vai ser transpilado e o navegador vai recarregar a página automaticamente, e também já inclui ferramentas para testes de unidade, das quais não abordaremos nesse workshop mas sugiro você pesquisar sobre caso queira se destacar no mercado de trabalho.

Para iniciar o nosso projeto usando o `create-react-app`, tenha o Node.js instalado e execute os seguintes comandos no seu terminal ou prompt de comando:

```
npm install -g create-react-app
create-react-app workshop-react
```

Isso instala o `create-react-app` e já cria um projeto em React para você, após isso rode os comandos:

```
cd workshop-react
code .
npm start
```

O primeiro entra no diretório que o seu projeto foi criado, o segundo abre o mesmo diretório no Visual Studio Code, já o terceiro inicia o servidor de desenvolvimento do React.

Após executar o último comando, o seu navegador deve abrir uma aba em http://localhost:3000/ , nesse endereço está sendo executado o servidor de desenvolvimento do React, que continuará rodando até você pressionar *CTRL+C* no terminal ou fechar o mesmo.
