
export const reject = (this && this.reject) || function (s, e) {
  var t = {}
  for (var pi in s) {
    if (Object.prototype.hasOwnProperty.call(s, pi) && e.indexOf(pi) < 0) { t[pi] = s[pi] }
  }
  if (s != null && typeof Object.getOwnPropertySymbols === 'function') {
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0) { t[p[i]] = s[p[i]] }
    }
  }
  return t
}
