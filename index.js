
let cards =document.querySelectorAll(".just-card");
let icon =document.querySelectorAll(".icon1")
let icon2=icon;
cards[0].style.display="none";
cards[4].style.display="none";
icon.forEach(function(icon, index){
    icon.addEventListener("click", function(e){
        let firstEle= index-1;
        let middleEle= index;
        let lastEle= index+1;
        cards[0].style.display="none"
        cards[1].style.display="none"
        cards[2].style.display="none"
        cards[3].style.display="none"
        cards[4].style.display="none"
        icon2[0].style.background="red";
        icon2[1].style.background="red";
        icon2[2].style.background="red";
        icon2[3].style.background="red";
        icon2[4].style.background="red";
        
        let heddenFirst= index-2;
        let heddenLast=index+2
        if(firstEle===-1){
            firstEle=4;
        } else if(lastEle===5){
            lastEle=0
        }else{
        } 
        cards[firstEle].style.display="flex";
        cards[middleEle].style.display="flex";
        cards[lastEle].style.display="flex";
        e.currentTarget.style.background="green";
    })
})



// cards[0].style.display='none';
// cards[4].style.display='none';

// icon[0].addEventListener("click", function(){
//     icon[0].style.width="25px";
//     icon[0].style.hieght="25px";
//     cards[3].style.display='none';
//     cards[4].style.display='none';
//     cards[0].style.display='flex';
//     cards[1].style.display='flex';
// })
// icon[4].addEventListener("click", function(){
//     icon[4].style.width="25px";
//     icon[4].style.hieght="25px";
//     cards[0].style.display='none';
//     cards[1].style.display='none';
//     cards[3].style.display='flex';
//     cards[4].style.display='flex';

// })

