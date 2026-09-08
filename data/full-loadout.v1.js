(function(g){
'use strict';
const ALIGN_BY_NAME={
 '아베니우스':1,'시오우':2,'요이조':1,'유즈나미키':3,'프리슈':2,'기리온(사무라이)':2,'부겐':1,'게를루프':3,
 '아르보리스':2,'엘리제':2,'리나리아':3,'클로에':1,'이알마스(검은 지팡이 사무라이)':2,'벤자민':2,'기리온':2,
 '리바나':1,'오필리아':2,'자이드':3,'간돌포':2,'개스턴':2,'엘더':2,'올리브':2,'하인리크':2,
 '라나뷔유':1,'라나뷔유(전사)':1,'라나뷔유(기사)':1,'주인공(사무라이)':2
};
const bond={level:5,slots:5,items:[
 {name:'ロプロクス',atkF:16},{name:'エリオット',atkF:16},{name:'ニロ',atkF:14},{name:'グレアム',atkF:10},{name:'ウゴ',spdF:6}
],total:{atkF:56,hitF:0,spdF:6,critF:0}};
const relic={level:5,slots:4,safety:'same_alignment_1_plus_other_3',byAlign:{
 1:{items:['キメラの剛腕','巨鬼の剛腕','空飛ぶ剣の牙','一つ目巨人の剛腕'],atkF:42,hitF:10,spdF:0,critF:0},
 2:{items:['一つ目巨人の剛腕','巨鬼の剛腕','キメラの剛腕','平地のウサギの急所突き'],atkF:32,hitF:12,spdF:0,critF:6},
 3:{items:['巨鬼の剛腕','キメラの剛腕','空飛ぶ剣の牙','一つ目巨人の剛腕'],atkF:42,hitF:10,spdF:0,critF:0}
}};
function alignFor(name){return ALIGN_BY_NAME[name]||2}
function physicalBonus(name,align){let a=+align||alignFor(name),r=relic.byAlign[a]||relic.byAlign[2],b=bond.total;return {atkF:b.atkF+r.atkF,hitF:b.hitF+r.hitF,spdF:b.spdF+r.spdF,critF:b.critF+r.critF,align:a,bondItems:bond.items.map(x=>x.name),relicItems:r.items.slice()}}
g.FULL_LOADOUT_V1={version:'2026-09-08-full-v1',alignByName:ALIGN_BY_NAME,alignFor,bond,relic,physicalBonus,description:'부가호 최대롤 + 인연 Lv5 5칸 + 유물주 Lv5 4종(동성향 1 + 타성향 3)'};
})(window);
