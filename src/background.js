// browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log('Hello from the background')
// })
global.browser = require('webextension-polyfill')