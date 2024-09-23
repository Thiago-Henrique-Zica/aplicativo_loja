//criar outro export const para adiconar os novos produtos ou criar outra pasta de DADOS com novos conteudos.

export const banners = [
    {
        id: 1,
        descricao: "Pizzas",
        icone: require("../assets/banner_eventos.jpg")
    },
    {
        id: 2,
        descricao: "Comida Saudável",
        icone: require("../assets/banner_promocao.jpg")
    }
];

export const restaurantes = [
    {
        id: 1,
        nome: "Embalagens / Descartáveis",
        endereco: "Copos, Pratos, talheres...",
        logotipo: require("../assets/utensilios-de-cozinha.png")
    },
    {
        id: 2,
        nome: "Chocolates",
        endereco: "Barras, bombons, caixas...",
        logotipo: require("../assets/barra-de-chocolate.png")
    },
    {
        id: 3,
        nome: "Balas / chicletes",
        endereco: "Balinhas, chicletes, pirulitos...",
        logotipo: require("../assets/doces.png")
    },
    {
        id: 4,
        nome: "Festas / Decorações",
        endereco: "Balão, Confetes, tintas ...",
        logotipo: require("../assets/balao.png")
    }
];

export const pedidos = [
    {
        id: 1,
        nome: "Distruibuidora Aliança",
        endereco: "Brasília, Guará",
        status: "Caminho",
        dt_pedido: "10/05/2024",
        vl_total: 149,
        logotipo: require("../assets/logo_loja.png")
    },
    {
        id: 2,
        nome: "Distruibuidora Aliança",
        endereco: "Brasília, Guará",
        status: "Entregue",
        dt_pedido: "01/05/2024",
        vl_total: 75,
        logotipo: require("../assets/logo_loja.png")
    },
    {
        id: 3,
        nome: "Distruibuidora Aliança",
        endereco: "Brasília, Guará",
        status: "Entregue",
        dt_pedido: "12/04/2024",
        vl_total: 250,
        logotipo: require("../assets/logo_loja.png")
    }
];

export const restaurante = {
    id: 1,
    nome: "The Keba’s Bar",
    endereco: "Rua Rui Barbosa, 512 - Paraiso - São Paulo - SP",
    logotipo: require("../assets/restaurante2.png"),
    foto: require("../assets/embalagens.png"),
    vlEntrega: 5.00,
    isFavorito: true,
    cardapio: [
        {
            idCategoria: 1,
            categoria: "Ofertas",
            itens: [
                {
                    idProduto: 1,
                    nome: "Talheres",
                    descricao: "Garfos e Facas",
                    valor: 30.00,
                    foto: require("../assets/copos.png")
                },
                {
                    idProduto: 2,
                    nome: "Pratos",
                    descricao: "Coca-Cola lata de 300ml trincando de gelada",
                    valor: 5.00,
                    foto: require("../assets/produto-coca.png")
                },
                {
                    idProduto: 3,
                    nome: "Copos",
                    descricao: "Coca-Cola lata de 300ml trincando de gelada",
                    valor: 5.00,
                    foto: require("../assets/copos.png")
                }
            ]
        },
        
    ]
};

export const pedido = {
    id: 1,
    nome: "Churrascaria e Pizzaria Boizão",
    endereco: "Alameda Santos, 954",
    status: "Entregue",
    dt_pedido: "10/05/2024",
    vl_total: 66.00,
    logotipo: require("../assets/copos.png"),
    itens: [
        {
            idItem: 1,
            idProduto: 1,
            nome: "Pizza Calabresa",
            descricao: "Massa artesanal, mussarela e calabresa",
            foto: require("../assets/copos.png"),
            qtd: 2,
            vlUnitario: 30.00,
            vlTotal: 60.00
        },
        {
            idItem: 2,
            idProduto: 2,
            nome: "Coca-Cola Lata",
            descricao: "Coca-Cola lata de 300ml trincando de gelada",
            foto: require("../assets/copos.png"),
            qtd: 1,
            vlUnitario: 6.00,
            vlTotal: 6.00
        }
    ]
};