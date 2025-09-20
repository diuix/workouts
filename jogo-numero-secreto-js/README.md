# Jogo do Número Secreto

## Descrição
Este é um jogo simples desenvolvido em JavaScript que desafia o usuário a adivinhar um número secreto gerado aleatoriamente entre 1 e 100. O jogo informa se o chute do usuário é maior ou menor que o número secreto, e contabiliza o número de tentativas até que ele acerte.

---

## Como jogar
1. Abra o arquivo HTML ou execute o script no console do navegador.
2. Você receberá um alerta de boas-vindas.
3. Será solicitado que você digite um número entre 1 e 100.
4. Se o número digitado não for válido, o jogo pedirá para inserir novamente.
5. Após cada chute, você receberá uma dica se o número secreto é **maior** ou **menor**.
6. O jogo termina quando você acertar o número secreto, mostrando o número de tentativas realizadas.

---

## Funcionalidades
- Geração de número secreto aleatório entre 1 e 100.
- Validação de entrada: garante que apenas números válidos sejam aceitos.
- Feedback dinâmico:
  - Dica se o chute é maior ou menor que o número secreto.
  - Contagem de tentativas até o acerto.
- Interface simples via `alert` e `prompt`.

---

## Principais códigos utilizados

| Código / Função | Descrição |
|-----------------|-----------|
| `alert()` | Mostra mensagens pop-up ao usuário. Usado para boas-vindas e feedbacks. |
| `prompt()` | Solicita que o usuário digite um valor. Retorna uma string. |
| `Number()` | Converte a entrada do usuário de string para número, permitindo comparações numéricas. |
| `isNaN()` | Verifica se um valor **não é um número**. Ajuda a validar entradas inválidas. |
| `.trim()` | Remove espaços em branco do início e fim da string, evitando entradas vazias ou só com espaços. |
| `Math.random()` | Gera número decimal aleatório entre 0 (inclusive) e 1 (exclusivo). |
| `Math.floor()` | Arredonda um número para baixo, garantindo que o número secreto seja inteiro. |
| `while` | Loop que repete uma ação enquanto a condição for verdadeira. Usado para repetir o jogo até o usuário acertar e para validar entradas. |
| Operador ternário `? :` | Permite escolher entre dois valores com base em uma condição, usado para singular/plural de "tentativa". |

---

## Tecnologias
- JavaScript puro (ECMAScript 6)
- Funciona no console do navegador ou em arquivos HTML que incluam o script.

---

## Autor
- **Diego Piovesan** – Software Engineer
