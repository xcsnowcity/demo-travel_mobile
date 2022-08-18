import './header.css';

class Header {
    constructor(header,changePoint,scrollEl,eventEl=scrollEl){
        this.header=header;
        this.changePoint=changePoint;
        this.scrollEl=scrollEl;
        this.eventEl=eventEl;
        this.lock=false;
        this.bindEvent();
    }
    bindEvent(){
        this.eventEl.addEventListener('scroll',()=>{
            if(!this.lock&&this.scrollEl.scrollTop>this.changePoint){
                this.lock=true;
                console.log('lock');
                this.header.classList.add('header-change-color');
            }else if (this.lock&&this.scrollEl.scrollTop<=this.changePoint){
                this.lock=false;
                console.log('unlock');
                this.header.classList.remove('header-change-color')
            }
        }, false)
    }
}

export default Header;




