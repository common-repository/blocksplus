!function n(l,c,r){function i(e,o){if(!c[e]){if(!l[e]){var t="function"==typeof require&&require;if(!o&&t)return t(e,!0);if(s)return s(e,!0);throw(o=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",o}t=c[e]={exports:{}},l[e][0].call(t.exports,function(o){return i(l[e][1][o]||o)},t,t.exports,n,l,c,r)}return c[e].exports}for(var s="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(o,e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.faqBlockFront=function(){var t=document.querySelectorAll(".wp-block-blocksplus-faq-block__heading");0<t.length&&t.forEach(function(o){o.nextSibling.style.maxHeight=o.nextSibling.scrollHeight+"px",o.addEventListener("click",function(e){t.forEach(function(o){e.currentTarget===o&&o.classList.toggle("--collapsed")})})})}},{}],2:[function(o,e,t){"use strict";function r(o,e){var t=0;return o==o.changedTouches&&(o=o.changedTouches[0]),e=e.getBoundingClientRect(),t=o.pageX-e.left,t-=window.pageXOffset}function i(o,e,t){e.style.width=o+"px",t.style.left=e.offsetWidth-t.offsetWidth/2+"px"}Object.defineProperty(t,"__esModule",{value:!0}),t.imageComparisonBlockFront=function(){document.querySelectorAll(".wp-block-blocksplus-image-comparison-block").forEach(function(e){var t=e.querySelectorAll(".wp-block-blocksplus-image-comparison-block__image > img"),n=e.querySelector(".wp-block-blocksplus-image-comparison-block__slider"),l=t[0].offsetWidth,c=!1,o=(t[0].offsetHeight<=t[1].offsetHeight?t[1]:t[0]).offsetHeight;e.style.height=t[0].style.height=t[1].style.height=o+"px",t[1].style.width=l/2+"px",n.style.top=o/2-n.offsetHeight/2+"px",n.style.left=l/2-n.offsetWidth/2+"px",n.addEventListener("mousedown",function(o){o.preventDefault(),c=!0}),n.addEventListener("touchstart",function(o){o.preventDefault(),c=!0}),window.addEventListener("mouseup",function(){c=!1}),window.addEventListener("touchend",function(){c=!1}),e.addEventListener("mousemove",function(o){o=r(o,e);if(0==c)return!1;i(o=l<(o=o<0?0:o)?l:o,t[1],n)}),e.addEventListener("touchmove",function(o){o=r(o,e);if(0==c)return!1;i(o=l<(o=o<0?0:o)?l:o,t[1],n)})})}},{}],3:[function(o,e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.modalBlockFront=function(){var o=document.querySelectorAll(".wp-block-blocksplus-modal-block");0<o.length&&o.forEach(function(o){var e=o.querySelector(".wp-block-blocksplus-modal-block__button"),t=o.querySelector(".wp-block-blocksplus-modal-block__modal"),o=o.querySelector(".wp-block-blocksplus-modal-block__close");e.addEventListener("click",function(){t.classList.toggle("--active"),document.body.classList.toggle("--modal")}),o.addEventListener("click",function(){t.classList.remove("--active"),document.body.classList.toggle("--modal")}),t.addEventListener("click",function(o){o.target===t&&(t.classList.remove("--active"),document.body.classList.toggle("--modal"))})})}},{}],4:[function(o,e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.socialShareButtonsBlockFront=function(){var o=document.querySelectorAll(".wp-block-blocksplus-social-share-buttons-block__link");0<o.length&&o.forEach(function(o){o.classList.contains("shareurl")&&o.addEventListener("click",function(o){o.preventDefault(),console.log(o.target),navigator.clipboard.writeText(o.target.getAttribute("href"))})})}},{}],5:[function(o,e,t){"use strict";var n=o("./blocks/faqBlock/faqBlockFront"),l=o("./blocks/imageComparisonBlock/imageComparisonBlockFront"),c=o("./blocks/modalBlock/modalBlockFront"),r=o("./blocks/socialShareButtonsBlock/socialShareButtonsBlockFront");window.addEventListener("load",function(){(0,n.faqBlockFront)(),(0,l.imageComparisonBlockFront)(),(0,c.modalBlockFront)(),(0,r.socialShareButtonsBlockFront)()})},{"./blocks/faqBlock/faqBlockFront":1,"./blocks/imageComparisonBlock/imageComparisonBlockFront":2,"./blocks/modalBlock/modalBlockFront":3,"./blocks/socialShareButtonsBlock/socialShareButtonsBlockFront":4}]},{},[5]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9ibG9ja3MvZmFxQmxvY2svZmFxQmxvY2tGcm9udC5qcyIsImFzc2V0cy9zY3JpcHRzL2Jsb2Nrcy9pbWFnZUNvbXBhcmlzb25CbG9jay9pbWFnZUNvbXBhcmlzb25CbG9ja0Zyb250LmpzIiwiYXNzZXRzL3NjcmlwdHMvYmxvY2tzL21vZGFsQmxvY2svbW9kYWxCbG9ja0Zyb250LmpzIiwiYXNzZXRzL3NjcmlwdHMvYmxvY2tzL3NvY2lhbFNoYXJlQnV0dG9uc0Jsb2NrL3NvY2lhbFNoYXJlQnV0dG9uc0Jsb2NrRnJvbnQuanMiLCJhc3NldHMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbInIiLCJlIiwibiIsInQiLCJvIiwiaSIsImYiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsImZhcUJsb2NrcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJmYXFCbG9jayIsIm5leHRTaWJsaW5nIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImN1cnNvclBvc2l0aW9uIiwiaW1hZ2VDb250YWluZXIiLCJjdXJzb3JQb3NpdGlvblgiLCJjaGFuZ2VkVG91Y2hlcyIsImltYWdlUHJvcGVydGllcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYIiwibGVmdCIsIndpbmRvdyIsInBhZ2VYT2Zmc2V0Iiwic2xpZGVyUG9zaXRpb24iLCJpbWFnZSIsInNsaWRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJpbWFnZUNvbXBhcmlzb25CbG9jayIsImltYWdlVG9Db21wYXJpc29uIiwiY29tcGFyaXNvblNsaWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJ1bml2ZXJzYWxXaWR0aCIsImNsaWNrZWRFdmVudCIsInVuaXZlcnNhbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImhlaWdodCIsInRvcCIsInByZXZlbnREZWZhdWx0IiwibW9kYWxCbG9ja3MiLCJtb2RhbEJsb2NrIiwibW9kYWxCdXR0b24iLCJtb2RhbEJveCIsIm1vZGFsQ2xvc2UiLCJib2R5IiwicmVtb3ZlIiwidGFyZ2V0Iiwic29jaWFsU2hhcmVCdXR0b25zIiwiYnV0dG9uIiwiY29udGFpbnMiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJnZXRBdHRyaWJ1dGUiLCJfZmFxQmxvY2tGcm9udCIsIl9pbWFnZUNvbXBhcmlzb25CbG9ja0Zyb250IiwiX21vZGFsQmxvY2tGcm9udCIsIl9zb2NpYWxTaGFyZUJ1dHRvbnNCbG9ja0Zyb250IiwiZmFxQmxvY2tGcm9udCIsImltYWdlQ29tcGFyaXNvbkJsb2NrRnJvbnQiLCJtb2RhbEJsb2NrRnJvbnQiLCJzb2NpYWxTaGFyZUJ1dHRvbnNCbG9ja0Zyb250Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFNBQUFBLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FBQSxHQUFBLENBQUFKLEVBQUFHLEdBQUEsQ0FBQSxHQUFBLENBQUFKLEVBQUFJLEdBQUEsQ0FBQSxJQUFBRSxFQUFBLFlBQUEsT0FBQUMsU0FBQUEsUUFBQSxHQUFBLENBQUFGLEdBQUFDLEVBQUEsT0FBQUEsRUFBQUYsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBSSxFQUFBLE9BQUFBLEVBQUFKLEVBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQUssRUFBQSxJQUFBQyxNQUFBLHVCQUFBTixFQUFBLEdBQUEsR0FBQU8sS0FBQSxtQkFBQUYsQ0FBQSxDQUFBRyxFQUFBWCxFQUFBRyxHQUFBLENBQUFTLFFBQUEsRUFBQSxFQUFBYixFQUFBSSxHQUFBLEdBQUFVLEtBQUFGLEVB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ckJrRCxFQUFtQjVDLFFBQVEsU0FBQTZDLEdBQ3JCQSxFQUFPckMsVUFBVXNDLFNBQVMsVUFBVSxHQUN0Q0QsRUFBT3ZDLGlCQUFpQixRQUFTLFNBQVV5QyxHQUN6Q0EsRUFBTVosZUFBYyxFQUNwQmEsUUFBUUMsSUFBSUYsRUFBTUosTUFBTSxFQUN4Qk8sVUFBVUMsVUFBVUMsVUFBVUwsRUFBTUosT0FBT1UsYUFBYSxNQUFNLENBQUMsQ0FDakUsQ0FBQyxDQUVMLENBQUMsQ0FFTCxDLHNDQ2pCQSxJQUFBQyxFQUFBcEUsRUFBQSxpQ0FBQSxFQUNBcUUsRUFBQXJFLEVBQUEseURBQUEsRUFDQXNFLEVBQUF0RSxFQUFBLHFDQUFBLEVBQ0F1RSxFQUFBdkUsRUFBQSwrREFBQSxFQUVBZ0MsT0FBT1osaUJBQWlCLE9BQVEsWUFDOUIsRUFBQWdELEVBQUFJLGVBQWEsR0FDYixFQUFBSCxFQUFBSSwyQkFBeUIsR0FDekIsRUFBQUgsRUFBQUksaUJBQWUsR0FDZixFQUFBSCxFQUFBSSw4QkFBNEIsQ0FDOUIsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogRkFRIGFuc3dlciBzaG93L2hpZGUgQ1NTIGNsYXNzIHRvZ2dsZSBmdW5jdGlvbiAob24gZnJvbnQtZW5kKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFxQmxvY2tGcm9udCgpIHtcbiAgY29uc3QgZmFxQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndwLWJsb2NrLWJsb2Nrc3BsdXMtZmFxLWJsb2NrX19oZWFkaW5nJyk7XG5cbiAgaWYgKGZhcUJsb2Nrcy5sZW5ndGggPiAwKSB7XG4gICAgZmFxQmxvY2tzLmZvckVhY2goZmFxQmxvY2sgPT4ge1xuICAgICAgZmFxQmxvY2submV4dFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gZmFxQmxvY2submV4dFNpYmxpbmcuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcblxuICAgICAgZmFxQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIGZhcUJsb2Nrcy5mb3JFYWNoKGZhcUJsb2NrID0+IHtcbiAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09PSBmYXFCbG9jaykge1xuICAgICAgICAgICAgZmFxQmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnLS1jb2xsYXBzZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSIsIi8qKlxuICogQmxvY2sgYXBwZXJhbmNlIGFwcGxpZWQgYnkgSmF2YVNjcmlwdCBhbmQgc2xpZGVyIGZ1bmN0aW5hbGl0eSAoaW1hZ2Ugd2lkdGggY29udHJvbClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltYWdlQ29tcGFyaXNvbkJsb2NrRnJvbnQoKSB7XG4gIGNvbnN0IGltYWdlQ29tcGFyaXNvbkJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cC1ibG9jay1ibG9ja3NwbHVzLWltYWdlLWNvbXBhcmlzb24tYmxvY2snKTtcblxuICAvKipcbiAgICogQXBwbHkgc2FtZSBoZWlnaHQgZm9yIGJsb2NrIGNvbnRhaW5lciBhbmQgaW1hZ2VzIHdpdGhpblxuICAgKi9cbiAgaW1hZ2VDb21wYXJpc29uQmxvY2tzLmZvckVhY2goaW1hZ2VDb21wYXJpc29uQmxvY2sgPT4ge1xuICAgIHZhciBpbWFnZVRvQ29tcGFyaXNvbiA9IGltYWdlQ29tcGFyaXNvbkJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cC1ibG9jay1ibG9ja3NwbHVzLWltYWdlLWNvbXBhcmlzb24tYmxvY2tfX2ltYWdlID4gaW1nJyksXG4gICAgICBjb21wYXJpc29uU2xpZGVyID0gaW1hZ2VDb21wYXJpc29uQmxvY2sucXVlcnlTZWxlY3RvcignLndwLWJsb2NrLWJsb2Nrc3BsdXMtaW1hZ2UtY29tcGFyaXNvbi1ibG9ja19fc2xpZGVyJyksXG4gICAgICB1bml2ZXJzYWxXaWR0aCA9IGltYWdlVG9Db21wYXJpc29uWzBdLm9mZnNldFdpZHRoLFxuICAgICAgdW5pdmVyc2FsSGVpZ2h0LFxuICAgICAgY2xpY2tlZEV2ZW50ID0gZmFsc2U7XG5cbiAgICBpZiAoaW1hZ2VUb0NvbXBhcmlzb25bMF0ub2Zmc2V0SGVpZ2h0IDw9IGltYWdlVG9Db21wYXJpc29uWzFdLm9mZnNldEhlaWdodCkge1xuICAgICAgdW5pdmVyc2FsSGVpZ2h0ID0gaW1hZ2VUb0NvbXBhcmlzb25bMV0ub2Zmc2V0SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml2ZXJzYWxIZWlnaHQgPSBpbWFnZVRvQ29tcGFyaXNvblswXS5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgaW1hZ2VDb21wYXJpc29uQmxvY2suc3R5bGUuaGVpZ2h0ID0gaW1hZ2VUb0NvbXBhcmlzb25bMF0uc3R5bGUuaGVpZ2h0ID0gaW1hZ2VUb0NvbXBhcmlzb25bMV0uc3R5bGUuaGVpZ2h0ID0gdW5pdmVyc2FsSGVpZ2h0ICsgJ3B4JztcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IGluaXRpYWwgd2lkdGggZm9yIGltYWdlIHRvIGNvbXBhcmUgYW5kIGluaXRpYWwgcG9zaXRpb24gZm9yIHNsaWRlciBcbiAgICAgKi9cbiAgICBpbWFnZVRvQ29tcGFyaXNvblsxXS5zdHlsZS53aWR0aCA9ICh1bml2ZXJzYWxXaWR0aCAvIDIpICsgJ3B4JztcbiAgICBjb21wYXJpc29uU2xpZGVyLnN0eWxlLnRvcCA9ICh1bml2ZXJzYWxIZWlnaHQgLyAyKSAtIChjb21wYXJpc29uU2xpZGVyLm9mZnNldEhlaWdodCAvIDIpICsgJ3B4JztcbiAgICBjb21wYXJpc29uU2xpZGVyLnN0eWxlLmxlZnQgPSAodW5pdmVyc2FsV2lkdGggLyAyKSAtIChjb21wYXJpc29uU2xpZGVyLm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IGNsaWNrL3RvdWNoIGV2ZW50XG4gICAgICovXG4gICAgY29tcGFyaXNvblNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xpY2tlZEV2ZW50ID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBjb21wYXJpc29uU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xpY2tlZEV2ZW50ID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgY2xpY2tlZEV2ZW50ID0gZmFsc2U7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuICAgICAgY2xpY2tlZEV2ZW50ID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2Ugc2xpZGVyJ3MgcG9zaXRpb24gYW5kIGltYWdlIHdpZHRoIG9uIHNsaWRlciBkcmFnIGV2ZW50IChjbGljay90b3VjaCBhbmQgbW91c2UgbW92ZSlcbiAgICAgKi9cbiAgICBpbWFnZUNvbXBhcmlzb25CbG9jay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgdmFyIGN1cnNvclBvc2l0aW9uWCA9IGN1cnNvclBvc2l0aW9uKGUsIGltYWdlQ29tcGFyaXNvbkJsb2NrKTtcblxuICAgICAgaWYgKGNsaWNrZWRFdmVudCA9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJzb3JQb3NpdGlvblggPCAwKSB7XG4gICAgICAgIGN1cnNvclBvc2l0aW9uWCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJzb3JQb3NpdGlvblggPiB1bml2ZXJzYWxXaWR0aCkge1xuICAgICAgICBjdXJzb3JQb3NpdGlvblggPSB1bml2ZXJzYWxXaWR0aDtcbiAgICAgIH1cblxuICAgICAgc2xpZGVyUG9zaXRpb24oY3Vyc29yUG9zaXRpb25YLCBpbWFnZVRvQ29tcGFyaXNvblsxXSwgY29tcGFyaXNvblNsaWRlcik7XG4gICAgfSk7XG4gICAgaW1hZ2VDb21wYXJpc29uQmxvY2suYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgIHZhciBjdXJzb3JQb3NpdGlvblggPSBjdXJzb3JQb3NpdGlvbihlLCBpbWFnZUNvbXBhcmlzb25CbG9jayk7XG5cbiAgICAgIGlmIChjbGlja2VkRXZlbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3Vyc29yUG9zaXRpb25YIDwgMCkge1xuICAgICAgICBjdXJzb3JQb3NpdGlvblggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3Vyc29yUG9zaXRpb25YID4gdW5pdmVyc2FsV2lkdGgpIHtcbiAgICAgICAgY3Vyc29yUG9zaXRpb25YID0gdW5pdmVyc2FsV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlclBvc2l0aW9uKGN1cnNvclBvc2l0aW9uWCwgaW1hZ2VUb0NvbXBhcmlzb25bMV0sIGNvbXBhcmlzb25TbGlkZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgY3VycmVudCBtb3VzZSBwb3NpdGlvbiBvbiB0aGUgaW1hZ2VcbiAqIFxuICogQHBhcmFtIHtlfSBlIHRvIHBhc3MgZXZlbnQgZGF0YVxuICogQHBhcmFtIHtpbWFnZUNvbnRhaW5lcn0gaW1hZ2VDb250YWluZXIgdGFyZ2V0IGNvbnRhaW5lclxuICovXG5mdW5jdGlvbiBjdXJzb3JQb3NpdGlvbihlLCBpbWFnZUNvbnRhaW5lcikge1xuICB2YXIgaW1hZ2VQcm9wZXJ0aWVzLCBjdXJzb3JQb3NpdGlvblggPSAwO1xuXG4gIGlmIChlID09IGUuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICBlID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgfVxuXG4gIGltYWdlUHJvcGVydGllcyA9IGltYWdlQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjdXJzb3JQb3NpdGlvblggPSBlLnBhZ2VYIC0gaW1hZ2VQcm9wZXJ0aWVzLmxlZnQ7XG4gIGN1cnNvclBvc2l0aW9uWCA9IGN1cnNvclBvc2l0aW9uWCAtIHdpbmRvdy5wYWdlWE9mZnNldDtcblxuICByZXR1cm4gY3Vyc29yUG9zaXRpb25YO1xufVxuXG4vKipcbiAqIERlZmluZSBzbGlkZXIgcG9zaXRpb24gYmFzZWQgb24gaW1hZ2Ugd2lkdGhcbiAqIFxuICogQHBhcmFtIHtjdXJzb3JQb3NpdGlvblh9IGN1cnNvclBvc2l0aW9uWCBjdXJzb3IgcG9zaXRpb24gd2l0aGluIGNvbnRhaW5lclxuICogQHBhcmFtIHtpbWFnZX0gaW1hZ2UgY29udGFpbmVyIHRvIGNoYW5nZSB3aWR0aCBvZlxuICogQHBhcmFtIHtzbGlkZXJ9IHNsaWRlciBlbGVtZW50IHRvIGNoYW5nZSBwb3NpdGlvbiBvZlxuICovXG5mdW5jdGlvbiBzbGlkZXJQb3NpdGlvbihjdXJzb3JQb3NpdGlvblgsIGltYWdlLCBzbGlkZXIpIHtcbiAgaW1hZ2Uuc3R5bGUud2lkdGggPSBjdXJzb3JQb3NpdGlvblggKyAncHgnO1xuICBzbGlkZXIuc3R5bGUubGVmdCA9IGltYWdlLm9mZnNldFdpZHRoIC0gKHNsaWRlci5vZmZzZXRXaWR0aCAvIDIpICsgJ3B4Jztcbn0iLCIvKipcbiAqIE1vZGFsIGJsb2NrIG9wZW4vY2xvc2Ugb24gZnJvbnQtZW5kIGZ1bmN0aW9uYWxpdHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vZGFsQmxvY2tGcm9udCgpIHtcbiAgY29uc3QgbW9kYWxCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3AtYmxvY2stYmxvY2tzcGx1cy1tb2RhbC1ibG9jaycpO1xuXG4gIGlmIChtb2RhbEJsb2Nrcy5sZW5ndGggPiAwKSB7XG4gICAgbW9kYWxCbG9ja3MuZm9yRWFjaChtb2RhbEJsb2NrID0+IHtcbiAgICAgIGxldCBtb2RhbEJ1dHRvbiA9IG1vZGFsQmxvY2sucXVlcnlTZWxlY3RvcignLndwLWJsb2NrLWJsb2Nrc3BsdXMtbW9kYWwtYmxvY2tfX2J1dHRvbicpLFxuICAgICAgICBtb2RhbEJveCA9IG1vZGFsQmxvY2sucXVlcnlTZWxlY3RvcignLndwLWJsb2NrLWJsb2Nrc3BsdXMtbW9kYWwtYmxvY2tfX21vZGFsJyksXG4gICAgICAgIG1vZGFsQ2xvc2UgPSBtb2RhbEJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy53cC1ibG9jay1ibG9ja3NwbHVzLW1vZGFsLWJsb2NrX19jbG9zZScpO1xuXG4gICAgICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWxCb3guY2xhc3NMaXN0LnRvZ2dsZSgnLS1hY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCctLW1vZGFsJyk7XG4gICAgICB9KTtcblxuICAgICAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWxCb3guY2xhc3NMaXN0LnJlbW92ZSgnLS1hY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCctLW1vZGFsJyk7XG4gICAgICB9KTtcblxuICAgICAgbW9kYWxCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsQm94KSB7XG4gICAgICAgICAgbW9kYWxCb3guY2xhc3NMaXN0LnJlbW92ZSgnLS1hY3RpdmUnKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJy0tbW9kYWwnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0iLCIvKipcbiAqIFNvY2lhbCBTaGFyZSBCdXR0b25zIC0gY29weSBVUkwgYnV0dG9uIGZ1bmN0aW9uYWxpdHkgdG8gY29weSBjdXJyZW50IHBvc3QvcGFnZSB1cmwgb24gY2xpY2sgKG9uIGZyb250LWVuZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvY2lhbFNoYXJlQnV0dG9uc0Jsb2NrRnJvbnQoKSB7XG4gIGNvbnN0IHNvY2lhbFNoYXJlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cC1ibG9jay1ibG9ja3NwbHVzLXNvY2lhbC1zaGFyZS1idXR0b25zLWJsb2NrX19saW5rJyk7XG5cbiAgaWYgKHNvY2lhbFNoYXJlQnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgc29jaWFsU2hhcmVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGFyZXVybCcpKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmYXFCbG9ja0Zyb250IH0gZnJvbSAnLi9ibG9ja3MvZmFxQmxvY2svZmFxQmxvY2tGcm9udCc7XG5pbXBvcnQgeyBpbWFnZUNvbXBhcmlzb25CbG9ja0Zyb250IH0gZnJvbSAnLi9ibG9ja3MvaW1hZ2VDb21wYXJpc29uQmxvY2svaW1hZ2VDb21wYXJpc29uQmxvY2tGcm9udCc7XG5pbXBvcnQgeyBtb2RhbEJsb2NrRnJvbnQgfSBmcm9tICcuL2Jsb2Nrcy9tb2RhbEJsb2NrL21vZGFsQmxvY2tGcm9udCc7XG5pbXBvcnQgeyBzb2NpYWxTaGFyZUJ1dHRvbnNCbG9ja0Zyb250IH0gZnJvbSAnLi9ibG9ja3Mvc29jaWFsU2hhcmVCdXR0b25zQmxvY2svc29jaWFsU2hhcmVCdXR0b25zQmxvY2tGcm9udCc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICBmYXFCbG9ja0Zyb250KCk7XG4gIGltYWdlQ29tcGFyaXNvbkJsb2NrRnJvbnQoKTtcbiAgbW9kYWxCbG9ja0Zyb250KCk7XG4gIHNvY2lhbFNoYXJlQnV0dG9uc0Jsb2NrRnJvbnQoKTtcbn0pO1xuIl19