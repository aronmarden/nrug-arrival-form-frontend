"use strict";(self.webpackChunknrug_arrival_form_frontend=self.webpackChunknrug_arrival_form_frontend||[]).push([[78],{7661:function(t,e,n){n.d(e,{o:function(){return f}});var r=n(2982),i=n(5671),s=n(3144),a=n(7326),o=n(136),u=n(9388),l=n(3197),d=n(3114),c=n(2041),h=n(8464),v=n(9471),f=function(t){(0,o.Z)(n,t);var e=(0,u.Z)(n);function n(t,r,s){var o,u;return(0,i.Z)(this,n),(u=e.call(this,s)).endpoint=t,u.opts=r||{},u.started=!1,u.timeoutHandle=null,u.aborted=!1,u.harvest=new c.M(u.sharedContext),(0,h.L)(u.unload.bind((0,a.Z)(u))),null===(o=u.sharedContext)||void 0===o||o.ee.on(v.wO.RESET,(function(){return u.runHarvest({forceNoRetry:!0})})),u}return(0,s.Z)(n,[{key:"unload",value:function(){this.aborted||(this.opts.onUnload&&this.opts.onUnload(),this.runHarvest({unload:!0}))}},{key:"startTimer",value:function(t,e){this.interval=t,this.started=!0,this.scheduleHarvest(null!=e?e:this.interval)}},{key:"stopTimer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.aborted=t,this.started=!1,this.timeoutHandle&&clearTimeout(this.timeoutHandle)}},{key:"scheduleHarvest",value:function(t,e){var n=this;this.timeoutHandle||(null==t&&(t=this.interval),this.timeoutHandle=setTimeout((function(){n.timeoutHandle=null,n.runHarvest(e)}),1e3*t))}},{key:"runHarvest",value:function(t){var e=this;if(!this.aborted){var n,i,s=function(n){null!==t&&void 0!==t&&t.forceNoRetry&&(n.retry=!1),e.onHarvestFinished(t,n)},a=[];if(this.opts.getPayload){if(!(n=l.qD({isFinalHarvest:null===t||void 0===t?void 0:t.unload})))return!1;var o=!(null!==t&&void 0!==t&&t.unload)&&n===l.Be;if(!(i=this.opts.getPayload({retry:o})))return void(this.started&&this.scheduleHarvest());i="[object Array]"===Object.prototype.toString.call(i)?i:[i],a.push.apply(a,(0,r.Z)(i))}var u=function(t){return e.harvest.sendX(t)};a.length?u=this.opts.raw?function(t){return e.harvest._send(t)}:function(t){return e.harvest.send(t)}:a.push(void 0),a.forEach((function(r){u({endpoint:e.endpoint,payload:r,opts:t,submitMethod:n,cbFinished:s,customUrl:e.opts.customUrl,raw:e.opts.raw})})),this.started&&this.scheduleHarvest()}}},{key:"onHarvestFinished",value:function(t,e){if(this.opts.onFinished&&this.opts.onFinished(e),e.sent&&e.retry){var n=e.delay||this.opts.retryDelay;this.started&&n?(clearTimeout(this.timeoutHandle),this.timeoutHandle=null,this.scheduleHarvest(n,t)):!this.started&&n&&this.scheduleHarvest(n,t)}}}]),n}(d.w)},8464:function(t,e,n){n.d(e,{L:function(){return u}});var r=n(7762),i=n(1997),s=n(3980),a=n(536);if(s.v6){s._A.cleanupTasks=[];var o=s._A.close;s._A.close=function(){var t,e=(0,r.Z)(s._A.cleanupTasks);try{for(e.s();!(t=e.n()).done;){(0,t.value)()}}catch(n){e.e(n)}finally{e.f()}o()}}function u(t){s.il?((0,a.N)(t,!0),(0,i.bP)("pagehide",t)):s.v6&&s._A.cleanupTasks.push(t)}},2337:function(t,e,n){n.r(e),n.d(e,{Aggregate:function(){return g}});var r=n(885),i=n(5671),s=n(3144),a=n(7326),o=n(136),u=n(9388),l=n(4942),d=n(3973),c=n(8038),h=n(4613),v=n(7661),f=n(8575),m=n(8958),p=n(8214),y=n(3980),g=function(t){(0,o.Z)(n,t);var e=(0,u.Z)(n);function n(t,s){var o,u;return(0,i.Z)(this,n),o=e.call(this,t,s,p.t),u=(0,a.Z)(o),o.eventsPerMinute=240,o.harvestTimeSeconds=(0,m.Mt)(o.agentIdentifier,"page_action.harvestTimeSeconds")||(0,m.Mt)(o.agentIdentifier,"ins.harvestTimeSeconds")||30,o.eventsPerHarvest=o.eventsPerMinute*o.harvestTimeSeconds/60,o.referrerUrl=void 0,o.currentEvents=void 0,o.events=[],o.att=(0,m.C5)(o.agentIdentifier).jsAttributes,y.il&&document.referrer&&(o.referrerUrl=(0,f.f)(document.referrer)),(0,h.X)("api-addPageAction",(function(){var t;return(t=u).addPageAction.apply(t,arguments)}),o.featureName,o.ee),o.waitForFlags(["ins"]).then((function(t){if((0,r.Z)(t,1)[0]){var e=new v.o("ins",{onFinished:function(){var t;return(t=u).onHarvestFinished.apply(t,arguments)}},(0,a.Z)(o));e.harvest.on("ins",(function(){var t;return(t=u).onHarvestStarted.apply(t,arguments)})),e.startTimer(o.harvestTimeSeconds,0)}else o.blocked=!0})),o.drain(),o}return(0,s.Z)(n,[{key:"onHarvestStarted",value:function(t){var e=(0,m.C5)(this.agentIdentifier),n={qs:{ua:e.userAttributes,at:e.atts},body:{ins:this.events}};return t.retry&&(this.currentEvents=this.events),this.events=[],n}},{key:"onHarvestFinished",value:function(t){t&&t.sent&&t.retry&&this.currentEvents&&(this.events=this.events.concat(this.currentEvents),this.currentEvents=null)}},{key:"addPageAction",value:function(t,e,n){if(!(this.events.length>=this.eventsPerHarvest||this.blocked)){var r,i,s={};y.il&&window.document.documentElement&&(r=window.document.documentElement.clientWidth,i=window.document.documentElement.clientHeight);var a={timestamp:t+(0,m.OP)(this.agentIdentifier).offset,timeSinceLoad:t/1e3,browserWidth:r,browserHeight:i,referrerUrl:this.referrerUrl,currentUrl:(0,f.f)(""+location),pageUrl:(0,f.f)((0,m.OP)(this.agentIdentifier).origin),eventType:"PageAction"};(0,d.D)(a,o),(0,d.D)((0,m.C5)(this.agentIdentifier).jsAttributes,o),n&&"object"===typeof n&&(0,d.D)(n,o),s.actionName=e||"",this.events.push(s)}function o(t,e){s[t]=e&&"object"===typeof e?(0,c.P)(e):e}}}]),n}(n(1527).m);(0,l.Z)(g,"featureName",p.t)},7762:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(181);function i(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,r.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,s=function(){};return{s:s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw a}}}}}}]);
//# sourceMappingURL=page_action-aggregate.4e4c9944.chunk.js.map