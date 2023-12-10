/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/widget.js
/* eslint-disable quotes */
class Popover {
  constructor(elm, title, text) {
    this.elm = elm;
    this.title = title;
    this.text = text;
    this.onClick = this.onClick.bind(this);
  }
  get popoverHTML() {
    return `<div class="popover">
              <h3 class="popover-title">${this.title}</h3>
              <p class="popover-text">${this.text}</p>
            </div>`;
  }
  init() {
    this.elm.addEventListener("click", this.onClick);
  }
  onClick(e) {
    e.preventDefault();
    let popover = this.elm.querySelector(".popover");
    if (popover) {
      popover.remove();
      return;
    }
    this.elm.insertAdjacentHTML("beforeend", this.popoverHTML);
    popover = this.elm.querySelector(".popover");
    const {
      left,
      top
    } = this.elm.getBoundingClientRect();
    popover.style.width = `${this.elm.offsetWidth + 30}px`;
    popover.style.left = `${left - 15}px`;
    popover.style.top = `${top - popover.offsetHeight - 10}px`;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const btn = document.querySelector(".button");
const app_text = "The Popover Miracle!";
const title = "Showtime:";
const popover = new Popover(btn, title, app_text);
popover.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;