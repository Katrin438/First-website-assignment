//normalna funkicq
const navSlide = () => {
    //promenlivi -> izpolzvame metoda document.querySelector za da
    // vzemem obekt ot html file, document.querySelector('tuka se pishe imeto na classa');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    //document.querySelectorAll('vzima vsichki elementi s takuv klas')
    const navLinks = document.querySelectorAll('.navlinks li');

    //funkciq addEventListener koqto se izpulnqva samo kogato ima deistvie pri obekta
    //v nashiqt sluchai 'click' pri natiskane na burger
    burger.addEventListener('click', () =>{
        //izpulnqva se effecta v css file koit sme zadali predvaritelno
        nav.classList.toggle('nav-active');

        //funkciq koqto dobavq efekt za vsichki eleemit ot promenlivata navLinks
        //toest ot classa navlinks -> li
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                //link.style.animation se izpolva za css animaciq bez da polzvash
                //css file :D
                link.style.animation = '';
            }
            else{
                //dobavq slednata animaciq:
                link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 0.7}s`;
            }
        });
        //izpulnqva se effecta v css file koit sme zadali predvaritelno
        burger.classList.toggle('toggle');
    });

}
//invoke-vame glavnata funckiq aka izvikvame
navSlide();