const _0x3cc58a=_0x3742;(function(_0xbbb87f,_0x5556ff){const _0x242263=_0x3742,_0x2df4a1=_0xbbb87f();while(!![]){try{const _0x455b4a=parseInt(_0x242263(0x140))/0x1*(-parseInt(_0x242263(0x129))/0x2)+parseInt(_0x242263(0x17f))/0x3*(-parseInt(_0x242263(0x133))/0x4)+-parseInt(_0x242263(0x13c))/0x5+-parseInt(_0x242263(0x145))/0x6*(-parseInt(_0x242263(0x153))/0x7)+parseInt(_0x242263(0xf9))/0x8*(-parseInt(_0x242263(0x135))/0x9)+-parseInt(_0x242263(0xf2))/0xa*(-parseInt(_0x242263(0x162))/0xb)+-parseInt(_0x242263(0x13a))/0xc*(parseInt(_0x242263(0x113))/0xd);if(_0x455b4a===_0x5556ff)break;else _0x2df4a1['push'](_0x2df4a1['shift']());}catch(_0x56e0f0){_0x2df4a1['push'](_0x2df4a1['shift']());}}}(_0x2792,0xc69c5));const config=require(_0x3cc58a(0xec)),{cmd,commands}=require(_0x3cc58a(0x159)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x3cc58a(0x150)),_0x235552={};_0x235552[_0x3cc58a(0x11d)]=_0x3cc58a(0x11e),_0x235552['desc']=_0x3cc58a(0xef),_0x235552[_0x3cc58a(0xdc)]='📋',_0x235552[_0x3cc58a(0x138)]='group',_0x235552[_0x3cc58a(0x15c)]=__filename,cmd(_0x235552,async(_0x78cc5a,_0x226220,_0x5479b2,{from:_0x1367a0,q:_0x3321c3,reply:_0x192110,isGroup:_0x59660b})=>{const _0xf435a8=_0x3cc58a;if(!_0x59660b)return _0x192110('This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group\x20chat.');try{const _0x2d6e2c=_0x1367a0;console[_0xf435a8(0x11f)](_0xf435a8(0xd7)+_0x2d6e2c);const _0x3f74c1=await _0x78cc5a['groupRequestParticipantsList'](_0x2d6e2c);console['log'](_0x3f74c1);if(_0x3f74c1['length']>0x0){let _0x4f2630=_0xf435a8(0x156),_0x474347=[];_0x3f74c1[_0xf435a8(0x136)](_0x377828=>{const _0x33edc3=_0xf435a8,_0x30cefc=_0x377828[_0x33edc3(0xea)];_0x4f2630+=_0x33edc3(0x102)+_0x30cefc['split']('@')[0x0]+'\x0a',_0x474347[_0x33edc3(0x122)](_0x30cefc);});const _0x361ebc={'text':_0x4f2630,'mentions':_0x474347};await _0x78cc5a['sendMessage'](_0x1367a0,_0x361ebc);}else _0x192110(_0xf435a8(0x127));}catch(_0x52c1f5){console['error']('Error\x20fetching\x20participant\x20requests:\x20'+_0x52c1f5['message']),_0x192110(_0xf435a8(0xf7));}});const _0x485005={};_0x485005[_0x3cc58a(0x11d)]=_0x3cc58a(0x11b),_0x485005['desc']='Approve\x20or\x20reject\x20all\x20join\x20requests',_0x485005[_0x3cc58a(0xdc)]='✅',_0x485005[_0x3cc58a(0x138)]=_0x3cc58a(0x167),_0x485005[_0x3cc58a(0x15c)]=__filename,cmd(_0x485005,async(_0x196eed,_0x47188b,_0x34a167,{from:_0x578da2,reply:_0x374c47,isGroup:_0x419855})=>{const _0x8a1d97=_0x3cc58a;if(!_0x419855)return _0x374c47(_0x8a1d97(0x188));const _0x2331fb=_0x34a167[_0x8a1d97(0x111)]['includes'](_0x8a1d97(0x163))?_0x8a1d97(0x163):_0x8a1d97(0xe3);try{const _0x57785b=await _0x196eed[_0x8a1d97(0x182)](_0x578da2);if(_0x57785b[_0x8a1d97(0x134)]===0x0)return _0x374c47(_0x8a1d97(0xd3));let _0x180525=_0x8a1d97(0x156),_0x293476=[],_0x3e7b71=[];_0x57785b[_0x8a1d97(0x136)](_0x1373ba=>{const _0x4d4582=_0x8a1d97,_0x296f6e=_0x1373ba['jid'];_0x180525+=_0x4d4582(0x102)+_0x296f6e[_0x4d4582(0x157)]('@')[0x0]+'\x0a',_0x293476[_0x4d4582(0x122)](_0x296f6e),_0x3e7b71[_0x4d4582(0x122)](_0x296f6e);});const _0x249a8b={'text':_0x180525,'mentions':_0x293476};await _0x196eed[_0x8a1d97(0x172)](_0x578da2,_0x249a8b);const _0x3aa0b5=await _0x196eed[_0x8a1d97(0x13e)](_0x578da2,_0x3e7b71,_0x2331fb);console[_0x8a1d97(0x11f)](_0x3aa0b5),_0x374c47(_0x8a1d97(0x109)+_0x2331fb+_0x8a1d97(0x125));}catch(_0x4f61b7){console[_0x8a1d97(0xfc)](_0x8a1d97(0x143)+_0x4f61b7[_0x8a1d97(0x15a)]),_0x374c47('⚠️\x20An\x20error\x20occurred\x20while\x20processing\x20the\x20request.\x20Please\x20try\x20again\x20later.');}});const WA_DEFAULT_EPHEMERAL_24H=0x15180,WA_DEFAULT_EPHEMERAL_7D=0x93a80,WA_DEFAULT_EPHEMERAL_90D=0x76a700,_0x3bcce0={};_0x3bcce0[_0x3cc58a(0x11d)]='ephemeral',_0x3bcce0['react']=_0x3cc58a(0x185),_0x3bcce0[_0x3cc58a(0x120)]=['dm'],_0x3bcce0['desc']='Turn\x20on/off\x20disappearing\x20messages.',_0x3bcce0[_0x3cc58a(0x138)]=_0x3cc58a(0x112),_0x3bcce0[_0x3cc58a(0x15c)]=__filename,cmd(_0x3bcce0,async(_0x406787,_0x2a1b78,_0x2c1b1b,{from:_0x1feae4,isGroup:_0x27c856,isAdmins:_0x301968,args:_0x7c4c8c})=>{const _0x27ea4e=_0x3cc58a;if(!_0x27c856){const _0x2b0862={'text':_0x27ea4e(0xe4)};await _0x406787[_0x27ea4e(0x172)](_0x1feae4,_0x2b0862);return;}if(!_0x301968){const _0x4320ac={'text':_0x27ea4e(0x168)};await _0x406787[_0x27ea4e(0x172)](_0x1feae4,_0x4320ac);return;}const _0xb55b68=_0x7c4c8c[0x0];if(_0xb55b68==='on'){const _0x15f978=_0x7c4c8c[0x1];let _0x5dc74a;switch(_0x15f978){case _0x27ea4e(0xf5):_0x5dc74a=WA_DEFAULT_EPHEMERAL_24H;break;case'7d':_0x5dc74a=WA_DEFAULT_EPHEMERAL_7D;break;case _0x27ea4e(0xe6):_0x5dc74a=WA_DEFAULT_EPHEMERAL_90D;break;default:const _0x3d9cbb={};_0x3d9cbb[_0x27ea4e(0x176)]=_0x27ea4e(0x158),await _0x406787[_0x27ea4e(0x172)](_0x1feae4,_0x3d9cbb);return;}const _0x403fb5={'disappearingMessagesInChat':_0x5dc74a};await _0x406787[_0x27ea4e(0x172)](_0x1feae4,_0x403fb5);const _0x49ba52={'text':'ephemeral\x20messages\x20are\x20now\x20ON\x20for\x20'+_0x15f978+'.'};await _0x406787[_0x27ea4e(0x172)](_0x1feae4,_0x49ba52);}else{if(_0xb55b68===_0x27ea4e(0x117)){await _0x406787['sendMessage'](_0x1feae4,_0x1ef878);const _0x39294f={'text':_0x27ea4e(0x175)};await _0x406787[_0x27ea4e(0x172)](_0x1feae4,_0x39294f);}else{const _0x240579={'text':_0x27ea4e(0x14d)};await _0x406787['sendMessage'](_0x1feae4,_0x240579);}}});const _0x592aaf={};_0x592aaf['pattern']=_0x3cc58a(0x13f),_0x592aaf['react']=_0x3cc58a(0x185),_0x592aaf[_0x3cc58a(0x120)]=[_0x3cc58a(0x149)],_0x592aaf[_0x3cc58a(0x118)]=_0x3cc58a(0xfb),_0x592aaf[_0x3cc58a(0x138)]=_0x3cc58a(0x112),_0x592aaf[_0x3cc58a(0x15c)]=__filename,cmd(_0x592aaf,async(_0x70701d,_0x9d9fa9,_0x5dd2a3,{from:_0x1b1789,isGroup:_0x39612e,isAdmins:_0x23082d,args:_0x14e8cb})=>{const _0x541030=_0x3cc58a;if(!_0x39612e){const _0x4fdb9e={'text':'This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.'};await _0x70701d[_0x541030(0x172)](_0x1b1789,_0x4fdb9e);return;}if(!_0x14e8cb['length']){const _0x11943f={'text':'Please\x20provide\x20a\x20message\x20to\x20send.'};await _0x70701d[_0x541030(0x172)](_0x1b1789,_0x11943f);return;}const _0x4df872=_0x14e8cb[_0x541030(0x178)]('\x20'),_0xdd6703={'text':_0x4df872},_0x420c86={'ephemeralExpiration':WA_DEFAULT_EPHEMERAL_7D};await _0x70701d[_0x541030(0x172)](_0x1b1789,_0xdd6703,_0x420c86);});function _0x3742(_0x2bdd0a,_0x46bb12){const _0x279219=_0x2792();return _0x3742=function(_0x374209,_0x11efc7){_0x374209=_0x374209-0xcf;let _0x2f99d1=_0x279219[_0x374209];return _0x2f99d1;},_0x3742(_0x2bdd0a,_0x46bb12);}const _0x4f6b5b={};function _0x2792(){const _0x9b300f=['off','desc','participant','*❌\x20The\x20bot\x20needs\x20admin\x20rights\x20to\x20reset\x20the\x20group\x20link.*','allreq','❌\x20*An\x20error\x20occurred\x20!!*\x0a\x0a','pattern','joinrequests','log','alias','unmute','push','.invite','use','ed\x20all\x20join\x20requests.','tagall','No\x20pending\x20requests\x20to\x20join\x20the\x20group.','*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group.*','6EQprOq','f_revoke','*✅\x20Group\x20name\x20updated\x20to:\x20','quoted','*✅\x20Group\x20description\x20updated\x20to:\x20','you_adm','groupSettingUpdate','*❌\x20Only\x20admins\x20and\x20the\x20owner\x20can\x20demote\x20a\x20member.*','.updategname','f_taggp','4JNfpGl','length','3330ykSgMy','forEach','To\x20Add\x20a\x20participant\x20as\x20an\x20Admin','category','f_leave','2676kivDlj','*User\x20demoted\x20to\x20Member*\x20\x20✔️','924685vBtfaa','lockgsettings','groupRequestParticipantsUpdate','senddm','43481uASFHu','unlockgc','upgdesc','Error\x20updating\x20participant\x20requests:\x20','*✅\x20The\x20group\x20has\x20been\x20closed\x20by\x20','378108zbaFxB','*⚠️\x20Only\x20group\x20admins\x20or\x20the\x20bot\x20owner\x20can\x20use\x20this\x20command.*','Change\x20the\x20group\x20description.','>\x20ᴅᴇᴀʀ\x20☣️\x20@','senddisappear','glink','taggp','profilePictureUrl','Please\x20use\x20`!ephemeral\x20on\x20<duration>`\x20or\x20`!ephemeral\x20off`.','groupAcceptInvite','give_adm','../lib/functions','updategname','❌\x20*Error\x20Accurated\x20!!*\x0a\x0a','161nSaOkl','.tag\x20Hi','*❌\x20The\x20bot\x20must\x20be\x20an\x20admin\x20to\x20execute\x20this\x20command.*','Pending\x20Requests\x20to\x20Join\x20the\x20Group:\x0a','split','Invalid\x20duration!\x20Use\x20`24h`,\x20`7d`,\x20or\x20`90d`.','../command','message','tag','filename','contextInfo','Change\x20group\x20settings\x20so\x20all\x20members\x20can\x20send\x20messages.','*❌\x20Only\x20admins\x20and\x20the\x20owner\x20can\x20use\x20this\x20command*','.demote','close','253SiLJgT','approve','*⚠️\x20Please\x20provide\x20the\x20new\x20group\x20name.*','.unmute','*❌\x20This\x20command\x20is\x20only\x20for\x20the\x20bot\x20owner,\x20admins,\x20or\x20the\x20bot\x20itself.*','group','Only\x20admins\x20can\x20turn\x20on/off\x20ephemeral\x20messages.','*Please\x20mention\x20a\x20message*\x20ℹ️','\x0a\x0a📃\x20*Group\x20Description*\x20-\x20','*Please\x20add\x20a\x20Message*\x20ℹ️','\x0a\x0a📬\x20*Participant\x20Count*\x20-\x20','🖇️','left','*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.*','.ginfo','f_mute','sendMessage','*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group*','*Couldn\x27t\x20find\x20any\x20user\x20in\x20context*\x20❌','ephemeral\x20messages\x20are\x20now\x20OFF.','text','resetglink','join','To\x20Join\x20a\x20Group\x20from\x20Invite\x20link','*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group!*','groupUpdateSubject','*⚠️\x20I\x20need\x20to\x20be\x20an\x20admin\x20to\x20execute\x20this\x20command.*','*❌\x20An\x20error\x20occurred\x20!!*\x0a\x0a','https://chat.whatsapp.com/','255741RVxJyJ','*❌\x20The\x20bot\x20needs\x20admin\x20rights\x20to\x20execute\x20this\x20command.*','Get\x20group\x20informations.','groupRequestParticipantsList','ginfo','Change\x20to\x20group\x20settings\x20to\x20only\x20admins\x20can\x20send\x20messages.','🌪️','removeadmin','mute','This\x20command\x20can\x20only\x20be\x20used\x20in\x20a\x20group\x20chat.','To\x20leave\x20from\x20the\x20group','subject','demote','.*\x20🔓','There\x20are\x20no\x20pending\x20requests\x20to\x20manage.','.leave','💱\x20*HI\x20ALL\x20!\x20GIVE\x20YOUR\x20ATTENTION\x20PLEASE*\x20\x0a\x20\x0a','*✅\x20Group\x20settings\x20unlocked\x20by\x20','Attempting\x20to\x20fetch\x20pending\x20requests\x20for\x20group:\x20','locked','hidetag','*\x0a\x0a🐉\x20*Group\x20Jid*\x20-\x20','map','react','*✅\x20Group\x20settings\x20locked\x20by\x20','size','https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json','*⚠️\x20Please\x20provide\x20the\x20Group\x20Link*\x20🖇️','Change\x20the\x20group\x20name.','*❌\x20Error\x20occurred\x20!!*\x0a\x0a','reject','This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.','unlockgsettings','90d','*⚠️\x20Only\x20the\x20Owner\x20can\x20use\x20this\x20command*','FOOTER','*Please\x20add\x20a\x20Group\x20Jid*\x20ℹ️','jid','includes','../config','To\x20Tag\x20all\x20Members\x20for\x20Message','f-left','Get\x20list\x20of\x20participants\x20who\x20requested\x20to\x20join\x20the\x20group','*✅\x20The\x20group\x20has\x20been\x20opened\x20by\x20','.mute','120810BlsyCz','Allow\x20all\x20members\x20to\x20edit\x20group\x20info.','msg','24h','.revoke','⚠️\x20An\x20error\x20occurred\x20while\x20fetching\x20the\x20pending\x20requests.\x20Please\x20try\x20again\x20later.','groupUpdateDescription','9904GrUXqh','groupMetadata','Send\x20a\x20disappearing\x20message.','error','only_gp','groupParticipantsUpdate','replyMsg','.tagall','promote','😻\x20@','To\x20Get\x20the\x20Group\x20Invite\x20link','revokelink','To\x20Reset\x20the\x20group\x20link','*❌\x20Only\x20the\x20bot\x20owner\x20can\x20use\x20this\x20command!*','✅\x20*Your\x20request\x20to\x20join\x20the\x20group\x20has\x20been\x20sent*','*❗\x20The\x20user\x20is\x20already\x20an\x20Admin*\x20\x20✔️','Successfully\x20','.unlockgs','key','grouplink','No\x20description\x20available','gname','*❌\x20An\x20error\x20occurred\x20!*\x0a\x0a','image','body','main','3211eDTeCg','addadmin','\x0a\x0a👤\x20*Group\x20Creator*\x20-\x20','.lockgs'];_0x2792=function(){return _0x9b300f;};return _0x2792();}_0x4f6b5b[_0x3cc58a(0x11d)]=_0x3cc58a(0x187),_0x4f6b5b[_0x3cc58a(0xdc)]='🔇',_0x4f6b5b[_0x3cc58a(0x120)]=[_0x3cc58a(0x161),_0x3cc58a(0x171)],_0x4f6b5b['desc']=_0x3cc58a(0x184),_0x4f6b5b[_0x3cc58a(0x138)]=_0x3cc58a(0x167),_0x4f6b5b[_0x3cc58a(0x124)]=_0x3cc58a(0xf1),_0x4f6b5b[_0x3cc58a(0x15c)]=__filename,cmd(_0x4f6b5b,async(_0x123e2f,_0x500cfa,_0x13e86d,{from:_0x3d11aa,isGroup:_0x44ec8a,sender:_0x2fcae0,isOwner:_0x48a0e6,groupAdmins:_0x4df198,isBotAdmins:_0x52b65a,isAdmins:_0x3c037f,reply:_0x7c3ade,pushname:_0x1274b3})=>{const _0x13d19c=_0x3cc58a;try{if(!_0x44ec8a)return _0x7c3ade(_0x13d19c(0x16f));if(!_0x48a0e6&&!_0x3c037f)return _0x7c3ade('*⚠️\x20Only\x20group\x20admins\x20or\x20the\x20bot\x20owner\x20can\x20use\x20this\x20command.*');if(!_0x52b65a)return _0x7c3ade('*⚠️\x20I\x20need\x20to\x20be\x20an\x20admin\x20to\x20execute\x20this\x20command.*');await _0x123e2f[_0x13d19c(0x12f)](_0x3d11aa,'announcement');const _0x17d744={'text':_0x13d19c(0x144)+_0x1274b3+'.*\x20🔇'};await _0x123e2f[_0x13d19c(0x172)](_0x3d11aa,_0x17d744,{'quoted':_0x500cfa});}catch(_0x216b09){console[_0x13d19c(0x11f)](_0x216b09),_0x7c3ade(_0x13d19c(0x10f)+_0x216b09);}});const _0x87e572={};_0x87e572[_0x3cc58a(0x11d)]=_0x3cc58a(0x121),_0x87e572[_0x3cc58a(0xdc)]='🔇',_0x87e572['alias']=['open','f_unmute'],_0x87e572[_0x3cc58a(0x118)]=_0x3cc58a(0x15e),_0x87e572['category']=_0x3cc58a(0x167),_0x87e572[_0x3cc58a(0x124)]=_0x3cc58a(0x165),_0x87e572[_0x3cc58a(0x15c)]=__filename,cmd(_0x87e572,async(_0x41f079,_0x4cd642,_0x24ab22,{from:_0x186295,isGroup:_0x9df034,sender:_0x3d2228,isOwner:_0x4f35e5,groupAdmins:_0x829d1f,isBotAdmins:_0x246f88,isAdmins:_0x37730b,reply:_0x488638,pushname:_0x337177})=>{const _0x8ebb84=_0x3cc58a;try{if(!_0x9df034)return _0x488638(_0x8ebb84(0x16f));if(!_0x4f35e5&&!_0x37730b)return _0x488638(_0x8ebb84(0x146));if(!_0x246f88)return _0x488638(_0x8ebb84(0x17c));await _0x41f079[_0x8ebb84(0x12f)](_0x186295,'not_announcement');const _0x540fc1={'text':_0x8ebb84(0xf0)+_0x337177+'.*\x20🔇'};await _0x41f079[_0x8ebb84(0x172)](_0x186295,_0x540fc1,{'quoted':_0x4cd642});}catch(_0x50befa){console[_0x8ebb84(0x11f)](_0x50befa),_0x488638(_0x8ebb84(0x10f)+_0x50befa);}});const _0x2bff43={};_0x2bff43[_0x3cc58a(0x11d)]='lockgc',_0x2bff43[_0x3cc58a(0xdc)]='🔒',_0x2bff43[_0x3cc58a(0x120)]=[_0x3cc58a(0x13d)],_0x2bff43[_0x3cc58a(0x118)]='Restrict\x20group\x20settings\x20so\x20only\x20admins\x20can\x20edit\x20group\x20info.',_0x2bff43[_0x3cc58a(0x138)]=_0x3cc58a(0x167),_0x2bff43[_0x3cc58a(0x124)]=_0x3cc58a(0x116),_0x2bff43[_0x3cc58a(0x15c)]=__filename,cmd(_0x2bff43,async(_0x409386,_0x26ab9b,_0x2b6306,{from:_0x75769e,isGroup:_0x3419c6,sender:_0x1818b9,isOwner:_0x2ddc82,isBotAdmins:_0x3626ef,isAdmins:_0xbae585,reply:_0x51b7cf,pushname:_0x169ec7})=>{const _0x437209=_0x3cc58a;try{if(!_0x3419c6)return _0x51b7cf(_0x437209(0x16f));if(!_0x2ddc82&&!_0xbae585)return _0x51b7cf(_0x437209(0x146));if(!_0x3626ef)return _0x51b7cf('*⚠️\x20I\x20need\x20to\x20be\x20an\x20admin\x20to\x20execute\x20this\x20command.*');await _0x409386[_0x437209(0x12f)](_0x75769e,_0x437209(0xd8));const _0xba406d={'text':_0x437209(0xdd)+_0x169ec7+'.*\x20🔒'};await _0x409386['sendMessage'](_0x75769e,_0xba406d,{'quoted':_0x26ab9b});}catch(_0x377c2f){console[_0x437209(0x11f)](_0x377c2f),_0x51b7cf(_0x437209(0x10f)+_0x377c2f);}});const _0x285abb={};_0x285abb[_0x3cc58a(0x11d)]=_0x3cc58a(0x141),_0x285abb[_0x3cc58a(0xdc)]='🔓',_0x285abb[_0x3cc58a(0x120)]=[_0x3cc58a(0xe5)],_0x285abb[_0x3cc58a(0x118)]=_0x3cc58a(0xf3),_0x285abb[_0x3cc58a(0x138)]=_0x3cc58a(0x167),_0x285abb['use']=_0x3cc58a(0x10a),_0x285abb[_0x3cc58a(0x15c)]=__filename,cmd(_0x285abb,async(_0x127cf0,_0x48a621,_0x380453,{from:_0x4918ba,isGroup:_0x36398f,sender:_0x5df5af,isOwner:_0xaca91e,isBotAdmins:_0x2b4cd7,isAdmins:_0x54585d,reply:_0x152f74,pushname:_0x26855a})=>{const _0x5aecbd=_0x3cc58a;try{if(!_0x36398f)return _0x152f74('*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.*');if(!_0xaca91e&&!_0x54585d)return _0x152f74(_0x5aecbd(0x146));if(!_0x2b4cd7)return _0x152f74(_0x5aecbd(0x17c));await _0x127cf0['groupSettingUpdate'](_0x4918ba,'unlocked');const _0x3fefb5={'text':_0x5aecbd(0xd6)+_0x26855a+_0x5aecbd(0xd2)};await _0x127cf0[_0x5aecbd(0x172)](_0x4918ba,_0x3fefb5,{'quoted':_0x48a621});}catch(_0x1bba38){console[_0x5aecbd(0x11f)](_0x1bba38),_0x152f74(_0x5aecbd(0x10f)+_0x1bba38);}});const leaveCommand={};leaveCommand[_0x3cc58a(0x11d)]='leave',leaveCommand[_0x3cc58a(0xdc)]='🔓',leaveCommand[_0x3cc58a(0x120)]=[_0x3cc58a(0x16e),'kickme',_0x3cc58a(0x139),'f_left',_0x3cc58a(0xee)],leaveCommand[_0x3cc58a(0x118)]=_0x3cc58a(0xcf),leaveCommand['category']=_0x3cc58a(0x167),leaveCommand['use']=_0x3cc58a(0xd4),leaveCommand[_0x3cc58a(0x15c)]=__filename,cmd(leaveCommand,async(_0x2fce0d,_0x360eaa,_0x4998de,{from:_0x4b88b8,isGroup:_0x300a1b,isOwner:_0x39a13e,reply:_0x510e7d})=>{const _0x7efbf=_0x3cc58a;try{const _0x33b09c=(await fetchJson(_0x7efbf(0xdf)))[_0x7efbf(0xff)];if(!_0x300a1b)return _0x510e7d(_0x7efbf(0x17a));if(!_0x39a13e)return _0x510e7d(_0x7efbf(0x106));await _0x2fce0d['sendMessage'](_0x4b88b8,{'text':'*Good\x20Bye\x20All*\x20👋🏻'},{'quoted':_0x360eaa}),await _0x2fce0d['groupLeave'](_0x4b88b8);}catch(_0x258a81){await _0x2fce0d['sendMessage'](_0x4b88b8,{'react':{'text':'❌','key':_0x360eaa['key']}}),console[_0x7efbf(0x11f)](_0x258a81),_0x510e7d(_0x7efbf(0x11c)+_0x258a81);}});const _0x293215={};_0x293215['pattern']=_0x3cc58a(0x151),_0x293215[_0x3cc58a(0xdc)]='🔓',_0x293215['alias']=['upgname',_0x3cc58a(0x10e)],_0x293215[_0x3cc58a(0x118)]=_0x3cc58a(0xe1),_0x293215[_0x3cc58a(0x138)]=_0x3cc58a(0x167),_0x293215[_0x3cc58a(0x124)]=_0x3cc58a(0x131),_0x293215[_0x3cc58a(0x15c)]=__filename,cmd(_0x293215,async(_0x59419a,_0x126d48,_0xc7072a,{from:_0x27bc4b,isGroup:_0x31b0e7,sender:_0x547be1,isAdmins:_0x5875e9,isBotAdmins:_0x49d43e,reply:_0x5e71b2,groupName:_0x53a12c,q:_0x3b7764})=>{const _0x3fe168=_0x3cc58a;try{const _0x3e7f1f=(await fetchJson(_0x3fe168(0xdf)))[_0x3fe168(0xff)];if(!_0x31b0e7)return _0x5e71b2(_0x3fe168(0x16f));if(!_0x5875e9)return _0x5e71b2(_0x3fe168(0x146));if(!_0x49d43e)return _0x5e71b2(_0x3fe168(0x17c));if(!_0x3b7764)return _0x5e71b2(_0x3fe168(0x164));await _0x59419a[_0x3fe168(0x17b)](_0x27bc4b,_0x3b7764);const _0x3d4c39={'text':_0x3fe168(0x12b)+_0x3b7764+'*'};await _0x59419a[_0x3fe168(0x172)](_0x27bc4b,_0x3d4c39,{'quoted':_0x126d48});}catch(_0x59b873){const _0x581f15={'text':'❌','key':_0x126d48[_0x3fe168(0x10b)]},_0x3d6305={'react':_0x581f15};await _0x59419a['sendMessage'](_0x27bc4b,_0x3d6305),console[_0x3fe168(0x11f)](_0x59b873),_0x5e71b2(_0x3fe168(0xe2)+_0x59b873);}});const _0x19cdd8={};_0x19cdd8[_0x3cc58a(0x11d)]='updategdesc',_0x19cdd8[_0x3cc58a(0xdc)]='🔓',_0x19cdd8[_0x3cc58a(0x120)]=[_0x3cc58a(0x142),'gdesc'],_0x19cdd8[_0x3cc58a(0x118)]=_0x3cc58a(0x147),_0x19cdd8['category']=_0x3cc58a(0x167),_0x19cdd8[_0x3cc58a(0x124)]='.updategdesc',_0x19cdd8[_0x3cc58a(0x15c)]=__filename,cmd(_0x19cdd8,async(_0x285794,_0x1c674c,_0x31e062,{from:_0x536a1d,isGroup:_0x3e7af6,sender:_0x1582e0,isAdmins:_0xe1c18a,isBotAdmins:_0x39fa80,reply:_0x2b78d3,q:_0x11987a})=>{const _0x1e6242=_0x3cc58a;try{const _0x2860fb=(await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json'))[_0x1e6242(0xff)];if(!_0x3e7af6)return _0x2b78d3('*❌\x20This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.*');if(!_0xe1c18a)return _0x2b78d3(_0x1e6242(0x146));if(!_0x39fa80)return _0x2b78d3(_0x1e6242(0x17c));if(!_0x11987a)return _0x2b78d3('*⚠️\x20Please\x20provide\x20the\x20new\x20group\x20description.*');await _0x285794[_0x1e6242(0xf8)](_0x536a1d,_0x11987a);const _0xd1e117={'text':_0x1e6242(0x12d)+_0x11987a+'*'};await _0x285794[_0x1e6242(0x172)](_0x536a1d,_0xd1e117,{'quoted':_0x1c674c});}catch(_0x1a9962){const _0xf4a4a3={'text':'❌','key':_0x1c674c[_0x1e6242(0x10b)]},_0x1b010c={'react':_0xf4a4a3};await _0x285794['sendMessage'](_0x536a1d,_0x1b010c),console['log'](_0x1a9962),_0x2b78d3('*❌\x20Error\x20occurred\x20!!*\x0a\x0a'+_0x1a9962);}});const _0x53f490={};_0x53f490['pattern']=_0x3cc58a(0x178),_0x53f490[_0x3cc58a(0xdc)]='📬',_0x53f490[_0x3cc58a(0x120)]=['joinme','f_join'],_0x53f490['desc']=_0x3cc58a(0x179),_0x53f490[_0x3cc58a(0x138)]=_0x3cc58a(0x167),_0x53f490['use']='.join\x20<\x20Group\x20Link\x20>',_0x53f490[_0x3cc58a(0x15c)]=__filename,cmd(_0x53f490,async(_0x3a8c7b,_0x40438f,_0x5c86a8,{from:_0x1a7b71,isCmd:_0x29d50a,body:_0x13fe61,command:_0x3439c7,args:_0x5ca995,q:_0xbd9913,isGroup:_0x1db93a,sender:_0x13b3af,senderNumber:_0x7f0e01,isOwner:_0x3fc302,isCreator:_0x107041,isDev:_0xfbeeb,reply:_0x1328ca})=>{const _0xc63018=_0x3cc58a;try{const _0x2fd764=(await fetchJson(_0xc63018(0xdf)))[_0xc63018(0xff)];if(!_0x107041&&!_0xfbeeb&&!_0x3fc302)return _0x1328ca(_0xc63018(0xe7));if(!_0xbd9913)return _0x1328ca(_0xc63018(0xe0));let _0x5ab6ee=_0x5ca995[0x0]['split'](_0xc63018(0x17e))[0x1];await _0x3a8c7b[_0xc63018(0x14e)](_0x5ab6ee);const _0x533487={'quoted':_0x40438f};await _0x3a8c7b['sendMessage'](_0x1a7b71,_0x264158,_0x533487);const _0x1e2416={'text':_0xc63018(0x107)};await _0x3a8c7b[_0xc63018(0x172)](_0x1a7b71,_0x1e2416,_0x533487);}catch(_0x41172e){const _0x54569a={'text':'❌','key':_0x40438f[_0xc63018(0x10b)]},_0x27e439={'react':_0x54569a};await _0x3a8c7b[_0xc63018(0x172)](_0x1a7b71,_0x27e439),console['log'](_0x41172e),_0x1328ca('*❌\x20Error\x20occurred\x20!!*\x0a\x0a'+_0x41172e);}});const _0x4df201={};_0x4df201[_0x3cc58a(0x11d)]='invite',_0x4df201[_0x3cc58a(0xdc)]='🖇️',_0x4df201[_0x3cc58a(0x120)]=[_0x3cc58a(0x10c),_0x3cc58a(0x14a)],_0x4df201[_0x3cc58a(0x118)]=_0x3cc58a(0x103),_0x4df201[_0x3cc58a(0x138)]=_0x3cc58a(0x167),_0x4df201[_0x3cc58a(0x124)]=_0x3cc58a(0x123),_0x4df201[_0x3cc58a(0x15c)]=__filename,cmd(_0x4df201,async(_0x37be6b,_0x310cca,_0x1815d1,{from:_0x2f6df9,l:_0x1f5680,quoted:_0x250004,body:_0x56d12f,isCmd:_0x1781f9,command:_0x591e00,args:_0x153c18,q:_0x21521a,isGroup:_0x453506,sender:_0x4271d7,senderNumber:_0x169b69,botNumber2:_0x545597,botNumber:_0x223f5e,pushname:_0x4f9495,isMe:_0x824578,isOwner:_0x1c6394,groupMetadata:_0x2d91c9,groupName:_0x33e260,participants:_0x5362b1,groupAdmins:_0x4c2a17,isBotAdmins:_0x155bb6,isCreator:_0x481712,isDev:_0x2001ab,isAdmins:_0x41c9df,reply:_0x4d1214})=>{const _0x19e4a0=_0x3cc58a;try{const _0x845479=(await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json'))[_0x19e4a0(0xff)];if(!_0x453506)return _0x4d1214(_0x845479[_0x19e4a0(0xfd)]);if(!_0x1c6394&&!_0x2001ab&&!_0x41c9df)return _0x4d1214(_0x19e4a0(0x166));if(!_0x155bb6)return _0x4d1214('*❌\x20The\x20bot\x20needs\x20admin\x20rights\x20to\x20generate\x20the\x20invite\x20link.*');const _0x20f255=await _0x37be6b['groupInviteCode'](_0x2f6df9),_0x302434={'text':_0x19e4a0(0x17e)+_0x20f255},_0x32ac33={'quoted':_0x310cca};await _0x37be6b[_0x19e4a0(0x172)](_0x2f6df9,_0x302434,_0x32ac33);}catch(_0xcfe0e7){const _0x440bd0={'text':'❌','key':_0x310cca[_0x19e4a0(0x10b)]},_0x57bf7e={'react':_0x440bd0};await _0x37be6b[_0x19e4a0(0x172)](_0x2f6df9,_0x57bf7e),console['log'](_0xcfe0e7),_0x4d1214('*❌\x20Error\x20occurred\x20!!*\x0a\x0a'+_0xcfe0e7);}});const _0x34bd2a={};_0x34bd2a[_0x3cc58a(0x11d)]='revoke',_0x34bd2a[_0x3cc58a(0xdc)]=_0x3cc58a(0x16d),_0x34bd2a[_0x3cc58a(0x120)]=['revokegrouplink',_0x3cc58a(0x177),_0x3cc58a(0x104),_0x3cc58a(0x12a)],_0x34bd2a[_0x3cc58a(0x118)]=_0x3cc58a(0x105),_0x34bd2a[_0x3cc58a(0x138)]=_0x3cc58a(0x167),_0x34bd2a[_0x3cc58a(0x124)]=_0x3cc58a(0xf6),_0x34bd2a['filename']=__filename,cmd(_0x34bd2a,async(_0x428906,_0x365367,_0x357412,{from:_0x2362af,l:_0x4c4521,quoted:_0x3df667,body:_0x567cb2,isCmd:_0x3c3899,command:_0x88a669,args:_0x1f7977,q:_0x46268e,isGroup:_0x4d8807,sender:_0xc058e,senderNumber:_0x1869cf,botNumber2:_0x4f7c31,botNumber:_0x513ea1,pushname:_0x3d4671,isMe:_0x45dbc7,isOwner:_0x4539b4,groupMetadata:_0x5dd179,groupName:_0x55dd88,participants:_0x3651c6,groupAdmins:_0x3e46a5,isBotAdmins:_0x2c13a7,isCreator:_0x1ab473,isDev:_0x3bf7cd,isAdmins:_0xf1ed30,reply:_0x57629a})=>{const _0x2fcbce=_0x3cc58a;try{const _0x19002a=(await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json'))['replyMsg'];if(!_0x4d8807)return _0x57629a(_0x19002a[_0x2fcbce(0xfd)]);if(!_0x4539b4&&!_0xf1ed30)return _0x57629a('*❌\x20Only\x20admins\x20and\x20the\x20owner\x20can\x20reset\x20the\x20group\x20link.*');if(!_0x2c13a7)return _0x57629a(_0x2fcbce(0x11a));await _0x428906['groupRevokeInvite'](_0x2362af);const _0x3a5e57={'quoted':_0x365367};await _0x428906[_0x2fcbce(0x172)](_0x2362af,_0x4f6763,_0x3a5e57);}catch(_0x49070c){const _0x17eac9={'text':'❌','key':_0x365367[_0x2fcbce(0x10b)]},_0x2d7507={'react':_0x17eac9};await _0x428906[_0x2fcbce(0x172)](_0x2362af,_0x2d7507),console[_0x2fcbce(0x11f)](_0x49070c),_0x57629a('*❌\x20Error\x20occurred\x20!!*\x0a\x0a'+_0x49070c);}});const _0xd699f4={};_0xd699f4[_0x3cc58a(0x11d)]=_0x3cc58a(0x101),_0xd699f4[_0x3cc58a(0xdc)]='🥏',_0xd699f4[_0x3cc58a(0x120)]=[_0x3cc58a(0x114)],_0xd699f4[_0x3cc58a(0x118)]=_0x3cc58a(0x137),_0xd699f4['category']=_0x3cc58a(0x167),_0xd699f4[_0x3cc58a(0x124)]='.promote',_0xd699f4[_0x3cc58a(0x15c)]=__filename,cmd(_0xd699f4,async(_0x51daaf,_0x112da1,_0x3e5bff,{from:_0x3d4cf6,l:_0x8f1b48,quoted:_0x506c59,body:_0x485d10,isCmd:_0xd2a669,command:_0xb97539,mentionByTag:_0x10153f,args:_0xd14d10,q:_0x44c6a7,isGroup:_0x1f2b0f,sender:_0x27f529,senderNumber:_0x2f31fc,botNumber2:_0x24c06c,botNumber:_0x54e705,pushname:_0x2edc85,isMe:_0x547c1d,isOwner:_0x4b23c8,groupMetadata:_0x1467be,groupName:_0x5af060,participants:_0x507f70,groupAdmins:_0xd82157,isBotAdmins:_0x4b8a5e,isCreator:_0x34001c,isDev:_0x181767,isAdmins:_0x75f85,reply:_0x54d736})=>{const _0x3fdb76=_0x3cc58a;try{const _0x3f55be=(await fetchJson(_0x3fdb76(0xdf)))['replyMsg'];if(!_0x1f2b0f)return _0x54d736(_0x3fdb76(0x128));if(!_0x75f85&&!_0x4b23c8)return _0x54d736('*❌\x20Only\x20admins\x20and\x20the\x20owner\x20can\x20promote\x20participants.*');if(!_0x4b8a5e)return _0x54d736(_0x3f55be[_0x3fdb76(0x14f)]);let _0x1c26a5;_0x10153f&&_0x10153f[_0x3fdb76(0x134)]>0x0?_0x1c26a5=_0x10153f[0x0]:_0x1c26a5=_0x112da1[_0x3fdb76(0xf4)][_0x3fdb76(0x15d)]['participant']||![];if(!_0x1c26a5)return _0x54d736(_0x3fdb76(0x174));const _0x41f44b=await getGroupAdmins(_0x507f70);if(_0x41f44b[_0x3fdb76(0xeb)](_0x1c26a5))return _0x54d736(_0x3fdb76(0x108));await _0x51daaf[_0x3fdb76(0xfe)](_0x3d4cf6,[_0x1c26a5],_0x3fdb76(0x101));const _0x1b45a7={'quoted':_0x112da1};await _0x51daaf[_0x3fdb76(0x172)](_0x3d4cf6,_0x1954bb,_0x1b45a7);}catch(_0x1d6f78){const _0x198b17={'text':'❌','key':_0x112da1[_0x3fdb76(0x10b)]},_0x3f04aa={'react':_0x198b17};await _0x51daaf[_0x3fdb76(0x172)](_0x3d4cf6,_0x3f04aa),console[_0x3fdb76(0x11f)](_0x1d6f78),_0x54d736(_0x3fdb76(0xe2)+_0x1d6f78);}});const _0x10f253={};_0x10f253[_0x3cc58a(0x11d)]=_0x3cc58a(0xd1),_0x10f253[_0x3cc58a(0xdc)]='🥏',_0x10f253[_0x3cc58a(0x120)]=[_0x3cc58a(0x186)],_0x10f253[_0x3cc58a(0x118)]='To\x20Demote\x20Admin\x20to\x20Member',_0x10f253['category']='group',_0x10f253['use']=_0x3cc58a(0x160),_0x10f253[_0x3cc58a(0x15c)]=__filename,cmd(_0x10f253,async(_0x5ceec0,_0x6085c4,_0x335159,{from:_0x5ac7a9,l:_0x36bd9f,quoted:_0x4831e4,body:_0x128648,isCmd:_0x1d17df,command:_0x12bd11,mentionByTag:_0x3ce139,args:_0x5e6758,q:_0x1ab63f,isGroup:_0x4e21d5,sender:_0x695da6,senderNumber:_0x51709c,botNumber2:_0x3effca,botNumber:_0x1119e8,pushname:_0x24b7b2,isMe:_0x2d60db,isOwner:_0x3bd1c3,groupMetadata:_0x4f9401,groupName:_0x3d7f4d,participants:_0x584e3d,groupAdmins:_0x1e7e16,isBotAdmins:_0x10e7d3,isCreator:_0xc2d621,isDev:_0x99229,isAdmins:_0x18525c,reply:_0x3e2705})=>{const _0x26f8ad=_0x3cc58a;try{if(!_0x4e21d5)return _0x3e2705(_0x26f8ad(0x128));if(!_0x18525c&&!_0x3bd1c3)return _0x3e2705(_0x26f8ad(0x130));if(!_0x10e7d3)return _0x3e2705(_0x26f8ad(0x155));let _0x2d8b2e;_0x3ce139&&_0x3ce139[_0x26f8ad(0x134)]>0x0?_0x2d8b2e=_0x3ce139[0x0]:_0x2d8b2e=_0x6085c4['msg'][_0x26f8ad(0x15d)][_0x26f8ad(0x119)]||![];if(!_0x2d8b2e)return _0x3e2705('*No\x20user\x20found\x20in\x20this\x20context*\x20❌');const _0x49a2f8=await getGroupAdmins(_0x584e3d);if(!_0x49a2f8[_0x26f8ad(0xeb)](_0x2d8b2e))return _0x3e2705('*❗\x20The\x20user\x20is\x20not\x20an\x20admin*');await _0x5ceec0[_0x26f8ad(0xfe)](_0x5ac7a9,[_0x2d8b2e],_0x26f8ad(0xd1));const _0x3a951a={'text':_0x26f8ad(0x13b)},_0xe4c44b={'quoted':_0x6085c4};await _0x5ceec0[_0x26f8ad(0x172)](_0x5ac7a9,_0x3a951a,_0xe4c44b);}catch(_0x52caeb){const _0x45ffcc={'text':'❌','key':_0x6085c4['key']},_0x511dce={'react':_0x45ffcc};await _0x5ceec0[_0x26f8ad(0x172)](_0x5ac7a9,_0x511dce),console[_0x26f8ad(0x11f)](_0x52caeb),_0x3e2705(_0x26f8ad(0x17d)+_0x52caeb);}});const _0x53a4af={};_0x53a4af[_0x3cc58a(0x11d)]=_0x3cc58a(0x126),_0x53a4af[_0x3cc58a(0xdc)]='🔊',_0x53a4af['alias']=['f_tagall'],_0x53a4af['desc']='To\x20Tag\x20all\x20Members',_0x53a4af['category']=_0x3cc58a(0x167),_0x53a4af['use']=_0x3cc58a(0x100),_0x53a4af[_0x3cc58a(0x15c)]=__filename,cmd(_0x53a4af,async(_0xd47a9d,_0x2464ba,_0x31d6c7,{from:_0x44f54c,l:_0x2d3516,quoted:_0xa5acf0,body:_0x3fb054,isCmd:_0x21fa92,command:_0x45e362,mentionByTag:_0x33dcf0,args:_0x205a2a,q:_0xd33e25,isGroup:_0x54e1af,sender:_0x33faad,senderNumber:_0x3ca826,botNumber2:_0x233cbd,botNumber:_0x45ab94,pushname:_0x109716,isMe:_0x4c55d5,isOwner:_0x1bd50a,groupMetadata:_0x345d1a,groupName:_0x4e6453,participants:_0xdfe576,groupAdmins:_0x3bfb1a,isBotAdmins:_0x585e0e,isCreator:_0x3e8ed,isDev:_0x296ab9,isAdmins:_0x606738,reply:_0x32184b})=>{const _0x64ffeb=_0x3cc58a;try{const _0x114da2=(await fetchJson(_0x64ffeb(0xdf)))['replyMsg'];if(!_0x54e1af)return _0x32184b(_0x114da2[_0x64ffeb(0xfd)]);if(!_0x606738){const _0x2c63cd={'quoted':_0x2464ba};if(!_0x296ab9)return _0x32184b(_0x114da2[_0x64ffeb(0x12e)]),_0x2c63cd;}if(!_0x585e0e)return _0x32184b(_0x114da2[_0x64ffeb(0x14f)]);let _0x5820dd=_0x64ffeb(0xd5);for(let _0xbcde55 of _0xdfe576){_0x5820dd+=_0x64ffeb(0x148)+_0xbcde55['id']['split']('@')[0x0]+'\x0a';}const _0x2d607c={'quoted':_0x2464ba};_0xd47a9d[_0x64ffeb(0x172)](_0x44f54c,{'text':_0x5820dd,'mentions':_0xdfe576[_0x64ffeb(0xdb)](_0x5b67ae=>_0x5b67ae['id'])},_0x2d607c);}catch(_0x13e98e){const _0x4edb4b={'text':'❌','key':_0x2464ba[_0x64ffeb(0x10b)]},_0x107e42={'react':_0x4edb4b};await _0xd47a9d[_0x64ffeb(0x172)](_0x44f54c,_0x107e42),console[_0x64ffeb(0x11f)](_0x13e98e),_0x32184b(_0x64ffeb(0x152)+_0x13e98e);}});const _0x3220aa={};_0x3220aa['pattern']=_0x3cc58a(0xd9),_0x3220aa[_0x3cc58a(0xdc)]='🔊',_0x3220aa[_0x3cc58a(0x120)]=[_0x3cc58a(0x15b),'f_tag'],_0x3220aa[_0x3cc58a(0x118)]=_0x3cc58a(0xed),_0x3220aa[_0x3cc58a(0x138)]=_0x3cc58a(0x167),_0x3220aa[_0x3cc58a(0x124)]=_0x3cc58a(0x154),_0x3220aa[_0x3cc58a(0x15c)]=__filename,cmd(_0x3220aa,async(_0x3705fb,_0x1ebb9b,_0x40b385,{from:_0x424895,l:_0x1449a1,quoted:_0x1703c2,body:_0x3b3bfd,isCmd:_0x1b6c25,command:_0x5cd377,mentionByTag:_0x55538c,args:_0x385c78,q:_0x5c7522,isGroup:_0x43b4c7,sender:_0x5820df,senderNumber:_0x31ab89,botNumber2:_0x33ba55,botNumber:_0x37cecc,pushname:_0x1c18b2,isMe:_0x4547db,isOwner:_0x557a69,groupMetadata:_0x27eb7b,groupName:_0x39e002,participants:_0x113f73,groupAdmins:_0x96aaee,isBotAdmins:_0x264286,isCreator:_0x33b2aa,isDev:_0x33db7c,isAdmins:_0x3d06cc,reply:_0x15eba2})=>{const _0x337fd7=_0x3cc58a;try{if(!_0x43b4c7)return _0x15eba2(_0x337fd7(0x173));if(!_0x3d06cc&&!_0x557a69)return _0x15eba2(_0x337fd7(0x15f));if(!_0x264286)return _0x15eba2(_0x337fd7(0x180));if(!_0x5c7522)return _0x15eba2(_0x337fd7(0x16b));let _0x143f78=''+_0x5c7522;const _0x4898ac={'quoted':_0x1ebb9b};await _0x3705fb[_0x337fd7(0x172)](_0x424895,{'text':_0x143f78,'mentions':_0x113f73[_0x337fd7(0xdb)](_0x26efe0=>_0x26efe0['id'])},_0x4898ac);}catch(_0x469639){const _0x308123={'text':'❌','key':_0x1ebb9b[_0x337fd7(0x10b)]},_0x3ba7ab={'react':_0x308123};await _0x3705fb[_0x337fd7(0x172)](_0x424895,_0x3ba7ab),console['log'](_0x469639),_0x15eba2(_0x337fd7(0xe2)+_0x469639);}});const _0x446ca7={};_0x446ca7[_0x3cc58a(0x11d)]=_0x3cc58a(0x14b),_0x446ca7['react']='🔊',_0x446ca7[_0x3cc58a(0x120)]=['tggp',_0x3cc58a(0x132)],_0x446ca7['desc']=_0x3cc58a(0xed),_0x446ca7['category']=_0x3cc58a(0x167),_0x446ca7[_0x3cc58a(0x124)]=_0x3cc58a(0x154),_0x446ca7['filename']=__filename,cmd(_0x446ca7,async(_0x2ffe5a,_0x47ee5e,_0x41c27c,{from:_0x4f258c,l:_0x5f0244,quoted:_0x2f7d66,body:_0x37475c,isCmd:_0x4f0952,command:_0x3e897a,mentionByTag:_0x230332,args:_0x3b5769,q:_0x41db6f,isGroup:_0x3e7e6b,sender:_0x30cd17,senderNumber:_0x57eafb,botNumber2:_0xbe00ce,botNumber:_0x2a4889,pushname:_0x1e0f13,isMe:_0x1342bc,isOwner:_0x438c42,groupMetadata:_0x28f0cc,groupName:_0x3a0689,participants:_0x582352,groupAdmins:_0x3799af,isBotAdmins:_0x5cbaf3,isCreator:_0x51e46b,isDev:_0x1721d9,isAdmins:_0x4f0955,reply:_0x401b32})=>{const _0x44e23f=_0x3cc58a;try{if(!_0x41c27c[_0x44e23f(0x12c)])return _0x401b32(_0x44e23f(0x169));if(!_0x41db6f)return _0x401b32(_0x44e23f(0xe9));let _0xfc3d19=''+_0x41c27c['quoted'][_0x44e23f(0xf4)];const _0x23f551={'quoted':_0x47ee5e};_0x2ffe5a[_0x44e23f(0x172)](_0x41db6f,{'text':_0xfc3d19,'mentions':_0x582352[_0x44e23f(0xdb)](_0x2575a6=>_0x2575a6['id'])},_0x23f551);}catch(_0xc20d59){const _0x43f0e5={'text':'❌','key':_0x47ee5e[_0x44e23f(0x10b)]},_0x1da769={'react':_0x43f0e5};await _0x2ffe5a[_0x44e23f(0x172)](_0x4f258c,_0x1da769),console['log'](_0xc20d59),_0x401b32(_0x44e23f(0x152)+_0xc20d59);}});const _0x4c04aa={};_0x4c04aa[_0x3cc58a(0x11d)]=_0x3cc58a(0x183),_0x4c04aa[_0x3cc58a(0xdc)]='🥏',_0x4c04aa['alias']=['groupinfo'],_0x4c04aa[_0x3cc58a(0x118)]=_0x3cc58a(0x181),_0x4c04aa[_0x3cc58a(0x138)]=_0x3cc58a(0x167),_0x4c04aa['use']=_0x3cc58a(0x170),_0x4c04aa['filename']=__filename,cmd(_0x4c04aa,async(_0x1a4cf7,_0x217f7f,_0x2329de,{from:_0x27bc28,l:_0x296cb5,quoted:_0x1be01b,body:_0x27d2bb,isCmd:_0x304fb5,command:_0x131df4,args:_0x25e914,q:_0x1c45b9,isGroup:_0x1cfb49,sender:_0x24b8b2,senderNumber:_0x328ca5,botNumber2:_0x477bc7,botNumber:_0x33b85c,pushname:_0x9b1a2d,isMe:_0x33af20,isOwner:_0x3c4706,groupMetadata:_0x14caba,groupName:_0x5b5d7a,participants:_0x15f0a4,groupAdmins:_0x31f0c5,isBotAdmins:_0x52ec0c,isCreator:_0x4f9eec,isDev:_0x202842,isAdmins:_0x401bc7,reply:_0x2ba3d6})=>{const _0x272567=_0x3cc58a;try{const _0xf4ab94=(await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json'))[_0x272567(0xff)];if(!_0x1cfb49)return _0x2ba3d6(_0xf4ab94['only_gp']);if(!_0x401bc7&&!_0x3c4706)return _0x2ba3d6(_0xf4ab94[_0x272567(0x12e)]);if(!_0x52ec0c)return _0x2ba3d6(_0xf4ab94[_0x272567(0x14f)]);const _0x339b87=await _0x1a4cf7[_0x272567(0xfa)](_0x27bc28);let _0x357299=await _0x1a4cf7[_0x272567(0x14c)](_0x27bc28,_0x272567(0x110));const _0x503583='\x0a*'+_0x339b87[_0x272567(0xd0)]+_0x272567(0xda)+_0x339b87['id']+_0x272567(0x16c)+_0x339b87[_0x272567(0xde)]+_0x272567(0x115)+_0x339b87['owner']+_0x272567(0x16a)+(_0x339b87[_0x272567(0x118)]||_0x272567(0x10d))+'\x0a\x0a',_0x55c4e5={'url':_0x357299},_0x49b3d6={'quoted':_0x217f7f};await _0x1a4cf7['sendMessage'](_0x27bc28,{'image':_0x55c4e5,'caption':_0x503583+config[_0x272567(0xe8)]},_0x49b3d6);}catch(_0xd823f2){const _0x4aaf6c={'text':'❌','key':_0x217f7f['key']},_0x63a003={'react':_0x4aaf6c};await _0x1a4cf7[_0x272567(0x172)](_0x27bc28,_0x63a003),console[_0x272567(0x11f)](_0xd823f2),_0x2ba3d6(_0x272567(0xe2)+_0xd823f2);}});