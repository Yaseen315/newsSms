function click(e) {
 chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
     page = tabs[0].url;
   }
);
}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById("mybutton");
  button.addEventListener('click', click);
});
