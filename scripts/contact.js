// ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area");

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  // Adds event listeners to dropArea and document.body elements.
  dropArea.addEventListener(eventName, preventDefaults, false)
  document.body.addEventListener(eventName, preventDefaults, false)
});

// Highlight drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
  // Adds an event listener to the dropArea element.
  dropArea.addEventListener(eventName, highlight, false)
});

['dragleave', 'drop'].forEach(eventName => {
  // Adds an event listener to the dropArea element for 'dragleave' and 'drop' events.
  dropArea.addEventListener(eventName, unhighlight, false)
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

/**
 * @description Prevents the default action of an event from occurring and stops the
 * event from propagating to parent elements.
 *
 * @param {Event} e - Used to prevent default browser actions and stop event propagation.
 */
function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

/**
 * @description Adds a CSS class named 'highlight' to the `dropArea` element when a
 * drag event occurs, indicating that the area is ready to accept a dropped file.
 *
 * @param {Event} e - Used to capture drag events.
 */
function highlight(e) {
  console.log("dragenter..dragover");
  dropArea.classList.add('highlight')
}

/**
 * @description Removes the 'highlight' class from the element with the class name
 * 'dropArea' when triggered, typically in response to a dragleave event.
 *
 * @param {Event} e - Not explicitly used within the function, indicating a potential
 * bug or oversight.
 */
function unhighlight(e) {
  console.log("dragleave..drop");
  dropArea.classList.remove('highlight')
}

/**
 * @description Handles drag-and-drop events by logging a message to the console and
 * retrieving files from the event's data transfer object, then passing them to the
 * `handleFiles` function for processing.
 *
 * @param {DragEvent} e - Used to access data related to the drag-and-drop event.
 */
function handleDrop(e) {
  console.log("drop it");
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles(files)
}

var files;

/**
 * @description Logs the input files to the console, creates a copy of the files
 * array, and updates the text content of an HTML element with the name of the first
 * file in the array.
 *
 * @param {FileList} files - Used to store a list of selected files from the user.
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
