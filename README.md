# Store Manage
Arquitetura e desenvolvimento de uma API de store, utilizando ```Node``` com  ```Sequelize``` e ```Express```. <br>Desenvolvimento de alguns endpoints (seguindo os princípios do REST) e aplicando a arquitetura ```MSC```, que estão conectados ao banco de dados ```MySQL```.

# Habilidades 

Nesse projeto é contruído  um back-end usando `ORM` com o pacote `sequelize` do `npm`, e é capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`


## Desenvolvimento

Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`. Também será necessário a utilização de categorias para seus posts, assim trabalhando a relação de `posts` para `categorias` e de `categorias` para `posts`.
