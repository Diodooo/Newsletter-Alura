const botao = document.querySelector('button');
const input = document.querySelector('input');

botao.addEventListener('mouseover', (event) => {
    console.log(input)
    if(input.value != "") return;
    const alvo = event.target.getAttribute('class');
    if(alvo.includes('top-[150px]')){
        event.target.classList.replace("top-[150px]", "top-[80px]");
    } else {
    event.target.classList.replace("top-[80px]", "top-[150px]");
    }
});