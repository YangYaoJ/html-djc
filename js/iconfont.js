(function(window){var svgSprite='<svg><symbol id="icon-todown" viewBox="0 0 1024 1024"><path d="M764.623601 614.074793l-223.00912 223.00912c-3.837398 3.837398-9.046027 5.996574-14.479783 5.996574-5.423523 0-10.632151-2.159176-14.46955-5.996574l-223.019353-223.019353c-7.992021-7.992021-7.992021-20.957311 0-28.949332s20.957311-7.992021 28.949332 0l188.073446 188.083679 0-604.753497c0-11.307533 9.15859-20.466124 20.466124-20.466124 11.2973 0 20.466124 9.15859 20.466124 20.466124l0 604.753497 188.073446-188.063213c7.992021-7.992021 20.957311-8.002254 28.949332-0.010233C772.615623 593.127715 772.615623 606.082772 764.623601 614.074793z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)