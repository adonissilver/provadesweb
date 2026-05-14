# provadesweb
Avaliacao 1 Desenvolvimento Web


Atividade Avaliativa 1 (Prática): O "Alter Ego" Web
Disciplina: Desenvolvimento Web
Individual, com consulta ao material das aulas, acesso à Internet e uso livre de ferramentas
Objetivo
Desenvolver uma página de apresentação pessoal que utilize HTML5, estilização moderna com
CSS (Flexbox/Grid) e manipulação dinâmica de conteúdo com JavaScript.
O Desafio
Você deve criar uma página que apresente quem você é hoje, mas que guarde um "segredo":
ao clique de um botão (ou link), sua identidade civil deve ser substituída pela identidade (e
informações) de seu Super-herói ou Heroína favorito(a).
1. Estrutura e Conteúdo (HTML)
A página deve conter um container principal que abrigue Cards de informação.
Informações Obrigatórias (Identidade Civil): Nome completo, idade, uma foto (pode ser um
avatar), time do coração (e/ou hobby), comida(s) predileta(s), uma breve descrição sua e mais
dois cards com informações à sua escolha.
Deve haver um elemento de destaque (botão ou link) com o texto "Transformar!".
2. Estilização e Responsividade (CSS)
Layout: Utilize Flexbox ou Grid para organizar os cards.
Responsividade: A página deve ser legível em computadores e dispositivos móveis. Em telas
pequenas, os cards devem se empilhar verticalmente.
Identidade Visual: Escolha uma paleta de cores que mude drasticamente (ou ganhe novos
tons) na versão herói.
3. Dinamismo (JavaScript)
Ao clicar no botão "Transformar!", o JavaScript deve alterar o conteúdo dos elementos
existentes na página para os dados do seu herói escolhido (ex: o nome "João" vira
"Homem-Aranha", a foto muda, a descrição vira os superpoderes, etc). E vice-versa (ao clicar
novamente, volta a página com suas informações).
Requisito Técnico: Não é permitido criar duas páginas separadas (uma para você e outra para
a versão herói - isso pode zerar a sua atividade!): a alteração deve ocorrer na mesma página
via manipulação do DOM. Também não é permitido usar dois botões/links diferentes para a
transformação (isso pode reduzir a sua nota pela metade).
Regras de Entrega
- Comentários Obrigatórios: Para cada função JavaScript, regra de Media Query
(responsividade) e para cada classe CSS, adicione um comentário explicando o que
aquele bloco faz com suas próprias palavras.
- Regras de nomes no CSS e Javascript: Para facilitar a correção, utilize o prefixo
sc_nome (substitua nome pelo seu primeiro nome, por exemplo, sc_joao) em todos
os seus IDs, Classes e funções (ex: #sc_joao_btn_transformar,
.sc_joao_card_perfil, function sc_joao_muda()). Isto também é
obrigatório.
- Todo o código deve ser armazenado no GitHub, em uma pasta (diretório) específica.
No AVA (Moodle) será enviada apenas a URL desta pasta.
Critérios de Avaliação
1. Estrutura (1,0 pts): Uso correto de tags HTML.
2. CSS e Responsividade (4,0 pts): O layout não "quebra" ao redimensionar a tela? Os cards estão adequadamente
posicionados? A responsividade funciona? O uso de Flex/Grid foi efetivo?
3. Lógica JS (3,0 pts): O botão/link alterna as informações adequadamente, manipulando o DOM?
4. Organização (2,0 pts): Código limpo, identado e com os comentários explicativos exigid
