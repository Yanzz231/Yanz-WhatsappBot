const _0x1f9b1d=_0x3d41;(function(_0x19b2d9,_0x3f06e2){const _0x33e26f=_0x3d41,_0xe08d8e=_0x19b2d9();while(!![]){try{const _0x33a444=-parseInt(_0x33e26f(0x1d1))/0x1*(-parseInt(_0x33e26f(0x1d4))/0x2)+parseInt(_0x33e26f(0x1c5))/0x3*(parseInt(_0x33e26f(0x1d6))/0x4)+parseInt(_0x33e26f(0x1cf))/0x5*(parseInt(_0x33e26f(0x1c9))/0x6)+parseInt(_0x33e26f(0x1cd))/0x7+-parseInt(_0x33e26f(0x1c8))/0x8+parseInt(_0x33e26f(0x1d0))/0x9+-parseInt(_0x33e26f(0x1d5))/0xa*(parseInt(_0x33e26f(0x1ce))/0xb);if(_0x33a444===_0x3f06e2)break;else _0xe08d8e['push'](_0xe08d8e['shift']());}catch(_0x232272){_0xe08d8e['push'](_0xe08d8e['shift']());}}}(_0x3fa2,0xce0a7));const fs=require('fs'),item=JSON['parse'](fs['readFileSync'](_0x1f9b1d(0x1cc))),useitem=JSON[_0x1f9b1d(0x1c3)](fs[_0x1f9b1d(0x1d3)](_0x1f9b1d(0x1c7))),addItem=_0x9b1347=>{const _0x110f68=_0x1f9b1d,_0x1510ea={'id':_0x9b1347,'double':0x0,'tripel':0x0,'leg':0x0};item[_0x110f68(0x1bf)](_0x1510ea),fs[_0x110f68(0x1d2)]('./database/database/item/item.json',JSON['stringify'](item,null,0x2));},addDoubleitem=(_0x5786a3,_0x474cb8)=>{const _0x37743d=_0x1f9b1d;let _0x2d0801=![];Object[_0x37743d(0x1c2)](item)['forEach'](_0x39ff2f=>{item[_0x39ff2f]['id']===_0x5786a3&&(_0x2d0801=_0x39ff2f);}),_0x2d0801!==![]&&(item[_0x2d0801][_0x37743d(0x1ca)]+=parseInt(_0x474cb8),fs['writeFileSync'](_0x37743d(0x1cc),JSON['stringify'](item,null,0x2)));},removeDoubleitem=(_0x5056ce,_0x54fece)=>{const _0x38f4f6=_0x1f9b1d;let _0x28252d=![];Object[_0x38f4f6(0x1c2)](item)['forEach'](_0x4466d4=>{item[_0x4466d4]['id']===_0x5056ce&&(_0x28252d=_0x4466d4);}),_0x28252d!==![]&&(item[_0x28252d][_0x38f4f6(0x1ca)]-=parseInt(_0x54fece),fs[_0x38f4f6(0x1d2)](_0x38f4f6(0x1cc),JSON['stringify'](item,null,0x2)));},addTripelitem=(_0x4ea4a6,_0xd933b)=>{const _0x5948e8=_0x1f9b1d;let _0x471e97=![];Object['keys'](item)[_0x5948e8(0x1c6)](_0x58223d=>{item[_0x58223d]['id']===_0x4ea4a6&&(_0x471e97=_0x58223d);}),_0x471e97!==![]&&(item[_0x471e97][_0x5948e8(0x1c4)]+=parseInt(_0xd933b),fs[_0x5948e8(0x1d2)](_0x5948e8(0x1cc),JSON[_0x5948e8(0x1c0)](item,null,0x2)));},removeTripelitem=(_0x2c6b24,_0x52a286)=>{const _0x4e2637=_0x1f9b1d;let _0x55c60e=![];Object['keys'](item)['forEach'](_0x536109=>{item[_0x536109]['id']===_0x2c6b24&&(_0x55c60e=_0x536109);}),_0x55c60e!==![]&&(item[_0x55c60e][_0x4e2637(0x1c4)]-=parseInt(_0x52a286),fs[_0x4e2637(0x1d2)](_0x4e2637(0x1cc),JSON[_0x4e2637(0x1c0)](item,null,0x2)));},addLegitem=(_0x2f0ec4,_0x43ad5b)=>{const _0x4e320e=_0x1f9b1d;let _0x4fdc6a=![];Object['keys'](item)[_0x4e320e(0x1c6)](_0x1cfcbf=>{item[_0x1cfcbf]['id']===_0x2f0ec4&&(_0x4fdc6a=_0x1cfcbf);}),_0x4fdc6a!==![]&&(item[_0x4fdc6a][_0x4e320e(0x1c1)]+=parseInt(_0x43ad5b),fs[_0x4e320e(0x1d2)](_0x4e320e(0x1cc),JSON[_0x4e320e(0x1c0)](item,null,0x2)));},removeLegitem=(_0x12d288,_0x1a2f75)=>{const _0x1218c5=_0x1f9b1d;let _0x49653b=![];Object['keys'](item)[_0x1218c5(0x1c6)](_0x3725bd=>{item[_0x3725bd]['id']===_0x12d288&&(_0x49653b=_0x3725bd);}),_0x49653b!==![]&&(item[_0x49653b][_0x1218c5(0x1c1)]-=_0x1a2f75,fs[_0x1218c5(0x1d2)](_0x1218c5(0x1cc),JSON[_0x1218c5(0x1c0)](item,null,0x2)));},checkDoubleitem=_0x1d7ad9=>{const _0x4e39f5=_0x1f9b1d;let _0x4a8211=![];Object[_0x4e39f5(0x1c2)](item)[_0x4e39f5(0x1c6)](_0x38029b=>{item[_0x38029b]['id']===_0x1d7ad9&&(_0x4a8211=_0x38029b);});if(_0x4a8211!==![])return item[_0x4a8211][_0x4e39f5(0x1ca)];},checkTripelitem=_0xae9fe8=>{const _0xae03a3=_0x1f9b1d;let _0x263ef9=![];Object[_0xae03a3(0x1c2)](item)['forEach'](_0x2a3fac=>{item[_0x2a3fac]['id']===_0xae9fe8&&(_0x263ef9=_0x2a3fac);});if(_0x263ef9!==![])return item[_0x263ef9]['tripel'];},checkLegitem=_0x9564a0=>{const _0x39e41f=_0x1f9b1d;let _0x6131b6=![];Object[_0x39e41f(0x1c2)](item)[_0x39e41f(0x1c6)](_0x2bd7bd=>{item[_0x2bd7bd]['id']===_0x9564a0&&(_0x6131b6=_0x2bd7bd);});if(_0x6131b6!==![])return item[_0x6131b6]['leg'];},addUseitem=_0x37f4b8=>{const _0x20adf9=_0x1f9b1d,_0x4e4fb7={'id':_0x37f4b8,'double':0x0,'tripel':0x0,'leg':0x0};useitem[_0x20adf9(0x1bf)](_0x4e4fb7),fs[_0x20adf9(0x1d2)](_0x20adf9(0x1c7),JSON[_0x20adf9(0x1c0)](useitem,null,0x2));},addDoubleuseitem=(_0x2b72b6,_0x468e83)=>{const _0x507096=_0x1f9b1d;let _0x368270=![];Object[_0x507096(0x1c2)](useitem)[_0x507096(0x1c6)](_0x5f080e=>{useitem[_0x5f080e]['id']===_0x2b72b6&&(_0x368270=_0x5f080e);}),_0x368270!==![]&&(useitem[_0x368270][_0x507096(0x1ca)]+=parseInt(_0x468e83),fs['writeFileSync'](_0x507096(0x1c7),JSON[_0x507096(0x1c0)](useitem,null,0x2)));},removeDoubleuseitem=(_0x3fc0aa,_0x362675)=>{const _0x5849f2=_0x1f9b1d;let _0xfdf295=![];Object['keys'](useitem)[_0x5849f2(0x1c6)](_0x5b757a=>{useitem[_0x5b757a]['id']===_0x3fc0aa&&(_0xfdf295=_0x5b757a);}),_0xfdf295!==![]&&(useitem[_0xfdf295][_0x5849f2(0x1ca)]-=parseInt(_0x362675),fs['writeFileSync'](_0x5849f2(0x1c7),JSON['stringify'](useitem,null,0x2)));},addTripeluseitem=(_0x2c58e5,_0x3e0ac7)=>{const _0x26f277=_0x1f9b1d;let _0x88da5b=![];Object['keys'](useitem)[_0x26f277(0x1c6)](_0x35ae24=>{useitem[_0x35ae24]['id']===_0x2c58e5&&(_0x88da5b=_0x35ae24);}),_0x88da5b!==![]&&(useitem[_0x88da5b]['tripel']+=parseInt(_0x3e0ac7),fs[_0x26f277(0x1d2)](_0x26f277(0x1c7),JSON[_0x26f277(0x1c0)](useitem,null,0x2)));},removeTripeluseitem=(_0x51a33a,_0x312234)=>{const _0x2d3ca7=_0x1f9b1d;let _0x57cdb9=![];Object['keys'](useitem)['forEach'](_0x3f0c1b=>{useitem[_0x3f0c1b]['id']===_0x51a33a&&(_0x57cdb9=_0x3f0c1b);}),_0x57cdb9!==![]&&(useitem[_0x57cdb9][_0x2d3ca7(0x1c4)]-=parseInt(_0x312234),fs[_0x2d3ca7(0x1d2)](_0x2d3ca7(0x1c7),JSON[_0x2d3ca7(0x1c0)](useitem,null,0x2)));},addLeguseitem=(_0xdbf6c1,_0x5b7e36)=>{const _0x47546a=_0x1f9b1d;let _0x2796b8=![];Object['keys'](useitem)[_0x47546a(0x1c6)](_0x8d18f2=>{useitem[_0x8d18f2]['id']===_0xdbf6c1&&(_0x2796b8=_0x8d18f2);}),_0x2796b8!==![]&&(useitem[_0x2796b8]['leg']+=parseInt(_0x5b7e36),fs[_0x47546a(0x1d2)](_0x47546a(0x1c7),JSON[_0x47546a(0x1c0)](useitem,null,0x2)));},removeLeguseitem=(_0x46ca9f,_0x418b79)=>{const _0x4d1155=_0x1f9b1d;let _0x5e69ee=![];Object[_0x4d1155(0x1c2)](useitem)[_0x4d1155(0x1c6)](_0x10b1ac=>{useitem[_0x10b1ac]['id']===_0x46ca9f&&(_0x5e69ee=_0x10b1ac);}),_0x5e69ee!==![]&&(useitem[_0x5e69ee]['leg']-=parseInt(_0x418b79),fs['writeFileSync'](_0x4d1155(0x1c7),JSON[_0x4d1155(0x1c0)](useitem,null,0x2)));},checkDoubleuseitem=_0x3a9b08=>{const _0x3d2613=_0x1f9b1d;let _0x2c307e=![];Object[_0x3d2613(0x1c2)](useitem)['forEach'](_0x536c10=>{useitem[_0x536c10]['id']===_0x3a9b08&&(_0x2c307e=_0x536c10);});if(_0x2c307e!==![])return useitem[_0x2c307e]['double'];},checkTripeluseitem=_0x271658=>{const _0x4692d0=_0x1f9b1d;let _0x16d2dd=![];Object['keys'](useitem)['forEach'](_0x218076=>{useitem[_0x218076]['id']===_0x271658&&(_0x16d2dd=_0x218076);});if(_0x16d2dd!==![])return useitem[_0x16d2dd][_0x4692d0(0x1c4)];},checkLeguseitem=_0x3e9a09=>{let _0x45c106=![];Object['keys'](useitem)['forEach'](_0x9e0464=>{useitem[_0x9e0464]['id']===_0x3e9a09&&(_0x45c106=_0x9e0464);});if(_0x45c106!==![])return useitem[_0x45c106]['leg'];};function _0x3d41(_0x2710e3,_0x22285d){const _0x3fa2b6=_0x3fa2();return _0x3d41=function(_0x3d419b,_0x3a0d2b){_0x3d419b=_0x3d419b-0x1bf;let _0x20746f=_0x3fa2b6[_0x3d419b];return _0x20746f;},_0x3d41(_0x2710e3,_0x22285d);}function _0x3fa2(){const _0x11e5a8=['stringify','leg','keys','parse','tripel','165gsMteM','forEach','./database/database/item/useitem.json','8914448Dcjdqp','95490tzONLT','double','exports','./database/database/item/item.json','4419023POTcth','1545225qihsgu','155CDCvKh','8709768lGkogD','22kLVDUm','writeFileSync','readFileSync','128558pHqKJb','200eoPHTi','91724zmlNNj','push'];_0x3fa2=function(){return _0x11e5a8;};return _0x3fa2();}module[_0x1f9b1d(0x1cb)]={'item':{'addItem':addItem,'addDoubleitem':addDoubleitem,'addTripelitem':addTripelitem,'addLegitem':addLegitem,'removeDoubleitem':removeDoubleitem,'removeLegitem':removeLegitem,'removeTripelitem':removeTripelitem,'checkDoubleitem':checkDoubleitem,'checkTripelitem':checkTripelitem,'checkLegitem':checkLegitem,'addUseitem':addUseitem,'addDoubleuseitem':addDoubleuseitem,'addTripeluseitem':addTripeluseitem,'addLeguseitem':addLeguseitem,'removeDoubleuseitem':removeDoubleuseitem,'removeTripeluseitem':removeTripeluseitem,'removeLeguseitem':removeLeguseitem,'checkDoubleuseitem':checkDoubleuseitem,'checkTripeluseitem':checkTripeluseitem,'checkLeguseitem':checkLeguseitem}};