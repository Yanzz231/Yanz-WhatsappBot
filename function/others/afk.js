const _0x43e4a4=_0x1af0;(function(_0x3ca7af,_0x3026dc){const _0x385c77=_0x1af0,_0x4f74ef=_0x3ca7af();while(!![]){try{const _0x50c2ef=parseInt(_0x385c77(0x16a))/0x1+-parseInt(_0x385c77(0x16b))/0x2*(parseInt(_0x385c77(0x168))/0x3)+parseInt(_0x385c77(0x172))/0x4+parseInt(_0x385c77(0x171))/0x5*(parseInt(_0x385c77(0x15d))/0x6)+-parseInt(_0x385c77(0x167))/0x7*(parseInt(_0x385c77(0x161))/0x8)+-parseInt(_0x385c77(0x170))/0x9*(-parseInt(_0x385c77(0x16e))/0xa)+-parseInt(_0x385c77(0x15f))/0xb*(parseInt(_0x385c77(0x163))/0xc);if(_0x50c2ef===_0x3026dc)break;else _0x4f74ef['push'](_0x4f74ef['shift']());}catch(_0x545a65){_0x4f74ef['push'](_0x4f74ef['shift']());}}}(_0x3b4c,0x2d88e));function _0x3b4c(){const _0x4f034e=['255620TXacqO','1202520ZwSkYh','30fsviIO','exports','550wwycgt','splice','328jCzuPy','forEach','72264zMFDOs','./database/database/others/afk.json','reason','keys','8932BRmAxn','3885xryaxM','time','4213ffDuwC','334MfuRlX','push','stringify','40cQszAM','writeFileSync','440388xudjoP'];_0x3b4c=function(){return _0x4f034e;};return _0x3b4c();}function _0x1af0(_0x5c8b86,_0x10e27c){const _0x3b4c6e=_0x3b4c();return _0x1af0=function(_0x1af0bb,_0x402001){_0x1af0bb=_0x1af0bb-0x15d;let _0x1a4b60=_0x3b4c6e[_0x1af0bb];return _0x1a4b60;},_0x1af0(_0x5c8b86,_0x10e27c);}const fs=require('fs'),afk=JSON['parse'](fs['readFileSync'](_0x43e4a4(0x164))),addAfkUser=(_0x4f91be,_0x57be67,_0x34bc85)=>{const _0x2298b7=_0x43e4a4,_0x2d8e76={'id':_0x4f91be,'time':_0x57be67,'reason':_0x34bc85};afk[_0x2298b7(0x16c)](_0x2d8e76),fs[_0x2298b7(0x16f)]('./database/database/others/afk.json',JSON[_0x2298b7(0x16d)](afk,null,0x2));},removeAfkUser=_0x1404ce=>{const _0x27d667=_0x43e4a4;let _0x11ff54=[];for(let _0x2ea6c6 of afk){_0x11ff54[_0x27d667(0x16c)](_0x2ea6c6['id']);}const _0x4702c1=_0x11ff54['indexOf'](_0x1404ce);if(_0x4702c1==-0x1)return;afk[_0x27d667(0x160)](_0x4702c1,0x1),fs[_0x27d667(0x16f)]('./database/database/others/afk.json',JSON[_0x27d667(0x16d)](afk,null,0x2));},checkAfkUser=_0x4bb3d4=>{const _0x5e56ca=_0x43e4a4;let _0x41f58c=![];Object[_0x5e56ca(0x166)](afk)[_0x5e56ca(0x162)](_0x2f76f2=>{afk[_0x2f76f2]['id']===_0x4bb3d4&&(_0x41f58c=_0x2f76f2);});if(_0x41f58c!==![])return afk[_0x41f58c][_0x5e56ca(0x165)];},getAfkReason=_0x34f13e=>{const _0xfa198d=_0x43e4a4;let _0x3096bd=![];Object[_0xfa198d(0x166)](afk)[_0xfa198d(0x162)](_0x40730e=>{afk[_0x40730e]['id']===_0x34f13e&&(_0x3096bd=_0x40730e);});if(_0x3096bd!==![])return afk[_0x3096bd][_0xfa198d(0x165)];},getAfkTime=_0x38294f=>{const _0x1cf10d=_0x43e4a4;let _0x260d81=![];Object[_0x1cf10d(0x166)](afk)['forEach'](_0x54e56f=>{afk[_0x54e56f]['id']===_0x38294f&&(_0x260d81=_0x54e56f);});if(_0x260d81!==![])return afk[_0x260d81][_0x1cf10d(0x169)];},getAfkId=_0x2c28d8=>{const _0x25cdc4=_0x43e4a4;let _0x405c89=![];Object[_0x25cdc4(0x166)](afk)['forEach'](_0x5cb05f=>{afk[_0x5cb05f]['id']===_0x2c28d8&&(_0x405c89=_0x5cb05f);});if(_0x405c89!==![])return afk[_0x405c89]['id'];},getAfkPosition=_0x79e533=>{const _0x46238f=_0x43e4a4;let _0x4b6263=![];return Object[_0x46238f(0x166)](afk)[_0x46238f(0x162)](_0x2e9b90=>{afk[_0x2e9b90]['id']===_0x79e533&&(_0x4b6263=_0x2e9b90);}),_0x4b6263;};module[_0x43e4a4(0x15e)]={'afk':{'getAfkId':getAfkId,'getAfkReason':getAfkReason,'getAfkTime':getAfkTime,'getAfkPosition':getAfkPosition,'addAfkUser':addAfkUser,'checkAfkUser':checkAfkUser,'removeAfkUser':removeAfkUser}};