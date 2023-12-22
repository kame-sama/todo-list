(()=>{"use strict";function t(t,...e){const n=document.querySelector(t);e.forEach((t=>{const e=document.createElement(t.type);t.id&&(e.id=t.id),t.classes&&e.classList.add(...t.classes),t.text&&(e.textContent=t.text),t.attributes&&t.attributes.forEach((t=>{e.setAttribute(t.name,t.value)})),n.appendChild(e)}))}function e(t,e="",n="",a="",r=""){return{type:t,id:e,classes:n,text:a,attributes:r}}function n(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function a(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const a=n(t);return!isNaN(Number(a))}const r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const i={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function c(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let c;return c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}var d;const l={code:"en-US",formatDistance:(t,e,n)=>{let a;const o=r[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:(t,e,n,a)=>s[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(d.matchPattern);if(!n)return null;const a=n[0],r=t.match(d.parsePattern);if(!r)return null;let o=d.valueCallback?d.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let m={};function f(){return m}Math.pow(10,8);const h=6048e5,g=864e5;function b(t){const e=n(t);return e.setHours(0,0,0,0),e}function w(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function p(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function y(t){const e=n(t);return function(t,e){const n=b(t),a=b(e),r=n.getTime()-w(n),o=a.getTime()-w(a);return Math.round((r-o)/g)}(e,function(t){const e=n(t),a=p(t,0);return a.setFullYear(e.getFullYear(),0,1),a.setHours(0,0,0,0),a}(e))+1}function v(t,e){const a=f(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,o=n(t),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function k(t){return v(t,{weekStartsOn:1})}function S(t){const e=n(t),a=e.getFullYear(),r=p(t,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);const o=k(r),i=p(t,0);i.setFullYear(a,0,4),i.setHours(0,0,0,0);const s=k(i);return e.getTime()>=o.getTime()?a+1:e.getTime()>=s.getTime()?a:a-1}function M(t){const e=n(t),a=k(e).getTime()-function(t){const e=S(t),n=p(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),k(n)}(e).getTime();return Math.round(a/h)+1}function x(t,e){const a=n(t),r=a.getFullYear(),o=f(),i=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,s=p(t,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const u=v(s,e),c=p(t,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const d=v(c,e);return a.getTime()>=u.getTime()?r+1:a.getTime()>=d.getTime()?r:r-1}function D(t,e){const a=n(t),r=v(a,e).getTime()-function(t,e){const n=f(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=x(t,e),o=p(t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),v(o,e)}(a,e).getTime();return Math.round(r/h)+1}function q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const E={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return q("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):q(n+1,2)},d:(t,e)=>q(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>q(t.getHours()%12||12,e.length),H:(t,e)=>q(t.getHours(),e.length),m:(t,e)=>q(t.getMinutes(),e.length),s:(t,e)=>q(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return q(Math.floor(a*Math.pow(10,n-3)),e.length)}},P={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return E.y(t,e)},Y:function(t,e,n,a){const r=x(t,a),o=r>0?r:1-r;return"YY"===e?q(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):q(o,e.length)},R:function(t,e){return q(S(t),e.length)},u:function(t,e){return q(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return q(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return q(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return E.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return q(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=D(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):q(r,e.length)},I:function(t,e,n){const a=M(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):q(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):E.d(t,e)},D:function(t,e,n){const a=y(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):q(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return q(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return E.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):E.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):q(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):q(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):E.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):E.s(t,e)},S:function(t,e){return E.S(t,e)},X:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return C(r);case"XXXX":case"XX":return F(r);default:return F(r,":")}},x:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return C(r);case"xxxx":case"xx":return F(r);default:return F(r,":")}},O:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+T(r,":");default:return"GMT"+F(r,":")}},z:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+T(r,":");default:return"GMT"+F(r,":")}},t:function(t,e,n,a){const r=a._originalDate||t;return q(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return q((a._originalDate||t).getTime(),e.length)}};function T(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;return 0===o?n+String(r):n+String(r)+e+q(o,2)}function C(t,e){return t%60==0?(t>0?"-":"+")+q(Math.abs(t)/60,2):F(t,e)}function F(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+q(Math.floor(a/60),2)+e+q(a%60,2)}const W=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Y=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},L={p:Y,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return W(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",W(a,e)).replace("{{time}}",Y(r,e))}},O=["D","DD"],N=["YY","YYYY"];function A(t,e,n){if("YYYY"===t)throw new RangeError(`Use \`yyyy\` instead of \`YYYY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("YY"===t)throw new RangeError(`Use \`yy\` instead of \`YY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("D"===t)throw new RangeError(`Use \`d\` instead of \`D\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("DD"===t)throw new RangeError(`Use \`dd\` instead of \`DD\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`)}const H=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,j=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,z=/^'([^]*?)'?$/,Q=/''/g,G=/[a-zA-Z]/;function X(t){const e=[],r=[];return{title:t,add:(t,r,o,i)=>{const s=function(t,e,r,o){return{title:t,description:e,date:r,priority:o,getFormattedDate:t=>(console.log(t),a(new Date(t))?function(t,e,r){const o=f(),i=r?.locale??o.locale??l,s=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,u=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,c=n(t);if(!a(c))throw new RangeError("Invalid time value");const d={firstWeekContainsDate:s,weekStartsOn:u,locale:i,_originalDate:c};return e.match(j).map((function(t){const e=t[0];return"p"===e||"P"===e?(0,L[e])(t,i.formatLong):t})).join("").match(H).map((function(n){if("''"===n)return"'";const a=n[0];if("'"===a)return function(t){const e=t.match(z);return e?e[1].replace(Q,"'"):t}(n);const o=P[a];if(o)return r?.useAdditionalWeekYearTokens||(s=n,-1===N.indexOf(s))||A(n,e,String(t)),!r?.useAdditionalDayOfYearTokens&&function(t){return-1!==O.indexOf(t)}(n)&&A(n,e,String(t)),o(c,n,i.localize,d);var s;if(a.match(G))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("")}(t,"dd/MMM/yyyy"):"")}}(t,r,o,i);e.push(s)},complete:t=>{r.push(...e.splice(t,1))},removeTask:t=>{e.splice(t,1)},removeCompleted:t=>{r.splice(t,1)},read:()=>e,readCompleted:()=>r,edit:e=>{t=e,console.log(t)},undo:t=>{e.push(...r.splice(t,1))}}}const B=function(){const t=[X("Default")];let e=t[0],n=0;const a=a=>{e=t[a],n=a};return{add:e=>{const n=X(e);t.push(n)},remove:()=>{t.splice(n,1),a(n-1)},read:()=>(console.log(t),t),setFocus:a,getFocus:()=>e,getIndex:()=>n}}();function $(t){if(t)if("list-create"==t){const t=document.querySelector(".list-of-lists li:last-of-type button");t.classList.add("selected"),t.scrollIntoView(!1)}else if("list-rename"==t||"list-remove"==t){const t=B.read().indexOf(B.getFocus()),e=document.querySelector(`.list-of-lists button[data-index="${t}"]`);e.classList.add("selected"),e.scrollIntoView(!1)}else t.target.dataset.index&&(document.querySelector(".selected").classList.remove("selected"),t.target.classList.add("selected"));else document.querySelector(".list-of-lists li button").classList.add("selected")}function I(){document.querySelector(".list-of-tasks").textContent="",B.getFocus().read().forEach(((n,a)=>{!function(n,a){t(".list-of-tasks",e("li","","","",[{name:"data-index",value:a},{name:"data-priority",value:n.priority}])),t(".list-of-tasks li:last-of-type",e("button","",["task-complete"],"",[{name:"data-complete",value:a}]),e("h3","","",n.title),e("p","","",n.description),e("p","","",n.getFormattedDate(n.date)),e("button","",["task-delete"],"Delete",[{name:"data-delete",value:a}]))}(n,a)}))}function J(){document.querySelector(".list-of-completed").textContent="",B.getFocus().readCompleted().forEach(((n,a)=>{!function(n,a){t(".list-of-completed",e("li","","","",[{name:"data-index",value:a},{name:"data-priority",value:0}])),t(".list-of-completed li:last-of-type",e("button","",["task-undo"],"",[{name:"data-undo",value:a}]),e("h3","","",n.title),e("p","","",n.description),e("p","","",""),e("button","",["task-delete"],"Delete",[{name:"data-delete",value:a}]))}(n,a)}))}function R(n){document.querySelector(".list-of-lists").textContent="";const a=B.read();a.forEach(((n,a)=>{!function(n={title:"Default"},a=0){t(".list-of-lists",e("li")),t(".list-of-lists li:last-of-type",e("button","","",n.title,[{name:"data-index",value:a}]))}(n,a)})),"list-create"==n&&B.setFocus(a.length-1),I(),J(),$(n)}function U(n,a){t("aside",e("form","",["list-form","dialog"])),t(".list-form",e("button","close-list-create","","Close"),e("button","submit-list-create","","Done"),e("h2","","",n),e("input","list-title","","",[{name:"value",value:a},{name:"placeholder",value:"Enter list title"}]))}function _(){const t=[];B.read().forEach(((e,n)=>{t.push({title:e.title,tasks:[],completed:[]}),e.read().forEach((e=>{t[n].tasks.push({title:e.title,description:e.description,date:e.date,priority:e.priority})})),e.readCompleted().forEach((e=>{t[n].completed.push({title:e.title,description:e.description,date:e.date,priority:e.priority})}))}));const e=JSON.stringify(t);localStorage.setItem("todo",e)}function V(t){document.querySelector("aside");const e=t.target.id,n=document.querySelector(".list-form"),a=document.querySelector("#submit-list-create"),r=document.querySelector("#close-list-create"),o=document.querySelector("#list-title");o.select(),""==o.value&&a.toggleAttribute("disabled"),r.addEventListener("click",(function(t){t.preventDefault(),n.remove()})),a.addEventListener("click",(function(t){t.preventDefault(),"list-create"==e?B.add(o.value):"list-rename"==e&&(B.getFocus().title=o.value),_(),R(e),n.remove()})),o.addEventListener("input",(function(t){""!=t.target.value?a.removeAttribute("disabled"):a.setAttribute("disabled","")}))}function K(n,a,r,o,i){t("main",e("form","",["task-form","dialog"])),t(".task-form",e("button","close-task-create","","Close"),e("button","submit-task-create","","Done"),e("h2","","",n),e("label","","","Title",[{name:"for",value:"task-title"}]),e("input","task-title","","",[{name:"value",value:a}]),e("label","","","Description",[{name:"for",value:"task-description"}]),e("textarea","task-description","",r,[{name:"maxlength",value:"128"}]),e("label","","","Due Date",[{name:"for",value:"task-due-date"}]),e("input","task-due-date","","",[{name:"type",value:"date"},{name:"value",value:o}]),e("label","","","Priority",[{name:"for",value:"task-priority"}]),e("select","task-priority","","",[{name:"value",value:i}])),(()=>{const n=[e("option","","","None.",[{name:"value",value:"0"}]),e("option","","","Low!",[{name:"value",value:"1"}]),e("option","","","Medium!!",[{name:"value",value:"2"}]),e("option","","","High!!!",[{name:"value",value:"3"}])];n[i].attributes.push({name:"selected",value:""}),t(".task-form select",...n)})()}function Z(t,e){const n=document.querySelector(".task-form"),a=document.querySelector("#submit-task-create"),r=document.querySelector("#close-task-create"),o=document.querySelector("#task-title"),i=document.querySelector("#task-description"),s=document.querySelector("#task-due-date"),u=document.querySelector("#task-priority");o.select(),""==o.value&&a.toggleAttribute("disabled"),"completed"==t&&(a.toggleAttribute("disabled"),o.toggleAttribute("disabled"),i.toggleAttribute("disabled"),s.toggleAttribute("disabled"),u.toggleAttribute("disabled")),r.addEventListener("click",(function(t){t.preventDefault(),n.remove()})),a.addEventListener("click",(function(a){a.preventDefault(),"task-create"==t?B.getFocus().add(o.value,i.value,s.value,u.value):(B.getFocus().read()[e].title=o.value,B.getFocus().read()[e].description=i.value,B.getFocus().read()[e].date=s.value,B.getFocus().read()[e].priority=u.value),_(),I(),n.remove()})),o.addEventListener("input",(function(t){""!=t.target.value?a.removeAttribute("disabled"):a.setAttribute("disabled","")}))}!function(){const t=localStorage.getItem("todo");t&&JSON.parse(t).forEach(((t,e)=>{e>0&&B.add(t.title),t.tasks.forEach((t=>{B.read()[e].add(t.title,t.description,t.date,t.priority)})),t.completed.forEach((t=>{B.read()[e].add(t.title,t.description,t.date,t.priority),B.read()[e].complete(B.read()[e].read().length-1)}))}))}(),t("body",e("header"),e("aside"),e("main")),t("header",e("h1","","","to do...")),t("aside",e("button","list-create","","+ Create new list"),e("button","list-edit","","Edit"),e("ul","",["list-of-lists"])),t("main",e("button","task-create","","+ Create new task"),e("ul","",["list-of-tasks"]),e("ul","",["list-of-completed"])),R(),function(){const n=document.querySelector("#list-create"),a=document.querySelector("#list-edit"),r=document.querySelector(".list-of-lists");n.addEventListener("click",(function(t){U("Create list",""),V(t)})),a.addEventListener("click",(function(n){t("aside",e("div","",["list-edit-menu","dialog"])),t(".list-edit-menu",e("button","list-edit-close","","Close"),e("button","","",B.getFocus().title),e("button","list-rename","","Rename"),e("button","list-remove","","Remove")),function(){const t=document.querySelector(".list-edit-menu"),e=document.querySelector("#list-rename"),n=document.querySelector("#list-remove"),a=document.querySelector("#list-edit-close");0==B.getIndex()&&n.setAttribute("disabled",""),e.addEventListener("click",(function(e){U("Rename list",B.getFocus().title),V(e),t.remove()})),n.addEventListener("click",(function(e){B.remove(),_(),R(e.target.id),t.remove()})),a.addEventListener("click",(function(){t.remove()}))}()})),r.addEventListener("click",(function(t){t.target.dataset.index&&(B.setFocus(+t.target.dataset.index),console.log(B.getFocus()),I(),J(),$(t))}))}(),function(){const t=document.querySelector("#task-create"),e=document.querySelector(".list-of-tasks"),n=document.querySelector(".list-of-completed");t.addEventListener("click",(function(t){const e=t.target.id,n=document.querySelector(".dialog");n&&n.remove(),K("Create new task","","","",0),Z(e)})),e.addEventListener("click",(function(t){const e=document.querySelector(".dialog");if(e&&e.remove(),t.target.dataset.complete){const e=t.target.dataset.complete;B.getFocus().complete(e),_(),I(),J()}else if(t.target.dataset.delete){const e=t.target.dataset.complete;B.getFocus().removeTask(e),_(),I(),J()}else if(t.target.dataset.index){const e="task",n=t.target.dataset.index,a=B.getFocus().read()[n];K("Edit task",a.title,a.description,a.date,+a.priority),Z(e,n)}})),n.addEventListener("click",(function(t){const e=document.querySelector(".dialog");if(e&&e.remove(),t.target.dataset.undo){const e=t.target.dataset.undo;B.getFocus().undo(e),_(),I(),J()}else if(t.target.dataset.delete){const e=t.target.dataset.complete;B.getFocus().removeCompleted(e),_(),I(),J()}else if(t.target.dataset.index){const e="completed",n=t.target.dataset.index,a=B.getFocus().readCompleted()[n];K("Edit task",a.title,a.description,a.date,+a.priority),Z(e,n)}}))}()})();
//# sourceMappingURL=main.js.map