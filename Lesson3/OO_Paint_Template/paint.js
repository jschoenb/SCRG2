let inputPosX;
let inputPosY;
let inputColor;
let inputSize;
let inputWidth;
let inputHeight;

window.onload = function(){
	inputPosX = document.querySelector("#positionX");
	inputPosY = document.querySelector("#positionY");
	inputColor = document.querySelector("#color");
	inputSize = document.querySelector("#size");
	inputWidth = document.querySelector("#width");
	inputHeight = document.querySelector("#height");
	
	updateFormElements();

	document.querySelector("#draw").onclick = function(){
		validateInputAndDraw();
	};

	document.querySelector("#empty").onclick=function(){
		document.querySelector("#paintArea").replaceChildren();
	};

	document.querySelector("#shape").onchange=function() {
		updateFormElements();
	};
	
};

function updateFormElements() {
	let shape = document.querySelector("#shape").value;
	switch(shape) {
		case "square":
			inputSize.parentElement.style.display = "";
			inputWidth.parentElement.style.display = "none";
			inputHeight.parentElement.style.display = "none";
			break;
		case "rectangle":
			inputSize.parentElement.style.display = "none";
			inputWidth.parentElement.style.display = "";
			inputHeight.parentElement.style.display = "";
			break;
		case "picture":
			inputWidth.parentElement.style.display = "none";
			inputHeight.parentElement.style.display = "none";
			inputSize.parentElement.style.display = "none";
			break;
		default: 
			break;
	}
}


function validateInputAndDraw() {
	let shape = document.paintForm.shape.options[document.paintForm.shape.selectedIndex].value;
	let color = checkInputField("color");
	let positionX = checkInputField("positionX");
	let positionY = checkInputField("positionY");
	
	switch(shape) {
		case "square": {
			let size = checkInputField("size");
			let s1 = new Square(positionX,positionY,color,size);
			s1.draw(document.querySelector("#paintArea"));
			break;
		}
		case "rectangle":
			let width = checkInputField("width");
			let height = checkInputField("height");
			let r1 = new Rectangle(positionX,positionY,color,width,height);
			r1.draw(document.querySelector("#paintArea"));
			break;
		case "picture":
			let p = new Picture(positionX,positionY,color);
			let r = new Rectangle(0,0,"#aabbcc",5,10);
			p.addPaintObj(r);
			let s = new Square(100,100,"#aaffcc",50);
			p.addPaintObj(s);
			p.draw(document.querySelector("#paintArea"));
			break;
		default: 
			break;
	}

}

function checkInputField(id) {
	let inputField = document.querySelector("#"+id);
	
	if(inputField.value == "" ) {
		inputField.style.border ="1px solid red"; //roter Rahmen
		return "";
	} else {
		inputField.style.border ="1px solid #cdcdcd";
		return inputField.value;
	}
}


