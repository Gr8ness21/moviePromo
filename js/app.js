var counter= 0;
function plusDivs(x){
var arrayImg=['../images/fanart1','./images/fanart2','.//images/fanart3'];
var size= arrayImg.length - 1;
counter = counter + x;
if(counter > size){
    counter=0;
}
if(counter < 0){
    counter = size
}
document.querySelector('img').src=arrayImg[counter];
}