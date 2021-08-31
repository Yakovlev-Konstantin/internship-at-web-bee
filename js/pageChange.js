// document.addEventListener("DOMContentLoaded", history.pushState(url, "", ""));

// window.onload = () => {
//   let tabs = document.querySelector(".navbar-nav-2nd");
//   console.log(tabs);

//   tabs.addEventListener("click", function (event) {
//     console.log(tabs);
//     if (!event.target.id) {
//       return;
//     }
//     updateCurrLink(event.target.id);
//   });
// };

// function updateCurrLink(tabId) {
//   console.log(tabs);
//   let currentTab = tabs.querySelector(".highlighted-link");

//   if (currentTab.id != tabId) {
//     currentTab.classList.remove("highlighted-link");
//   }
//   let selectedTab = document.getElementById(tabId);
//   selectedTab.classList.add("highlighted-link");
// }

window.onload = () => {
  if (!sessionStorage.getItem("page")) {
    history.replaceState("activity.html", "", "activity.html");
    makeNewPage("activity.html");
    updateCurrLink("activity.html");
  } else {
    history.replaceState(
      sessionStorage.getItem("page"),
      "",
      sessionStorage.getItem("page")
    );
    makeNewPage(sessionStorage.getItem("page"));
    updateCurrLink(sessionStorage.getItem("page"));
  }

  let tabs = document.querySelectorAll(".navbar-nav-2nd .nav-link");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (event) {
      if (!event.currentTarget.classList.contains("highlighted-link")) {
        // updateCurrLink(event.target);
        document
          .querySelector(".navbar-nav-2nd .highlighted-link")
          .classList.remove("highlighted-link");
        event.currentTarget.classList.add("highlighted-link");
      }
    });
  }
};

// window.addEventListener("popstate", function (e) {
//   console.log("url changed");
// });

window.onpopstate = function () {
  if (window.history.state) {
    makeNewPage(window.history.state);
    updateCurrLink(window.history.state);
  }
};

function updateCurrLink(shortUrl) {
  let tabs = document.querySelectorAll(".navbar-nav-2nd .nav-link");
  let currentTab = document.querySelector(".navbar-nav-2nd .highlighted-link");

  // Polyfill
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      "use strict";
      if (typeof start !== "number") {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }

  if (!currentTab.href.includes(shortUrl)) {
    currentTab.classList.remove("highlighted-link");
    let newTab = document.querySelector(`.navbar-nav-2nd [href="${shortUrl}"]`);
    newTab.classList.add("highlighted-link");
  }
}

function makeNewPage(ShortUrl = "activity.html") {
  // console.log("url changed");
  // if (typeof goToPage.counter == "undefined") {
  //   goToPage.counter = 0;
  // }

  // var a = fetch("file:///C:/YAKOVLEV_KONSTANTIN/local-repository/time.html")
  var a = fetch(ShortUrl)
    .then((promiseResult) => {
      return promiseResult.text();
    })
    .then((responseResult) => {
      document.querySelector("#content").innerHTML = responseResult;
      // if (goToPage.counter < 1 && (ShortUrl == "map.html" || ShortUrl == "./map.html")) {
      if (ShortUrl == "map.html" || ShortUrl == "./map.html") {
        // let tags = document.getElementsByTagName("script");
        // for (let i = tags.length; i >= 0; i--) {
        //   console.log(i);
        //   if (
        //     tags[i] &&
        //     tags[i].getAttribute("src") ==
        //       "https://maps.googleapis.com/maps/api/js?key=AIzaSyAKNTDy-sRIqz7wfDhR2eO1SrlafMKfjfA&callback=initMap&libraries=&v=weekly"
        //   )
        //     tags[i].parentNode.removeChild(tags[i]);
        // }

        let scriptGoogleMapAPI = document.createElement("script");
        scriptGoogleMapAPI.src =
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyAKNTDy-sRIqz7wfDhR2eO1SrlafMKfjfA&callback=initMap&libraries=&v=weekly";
        document.body.append(scriptGoogleMapAPI);
        // ++goToPage.counter;
        // console.log(goToPage.counter);
      }
    });
}

function goToPage(url) {
  event.preventDefault();
  history.pushState(url, "", url);
  makeNewPage(url);
}
