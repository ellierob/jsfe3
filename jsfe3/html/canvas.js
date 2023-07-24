window.addeventListener("Load", () => {
	const canvas = document.querySelector('#canvas');
	const ctx = canvas.getContext("2d");
	//resizing
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	
	ctx.strokeStyle = "red";
	ctx.fillRect(50, 50, 200, 200);
	
});

/*
window.addeventListener("resize", () => {
	//const canvas = document.querySelector('#canvas');
	//const ctx = canvas.getContext("2d");
	//resizing
	//canvas.height = window.innerheight;
	//canvas.width = window.innerwidth;
}); 
*/