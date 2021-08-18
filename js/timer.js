var dateOfEnter = new Date();

var timeSpentOnThePage = setInterval(function () {
  calcSpentTime();
}, 100);

function calcSpentTime() {
  var dateCurrent = new Date();
  var timeDiff = dateCurrent.getTime() - dateOfEnter.getTime();
  document.getElementById("clock1").innerHTML =
    formatMillisecondsToTimeHHMMSS(timeDiff);

  function formatMillisecondsToTimeHHMMSS(ms) {
    var ss = (ms / 1000) % 60;
    ss = Math.trunc(ss);
    if (ss < 10) ss = "0" + ss;

    var mm = (ms / (1000 * 60)) % 60;
    mm = Math.trunc(mm);
    if (mm < 10) mm = "0" + mm;

    var hh = ms / (1000 * 3600);
    hh = Math.trunc(hh);
    if (hh < 10) hh = "0" + hh;

    return hh + ":" + mm + ":" + ss;
  }

  /*function formatDateToTime(date) {
    var hh = date.getHours();
    if (hh < 10) hh = "0" + hh;

    var mm = date.getMinutes();
    if (mm < 10) mm = "0" + mm;

    var ss = date.getSeconds();
    if (ss < 10) ss = "0" + ss;

    return hh + ":" + mm + ":" + ss;
  }*/
}
