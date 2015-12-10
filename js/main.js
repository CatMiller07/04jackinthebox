var box = document.getElementById("anim-box");
box.onclick=function()
{
	console.log("current image is "+ box.src);
	if (box.src.includes("closed")) {
		 box.src="img/open.png";
		var elem = document.getElementById("clown-voice");
		elem.innerHTML = "Cackle Cackle";
	}
	else  {
	      box.src="img/closed.png";	
		   document.getElementById("clown-voice").innerHTML="";
	}
}