(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{617:function(e,t,n){var content=n(623);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(102).default)("2e107364",content,!0,{sourceMap:!1})},622:function(e,t,n){"use strict";var r=n(617);n.n(r).a},623:function(e,t,n){(t=n(101)(!1)).push([e.i,".container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;background-color:#000}.vue-command{min-height:100vh;min-width:100%}.vue-command .term-std{height:calc(100vh - 42px);overflow-y:scroll}",""]),e.exports=t},624:function(e,t,n){"use strict";n.r(t);n(33);var r=n(5),o=(n(38),n(31),n(49),n(618),n(619)),c=n.n(o),l=(n(620),{components:{VueCommand:c.a},data:function(){var e=this;return{history:[],loading:!0,commands:{send:function(t){return console.log("send message",t),console.log("send message",t._[0]),e.sendMessage(t._[0]).then((function(e){console.log("hmmm",e)})),Object(o.createStdout)("sending...")}},executed:new Set}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("index",e.$freighter),t.prev=2,t.next=5,e.$freighter.loadHistory();case 5:e.history=t.sent,e.loading=!1,e.history.forEach((function(element){Object(o.createStdout)(element.message)})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log("errror loadHistory: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},methods:{sendMessage:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=1,n.next=4,t.$freighter.sendMessage("FREIGHTER9EXAMPLE",e);case 4:return r=n.sent,console.log("response",r),n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(1),console.log("errror send message: ",n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}}),d=(n(622),n(77)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("vue-command",{attrs:{"yargs-options":{alias:{color:["colour"]}},commands:e.commands,executed:e.executed,title:"Open Marketplace Applications Chat Demo",prompt:"~user@oma:#\t","help-text":"send <your message>","show-help":!0,intro:"Loading messages...","is-in-progress":e.loading,"show-intro":e.loading},on:{"update:executed":function(t){e.executed=t}}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);