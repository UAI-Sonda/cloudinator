AUI.add("aui-audio",function(m){var p=m.Object,e=m.Lang,l=m.UA,b=m.config.doc,f="audio",i=m.getClassName,r=i(f),k=i(f,"node"),h=m.config.base+"aui-audio/assets/player.swf",c="fixedAttributes",s="flashVars",o="mp3",n="oggUrl",j="src",q="swfUrl",g="url",a=/\.([^\.]+)$/;var d=m.Component.create({NAME:f,ATTRS:{url:{value:"",validator:e.isString},oggUrl:{value:"",validator:e.isString},type:{value:o,validator:e.isString},swfWidth:{value:"100%",validator:e.isString},swfHeight:{value:"30",validator:e.isString},swfUrl:{value:h,validator:e.isString},fixedAttributes:{value:{},validator:e.isObject},flashVars:{value:{},validator:e.isObject},render:{value:true,validator:e.isBoolean}},BIND_UI_ATTRS:[g,n,q,c,s],SYNC_UI_ATTRS:[g,n],prototype:{renderUI:function(){var t=this;t._renderAudioTask=m.debounce(t._renderAudio,1,t);t._renderSwfTask=m.debounce(t._renderSwf,1,t);t._renderAudio(!t.get(n));},bindUI:function(){var t=this;t.publish("audioReady",{fireOnce:true});},_createSource:function(u){var t=new m.Node(b.createElement("source"));t.attr("type",u);return t;},_renderSwf:function(){var E=this;var y=E.get(q);if(y){var z=E.get(s);E._setMedia(z);var t=m.QueryString.stringify(z);if(E._swfId){E._audio.removeChild(m.one("#"+E._swfId));}else{E._swfId=m.guid();}var x='type="application/x-shockwave-flash" data="'+y+'"';var w="";if(l.ie){x='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"';w='<param name="movie" value="'+y+'"/>';}var C=E.get(c);var B=[];for(var A in C){if(p.owns(C,A)){B.push('<param name="',A,'" value="',C[A],'" />');}}var D="";if(t){D='<param name="flashVars" value="'+t+'" />';}var F=E.get("swfHeight");var v=E.get("swfWidth");var u=e.sub(d.TPL_FLASH,{applicationType:x,id:E._swfId,fixedAttributes:B.join(""),flashVars:D,height:F,movie:w,width:v});E._audio.append(u);}},_renderAudio:function(x){var t=this;var u=d.TPL_AUDIO;if(l.gecko&&x){u=d.TPL_AUDIO_FALLBACK;}var w=e.sub(u,[m.guid()]);var v=m.Node.create(w);t.get("contentBox").append(v);t._audio=v;return v;},_setMedia:function(x){var t=this;if(!p.owns(x,o)&&!p.owns(x,"mp4")&&!p.owns(x,"flv")){var w=t.get(g);var v=t.get("type");if(!v){var u=a.exec(w);if(u){v=u[1];}}x[v]=w;}},_uiSetFixedAttributes:function(u){var t=this;t._renderSwfTask();},_uiSetFlashVars:function(u){var t=this;t._renderSwfTask();},_uiSetOggUrl:function(x){var u=this;if(l.gecko||l.opera){var w=u._audio;var v=u._usingAudio();if((!x&&v)||(x&&!v)){w.remove(true);w=u._renderAudio(!x);}if(!x){u._renderSwfTask();}else{var t=u._sourceOgg;if(!t){t=u._createSource("audio/ogg");w.append(t);u._sourceOgg=t;}t.attr(j,x);}}},_uiSetSwfUrl:function(u){var t=this;t._renderSwfTask();},_uiSetUrl:function(x){var t=this;var v=t.get(n);var w=t._audio;var u=t._sourceMp3;if(l.gecko&&!t._usingAudio()){if(u!=null){u.remove(true);t._sourceMp3=null;}}else{if(w||!v){if(!u){u=t._createSource("audio/mp3");w.append(u);t._sourceMp3=u;}u.attr(j,x);}}t._renderSwfTask();},_usingAudio:function(){var t=this;return(t._audio.get("nodeName").toLowerCase()=="audio");}}});d.TPL_AUDIO='<audio id="{0}" controls class="'+k+'"></audio>';d.TPL_AUDIO_FALLBACK='<div class="'+k+'"></div>';d.TPL_FLASH='<object id="{id}" {applicationType} height="{height}" width="{width}">{movie}{fixedAttributes}{flashVars}</object>';m.Audio=d;},"1.7.0",{skinnable:true,requires:["aui-base","querystring-stringify-simple"]});