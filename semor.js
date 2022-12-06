class mobileNavBar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
        animateLinks(){
            this.navLinks.forEach((link, index) => {
        
                link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
            })
        }
    handleClick(){
        
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

 mobileNavBar = new mobileNavBar(
    ".mobile-menu",
    ".lista",
    ".lista li",
);
mobileNavBar.init();

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar a página.')
}
function sair(){
    localStorage.removeItem('token')
    window.location.href= 'login.html'
}

function mostrar(){
    localStorage.setItem(listaUser)
}