function _0x23ee(_0x259ea5,_0x510cfb){const _0x4f4643=_0x4f46();return _0x23ee=function(_0x23eeec,_0x564cf4){_0x23eeec=_0x23eeec-0x1d3;let _0x3cf7df=_0x4f4643[_0x23eeec];return _0x3cf7df;},_0x23ee(_0x259ea5,_0x510cfb);}const _0x4c6348=_0x23ee;function _0x4f46(){const _0x345ecd=['essen','level','48qQkpFq','writeFileSync','4878012OAWarf','744996GPrlJn','4qvSEui','readFileSync','84FXPZpO','1ShBztA','163750weLvwb','efenc','forEach','parse','gain','duration','./database/database/item/power.json','exports','205467kuLuhj','exp','376479nTToPN','1122718Wqnmat','80yNgCKM','stringify','1050181tOVYFq','keys'];_0x4f46=function(){return _0x345ecd;};return _0x4f46();}(function(_0x5e48a6,_0x47c042){const _0x1b4b42=_0x23ee,_0x552eb3=_0x5e48a6();while(!![]){try{const _0x5be4ee=parseInt(_0x1b4b42(0x1d7))/0x1*(parseInt(_0x1b4b42(0x1e3))/0x2)+parseInt(_0x1b4b42(0x1e0))/0x3*(parseInt(_0x1b4b42(0x1d4))/0x4)+-parseInt(_0x1b4b42(0x1d8))/0x5+parseInt(_0x1b4b42(0x1ec))/0x6+-parseInt(_0x1b4b42(0x1d3))/0x7*(parseInt(_0x1b4b42(0x1ea))/0x8)+parseInt(_0x1b4b42(0x1e2))/0x9*(parseInt(_0x1b4b42(0x1e4))/0xa)+-parseInt(_0x1b4b42(0x1e6))/0xb*(parseInt(_0x1b4b42(0x1d6))/0xc);if(_0x5be4ee===_0x47c042)break;else _0x552eb3['push'](_0x552eb3['shift']());}catch(_0x1a9920){_0x552eb3['push'](_0x552eb3['shift']());}}}(_0x4f46,0x6ae7b));const fs=require('fs'),power=JSON[_0x4c6348(0x1db)](fs[_0x4c6348(0x1d5)](_0x4c6348(0x1de))),addPower=_0x572018=>{const _0x3c6586=_0x4c6348,_0x3d77c4={'id':_0x572018,'essen':0x0,'efenc':{'level':0x1,'xp':0x0},'gain':{'level':0x1,'xp':0x0},'exp':{'level':0x1,'xp':0x0},'duration':{'level':0x1,'xp':0x0}};power['push'](_0x3d77c4),fs[_0x3c6586(0x1eb)](_0x3c6586(0x1de),JSON[_0x3c6586(0x1e5)](power,null,0x2));},checkEssen=_0x38b4af=>{const _0x3494a5=_0x4c6348;let _0x4b9f9e=![];Object[_0x3494a5(0x1e7)](power)[_0x3494a5(0x1da)](_0x5ea529=>{power[_0x5ea529]['id']===_0x38b4af&&(_0x4b9f9e=_0x5ea529);});if(_0x4b9f9e!==![])return power[_0x4b9f9e]['essen'];},checkEfenc=_0x3f67e8=>{const _0x20bb86=_0x4c6348;let _0x33b2d9=![];Object[_0x20bb86(0x1e7)](power)[_0x20bb86(0x1da)](_0x3aab00=>{power[_0x3aab00]['id']===_0x3f67e8&&(_0x33b2d9=_0x3aab00);});if(_0x33b2d9!==![])return power[_0x33b2d9][_0x20bb86(0x1d9)];},checkGain=_0x3adca=>{const _0x516966=_0x4c6348;let _0x256033=![];Object[_0x516966(0x1e7)](power)[_0x516966(0x1da)](_0x540157=>{power[_0x540157]['id']===_0x3adca&&(_0x256033=_0x540157);});if(_0x256033!==![])return power[_0x256033]['gain'];},checkExp=_0x38b67f=>{const _0x2ca4fd=_0x4c6348;let _0xd9673c=![];Object[_0x2ca4fd(0x1e7)](power)[_0x2ca4fd(0x1da)](_0x576eef=>{power[_0x576eef]['id']===_0x38b67f&&(_0xd9673c=_0x576eef);});if(_0xd9673c!==![])return power[_0xd9673c][_0x2ca4fd(0x1e1)];},checkDuration=_0x362091=>{const _0x29a2fa=_0x4c6348;let _0x4cf50a=![];Object['keys'](power)[_0x29a2fa(0x1da)](_0x3524a3=>{power[_0x3524a3]['id']===_0x362091&&(_0x4cf50a=_0x3524a3);});if(_0x4cf50a!==![])return power[_0x4cf50a][_0x29a2fa(0x1dd)];},addEssen=(_0x5287d6,_0x4ba20f)=>{const _0x57528c=_0x4c6348;let _0x5ab855=![];Object[_0x57528c(0x1e7)](power)['forEach'](_0x24ffa9=>{power[_0x24ffa9]['id']===_0x5287d6&&(_0x5ab855=_0x24ffa9);}),_0x5ab855!==![]&&(power[_0x5ab855][_0x57528c(0x1e8)]+=parseInt(_0x4ba20f),fs[_0x57528c(0x1eb)](_0x57528c(0x1de),JSON['stringify'](power,null,0x2)));},removeEssen=(_0x2a15f8,_0x1a3cd4)=>{const _0x2c3bf2=_0x4c6348;let _0x5a5d11=![];Object['keys'](power)['forEach'](_0x47bb0c=>{power[_0x47bb0c]['id']===_0x2a15f8&&(_0x5a5d11=_0x47bb0c);}),_0x5a5d11!==![]&&(power[_0x5a5d11]['essen']-=parseInt(_0x1a3cd4),fs[_0x2c3bf2(0x1eb)](_0x2c3bf2(0x1de),JSON['stringify'](power,null,0x2)));},addDurationLevel=(_0x25a77d,_0x179043)=>{const _0x2fb4cd=_0x4c6348;let _0x58eb26=![];Object['keys'](power)['forEach'](_0x447c20=>{power[_0x447c20]['id']===_0x25a77d&&(_0x58eb26=_0x447c20);}),_0x58eb26!==![]&&(power[_0x58eb26][_0x2fb4cd(0x1dd)]['level']+=parseInt(_0x179043),fs[_0x2fb4cd(0x1eb)]('./database/database/item/power.json',JSON[_0x2fb4cd(0x1e5)](power,null,0x2)));},addDurationXp=(_0xa1134e,_0xd9ce21)=>{const _0x444632=_0x4c6348;let _0x39a920=![];Object[_0x444632(0x1e7)](power)[_0x444632(0x1da)](_0x496a7d=>{power[_0x496a7d]['id']===_0xa1134e&&(_0x39a920=_0x496a7d);}),_0x39a920!==![]&&(power[_0x39a920][_0x444632(0x1dd)]['xp']+=parseInt(_0xd9ce21),fs[_0x444632(0x1eb)]('./database/database/item/power.json',JSON['stringify'](power,null,0x2)));},addEfenLevel=(_0x4622e5,_0x26f633)=>{const _0x4df41d=_0x4c6348;let _0x19bf3e=![];Object[_0x4df41d(0x1e7)](power)[_0x4df41d(0x1da)](_0x5d5864=>{power[_0x5d5864]['id']===_0x4622e5&&(_0x19bf3e=_0x5d5864);}),_0x19bf3e!==![]&&(power[_0x19bf3e][_0x4df41d(0x1d9)]['level']+=parseInt(_0x26f633),fs[_0x4df41d(0x1eb)](_0x4df41d(0x1de),JSON[_0x4df41d(0x1e5)](power,null,0x2)));},addEfenXp=(_0x28f80c,_0x5d87c5)=>{const _0x439870=_0x4c6348;let _0x5f57ff=![];Object[_0x439870(0x1e7)](power)[_0x439870(0x1da)](_0x71d310=>{power[_0x71d310]['id']===_0x28f80c&&(_0x5f57ff=_0x71d310);}),_0x5f57ff!==![]&&(power[_0x5f57ff][_0x439870(0x1d9)]['xp']+=parseInt(_0x5d87c5),fs['writeFileSync'](_0x439870(0x1de),JSON[_0x439870(0x1e5)](power,null,0x2)));},addExpLevel=(_0x126dd3,_0xd6cd13)=>{const _0x123da8=_0x4c6348;let _0x4e4b2f=![];Object[_0x123da8(0x1e7)](power)[_0x123da8(0x1da)](_0x39285f=>{power[_0x39285f]['id']===_0x126dd3&&(_0x4e4b2f=_0x39285f);}),_0x4e4b2f!==![]&&(power[_0x4e4b2f][_0x123da8(0x1e1)][_0x123da8(0x1e9)]+=parseInt(_0xd6cd13),fs[_0x123da8(0x1eb)](_0x123da8(0x1de),JSON[_0x123da8(0x1e5)](power,null,0x2)));},addExpXp=(_0x590e57,_0x450dbd)=>{const _0x56d341=_0x4c6348;let _0x372c04=![];Object[_0x56d341(0x1e7)](power)['forEach'](_0x39323d=>{power[_0x39323d]['id']===_0x590e57&&(_0x372c04=_0x39323d);}),_0x372c04!==![]&&(power[_0x372c04][_0x56d341(0x1e1)]['xp']+=parseInt(_0x450dbd),fs[_0x56d341(0x1eb)]('./database/database/item/power.json',JSON['stringify'](power,null,0x2)));},addGainLevel=(_0x3e9f58,_0xe264aa)=>{const _0x5bfe68=_0x4c6348;let _0x3d6959=![];Object[_0x5bfe68(0x1e7)](power)[_0x5bfe68(0x1da)](_0x31e268=>{power[_0x31e268]['id']===_0x3e9f58&&(_0x3d6959=_0x31e268);}),_0x3d6959!==![]&&(power[_0x3d6959][_0x5bfe68(0x1dc)][_0x5bfe68(0x1e9)]+=parseInt(_0xe264aa),fs[_0x5bfe68(0x1eb)](_0x5bfe68(0x1de),JSON[_0x5bfe68(0x1e5)](power,null,0x2)));},addGainXp=(_0x4956b0,_0x5a7038)=>{const _0x3b9b22=_0x4c6348;let _0x435c40=![];Object[_0x3b9b22(0x1e7)](power)[_0x3b9b22(0x1da)](_0x231ee3=>{power[_0x231ee3]['id']===_0x4956b0&&(_0x435c40=_0x231ee3);}),_0x435c40!==![]&&(power[_0x435c40][_0x3b9b22(0x1dc)]['xp']+=parseInt(_0x5a7038),fs[_0x3b9b22(0x1eb)](_0x3b9b22(0x1de),JSON[_0x3b9b22(0x1e5)](power,null,0x2)));};module[_0x4c6348(0x1df)]={'power':{'addPower':addPower,'checkEssen':checkEssen,'checkEfenc':checkEfenc,'checkDuration':checkDuration,'checkExp':checkExp,'checkGain':checkGain,'addEfenLevel':addEfenLevel,'addEfenXp':addEfenXp,'addGainLevel':addGainLevel,'addGainXp':addGainXp,'addDurationLevel':addDurationLevel,'addDurationXp':addDurationXp,'addExpXp':addExpXp,'addExpLevel':addExpLevel,'addEssen':addEssen,'removeEssen':removeEssen}};