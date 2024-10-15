// ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area");

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  // Adds event listeners for drag and drop events.
  dropArea.addEventListener(eventName, preventDefaults, false)
  document.body.addEventListener(eventName, preventDefaults, false)
});

// Highlight drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
  // Adds an event listener to the dropArea element.
  dropArea.addEventListener(eventName, highlight, false)
});

['dragleave', 'drop'].forEach(eventName => {
  // Adds an event listener to the dropArea element.
  dropArea.addEventListener(eventName, unhighlight, false)
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

/**
 * @description Stops the default behavior and propagation of an event, typically
 * used to prevent the default action of a click or submit event. It calls
 * `e.preventDefault()` and `e.stopPropagation()` methods to achieve this.
 *
 * @param {Event} e - Used to prevent default actions and stop event propagation.
 */
function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

/**
 * @description Adds a CSS class named 'highlight' to an HTML element with the class
 * name 'dropArea' when a drag operation enters the drop area.
 *
 * @param {Event} e - Used to capture the event that triggered the function call,
 * typically a drag event.
 */
function highlight(e) {
  console.log("dragenter..dragover");
  dropArea.classList.add('highlight')
}

/**
 * @description Removes the 'highlight' class from the `dropArea` element when a
 * dragleave event occurs.
 *
 * @param {Event} e - Used to track dragleave events, but it is not used in this function.
 */
function unhighlight(e) {
  console.log("dragleave..drop");
  dropArea.classList.remove('highlight')
}

/**
 * @description Handles a file drop event by logging a message, retrieving the dropped
 * files from the event data, and passing them to the `handleFiles` function for processing.
 *
 * @param {any} e - Representing an event object passed to the function, typically
 * an `Event` object.
 */
function handleDrop(e) {
  console.log("drop it");
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles(files)
}

var files;

/**
 * @description Logs the received files to the console, creates a copy of the files
 * array, and updates the text content of an HTML element with the ID "file-name" to
 * display the name of the first file in the array.
 *
 * @param {FileList} files - Used to handle a list of selected files.
 */
function handleFiles(files){
  console.log(files);
  files = [...files]
  document.querySelector("#file-name").textContent = files[0].name;
}

const thisForm = document.getElementById('myForm');
	thisForm.addEventListener('submit', async function (e) {
    // Handles form submission.
    e.preventDefault();

	var input = document.querySelector('input[type="file"]')

	var data = new FormData()
  // update form details properly
	data.append('document', input.files[0])
	data.append('name', 'my name')
	data.append('email', 'my@email.com')
	data.append('remark', 'my remark')


	fetch('https://pyron.pythonanywhere.com/contact/api/v2/', {
		method: 'POST',
		body: data
	})


});
