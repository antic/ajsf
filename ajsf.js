/*
	AJSF - antic javascript framework
*/

(function(){
	var vaxml, scripts, xhr;

	// var t = require("core.Document");
	// console.log(t);

	//search vaxml attribute
	function preinit(){
		scripts = document.getElementsByTagName("script");
		for(var i = 0; i < scripts.length; i++){
			if(scripts[i].attributes.hasOwnProperty('vaxml')){
				vaxml = scripts[i].attributes.vaxml.value;
				break;
			}
		}
		loadVaxml(vaxml);
	}

	//load vaxml file
	function loadVaxml(url){
		xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = function (event) {
			if (xhr.readyState == 4 && xhr.status == 200) {
		        alert( xhr.responseText ); // responseText -- текст ответа.
		    } else {
		    	alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
		    }
		};
		xhr.send();
	}



	preinit();
}());