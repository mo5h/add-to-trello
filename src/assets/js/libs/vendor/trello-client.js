(function () {
  var opts = {'version': 1, 'apiEndpoint': 'https://api.trello.com', 'authEndpoint': 'https://trello.com', 'intentEndpoint': 'https://trello.com'}
  var deferred, isFunction, isReady, ready, waitUntil, wrapper, slice = [].slice
  wrapper = function (a, f, c) {
    var h, e, m, x, z, n, A, p, l, s, t, q, B, y, u, g, v, w; l = c.key; g = c.token; e = c.apiEndpoint; m = c.authEndpoint; A = c.intentEndpoint; v = c.version; z = e + '/' + v + '/'; q = a.location; h = {version: function () { return v }, key: function () { return l }, setKey: function (b) { l = b }, token: function () { return g }, setToken: function (b) { g = b }, rest: function () {
      var b, a, r, d; a = arguments[0]; b = arguments.length >= 2 ? slice.call(arguments, 1) : []; d = B(b); r = d[0]; b = d[1]; c = {url: '' + z + r, type: a, data: {}, dataType: 'json', success: d[2], error: d[3]}; f.support.cors ||
(c.dataType = 'jsonp', a !== 'GET' && (c.type = 'GET', f.extend(c.data, {_method: a}))); l && (c.data.key = l); g && (c.data.token = g); b != null && f.extend(c.data, b); return f.ajax(c)
    }, authorized: function () { return g != null }, deauthorize: function () { g = null; w('token', g) }, authorize: function (b) {
      var k, r, d, e, h; c = f.extend(!0, {type: 'redirect', persist: !0, interactive: !0, scope: {read: !0, write: !1, account: !1}, expiration: '30days'}, b); b = /[&#]?token=([0-9a-f]{64})/; r = function () { if (c.persist && g != null) return w('token', g) }; c.persist && g == null &&
(g = y('token')); g == null && (g = (d = b.exec(q.hash)) != null ? d[1] : void 0); if (this.authorized()) return r(), q.hash = q.hash.replace(b, ''), typeof c.success === 'function' ? c.success() : void 0; if (!c.interactive) return typeof c.error === 'function' ? c.error() : void 0; e = (function () { var b, a; b = c.scope; a = []; for (k in b)(h = b[k]) && a.push(k); return a }()).join(','); switch (c.type) { case 'popup':(function () {
  var b, k, d, f; waitUntil('authorized', (function (b) {
    return function (b) {
      return b ? (r(), typeof c.success === 'function' ? c.success() : void 0) :
typeof c.error === 'function' ? c.error() : void 0
    }
  }(this))); b = a.screenX + (a.innerWidth - 420) / 2; f = a.screenY + (a.innerHeight - 470) / 2; k = (d = /^[a-z]+:\/\/[^\/]*/.exec(q)) != null ? d[0] : void 0; return a.open(x({return_url: k, callback_method: 'postMessage', scope: e, expiration: c.expiration, name: c.name}), 'trello', 'width=420,height=470,left=' + b + ',top=' + f)
})(); break; default:a.location = x({redirect_uri: q.href, callback_method: 'fragment', scope: e, expiration: c.expiration, name: c.name}) }
    }, addCard: function (b, c) {
      var e, d; e = {mode: 'popup',
        source: l || a.location.host}; d = function (c) { var d, k, g; k = function (b) { var d; a.removeEventListener('message', k); try { return d = JSON.parse(b.data), d.success ? c(null, d.card) : c(Error(d.error)) } catch (e) {} }; typeof a.addEventListener === 'function' && a.addEventListener('message', k, !1); d = a.screenX + (a.outerWidth - 500) / 2; g = a.screenY + (a.outerHeight - 600) / 2; return a.open(A + '/add-card?' + f.param(f.extend(e, b)), 'trello', 'width=500,height=600,left=' + d + ',top=' + g) }; return c != null ? d(c) : a.Promise ? new Promise(function (b, a) {
          return d(function (c,
d) { return c ? a(c) : b(d) })
        }) : d(function () {})
    }}; s = ['GET', 'PUT', 'POST', 'DELETE']; e = function (b) { return h[b.toLowerCase()] = function () { return this.rest.apply(this, [b].concat(slice.call(arguments))) } }; n = 0; for (p = s.length; n < p; n++)u = s[n], e(u); h.del = h['delete']; u = 'actions cards checklists boards lists members organizations lists'.split(' '); n = function (b) { return h[b] = {get: function (a, c, d, e) { return h.get(b + '/' + a, c, d, e) }} }; p = 0; for (s = u.length; p < s; p++)e = u[p], n(e); a.Trello = h; x = function (b) {
      return m + '/' + v + '/authorize?' +
f.param(f.extend({response_type: 'token', key: l}, b))
    }; B = function (b) { var a, c, d; c = b[0]; a = b[1]; d = b[2]; b = b[3]; isFunction(a) && (b = d, d = a, a = {}); c = c.replace(/^\/*/, ''); return [c, a, d, b] }; e = function (b) { var a; b.origin === m && ((a = b.source) != null && a.close(), g = b.data != null && b.data.length > 4 ? b.data : null, isReady('authorized', h.authorized())) }; t = a.localStorage; t != null ? (y = function (b) { return t['trello_' + b] }, w = function (b, a) { return a === null ? delete t['trello_' + b] : t['trello_' + b] = a }) : y = w = function () {}; typeof a.addEventListener === 'function' &&
a.addEventListener('message', e, !1)
  }; deferred = {}; ready = {}; waitUntil = function (a, f) { return ready[a] != null ? f(ready[a]) : (deferred[a] != null ? deferred[a] : deferred[a] = []).push(f) }; isReady = function (a, f) { var c, h, e, m; ready[a] = f; if (deferred[a]) for (h = deferred[a], delete deferred[a], e = 0, m = h.length; e < m; e++)c = h[e], c(f) }; isFunction = function (a) { return typeof a === 'function' }; wrapper(window, jQuery, opts)
})()
