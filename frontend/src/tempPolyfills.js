/**
 * Additionnal polyfill configuration needed to run correctely enzyme
 */
const requestAnimationFrame = global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
}
 
export default requestAnimationFrame;
