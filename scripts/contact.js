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
  dropArea.classList.remove('highlight')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles(files)
}

var files;

function handleFiles(files){
  files = [...files]
  document.querySelector("#file-name").textContent = files[0].name;
}

window.onload = () => {
  let submit = document.getElementById("sendButton");
  submit.addEventListener("click", (e) => {

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
      if(res.status == 201){
        success();
      } else {
        failure();
      }
    });
  });
}

function success() {
    $(".notify").toggleClass("active");
    $("#notifyType").toggleClass("success");
    
    setTimeout(function(){
      $(".notify").removeClass("active");
      $("#notifyType").removeClass("success");
    },5000);
}

function failure() {
  $(".notify").addClass("active");
  $("#notifyType").addClass("failure");
  
  setTimeout(function(){
    $(".notify").removeClass("active");
    $("#notifyType").removeClass("failure");
  }, 10000);
}
