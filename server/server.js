const {ApolloServer}=require('apollo-server');
const gql=require('graphql-tag'); 
const { buildSchema} = require('graphql');

var products = [
    {
      id: "1",
      title: "Apple iPhone 8 Cep Telefonu",
      price: "10.351,00 TL",
      image:
        "https://mcdn01.gittigidiyor.net/70931/tn50/709313269_tn50_0.jpg?1634380",
      isLiked: false,
    },
    {
      id: "2",
      title: "Apple iPhone 10 Cep Telefonu",
      price: "10.351,00 TL",
      image:
        "https://mcdn01.gittigidiyor.net/70931/tn50/709313269_tn50_0.jpg?1634380",
      isLiked: false,
    },
    {
      id: "3",
      title: "Apple iPhone 11 Cep Telefonu",
      price: "10.351,00 TL",
      image:
        "https://mcdn01.gittigidiyor.net/70931/tn50/709313269_tn50_0.jpg?1634380",
      isLiked: false,
    },
    {
      id: "4",
      title: "Apple iPhone 12 Cep Telefonu",
      price: "10.351,00 TL",
      image:
        "https://mcdn01.gittigidiyor.net/70931/tn50/709313269_tn50_0.jpg?1634380",
      isLiked: false,
    },
];

const schema=buildSchema(`
    type Product {
        id: String
        title: String
        price: String
        image: String
        isLiked: Boolean
    }
`);

const typeDefs = gql`
  type Product {
    id: String
    title: String
    price: String
    image: String
    isLiked: Boolean
  }
  type Query {
    products: [Product]!
  }
  type Mutation {
    createProduct(title: String!,price: String!): Product!
    getProduct(id: String!): Product!
    updateProduct(id: String!): Product!
  }
`;

const resolvers = {
    Query: {
        products: () => products,
    },
    Mutation: {
        createProduct: (parent, args) => {
            return products.push({
                id: args.id,
                title: args.title,
                price: args.price,
                image: args.image,
                isLiked: false
            })
        },
        getProduct: (parent, args) => {
            const product=products.find((product)=>product.id === args.id);
            return product;
        },
        updateProduct: (parent, args) => {
            for (let i in products) {
                if (products[i].id === args.id) {
                    products[i].isLiked = !products[i].isLiked;
                }
            }
            return args.id;
        },
    },
  };

const server=new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({port:5000}).then((response)=>{
    console.log(`server on ${response.url} working...`);
})