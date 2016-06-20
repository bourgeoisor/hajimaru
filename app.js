function zeropad(num) {
  return num.toString().length < 2 ? "0" + num : num;
}

var time = document.getElementById("js-time");
function updateClock() {
  var now = new Date();
  time.innerHTML = zeropad(now.getHours()) + ":" + zeropad(now.getMinutes());
  setTimeout(updateClock, 1000);
}
updateClock();

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
  window.location.href = "https://duckduckgo.com/?&atb=v5&q=" + encodeURIComponent(cmd);
}

var alias = {
  "ab": "animebytes.tv",
  "btn": "broadcasthe.net",
  "fb": "facebook.com",
  "gh": "github.com",
  "li": "linkedin.com",
  "moodle": "moodle.mta.ca",
  "nyaa": "nyaa.eu",
  "plex": "plex.tv/web",
  "ptp": "passthepopcorn.me",
  "wcd": "what.cd",
  "yt": "youtube.com/feed/subscriptions",
}

function parseCmd(cmd) {
  if (cmd == "bk") {
    document.location.href = "bkmks/"
  }

  else if (cmd in alias) {
    nav(alias[cmd]);
  }

  else if (urlPattern.test(cmd)) {
    nav(cmd);
  }

  else {
    search(cmd);
  }
}
