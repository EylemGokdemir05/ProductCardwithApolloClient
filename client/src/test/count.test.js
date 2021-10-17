const count = require('./count')

var products = [
    {
      id: "1",
      title: "Apple iPhone 8 Cep Telefonu",
      price: "10.351,00 TL",
      image:
        "https://mcdn01.gittigidiyor.net/70931/tn50/709313269_tn50_0.jpg?1634380",
      isLiked: true,
    }
  ];

test("Result : ",() => {
    expect(count(products)).toBe(1);
  });