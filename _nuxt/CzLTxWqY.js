import{_ as l,t as r,v as i,x as n,y as e,J as f,K as $,B as m,z as _}from"./BkSWBHhG.js";const E={data(){return{name:"Ляшко Дмитрий Викторович",age:"22 года, родился 26 мая 2002",phone:"+7 (996) 1163172",email:"dima.lyashko.2002@mail.ru",city:"Йошкар-Ола"}}},P={class:"header"};function S(u,o,p,c,t,a){return r(),i("div",P,[n("h1",null,e(t.name),1),n("p",null,e(t.age)+", "+e(t.city),1),n("p",null,"Телефон: "+e(t.phone),1),n("p",null,"Email: "+e(t.email),1)])}const y=l(E,[["render",S]]),N={data(){return{position:"Мобильный разработчик",salary:"***",employmentType:"полная занятость, частичная занятость, стажировка",schedule:"гибкий график, удаленная работа"}}},w={class:"position"};function B(u,o,p,c,t,a){return r(),i("div",w,[o[0]||(o[0]=n("h2",null,"Желаемая должность и зарплата",-1)),n("p",null,e(t.position)+" - "+e(t.salary)+" ₽",1),n("p",null,"Тип занятости: "+e(t.employmentType),1),n("p",null,"График работы: "+e(t.schedule),1)])}const x=l(N,[["render",B]]),D={data(){return{jobs:[{company:"ООО 'Белый Тигр. Софт и Приложения'",location:"Йошкар-Ола",position:"Мобильный разработчик Flutter",period:"Ноябрь 2023 — настоящее время (11 месяцев)",duties:["Разработка и отладка мобильных приложений для iOS/Android на Flutter.","Поддержка множества проектов различных версий. Обновление библиотек.","Работа в команде с разработчиками, тестировщиками, менеджерами и аналитиками."],stack:["Dart","Flutter","GIT","Notion","Figma","Firebase","Yandex AppMetrica"]}]}}},M={class:"experience"};function Y(u,o,p,c,t,a){return r(),i("div",M,[o[3]||(o[3]=n("h2",null,"Опыт работы",-1)),(r(!0),i(f,null,$(t.jobs,s=>(r(),i("div",{key:s.company},[n("h3",null,e(s.company)+" ("+e(s.location)+")",1),n("p",null,[o[0]||(o[0]=n("strong",null,"Позиция:",-1)),m(" "+e(s.position),1)]),n("p",null,[o[1]||(o[1]=n("strong",null,"Период:",-1)),m(" "+e(s.period),1)]),n("ul",null,[(r(!0),i(f,null,$(s.duties,d=>(r(),i("li",{key:d},e(d),1))),128))]),n("p",null,[o[2]||(o[2]=n("strong",null,"Стек:",-1)),m(" "+e(s.stack.join(", ")),1)])]))),128))])}const h=l(D,[["render",Y]]),H={data(){return{university:"Поволжский Государственный Технический Университет",faculty:"Факультет информатики и вычислительной техники",specialty:"Программная инженерия (09.03.04)",graduationYear:"2026 (неоконченное высшее)"}}},I={class:"education"};function V(u,o,p,c,t,a){return r(),i("div",I,[o[0]||(o[0]=n("h2",null,"Образование",-1)),n("p",null,e(t.university),1),n("p",null,e(t.faculty)+", "+e(t.specialty),1),n("p",null,"Год окончания: "+e(t.graduationYear),1)])}const k=l(H,[["render",V]]),z={data(){return{skills:["Flutter","Dart","Android SDK","Git","REST API","JSON","API","Figma","phpMyAdmin","Redmine","Firebase","Notion","Appmetrica","dio","hive","HTTP","json_serializable","yandex_mapkit","webview"]}}},G={class:"skills"};function J(u,o,p,c,t,a){return r(),i("div",G,[o[0]||(o[0]=n("h2",null,"Навыки",-1)),n("ul",null,[(r(!0),i(f,null,$(t.skills,s=>(r(),i("li",{key:s},e(s),1))),128))])])}const g=l(z,[["render",J]]),K={data(){return{aboutText:"Познакомился с Dart и Flutter в июне 2023 года. Интересуюсь мобильной разработкой на Flutter.",projects:[{name:"Promminer",link:"https://whitetigersoft.ru/cases/promminer-mobile-app"},{name:"B PAY",link:"https://whitetigersoft.ru/cases/bpay-mobile-app"},{name:"Точка-Точка",link:"https://whitetigersoft.ru/cases/dotdot-mobile-app"}]}}},O={class:"about"},R=["href"];function L(u,o,p,c,t,a){return r(),i("div",O,[o[0]||(o[0]=n("h2",null,"Обо мне",-1)),n("p",null,e(t.aboutText),1),n("ul",null,[(r(!0),i(f,null,$(t.projects,s=>(r(),i("li",{key:s.name},[m(e(s.name)+" - ",1),n("a",{href:s.link},e(s.link),9,R)]))),128))])])}const v=l(K,[["render",L]]),q={components:{Header:y,Position:x,Experience:h,Education:k,Skills:g,AboutMe:v}};function C(u,o,p,c,t,a){const s=y,d=x,F=h,A=k,b=g,T=v;return r(),i("div",null,[_(s),_(d),_(F),_(A),_(b),_(T)])}const U=l(q,[["render",C]]);export{U as default};
