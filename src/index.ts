import Hello from "./Hello";
import ReactHook from "./ReactHook";

function helloWorld() {
  console.log("hello world");
}

const exports = {
  ReactHook,
  Hello,
}

export default exports;

globalThis.exports = exports;
