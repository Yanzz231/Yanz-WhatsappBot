function _0x5094(_0x41dc88,_0x4e8959){const _0x1a3f96=_0x1a3f();return _0x5094=function(_0x5094fd,_0xb2043b){_0x5094fd=_0x5094fd-0x103;let _0x5b2dca=_0x1a3f96[_0x5094fd];return _0x5b2dca;},_0x5094(_0x41dc88,_0x4e8959);}function _0x1a3f(){const _0x581949=['stringify','floor','push','includes','3768458LdTPwj','1676104nfpIMY','time','5781480stxpNu','random','23107riyXxh','21441410AncKEN','2922561IBxGUr','findIndex','1398vLqxBL','5aNlsbQ','./database/database/fun/lucky.json','tujuan','11ZkmduL','exports','status','62895617056310@s.whatsapp.net','125134ixLpcY','18yopQOu','writeFileSync','now','parse'];_0x1a3f=function(){return _0x581949;};return _0x1a3f();}const _0x1384e0=_0x5094;(function(_0x3daa06,_0x54ce42){const _0x5ef554=_0x5094,_0x4f8cc9=_0x3daa06();while(!![]){try{const _0x53de06=-parseInt(_0x5ef554(0x119))/0x1+-parseInt(_0x5ef554(0x108))/0x2+-parseInt(_0x5ef554(0x10f))/0x3+parseInt(_0x5ef554(0x10b))/0x4*(parseInt(_0x5ef554(0x112))/0x5)+parseInt(_0x5ef554(0x111))/0x6*(parseInt(_0x5ef554(0x10d))/0x7)+-parseInt(_0x5ef554(0x109))/0x8*(parseInt(_0x5ef554(0x11a))/0x9)+parseInt(_0x5ef554(0x10e))/0xa*(parseInt(_0x5ef554(0x115))/0xb);if(_0x53de06===_0x54ce42)break;else _0x4f8cc9['push'](_0x4f8cc9['shift']());}catch(_0x1a962d){_0x4f8cc9['push'](_0x4f8cc9['shift']());}}}(_0x1a3f,0xe96a4));const fs=require('fs'),lucky=JSON[_0x1384e0(0x103)](fs['readFileSync'](_0x1384e0(0x113))),ownerNumber=['6282177800211@s.whatsapp.net',_0x1384e0(0x118)],addLuckyPlayer=_0x200fe6=>{const _0x3512b1=_0x1384e0,_0x5b97d5={'id':_0x200fe6,'status':![],'time':{'status':![],'time':null},'tujuan':0x14,'now':0x0};lucky[_0x3512b1(0x106)](_0x5b97d5),fs[_0x3512b1(0x11b)]('./database/database/fun/lucky.json',JSON[_0x3512b1(0x104)](lucky,null,0x2));},checkLucky=_0x429587=>{const _0x18543c=_0x1384e0,_0x11e14e=lucky[_0x18543c(0x110)](_0x338ab7=>_0x338ab7['id']===_0x429587);return _0x11e14e===-0x1?(addLuckyPlayer(_0x429587),undefined):lucky[_0x11e14e];},addLuckyNow=(_0x163a64,_0x3acf72,_0x138148)=>{const _0x1752f8=_0x1384e0,_0x2cb3ef=lucky[_0x1752f8(0x110)](_0x40f51e=>_0x40f51e['id']===_0x138148),_0x45be51=lucky[_0x1752f8(0x110)](_0x228a9a=>_0x228a9a['id']===_0x163a64);if(_0x2cb3ef===-0x1)return addLuckyPlayer(_0x138148),undefined;else{if(lucky[_0x45be51]['time']['status']===!![])return![];const _0x903f79=Math[_0x1752f8(0x105)](Math['random']()*0x4)+0x1,_0x35c492=Math[_0x1752f8(0x105)](Math[_0x1752f8(0x10c)]()*0x28)+0xa;return lucky[_0x2cb3ef]['now']+=_0x903f79+Math[_0x1752f8(0x105)](Math[_0x1752f8(0x10c)]()*0x3)+0x1,lucky[_0x2cb3ef][_0x1752f8(0x114)]=_0x35c492,lucky[_0x2cb3ef][_0x1752f8(0x11c)]<0x1&&(lucky[_0x2cb3ef]['now']=0x1,fs[_0x1752f8(0x11b)](_0x1752f8(0x113),JSON[_0x1752f8(0x104)](lucky,null,0x2))),!ownerNumber[_0x1752f8(0x107)](_0x163a64)&&(lucky[_0x45be51][_0x1752f8(0x10a)]['status']=!![],lucky[_0x45be51]['time'][_0x1752f8(0x10a)]=_0x3acf72),fs[_0x1752f8(0x11b)](_0x1752f8(0x113),JSON[_0x1752f8(0x104)](lucky,null,0x2)),lucky[_0x2cb3ef]['now']>lucky[_0x2cb3ef][_0x1752f8(0x114)]&&(lucky[_0x2cb3ef][_0x1752f8(0x117)]=!![],lucky[_0x2cb3ef][_0x1752f8(0x11c)]=0x0,fs['writeFileSync']('./database/database/fun/lucky.json',JSON['stringify'](lucky,null,0x2))),{'now':_0x903f79,'tujuan':_0x35c492};}},addCurseNow=(_0x34f31d,_0x230969,_0xbe17de)=>{const _0x3825ae=_0x1384e0,_0x5c35be=lucky[_0x3825ae(0x110)](_0x236e5e=>_0x236e5e['id']===_0xbe17de),_0x4a8d3e=lucky[_0x3825ae(0x110)](_0x18f3ff=>_0x18f3ff['id']===_0x34f31d);if(_0x5c35be===-0x1)return addLuckyPlayer(_0xbe17de),undefined;else{if(lucky[_0x4a8d3e]['time']['status']===!![])return![];const _0x542f1f=Math[_0x3825ae(0x105)](Math[_0x3825ae(0x10c)]()*-0x5),_0x50b876=Math[_0x3825ae(0x105)](Math[_0x3825ae(0x10c)]()*0x28)+0xa;return lucky[_0x5c35be][_0x3825ae(0x11c)]+=_0x542f1f,lucky[_0x5c35be][_0x3825ae(0x114)]=_0x50b876,!ownerNumber[_0x3825ae(0x107)](_0x34f31d)&&(lucky[_0x4a8d3e]['time'][_0x3825ae(0x117)]=!![],lucky[_0x4a8d3e][_0x3825ae(0x10a)][_0x3825ae(0x10a)]=_0x230969),fs[_0x3825ae(0x11b)](_0x3825ae(0x113),JSON[_0x3825ae(0x104)](lucky,null,0x2)),{'now':_0x542f1f,'tujuan':_0x50b876};}},RemoveTime=_0x40da88=>{const _0x5a6373=_0x1384e0,_0x4017fd=lucky[_0x5a6373(0x110)](_0xdbc581=>_0xdbc581['id']===_0x40da88);if(_0x4017fd===-0x1)return addLuckyNow(_0x40da88),undefined;else lucky[_0x4017fd][_0x5a6373(0x10a)][_0x5a6373(0x117)]=![],lucky[_0x4017fd]['time'][_0x5a6373(0x10a)]=null,fs[_0x5a6373(0x11b)]('./database/database/fun/lucky.json',JSON[_0x5a6373(0x104)](lucky,null,0x2));},RemoveNow=_0x5a246d=>{const _0x2b1a4a=_0x1384e0,_0x3c7dfe=lucky[_0x2b1a4a(0x110)](_0x66089a=>_0x66089a['id']===_0x5a246d);if(_0x3c7dfe===-0x1)return addLuckyNow(_0x5a246d),undefined;else lucky[_0x3c7dfe][_0x2b1a4a(0x117)]=![],lucky[_0x3c7dfe][_0x2b1a4a(0x11c)]=0x0,lucky[_0x3c7dfe][_0x2b1a4a(0x114)]=Math[_0x2b1a4a(0x105)](Math['random']()*0x28)+0xa,fs['writeFileSync']('./database/database/fun/lucky.json',JSON[_0x2b1a4a(0x104)](lucky,null,0x2));};module[_0x1384e0(0x116)]={'pray':{'addLuckyNow':addLuckyNow,'addCurseNow':addCurseNow,'RemoveTime':RemoveTime,'checkLucky':checkLucky,'addLuckyPlayer':addLuckyPlayer,'RemoveNow':RemoveNow}};