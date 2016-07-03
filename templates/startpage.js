function zeropad(num) {
  return num.toString().length < 2 ? "0" + num : num;
}

var time = document.getElementById("js-time");
function updateClock() {
  var now = new Date();
  time.innerHTML = zeropad(now.getHours()) + ":" + zeropad(now.getMinutes());
}
updateClock();
setInterval(updateClock, 1000);

var box = document.getElementById("js-search-text");
var urlPattern = /^(https?:\/\/)?[^ ]+[.][^ ]+([.][^ ]+)*(\/[^ ]+)?$/i;

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    parseCmd(box.value);
  }
}

function nav(cmd) {
  document.location.href = /^(?:(?:https?|ftp):\/\/).*/i.test(cmd) ? encodeURI(cmd) : "http://" + encodeURI(cmd);
}

function search(cmd) {
  window.location.href = "{{ search }}" + encodeURIComponent(cmd);
}

var alias = {
  {%- for key, value in aliases|dictsort %}
  "{{ key }}": "{{ value }}",
  {%- endfor %}
}

function parseCmd(cmd) {
  if (cmd in alias) {
    nav(alias[cmd]);
  }

  else if (urlPattern.test(cmd)) {
    nav(cmd);
  }

  else {
    search(cmd);
  }
}
