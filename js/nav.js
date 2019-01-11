document.addEventListener("DOMContentLoaded",function(){
var element =document.querySelectorAll(".sidenav");
M.Sidenav.init(element);
loadnav();


function loadnav(){
			var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
				if(this.readyState == 4){

				if (this.status != 200)return;
			//isi perintah disini
	document.querySelectorAll(".topnav, .sidenav").forEach(function(elm){
		elm.innerHTML = xhttp.responseText;	
	});

document.querySelectorAll(".topnav a, .sidenav a").forEach(function(elm){
elm.addEventListener("click",function(event){
	var sidenav = document.querySelector(".sidenav");
	M.Sidenav.getInstance(sidenav).close();

	page = event.target.getAttribute("href").substr(1);
	loadPage(page)
});

});
}//==4
		};
	xhttp.open("GET","page/nav.html",true);
	xhttp.send();
}
	
	var page = window.location.hash.substr(1);
if (page == "") page = "home";
loadPage(page);

function loadPage(page) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4){
			var conten = document.querySelector("#body-cont")
			if (this.status == 200){
				conten.innerHTML = xhttp.responseText;
			}else if(this.status == 404 ){
				conten.innerHTML = "<p>Halaman Tidak di temukan</p>"
			}else{
				conten.innerHTML = "<p>	Halaman Tidak dapat di akses</p>"
			}
		//isi perintah disini
 
		}//==	4	
	};//tutup XMLHttpRequest
	
	xhttp.open("GET","page/"+page+".html",true);
	xhttp.send();
}//tutup loadPage


	});//tutup DOMContentLoaded