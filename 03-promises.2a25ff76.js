!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r=document.querySelector(".form");function a(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}r.addEventListener("submit",(function(e){e.preventDefault();var n=r.delay,o=r.step,t=r.amount;setTimeout((function(){for(var e=0;e<t.value;e+=1)a(e+1,o.value*e).then((function(e){var n=e.position,o=e.delay;return i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;return i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}),n.value)}))}();
//# sourceMappingURL=03-promises.2a25ff76.js.map
