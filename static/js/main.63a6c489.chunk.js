(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(t,e,a){},146:function(t,e,a){"use strict";a.r(e);var i=a(1),r=a.n(i),n=a(13),s=a(150),o=a(151),l=a(45),c=a(12),u=a(62),h=a(63),p=a(73),d=a(64),v=a(72),y=a(19),m=a(65),f=a.n(m),g=a(149),S=a(147),w=a(148),b=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(d.a)(e).call(this,t))).state={player1:{score:0,turn:!0,type:"X",initTurn:!0},player2:{score:0,turn:!1,type:"O",initTurn:!1},winner:"",gameOver:!1,showPopup:!1,tictactoeSet:[{id:11,value:""},{id:12,value:""},{id:13,value:""},{id:21,value:""},{id:22,value:""},{id:23,value:""},{id:31,value:""},{id:32,value:""},{id:33,value:""}]},f()(Object(y.a)(Object(y.a)(a))),a}return Object(v.a)(e,t),Object(h.a)(e,[{key:"winCombination",value:function(){var t=this.state.tictactoeSet[0].value===this.state.tictactoeSet[1].value&&this.state.tictactoeSet[1].value===this.state.tictactoeSet[2].value,e=this.state.tictactoeSet[0].value===this.state.tictactoeSet[3].value&&this.state.tictactoeSet[3].value===this.state.tictactoeSet[6].value,a=this.state.tictactoeSet[0].value===this.state.tictactoeSet[4].value&&this.state.tictactoeSet[4].value===this.state.tictactoeSet[8].value,i=this.state.tictactoeSet[4].value===this.state.tictactoeSet[3].value&&this.state.tictactoeSet[3].value===this.state.tictactoeSet[5].value,r=this.state.tictactoeSet[4].value===this.state.tictactoeSet[1].value&&this.state.tictactoeSet[1].value===this.state.tictactoeSet[7].value,n=this.state.tictactoeSet[4].value===this.state.tictactoeSet[2].value&&this.state.tictactoeSet[2].value===this.state.tictactoeSet[6].value,s=this.state.tictactoeSet[8].value===this.state.tictactoeSet[6].value&&this.state.tictactoeSet[6].value===this.state.tictactoeSet[7].value,o=this.state.tictactoeSet[8].value===this.state.tictactoeSet[2].value&&this.state.tictactoeSet[2].value===this.state.tictactoeSet[5].value;return""!==this.state.tictactoeSet[0].value&&(t||e||a)?("X"===this.state.tictactoeSet[0].value?this.setState({player1:Object(c.a)({},this.state.player1,{score:this.state.player1.score+1}),winner:"player 1 wins",gameOver:!0,showPopup:!0}):this.setState({player2:Object(c.a)({},this.state.player2,{score:this.state.player2.score+1}),winner:"player 2 wins",gameOver:!0,showPopup:!0}),!0):""!==this.state.tictactoeSet[4].value&&(i||r||n)?("X"===this.state.tictactoeSet[4].value?this.setState({player1:Object(c.a)({},this.state.player1,{score:this.state.player1.score+1}),winner:"player 1 wins",gameOver:!0,showPopup:!0}):this.setState({player2:Object(c.a)({},this.state.player2,{score:this.state.player2.score+1}),winner:"player 2 wins",gameOver:!0,showPopup:!0}),!0):""!==this.state.tictactoeSet[8].value&&(s||o)?("X"===this.state.tictactoeSet[8].value?this.setState({player1:Object(c.a)({},this.state.player1,{score:this.state.player1.score+1}),winner:"player 1 wins",gameOver:!0,showPopup:!0}):this.setState({player2:Object(c.a)({},this.state.player2,{score:this.state.player2.score+1}),winner:"player 2 wins",gameOver:!0,showPopup:!0}),!0):!this.state.tictactoeSet.find(function(t){return""===t.value})&&void this.setState({player1:Object(c.a)({},this.state.player1,{score:this.state.player1.score+.5}),player2:Object(c.a)({},this.state.player2,{score:this.state.player2.score+.5}),winner:"Draw",gameOver:!0,showPopup:!0})}},{key:"onUserClick",value:function(t){var e=this;if(!0===this.state.gameOver)this.setState({showPopup:!0});else if(""!==t.value);else{var a=this.state.tictactoeSet,i=this.state.player1,r=this.state.player2,n=this.state.tictactoeSet.map(function(t){return t.id}).indexOf(t.id);this.state.player1.turn?(a[n].value=i.type,i.turn=!1,r.turn=!0):(a[n].value=r.type,i.turn=!0,r.turn=!1),this.setState({player1:i,player2:r,tictactoeSet:Object(l.a)(a)},function(){return e.winCombination()})}}},{key:"findArrayElementById",value:function(t){return this.state.tictactoeSet.find(function(e){return e.id===t})}},{key:"resetBoard",value:function(){var t,e=this.state.tictactoeSet;e.map(function(t){return t.value="",t});var a=this.state.player2;this.state.player1.initTurn?(a=Object(c.a)({},this.state.player2,{turn:!0,initTurn:!0}),t=Object(c.a)({},this.state.player1,{turn:!1,initTurn:!1})):(t=Object(c.a)({},this.state.player1,{turn:!0,initTurn:!0}),a=Object(c.a)({},this.state.player2,{turn:!1,initTurn:!1})),this.setState({player1:t,player2:a,tictactoeSet:Object(l.a)(e),gameOver:!1})}},{key:"resetGame",value:function(){var t=this.state.tictactoeSet;t.map(function(t){return t.value="",t}),this.setState({player1:{score:0,turn:!0,type:"X",initTurn:!0},player2:{score:0,turn:!1,type:"O",initTurn:!1},winner:"",gameOver:!1,tictactoeSet:t})}},{key:"renderModel",value:function(){var t=this;return r.a.createElement(g.a,{show:this.state.showPopup,bsSize:"small",style:{marginTop:"180px",cursor:"pointer"},"aria-labelledby":"contained-modal-title-sm"},r.a.createElement(g.a.Header,{id:"contained-modal-title-sm",onClick:function(){t.setState({showPopup:!1})}},r.a.createElement(g.a.Title,null," ",r.a.createElement("h3",{style:{textAlign:"center"}},this.state.winner," this round"))),r.a.createElement(g.a.Body,{onClick:function(){t.setState({showPopup:!1})}},r.a.createElement("h5",{style:{textAlign:"center"}},"Player 1 vs Player 2"),r.a.createElement("h4",{style:{textAlign:"center"}},this.state.player1.score," - ",this.state.player2.score)))}},{key:"renderWellField",value:function(t,e){return r.a.createElement(S.a,{style:Object(c.a)({},e,{cursor:"pointer",width:"100px",height:"100px",marginBottom:"0",textAlign:"center",fontSize:"40px"}),onClick:this.onUserClick.bind(this,this.findArrayElementById(t))},this.findArrayElementById(t).value)}},{key:"renderButtonField",value:function(t,e){return r.a.createElement(w.a,{bsSize:"small",style:{marginTop:"10px",marginLeft:"5px"},bsStyle:"danger",onClick:t},e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"TICTACTOE",style:{position:"absolute",left:"50%",transform:"translate(-50%, 0)"}},this.renderModel(),r.a.createElement("div",{style:{marginTop:"17px",marginLeft:"74px"}},r.a.createElement("span",{style:{color:"#00ff51",borderBottom:this.state.player1.turn?"5px solid #37e937":""}}," Player 1(X)")," ",r.a.createElement("span",{style:{color:"red"}},"vs")," ",r.a.createElement("span",{style:{color:"#00ff51",borderBottom:this.state.player2.turn?"5px solid #37e937":""}},"Player 2(O)")),this.renderWellField(11,{marginTop:"17px",float:"left"}),this.renderWellField(12,{marginTop:"17px",marginLeft:"1px",float:"left"}),this.renderWellField(13,{marginTop:"17px",marginLeft:"202px"}),this.renderWellField(21,{marginTop:"1px",float:"left"}),this.renderWellField(22,{marginTop:"1px",marginLeft:"1px",float:"left"}),this.renderWellField(23,{marginTop:"1px",marginLeft:"202px"}),this.renderWellField(31,{marginTop:"1px",float:"left"}),this.renderWellField(32,{marginTop:"1px",marginLeft:"1px",float:"left"}),this.renderWellField(33,{marginTop:"1px",marginLeft:"202px"}),r.a.createElement("div",{style:{color:"#00ff51",marginTop:"2px",float:"left"}},"Player 1: ",this.state.player1.score," ",r.a.createElement("br",null),"Player 2: ",this.state.player2.score),this.renderButtonField(this.resetGame,"Restart the game"),this.renderButtonField(this.resetBoard,"Reset the board"))}}]),e}(r.a.Component);function O(){return r.a.createElement("div",null,"Comming Soon!")}var x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}a(144);Object(n.render)(r.a.createElement(function(){return r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center",margin:"0",paddingTop:"17px",backgroundColor:"#5ae45a"}},"Welcome to Game Center"),r.a.createElement(s.a,{defaultActiveKey:"tictactoe",animation:!1,id:"gameCenter",style:{backgroundColor:"#5ae45a"}},r.a.createElement(o.a,{eventKey:"tictactoe",title:"TicTacToe"},r.a.createElement(b,null)),r.a.createElement(o.a,{eventKey:"checkers",title:"Checkers",style:{textAlign:"center",backgroundColor:"#49add1"}},r.a.createElement(O,null)),r.a.createElement(o.a,{eventKey:"chess",title:"Chess",style:{textAlign:"center",backgroundColor:"#49add1"}},"Comming Soon!")))},null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/games",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/games","/service-worker.js");x?(function(t,e){fetch(t).then(function(a){var i=a.headers.get("content-type");404===a.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):E(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):E(e,t)})}}()},75:function(t,e,a){t.exports=a(146)}},[[75,2,1]]]);
//# sourceMappingURL=main.63a6c489.chunk.js.map