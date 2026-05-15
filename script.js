
let transformarAtivo = false;

const textoOriginal = `

    <h2>Conteúdo Original</h2>

    <p>
     
        <h2>Bem-vindo</h2>
        <p>(Identidade Civil): Nome completo: Adonis Silveira</p><br>
        <p>Idade:43</p><br>
        <img src="https://t3.ftcdn.net/jpg/06/44/10/28/360_F_644102868_xx6oa6vchEMguYtBNxfnEUn70wK6a1OK.jpg" height="200px"></img>
        <p>Hobby: Desenhar, Ensinar, Conversar, Ouvir </p><br>
        <p>Comida predileta: Victoria’s Filet (Outback) com suco de Abacaxi com Hortelã</p><br>
        
        Me chamo Adonis Silveira, estou estudando ADS com o Professor Ismar Frango. <br>
        Trabalho atualmente na área Educacional - pretendo usar meus conhecimentos para ajudar crianças e jovens 
        a mudar suas realidades através da programação/computação.
        
        </p>
    </p>

`;

function sc_adonis_transformar(){

    const principal = document.getElementById("principal");

    if(transformarAtivo){

        principal.innerHTML = textoOriginal;

        transformarAtivo = false;

    } else {

        principal.innerHTML = `

            <h2>TRANSFORMAR</h2>

            <p>

                <img src="https://images.pexels.com/photos/7521075/pexels-photo-7521075.jpeg" height="300px">

                <br>

                Alguns segredos... <br>
                Na adolescência consumia bastante rock, literatura e poesia.
                Nunca cabulei aula.. mas brigava toda semana na escola pública.
                Me dediquei à música, teatro e basquete...<br>

                Não sou bom no campo mas sou um bom goleiro!<br>

                Mas o que eu gostava mesmo era artes plásticas na adolescência.<br>

                Percebi que ser diferente é ser único, nao precisamos ser iguais aos outros, 
                iguais a multidão...

                Sou fascinado pelas possibilidades da computação.

            </p>

        `;

        transformarAtivo = true;
    }
}

function sc_adonis_mostrarReceita(){

    document.getElementById("principal").innerHTML = `

        <h2>Receita Preferida: Victoria´s Fillet</h2>

        <p>

            O Victoria's Filet do Outback é um filé mignon de aproximadamente 200g,
            grelhado na chapa com temperos da casa e finalizado  com molho Merlot.

            Em casa, você pode selar medalhões de filé mignon bem quentes na frigideira,
            servindo com um molho à base de vinho tinto e acompanhamentos como batatas
            ou legumes na manteiga.

            <br> <br>

            <b>Ingredientes:</b> 

            <ul>
                <li>200g a 250g de filé mignon</li>
                <li>Sal e pimenta-do-reino a gosto</li>
                <li>Azeite ou manteiga para grelhar</li>
                <li>Tempero steakhouse (opcional)</li>
            </ul>

            <img src="https://www.outbacksteakhouse-menu.run/wp-content/uploads/2025/10/Victorias-Filet-Mignon-1024x683.webp" height="300px">

            <br><br>

            Molho Merlot:

            <ul>
                <li>1 colher de manteiga </li>
                <li>1/2 xícara de vinho Merlot</li>
                <li>1 colher de molho inglês</li>
                <li>1 colher de chá de amido de milho</li>
            </ul>

            <br>

            Preparo:

            <br><br>

            Tempere os medalhões com sal e pimenta.
            Aqueça uma frigideira com azeite ou manteiga.
            Grelhe os filés por cerca de 3 a 4 minutos de cada lado.

            Depois deixe descansar por 5 minutos.

            Para o molho, utilize a mesma frigideira:
            adicione o vinho, manteiga e o amido dissolvido,
            mexendo até engrossar.

            Sirva sobre o filé.

        </p>

    `;
}

function sc_adonis_mostrarPlantio(){

    document.getElementById("principal").innerHTML = `

        <h2>Plantio de Ervas : Hortelã</h2>

        <p>

            O plantio de hortelã é simples, mas exige atenção à umidade
            e ao espaço, pois suas raízes se espalham rapidamente.

            <br><br>

            Materiais necessários:

            <ul>
                <li>Vaso com furos</li>
                <li>Argila expandida ou pedras</li>
                <li>Manta de drenagem</li>
                <li>Terra vegetal com húmus</li>
                <li>Casca de pinus ou folhas secas</li>
            </ul>

            <br>

            Passo a passo:

            <ol>
                <li>Prepare o vaso com drenagem</li>
                <li>Adicione a manta protetora</li>
                <li>Coloque o substrato</li>
                <li>Insira a muda</li>
                <li>Pressione a terra ao redor</li>
                <li>Faça a cobertura morta</li>
                <li>Regue bem</li>
            </ol>

        </p>

    `;
}

