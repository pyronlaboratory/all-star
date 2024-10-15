/**
 * @description Loads a JavaScript file from a specified URL by dynamically adding a
 * script tag to the head of the HTML document.
 *
 * @param {string} url - Used to specify the URL of the JavaScript file to be loaded.
 */
function loadJS(url) {
	// adding the script tag to the head
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;

	// fire the loading
	head.appendChild(script);
}

/**
 * @description Removes a JavaScript file from the DOM by searching for a script tag
 * with a specified `src` attribute and deleting it.
 *
 * @param {string} url - The source URL of the JavaScript file to be removed.
 *
 * @returns {any} Undefined.
 */
function unloadJS(url) {
	$('html').find('script').filter(function(){
	// Returns true if the script's src attribute matches the specified url.
	return $(this).attr('src') == url
	}).remove();
}