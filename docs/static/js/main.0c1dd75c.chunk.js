(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(t,e,a){},104:function(t,e,a){},178:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(10),u=a.n(s),i=(a(103),a(34)),c=a(35),o=a(37),l=a(36),d=a(38),h=(a(104),a(105),a(97)),f=(a(177),a(3),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(o.a)(this,Object(l.a)(e).call(this,t))).state={startDate:null,endDate:null},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement(h.DateRangePicker,{startDate:this.state.startDate,startDateId:"your_unique_start_date_id",endDate:this.state.endDate,endDateId:"your_unique_end_date_id",onDatesChange:function(e){var a=e.startDate,n=e.endDate;return t.setState({startDate:a,endDate:n})},focusedInput:this.state.focusedInput,onFocusChange:function(e){return t.setState({focusedInput:e})}}),r.a.createElement(p,{startDate:this.state.startDate,endDate:this.state.endDate}),r.a.createElement(D,{startDate:null!=this.state.endDate&&this.state.startDate}))}}]),e}(n.Component)),p=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.startDate,e=this.props.endDate;if(null==t||null==e)return null;var a=e.diff(t,"days"),n=t.isLeapYear(),s=e.isLeapYear(),u="";n&&s?u="Start and End dates are":n?u="Start date is":s&&(u="End date is");var i=(8-t.isoWeekday())%7,c=t.clone().add(i,"days");if(c.isAfter(e))return null;var o=e.diff(c,"weeks");return r.a.createElement("div",{className:"Result"},r.a.createElement("h3",null,"The number of days between the chosen date range is ",a),""!==u&&r.a.createElement("h3",null,u," part of leap year"),r.a.createElement("h3",null," The number of Mondays between the chosen dates is ",o+1," "))}}]),e}(n.Component),D=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(o.a)(this,Object(l.a)(e).call(this,t))).state={text:""},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(t){var e=this,a=this.props.startDate;if(t.startDate!==a)if(null!=a){var n=a.format("MM/DD");fetch("http://numbersapi.com/".concat(n,"/date")).then(function(t){return t.text()}).then(function(t){e.setState({text:t})})}else this.setState({text:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Fact"},r.a.createElement("h3",null,this.state.text))}}]),e}(n.Component),m=f;u.a.render(r.a.createElement(m,null),document.getElementById("root"))},98:function(t,e,a){t.exports=a(178)}},[[98,1,2]]]);
//# sourceMappingURL=main.0c1dd75c.chunk.js.map