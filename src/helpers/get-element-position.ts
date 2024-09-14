export function getElementPosition(element: HTMLAnchorElement) {
  return {
    top: element.offsetTop,
    left: element.offsetLeft,
    width: element.offsetWidth,
    height: element.offsetHeight,
  };
}
