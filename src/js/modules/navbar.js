export default class NavBar {
    constructor() {
        this.navLink = document.querySelectorAll("li.nav__link")
        this.toggleMenu = document.getElementsByClassName("toggle__button")[0];
        this.bars = document.querySelector(".bars")
        this.events() 
    }  
    

    events() {

        this.toggleMenu.addEventListener('click', ()=> this.toggle())
        this.navLink.forEach(element =>  element.addEventListener('click', ()=>this.toggle()))       
      }

    open(){ this.bars.classList.add("open"); }

    close(){
        this.bars.classList.remove('open');
    }
    
  toggle() {

    for (let i = 0; i <  this.navLink.length; i++) {
        if(!this.navLink[i].classList.contains("active")){ 
            this.open()
            this.navLink[i].classList.add('active')

        }else{
            this.close()
            this.navLink[i].classList.remove('active');
        }


    }

  }
    
}
