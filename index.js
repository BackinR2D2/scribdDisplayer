  
const btn = document.querySelector('button');
const url = document.querySelector('input');
const title = document.querySelectorAll('input')[1];
const doc = document.querySelector('.doc');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const scribdUrl = new URL(url.value);
    const numID = scribdUrl.pathname.split('/')[2];
    const template = `<iframe class="scribd_iframe_embed" title="${title.value}" src="https://www.scribd.com/embeds/${numID}/content?start_page=1&view_mode=scroll" data-auto-height="true" data-aspect-ratio="0.7080062794348508" scrolling="no" width="100%" height="600" frameborder="0"></iframe>`;
    doc.innerHTML = template;
    document.title = title.value;
    url.value = "";
    title.value = "";
})