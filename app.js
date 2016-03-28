var now = new Date();

function hour() {
  if (now.getHours().toString().length < 2) {
    return "0" + now.getHours();
  } else {
    return now.getHours();
  }
}

function minute() {
  if (now.getMinutes().toString().length < 2) {
    return "0" + now.getMinutes();
  } else {
    return now.getMinutes();
  }
}

var time = document.getElementById("js-time");
time.innerHTML = hour() + ":" + minute();

var box = document.getElementById("js-search-text");
var urlPattern = /^(https?:\/\/)?[^ ]+[.][^ ]+([.][^ ]+)*(\/[^ ]+)?$/i;

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    parseCmd(box.value);
  }
}

function nav(cmd) {
  if (/^(?:(?:https?|ftp):\/\/).*/i.test(cmd)) {
    document.location.href = encodeURIComponent(cmd);
  } else {
    document.location.href = "http://" + encodeURIComponent(cmd);
  }
}

function search(cmd) {
  window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(cmd);
}

function parseCmd(cmd) {
  if (cmd == "bk") {
    document.location.href = "bkmks/"
  }

  else if (urlPattern.test(cmd)) {
    nav(cmd);
  }

  else {
    search(cmd);
  }
}
