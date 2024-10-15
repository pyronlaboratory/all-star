// ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area");

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  // Adds event listeners to elements.
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
 * @description Prevents the default action of an event from occurring and stops the
 * event from propagating further up the DOM tree, preventing it from triggering any
 * parent event listeners.
 *
 * @param {Event} e - Used to manipulate the event being triggered.
 */
function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

/**
 * @description Adds a CSS class named 'highlight' to the dropArea element, which
 * likely triggers a visual effect to highlight the area where files can be dropped.
 *
 * @param {Event} e - Used to pass event information from the event source to the
 * event handler.
 */
function highlight(e) {
  console.log("dragenter..dragover");
  dropArea.classList.add('highlight')
}

/**
 * @description Removes the 'highlight' class from the dropArea element, indicating
 * that a dragged item has left the area.
 *
 * @param {Event} e - Used to represent the event that triggered the function call.
 */
function unhighlight(e) {
  console.log("dragleave..drop");
  dropArea.classList.remove('highlight')
}

/**
 * @description Handles a file drop event on a web page. It logs a message to the
 * console, retrieves the dropped files from the event data, and then calls the
 * `handleFiles` function to process the files.
 *
 * @param {{DragEvent | UIEvent | Event} e - Triggered by a drag-and-drop event,
 * typically from a file or other data being dropped onto the element.
 */
function handleDrop(e) {
  console.log("drop it");
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles(files)
}

var files;

/**
 * @description Logs the received file list to the console, creates a copy of the
 * original file list, and updates the text content of the HTML element with the id
 * "file-name" to display the name of the first file in the list.
 *
 * @param {File[]} files - Used to store a list of file objects selected by the user.
 */
function handleFiles(files){
  console.log(files);
  files = [...files]
  document.querySelector("#file-name").textContent = files[0].name;
}

const thisForm = document.getElementById('myForm');
	thisForm.addEventListener('submit', async function (e) {
    // Handles a form submission event.
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
