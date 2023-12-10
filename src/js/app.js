import Popover from "./widget";

const btn = document.querySelector(".button");
const text = "The Popover Miracle!";
const title = "Showtime:";
const popover = new Popover(btn, title, text);

popover.init();
