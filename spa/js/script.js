"use strict";

// key: 8Rynz75W

// 1. variables (aka bindings), on top of global scope
// const rijks ="https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=8Rynz75W";
const rijksAPI =
  "https://www.rijksmuseum.nl/api/nl/collection?key=8Rynz75W&p=0-n&ps=100&type=schilderij&imgonly=true";
// 2. the Story

getData();

// 3. Functions

function getData() {
  fetch(rijksAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (collection) {
      console.log(collection);
      const list = $("ul");
      for (let i = 0; i < collection.artObjects.length; i++) {
        list.insertAdjacentHTML(
          "beforebegin",
          `<li>
          <h1>${collection.artObjects[i].title}</h1>
          <h2>${collection.artObjects[i].principalOrFirstMaker}, ${collection.artObjects[i].dating.presentingDate}</h2>
          <img src="${collection.artObjects[i].webImage.url}" alt="${collection.artObjects[i].title}"/>
          </li>`
        );
      }
    });

  // functions
  function $(element) {
    return document.querySelector(element);
  }
}
