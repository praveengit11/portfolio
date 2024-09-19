const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function pageTransitions(){
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    allsections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

}

pageTransitions();