function run_buy(el){
  el.setAttribute("setattr","true");
let priceEl= document.querySelector("span.qa-advert-price-view-value");
let price = priceEl.getAttribute("content");
  let nameEl = document.querySelector("div.qa-advert-title");
  let name = nameEl.innerText;
  let imageEl = document.querySelector("img.b-slider-image");
  let image = imageEl.src;
  let biz_name = typeof BIZ_NAME == "undefined" ? "": BIZ_NAME;
  let product_url = location.href;
  location.href = `https://v0-scriptbank.vercel.app/buyProduct?price=${price}&name=${name}&site=jiji.ng&currency=NGN&biz_name=${biz_name}&product_url=${product_url}&image=${image}`
  
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

let share_button = document.querySelector("svg.qa-share-button");

if( share_button && ! share_button.getAttribute("shared")){
let share = share_button.cloneNode(true);
  share.addEventListener("click", function(){
    //add html to enhance share
    let installed_share = document.getElementById("shared_item");

    if(! installed_share ){
      let style = document.createElement("style");
      style.setAttribute("id", "shared_item");
      style.textContent = `demo-btn {
    background: #4285F4;
    color: white;
    border: none;
    padding: 14px 32px;
    border-radius: 24px;
    font-size: 16px;
    font-family: inherit;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.3px;
    box-shadow: 0 4px 20px rgba(66,133,244,0.4);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .demo-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(66,133,244,0.5); }
  .demo-btn:active { transform: translateY(0); }

  /* ── Backdrop ── */
  .share-backdrop {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.55);
    z-index: 100;
    animation: fadeIn 0.2s ease;
  }
  .share-backdrop.open { display: block; }

  /* ── Sheet ── */
  .share-sheet {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background: #2d2d2d;
    border-radius: 28px 28px 0 0;
    z-index: 101;
    padding-bottom: env(safe-area-inset-bottom, 16px);
    transform: translateY(100%);
    transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1);
    max-width: 480px;
    margin: 0 auto;
  }
  .share-sheet.open { transform: translateY(0); }

  /* drag handle */
  .drag-handle {
    width: 36px; height: 4px;
    background: #666;
    border-radius: 2px;
    margin: 12px auto 0;
  }

  /* ── Preview card ── */
  .preview {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    margin: 12px 16px 4px;
    background: #3a3a3a;
    border-radius: 16px;
  }
  .preview-thumb {
    width: 52px; height: 52px;
    border-radius: 10px;
    background: linear-gradient(135deg, #4285F4, #34A853);
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px;
  }
  .preview-text { overflow: hidden; }
  .preview-title {
    font-size: 14px;
    font-weight: 500;
    color: #e8e8e8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .preview-url {
    font-size: 12px;
    color: #888;
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ── Apps row ── */
  .apps-row {
    display: flex;
    gap: 6px;
    padding: 12px 16px 4px;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .apps-row::-webkit-scrollbar { display: none; }

  .app-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    cursor: pointer;
    width: 68px;
    padding: 6px 4px;
    border-radius: 14px;
    transition: background 0.15s;
    border: none;
    background: transparent;
    color: inherit;
  }
  .app-item:hover { background: rgba(255,255,255,0.07); }
  .app-item:active { background: rgba(255,255,255,0.12); }

  .app-icon {
    width: 52px; height: 52px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 24px;
    position: relative;
  }
  .app-label {
    font-size: 11px;
    color: #ccc;
    text-align: center;
    line-height: 1.2;
    font-weight: 400;
  }

  /* app colours */
  .ic-whatsapp { background: #25D366; }
  .ic-twitter  { background: #000; border: 1px solid #333; }
  .ic-facebook { background: #1877F2; }
  .ic-telegram { background: #2AABEE; }
  .ic-instagram{ background: linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); }
  .ic-linkedin { background: #0A66C2; }
  .ic-reddit   { background: #FF4500; }
  .ic-email    { background: #EA4335; }
  .ic-sms      { background: #34A853; }
  .ic-copy     { background: #5f6368; }
  .ic-more     { background: #444; }

  /* svg icons */
  .app-icon svg { width: 26px; height: 26px; fill: white; }

  /* ── Divider ── */
  .divider {
    height: 1px;
    background: rgba(255,255,255,0.08);
    margin: 8px 16px;
  }

  /* ── Action list ── */
  .action-list { padding: 0 8px 8px; }

  .action-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 12px;
    border-radius: 14px;
    cursor: pointer;
    transition: background 0.15s;
    border: none;
    background: transparent;
    color: inherit;
    width: 100%;
    text-align: left;
  }
  .action-item:hover { background: rgba(255,255,255,0.07); }
  .action-item:active { background: rgba(255,255,255,0.12); }

  .action-icon {
    width: 40px; height: 40px;
    border-radius: 50%;
    background: #444;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .action-icon svg { width: 20px; height: 20px; fill: #ccc; }

  .action-text { font-size: 14px; color: #e0e0e0; font-weight: 400; }

  /* ── Toast ── */
  .toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: #444;
    color: #fff;
    padding: 10px 20px;
    border-radius: 24px;
    font-size: 13px;
    font-weight: 500;
    z-index: 200;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s, transform 0.2s;
    white-space: nowrap;
  }
  .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
  `;
    }


    document.head.appendChild( style );
    alert("working");
  });
  share.setAttribute("shared", "true");
share_button.parentElement.insertBefore(share, share_button);
  share_button.remove();
}

let similar = document.querySelector("div.h-dflex.h-pb-20.h-flex-dir-column");

if(similar && similar.style.display != "none" ){
  similar.style.display = "none";
}

  
let mobile = document.querySelector("div.active.b-mobile-bar.b-mobile-bar-new");

if(mobile && mobile.style.display != "none" ){
  mobile.style.display = "none";
}


let seller_back = document.querySelector("div.b-seller-page-header__back");

if(seller_back && seller_back.style.display != "none" ){
  seller_back.style.display = "none";
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

