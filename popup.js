function click(e) {
  var url = window.location.href;
  console.log(url);
}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById("mybutton");
  button.addEventListener('click', click);
});
