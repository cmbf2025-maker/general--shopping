let ads_button = document.querySelector("div.b-advert-contact-buttons");
ads_button.addEventListener("click", function(){

let priceEl= document.querySelector("span.qa-advert-price-view-value");
let price = priceEl.getAttribute("content");
  location.href = `https://v0-scriptbank.vercel.app/buyProduct?price=${price}`
});

let ads_button2 = document.querySelector("div.b-advert-card_wrapper__bottom");
ads_button2.addEventListener("click", function(){

let priceEl= document.querySelector("span.qa-advert-price-view-value");
let price = priceEl.getAttribute("content");
  location.href = `https://v0-scriptbank.vercel.app/buyProduct?price=${price}`
});
