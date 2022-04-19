window.addEventListener('scroll', () => {
    let content1 = document.querySelector('.div1');
    let contentPosition1 = content1.getBoundingClientRect().top - 100;
    let content2 = document.querySelector('.div2');
    let contentPosition2 = content2.getBoundingClientRect().top - 100;
    let content3 = document.querySelector('.div3');
    let contentPosition3 = content3.getBoundingClientRect().top - 100;
    let content4 = document.querySelector('.div4');
    let contentPosition4 = content4.getBoundingClientRect().top - 100;
    let content5 = document.querySelector('.div5');
    let contentPosition5 = content5.getBoundingClientRect().top - 100;
    let content6 = document.querySelector('.img_div');
    let contentPosition6 = content6.getBoundingClientRect().top + 150 ;
    let content7 = document.querySelector('.text_div');
    let contentPosition7 = content7.getBoundingClientRect().top + 150 ;
    let screenPosition = window.innerHeight;

    let animate = (contentPosition,content) => {
        if(contentPosition < screenPosition) {
            content.classList.add('active');
        }
         else {
             content.classList.remove('active');
         }
    }
    animate(contentPosition1, content1);
    animate(contentPosition2, content2);
    animate(contentPosition3, content3);
    animate(contentPosition4, content4);
    animate(contentPosition5, content5);
    animate(contentPosition6, content6);
    animate(contentPosition7, content7);
  
})