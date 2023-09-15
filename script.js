function Lobos(){const meuJson =
`{
    "album": "Lobos",
    "lancamento": "2018", 
    "duracao": "31:56",
    "foto": "imagens/Lobos_-_Jão_1.jpg",
    "foto2": "imagens/loboscarta.jpg",
    "foto3": "imagens/lobostrackspng.png"
}`;

const data = JSON.parse(meuJson); 
//Verificar console
console.log(data);

//Inserir na div- Front-End
document.getElementById("dados").innerHTML= 
"<p>Álbum: " +data.album+ "</p>"+
"<p>Lançamento: " +data.lancamento+ "</p>"+
"<p>Duração: " +data.duracao+ "</p>"+
"<p><img src='"+data.foto+"' widht='500px'></p>"+
"<p><img src='"+data.foto2+"' widht='500px'></p>"+
"<p><img src='"+data.foto3+"' widht='500px'></p>"}



//Botão 2
function AntiHeroi(){const meuJson =
    `{
        "album": "Anti-Herói",
        "lancamento": "2019", 
        "duracao": "31:56",
        "foto": "imagens/Jão_-_Anti-Herói.png",
        "foto2": "imagens/antiheroicarta.jpg",
        "foto3": "imagens/antiheroitracks.jpg"
    }`;
    
    const data = JSON.parse(meuJson); 
    //Verificar console
    console.log(data);
    
    //Inserir na div- Front-End
    document.getElementById("dados").innerHTML= 
    "<p>Álbum: " +data.album+ "</p>"+
    "<p>Lançamento: " +data.lancamento+ "</p>"+
    "<p>Duração: " +data.duracao+ "</p>"+
    "<p><img src='"+data.foto+"' widht='500px'></p>"+
    "<p><img src='"+data.foto2+"' widht='500px'></p>"+
    "<p><img src='"+data.foto3+"' widht='500px'></p>"}



    //Botão 3
    function Pirata(){const meuJson =
        `{
            "album": "Pirata",
            "lancamento": "2021", 
            "duracao": "31:56",
            "foto": "imagens/pirata_jao.jpg",
            "foto2": "imagens/piratacarta.png",
            "foto3": "imagens/trackspirata.jpg"
        }`;
        
        const data = JSON.parse(meuJson); 
        //Verificar console
        console.log(data);

        //Inserir na div- Front-End
        document.getElementById("dados").innerHTML= 
        "<p>Álbum: " +data.album+ "</p>"+
        "<p>Lançamento: " +data.lancamento+ "</p>"+
        "<p>Duração: " +data.duracao+ "</p>"+
        "<p><img src='"+data.foto+"' widht='500px'></p>"+
        "<p><img src='"+data.foto2+"' widht='500px'></p>"+
        "<p><img src='"+data.foto3+"' widht='500px'></p>"}



    //Botão 4
        function Super(){const meuJson =
            `{
                "album": "Super",
                "lancamento": "2023", 
                "duracao": "31:56",
                "foto": "imagens/jao-super-capa.jpg",
                "foto2": "imagens/supercarta.jpg",
                "foto3": "imagens/supertracks.png"
            }`;
            
            const data = JSON.parse(meuJson); 
            //Verificar console
            console.log(data);

            //Inserir na div- Front-End
            document.getElementById("dados").innerHTML= 
            "<p>Álbum: " +data.album+ "</p>"+
            "<p>Lançamento: " +data.lancamento+ "</p>"+
            "<p>Duração: " +data.duracao+ "</p>"+
            "<p><img src='"+data.foto+"' widht='500px'></p>"+
            "<p><img src='"+data.foto2+"' widht='500px'></p>"+
            "<p><img src='"+data.foto3+"' widht='500px'></p>"}


        //Botão 5
        function Joao(){const meuJson =
            `{
                "nome": "João Vitor Romania Balbino",
                "lancamento": "3 de novembro de 1994", 
                "duracao": "Pop",
                "foto": "imagens/jao.jpg",
                "foto2": "imagens/jaocrianca.jpg",
                "foto3": "imagens/turnepirata.jpg"
            }`;
            
            const data = JSON.parse(meuJson); 
            //Verificar console
            console.log(data);

            //Inserir na div- Front-End
            document.getElementById("dados").innerHTML= 
            "<p>Nome: " +data.nome+ "</p>"+
            "<p>Data de nascimento: " +data.lancamento+ "</p>"+
            "<p>Gênero musical: " +data.duracao+ "</p>"+
            "<p><img src='"+data.foto+"' widht='500px'></p>"+
            "<p><img src='"+data.foto2+"' widht='500px'></p>"+
            "<p><img src='"+data.foto3+"' widht='500px'></p>"}    