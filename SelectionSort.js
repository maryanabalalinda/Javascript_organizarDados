const Livros = require('./listasLivros');
const menorValor = require('./menorValor');

                 //1
for (let atual = 0; atual< Livros.length - 1; atual++) {
  let menor = menorValor(livros, atual)     

  let livroAtual = Livros[atual];
  console.log('posição atual', atual)
  console.log('livro atual', livros[atual])
  let livroMenorPreco = livros[menor];
  console.log('livro menor preçp', livros[menor])

  livros[atual] = livrosmenorpreco
  livros[menor = livroAtual]
}
console.log(livros)
                