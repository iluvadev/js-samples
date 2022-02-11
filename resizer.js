(()=>{const e=document.getElementById("iframe");window.addEventListener("message",(t=>{(e=>e.data&&"resizeMessage"===e.data.type)(t)&&(e.style.height=t.data.rect.height+50+"px")})),new ResizeObserver((e=>{window.devsite.framebox.AutoSizeClient.updateSize()})).observe(e)})();
//# sourceMappingURL=resizer.js.map
