var _0x5bf57e=_0x48d2;function _0x48d2(_0x592889,_0xe50d30){var _0x2411f7=_0x2411();return _0x48d2=function(_0x48d20a,_0x12baf1){_0x48d20a=_0x48d20a-0x128;var _0x101e88=_0x2411f7[_0x48d20a];return _0x101e88;},_0x48d2(_0x592889,_0xe50d30);}(function(_0x503121,_0x28a0ae){var _0x168a06=_0x48d2,_0x5cc785=_0x503121();while(!![]){try{var _0x4f9bdc=parseInt(_0x168a06(0x174))/0x1*(parseInt(_0x168a06(0x13d))/0x2)+-parseInt(_0x168a06(0x14f))/0x3*(parseInt(_0x168a06(0x156))/0x4)+parseInt(_0x168a06(0x17a))/0x5+-parseInt(_0x168a06(0x175))/0x6+parseInt(_0x168a06(0x152))/0x7*(parseInt(_0x168a06(0x168))/0x8)+parseInt(_0x168a06(0x173))/0x9*(parseInt(_0x168a06(0x14b))/0xa)+-parseInt(_0x168a06(0x12a))/0xb;if(_0x4f9bdc===_0x28a0ae)break;else _0x5cc785['push'](_0x5cc785['shift']());}catch(_0x38c3d7){_0x5cc785['push'](_0x5cc785['shift']());}}}(_0x2411,0x23ce1));const request=require('request'),escapeStringRegexp=require(_0x5bf57e(0x157)),async=require(_0x5bf57e(0x17f)),fs=require('fs'),MultiStream=require(_0x5bf57e(0x17c)),fakeUa=require(_0x5bf57e(0x170)),GOOGLE_TTS_URL=_0x5bf57e(0x146),MAX_CHARS=0x64,LANGUAGES={'af':_0x5bf57e(0x163),'sq':_0x5bf57e(0x16f),'ar':_0x5bf57e(0x134),'hy':'Armenian','ca':_0x5bf57e(0x179),'zh':_0x5bf57e(0x138),'zh-cn':_0x5bf57e(0x12f),'zh-tw':_0x5bf57e(0x147),'zh-yue':_0x5bf57e(0x155),'hr':_0x5bf57e(0x159),'cs':'Czech','da':'Danish','nl':_0x5bf57e(0x176),'en':'English','en-au':_0x5bf57e(0x16c),'en-uk':_0x5bf57e(0x15b),'en-us':_0x5bf57e(0x13a),'eo':_0x5bf57e(0x151),'fi':_0x5bf57e(0x144),'fr':'French','de':_0x5bf57e(0x12e),'el':_0x5bf57e(0x15c),'ht':'Haitian\x20Creole','hi':'Hindi','hu':_0x5bf57e(0x15d),'is':'Icelandic','id':_0x5bf57e(0x150),'it':_0x5bf57e(0x133),'ja':'Japanese','ko':_0x5bf57e(0x177),'la':_0x5bf57e(0x16a),'lv':'Latvian','mk':_0x5bf57e(0x17b),'no':_0x5bf57e(0x136),'pl':_0x5bf57e(0x149),'pt':_0x5bf57e(0x16d),'pt-br':'Portuguese\x20(Brazil)','ro':'Romanian','ru':_0x5bf57e(0x158),'sr':_0x5bf57e(0x131),'sk':'Slovak','es':_0x5bf57e(0x14a),'es-es':'Spanish\x20(Spain)','es-us':_0x5bf57e(0x145),'sw':_0x5bf57e(0x142),'sv':_0x5bf57e(0x14c),'ta':'Tamil','th':_0x5bf57e(0x139),'tr':_0x5bf57e(0x15f),'vi':_0x5bf57e(0x141),'cy':_0x5bf57e(0x15e)};function Text2Speech(_0x564cc2,_0x1bb1af){var _0x382639=_0x5bf57e,_0x154551=_0x564cc2||'en',_0x4eac03=_0x1bb1af||![];_0x154551=_0x154551[_0x382639(0x128)]();if(!LANGUAGES[_0x154551])throw new Error(_0x382639(0x165)+_0x154551);var _0x3d78cf=getArgsFactory(_0x154551);return{'tokenize':tokenize,'createServer':_0x2985cb=>createServer(_0x3d78cf,_0x2985cb),'stream':_0xc621fd=>stream(_0x3d78cf,_0xc621fd),'save':(_0x359e5f,_0x50fa88,_0x4312f1)=>save(_0x3d78cf,_0x359e5f,_0x50fa88,_0x4312f1)};}function save(_0x5e487b,_0x483d75,_0x549643,_0x543337){var _0x17be27=_0x5bf57e,_0x32d317=tokenize(_0x549643),_0x470d69=_0x32d317[_0x17be27(0x13c)];async[_0x17be27(0x140)](_0x32d317,function(_0x52eff8,_0x3e2c39){var _0x1d92bf=_0x17be27,_0x74eb5=_0x32d317[_0x1d92bf(0x17e)](_0x52eff8),_0x1590ba=getHeader(),_0x334ab9=_0x5e487b(_0x52eff8,_0x74eb5,_0x470d69),_0x3ba896=GOOGLE_TTS_URL+_0x334ab9,_0x29af6e=fs[_0x1d92bf(0x130)](_0x483d75,{'flags':_0x74eb5>0x0?'a':'w'});request({'uri':_0x3ba896,'headers':_0x1590ba,'method':_0x1d92bf(0x13e)})[_0x1d92bf(0x14e)](_0x29af6e),_0x29af6e['on']('finish',_0x3e2c39),_0x29af6e['on']('error',_0x3e2c39);},_0x543337);}function stream(_0x19469b,_0x535371){var _0x3e6b36=_0x5bf57e,_0x3a46ce=tokenize(_0x535371),_0x570378=_0x3a46ce['length'];return MultiStream(_0x3a46ce[_0x3e6b36(0x143)](function(_0x75d095,_0xe698a3){var _0xfe7771=_0x3e6b36,_0x2cdf09=getHeader(),_0x474fd2=_0x19469b(_0x75d095,_0xe698a3,_0x570378),_0x55fc78=GOOGLE_TTS_URL+_0x474fd2;return request({'uri':_0x55fc78,'headers':_0x2cdf09,'method':_0xfe7771(0x13e)});}));}function getHeader(){var _0x174c77={'User-Agent':fakeUa()};return _0x174c77;}function getArgsFactory(_0x23138d){return function(_0x213774,_0x4a94f7,_0x2d264d){var _0x665f82=_0x48d2,_0x170759=_0x213774[_0x665f82(0x13c)],_0x2fe601=encodeURIComponent(_0x213774),_0x3312e9=_0x23138d||'en';return _0x665f82(0x160)+_0x3312e9+_0x665f82(0x167)+_0x2fe601+'&total='+_0x2d264d+_0x665f82(0x153)+_0x4a94f7+_0x665f82(0x135)+_0x170759;};}function tokenize(_0x3af875){var _0x365cc0=_0x5bf57e,_0x174312=[];if(!_0x3af875)throw new Error(_0x365cc0(0x148));var _0x2965a3=_0x365cc0(0x172),_0x521397=_0x2965a3[_0x365cc0(0x12d)]('')['map'](function(_0x4ce0e0){return escapeStringRegexp(_0x4ce0e0);}),_0x3dc33e=_0x521397[_0x365cc0(0x16e)]('|'),_0x10e9e3=_0x3af875[_0x365cc0(0x12d)](new RegExp(_0x3dc33e));_0x10e9e3=_0x10e9e3[_0x365cc0(0x178)](_0x122dfb=>_0x122dfb[_0x365cc0(0x13c)]>0x0);var _0x5f2bb6=[],_0x15db9f=0x0;for(let _0x4cfd35 of _0x10e9e3){!_0x5f2bb6[_0x15db9f]&&(_0x5f2bb6[_0x15db9f]=''),_0x5f2bb6[_0x15db9f][_0x365cc0(0x13c)]+_0x4cfd35[_0x365cc0(0x13c)]<MAX_CHARS?_0x5f2bb6[_0x15db9f]+='\x20'+_0x4cfd35:(_0x15db9f++,_0x5f2bb6[_0x15db9f]=_0x4cfd35);}return _0x5f2bb6[0x0]=_0x5f2bb6[0x0][_0x365cc0(0x169)](0x1),_0x5f2bb6;}function _0x2411(){var _0x5448e0=['Afrikaans','writeHead','Language\x20not\x20supported:\x20','headers','&q=','893736nDDRUi','substr','Latin','http','English\x20(Australia)','Portuguese','join','Albanian','fake-useragent','url','¡!()[]¶;|°•—«»≤≥«»‹›\x0a\x20','2556rwZsVQ','236161VGfIHC','650436lLkGIM','Dutch','Korean','filter','Catalan','333700FfIcnw','Macedonian','multistream','host','indexOf','async','toLowerCase','lang','2067472bTxVvx','?text=your+text','Missing\x20text.\x20Please\x20try:\x20','split','German','Chinese\x20(Mandarin/China)','createWriteStream','Serbian','listen','Italian','Arabic','&client=tw-ob&textlen=','Norwegian','text','Chinese','Thai','English\x20(United\x20States)','stringify','length','2LuSUCy','GET','log','eachSeries','Vietnamese','Swahili','map','Finnish','Spanish\x20(United\x20States)','http://translate.google.com/translate_tts','Chinese\x20(Mandarin/Taiwan)','No\x20text\x20to\x20speak','Polish','Spanish','1910ABtERJ','Swedish','audio/mpeg','pipe','29478ayqyTZ','Indonesian','Esperanto','14fFKppx','&idx=','createServer','Chinese\x20(Cantonese)','56AHvKtQ','escape-string-regexp','Russian','Croatian','exports','English\x20(United\x20Kingdom)','Greek','Hungarian','Welsh','Turkish','?ie=UTF-8&tl=','end','parse'];_0x2411=function(){return _0x5448e0;};return _0x2411();}function createServer(_0xa3711c,_0x6e70d7){var _0x50b603=_0x5bf57e,_0x25ccba=require(_0x50b603(0x16b)),_0x1865e3=require('url'),_0x5dcee9=_0x25ccba[_0x50b603(0x154)](function(_0x24f48d,_0x143844){var _0x4c12b3=_0x50b603,_0x1f688a=_0x1865e3[_0x4c12b3(0x162)](_0x24f48d[_0x4c12b3(0x171)],!![])['query'],_0xfff580=_0xa3711c;_0x1f688a&&_0x1f688a[_0x4c12b3(0x129)]&&LANGUAGES[_0x1f688a['lang']]&&(_0xfff580=getArgsFactory(_0x1f688a[_0x4c12b3(0x129)])),_0x1f688a&&_0x1f688a[_0x4c12b3(0x137)]?(_0x143844[_0x4c12b3(0x164)](0xc8,{'Content-Type':_0x4c12b3(0x14d)}),stream(_0xfff580,_0x1f688a[_0x4c12b3(0x137)])[_0x4c12b3(0x14e)](_0x143844)):(console[_0x4c12b3(0x13f)](_0x24f48d[_0x4c12b3(0x166)]),_0x143844[_0x4c12b3(0x164)](0xc8,{'Content-Type':'application/json'}),_0x143844[_0x4c12b3(0x161)](JSON[_0x4c12b3(0x13b)]({'code':-0x1,'message':_0x4c12b3(0x12c)+_0x24f48d['headers'][_0x4c12b3(0x17d)]+_0x4c12b3(0x12b)})));});_0x5dcee9[_0x50b603(0x132)](_0x6e70d7);}module[_0x5bf57e(0x15a)]=Text2Speech;