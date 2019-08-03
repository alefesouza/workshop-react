# Virtual DOM

Virtual DOM é um conceito utilizado em muitas ferramentas de desenvolvimento front-end modernas, o qual ficou muito famoso a partir do React.

A ideia principal dele é ganhar perfomance, pois manipular os elementos HTML diretamente (como acontece com o jQuery ou Vanilla.js) pode ser muito custoso, o que o React faz é guardar uma representação do DOM em memória (daí vem o nome Virtual DOM) e fazer as alterações diretamente nessa DOM armazenado em memória, e após fazer as alterações, comparar com o DOM sendo exibido no navegador e fazer somente as alterações necessárias.
