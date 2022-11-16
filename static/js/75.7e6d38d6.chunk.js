"use strict";(self.webpackChunklearning_english_app=self.webpackChunklearning_english_app||[]).push([[75],{6363:function(e,s,a){a.d(s,{Z:function(){return r}});var n="Card_card__Zi619",t=a(184),r=function(e){var s=n;return(0,t.jsx)("div",{onClick:e.onClick,className:e.className?"".concat(s," ").concat(e.className):s,children:e.children})}},6996:function(e,s,a){a.d(s,{Z:function(){return c}});var n="Tooltip_tooltip__JCYZU",t="Tooltip_tooltip-text__ERhzj",r=a(184),c=function(e){return(0,r.jsxs)("div",{className:"".concat(n," ").concat(e.className&&e.className),onClick:e.onClick,children:[e.children,(0,r.jsx)("div",{className:t,children:e.title})]})}},4075:function(e,s,a){a.r(s),a.d(s,{default:function(){return G}});var n=a(8152),t=a(1523),r=a(8931),c=a(6862),i=a(9434),l={level:"LevelList_level__QMKDN",title:"LevelList_title__bqmM2",number:"LevelList_number__DBz5V"},o=a(184),d=function(){var e=(0,i.v9)((function(e){return e.items.words})),s=[0,1,2,3,4].map((function(s){var a=e.filter((function(e){return Math.floor(e.level)===s})).length;return(0,o.jsxs)(t.rU,{className:l.level,to:"/flashcards/practice/level-".concat(s+1),children:[(0,o.jsx)("div",{className:l.title,children:"Level ".concat(s+1)}),(0,o.jsxs)("div",{className:l.quantity,children:["( ",(0,o.jsx)("span",{className:l.number,children:a})," words )"]})]},s)}));return(0,o.jsx)("div",{children:s})},u=a(8683),h=a(2791),_=a(3397),f=a(5055),m=a(6996),v=a(7425),x=a(8820),j=a(6856),N="Vocabulary_container__LhuxJ",p="Vocabulary_title__rBN43",b="Vocabulary_word__g9AIQ",w="Vocabulary_update-note__5KlYl",y="Vocabulary_add-btn__q0LSh",k="Vocabulary_remove-btn__DzjDN",C="Vocabulary_icon__cKXMx",L="Vocabulary_confirm-btn__7Lzb6",g="Vocabulary_input__36p4H",V="Vocabulary_active__i8Osv",Z=function(e){var s=(0,h.useState)(!1),a=(0,n.Z)(s,2),t=a[0],r=a[1],c=(0,h.useState)(""),l=(0,n.Z)(c,2),d=l[0],Z=l[1],F=(0,i.I0)();return(0,o.jsxs)("div",{className:N,children:[(0,o.jsxs)("div",{className:p,children:[(0,o.jsxs)("p",{className:b,children:[e.item.word," "]}),e.item.note&&(0,o.jsxs)("i",{children:["( ",e.item.note," )"]})]}),(0,o.jsxs)("div",{className:w,children:[(0,o.jsx)("input",{onChange:function(e){e.preventDefault(),Z(e.target.value)},value:d,className:"".concat(g," ").concat(t?V:"")}),(0,o.jsx)("button",{onClick:function(){if(t){r(!1);var s=(0,u.Z)({},e.item);s.note=d,F((0,_.x6)(s)),F(f.Vy.updateNote(s)),Z("")}else r(!0)},className:"".concat(y," ").concat(t?L:""),children:t?(0,o.jsx)(m.Z,{className:C,title:"Confirm",children:(0,o.jsx)(j.HhX,{})}):(0,o.jsx)(m.Z,{className:C,title:"Add Your Note",children:(0,o.jsx)(x.$iz,{})})}),(0,o.jsx)("button",{onClick:function(){F(f.Vy.remove("sorry")),F((0,_.kx)(e.item))},className:k,children:(0,o.jsx)(m.Z,{className:C,title:"Remove From List",children:(0,o.jsx)(v.GnT,{})})})]})]})},F={list:"VocabList_list__gNauq"},D=function(){var e=(0,i.v9)((function(e){return e.items.words})),s=(0,o.jsx)("ul",{className:F.list,children:e.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(Z,{item:e})},e.word)}))});return(0,o.jsx)("div",{className:F.vocabulary_list,children:e.length>0&&s})},W=a(6363),z="LearnedWords_learned-words-content__8gDLK",O="LearnedWords_word-box__Xyx+s",S=function(){var e=(0,i.v9)((function(e){return e.items.words})).filter((function(e){return e.level>4})),s=(0,r.k6)(),a=e.map((function(e){return(0,o.jsx)("li",{className:O,onClick:function(){return a=e.word,void s.push("/dictionary/".concat(a));var a},children:(0,o.jsx)("a",{children:e.word})},e.word)})),n=(0,o.jsx)("div",{children:"There is no word to complete all of the levels, so this tab is empty."});return(0,o.jsx)("ul",{className:z,children:e.length>0?a:n})},T="DifficultWords_difficult-words-content__sBJGG",q="DifficultWords_word-box__i9nrN",M=function(){var e=(0,i.v9)((function(e){return e.items.words})).filter((function(e){return e.wrong>3})),s=(0,r.k6)(),a=e.map((function(e){return(0,o.jsx)("li",{className:q,onClick:function(){return a=e.word,void s.push("/dictionary/".concat(a));var a},children:(0,o.jsx)("a",{children:e.word})},e.word)})),n=(0,o.jsx)("div",{children:"There is no word that you have difficulty in memorizing. (Word with more than 5 times saying wrong!)"});return(0,o.jsx)("ul",{className:T,children:e.length>0?a:n})},B={title:"Flashcards_title__CBzSW",tab:"Flashcards_tab__quzVi",flashcards_actions:"Flashcards_flashcards_actions__6GFgO",link:"Flashcards_link__xNDWw","active-link":"Flashcards_active-link__fMFFV",empty:"Flashcards_empty__YOdU1"},G=function(){var e=(0,h.useState)(""),s=(0,n.Z)(e,2),a=s[0],i=s[1],l=(0,r.TH)();return(0,h.useEffect)((function(){"/flashcards"===l.pathname?i(!1):i(!0)}),[l.pathname]),(0,o.jsxs)("div",{className:B.Flashcards,children:[(0,o.jsx)("h2",{className:B.title,children:"FlashCards"}),(0,o.jsxs)(W.Z,{className:B.tab,children:[(0,o.jsxs)("div",{className:B.flashcards_actions,children:[(0,o.jsx)(t.OL,{activeClassName:B["active-link"],className:B.link,to:"/flashcards/vocabulary-list",children:"Vocabulary List"}),(0,o.jsx)(t.OL,{activeClassName:B["active-link"],className:B.link,to:"/flashcards/practice",children:"Let's Study"}),(0,o.jsx)(t.OL,{activeClassName:B["active-link"],className:B.link,to:"/flashcards/learned-words",children:"Learned Words"}),(0,o.jsx)(t.OL,{activeClassName:B["active-link"],className:B.link,to:"/flashcards/difficult-words",children:"Difficult Words"})]}),!a&&(0,o.jsx)("div",{className:B.empty,children:(0,o.jsx)("i",{children:"(Choose your tab to see content.)"})}),(0,o.jsx)(r.rs,{children:(0,o.jsx)(c.default,{path:"/flashcards/vocabulary-list",children:(0,o.jsx)(D,{})})}),(0,o.jsx)(r.rs,{children:(0,o.jsx)(c.default,{path:"/flashcards/practice",children:(0,o.jsx)(d,{})})}),(0,o.jsx)(r.rs,{children:(0,o.jsx)(c.default,{path:"/flashcards/learned-words",children:(0,o.jsx)(S,{})})}),(0,o.jsx)(r.rs,{children:(0,o.jsx)(c.default,{path:"/flashcards/difficult-words",children:(0,o.jsx)(M,{})})})]})]})}},6862:function(e,s,a){a.r(s);var n=a(8683),t=a(5987),r=a(8931),c=a(2791),i=a(9009),l=a(184),o=["children","path"];s.default=function(e){var s=e.children,a=e.path,d=(0,t.Z)(e,o);return(0,c.useContext)(i.Z).check()?(0,l.jsx)(r.AW,(0,n.Z)((0,n.Z)({},d),{},{render:function(){return s}})):(0,l.jsx)(r.l_,{to:"/sign-in?path=".concat(a)})}}}]);
//# sourceMappingURL=75.7e6d38d6.chunk.js.map