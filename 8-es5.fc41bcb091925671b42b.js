function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fOOd:function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",(function(){return d}));var c,o,i,r=n("ofXK"),a=n("PCNd"),s=n("tyNb"),l=n("fXoL"),u=n("2RwD"),p=((c=function e(){_classCallCheck(this,e),this.clicked=new l.n}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=l.Ab({type:c,selectors:[["app-button"]],inputs:{label:"label"},outputs:{clicked:"clicked"},decls:2,vars:1,consts:[[1,"button",3,"click"]],template:function(e,t){1&e&&(l.Jb(0,"button",0),l.Pb("click",(function(){return t.clicked.emit()})),l.bc(1),l.Ib()),2&e&&(l.wb(1),l.dc(" ",t.label,"\n"))},styles:["button[_ngcontent-%COMP%]{background:transparent;border:1px solid #ccc;border-radius:5px;padding:5px 15px;color:inherit;cursor:pointer}"],changeDetection:0}),c),b=[{path:"",component:(o=function(){function e(t,n){_classCallCheck(this,e),this.router=t,this.lazyLoadService=n}return _createClass(e,[{key:"ngAfterViewInit",value:function(){this.lazyLoadService.update()}}]),e}(),o.\u0275fac=function(e){return new(e||o)(l.Gb(s.d),l.Gb(u.a))},o.\u0275cmp=l.Ab({type:o,selectors:[["app-home"]],decls:5,vars:1,consts:[[1,"home"],[1,"home__card"],[1,"home__heading"],[3,"label","clicked"]],template:function(e,t){1&e&&(l.Jb(0,"div",0),l.Jb(1,"div",1),l.Jb(2,"h1",2),l.bc(3," Home page "),l.Ib(),l.Jb(4,"app-button",3),l.Pb("clicked",(function(){return t.router.navigate(["/posts"])})),l.Ib(),l.Ib(),l.Ib()),2&e&&(l.wb(4),l.Vb("label","Show posts"))},directives:[p],styles:[".home[_ngcontent-%COMP%]{width:100vw;height:100vh}.home__card[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.home__heading[_ngcontent-%COMP%]{font-size:5vmax;line-height:1.5;text-shadow:1px 1px 5px #000}"],changeDetection:0}),o)}],d=((i=function e(){_classCallCheck(this,e)}).\u0275mod=l.Eb({type:i}),i.\u0275inj=l.Db({factory:function(e){return new(e||i)},imports:[[r.c,a.a,s.f.forChild(b)]]}),i)}}]);