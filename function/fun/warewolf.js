const _0xf5bfb0=_0x1961;(function(_0x4ae605,_0x5b9e4e){const _0x3dd15f=_0x1961,_0x7266b6=_0x4ae605();while(!![]){try{const _0x2836d0=-parseInt(_0x3dd15f(0xe2))/0x1+-parseInt(_0x3dd15f(0xbb))/0x2*(-parseInt(_0x3dd15f(0xd4))/0x3)+-parseInt(_0x3dd15f(0xd3))/0x4*(parseInt(_0x3dd15f(0xd1))/0x5)+-parseInt(_0x3dd15f(0xb8))/0x6+parseInt(_0x3dd15f(0xb4))/0x7*(-parseInt(_0x3dd15f(0xbe))/0x8)+parseInt(_0x3dd15f(0xc3))/0x9+-parseInt(_0x3dd15f(0xce))/0xa*(-parseInt(_0x3dd15f(0xb3))/0xb);if(_0x2836d0===_0x5b9e4e)break;else _0x7266b6['push'](_0x7266b6['shift']());}catch(_0x613e55){_0x7266b6['push'](_0x7266b6['shift']());}}}(_0x5812,0xaab96));function _0x1961(_0x3a225a,_0x5790fc){const _0x581266=_0x5812();return _0x1961=function(_0x196132,_0x299620){_0x196132=_0x196132-0xab;let _0x35c80d=_0x581266[_0x196132];return _0x35c80d;},_0x1961(_0x3a225a,_0x5790fc);}const fs=require('fs'),toMs=require('ms'),moment=require(_0xf5bfb0(0xbd)),{connect}=require(_0xf5bfb0(0xad)),data=JSON[_0xf5bfb0(0xe4)](fs[_0xf5bfb0(0xd6)](_0xf5bfb0(0xcc))),addData=(_0x4708de,_0x5ef1ad)=>{const _0x57fc54=_0xf5bfb0;ress={'id':_0x4708de,'owner':_0x5ef1ad,'status':![],'iswin':null,'cooldown':null,'day':0x0,'time':_0x57fc54(0xbf),'player':[],'dead':[],'voting':![],'seer':![],'guradian':[]},data[_0x57fc54(0xba)](ress),fs[_0x57fc54(0xc6)](_0x57fc54(0xcc),JSON[_0x57fc54(0xd7)](data,null,0x2));},addPlayer=(_0x457e3d,_0x212c96)=>{const _0x3357d3=_0xf5bfb0,_0x429caf=data[_0x3357d3(0xc5)](_0x37042c=>_0x37042c['id']===_0x457e3d);if(_0x429caf===-0x1)return![];ress={'id':_0x212c96,'sesi':_0x457e3d,'status':![],'role':![],'effect':[],'vote':0x0,'isdead':![],'isvote':![]},data[_0x429caf]['player'][_0x3357d3(0xba)](ress),fs['writeFileSync'](_0x3357d3(0xcc),JSON['stringify'](data,null,0x2));},checkData=_0x2bd7a0=>{const _0x556157=_0xf5bfb0,_0x3e70a4=data[_0x556157(0xc5)](_0x3d78e3=>_0x3d78e3['id']===_0x2bd7a0);if(_0x3e70a4===-0x1)return![];return!![];},checkSkill=(_0x1aefa8,_0x10ca67)=>{const _0x1e133e=_0xf5bfb0,_0x11bac2=data[_0x1e133e(0xc5)](_0x259d97=>_0x259d97['id']===_0x1aefa8);if(_0x11bac2===-0x1)return![];const _0x27805e=data[_0x11bac2][_0x1e133e(0xca)][_0x1e133e(0xc5)](_0x68c8d3=>_0x68c8d3['id']===_0x10ca67);if(_0x27805e===-0x1)return![];return data[_0x11bac2][_0x1e133e(0xca)][_0x27805e][_0x1e133e(0xe0)];},checkPlayer=(_0x379fa1,_0x40ca78)=>{const _0x27064c=_0xf5bfb0,_0xaefc7=data['findIndex'](_0x247bed=>_0x247bed['id']===_0x379fa1),_0x4a821f=data[_0xaefc7]['player'][_0x27064c(0xc5)](_0x36d32e=>_0x36d32e['id']===_0x40ca78);if(_0x4a821f===-0x1)return!![];return![];},checkPlayerinRole=(_0x14a6ea,_0x42c897)=>{const _0x3e1359=_0xf5bfb0,_0x213efd=data[_0x3e1359(0xc5)](_0x1576cd=>_0x1576cd['id']===_0x14a6ea);if(_0x213efd===-0x1)return!![];db_rol=data[_0x213efd][_0x3e1359(0xca)];const _0x5442cd=db_rol[_0x3e1359(0xb9)](_0x2b46dc=>_0x2b46dc['role']===_0x42c897);return _0x5442cd;},checkAllCmd=_0xb1c7b3=>{const _0x29125f=_0xf5bfb0,_0x36efa3=data['findIndex'](_0x5819a0=>_0x5819a0['id']===_0xb1c7b3),_0x222e61=data[_0x36efa3]['filter'](_0x1d2faa=>_0x1d2faa[_0x29125f(0xe3)]!=_0x29125f(0xcd)&&_0x1d2faa[_0x29125f(0xb7)]!=!![]&&_0x1d2faa[_0x29125f(0xe0)]===!![]);return _0x222e61['length'];},dataPlayer=(_0x54e359,_0x5b7b2b)=>{const _0x746b69=_0xf5bfb0,_0x14210c=data[_0x746b69(0xc5)](_0x2f4e97=>_0x2f4e97['id']===_0x54e359);if(_0x14210c===-0x1)return![];const _0x4956e3=data[_0x14210c][_0x746b69(0xca)]['findIndex'](_0x34a1b6=>_0x34a1b6['id']===_0x5b7b2b);return data[_0x14210c][_0x746b69(0xca)][_0x4956e3];},getPlayer=_0x518680=>{const _0xc0c041=_0xf5bfb0,_0x4bae78=data['findIndex'](_0x332ab2=>_0x332ab2['id']===_0x518680);if(_0x4bae78===-0x1)return![];return data[_0x4bae78][_0xc0c041(0xca)];},totalPlayer=_0x5cc31d=>{const _0x419925=_0xf5bfb0,_0x1becd6=data[_0x419925(0xc5)](_0x59b802=>_0x59b802['id']===_0x5cc31d);if(_0x1becd6===-0x1)return![];return data[_0x1becd6][_0x419925(0xca)]['length'];},checkallData=_0x3a9252=>{const _0x18045a=_0xf5bfb0,_0x9ad97=data[_0x18045a(0xc5)](_0x1c30dc=>_0x1c30dc['id']===_0x3a9252);if(_0x9ad97===-0x1)return![];return data[_0x9ad97];},chatPCPlayer=_0x5c7627=>{const _0x1bdea0=_0xf5bfb0;for(let _0x51b60c=0x0;_0x51b60c<data[_0x1bdea0(0xd5)];_0x51b60c++){for(let _0x37fbb2=0x0;_0x37fbb2<data[_0x51b60c][_0x1bdea0(0xca)]['length'];_0x37fbb2++){if(data[_0x51b60c][_0x1bdea0(0xca)][_0x37fbb2]===undefined)return![];return!![];}}},getWaktu=_0x20bb3a=>{const _0x2ecd62=_0xf5bfb0,_0x4ef717=data[_0x2ecd62(0xc5)](_0x4ef68b=>_0x4ef68b['id']===_0x20bb3a);if(_0x4ef717===-0x1)return![];data[_0x4ef717][_0x2ecd62(0xaf)]=Date[_0x2ecd62(0xcb)]()+toMs(0xa+'m'),fs[_0x2ecd62(0xc6)](_0x2ecd62(0xcc),JSON[_0x2ecd62(0xd7)](data,null,0x2));},getSesi=_0x2db218=>{const _0x384b32=_0xf5bfb0;for(let _0x598fb4=0x0;_0x598fb4<data[_0x384b32(0xd5)];_0x598fb4++){for(let _0x5d946e=0x0;_0x5d946e<data[_0x598fb4][_0x384b32(0xca)]['length'];_0x5d946e++){if(data[_0x598fb4]['player'][_0x5d946e]['id']===_0x2db218)return data[_0x598fb4]['id'];}}},getTrop=_0x47524b=>{const _0x117e79=_0xf5bfb0,_0x48ede7=data[_0x117e79(0xc5)](_0x24f271=>_0x24f271['id']===_0x47524b);if(_0x48ede7===-0x1)return![];if(data[_0x48ede7]['iswin']===![]){let _0x2d7752=[];for(let _0xf39e98=0x0;_0xf39e98<data[_0x48ede7][_0x117e79(0xca)][_0x117e79(0xd5)];_0xf39e98++){return _0x2d7752[_0x117e79(0xba)](data[_0x48ede7][_0x117e79(0xca)][_0xf39e98]);}}else return![];},chatPCData=_0x2225fc=>{const _0x1a0e53=_0xf5bfb0;var _0x541534=[][_0x1a0e53(0xde)][_0x1a0e53(0xcf)]([],data[_0x1a0e53(0xb0)](_0xb5d5fa=>_0xb5d5fa[_0x1a0e53(0xca)]));if(_0x541534['length']<0x1)return![];var _0x34fa62=_0x541534[_0x1a0e53(0xc5)](_0x411619=>_0x411619['id']===_0x2225fc);if(_0x541534[_0x34fa62]===undefined)return![];var _0x92ec3e=data[_0x1a0e53(0xc5)](_0x560b19=>_0x560b19['id']===_0x541534[_0x34fa62][_0x1a0e53(0xc4)]);if(_0x92ec3e===-0x1)return![];return data[_0x92ec3e];},chatPC=_0x21be25=>{const _0x44d18b=_0xf5bfb0;var _0x5718c1=[]['concat']['apply']([],data['map'](_0x14fb43=>_0x14fb43['player'])),_0xca2e3c=_0x5718c1[_0x44d18b(0xd8)](_0x513388=>_0x513388['id']===_0x21be25);return _0xca2e3c;},checkDeath=_0x47c93b=>{const _0x21cc7f=_0xf5bfb0;var _0x7f9f17=[]['concat'][_0x21cc7f(0xcf)]([],data[_0x21cc7f(0xb0)](_0x3e38fa=>_0x3e38fa[_0x21cc7f(0xca)])),_0xd8c70c=_0x7f9f17[_0x21cc7f(0xd8)](_0x4d9d85=>_0x4d9d85['id']===_0x47c93b);if(_0xd8c70c===undefined)return![];return _0xd8c70c[_0x21cc7f(0xb7)]?!![]:![];},checkDeath1=(_0x4776f2,_0x22d24f)=>{const _0x1d4bc4=_0xf5bfb0,_0x34ee36=data[_0x1d4bc4(0xc5)](_0x4a3c4f=>_0x4a3c4f['id']===_0x4776f2);if(_0x34ee36===-0x1)return![];return data[_0x34ee36][_0x1d4bc4(0xca)][_0x22d24f-0x1]['isdead'];},changeStatusPlayer=_0x13f959=>{const _0x129b52=_0xf5bfb0;for(let _0x4b7112=0x0;_0x4b7112<data[_0x129b52(0xd5)];_0x4b7112++){for(let _0x3e677c=0x0;_0x3e677c<data[_0x4b7112][_0x129b52(0xca)][_0x129b52(0xd5)];_0x3e677c++){data[_0x4b7112][_0x129b52(0xca)][_0x3e677c]['id']===_0x13f959&&(data[_0x4b7112]['player'][_0x3e677c][_0x129b52(0xe0)]=!![],fs[_0x129b52(0xc6)](_0x129b52(0xcc),JSON[_0x129b52(0xd7)](data,null,0x2)));}}},wargaTrue=_0x2d6fda=>{const _0x55e9a8=_0xf5bfb0,_0x176217=data[_0x55e9a8(0xc5)](_0x349fb5=>_0x349fb5['id']===_0x2d6fda);if(_0x176217===-0x1)return![];for(let _0x57d6b4=0x0;_0x57d6b4<data[_0x176217][_0x55e9a8(0xca)][_0x55e9a8(0xd5)];_0x57d6b4++){data[_0x176217][_0x55e9a8(0xca)][_0x57d6b4][_0x55e9a8(0xe3)]===_0x55e9a8(0xcd)&&(data[_0x176217]['player'][_0x57d6b4][_0x55e9a8(0xe0)]=!![],fs['writeFileSync'](_0x55e9a8(0xcc),JSON['stringify'](data,null,0x2))),data[_0x176217][_0x55e9a8(0xca)][_0x57d6b4][_0x55e9a8(0xb7)]===!![]&&(data[_0x176217][_0x55e9a8(0xca)][_0x57d6b4][_0x55e9a8(0xe0)]=!![],data[_0x176217][_0x55e9a8(0xca)][_0x57d6b4][_0x55e9a8(0xb2)]=!![],fs['writeFileSync'](_0x55e9a8(0xcc),JSON['stringify'](data,null,0x2)));}},allCommand=_0xb9939=>{const _0x1721db=_0xf5bfb0,_0x2a7e22=data['findIndex'](_0x17b2c1=>_0x17b2c1['id']===_0xb9939);if(_0x2a7e22===-0x1)return![];let _0x56b17c=0x0;for(let _0x1336fb=0x0;_0x1336fb<data[_0x2a7e22]['player'][_0x1721db(0xd5)];_0x1336fb++){data[_0x2a7e22]['player'][_0x1336fb][_0x1721db(0xe0)]===!![]&&(_0x56b17c+=0x1);}return _0x56b17c===data[_0x2a7e22][_0x1721db(0xca)][_0x1721db(0xd5)]?!![]:![];},allCommandPC=_0x1e9399=>{const _0x3118a1=_0xf5bfb0;var _0x4dc8a8=[][_0x3118a1(0xde)]['apply']([],data[_0x3118a1(0xb0)](_0x3071ce=>_0x3071ce['player']));if(_0x4dc8a8[_0x3118a1(0xd5)]<0x1)return![];var _0x1956a5=_0x4dc8a8[_0x3118a1(0xc5)](_0x1f6033=>_0x1f6033['id']===_0x1e9399);if(_0x4dc8a8[_0x1956a5]===undefined)return![];var _0x56fae0=data['findIndex'](_0x48bd5d=>_0x48bd5d['id']===_0x4dc8a8[_0x1956a5][_0x3118a1(0xc4)]);if(_0x56fae0===-0x1)return![];let _0x2252ea=0x0;for(let _0x31661a=0x0;_0x31661a<data[_0x56fae0]['player']['length'];_0x31661a++){data[_0x56fae0][_0x3118a1(0xca)][_0x31661a][_0x3118a1(0xe0)]===!![]&&(_0x2252ea+=0x1);}return _0x2252ea===data[_0x56fae0][_0x3118a1(0xca)][_0x3118a1(0xd5)]?!![]:![];},malemTrue=_0x373006=>{const _0x446d96=_0xf5bfb0,_0x108eb8=data['findIndex'](_0x125daf=>_0x125daf['id']===_0x373006);if(_0x108eb8===-0x1)return![];data[_0x108eb8][_0x446d96(0xb6)]=!![],fs[_0x446d96(0xc6)](_0x446d96(0xcc),JSON['stringify'](data,null,0x2));},allVote=_0x54dbfc=>{const _0x3e1ac2=_0xf5bfb0,_0x2dadfe=data['findIndex'](_0x52349f=>_0x52349f['id']===_0x54dbfc);if(_0x2dadfe===-0x1)return![];let _0x31a55a=0x0;for(let _0x323bfc=0x0;_0x323bfc<data[_0x2dadfe]['player'][_0x3e1ac2(0xd5)];_0x323bfc++){data[_0x2dadfe]['player'][_0x323bfc]['isvote']===!![]&&(_0x31a55a+=0x1);}var _0x186999=data[_0x2dadfe][_0x3e1ac2(0xca)][_0x3e1ac2(0xb9)](_0x5ea103=>_0x5ea103[_0x3e1ac2(0xb2)]===!![])[_0x3e1ac2(0xd5)];if(_0x31a55a===data[_0x2dadfe][_0x3e1ac2(0xca)]['length'])return!![];else return _0x186999===data[_0x2dadfe][_0x3e1ac2(0xca)][_0x3e1ac2(0xd5)]?!![]:![];},allVotePC=_0x2d0c34=>{const _0x2b44a7=_0xf5bfb0;var _0x4aba90=[]['concat'][_0x2b44a7(0xcf)]([],data[_0x2b44a7(0xb0)](_0x3c3c88=>_0x3c3c88[_0x2b44a7(0xca)]));if(_0x4aba90[_0x2b44a7(0xd5)]<0x1)return![];var _0xe1253f=_0x4aba90[_0x2b44a7(0xc5)](_0x4879f0=>_0x4879f0['id']===_0x2d0c34);if(_0x4aba90[_0xe1253f]===undefined)return![];var _0x112fcb=data[_0x2b44a7(0xc5)](_0x3dcba9=>_0x3dcba9['id']===_0x4aba90[_0xe1253f][_0x2b44a7(0xc4)]);if(_0x112fcb===-0x1)return![];let _0x5bb171=0x0;for(let _0x204bfe=0x0;_0x204bfe<data[_0x112fcb][_0x2b44a7(0xca)][_0x2b44a7(0xd5)];_0x204bfe++){data[_0x112fcb][_0x2b44a7(0xca)][_0x204bfe][_0x2b44a7(0xb2)]===!![]&&(_0x5bb171+=0x1);}var _0x482fce=data[_0x112fcb]['player'][_0x2b44a7(0xb9)](_0x58065e=>_0x58065e[_0x2b44a7(0xb2)]===!![])[_0x2b44a7(0xd5)];if(_0x5bb171===data[_0x112fcb]['player'][_0x2b44a7(0xd5)])return!![];else return _0x482fce===data[_0x112fcb]['player']['length']?!![]:![];},clearAllVote=_0x26e6cd=>{const _0xa78082=_0xf5bfb0,_0x198fc4=data[_0xa78082(0xc5)](_0x906dd=>_0x906dd['id']===_0x26e6cd);if(_0x198fc4===-0x1)return![];for(let _0x2b61e1=0x0;_0x2b61e1<data[_0x198fc4][_0xa78082(0xca)][_0xa78082(0xd5)];_0x2b61e1++){data[_0x198fc4]['player'][_0x2b61e1][_0xa78082(0xb5)]=0x0,data[_0x198fc4][_0xa78082(0xca)][_0x2b61e1][_0xa78082(0xb2)]=![],fs[_0xa78082(0xc6)](_0xa78082(0xcc),JSON['stringify'](data,null,0x2));}},clearAllVotePC=_0x5e79f2=>{const _0x4a6e34=_0xf5bfb0;var _0x170f36=[][_0x4a6e34(0xde)]['apply']([],data[_0x4a6e34(0xb0)](_0x4699d7=>_0x4699d7[_0x4a6e34(0xca)]));if(_0x170f36[_0x4a6e34(0xd5)]<0x1)return![];var _0x53f565=_0x170f36[_0x4a6e34(0xc5)](_0x3f67af=>_0x3f67af['id']===_0x5e79f2);if(_0x170f36[_0x53f565]===undefined)return![];var _0x28c796=data[_0x4a6e34(0xc5)](_0x4d962e=>_0x4d962e['id']===_0x170f36[_0x53f565][_0x4a6e34(0xc4)]);if(_0x28c796===-0x1)return![];for(let _0x4673fc=0x0;_0x4673fc<data[_0x28c796][_0x4a6e34(0xca)][_0x4a6e34(0xd5)];_0x4673fc++){data[_0x28c796][_0x4a6e34(0xca)][_0x4673fc][_0x4a6e34(0xb5)]=0x0,data[_0x28c796][_0x4a6e34(0xca)][_0x4673fc]['isvote']=![],fs['writeFileSync'](_0x4a6e34(0xcc),JSON['stringify'](data,null,0x2));}},clearAllSTATUS=_0x1c6603=>{const _0x386818=_0xf5bfb0,_0x28829b=data[_0x386818(0xc5)](_0x169fd8=>_0x169fd8['id']===_0x1c6603);if(_0x28829b===-0x1)return![];for(let _0x5a43ec=0x0;_0x5a43ec<data[_0x28829b][_0x386818(0xca)][_0x386818(0xd5)];_0x5a43ec++){data[_0x28829b][_0x386818(0xca)][_0x5a43ec][_0x386818(0xe0)]=![],data[_0x28829b][_0x386818(0xca)][_0x5a43ec][_0x386818(0xe5)]=[],fs['writeFileSync'](_0x386818(0xcc),JSON[_0x386818(0xd7)](data,null,0x2));}},clearAllPCSTATUS=_0x4ae4a1=>{const _0x372526=_0xf5bfb0,_0x48cf43=[][_0x372526(0xde)][_0x372526(0xcf)]([],data[_0x372526(0xb0)](_0x21eb8a=>_0x21eb8a[_0x372526(0xca)]));if(_0x48cf43[_0x372526(0xd5)]<0x1)return![];const _0x5579b8=_0x48cf43[_0x372526(0xc5)](_0x320687=>_0x320687['id']===_0x4ae4a1);if(_0x48cf43[_0x5579b8]===undefined)return![];const _0x304268=data[_0x372526(0xc5)](_0x190cfe=>_0x190cfe['id']===_0x48cf43[_0x5579b8][_0x372526(0xc4)]);if(_0x304268===-0x1)return![];for(let _0x514c8b=0x0;_0x514c8b<data[_0x304268]['player'][_0x372526(0xd5)];_0x514c8b++){data[_0x304268][_0x372526(0xca)][_0x514c8b]['status']=![],data[_0x304268][_0x372526(0xca)][_0x514c8b][_0x372526(0xe5)]=[],fs['writeFileSync'](_0x372526(0xcc),JSON[_0x372526(0xd7)](data,null,0x2));}},clearAll=_0x56661f=>{const _0x172c6a=_0xf5bfb0,_0x9167ce=data[_0x172c6a(0xc5)](_0x302f98=>_0x302f98['id']===_0x56661f);if(_0x9167ce===-0x1)return![];data[_0x9167ce][_0x172c6a(0xd0)]=[],data[_0x9167ce][_0x172c6a(0xc7)]=![],data[_0x9167ce]['guradian']=![],data[_0x9167ce][_0x172c6a(0xbc)]=![],fs[_0x172c6a(0xc6)](_0x172c6a(0xcc),JSON[_0x172c6a(0xd7)](data,null,0x2));},clearAllPC=_0x323bc6=>{const _0x50a189=_0xf5bfb0,_0x2ad4a5=[]['concat'][_0x50a189(0xcf)]([],data[_0x50a189(0xb0)](_0x2f29d2=>_0x2f29d2[_0x50a189(0xca)]));if(_0x2ad4a5[_0x50a189(0xd5)]<0x1)return![];const _0x9073ae=_0x2ad4a5[_0x50a189(0xc5)](_0x3aad4c=>_0x3aad4c['id']===_0x323bc6);if(_0x2ad4a5[_0x9073ae]===undefined)return![];const _0x57b36d=data[_0x50a189(0xc5)](_0x1a0ae2=>_0x1a0ae2['id']===_0x2ad4a5[_0x9073ae][_0x50a189(0xc4)]);if(_0x57b36d===-0x1)return![];data[_0x57b36d][_0x50a189(0xd0)]=[],data[_0x57b36d]['seer']=![],data[_0x57b36d]['guradian']=![],data[_0x57b36d][_0x50a189(0xbc)]=![],fs[_0x50a189(0xc6)](_0x50a189(0xcc),JSON[_0x50a189(0xd7)](data,null,0x2));},UseSkill=(_0x45e2ce,_0xef9a44)=>{const _0x5c277e=_0xf5bfb0,_0x294f8b=data[_0x5c277e(0xc5)](_0xa572f5=>_0xa572f5['id']===_0x45e2ce);if(_0x294f8b===-0x1)return![];const _0x26b2d2=data[_0x294f8b][_0x5c277e(0xca)][_0x5c277e(0xc5)](_0x1ed762=>_0x1ed762['id']===_0xef9a44);if(_0x26b2d2===-0x1)return![];data[_0x294f8b]['player'][_0x26b2d2][_0x5c277e(0xe0)]=!![],fs['writeFileSync']('./database/ww.json',JSON[_0x5c277e(0xd7)](data,null,0x2));},killPlayer=(_0x23f18c,_0x3058ec)=>{const _0x3532da=_0xf5bfb0,_0x373f64=data[_0x3532da(0xc5)](_0x3985aa=>_0x3985aa['id']===_0x23f18c);if(_0x373f64===-0x1)return![];const _0x2669ac=data[_0x373f64]['player'][_0x3532da(0xc5)](_0x50a312=>_0x50a312['id']===_0x3058ec);data[_0x373f64][_0x3532da(0xca)][_0x2669ac][_0x3532da(0xb7)]=!![],fs[_0x3532da(0xc6)](_0x3532da(0xcc),JSON[_0x3532da(0xd7)](data,null,0x2));},defGuard=_0x507e00=>{const _0x478809=_0xf5bfb0,_0x1e2041=data['findIndex'](_0x44a435=>_0x44a435['id']===_0x507e00);if(_0x1e2041===-0x1)return![];let _0x453ce2=[];for(let _0x18890b=0x0;_0x18890b<data[_0x1e2041][_0x478809(0xd0)][_0x478809(0xd5)];_0x18890b++){for(let _0xb676bc=0x0;_0xb676bc<data[_0x1e2041][_0x478809(0xe1)][_0x478809(0xd5)];_0xb676bc++){data[_0x1e2041][_0x478809(0xdb)][_0xb676bc]['includes'](data[_0x1e2041][_0x478809(0xd0)][_0x18890b])&&_0x453ce2['push'](data[_0x1e2041][_0x478809(0xd0)][_0x18890b]);}}if(_0x453ce2['length']===0x0)return![];else{if(_0x453ce2[_0x478809(0xd5)]>0x0)return _0x453ce2;}},killww=(_0x4f373a,_0x4c370c)=>{const _0x1031d=_0xf5bfb0,_0x32194d=data[_0x1031d(0xc5)](_0x7f6217=>_0x7f6217['id']===_0x4f373a);if(_0x32194d===-0x1)return![];if(data[_0x32194d]['player'][_0x4c370c-0x1][_0x1031d(0xe5)]['includes'](_0x1031d(0xe1)))return;data[_0x32194d][_0x1031d(0xca)][_0x4c370c-0x1][_0x1031d(0xb7)]=!![],fs[_0x1031d(0xc6)]('./database/ww.json',JSON[_0x1031d(0xd7)](data,null,0x2));},getGuard=(_0x56415a,_0x32f004)=>{const _0x13e0ab=_0xf5bfb0,_0x86f8b7=data[_0x13e0ab(0xc5)](_0x4cdb17=>_0x4cdb17['id']===_0x56415a);if(_0x86f8b7===-0x1)return![];return data[_0x86f8b7][_0x13e0ab(0xca)][parseInt(_0x32f004)][_0x13e0ab(0xe5)][_0x13e0ab(0xc9)](_0x13e0ab(0xe1))?!![]:![];},killwerewolf=(_0x337f06,_0x1fe83a)=>{const _0x58ff71=_0xf5bfb0;for(let _0x43de75=0x0;_0x43de75<data[_0x58ff71(0xd5)];_0x43de75++){for(let _0x3caca2=0x0;_0x3caca2<data[_0x43de75][_0x58ff71(0xca)][_0x58ff71(0xd5)];_0x3caca2++){if(data[_0x43de75]['player'][_0x3caca2]['id']===_0x337f06){if(data[_0x43de75]['player'][parseInt(_0x1fe83a)-0x1][_0x58ff71(0xe5)][_0x58ff71(0xc9)](_0x58ff71(0xe1))){}else!data[_0x43de75][_0x58ff71(0xca)][parseInt(_0x1fe83a)-0x1]['effect'][_0x58ff71(0xc9)](_0x58ff71(0xe1))&&(data[_0x43de75][_0x58ff71(0xd0)][_0x58ff71(0xba)](parseInt(_0x1fe83a)),fs[_0x58ff71(0xc6)](_0x58ff71(0xcc),JSON[_0x58ff71(0xd7)](data,null,0x2)));}}}},checkPlayerById=(_0x1dcda0,_0x2ac115)=>{const _0x595a7f=_0xf5bfb0,_0x5645a1=data[_0x595a7f(0xc5)](_0x2c1362=>_0x2c1362['id']===_0x1dcda0);if(_0x5645a1===-0x1)return![];return data[_0x5645a1][_0x595a7f(0xca)][_0x2ac115-0x1];},dreamySeer=(_0x28eb86,_0x5573bf)=>{const _0x2a7afc=_0xf5bfb0;for(let _0x31bfe2=0x0;_0x31bfe2<data[_0x2a7afc(0xd5)];_0x31bfe2++){for(let _0x2c5759=0x0;_0x2c5759<data[_0x31bfe2][_0x2a7afc(0xca)][_0x2a7afc(0xd5)];_0x2c5759++){if(data[_0x31bfe2]['player'][_0x2c5759]['id']===_0x28eb86)return data[_0x31bfe2][_0x2a7afc(0xca)][parseInt(_0x5573bf)-0x1][_0x2a7afc(0xe3)]==='werewolf'&&(data[_0x31bfe2][_0x2a7afc(0xc7)]=!![],fs[_0x2a7afc(0xc6)]('./database/ww.json',JSON['stringify'](data,null,0x2))),data[_0x31bfe2]['player'][parseInt(_0x5573bf)-0x1][_0x2a7afc(0xe3)];}}},sorcerer=(_0x4a48e6,_0x8a4b18)=>{const _0x2c49ce=_0xf5bfb0,_0x5ce9ee=data[_0x2c49ce(0xc5)](_0x406c51=>_0x406c51['id']===_0x4a48e6);if(_0x5ce9ee===-0x1)return![];const _0x41f130=data[_0x5ce9ee][_0x2c49ce(0xca)]['findIndex'](_0x1c8f7c=>_0x1c8f7c['id']===_0x8a4b18);return data[_0x5ce9ee][_0x2c49ce(0xca)][_0x41f130]['effect'][_0x2c49ce(0xba)]('sorcerer'),fs[_0x2c49ce(0xc6)](_0x2c49ce(0xcc),JSON[_0x2c49ce(0xd7)](data,null,0x2)),data[_0x5ce9ee]['player'][_0x41f130][_0x2c49ce(0xe3)];},protectGuardian=(_0x1fa78f,_0x587c98)=>{const _0x1a8533=_0xf5bfb0;for(let _0x128622=0x0;_0x128622<data[_0x1a8533(0xd5)];_0x128622++){for(let _0x5caa91=0x0;_0x5caa91<data[_0x128622]['player'][_0x1a8533(0xd5)];_0x5caa91++){data[_0x128622][_0x1a8533(0xca)][_0x5caa91]['id']===_0x1fa78f&&(data[_0x128622][_0x1a8533(0xca)][parseInt(_0x587c98)-0x1][_0x1a8533(0xe5)][_0x1a8533(0xba)](_0x1a8533(0xe1)),fs[_0x1a8533(0xc6)](_0x1a8533(0xcc),JSON[_0x1a8533(0xd7)](data,null,0x2)));}}},StartingGame=_0x17b4d6=>{const _0x220dcb=_0xf5bfb0,_0x44488f=data[_0x220dcb(0xc5)](_0x4fa6ef=>_0x4fa6ef['id']===_0x17b4d6);if(_0x44488f===-0x1)return![];data[_0x44488f][_0x220dcb(0xe0)]=!![],fs[_0x220dcb(0xc6)](_0x220dcb(0xcc),JSON['stringify'](data,null,0x2));},ExitGame=_0x3a92b2=>{const _0x65414=_0xf5bfb0,_0x282d81=data[_0x65414(0xc5)](_0x497e95=>_0x497e95['id']===_0x3a92b2);if(_0x282d81===-0x1)return![];data[_0x65414(0xdf)](_0x282d81,0x1),fs['writeFileSync'](_0x65414(0xcc),JSON[_0x65414(0xd7)](data,null,0x2));},playerExit=(_0x1ef055,_0xd223df)=>{const _0xee248d=_0xf5bfb0,_0x359c9d=data[_0xee248d(0xc5)](_0x52cd4b=>_0x52cd4b['id']===_0x1ef055);if(_0x359c9d===-0x1)return![];const _0x5654be=data[_0x359c9d][_0xee248d(0xca)]['findIndex'](_0x4e5292=>_0x4e5292['id']===_0xd223df);data[_0x359c9d][_0xee248d(0xca)]['splice'](_0x5654be,0x1),fs[_0xee248d(0xc6)](_0xee248d(0xcc),JSON['stringify'](data,null,0x2));},changeDay=_0x45b9f3=>{const _0x3de855=_0xf5bfb0,_0x3251be=data['findIndex'](_0x8b805b=>_0x8b805b['id']===_0x45b9f3);if(_0x3251be===-0x1)return![];if(data[_0x3251be]['time']===_0x3de855(0xac))data[_0x3251be][_0x3de855(0xb1)]='voting',fs[_0x3de855(0xc6)](_0x3de855(0xcc),JSON[_0x3de855(0xd7)](data,null,0x2));else{if(data[_0x3251be][_0x3de855(0xb1)]===_0x3de855(0xbf))data[_0x3251be][_0x3de855(0xb1)]='pagi',data[_0x3251be][_0x3de855(0xd9)]+=0x1,fs[_0x3de855(0xc6)](_0x3de855(0xcc),JSON[_0x3de855(0xd7)](data,null,0x2));else{if(data[_0x3251be][_0x3de855(0xb1)]==='malem')data[_0x3251be][_0x3de855(0xb1)]=_0x3de855(0xbc),data[_0x3251be][_0x3de855(0xd9)]+=0x1,fs[_0x3de855(0xc6)](_0x3de855(0xcc),JSON[_0x3de855(0xd7)](data,null,0x2));else data[_0x3251be][_0x3de855(0xb1)]===_0x3de855(0xc1)&&(data[_0x3251be][_0x3de855(0xb1)]=_0x3de855(0xc8),fs[_0x3de855(0xc6)]('./database/ww.json',JSON[_0x3de855(0xd7)](data,null,0x2)));}}},dayVoting=_0x372a11=>{const _0x5602b9=_0xf5bfb0,_0x46c65d=data[_0x5602b9(0xc5)](_0x56617e=>_0x56617e['id']===_0x372a11);if(_0x46c65d===-0x1)return![];if(data[_0x46c65d]['time']===_0x5602b9(0xbf))data[_0x46c65d][_0x5602b9(0xb1)]='voting',fs['writeFileSync']('./database/ww.json',JSON['stringify'](data,null,0x2));else{if(data[_0x46c65d]['time']===_0x5602b9(0xc8))data[_0x46c65d][_0x5602b9(0xb1)]='voting',fs[_0x5602b9(0xc6)](_0x5602b9(0xcc),JSON[_0x5602b9(0xd7)](data,null,0x2));else data[_0x46c65d][_0x5602b9(0xb1)]===_0x5602b9(0xac)&&(data[_0x46c65d][_0x5602b9(0xb1)]=_0x5602b9(0xbc),fs[_0x5602b9(0xc6)](_0x5602b9(0xcc),JSON[_0x5602b9(0xd7)](data,null,0x2)));}},dayPengumuman=_0x3b07e3=>{const _0x3ad431=_0xf5bfb0,_0x45cae8=data[_0x3ad431(0xc5)](_0x21cc2c=>_0x21cc2c['id']===_0x3b07e3);if(_0x45cae8===-0x1)return![];data[_0x45cae8][_0x3ad431(0xb1)]=_0x3ad431(0xc1),fs[_0x3ad431(0xc6)]('./database/ww.json',JSON[_0x3ad431(0xd7)](data,null,0x2));},getWinner=_0x435f15=>{const _0x1ee89d=_0xf5bfb0,_0x4bac04=data[_0x1ee89d(0xc5)](_0x32a45f=>_0x32a45f['id']===_0x435f15);if(_0x4bac04===-0x1)return![];var _0x106947=0x0,_0x3a12ad=0x0;for(let _0x3fb563=0x0;_0x3fb563<data[_0x4bac04][_0x1ee89d(0xca)][_0x1ee89d(0xd5)];_0x3fb563++){if(data[_0x4bac04][_0x1ee89d(0xca)][_0x3fb563][_0x1ee89d(0xb7)]===![]){if(data[_0x4bac04][_0x1ee89d(0xca)][_0x3fb563][_0x1ee89d(0xe3)]==='werewolf'||data[_0x4bac04]['player'][_0x3fb563][_0x1ee89d(0xe3)]==='sorcerer')_0x106947+=0x1;else(data[_0x4bac04][_0x1ee89d(0xca)][_0x3fb563][_0x1ee89d(0xe3)]==='warga'||data[_0x4bac04][_0x1ee89d(0xca)][_0x3fb563]['role']===_0x1ee89d(0xe1)||data[_0x4bac04][_0x1ee89d(0xca)][_0x3fb563][_0x1ee89d(0xe3)]==='seer')&&(_0x3a12ad+=0x1);}}if(_0x106947==0x0)return data[_0x4bac04][_0x1ee89d(0xae)]=!![],fs[_0x1ee89d(0xc6)]('./database/ww.json',JSON[_0x1ee89d(0xd7)](data,null,0x2)),!![];else{if(_0x106947==_0x3a12ad)return data[_0x4bac04][_0x1ee89d(0xae)]=![],fs[_0x1ee89d(0xc6)](_0x1ee89d(0xcc),JSON[_0x1ee89d(0xd7)](data,null,0x2)),![];else return _0x3a12ad<_0x106947?(data[_0x4bac04][_0x1ee89d(0xae)]=![],fs['writeFileSync']('./database/ww.json',JSON[_0x1ee89d(0xd7)](data,null,0x2)),![]):0x0;}},getIDVote=(_0x5bae7b,_0x111faf)=>{const _0x19bda5=_0xf5bfb0,_0x3f8230=data[_0x19bda5(0xc5)](_0x2ce260=>_0x2ce260['id']===_0x5bae7b);if(_0x3f8230===-0x1)return![];data[_0x3f8230][_0x19bda5(0xca)][parseInt(_0x111faf)-0x1]['isvote']+=0x1,fs[_0x19bda5(0xc6)]('./database/ww.json',JSON['stringify'](data,null,0x2));},vote=(_0x1c9141,_0x55a806,_0xda596e)=>{const _0x4e6e46=_0xf5bfb0,_0x586957=data[_0x4e6e46(0xc5)](_0x1ad79c=>_0x1ad79c['id']===_0x1c9141);if(_0x586957===-0x1)return![];const _0x50fafa=data[_0x586957][_0x4e6e46(0xca)][_0x4e6e46(0xc5)](_0x10299f=>_0x10299f['id']===_0xda596e);_0x50fafa!==-0x1&&(data[_0x586957][_0x4e6e46(0xca)][_0x50fafa][_0x4e6e46(0xb2)]=!![],fs['writeFileSync'](_0x4e6e46(0xcc),JSON[_0x4e6e46(0xd7)](data,null,0x2))),data[_0x586957][_0x4e6e46(0xca)][parseInt(_0x55a806)-0x1][_0x4e6e46(0xb5)]+=0x1,fs[_0x4e6e46(0xc6)](_0x4e6e46(0xcc),JSON['stringify'](data,null,0x2));},checkVote=(_0x4d5cec,_0x433776)=>{const _0x4f8046=_0xf5bfb0,_0x400c2b=data[_0x4f8046(0xc5)](_0x4bcf14=>_0x4bcf14['id']===_0x4d5cec),_0x192d78=data[_0x400c2b]['player']['findIndex'](_0x5f594b=>_0x5f594b['id']===_0x433776);return data[_0x400c2b]['player'][_0x192d78][_0x4f8046(0xb2)];},voteResult=_0x160a62=>{const _0x5cd361=_0xf5bfb0,_0x4eda35=data[_0x5cd361(0xc5)](_0x226b64=>_0x226b64['id']===_0x160a62);if(_0x4eda35===-0x1)return![];data[_0x4eda35]['player'][_0x5cd361(0xc2)]((_0x3e4afd,_0x48daab)=>_0x3e4afd[_0x5cd361(0xb5)]<_0x48daab[_0x5cd361(0xb5)]?0x1:-0x1);if(data[_0x4eda35][_0x5cd361(0xca)][0x0][_0x5cd361(0xb5)]===0x0)return 0x0;return data[_0x4eda35][_0x5cd361(0xca)][0x0];},voteKill=_0x1e089f=>{const _0x25122a=_0xf5bfb0,_0xd4649c=data[_0x25122a(0xc5)](_0x18f9f2=>_0x18f9f2['id']===_0x1e089f);if(_0xd4649c===-0x1)return![];data[_0xd4649c][_0x25122a(0xca)][_0x25122a(0xc2)]((_0x3b17b7,_0x8d14d4)=>_0x3b17b7[_0x25122a(0xb5)]<_0x8d14d4[_0x25122a(0xb5)]?0x1:-0x1);if(data[_0xd4649c][_0x25122a(0xca)][0x0][_0x25122a(0xb5)]===0x0)return 0x0;data[_0xd4649c][_0x25122a(0xca)][0x0][_0x25122a(0xb7)]=!![],fs['writeFileSync']('./database/ww.json',JSON[_0x25122a(0xd7)](data,null,0x2));},resetVote=_0x269b26=>{const _0x21366a=_0xf5bfb0,_0x4f8fcd=data[_0x21366a(0xc5)](_0x368afb=>_0x368afb['id']===_0x269b26);if(_0x4f8fcd===-0x1)return![];for(let _0x276c4a=0x0;_0x276c4a<data[_0x4f8fcd]['player'][_0x21366a(0xd5)];_0x276c4a++){data[_0x4f8fcd][_0x21366a(0xca)][_0x276c4a][_0x21366a(0xb5)]=0x0,fs['writeFileSync'](_0x21366a(0xcc),JSON[_0x21366a(0xd7)](data,null,0x2));}},voteDone=_0x332372=>{const _0x371bb8=_0xf5bfb0,_0x191744=data[_0x371bb8(0xc5)](_0x48ed05=>_0x48ed05['id']===_0x332372);if(_0x191744===-0x1)return![];data[_0x191744][_0x371bb8(0xbc)]=![],fs[_0x371bb8(0xc6)](_0x371bb8(0xcc),JSON[_0x371bb8(0xd7)](data,null,0x2));},changeRole=(_0x538bdc,_0x4a12a7,_0x5d538f)=>{const _0x51326b=_0xf5bfb0,_0x1d3170=data['findIndex'](_0x80d489=>_0x80d489['id']===_0x538bdc);if(_0x1d3170===-0x1)return![];var _0x119481=data[_0x1d3170][_0x51326b(0xca)][_0x51326b(0xc5)](_0x2b6db5=>_0x2b6db5['id']===_0x4a12a7);if(_0x119481===-0x1)return![];data[_0x1d3170][_0x51326b(0xca)][_0x119481][_0x51326b(0xe3)]=_0x5d538f,fs[_0x51326b(0xc6)]('./database/ww.json',JSON['stringify'](data,null,0x2));},rolegenerator=_0x577982=>{const _0x17226c=_0xf5bfb0,_0x24c596=data['findIndex'](_0x14637a=>_0x14637a['id']===_0x577982);if(_0x24c596===-0x1)return![];if(data[_0x24c596][_0x17226c(0xca)][_0x17226c(0xd5)]==0x5){var _0x4a4bc0=0x2,_0x51951c=0x1,_0x510e73=0x1,_0x11719a=0x1,_0x5e4816=0x0;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}else{if(data[_0x24c596]['player'][_0x17226c(0xd5)]==0x6){var _0x4a4bc0=0x3,_0x51951c=0x1,_0x510e73=0x1,_0x11719a=0x1,_0x5e4816=0x0;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}else{if(data[_0x24c596][_0x17226c(0xca)][_0x17226c(0xd5)]==0x7){var _0x4a4bc0=0x3,_0x51951c=0x1,_0x510e73=0x1,_0x11719a=0x2,_0x5e4816=0x0;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}else{if(data[_0x24c596]['player'][_0x17226c(0xd5)]==0x8){var _0x4a4bc0=0x4,_0x51951c=0x1,_0x510e73=0x1,_0x11719a=0x2,_0x5e4816=0x0;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}else{if(data[_0x24c596]['player'][_0x17226c(0xd5)]==0x9){var _0x4a4bc0=0x4,_0x51951c=0x1,_0x510e73=0x1,_0x11719a=0x2,_0x5e4816=0x1;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}else{if(data[_0x24c596][_0x17226c(0xca)]['length']==0xa){var _0x4a4bc0=0x5,_0x51951c=0x2,_0x510e73=0x1,_0x11719a=0x1,_0x5e4816=0x1;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}else{if(data[_0x24c596][_0x17226c(0xca)][_0x17226c(0xd5)]==0xb){var _0x4a4bc0=0x5,_0x51951c=0x2,_0x510e73=0x1,_0x11719a=0x2,_0x5e4816=0x1;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}else{if(data[_0x24c596][_0x17226c(0xca)][_0x17226c(0xd5)]==0xc){var _0x4a4bc0=0x5,_0x51951c=0x2,_0x510e73=0x2,_0x11719a=0x2,_0x5e4816=0x1;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}else{if(data[_0x24c596][_0x17226c(0xca)][_0x17226c(0xd5)]==0xd){var _0x4a4bc0=0x5,_0x51951c=0x2,_0x510e73=0x2,_0x11719a=0x3,_0x5e4816=0x1;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}else{if(data[_0x24c596]['player'][_0x17226c(0xd5)]==0xe){var _0x4a4bc0=0x5,_0x51951c=0x2,_0x510e73=0x2,_0x11719a=0x3,_0x5e4816=0x2;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}else{if(data[_0x24c596][_0x17226c(0xca)][_0x17226c(0xd5)]==0xf){var _0x4a4bc0=0x5,_0x51951c=0x3,_0x510e73=0x2,_0x11719a=0x3,_0x24357b=0x2;return{'werewolf':_0x51951c,'seer':_0x510e73,'guardian':_0x11719a,'warga':_0x4a4bc0,'sorcere':_0x5e4816};}}}}}}}}}}}},roleGenerator=_0x3853cc=>{const _0x556351=_0xf5bfb0,_0x5ac189=data[_0x556351(0xc5)](_0x2707d5=>_0x2707d5['id']===_0x3853cc);if(_0x5ac189===-0x1)return![];var _0x1237f7=rolegenerator(_0x3853cc),_0x1ef5a3=[_0x556351(0xda),_0x556351(0xc7),_0x556351(0xe1),_0x556351(0xcd),'sorcerer'];for(var _0x33bdb4=0x0;_0x33bdb4<_0x1237f7[_0x556351(0xda)];_0x33bdb4++){var _0x4ebdfd=JSON[_0x556351(0xe4)](fs[_0x556351(0xd6)](_0x556351(0xcc)))[_0x5ac189][_0x556351(0xca)][_0x556351(0xb9)](_0x4ed4a1=>_0x4ed4a1[_0x556351(0xe3)]===![]);if(_0x4ebdfd['length']===0x0)return![];var _0x39a826=Math[_0x556351(0xdd)](Math['random']()*_0x4ebdfd[_0x556351(0xd5)]);changeRole(_0x3853cc,_0x4ebdfd[_0x39a826]['id'],_0x556351(0xda));}for(var _0x33bdb4=0x0;_0x33bdb4<_0x1237f7[_0x556351(0xc7)];_0x33bdb4++){var _0x4ebdfd=JSON[_0x556351(0xe4)](fs[_0x556351(0xd6)](_0x556351(0xcc)))[_0x5ac189]['player'][_0x556351(0xb9)](_0x3ed99a=>_0x3ed99a[_0x556351(0xe3)]===![]);if(_0x4ebdfd[_0x556351(0xd5)]===0x0)return![];var _0x39a826=Math[_0x556351(0xdd)](Math['random']()*_0x4ebdfd[_0x556351(0xd5)]);changeRole(_0x3853cc,_0x4ebdfd[_0x39a826]['id'],'seer');}for(var _0x33bdb4=0x0;_0x33bdb4<_0x1237f7[_0x556351(0xe1)];_0x33bdb4++){var _0x4ebdfd=JSON[_0x556351(0xe4)](fs[_0x556351(0xd6)](_0x556351(0xcc)))[_0x5ac189][_0x556351(0xca)][_0x556351(0xb9)](_0x3d376c=>_0x3d376c[_0x556351(0xe3)]===![]);if(_0x4ebdfd[_0x556351(0xd5)]===0x0)return![];var _0x39a826=Math[_0x556351(0xdd)](Math[_0x556351(0xdc)]()*_0x4ebdfd[_0x556351(0xd5)]);changeRole(_0x3853cc,_0x4ebdfd[_0x39a826]['id'],_0x556351(0xe1));}for(var _0x33bdb4=0x0;_0x33bdb4<_0x1237f7[_0x556351(0xcd)];_0x33bdb4++){var _0x4ebdfd=JSON[_0x556351(0xe4)](fs[_0x556351(0xd6)](_0x556351(0xcc)))[_0x5ac189][_0x556351(0xca)]['filter'](_0x50d02f=>_0x50d02f[_0x556351(0xe3)]===![]);if(_0x4ebdfd['length']===0x0)return![];var _0x39a826=Math[_0x556351(0xdd)](Math[_0x556351(0xdc)]()*_0x4ebdfd['length']);changeRole(_0x3853cc,_0x4ebdfd[_0x39a826]['id'],'warga');}for(var _0x33bdb4=0x0;_0x33bdb4<_0x1237f7[_0x556351(0xab)];_0x33bdb4++){var _0x4ebdfd=JSON[_0x556351(0xe4)](fs[_0x556351(0xd6)]('./database/ww.json'))[_0x5ac189][_0x556351(0xca)][_0x556351(0xb9)](_0x58fc=>_0x58fc['role']===![]);if(_0x4ebdfd[_0x556351(0xd5)]===0x0)return![];var _0x39a826=Math['floor'](Math[_0x556351(0xdc)]()*_0x4ebdfd['length']);changeRole(_0x3853cc,_0x4ebdfd[_0x39a826]['id'],_0x556351(0xc0));}},isOwnerww=(_0x453ddf,_0x3b6bbf)=>{const _0x46a195=data['findIndex'](_0x310f05=>_0x310f05['id']===_0x453ddf);if(_0x46a195===-0x1)return![];return data[_0x46a195]['owner']===_0x3b6bbf?!![]:![];},wwcheckall=_0x17f998=>{const _0x4d1242=_0xf5bfb0,_0x1f5a89=data[_0x4d1242(0xc5)](_0x23d65c=>_0x23d65c['id']===_0x17f998);if(_0x1f5a89===-0x1)return![];let _0x542cb5=0x0;for(let _0x3ea6a9=0x0;_0x3ea6a9<data[_0x1f5a89][_0x4d1242(0xca)][_0x4d1242(0xd5)];_0x3ea6a9++){data[_0x1f5a89]['player'][_0x3ea6a9][_0x4d1242(0xe3)]==='werewolf'&&(_0x542cb5+=0x1);}return _0x542cb5;},sameGuard=_0x1bb1c0=>{const _0x15306a=_0xf5bfb0,_0xc9c3f9=data['findIndex'](_0x313715=>_0x313715['id']===sesi);if(_0xc9c3f9===-0x1)return![];let _0x4d201e=0x0;for(let _0x1a8b1e=0x0;_0x1a8b1e<data[_0xc9c3f9][_0x15306a(0xca)][_0x15306a(0xd5)];_0x1a8b1e++){data[_0xc9c3f9]['player'][_0x1a8b1e][_0x15306a(0xe5)][_0x15306a(0xc9)](_0x15306a(0xe1))&&(_0x4d201e+=0x1);}return _0x4d201e;};module[_0xf5bfb0(0xd2)]={'werewolf':{'addData':addData,'wwcheckall':wwcheckall,'sameGuard':sameGuard,'checkData':checkData,'addPlayer':addPlayer,'UseSkill':UseSkill,'checkSkill':checkSkill,'checkPlayerinRole':checkPlayerinRole,'checkPlayer':checkPlayer,'StartingGame':StartingGame,'ExitGame':ExitGame,'vote':vote,'checkVote':checkVote,'voteResult':voteResult,'resetVote':resetVote,'voteDone':voteDone,'resetVote':resetVote,'playerExit':playerExit,'killPlayer':killPlayer,'changeDay':changeDay,'getWinner':getWinner,'getGuard':getGuard,'isOwnerww':isOwnerww,'dataPlayer':dataPlayer,'getPlayer':getPlayer,'totalPlayer':totalPlayer,'checkallData':checkallData,'chatPCPlayer':chatPCPlayer,'chatPCData':chatPCData,'chatPC':chatPC,'killww':killww,'changeStatusPlayer':changeStatusPlayer,'killwerewolf':killwerewolf,'dreamySeer':dreamySeer,'sorcerer':sorcerer,'protectGuardian':protectGuardian,'getWaktu':getWaktu,'getSesi':getSesi,'getTrop':getTrop,'wargaTrue':wargaTrue,'roleGenerator':roleGenerator,'changeRole':changeRole,'allCommand':allCommand,'allCommandPC':allCommandPC,'clearAll':clearAll,'dayPengumuman':dayPengumuman,'clearAllPC':clearAllPC,'allVote':allVote,'allVotePC':allVotePC,'clearAllVote':clearAllVote,'clearAllVotePC':clearAllVotePC,'clearAllSTATUS':clearAllSTATUS,'clearAllPCSTATUS':clearAllPCSTATUS,'voteKill':voteKill,'checkDeath':checkDeath,'checkPlayerById':checkPlayerById,'dayVoting':dayVoting,'defGuard':defGuard,'checkDeath1':checkDeath1}};function _0x5812(){const _0x1dca99=['status','guardian','953479QbwGJS','role','parse','effect','sorcere','pagi','http2','iswin','cooldown','map','time','isvote','7768233cTdKzm','7XysuCu','vote','malam','isdead','2744610FzmUvn','filter','push','456102tNJtnz','voting','moment','1424680dIxjCU','awal','sorcerer','pengumuman','sort','3362328CsGRQq','sesi','findIndex','writeFileSync','seer','malem','includes','player','now','./database/ww.json','warga','30KyehCH','apply','dead','410roYAXZ','exports','32196mSXIyg','6nspizz','length','readFileSync','stringify','find','day','werewolf','guradian','random','floor','concat','splice'];_0x5812=function(){return _0x1dca99;};return _0x5812();}