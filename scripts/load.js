function loadJS(url) {
	// adding the script tag to the head
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;

	// fire the loading
	head.appendChild(script);
}

function unloadJS(url) {
	$('html').find('script').filter(function(){
	return $(this).attr('src') == url
	}).remove();
}