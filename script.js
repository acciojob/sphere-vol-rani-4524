function volume_sphere() {
    //Write your code here
	let radius = document.querySelector("#radius").value;
	radius= Number(radius);
	if(isNaN(radius) || radius<0){
		document.getElementById("volume").value="NaN";
		return false;
	}

	let sphere = (4 / 3) * Math.PI * Math.pow(radius, 3);
	sphere=sphere.toFixed(4);
	document.getElementById("volume").value=sphere;
	return false;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
