//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors

//var getShirtsColorsAmount = function (company) {
//   colors = company.products.shirts.colors;
//    return colors.length;
//  };

company = {
  name: "ACME Corp",
  address: "Nowhere st",
  products: {
    shirts: {
      colors: ["red", "green", "blue"],
    },
    socks: {
      colors: ["cyan", "magenta", "yellow"],
    },
  },
};

let getShirtsColorsAmount = (company) => {
  let colors  = [...company.products.shirts];
  return console.log(colors.length);
};

getShirtsColorsAmount(company);