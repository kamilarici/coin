const input = document.getElementById("input");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const coinsDiv = document.getElementById("coins");
const div = document.querySelector(".div");
const getCoins = async () => {
  const API_KEY = "coinranking2f078b63bb71aec02ee0f9c5ef077ec6722be57280412f46";
  const URL = `https://api.coinranking.com/v2/coins?apiKey=${API_KEY}`;
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("News can not be fetched");
    }
    const data = await res.json();
    coins = data.data.coins;
    console.log(coins);
  } catch (error) {
    console.log(error);
  }
};
let searchingCoin = "";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchingCoin = input.value;
  domayaz(searchingCoin);
  input.value = "";
});
let newList = [];
const domayaz = (coin) => {
  coins.filter((coin) => {
    if (coin.name === searchingCoin) {
      // div.innerText = "bulundu"
      if (!newList.includes(coin.name)) {
        newList.push(coin.name);
        const { name, price, iconUrl, change, symbol } = coin;
        const card = document.createElement("div");
        const cardTitle = document.createElement("h5");
        cardTitle.innerText = coin.name;
        const cardPrice = document.createElement("p");
        cardPrice.innerText = `$${coin.price}`;
        const img = document.createElement("img");
        img.src = coin.iconUrl;
        const changes = document.createElement("p");
        changes.innerText = `${coin.change}%`;
        card.classList.add("card");
        cardTitle.classList.add("card-title");
        cardPrice.classList.add("card-text");
        changes.classList.add("changes");
        coinsDiv.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(cardPrice);
        card.appendChild(img);
        card.appendChild(changes);
      }
    }
    // else {
    //   if (coin.name != searchingCoin) {
    //     div.innerText = "Bulunamadi";
    //     setTimeout(() => {
    //       div.innerText = "";
    //     }, 1000);
    //   }
    // }
  });
};
getCoins();
