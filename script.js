//BURGER
if (window.innerWidth <= 990){
    document.body.insertAdjacentHTML("afterbegin",`
    <div class="burger_nav" id ='burger_nav'>
        <a href="#">
            <div class="logo logo_burger">
                <h1>PetStory online</h1>
                <img src="img/bamboo_orange.svg" alt="bamboo">
            </div></a>
        <a class="about" href="index.html">About</a>
        <a href="">Map</a>
        <a href="">Zoos</a>
        <a href="donate.html">Donate</a>
        <a href="">Contact us</a>
        <a href="https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks">Designed by ©</a>
    </div>
    <div class="burger" id = 'burger_button'></div>`)

const burger_button = document.querySelector('#burger_button');
let burger_nav = document.querySelector('#burger_nav');
let burger_open;
let clientHeit = window.innerHeight;
let clickOpenBurger = ()=>{
    burger_nav.style.height = `${clientHeit}px`;
    burger_open = true;
    burger_nav.style.top = '0px';
    document.body.style.overflow = 'hidden'
    burger_button.style.cssText = `
    background-image: url(img/x_icon.svg);
    height: 18px;
    `
    setTimeout(()=>{burger_nav.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}, 200)
}
let clickCloseBurger = ()=>{
    burger_open = false;
    burger_nav.style.top = `-${clientHeit}px`;
    document.body.style.overflow = 'scroll'
     burger_button.style.cssText = `
    background-image: url(img/burger_menu.svg);
    height: 10px;`
    burger_nav.style.backgroundColor = ''
}
burger_button.addEventListener('click', () => {
   if(!burger_open){
     return clickOpenBurger()
   }
   if(burger_open){
    return clickCloseBurger()
   }
})
burger_nav.addEventListener('click',e=>{
    if(e.clientY > 330){
        clickCloseBurger()
    }
})
}



