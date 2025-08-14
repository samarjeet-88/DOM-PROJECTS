

let colorObj={
    'skyBlue':"#87CEEB",
    'lemonYellow':'#FFF44F',
    'coral':'#FF7F50',
    'mintGreen':'#98FF98',
    'peach':'#FFDAB9',
    'turquoise':'#40E0D0',
    'lightPink':'#FFB6C1',
    'aqua':'#00FFFF'
}

let lastSelectedElement=null

document.addEventListener('DOMContentLoaded',function(){
    let main=document.querySelector('.main')
    main.addEventListener('click',function(event){
    if(event.target.classList.contains('color')){
        if(lastSelectedElement===event.target){
            lastSelectedElement.classList.remove('selected-color')
            main.style.backgroundColor='#212121'
            lastSelectedElement=null
        }else{
            if(lastSelectedElement){
                lastSelectedElement.classList.remove('selected-color')
            }
            let colorName=event.target.dataset.color;
            event.target.classList.add('selected-color')
            main.style.backgroundColor=colorObj[colorName]
            lastSelectedElement=event.target
        }
    }
})
})