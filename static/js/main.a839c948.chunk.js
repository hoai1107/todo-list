(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{143:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(34),a=n.n(c),r=n(188),s=n(166),d=n(167),l=n(4),o=function(){return Object(l.jsxs)(s.a,{textAlign:"center",p:20,mb:20,bgGradient:"linear(to-l,#2a5298,#1e3c72,#2a5298)",children:[Object(l.jsx)(d.a,{color:"white",size:"3xl",children:"To-do List"}),Object(l.jsx)("span",{style:{fontSize:"3rem"},role:"img",children:"\ud83d\ude80"})]})},j=n(168),b=Object(j.a)({fonts:{heading:"Pacifico",body:"Montserrat"}}),O=(n(143),n(144),n(145),n(181)),u=n(186),h=n(192),x=n(169),f=n(171),p=n(23),m=n(30),g={ALL:"ALL",COMPLETED:"COMPLETED",INCOMPLETED:"INCOMPLETED"},k=g.ALL,y=Object(m.c)({name:"filter",initialState:k,reducers:{toggle:function(e,t){return t.payload}}}),S=Object(m.b)("filter/toggle",(function(e){return{payload:e}})),w=function(){var e=Object(p.c)((function(e){return e.filter})),t=Object(p.b)();return Object(l.jsx)(h.b,{w:"full",alignItems:"center",mb:8,children:Object(l.jsx)(x.a,{columns:{base:1,sm:3},spacing:4,w:{base:"sm",md:"lg"},children:Object.values(g).map((function(n){return Object(l.jsx)(u.a,{colorScheme:"teal",variant:n===e?"solid":"outline",onClick:function(){return t(S(n))},children:Object(l.jsx)(f.a,{fontSize:["md",null,"lg"],sx:{"font-family":"'Acme', sans-serif"},children:n})})}))})})},C=n(180),v=n(110),D=n(111),T=n(187),I=n(175),E=n(178),L=n(179),z=n(176),A=n(177),F=n(96),M=n(10),P=Object(m.c)({name:"tasks",initialState:[],reducers:{add:function(e,t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).toISOString();return{id:Object(m.d)(),title:e,completed:!1,deadline:t}}(t.payload.title,t.payload.deadline);return[].concat(Object(M.a)(e),[n])},toggle:function(e,t){e.find((function(e){return e.id===t.payload.id})).completed=t.payload.completed},delete:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},edit:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload.id}));e[n].title=t.payload.title,e[n].deadline=t.payload.deadline}}}),q=Object(m.b)("tasks/add",(function(e,t){return{payload:{title:e,deadline:t}}})),W=Object(m.b)("tasks/toggle",(function(e,t){return{payload:{id:e,completed:t}}})),B=Object(m.b)("tasks/delete",(function(e){return{payload:e}})),G=Object(m.b)("tasks/edit",(function(e,t,n){return{payload:{id:e,title:t,deadline:n}}})),N=n(46),R=n(184),_=n(193),V=n(86),J=n(52),K=n(173),U=n(174),X=function(e){var t=e.isOpen,n=e.onClose,c=e.task,a=e.id,r=e.deadline,s=Object(i.useRef)(),d=Object(p.b)(),o=Object(V.a)(),j=o.register,b=o.handleSubmit,O=o.formState.errors;return Object(l.jsxs)(R.a,{size:"lg",isOpen:t,onClose:n,initialFocusRef:s,isCentered:!0,children:[Object(l.jsx)(R.g,{}),Object(l.jsxs)(R.d,{p:4,children:[Object(l.jsx)(R.f,{children:"Edit Task"}),Object(l.jsx)(R.c,{}),Object(l.jsxs)("form",{onSubmit:b((function(e){var t=e.task,i=e.date;d(G(a,t,new Date(i).toISOString())),n()})),children:[Object(l.jsx)(R.b,{children:Object(l.jsxs)(h.b,{spacing:4,children:[Object(l.jsxs)(J.a,{isInvalid:O.task,children:[Object(l.jsx)(K.a,{htmlFor:"task_edit",children:"Task description"}),Object(l.jsx)(_.a,Object(N.a)({id:"task_edit",type:"text",defaultValue:c,ref:s},j("task",{required:"This is required!"}))),Object(l.jsx)(U.a,{children:O.task&&Object(l.jsx)("span",{children:O.task.message})})]}),Object(l.jsxs)(J.a,{isInvalid:O.date,children:[Object(l.jsx)(K.a,{htmlFor:"deadline_edit",children:"Deadline"}),Object(l.jsx)(_.a,Object(N.a)({id:"deadline_edit",type:"date",defaultValue:"object"===typeof r?r.toISOString().substr(0,10):r.substr(0,10)},j("date",{required:"This is required!"}))),Object(l.jsx)(U.a,{children:O.date&&Object(l.jsx)("span",{children:O.date.message})})]})]})}),Object(l.jsx)(R.e,{children:Object(l.jsx)(u.a,{colorScheme:"blue",size:"md",type:"submit",children:"Save"})})]})]})]})},Y=function(e){var t=Object(p.b)(),n=Object(I.a)(),i=n.isOpen,c=n.onOpen,a=n.onClose,r=Object(z.a)(Object(A.a)(e.deadline),new Date);return Object(l.jsxs)(E.a,{alignItems:"center",border:"1px",borderColor:"gray.200",w:"full",p:[2,4],borderRadius:"lg",boxShadow:"xl",bgColor:!r&&"gray.100",children:[Object(l.jsxs)(h.a,{spacing:4,children:[Object(l.jsx)(T.a,{isDisabled:!r,colorScheme:"green",size:"lg",isChecked:e.completed,onChange:function(n){return t(W(e.id,n.target.checked))}}),Object(l.jsxs)(h.b,{alignItems:"flex-start",px:4,children:[Object(l.jsx)(f.a,{fontSize:"lg",children:e.task}),Object(l.jsxs)(f.a,{as:"i",children:[Object(l.jsx)("span",{style:{fontStyle:"normal"},children:"\u23f0 "}),"Deadline: ",new Date(e.deadline).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]})]}),Object(l.jsx)(L.a,{}),Object(l.jsx)(h.a,{ml:"auto",children:Object(l.jsxs)(D.a,{variant:"solid",size:"xs",children:[Object(l.jsxs)(u.a,{leftIcon:Object(l.jsx)(F.b,{}),colorScheme:"blue",onClick:c,children:["Edit",Object(l.jsx)(X,{task:e.task,id:e.id,isOpen:i,onClose:a,deadline:e.deadline})]}),Object(l.jsx)(u.a,{leftIcon:Object(l.jsx)(F.a,{}),colorScheme:"red",onClick:function(){return t(B(e.id))},children:"Delete"})]})})]})},$=function(){var e=Object(p.c)((function(e){return e.tasks})),t=Object(p.c)((function(e){return e.filter}));return 0===e.length?Object(l.jsx)(C.a,{pt:20,children:Object(l.jsx)(f.a,{color:"gray.400",sx:{"font-family":"'Acme', sans-serif"},fontSize:"5xl",children:"Nothing to do...  ( \uff89 \uff9f\uff70\uff9f)\uff89"})}):(t===g.COMPLETED?e=e.filter((function(e){return!0===e.completed})):t===g.INCOMPLETED&&(e=e.filter((function(e){return!1===e.completed}))),Object(l.jsx)(x.a,{columns:[1,2],spacingX:20,spacingY:12,minChildWidth:"24rem",px:[0,8],children:e.map((function(e){return Object(l.jsx)(v.b,{colSpan:1,children:Object(l.jsx)(Y,{id:e.id,task:e.title,completed:e.completed,deadline:e.deadline},e.id)})}))}))},H=function(e){return Object(l.jsxs)(E.a,{w:"full",justifyContent:"center",mb:8,children:[Object(l.jsxs)(R.a,{size:"lg",isCentered:!0,isOpen:e.isOpen,onOpen:e.onOpen,onClose:e.onClose,children:[Object(l.jsx)(R.g,{}),Object(l.jsxs)(R.d,{p:4,children:[Object(l.jsx)(R.f,{children:"Add Task"}),Object(l.jsx)(R.c,{}),Object(l.jsx)(R.b,{children:e.children})]})]}),Object(l.jsx)(s.a,{as:"button",p:4,onClick:e.onOpen,w:["sm",null,"lg"],borderRadius:"15px",sx:{"background-image":"linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)","background-size":"200% auto",transition:"0.5s","&:hover":{"background-position":"right center"}},children:Object(l.jsx)(f.a,{fontSize:"xl",fontWeight:"bold",color:"white",children:"ADD TASK"})})]})},Q=function(){var e=Object(V.a)(),t=e.register,n=e.handleSubmit,i=e.formState.errors,c=Object(I.a)(),a=c.isOpen,r=c.onOpen,s=c.onClose,d=Object(p.b)();return Object(l.jsx)(H,{isOpen:a,onOpen:r,onClose:s,children:Object(l.jsx)("form",{onSubmit:n((function(e){d(q(e.task,new Date(e.deadline).toISOString())),s()})),children:Object(l.jsxs)(h.b,{spacing:4,children:[Object(l.jsxs)(J.a,{isInvalid:i.task,children:[Object(l.jsx)(K.a,{htmlFor:"task",children:"Task discription"}),Object(l.jsx)(_.a,Object(N.a)({type:"text",id:"task",placeholder:"What to do ..."},t("task",{required:"This is required!"}))),Object(l.jsx)(U.a,{children:i.task&&Object(l.jsx)("span",{children:i.task.message})})]}),Object(l.jsxs)(J.a,{isInvalid:i.deadline,children:[Object(l.jsx)(K.a,{htmlFor:"deadline",children:"Deadline"}),Object(l.jsx)(_.a,Object(N.a)({type:"date",id:"deadline"},t("deadline",{required:"This is required!"}))),Object(l.jsx)(U.a,{children:i.deadline&&Object(l.jsx)("span",{children:i.deadline.message})})]}),Object(l.jsx)(u.a,{colorScheme:"teal",size:"lg",type:"submit",my:4,children:"Add task"})]})})})},Z=function(){return Object(l.jsxs)(O.a,{maxWidth:"container.xl",pb:20,children:[Object(l.jsx)(Q,{}),Object(l.jsx)(w,{}),Object(l.jsx)($,{})]})},ee=n(24),te=n(115),ne=n.n(te),ie=n(48),ce=Object(ee.b)({tasks:P.reducer,filter:y.reducer}),ae={key:"root",storage:ne.a},re=Object(ie.g)(ae,ce),se=Object(m.a)({reducer:re,middleware:function(e){return e({serializableCheck:{ignoredActions:[ie.a,ie.f,ie.b,ie.c,ie.d,ie.e]}})}}),de=Object(ie.h)(se),le=n(120),oe=n(116),je=function(){return Object(l.jsxs)(s.a,{w:"full",p:4,shadow:"md",sx:{"background-color":"#FEF5ED"},children:[Object(l.jsx)(d.a,{textAlign:"center",mb:4,sx:{color:"#2F86A6"},children:"Calendar"}),Object(l.jsx)(s.a,{bgColor:"white",p:4,children:Object(l.jsx)(le.a,{plugins:[oe.a],initialView:"dayGridMonth",headerToolbar:{start:"title",center:"",end:"prev,next"},views:{dayGridMonth:{titleFormat:{month:"long",year:"numeric"}}}})})]})},be=n(182),Oe=n(185),ue=n(189);var he=function(){var e=Object(p.c)((function(e){return e.tasks}));return e=e.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{deadline:Object(A.a)(e.deadline)})})),console.log(e),e=e.filter((function(e){return!1===e.completed&&Object(ue.a)(e.deadline,{weekStartsOn:1})&&Object(z.a)(e.deadline,new Date)})),Object(l.jsxs)(s.a,{shadow:"lg",p:8,bgColor:"gray.100",children:[Object(l.jsx)(d.a,{as:"u",sx:{color:"#C37B89"},children:"This week's deadlines"}),Object(l.jsx)(be.a,{spacing:4,mt:4,children:e.map((function(e){return Object(l.jsx)(be.b,{children:Object(l.jsxs)(f.a,{fontSize:20,children:["\u2728",e.title," (".concat((t=e.deadline,Object(Oe.a)(t,new Date))," left)")]})});var t}))})]})},xe=function(){return Object(l.jsx)(s.a,{p:4,mr:{base:0,md:12},w:{base:"full",md:"lg"},maxWidth:"2xl",children:Object(l.jsxs)(h.b,{spacing:20,children:[Object(l.jsx)(he,{}),Object(l.jsx)(je,{})]})})},fe=n(117),pe=function(){return Object(l.jsx)(r.a,{theme:b,children:Object(l.jsx)(p.a,{store:se,children:Object(l.jsxs)(fe.a,{loading:null,persistor:de,children:[Object(l.jsx)(o,{}),Object(l.jsxs)(E.a,{direction:{base:"column",md:"row"},gridGap:10,children:[Object(l.jsx)(Z,{}),Object(l.jsx)(xe,{})]})]})})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(i.StrictMode,{children:Object(l.jsx)(pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),me()}},[[154,1,2]]]);
//# sourceMappingURL=main.a839c948.chunk.js.map