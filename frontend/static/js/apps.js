function _0x1e30(_0x29a31d,_0x305fb1){const _0x1100e5=_0x1100();return _0x1e30=function(_0x1e3075,_0x18bed7){_0x1e3075=_0x1e3075-0x120;let _0x292765=_0x1100e5[_0x1e3075];return _0x292765;},_0x1e30(_0x29a31d,_0x305fb1);}const _0x8f8d36=_0x1e30;(function(_0xbfcb90,_0x2f4f89){const _0x4261ac=_0x1e30,_0x10c009=_0xbfcb90();while(!![]){try{const _0x541ae6=-parseInt(_0x4261ac(0x124))/0x1*(-parseInt(_0x4261ac(0x159))/0x2)+-parseInt(_0x4261ac(0x12b))/0x3*(-parseInt(_0x4261ac(0x144))/0x4)+parseInt(_0x4261ac(0x12a))/0x5+parseInt(_0x4261ac(0x148))/0x6*(parseInt(_0x4261ac(0x154))/0x7)+-parseInt(_0x4261ac(0x129))/0x8+-parseInt(_0x4261ac(0x15c))/0x9*(-parseInt(_0x4261ac(0x131))/0xa)+-parseInt(_0x4261ac(0x139))/0xb;if(_0x541ae6===_0x2f4f89)break;else _0x10c009['push'](_0x10c009['shift']());}catch(_0x2be747){_0x10c009['push'](_0x10c009['shift']());}}}(_0x1100,0x4f5f6),(window[_0x8f8d36(0x12f)]=function(){const _0xa1c831=_0x8f8d36;document[_0xa1c831(0x140)](_0xa1c831(0x122))[_0xa1c831(0x15a)][_0xa1c831(0x132)]=_0xa1c831(0x143);},window[_0x8f8d36(0x14b)]=function(){setTimeout(function(){const _0xe274ab=_0x1e30;document[_0xe274ab(0x140)](_0xe274ab(0x122))[_0xe274ab(0x15a)][_0xe274ab(0x132)]=_0xe274ab(0x13f);},0x7d0);}));var menu_position,menu_bar=document['querySelector'](_0x8f8d36(0x161)),menu_item=document[_0x8f8d36(0x141)]('.sc-menu-item'),menu_indicator=document['querySelector']('.sc-nav-indicator'),menu_current_item=document['querySelector']('.sc-current');menu_position=menu_current_item[_0x8f8d36(0x125)]-0x10,menu_indicator[_0x8f8d36(0x15a)][_0x8f8d36(0x13d)]=menu_position+'px',menu_bar[_0x8f8d36(0x15a)][_0x8f8d36(0x135)]=menu_position-0x8+'px',menu_item[_0x8f8d36(0x127)](function(_0x364b69){const _0x3effe4=_0x8f8d36;_0x364b69[_0x3effe4(0x155)](_0x3effe4(0x120),function(_0x4fd1f6){const _0x1cd5b4=_0x3effe4;_0x4fd1f6['preventDefault'](),menu_position=this[_0x1cd5b4(0x125)]-0x10,menu_indicator[_0x1cd5b4(0x15a)][_0x1cd5b4(0x13d)]=menu_position+'px',menu_bar['style'][_0x1cd5b4(0x135)]=menu_position-0x8+'px',[..._0x364b69[_0x1cd5b4(0x15f)]['children']]['forEach'](_0x215856=>{const _0x1d11e8=_0x1cd5b4;_0x215856[_0x1d11e8(0x14a)][_0x1d11e8(0x136)]('sc-current');}),_0x364b69[_0x1cd5b4(0x14a)]['add'](_0x1cd5b4(0x162)),this[_0x1cd5b4(0x146)](_0x4fd1f6[_0x1cd5b4(0x137)]);});});import _0x26050b from'./views/Dashboard.js';import _0x127ecb from'./views/pomodoro.js';import _0x31a63c from'./views/settings.js';import _0x2792ba from'./views/404.js';import _0x24b993 from'./views/login.js';import pomodoro from './views/pomodoro.js';
let pathToRegex=_0x55deb0=>RegExp('^'+_0x55deb0[_0x8f8d36(0x12e)](/\//g,'\x5c/')[_0x8f8d36(0x12e)](/:\w+/g,_0x8f8d36(0x15b))+'$'),getParams=_0xc57764=>{const _0x36ad2a=_0x8f8d36;let _0x4f3d8e=_0xc57764['result']['slice'](0x1),_0x436264=Array['from'](_0xc57764[_0x36ad2a(0x152)][_0x36ad2a(0x128)][_0x36ad2a(0x13b)](/:(\w+)/g))[_0x36ad2a(0x13e)](_0x31ec51=>_0x31ec51[0x1]);return Object['fromEntries'](_0x436264[_0x36ad2a(0x13e)]((_0x275a81,_0x14ee0e)=>[_0x275a81,_0x4f3d8e[_0x14ee0e]]));},navigateTo=_0x183c7d=>{const _0x23b9e9=_0x8f8d36;history[_0x23b9e9(0x12d)](null,null,_0x183c7d),router();},router=async()=>{const _0x238a7c=_0x8f8d36;let _0x584b70=[{'path':'/','view':_0x26050b},{'path':_0x238a7c(0x13a),'view':_0x127ecb},{'path':'/settings','view':_0x31a63c},{'path':_0x238a7c(0x12c),'view':_0x24b993},{'path':_0x238a7c(0x149),'view':_0x2792ba}],_0x278470=_0x584b70[_0x238a7c(0x13e)](_0xac4abb=>({'route':_0xac4abb,'result':location[_0x238a7c(0x123)]['match'](pathToRegex(_0xac4abb[_0x238a7c(0x128)]))})),_0x214e83=_0x278470[_0x238a7c(0x14d)](_0x2eefe2=>null!==_0x2eefe2[_0x238a7c(0x133)]),_0x3f4485=location[_0x238a7c(0x123)][_0x238a7c(0x126)](_0x238a7c(0x14c));if(!_0x214e83){if(_0x3f4485)return;_0x214e83={'route':_0x584b70[_0x584b70[_0x238a7c(0x147)]-0x1],'result':[location[_0x238a7c(0x123)]]};}let _0x550dd5=new _0x214e83['route'][(_0x238a7c(0x138))](getParams(_0x214e83));document['querySelector'](_0x238a7c(0x151))[_0x238a7c(0x13c)]=await _0x550dd5['getHtml'](),_0x238a7c(0x142)==typeof _0x550dd5[_0x238a7c(0x130)]&&_0x550dd5[_0x238a7c(0x130)]();};window[_0x8f8d36(0x155)]('popstate',router),document[_0x8f8d36(0x155)](_0x8f8d36(0x15e),()=>{const _0x37ca36=_0x8f8d36;document[_0x37ca36(0x14e)][_0x37ca36(0x155)](_0x37ca36(0x120),_0x537c28=>{const _0x16ae51=_0x37ca36;_0x537c28[_0x16ae51(0x150)][_0x16ae51(0x157)](_0x16ae51(0x158))&&(_0x537c28[_0x16ae51(0x156)](),navigateTo(_0x537c28['target'][_0x16ae51(0x15d)]));}),router();}),localStorage[_0x8f8d36(0x163)](_0x8f8d36(0x14f),_0x8f8d36(0x134));function _0x1100(){const _0x146002=['none','getElementById','querySelectorAll','function','block','40Mtyigt','#back-button','setPointerCapture','length','6qweFJX','/404','classList','onload','/uni','find','body','uni','target','#Mcon','route','back','2022104DXSVcH','addEventListener','preventDefault','matches','[data-link]','2202NfakgJ','style','(.+)','9ABVyOA','href','DOMContentLoaded','parentElement','history','.sc-bottom-bar','sc-current','setItem','click','querySelector','loading','pathname','144qnnEaZ','offsetLeft','startsWith','forEach','path','3442760XwcRqI','1123700nfPUXy','129603EYVZpc','/login','pushState','replace','onbeforeunload','executeScripts','332110kLTJAe','display','result','wtni-bshre','backgroundPosition','remove','pointerId','view','4201142sQCYbr','/pomodoro','matchAll','innerHTML','left','map'];_0x1100=function(){return _0x146002;};return _0x1100();}let backButton=document[_0x8f8d36(0x121)](_0x8f8d36(0x145));backButton['addEventListener'](_0x8f8d36(0x120),()=>{const _0x579a40=_0x8f8d36;window[_0x579a40(0x160)][_0x579a40(0x153)]();}); 