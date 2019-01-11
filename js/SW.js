const CACHE_NAME = "devCamp";
var urlToCahce = [
"/",
"/page/about.html",
"/page/contact.html",
"/page/galery.html",
"/page/home.html",
"/page/nav.html",
"/index.html",
"/js/materialize.js",
"/js/materialize.min.js",
"/js/nav.js",
"/css/materialize.css",
"/css/materialize.min.css",
"/Koala.jpg",
"/Penguins.jpg"
];

self.addEventListener("install", function(event)	{
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache){
			return cache.addAll(urlToCahce);

		}));
});

self.addEventListener("fetch",function(event){
	event.respondWith(
		caches
		.match(event.request,{ cacheName: CACHE_NAME})
		.then(function(response){
			if(response){
				console.log("ServiceWorker: Gunakan Asset dari Cache",response.url);
			return response;
			}
		console.log("ServiceWorker: Memuat Asset dari server",event.request.url);
		return fetch(event.request);



		})
		);
});
