// JavaScript Document

let element = document.querySelector(".text1");
element.addEventListener("click", goToSomePage);

function goToSomePage(){
	window.open("http://www.somePage.dk", '_black');
}
document.addEventListener("load", setTimeout(reloadBanner,10000));
function reloadBanner(){
	location.reload();
}