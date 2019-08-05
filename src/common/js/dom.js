export function getData (el, name, val) {
  let prefix = 'data-'
  let attr = prefix + name
  if (val) {
    return el.setAttribute(attr, val)
  } else {
    return el.getAttribute(attr)
  }
}
