/**
 * @description Loads JavaScript files from a specified URL by dynamically creating
 * a script tag, setting its type and source, and appending it to the document's head.
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
 * @description Removes a JavaScript file from a webpage by its URL. It finds the
 * `script` tag with the specified `src` attribute, removes it, and updates the webpage.
 *
 * @param {string} url - Used to identify JavaScript files to be removed from the page.
 *
 * @returns {any} Undefined
 */
function unloadJS(url) {
	$('html').find('script').filter(function(){
	// Returns a boolean indicating whether the attribute 'src' of the current element
	// matches the specified 'url'.
	return $(this).attr('src') == url
	}).remove();
}