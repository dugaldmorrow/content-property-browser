(this["webpackJsonpcontent-property-browser"]=this["webpackJsonpcontent-property-browser"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(5),i=n.n(a),c=n(46),l=n(47),s=n(56),u=n(57),d=n(114),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={loading:!1,start:0,limit:100,rowsPerPage:5},e.isPrimitive=function(e){var t=typeof e;return"string"===t||"number"===t||"boolean"===t},e.renderValue=function(t){return e.isPrimitive()?o.a.createElement("span",null,t.toString()):o.a.createElement("pre",null,JSON.stringify(t,null,2))},e.renderTable=function(){var t=[];return e.state.contentPropertyData.results.forEach((function(n){t.push({cells:[{key:"key",content:n.key},{key:"value",content:e.renderValue(n.value)},{key:"version",content:n.version.number}]})})),o.a.createElement(d.a,{caption:"Content properties",head:{cells:[{key:"key",content:"Key",width:2},{key:"value",content:"Value",width:6},{key:"version",content:"Version",width:1}]},rows:t,rowsPerPage:e.state.rowsPerPage,defaultPage:1,loadingSpinnerSize:"large",isLoading:e.state.loading,isFixedSize:!0,defaultSortKey:"key",defaultSortOrder:"ASC",onSort:function(){return console.log("onSort")},onSetPage:function(){return console.log("onSetPage")}})},e.renderState=function(){return o.a.createElement("pre",null,JSON.stringify(e.state,null,2))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),AP&&AP.context.getContext((function(t){console.log("context:",t);var n=t.confluence.content.id;AP.request({url:"/rest/api/content/".concat(n,"/property?start=").concat(e.state.start,"&limit=").concat(e.state.limit),error:function(t){e.setState({error:t,loading:!1})},success:function(t){try{e.setState({loading:!1});var n=JSON.parse(t);e.setState({contentPropertyData:n})}catch(r){e.setState({error:r})}}})}))}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.contentPropertyData?this.renderTable():this.renderState())}}]),n}(r.PureComponent);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root"))},59:function(e,t,n){e.exports=n(109)}},[[59,1,2]]]);
//# sourceMappingURL=main.e5bd7db2.chunk.js.map