// ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area");

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  // Binds event listeners to DOM elements.
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
 * @description Calls the `preventDefault` and `stopPropagation` methods on a given
 * event object (`e`), preventing default browser actions and stopping event propagation
 * to parent elements.
 *
 * @param {Event} e - Used to prevent default behavior of an event and stop its propagation.
 */
function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

/**
 * @description Adds a CSS class named 'highlight' to the dropArea element when a
 * drag event occurs, specifically when the mouse enters the area designated for
 * dropping files.
 *
 * @param {Event} e - Triggered by a drag event, allowing the function to access event
 * details.
 */
function highlight(e) {
  console.log("dragenter..dragover");
  dropArea.classList.add('highlight')
}

/**
 * @description Removes the CSS class 'highlight' from an element with the class
 * 'dropArea' when an event 'e' occurs.
 *
 * @param {Event} e - Used to reference an event that triggered the function call.
 */
function unhighlight(e) {
  dropArea.classList.remove('highlight')
}

/**
 * @description Processes a file drop event by retrieving the data transfer object
 * and its associated files, then calls the `handleFiles` function to handle the
 * dropped files.
 *
 * @param {DragEvent} e - Used to access data about the drag-and-drop event, specifically
 * the dragged files.
 */
function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles(files)
}

var files;

/**
 * @description Copies the array of files and assigns the name of the first file to
 * an HTML element with the id "file-name".
 *
 * @param {File[]} files - Used to store a list of files selected by the user.
 */
function handleFiles(files){
  files = [...files]
  document.querySelector("#file-name").textContent = files[0].name;
}

window.onload = () => {
  let submit = document.getElementById("sendButton");
  submit.addEventListener("click", (e) => {

    // Handles a form submission.
    let f;
    let input = document.querySelector('input[type="file"]');

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let remark = document.getElementById("remark").value;

    let data = new FormData();

    if(input.files[0]){
      data.append('document', input.files[0]);
    }
    
    data.append('name', name);
    data.append('email', email);
    data.append('remark', remark);

    fetch('https://pyron.pythonanywhere.com/contact/api/v2/', {
      method: 'POST',
      body: data
    }).then(res => {
      // Handles the HTTP response from the server.
      if(res.status == 201){
        success();
      } else {
        failure();
      }
    });
  });
}

/**
 * @description Toggles the "active" class on elements with classes ".notify" and
 * "success" on an element with id "notifyType" to indicate success. After 5 seconds,
 * it removes these classes, hiding the notification.
 */
function success() {
    $(".notify").toggleClass("active");
    $("#notifyType").toggleClass("success");
    
    setTimeout(function(){
      // Removes a class from elements after 5 seconds.
      $(".notify").removeClass("active");
      $("#notifyType").removeClass("success");
    },5000);
}

/**
 * @description Adds a visual notification to the page by applying the "active" and
 * "failure" classes to specified elements, and then removes these classes after a
 * 10-second delay.
 */
function failure() {
  $(".notify").addClass("active");
  $("#notifyType").addClass("failure");
  
  setTimeout(function(){
    // Removes classes from HTML elements after a delay.
    $(".notify").removeClass("active");
    $("#notifyType").removeClass("failure");
  }, 10000);
}
