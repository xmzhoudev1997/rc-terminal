"use strict";(self.webpackChunk_xmzhou_rc_terminal=self.webpackChunk_xmzhou_rc_terminal||[]).push([[433],{93717:function(T,l,n){n.r(l),n.d(l,{default:function(){return i}});var u=n(67294),h=n(11268),A=n(85893),y=function(){return(0,A.jsx)(h.O,{className:"demo-terminal",readonly:!0})},i=y},35903:function(T,l,n){n.r(l),n.d(l,{default:function(){return i}});var u=n(67294),h=n(11268),A=n(85893),y=function(){return(0,A.jsx)(h.O,{className:"demo-terminal",inputPrefix:"\u8BF7\u8F93\u5165: "})},i=y},11268:function(T,l,n){n.d(l,{O:function(){return W}});var u=n(67294),h=n(93967),A=n.n(h),y=n(17061),i=n.n(y),S=n(17156),j=n.n(S),z=n(27424),D=n.n(z),N=n(12320),w=n(12617),$=n(67511),G=n(91213),Z=n(77598),B=function(o,g){var p=o.initOptions,R=o.inputPrefix,C=o.readonly,I=o.onPressEnter,b=I===void 0?function(){}:I,E=(0,u.useRef)(null),d=(0,u.useRef)(""),J=(0,u.useState)(),L=D()(J,2),r=L[0],K=L[1],x=(0,u.useRef)(),M=(0,G.Z)(E),P=function(){r!=null&&r.fitAddon&&r.fitAddon.dispose(),r!=null&&r.webLinksAddon&&r.webLinksAddon.dispose(),r&&r.dispose()},Q=function(e){d.current="";var s=R||"";C||e==null||e.write(s);var a=0;s==null||s.split("").forEach(function(f){f.charCodeAt(0)<128?a+=1:a+=2}),x.current&&(x.current.dispose(),x.current=void 0),x.current=e.onData(function(){var f=j()(i()().mark(function v(c){return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(!e||C)){t.next=2;break}return t.abrupt("return");case 2:t.t0=c,t.next=t.t0===""?5:t.t0==="\r"?8:t.t0==="\x7F"?14:16;break;case 5:return e.writeln("^C"),e.write(s),t.abrupt("break",17);case 8:return t.next=10,b(d.current);case 10:return e.writeln(""),e.write(s),d.current="",t.abrupt("break",17);case 14:return e._core.buffer.x>a&&(e.write("\b \b"),d.current.length>0&&(d.current=d.current.substr(0,d.current.length-1))),t.abrupt("break",17);case 16:(c>=String.fromCharCode(32)&&c<=String.fromCharCode(126)||c>="\xA0")&&(d.current+=c,e.write(c));case 17:case"end":return t.stop()}},v)}));return function(v){return f.apply(this,arguments)}}())},O=function(){var F=j()(i()().mark(function e(){var s,a,f,v;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(s=E.current,s){m.next=3;break}return m.abrupt("return");case 3:P(),a=new N.Terminal(p),f=new w.FitAddon,v=new $.WebLinksAddon,a.fitAddon=f,a.webLinksAddon=v,a.loadAddon(f),a.loadAddon(v),a.open(s),f.fit(),K(a),Q(a);case 15:case"end":return m.stop()}},e)}));return function(){return F.apply(this,arguments)}}();return(0,u.useEffect)(function(){return O(),P},[]),(0,Z.Z)(function(){r&&r.writeln(""),O()},[R,C]),(0,u.useEffect)(function(){r!=null&&r.fitAddon&&r.fitAddon.fit()},[M]),(0,u.useImperativeHandle)(g,function(){return r},[r]),{continerRef:E}},V=n(89629),H=n(85893),U=(0,u.forwardRef)(function(o,g){var p=B(o,g),R=p.continerRef;return(0,H.jsx)("div",{className:A()("rc-terminal",o.readonly?"rc-terminal-readonly":"",o.className),ref:R})}),W=U}}]);
