"use strict";var BrowserHooq;BrowserHooq=function(){function BrowserHooq(condition){this.ie=null!==condition.ie?condition.ie:!1,this.chrome=null!==condition.chrome?condition.chrome:!1,this.firefox=null!==condition.firefox?condition.firefox:!1,this.safari=null!==condition.safari?condition.safari:!1,this.opera=null!==condition.opera?condition.opera:!1}var _ua,_appversion,_emptyObject;return _ua=navigator.userAgent||window.navigator.userAgent,_appversion=navigator.appVersion||window.navigator.appVersion,_emptyObject={browser:!1,version:!1,os:!1},BrowserHooq.prototype.render=function(tagId,callback){var wrapper=void 0;return(wrapper=document.getElementById(tagId))?wrapper.style.display="block":(wrapper=document.createElement("DIV"),wrapper.id="browserhooq",wrapper.className="modal",wrapper.innerHTML=browserHooqTmpl,callback.call(),document.body.insertBefore(wrapper,document.body.firstChild)),!0},BrowserHooq.prototype.supported=function(){var ie=this.isIE(),safari=this.isSafari(),firefox=this.isFF(),chrome=this.isChrome(),opera=this.isOpera();return ie.browser&&(document.documentElement.className+="ie"+ie.version,this.ie&&ie.version===this.ie)?ie:this.safari&&safari.browser&&safari.version>=this.safari?safari:this.chrome&&chrome.browser&&chrome.version>=this.chrome?chrome:this.firefox&&firefox.browser&&firefox.version>=this.firefox?firefox:this.opera&&opera.browser&&opera.version>=this.opera?opera:!1},BrowserHooq.prototype.current=function(){var ie=this.isIE(),safari=this.isSafari(),firefox=this.isFF(),chrome=this.isChrome(),opera=this.isOpera();return ie.browser?ie:safari.browser?safari:chrome.browser?chrome:firefox.browser?firefox:this.opera&&opera.browser?opera:void 0},BrowserHooq.prototype.isWindows=function(){return new RegExp("Win","i").test(_ua)},BrowserHooq.prototype.isLinux=function(){return new RegExp("Linux","i").test(_ua)},BrowserHooq.prototype.isMac=function(){return new RegExp("Mac OS","i").test(_ua)},BrowserHooq.prototype.isAndroid=function(){return new RegExp("android","i").test(_ua)},BrowserHooq.prototype.isiOS=function(){var iPhone=new RegExp("iphone","i").test(_ua),iPad=new RegExp("ipad","i").test(_ua);return iPhone||iPad},BrowserHooq.prototype.isWPhone=function(){var windowsPhone=new RegExp("windows phone","i").test(_ua),windowsTouch=new RegExp("msie.*touch","i").test(_ua);return windowsPhone||windowsTouch},BrowserHooq.prototype.getOS=function(){return this.isWindows()?"windows":this.isLinux()?"linux":this.isMac()?"mac":this.isAndroid()?"android":this.isiOS()?"ios":this.isWPhone()?"wphone":!1},BrowserHooq.prototype.isIE=function(){var browser,version=void 0;return browser="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,(browser=browser)?(version=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(_ua),version=version?version:new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(_ua),version?{browser:"ie",version:parseFloat(RegExp.$1),os:this.getOS()}:_emptyObject):_emptyObject},BrowserHooq.prototype.isChrome=function(){var version=void 0;return window.chrome&&window.chrome.webstore?(version=_appversion.match(/chrome\/(\d+)\./i),version?{browser:"chrome",version:parseInt(version[1],10),os:this.getOS()}:_emptyObject):_emptyObject},BrowserHooq.prototype.isFF=function(){var version=void 0;return"MozAppearance"in document.documentElement.style?(version=_ua.match(/firefox\/(\d+(\.\d+)?)/i),version?{browser:"firefox",version:parseInt(version[1],10),os:this.getOS()}:_emptyObject):_emptyObject},BrowserHooq.prototype.isOpera=function(){var version=void 0;return window.opera||/opera|opr/i.test(navigator.userAgent)?(version=_ua.match(/opera\/(\d+(\.\d+)?)/i),version?{browser:"opera",version:parseInt(version[1],10),os:this.getOS()}:_emptyObject):_emptyObject},BrowserHooq.prototype.isSafari=function(){var version=void 0;return/constructor/i.test(window.HTMLElement)?(version=_ua.match(/version\/(\d+(\.\d+)?)/i),version?{browser:"safari",version:parseInt(version[1],10),os:this.getOS()}:_emptyObject):_emptyObject},BrowserHooq}();