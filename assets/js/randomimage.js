document.addEventListener("DOMContentLoaded", setRandomImage);

var header;
var imageList = [
	"url('./assets/images/thinkascreator.jpg')",
	"url('./assets/images/dialog.jpg')",
	"url('./assets/images/ekaterina_150.jpg')",
]


function setRandomImage(){
	header = document.querySelector(".header__container")
	header.style.background = imageList[getRandomNum()];
}

function getRandomNum (){
	return Math.floor(Math.random() * imageList.length);
}
