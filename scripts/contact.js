// ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area");

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)
  document.body.addEventListener(eventName, preventDefaults, false)
});

// Highlight drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false)
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  console.log("dragenter..dragover");
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  console.log("dragleave..drop");
  dropArea.classList.remove('highlight')
}

function handleDrop(e) {
  console.log("drop it");
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles(files)
}

var files;

function handleFiles(files){
  console.log(files);
  files = [...files]
  document.querySelector("#file-name").textContent = files[0].name;
}

const thisForm = document.getElementById('myForm');
	thisForm.addEventListener('submit', async function (e) {
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
