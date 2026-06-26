import{P as z,N as W,a as I,D as A,b as _,T as m,I as E,s as C,t as h,L as j,c as N,i as D,f as F,d as T,e as L,g as B,h as H}from"./index-D-d5N5WR.js";var q={};class Y{constructor(O,e,t,i,r,s,a,n,o,u=0,l){this.p=O,this.stack=e,this.state=t,this.reducePos=i,this.pos=r,this.score=s,this.buffer=a,this.bufferBase=n,this.curContext=o,this.lookAhead=u,this.parent=l}toString(){return`[${this.stack.filter((O,e)=>e%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(O,e,t=0){let i=O.parser.context;return new Y(O,[],e,t,t,0,[],0,i?new y(i,i.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(O,e){this.stack.push(this.state,e,this.bufferBase+this.buffer.length),this.state=O}reduce(O){var e;let t=O>>19,i=O&65535,{parser:r}=this.p,s=this.reducePos<this.pos-25&&this.setLookAhead(this.pos),a=r.dynamicPrecedence(i);if(a&&(this.score+=a),t==0){this.pushState(r.getGoto(this.state,i,!0),this.reducePos),i<r.minRepeatTerm&&this.storeNode(i,this.reducePos,this.reducePos,s?8:4,!0),this.reduceContext(i,this.reducePos);return}let n=this.stack.length-(t-1)*3-(O&262144?6:0),o=n?this.stack[n-2]:this.p.ranges[0].from,u=this.reducePos-o;u>=2e3&&!(!((e=this.p.parser.nodeSet.types[i])===null||e===void 0)&&e.isAnonymous)&&(o==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=u):this.p.lastBigReductionSize<u&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=o,this.p.lastBigReductionSize=u));let l=n?this.stack[n-1]:0,P=this.bufferBase+this.buffer.length-l;if(i<r.minRepeatTerm||O&131072){let $=r.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(i,o,$,P+4,!0)}if(O&262144)this.state=this.stack[n];else{let $=this.stack[n-3];this.state=r.getGoto($,i,!0)}for(;this.stack.length>n;)this.stack.pop();this.reduceContext(i,o)}storeNode(O,e,t,i=4,r=!1){if(O==0&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let s=this,a=this.buffer.length;if(a==0&&s.parent&&(a=s.bufferBase-s.parent.bufferBase,s=s.parent),a>0&&s.buffer[a-4]==0&&s.buffer[a-1]>-1){if(e==t)return;if(s.buffer[a-2]>=e){s.buffer[a-2]=t;return}}}if(!r||this.pos==t)this.buffer.push(O,e,t,i);else{let s=this.buffer.length;if(s>0&&(this.buffer[s-4]!=0||this.buffer[s-1]<0)){let a=!1;for(let n=s;n>0&&this.buffer[n-2]>t;n-=4)if(this.buffer[n-1]>=0){a=!0;break}if(a)for(;s>0&&this.buffer[s-2]>t;)this.buffer[s]=this.buffer[s-4],this.buffer[s+1]=this.buffer[s-3],this.buffer[s+2]=this.buffer[s-2],this.buffer[s+3]=this.buffer[s-1],s-=4,i>4&&(i-=4)}this.buffer[s]=O,this.buffer[s+1]=e,this.buffer[s+2]=t,this.buffer[s+3]=i}}shift(O,e,t,i){if(O&131072)this.pushState(O&65535,this.pos);else if((O&262144)==0){let r=O,{parser:s}=this.p;this.pos=i;let a=s.stateFlag(r,1);!a&&(i>t||e<=s.maxNode)&&(this.reducePos=i),this.pushState(r,a?t:Math.min(t,this.reducePos)),this.shiftContext(e,t),e<=s.maxNode&&this.buffer.push(e,t,i,4)}else this.pos=i,this.shiftContext(e,t),e<=this.p.parser.maxNode&&this.buffer.push(e,t,i,4)}apply(O,e,t,i){O&65536?this.reduce(O):this.shift(O,e,t,i)}useNode(O,e){let t=this.p.reused.length-1;(t<0||this.p.reused[t]!=O)&&(this.p.reused.push(O),t++);let i=this.pos;this.reducePos=this.pos=i+O.length,this.pushState(e,i),this.buffer.push(t,i,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,O,this,this.p.stream.reset(this.pos-O.length)))}split(){let O=this,e=O.buffer.length;for(;e>0&&O.buffer[e-2]>O.reducePos;)e-=4;let t=O.buffer.slice(e),i=O.bufferBase+e;for(;O&&i==O.bufferBase;)O=O.parent;return new Y(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,t,i,this.curContext,this.lookAhead,O)}recoverByDelete(O,e){let t=O<=this.p.parser.maxNode;t&&this.storeNode(O,this.pos,e,4),this.storeNode(0,this.pos,e,t?8:4),this.pos=this.reducePos=e,this.score-=190}canShift(O){for(let e=new M(this);;){let t=this.p.parser.stateSlot(e.state,4)||this.p.parser.hasAction(e.state,O);if(t==0)return!1;if((t&65536)==0)return!0;e.reduce(t)}}recoverByInsert(O){if(this.stack.length>=300)return[];let e=this.p.parser.nextStates(this.state);if(e.length>8||this.stack.length>=120){let i=[];for(let r=0,s;r<e.length;r+=2)(s=e[r+1])!=this.state&&this.p.parser.hasAction(s,O)&&i.push(e[r],s);if(this.stack.length<120)for(let r=0;i.length<8&&r<e.length;r+=2){let s=e[r+1];i.some((a,n)=>n&1&&a==s)||i.push(e[r],s)}e=i}let t=[];for(let i=0;i<e.length&&t.length<4;i+=2){let r=e[i+1];if(r==this.state)continue;let s=this.split();s.pushState(r,this.pos),s.storeNode(0,s.pos,s.pos,4,!0),s.shiftContext(e[i],this.pos),s.reducePos=this.pos,s.score-=200,t.push(s)}return t}forceReduce(){let{parser:O}=this.p,e=O.stateSlot(this.state,5);if((e&65536)==0)return!1;if(!O.validAction(this.state,e)){let t=e>>19,i=e&65535,r=this.stack.length-t*3;if(r<0||O.getGoto(this.stack[r],i,!1)<0){let s=this.findForcedReduction();if(s==null)return!1;e=s}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(e),!0}findForcedReduction(){let{parser:O}=this.p,e=[],t=(i,r)=>{if(!e.includes(i))return e.push(i),O.allActions(i,s=>{if(!(s&393216))if(s&65536){let a=(s>>19)-r;if(a>1){let n=s&65535,o=this.stack.length-a*3;if(o>=0&&O.getGoto(this.stack[o],n,!1)>=0)return a<<19|65536|n}}else{let a=t(s,r+1);if(a!=null)return a}})};return t(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:O}=this.p;return O.data[O.stateSlot(this.state,1)]==65535&&!O.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(O){if(this.state!=O.state||this.stack.length!=O.stack.length)return!1;for(let e=0;e<this.stack.length;e+=3)if(this.stack[e]!=O.stack[e])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(O){return this.p.parser.dialect.flags[O]}shiftContext(O,e){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,O,this,this.p.stream.reset(e)))}reduceContext(O,e){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,O,this,this.p.stream.reset(e)))}emitContext(){let O=this.buffer.length-1;(O<0||this.buffer[O]!=-3)&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let O=this.buffer.length-1;(O<0||this.buffer[O]!=-4)&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(O){if(O!=this.curContext.context){let e=new y(this.curContext.tracker,O);e.hash!=this.curContext.hash&&this.emitContext(),this.curContext=e}}setLookAhead(O){return O<=this.lookAhead?!1:(this.emitLookAhead(),this.lookAhead=O,!0)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}class y{constructor(O,e){this.tracker=O,this.context=e,this.hash=O.strict?O.hash(e):0}}class M{constructor(O){this.start=O,this.state=O.state,this.stack=O.stack,this.base=this.stack.length}reduce(O){let e=O&65535,t=O>>19;t==0?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=(t-1)*3;let i=this.start.p.parser.getGoto(this.stack[this.base-3],e,!0);this.state=i}}class b{constructor(O,e,t){this.stack=O,this.pos=e,this.index=t,this.buffer=O.buffer,this.index==0&&this.maybeNext()}static create(O,e=O.bufferBase+O.buffer.length){return new b(O,e,e-O.bufferBase)}maybeNext(){let O=this.stack.parent;O!=null&&(this.index=this.stack.bufferBase-O.bufferBase,this.stack=O,this.buffer=O.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new b(this.stack,this.pos,this.index)}}function g(Q,O=Uint16Array){if(typeof Q!="string")return Q;let e=null;for(let t=0,i=0;t<Q.length;){let r=0;for(;;){let s=Q.charCodeAt(t++),a=!1;if(s==126){r=65535;break}s>=92&&s--,s>=34&&s--;let n=s-32;if(n>=46&&(n-=46,a=!0),r+=n,a)break;r*=46}e?e[i++]=r:e=new O(r)}return e}class X{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}}const k=new X;class K{constructor(O,e){this.input=O,this.ranges=e,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=k,this.rangeIndex=0,this.pos=this.chunkPos=e[0].from,this.range=e[0],this.end=e[e.length-1].to,this.readNext()}resolveOffset(O,e){let t=this.range,i=this.rangeIndex,r=this.pos+O;for(;r<t.from;){if(!i)return null;let s=this.ranges[--i];r-=t.from-s.to,t=s}for(;e<0?r>t.to:r>=t.to;){if(i==this.ranges.length-1)return null;let s=this.ranges[++i];r+=s.from-t.to,t=s}return r}clipPos(O){if(O>=this.range.from&&O<this.range.to)return O;for(let e of this.ranges)if(e.to>O)return Math.max(O,e.from);return this.end}peek(O){let e=this.chunkOff+O,t,i;if(e>=0&&e<this.chunk.length)t=this.pos+O,i=this.chunk.charCodeAt(e);else{let r=this.resolveOffset(O,1);if(r==null)return-1;if(t=r,t>=this.chunk2Pos&&t<this.chunk2Pos+this.chunk2.length)i=this.chunk2.charCodeAt(t-this.chunk2Pos);else{let s=this.rangeIndex,a=this.range;for(;a.to<=t;)a=this.ranges[++s];this.chunk2=this.input.chunk(this.chunk2Pos=t),t+this.chunk2.length>a.to&&(this.chunk2=this.chunk2.slice(0,a.to-t)),i=this.chunk2.charCodeAt(0)}}return t>=this.token.lookAhead&&(this.token.lookAhead=t+1),i}acceptToken(O,e=0){let t=e?this.resolveOffset(e,-1):this.pos;if(t==null||t<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=O,this.token.end=t}acceptTokenTo(O,e){this.token.value=O,this.token.end=e}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:O,chunkPos:e}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=O,this.chunk2Pos=e,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let O=this.input.chunk(this.pos),e=this.pos+O.length;this.chunk=e>this.range.to?O.slice(0,this.range.to-this.pos):O,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(O=1){for(this.chunkOff+=O;this.pos+O>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();O-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=O,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}reset(O,e){if(e?(this.token=e,e.start=O,e.lookAhead=O+1,e.value=e.extended=-1):this.token=k,this.pos!=O){if(this.pos=O,O==this.end)return this.setDone(),this;for(;O<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;O>=this.range.to;)this.range=this.ranges[++this.rangeIndex];O>=this.chunkPos&&O<this.chunkPos+this.chunk.length?this.chunkOff=O-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}read(O,e){if(O>=this.chunkPos&&e<=this.chunkPos+this.chunk.length)return this.chunk.slice(O-this.chunkPos,e-this.chunkPos);if(O>=this.chunk2Pos&&e<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(O-this.chunk2Pos,e-this.chunk2Pos);if(O>=this.range.from&&e<=this.range.to)return this.input.read(O,e);let t="";for(let i of this.ranges){if(i.from>=e)break;i.to>O&&(t+=this.input.read(Math.max(i.from,O),Math.min(i.to,e)))}return t}}class f{constructor(O,e){this.data=O,this.id=e}token(O,e){let{parser:t}=e.p;J(this.data,O,e,this.id,t.data,t.tokenPrecTable)}}f.prototype.contextual=f.prototype.fallback=f.prototype.extend=!1;f.prototype.fallback=f.prototype.extend=!1;function J(Q,O,e,t,i,r){let s=0,a=1<<t,{dialect:n}=e.p.parser;O:for(;(a&Q[s])!=0;){let o=Q[s+1];for(let $=s+3;$<o;$+=2)if((Q[$+1]&a)>0){let c=Q[$];if(n.allows(c)&&(O.token.value==-1||O.token.value==c||OO(c,O.token.value,i,r))){O.acceptToken(c);break}}let u=O.next,l=0,P=Q[s+2];if(O.next<0&&P>l&&Q[o+P*3-3]==65535){s=Q[o+P*3-1];continue O}for(;l<P;){let $=l+P>>1,c=o+$+($<<1),S=Q[c],G=Q[c+1]||65536;if(u<S)P=$;else if(u>=G)l=$+1;else{s=Q[c+2],O.advance();continue O}}break}}function x(Q,O,e){for(let t=O,i;(i=Q[t])!=65535;t++)if(i==e)return t-O;return-1}function OO(Q,O,e,t){let i=x(e,t,O);return i<0||x(e,t,Q)<i}const d=typeof process<"u"&&q&&/\bparse\b/.test(q.LOG);let R=null;function v(Q,O,e){let t=Q.cursor(E.IncludeAnonymous);for(t.moveTo(O);;)if(!(e<0?t.childBefore(O):t.childAfter(O)))for(;;){if((e<0?t.to<O:t.from>O)&&!t.type.isError)return e<0?Math.max(0,Math.min(t.to-1,O-25)):Math.min(Q.length,Math.max(t.from+1,O+25));if(e<0?t.prevSibling():t.nextSibling())break;if(!t.parent())return e<0?0:Q.length}}class eO{constructor(O,e){this.fragments=O,this.nodeSet=e,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let O=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(O){for(this.safeFrom=O.openStart?v(O.tree,O.from+O.offset,1)-O.offset:O.from,this.safeTo=O.openEnd?v(O.tree,O.to+O.offset,-1)-O.offset:O.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(O.tree),this.start.push(-O.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(O){if(O<this.nextStart)return null;for(;this.fragment&&this.safeTo<=O;)this.nextFragment();if(!this.fragment)return null;for(;;){let e=this.trees.length-1;if(e<0)return this.nextFragment(),null;let t=this.trees[e],i=this.index[e];if(i==t.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let r=t.children[i],s=this.start[e]+t.positions[i];if(s>O)return this.nextStart=s,null;if(r instanceof m){if(s==O){if(s<this.safeFrom)return null;let a=s+r.length;if(a<=this.safeTo){let n=r.prop(_.lookAhead);if(!n||a+n<this.fragment.to)return r}}this.index[e]++,s+r.length>=Math.max(this.safeFrom,O)&&(this.trees.push(r),this.start.push(s),this.index.push(0))}else this.index[e]++,this.nextStart=s+r.length}}}class tO{constructor(O,e){this.stream=e,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=O.tokenizers.map(t=>new X)}getActions(O){let e=0,t=null,{parser:i}=O.p,{tokenizers:r}=i,s=i.stateSlot(O.state,3),a=O.curContext?O.curContext.hash:0,n=0;for(let o=0;o<r.length;o++){if((1<<o&s)==0)continue;let u=r[o],l=this.tokens[o];if(!(t&&!u.fallback)&&((u.contextual||l.start!=O.pos||l.mask!=s||l.context!=a)&&(this.updateCachedToken(l,u,O),l.mask=s,l.context=a),l.lookAhead>l.end+25&&(n=Math.max(l.lookAhead,n)),l.value!=0)){let P=e;if(l.extended>-1&&(e=this.addActions(O,l.extended,l.end,e)),e=this.addActions(O,l.value,l.end,e),!u.extend&&(t=l,e>P))break}}for(;this.actions.length>e;)this.actions.pop();return n&&O.setLookAhead(n),!t&&O.pos==this.stream.end&&(t=new X,t.value=O.p.parser.eofTerm,t.start=t.end=O.pos,e=this.addActions(O,t.value,t.end,e)),this.mainToken=t,this.actions}getMainToken(O){if(this.mainToken)return this.mainToken;let e=new X,{pos:t,p:i}=O;return e.start=t,e.end=Math.min(t+1,i.stream.end),e.value=t==i.stream.end?i.parser.eofTerm:0,e}updateCachedToken(O,e,t){let i=this.stream.clipPos(t.pos);if(e.token(this.stream.reset(i,O),t),O.value>-1){let{parser:r}=t.p;for(let s=0;s<r.specialized.length;s++)if(r.specialized[s]==O.value){let a=r.specializers[s](this.stream.read(O.start,O.end),t);if(a>=0&&t.p.parser.dialect.allows(a>>1)){(a&1)==0?O.value=a>>1:O.extended=a>>1;break}}}else O.value=0,O.end=this.stream.clipPos(i+1)}putAction(O,e,t,i){for(let r=0;r<i;r+=3)if(this.actions[r]==O)return i;return this.actions[i++]=O,this.actions[i++]=e,this.actions[i++]=t,i}addActions(O,e,t,i){let{state:r}=O,{parser:s}=O.p,{data:a}=s;for(let n=0;n<2;n++)for(let o=s.stateSlot(r,n?2:1);;o+=3){if(a[o]==65535)if(a[o+1]==1)o=p(a,o+2);else{i==0&&a[o+1]==2&&(i=this.putAction(p(a,o+2),e,t,i));break}a[o]==e&&(i=this.putAction(p(a,o+1),e,t,i))}return i}}class iO{constructor(O,e,t,i){this.parser=O,this.input=e,this.ranges=i,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new K(e,i),this.tokens=new tO(O,this.stream),this.topTerm=O.top[1];let{from:r}=i[0];this.stacks=[Y.start(this,O.top[0],r)],this.fragments=t.length&&this.stream.end-r>O.bufferLength*4?new eO(t,O.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let O=this.stacks,e=this.minStackPos,t=this.stacks=[],i,r;if(this.bigReductionCount>300&&O.length==1){let[s]=O;for(;s.forceReduce()&&s.stack.length&&s.stack[s.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let s=0;s<O.length;s++){let a=O[s];for(;;){if(this.tokens.mainToken=null,a.pos>e)t.push(a);else{if(this.advanceStack(a,t,O))continue;{i||(i=[],r=[]),i.push(a);let n=this.tokens.getMainToken(a);r.push(n.value,n.end)}}break}}if(!t.length){let s=i&&rO(i);if(s)return d&&console.log("Finish with "+this.stackID(s)),this.stackToTree(s);if(this.parser.strict)throw d&&i&&console.log("Stuck with token "+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):"none")),new SyntaxError("No parse at "+e);this.recovering||(this.recovering=5)}if(this.recovering&&i){let s=this.stoppedAt!=null&&i[0].pos>this.stoppedAt?i[0]:this.runRecovery(i,r,t);if(s)return d&&console.log("Force-finish "+this.stackID(s)),this.stackToTree(s.forceAll())}if(this.recovering){let s=this.recovering==1?1:this.recovering*3;if(t.length>s)for(t.sort((a,n)=>n.score-a.score);t.length>s;)t.pop();t.some(a=>a.reducePos>e)&&this.recovering--}else if(t.length>1){O:for(let s=0;s<t.length-1;s++){let a=t[s];for(let n=s+1;n<t.length;n++){let o=t[n];if(a.sameState(o)||a.buffer.length>500&&o.buffer.length>500)if((a.score-o.score||a.buffer.length-o.buffer.length)>0)t.splice(n--,1);else{t.splice(s--,1);continue O}}}t.length>12&&(t.sort((s,a)=>a.score-s.score),t.splice(12,t.length-12))}this.minStackPos=t[0].pos;for(let s=1;s<t.length;s++)t[s].pos<this.minStackPos&&(this.minStackPos=t[s].pos);return null}stopAt(O){if(this.stoppedAt!=null&&this.stoppedAt<O)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=O}advanceStack(O,e,t){let i=O.pos,{parser:r}=this,s=d?this.stackID(O)+" -> ":"";if(this.stoppedAt!=null&&i>this.stoppedAt)return O.forceReduce()?O:null;if(this.fragments){let o=O.curContext&&O.curContext.tracker.strict,u=o?O.curContext.hash:0;for(let l=this.fragments.nodeAt(i);l;){let P=this.parser.nodeSet.types[l.type.id]==l.type?r.getGoto(O.state,l.type.id):-1;if(P>-1&&l.length&&(!o||(l.prop(_.contextHash)||0)==u))return O.useNode(l,P),d&&console.log(s+this.stackID(O)+` (via reuse of ${r.getName(l.type.id)})`),!0;if(!(l instanceof m)||l.children.length==0||l.positions[0]>0)break;let $=l.children[0];if($ instanceof m&&l.positions[0]==0)l=$;else break}}let a=r.stateSlot(O.state,4);if(a>0)return O.reduce(a),d&&console.log(s+this.stackID(O)+` (via always-reduce ${r.getName(a&65535)})`),!0;if(O.stack.length>=8400)for(;O.stack.length>6e3&&O.forceReduce(););let n=this.tokens.getActions(O);for(let o=0;o<n.length;){let u=n[o++],l=n[o++],P=n[o++],$=o==n.length||!t,c=$?O:O.split(),S=this.tokens.mainToken;if(c.apply(u,l,S?S.start:c.pos,P),d&&console.log(s+this.stackID(c)+` (via ${(u&65536)==0?"shift":`reduce of ${r.getName(u&65535)}`} for ${r.getName(l)} @ ${i}${c==O?"":", split"})`),$)return!0;c.pos>i?e.push(c):t.push(c)}return!1}advanceFully(O,e){let t=O.pos;for(;;){if(!this.advanceStack(O,null,null))return!1;if(O.pos>t)return V(O,e),!0}}runRecovery(O,e,t){let i=null,r=!1;for(let s=0;s<O.length;s++){let a=O[s],n=e[s<<1],o=e[(s<<1)+1],u=d?this.stackID(a)+" -> ":"";if(a.deadEnd&&(r||(r=!0,a.restart(),d&&console.log(u+this.stackID(a)+" (restarted)"),this.advanceFully(a,t))))continue;let l=a.split(),P=u;for(let $=0;$<10&&l.forceReduce()&&(d&&console.log(P+this.stackID(l)+" (via force-reduce)"),!this.advanceFully(l,t));$++)d&&(P=this.stackID(l)+" -> ");for(let $ of a.recoverByInsert(n))d&&console.log(u+this.stackID($)+" (via recover-insert)"),this.advanceFully($,t);this.stream.end>a.pos?(o==a.pos&&(o++,n=0),a.recoverByDelete(n,o),d&&console.log(u+this.stackID(a)+` (via recover-delete ${this.parser.getName(n)})`),V(a,t)):(!i||i.score<l.score)&&(i=l)}return i}stackToTree(O){return O.close(),m.build({buffer:b.create(O),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:O.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(O){let e=(R||(R=new WeakMap)).get(O);return e||R.set(O,e=String.fromCodePoint(this.nextStackID++)),e+O}}function V(Q,O){for(let e=0;e<O.length;e++){let t=O[e];if(t.pos==Q.pos&&t.sameState(Q)){O[e].score<Q.score&&(O[e]=Q);return}}O.push(Q)}class sO{constructor(O,e,t){this.source=O,this.flags=e,this.disabled=t}allows(O){return!this.disabled||this.disabled[O]==0}}class Z extends z{constructor(O){if(super(),this.wrappers=[],O.version!=14)throw new RangeError(`Parser version (${O.version}) doesn't match runtime version (14)`);let e=O.nodeNames.split(" ");this.minRepeatTerm=e.length;for(let a=0;a<O.repeatNodeCount;a++)e.push("");let t=Object.keys(O.topRules).map(a=>O.topRules[a][1]),i=[];for(let a=0;a<e.length;a++)i.push([]);function r(a,n,o){i[a].push([n,n.deserialize(String(o))])}if(O.nodeProps)for(let a of O.nodeProps){let n=a[0];typeof n=="string"&&(n=_[n]);for(let o=1;o<a.length;){let u=a[o++];if(u>=0)r(u,n,a[o++]);else{let l=a[o+-u];for(let P=-u;P>0;P--)r(a[o++],n,l);o++}}}this.nodeSet=new W(e.map((a,n)=>I.define({name:n>=this.minRepeatTerm?void 0:a,id:n,props:i[n],top:t.indexOf(n)>-1,error:n==0,skipped:O.skippedNodes&&O.skippedNodes.indexOf(n)>-1}))),O.propSources&&(this.nodeSet=this.nodeSet.extend(...O.propSources)),this.strict=!1,this.bufferLength=A;let s=g(O.tokenData);this.context=O.context,this.specializerSpecs=O.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let a=0;a<this.specializerSpecs.length;a++)this.specialized[a]=this.specializerSpecs[a].term;this.specializers=this.specializerSpecs.map(U),this.states=g(O.states,Uint32Array),this.data=g(O.stateData),this.goto=g(O.goto),this.maxTerm=O.maxTerm,this.tokenizers=O.tokenizers.map(a=>typeof a=="number"?new f(s,a):a),this.topRules=O.topRules,this.dialects=O.dialects||{},this.dynamicPrecedences=O.dynamicPrecedences||null,this.tokenPrecTable=O.tokenPrec,this.termNames=O.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(O,e,t){let i=new iO(this,O,e,t);for(let r of this.wrappers)i=r(i,O,e,t);return i}getGoto(O,e,t=!1){let i=this.goto;if(e>=i[0])return-1;for(let r=i[e+1];;){let s=i[r++],a=s&1,n=i[r++];if(a&&t)return n;for(let o=r+(s>>1);r<o;r++)if(i[r]==O)return n;if(a)return-1}}hasAction(O,e){let t=this.data;for(let i=0;i<2;i++)for(let r=this.stateSlot(O,i?2:1),s;;r+=3){if((s=t[r])==65535)if(t[r+1]==1)s=t[r=p(t,r+2)];else{if(t[r+1]==2)return p(t,r+2);break}if(s==e||s==0)return p(t,r+1)}return 0}stateSlot(O,e){return this.states[O*6+e]}stateFlag(O,e){return(this.stateSlot(O,0)&e)>0}validAction(O,e){return!!this.allActions(O,t=>t==e?!0:null)}allActions(O,e){let t=this.stateSlot(O,4),i=t?e(t):void 0;for(let r=this.stateSlot(O,1);i==null;r+=3){if(this.data[r]==65535)if(this.data[r+1]==1)r=p(this.data,r+2);else break;i=e(p(this.data,r+1))}return i}nextStates(O){let e=[];for(let t=this.stateSlot(O,1);;t+=3){if(this.data[t]==65535)if(this.data[t+1]==1)t=p(this.data,t+2);else break;if((this.data[t+2]&1)==0){let i=this.data[t+1];e.some((r,s)=>s&1&&r==i)||e.push(this.data[t],i)}}return e}configure(O){let e=Object.assign(Object.create(Z.prototype),this);if(O.props&&(e.nodeSet=this.nodeSet.extend(...O.props)),O.top){let t=this.topRules[O.top];if(!t)throw new RangeError(`Invalid top rule name ${O.top}`);e.top=t}return O.tokenizers&&(e.tokenizers=this.tokenizers.map(t=>{let i=O.tokenizers.find(r=>r.from==t);return i?i.to:t})),O.specializers&&(e.specializers=this.specializers.slice(),e.specializerSpecs=this.specializerSpecs.map((t,i)=>{let r=O.specializers.find(a=>a.from==t.external);if(!r)return t;let s=Object.assign(Object.assign({},t),{external:r.to});return e.specializers[i]=U(s),s})),O.contextTracker&&(e.context=O.contextTracker),O.dialect&&(e.dialect=this.parseDialect(O.dialect)),O.strict!=null&&(e.strict=O.strict),O.wrap&&(e.wrappers=e.wrappers.concat(O.wrap)),O.bufferLength!=null&&(e.bufferLength=O.bufferLength),e}hasWrappers(){return this.wrappers.length>0}getName(O){return this.termNames?this.termNames[O]:String(O<=this.maxNode&&this.nodeSet.types[O].name||O)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(O){let e=this.dynamicPrecedences;return e==null?0:e[O]||0}parseDialect(O){let e=Object.keys(this.dialects),t=e.map(()=>!1);if(O)for(let r of O.split(" ")){let s=e.indexOf(r);s>=0&&(t[s]=!0)}let i=null;for(let r=0;r<e.length;r++)if(!t[r])for(let s=this.dialects[e[r]],a;(a=this.data[s++])!=65535;)(i||(i=new Uint8Array(this.maxTerm+1)))[a]=1;return new sO(O,t,i)}static deserialize(O){return new Z(O)}}function p(Q,O){return Q[O]|Q[O+1]<<16}function rO(Q){let O=null;for(let e of Q){let t=e.p.stoppedAt;(e.pos==e.p.stream.end||t!=null&&e.pos>t)&&e.p.parser.stateFlag(e.state,2)&&(!O||O.score<e.score)&&(O=e)}return O}function U(Q){if(Q.external){let O=Q.extend?1:0;return(e,t)=>Q.external(e,t)<<1|O}return Q.get}const aO=C({null:h.null,instanceof:h.operatorKeyword,this:h.self,"new super assert open to with void":h.keyword,"class interface extends implements enum var":h.definitionKeyword,"module package import":h.moduleKeyword,"switch while for if else case default do break continue return try catch finally throw":h.controlKeyword,"requires exports opens uses provides public private protected static transitive abstract final strictfp synchronized native transient volatile throws":h.modifier,IntegerLiteral:h.integer,FloatingPointLiteral:h.float,"StringLiteral TextBlock":h.string,CharacterLiteral:h.character,LineComment:h.lineComment,BlockComment:h.blockComment,BooleanLiteral:h.bool,PrimitiveType:h.standard(h.typeName),TypeName:h.typeName,Identifier:h.variableName,"MethodName/Identifier":h.function(h.variableName),Definition:h.definition(h.variableName),ArithOp:h.arithmeticOperator,LogicOp:h.logicOperator,BitOp:h.bitwiseOperator,CompareOp:h.compareOperator,AssignOp:h.definitionOperator,UpdateOp:h.updateOperator,Asterisk:h.punctuation,Label:h.labelName,"( )":h.paren,"[ ]":h.squareBracket,"{ }":h.brace,".":h.derefOperator,", ;":h.separator}),nO={__proto__:null,true:34,false:34,null:42,void:46,byte:48,short:48,int:48,long:48,char:48,float:48,double:48,boolean:48,extends:62,super:64,class:76,this:78,new:84,public:100,protected:102,private:104,abstract:106,static:108,final:110,strictfp:112,default:114,synchronized:116,native:118,transient:120,volatile:122,throws:150,implements:160,interface:166,enum:176,instanceof:238,open:267,module:269,requires:274,transitive:276,exports:278,to:280,opens:282,uses:284,provides:286,with:288,package:292,import:296,if:308,else:310,while:314,for:318,var:325,assert:332,switch:336,case:342,do:346,break:350,continue:354,return:358,throw:364,try:368,catch:372,finally:380},QO=Z.deserialize({version:14,states:"##jQ]QPOOQ$wQPOOO(bQQO'#H^O*iQQO'#CbOOQO'#Cb'#CbO*pQPO'#CaO*xOSO'#CpOOQO'#Hc'#HcOOQO'#Cu'#CuO,eQPO'#D_O-OQQO'#HmOOQO'#Hm'#HmO/gQQO'#HhO/nQQO'#HhOOQO'#Hh'#HhOOQO'#Hg'#HgO1rQPO'#DUO2PQPO'#GnO4wQPO'#D_O5OQPO'#DzO*pQPO'#E[O5qQPO'#E[OOQO'#DV'#DVO7SQQO'#HaO9^QQO'#EeO9eQPO'#EdO9jQPO'#EfOOQO'#Hb'#HbO7jQQO'#HbO:pQQO'#FhO:wQPO'#ExO:|QPO'#E}O:|QPO'#FPOOQO'#Ha'#HaOOQO'#HY'#HYOOQO'#Gh'#GhOOQO'#HX'#HXO<^QPO'#FiOOQO'#HW'#HWOOQO'#Gg'#GgQ]QPOOOOQO'#Hs'#HsO<cQPO'#HsO<hQPO'#D{O<hQPO'#EVO<hQPO'#EQO<pQPO'#HpO=RQQO'#EfO*pQPO'#C`O=ZQPO'#C`O*pQPO'#FcO=`QPO'#FeO=kQPO'#FkO=kQPO'#FnO<hQPO'#FsO=pQPO'#FpO:|QPO'#FwO=kQPO'#FyO]QPO'#GOO=uQPO'#GQO>QQPO'#GSO>]QPO'#GUO=kQPO'#GWO:|QPO'#GXO>dQPO'#GZO?QQQO'#HiO?mQQO'#CuO?tQPO'#HxO@SQPO'#D_O@rQPO'#DpO?wQPO'#DqO@|QPO'#HxOA_QPO'#DpOAgQPO'#IROAlQPO'#E`OOQO'#Hr'#HrOOQO'#Gm'#GmQ$wQPOOOAtQPO'#HsOOQO'#H^'#H^OCsQQO,58{OOQO'#H['#H[OOOO'#Gi'#GiOEfOSO,59[OOQO,59[,59[OOQO'#Hi'#HiOFVQPO,59eOGXQPO,59yOOQO-E:f-E:fO*pQPO,58zOG{QPO,58zO*pQPO,5;}OHQQPO'#DQOHVQPO'#DQOOQO'#Gk'#GkOIVQQO,59jOOQO'#Dm'#DmOJqQPO'#HuOJ{QPO'#DlOKZQPO'#HtOKcQPO,5<_OKhQPO,59^OLRQPO'#CxOOQO,59c,59cOLYQPO,59bOLeQQO'#H^ONgQQO'#CbO!!iQPO'#D_O!#nQQO'#HmO!$OQQO,59pO!$VQPO'#DvO!$eQPO'#H|O!$mQPO,5:`O!$rQPO,5:`O!%YQPO,5;nO!%eQPO'#ITO!%pQPO,5;eO!%uQPO,5=YOOQO-E:l-E:lOOQO,5:f,5:fO!']QPO,5:fO!'dQPO,5:vO?tQPO,5<_O*pQPO,5:vO<hQPO,5:gO<hQPO,5:qO<hQPO,5:lO<hQPO,5<_O!'zQPO,59qO:|QPO,5:}O!(RQPO,5;QO:|QPO,59TO!(aQPO'#DXOOQO,5;O,5;OOOQO'#El'#ElOOQO'#Eo'#EoO:|QPO,5;UO:|QPO,5;UO:|QPO,5;UO:|QPO,5;UO:|QPO,5;UO:|QPO,5;UO:|QPO,5;UO:|QPO,5;UO:|QPO,5;UO:|QPO,5;fOOQO,5;i,5;iOOQO,5<S,5<SO!(hQPO,5;bO!(yQPO,5;dO!(hQPO'#CyO!)QQQO'#HmO!)`QQO,5;kO]QPO,5<TOOQO-E:e-E:eOOQO,5>_,5>_O!*sQPO,5:gO!+RQPO,5:qO!+ZQPO,5:lO!+fQPO,5>[O!$VQPO,5>[O!'iQPO,59UO!+qQQO,58zO!+yQQO,5;}O!,RQQO,5<PO*pQPO,5<PO:|QPO'#DUO]QPO,5<VO]QPO,5<YO!,ZQPO'#FrO]QPO,5<[O]QPO,5<aO!,kQQO,5<cO!,uQPO,5<eO!,zQPO,5<jOOQO'#Fj'#FjOOQO,5<l,5<lO!-PQPO,5<lOOQO,5<n,5<nO!-UQPO,5<nO!-ZQQO,5<pOOQO,5<p,5<pO>gQPO,5<rO!-bQQO,5<sO!-iQPO'#GdO!.oQPO,5<uO>gQPO,5<}O!2mQPO,59jO!2zQPO'#HuO!3RQPO,59xO!3WQPO,5>dO?tQPO,59xO!3cQPO,5:[OAlQPO,5:zO!3kQPO'#DrO?wQPO'#DrO!3vQPO'#HyO!4OQPO,5:]O?tQPO,5>dO!(hQPO,5>dOAgQPO,5>mOOQO,5:[,5:[O!$rQPO'#DtOOQO,5>m,5>mO!4TQPO'#EaOOQO,5:z,5:zO!7UQPO,5:zO!(hQPO'#DxOOQO-E:k-E:kOOQO,5:y,5:yO*pQPO,58}O!7ZQPO'#ChOOQO1G.k1G.kOOOO-E:g-E:gOOQO1G.v1G.vO!+qQQO1G.fO*pQPO1G.fO!7eQQO1G1iOOQO,59l,59lO!7mQPO,59lOOQO-E:i-E:iO!7rQPO,5>aO!8ZQPO,5:WO<hQPO'#GpO!8bQPO,5>`OOQO1G1y1G1yOOQO1G.x1G.xO!8{QPO'#CyO!9kQPO'#HmO!9uQPO'#CzO!:TQPO'#HlO!:]QPO,59dOOQO1G.|1G.|OLYQPO1G.|O!:sQPO,59eO!;QQQO'#H^O!;cQQO'#CbOOQO,5:b,5:bO<hQPO,5:cOOQO,5:a,5:aO!;tQQO,5:aOOQO1G/[1G/[O!;yQPO,5:bO!<[QPO'#GsO!<oQPO,5>hOOQO1G/z1G/zO!<wQPO'#DvO!=YQPO1G/zO!(hQPO'#GqO!=_QPO1G1YO:|QPO1G1YO<hQPO'#GyO!=gQPO,5>oOOQO1G1P1G1POOQO1G0Q1G0QO!=oQPO'#E]OOQO1G0b1G0bO!>`QPO1G1yO!'dQPO1G0bO!*sQPO1G0RO!+RQPO1G0]O!+ZQPO1G0WOOQO1G/]1G/]O!>eQQO1G.pO9eQPO1G0jO*pQPO1G0jO<pQPO'#HpO!@[QQO1G.pOOQO1G.p1G.pO!@aQQO1G0iOOQO1G0l1G0lO!@hQPO1G0lO!@sQQO1G.oO!AZQQO'#HqO!AhQPO,59sO!BzQQO1G0pO!DfQQO1G0pO!DmQQO1G0pO!FUQQO1G0pO!F]QQO1G0pO!GbQQO1G0pO!I]QQO1G0pO!IdQQO1G0pO!IkQQO1G0pO!IuQQO1G1QO!I|QQO'#HmOOQO1G0|1G0|O!KSQQO1G1OOOQO1G1O1G1OOOQO1G1o1G1oO!KjQPO'#D[O!(hQPO'#D|O!(hQPO'#D}OOQO1G0R1G0RO!KqQPO1G0RO!KvQPO1G0RO!LOQPO1G0RO!LZQPO'#EXOOQO1G0]1G0]O!LnQPO1G0]O!LsQPO'#ETO!(hQPO'#ESOOQO1G0W1G0WO!MmQPO1G0WO!MrQPO1G0WO!MzQPO'#EhO!NRQPO'#EhOOQO'#Gx'#GxO!NZQQO1G0mO# }QQO1G3vO9eQPO1G3vO#$PQPO'#FXOOQO1G.f1G.fOOQO1G1i1G1iO#$WQPO1G1kOOQO1G1k1G1kO#$cQQO1G1kO#$kQPO1G1qOOQO1G1t1G1tO+QQPO'#D_O-OQQO,5<bO#(cQPO,5<bO#(tQPO,5<^O#({QPO,5<^OOQO1G1v1G1vOOQO1G1{1G1{OOQO1G1}1G1}O:|QPO1G1}O#,oQPO'#F{OOQO1G2P1G2PO=kQPO1G2UOOQO1G2W1G2WOOQO1G2Y1G2YOOQO1G2[1G2[OOQO1G2^1G2^OOQO1G2_1G2_O#,vQQO'#H^O#-aQQO'#CbO-OQQO'#HmO#-zQQOOO#.hQQO'#EeO#.VQQO'#HbO!$VQPO'#GeO#.oQPO,5=OOOQO'#HQ'#HQO#.wQPO1G2aO#2uQPO'#G]O>gQPO'#GaOOQO1G2a1G2aO#2zQPO1G2iO#6xQPO,5>gOOQO1G/d1G/dOOQO1G4O1G4OO#7ZQPO1G/dOOQO1G/v1G/vOOQO1G0f1G0fO!7UQPO1G0fOOQO,5:^,5:^O!(hQPO'#DsO#7`QPO,5:^O?wQPO'#GrO#7kQPO,5>eOOQO1G/w1G/wOAgQPO'#H{O#7sQPO1G4OO?tQPO1G4OOOQO1G4X1G4XO!#YQPO'#DvO!!iQPO'#D_OOQO,5:{,5:{O#8OQPO,5:{O#8OQPO,5:{O#8VQQO'#HaO#9hQQO'#HbO#9rQQO'#EbO#9}QPO'#EbO#:VQPO'#IOOOQO,5:d,5:dOOQO1G.i1G.iO#:bQQO'#EeO#:rQQO'#H`O#;SQPO'#FTOOQO'#H`'#H`O#;^QPO'#H`O#;{QPO'#IWO#<TQPO,59SOOQO7+$Q7+$QO!+qQQO7+$QOOQO7+'T7+'TOOQO1G/W1G/WO#<YQPO'#DoO#<dQQO'#HvOOQO'#Hv'#HvOOQO1G/r1G/rOOQO,5=[,5=[OOQO-E:n-E:nO#<tQWO,58{O#<{QPO,59fOOQO,59f,59fO!(hQPO'#HoOKmQPO'#GjO#=ZQPO,5>WOOQO1G/O1G/OOOQO7+$h7+$hOOQO1G/{1G/{O#=cQQO1G/{OOQO1G/}1G/}O#=hQPO1G/{OOQO1G/|1G/|O<hQPO1G/}OOQO,5=_,5=_OOQO-E:q-E:qOOQO7+%f7+%fOOQO,5=],5=]OOQO-E:o-E:oO:|QPO7+&tOOQO7+&t7+&tOOQO,5=e,5=eOOQO-E:w-E:wO#=mQPO'#EUO#={QPO'#EUOOQO'#Gw'#GwO#>dQPO,5:wOOQO,5:w,5:wOOQO7+'e7+'eOOQO7+%|7+%|OOQO7+%m7+%mO!KqQPO7+%mO!KvQPO7+%mO!LOQPO7+%mOOQO7+%w7+%wO!LnQPO7+%wOOQO7+%r7+%rO!MmQPO7+%rO!MrQPO7+%rOOQO7+&U7+&UOOQO'#Ee'#EeO9eQPO7+&UO9eQPO,5>[O#?TQPO7+$[OOQO7+&T7+&TOOQO7+&W7+&WO:|QPO'#GlO#?cQPO,5>]OOQO1G/_1G/_O:|QPO7+&lO#?nQQO,59eO#@tQPO,59vOOQO,59v,59vOOQO,5:h,5:hOOQO'#EP'#EPOOQO,5:i,5:iO#@{QPO'#EYO<hQPO'#EYO#A^QPO'#IPO#AiQPO,5:sO?tQPO'#HxO!(hQPO'#HxO#AqQPO'#DpOOQO'#Gu'#GuO#AxQPO,5:oOOQO,5:o,5:oOOQO,5:n,5:nOOQO,5;S,5;SO#BrQQO,5;SO#ByQPO,5;SOOQO-E:v-E:vOOQO7+&X7+&XOOQO7+)b7+)bO#CQQQO7+)bOOQO'#G|'#G|O#DqQPO,5;sOOQO,5;s,5;sO#DxQPO'#FYO*pQPO'#FYO*pQPO'#FYO*pQPO'#FYO#EWQPO7+'VO#E]QPO7+'VOOQO7+'V7+'VO]QPO7+']O#EhQPO1G1|O?tQPO1G1|O#EvQQO1G1xO!(aQPO1G1xO#E}QPO1G1xO#FUQQO7+'iOOQO'#HP'#HPO#F]QPO,5<gOOQO,5<g,5<gO#FdQPO'#HsO:|QPO'#F|O#FlQPO7+'pO#FqQPO,5=PO?tQPO,5=PO#FvQPO1G2jO#HPQPO1G2jOOQO1G2j1G2jOOQO-E;O-E;OOOQO7+'{7+'{O!<[QPO'#G_O>gQPO,5<wOOQO,5<{,5<{O#HXQPO7+(TOOQO7+(T7+(TO#LVQPO1G4ROOQO7+%O7+%OOOQO7+&Q7+&QO#LhQPO,5:_OOQO1G/x1G/xOOQO,5=^,5=^OOQO-E:p-E:pOOQO7+)j7+)jO#LsQPO7+)jO!:bQPO,5:aOOQO1G0g1G0gO#MOQPO1G0gO#MVQPO,59qO#MkQPO,5:|O9eQPO,5:|O!(hQPO'#GtO#MpQPO,5>jO#M{QPO,59TO#NSQPO'#IVO#N[QPO,5;oO*pQPO'#G{O#NaQPO,5>rOOQO1G.n1G.nOOQO<<Gl<<GlO#NiQPO'#HwO#NqQPO,5:ZOOQO1G/Q1G/QOOQO,5>Z,5>ZOOQO,5=U,5=UOOQO-E:h-E:hO#NvQPO7+%gOOQO7+%g7+%gOOQO7+%i7+%iOOQO<<J`<<J`O$ ^QPO'#H^O$ eQPO'#CbO$ lQPO,5:pO$ qQPO,5:xO#=mQPO,5:pOOQO-E:u-E:uOOQO1G0c1G0cOOQO<<IX<<IXO!KqQPO<<IXO!KvQPO<<IXOOQO<<Ic<<IcOOQO<<I^<<I^O!MmQPO<<I^OOQO<<Ip<<IpO$ vQQO<<GvO9eQPO<<IpO*pQPO<<IpOOQO<<Gv<<GvO$#mQQO,5=WOOQO-E:j-E:jO$#zQQO<<JWOOQO1G/b1G/bOOQO,5:t,5:tO$$bQPO,5:tO$$pQPO,5:tO$%RQPO'#GvO$%iQPO,5>kO$%tQPO'#EZOOQO1G0_1G0_O$%{QPO1G0_O?tQPO,5:pOOQO-E:s-E:sOOQO1G0Z1G0ZOOQO1G0n1G0nO$&QQQO1G0nOOQO<<L|<<L|OOQO-E:z-E:zOOQO1G1_1G1_O$&XQQO,5;tOOQO'#G}'#G}O#DxQPO,5;tOOQO'#IX'#IXO$&aQQO,5;tO$&rQQO,5;tOOQO<<Jq<<JqO$&zQPO<<JqOOQO<<Jw<<JwO:|QPO7+'hO$'PQPO7+'hO!(aQPO7+'dO$'_QPO7+'dO$'dQQO7+'dOOQO<<KT<<KTOOQO-E:}-E:}OOQO1G2R1G2ROOQO,5<h,5<hO$'kQQO,5<hOOQO<<K[<<K[O:|QPO1G2kO$'rQPO1G2kOOQO,5=n,5=nOOQO7+(U7+(UO$'wQPO7+(UOOQO-E;Q-E;QO$)fQWO'#HhO$)QQWO'#HhO$)mQPO'#G`O<hQPO,5<yO!$VQPO,5<yOOQO1G2c1G2cOOQO<<Ko<<KoO$*OQPO1G/yOOQO<<MU<<MUOOQO7+&R7+&RO$*ZQPO1G0jO$*fQQO1G0hOOQO1G0h1G0hO$*nQPO1G0hOOQO,5=`,5=`OOQO-E:r-E:rO$*sQQO1G.oOOQO1G1[1G1[O$*}QPO'#GzO$+[QPO,5>qOOQO1G1Z1G1ZO$+dQPO'#FUOOQO,5=g,5=gOOQO-E:y-E:yO$+iQPO'#GoO$+vQPO,5>cOOQO1G/u1G/uOOQO<<IR<<IROOQO1G0[1G0[O$,OQPO1G0dO$,TQPO1G0[O$,YQPO1G0dOOQOAN>sAN>sO!KqQPOAN>sOOQOAN>xAN>xOOQOAN?[AN?[O9eQPOAN?[OOQO1G0`1G0`O$,_QPO1G0`OOQO,5=b,5=bOOQO-E:t-E:tO$,mQPO,5:uOOQO7+%y7+%yOOQO7+&Y7+&YOOQO1G1`1G1`O$,tQQO1G1`OOQO-E:{-E:{O$,|QQO'#IYO$,wQPO1G1`O$&gQPO1G1`O*pQPO1G1`OOQOAN@]AN@]O$-XQQO<<KSO:|QPO<<KSO$-`QPO<<KOOOQO<<KO<<KOO!(aQPO<<KOOOQO1G2S1G2SO$-eQQO7+(VO:|QPO7+(VOOQO<<Kp<<KpP!-iQPO'#HSO!$VQPO'#HRO$-oQPO,5<zO$-zQPO1G2eO<hQPO1G2eO9eQPO7+&SO$.PQPO7+&SOOQO7+&S7+&SOOQO,5=f,5=fOOQO-E:x-E:xO#M{QPO,5;pOOQO,5=Z,5=ZOOQO-E:m-E:mO$.UQPO7+&OOOQO7+%v7+%vO$.dQPO7+&OOOQOG24_G24_OOQOG24vG24vOOQO7+%z7+%zOOQO7+&z7+&zO*pQPO'#HOO$.iQPO,5>tO$.qQPO7+&zO$.vQQO'#IZOOQOAN@nAN@nO$/RQQOAN@nOOQOAN@jAN@jO$/YQPOAN@jO$/_QQO<<KqO$/iQPO,5=mOOQO-E;P-E;POOQO7+(P7+(PO$/zQPO7+(PO$0PQPO<<InOOQO<<In<<InO$0UQPO<<IjOOQO<<Ij<<IjO#M{QPO<<IjO$0UQPO<<IjO$0dQQO,5=jOOQO-E:|-E:|OOQO<<Jf<<JfO$0oQPO,5>uOOQOG26YG26YOOQOG26UG26UOOQO<<Kk<<KkOOQOAN?YAN?YOOQOAN?UAN?UO#M{QPOAN?UO$0wQPOAN?UO$0|QPOAN?UO$1[QPOG24pOOQOG24pG24pO#M{QPOG24pOOQOLD*[LD*[O$1aQPOLD*[OOQO!$'Mv!$'MvO*pQPO'#CaO$1fQQO'#H^O$1yQQO'#CbO!(hQPO'#Cy",stateData:"$2i~OPOSQOS%yOS~OZ`O_VO`VOaVObVOcVOeVOg^Oh^Op!POv{OwkOz!OO}cO!PvO!SyO!TyO!UyO!VyO!WyO!XyO!YyO!ZzO![!`O!]yO!^yO!_yO!u}O!z|O#fpO#roO#tpO#upO#y!RO#z!QO$W!SO$Y!TO$`!UO$c!VO$e!XO$h!WO$l!YO$n!ZO$s![O$u!]O$w!^O$y!_O$|!aO%O!bO%}TO&PRO&RQO&XUO&tdO~Og^Oh^Ov{O}cO!P!mO!SyO!TyO!UyO!VyO!W!pO!XyO!YyO!ZzO!]yO!^yO!_yO!u}O!z|O%}TO&P!cO&R!dO&_!hO&tdO~OWiXW&QXZ&QXuiXu&QX!P&QX!b&QX#]&QX#_&QX#a&QX#b&QX#d&QX#e&QX#f&QX#g&QX#h&QX#i&QX#k&QX#o&QX#r&QX%}iX&PiX&RiX&^&QX&_iX&_&QX&n&QX&viX&v&QX&x!aX~O#p$^X~P&bOWUXW&]XZUXuUXu&]X!PUX!bUX#]UX#_UX#aUX#bUX#dUX#eUX#fUX#gUX#hUX#iUX#kUX#oUX#rUX%}&]X&P&]X&R&]X&^UX&_UX&_&]X&nUX&vUX&v&]X&x!aX~O#p$^X~P(iO&PSO&R!qO~O&W!vO&Y!tO~Og^Oh^O!SyO!TyO!UyO!VyO!WyO!XyO!YyO!ZzO!]yO!^yO!_yO%}TO&P!wO&RWOg!RXh!RX$h!RX&P!RX&R!RX~O#y!|O#z!{O$W!}Ov!RX!u!RX!z!RX&t!RX~P+QOW#XOu#OO%}TO&P#SO&R#SO&v&aX~OW#[Ou&[X%}&[X&P&[X&R&[X&v&[XY&[Xw&[X&n&[X&q&[XZ&[Xq&[X&^&[X!P&[X#_&[X#a&[X#b&[X#d&[X#e&[X#f&[X#g&[X#h&[X#i&[X#k&[X#o&[X#r&[X}&[X!r&[X#p&[Xs&[X|&[X~O&_#YO~P-dO&_&[X~P-dOZ`O_VO`VOaVObVOcVOeVOg^Oh^Op!POwkOz!OO!SyO!TyO!UyO!VyO!WyO!XyO!YyO!ZzO!]yO!^yO!_yO#fpO#roO#tpO#upO%}TO&XUO~O&P#^O&R#]OY&pP~P/uO%}TOg%bXh%bXv%bX!S%bX!T%bX!U%bX!V%bX!W%bX!X%bX!Y%bX!Z%bX!]%bX!^%bX!_%bX!u%bX!z%bX$h%bX&P%bX&R%bX&t%bX&_%bX~O!SyO!TyO!UyO!VyO!WyO!XyO!YyO!ZzO!]yO!^yO!_yOg!RXh!RXv!RX!u!RX!z!RX&P!RX&R!RX&t!RX&_!RX~O$h!RX~P3gO|#kO~P]Og^Oh^Ov#pO!u#rO!z#qO&P!wO&RWO&t#oO~O$h#sO~P5VOu#uO&v#vO!P&TX#_&TX#a&TX#b&TX#d&TX#e&TX#f&TX#g&TX#h&TX#i&TX#k&TX#o&TX#r&TX&^&TX&_&TX&n&TX~OW#tOY&TX#p&TXs&TXq&TX|&TX~P5xO!b#wO#]#wOW&UXu&UX!P&UX#_&UX#a&UX#b&UX#d&UX#e&UX#f&UX#g&UX#h&UX#i&UX#k&UX#o&UX#r&UX&^&UX&_&UX&n&UX&v&UXY&UX#p&UXs&UXq&UX|&UX~OZ#XX~P7jOZ#xO~O&v#vO~O#_#|O#a#}O#b$OO#d$QO#e$RO#f$SO#g$TO#h$UO#i$UO#k$YO#o$VO#r$WO&^#zO&_#zO&n#{O~O!P$XO~P9oO&x$ZO~OZ`O_VO`VOaVObVOcVOeVOg^Oh^Op!POwkOz!OO#fpO#roO#tpO#upO%}TO&P0qO&R0pO&XUO~O#p$_O~O![$aO~O&P#SO&R#SO~Og^Oh^O&P!wO&RWO&_#YO~OW$gO&v#vO~O#z!{O~O!W$kO&PSO&R!qO~OZ$lO~OZ$oO~O!P$vO&P$uO&R$uO~O!P$xO&P$uO&R$uO~O!P${O~P:|OZ%OO}cO~OW&]Xu&]X%}&]X&P&]X&R&]X&_&]X~OZ!aX~P>lOWiXuiX%}iX&PiX&RiX&_iX~OZ!aX~P?XOu#OO%}TO&P#SO&R#SO~O%}TO~P3gOg^Oh^Ov#pO!u#rO!z#qO&_!hO&t#oO~O&P!cO&R!dO~P@ZOg^Oh^O%}TO&P!cO&R!dO~O}cO!P%aO~OZ%bO~O}%dO!m%gO~O}cOg&gXh&gXv&gX!S&gX!T&gX!U&gX!V&gX!W&gX!X&gX!Y&gX!Z&gX!]&gX!^&gX!_&gX!u&gX!z&gX%}&gX&P&gX&R&gX&_&gX&t&gX~OW%jOZ%kOgTahTa%}Ta&PTa&RTa~OvTa!STa!TTa!UTa!VTa!WTa!XTa!YTa!ZTa!]Ta!^Ta!_Ta!uTa!zTa#yTa#zTa$WTa$hTa&tTa&_TauTaYTaqTa|Ta!PTa~PC[O&W%nO&Y!tO~Ou#OO%}TOqma&^maYma&nma!Pma~O&vma}ma!rma~PEnO!SyO!TyO!UyO!VyO!WyO!XyO!YyO!ZzO!]yO!^yO!_yO~Og!Rah!Rav!Ra!u!Ra!z!Ra$h!Ra&P!Ra&R!Ra&t!Ra&_!Ra~PFdO#z%pO~Os%rO~Ou%sO%}TO~Ou#OO%}ra&Pra&Rra&vraYrawra&nra&qra!Pra&^raqra~OWra#_ra#ara#bra#dra#era#fra#gra#hra#ira#kra#ora#rra&_ra#prasra|ra~PH_Ou#OO%}TOq&iX!P&iX!b&iX~OY&iX#p&iX~PJ`O!b%vOq!`X!P!`XY!`X~Oq%wO!P&hX~O!P%yO~Ov%zO~Og^Oh^O%}0oO&P!wO&RWO&b%}O~O&^&`P~PKmO%}TO&P!wO&RWO~OW&QXYiXY!aXY&QXZ&QXq!aXu&QXwiX!b&QX#]&QX#_&QX#a&QX#b&QX#d&QX#e&QX#f&QX#g&QX#h&QX#i&QX#k&QX#o&QX#r&QX&^&QX&_&QX&niX&n&QX&qiX&viX&v&QX&x!aX~P?XOWUXYUXY!aXY&]XZUXq!aXuUXw&]X!bUX#]UX#_UX#aUX#bUX#dUX#eUX#fUX#gUX#hUX#iUX#kUX#oUX#rUX&^UX&_UX&nUX&n&]X&q&]X&vUX&v&]X&x!aX~P>lOg^Oh^O%}TO&P!wO&RWOg!RXh!RX&P!RX&R!RX~PFdOu#OOw&XO%}TO&P&UO&R&TO&q&WO~OW#XOY&aX&n&aX&v&aX~P!#YOY&ZO~P9oOg^Oh^O&P!wO&RWO~Oq&]OY&pX~OY&_O~Og^Oh^O%}TO&P!wO&RWOY&pP~PFdOY&dO&n&bO&v#vO~Oq&eO&x$ZOY&wX~OY&gO~O%}TOg%bah%bav%ba!S%ba!T%ba!U%ba!V%ba!W%ba!X%ba!Y%ba!Z%ba!]%ba!^%ba!_%ba!u%ba!z%ba$h%ba&P%ba&R%ba&t%ba&_%ba~O|&hO~P]O}&iO~Op&uOw&vO&PSO&R!qO&_#YO~Oz&tO~P!'iOz&xO&PSO&R!qO&_#YO~OY&eP~P:|Og^Oh^O%}TO&P!wO&RWO~O}cO~P:|OW#XOu#OO%}TO&v&aX~O#r$WO!P#sa#_#sa#a#sa#b#sa#d#sa#e#sa#f#sa#g#sa#h#sa#i#sa#k#sa#o#sa&^#sa&_#sa&n#saY#sa#p#sas#saq#sa|#sa~Oo'_O}'^O!r'`O&_!hO~O}'eO!r'`O~Oo'iO}'hO&_!hO~OZ#xOu'mO%}TO~OW%jO}'sO~OW%jO!P'uO~OW'vO!P'wO~O$h!WO&P0qO&R0pO!P&eP~P/uO!P(SO#p(TO~P9oO}(UO~O$c(WO~O!P(XO~O!P(YO~O!P(ZO~P9oO!P(]O~P9oOZ$lO_VO`VOaVObVOcVOeVOg^Oh^Op!POwkOz!OO%}TO&P(_O&R(^O&XUO~PFdO%Q(hO%U(iOZ$}a_$}a`$}aa$}ab$}ac$}ae$}ag$}ah$}ap$}av$}aw$}az$}a}$}a!P$}a!S$}a!T$}a!U$}a!V$}a!W$}a!X$}a!Y$}a!Z$}a![$}a!]$}a!^$}a!_$}a!u$}a!z$}a#f$}a#r$}a#t$}a#u$}a#y$}a#z$}a$W$}a$Y$}a$`$}a$c$}a$e$}a$h$}a$l$}a$n$}a$s$}a$u$}a$w$}a$y$}a$|$}a%O$}a%w$}a%}$}a&P$}a&R$}a&X$}a&t$}a|$}a$a$}a$q$}a~O}ra!rra'Ora~PH_OZ%bO~PJ`O!P(mO~O!m%gO}&la!P&la~O}cO!P(pO~Oo(tOq!fX&^!fX~Oq(vO&^&mX~O&^(xO~OZ`O_VO`VOaVObVOcVOeVOg^Oh^Op)UOv{Ow)TOz!OO|)PO}cO!PvO![!`O!u}O!z|O#fpO#roO#tpO#upO#y!RO#z!QO$W!SO$Y!TO$`!UO$c!VO$e!XO$h!WO$l!YO$n!ZO$s![O$u!]O$w!^O$y!_O$|!aO%O!bO%}TO&PRO&RQO&XUO&_#YO&tdO~PFdO}%dO~O})]OY&zP~P:|OW%jO!P)dO~Os)eO~Ou#OO%}TOq&ia!P&ia!b&iaY&ia#p&ia~O})fO~P:|Oq%wO!P&ha~Og^Oh^O%}0oO&P!wO&RWO~O&b)mO~P!8jOu#OO%}TOq&aX&^&aXY&aX&n&aX!P&aX~O}&aX!r&aX~P!9SOo)oOp)oOqnX&^nX~Oq)pO&^&`X~O&^)rO~Ou#OOw)tO%}TO&PSO&R!qO~OYma&nma&vma~P!:bOW&QXY!aXq!aXu!aX%}!aX~OWUXY!aXq!aXu!aX%}!aX~OW)wO~Ou#OO%}TO&P#SO&R#SO&q)yO~Og^Oh^O%}TO&P!wO&RWO~PFdOq&]OY&pa~Ou#OO%}TO&P#SO&R#SO&q&WO~OY)|O~OY*PO&n&bO~Oq&eOY&wa~Og^Oh^Ov{O|*XO!u}O%}TO&P!wO&RWO&tdO~PFdO!P*YO~OW^iZ#XXu^i!P^i!b^i#]^i#_^i#a^i#b^i#d^i#e^i#f^i#g^i#h^i#i^i#k^i#o^i#r^i&^^i&_^i&n^i&v^iY^i#p^is^iq^i|^i~OW*iO~Os*jO~P9oOz*kO&PSO&R!qO~O!P]iY]i#p]is]iq]i|]i~P9oOq*lOY&eX!P&eX~P9oOY*nO~O#f$SO#g$TO#k$YO#r$WO!P#^i#_#^i#a#^i#b#^i#d#^i#e#^i#o#^i&^#^i&_#^i&n#^iY#^i#p#^is#^iq#^i|#^i~O#h$UO#i$UO~P!AmO#_#|O#d$QO#e$RO#f$SO#g$TO#h$UO#i$UO#k$YO#r$WO&^#zO&_#zO&n#{O!P#^i#b#^i#o#^iY#^i#p#^is#^iq#^i|#^i~O#a#^i~P!CUO#a#}O~P!CUO#_#|O#f$SO#g$TO#h$UO#i$UO#k$YO#r$WO&^#zO&_#zO!P#^i#a#^i#b#^i#d#^i#e#^i#o#^iY#^i#p#^is#^iq#^i|#^i~O&n#^i~P!DtO&n#{O~P!DtO#f$SO#g$TO#k$YO#r$WO!P#^i#a#^i#b#^i#e#^i#o#^iY#^i#p#^is#^iq#^i|#^i~O#_#|O#d$QO#h$UO#i$UO&^#zO&_#zO&n#{O~P!FdO#k$YO#r$WO!P#^i#_#^i#a#^i#b#^i#d#^i#e#^i#f#^i#h#^i#i#^i#o#^i&^#^i&_#^i&n#^iY#^i#p#^is#^iq#^i|#^i~O#g$TO~P!G{O#g#^i~P!G{O#h#^i#i#^i~P!AmO#p*oO~P9oO#_&aX#a&aX#b&aX#d&aX#e&aX#f&aX#g&aX#h&aX#i&aX#k&aX#o&aX#r&aX&_&aX#p&aXs&aX|&aX~P!9SO!P#liY#li#p#lis#liq#li|#li~P9oO|*rO~P$wO}'^O~O}'^O!r'`O~Oo'_O}'^O!r'`O~O%}TO&P#SO&R#SO|&sP!P&sP~PFdO}'eO~Og^Oh^Ov{O|+PO!P*}O!u}O!z|O%}TO&P!wO&RWO&_!hO&tdO~PFdO}'hO~Oo'iO}'hO~Os+RO~P:|Ou+TO%}TO~Ou'mO})fO%}TOW#Zi!P#Zi#_#Zi#a#Zi#b#Zi#d#Zi#e#Zi#f#Zi#g#Zi#h#Zi#i#Zi#k#Zi#o#Zi#r#Zi&^#Zi&_#Zi&n#Zi&v#ZiY#Zi#p#Zis#Ziq#Zi|#Zi~O}'^OW&diu&di!P&di#_&di#a&di#b&di#d&di#e&di#f&di#g&di#h&di#i&di#k&di#o&di#r&di&^&di&_&di&n&di&v&diY&di#p&dis&diq&di|&di~O#}+]O$P+^O$R+^O$S+_O$T+`O~O|+[O~P##nO$Z+aO&PSO&R!qO~OW+bO!P+cO~O$a+dOZ$_i_$_i`$_ia$_ib$_ic$_ie$_ig$_ih$_ip$_iv$_iw$_iz$_i}$_i!P$_i!S$_i!T$_i!U$_i!V$_i!W$_i!X$_i!Y$_i!Z$_i![$_i!]$_i!^$_i!_$_i!u$_i!z$_i#f$_i#r$_i#t$_i#u$_i#y$_i#z$_i$W$_i$Y$_i$`$_i$c$_i$e$_i$h$_i$l$_i$n$_i$s$_i$u$_i$w$_i$y$_i$|$_i%O$_i%w$_i%}$_i&P$_i&R$_i&X$_i&t$_i|$_i$q$_i~Og^Oh^O$h#sO&P!wO&RWO~O!P+hO~P:|O!P+iO~OZ`O_VO`VOaVObVOcVOeVOg^Oh^Op!POv{OwkOz!OO}cO!PvO!SyO!TyO!UyO!VyO!WyO!XyO!YyO!Z+nO![!`O!]yO!^yO!_yO!u}O!z|O#fpO#roO#tpO#upO#y!RO#z!QO$W!SO$Y!TO$`!UO$c!VO$e!XO$h!WO$l!YO$n!ZO$q+oO$s![O$u!]O$w!^O$y!_O$|!aO%O!bO%}TO&PRO&RQO&XUO&tdO~O|+mO~P#)QOW&QXY&QXZ&QXu&QX!P&QX&viX&v&QX~P?XOWUXYUXZUXuUX!PUX&vUX&v&]X~P>lOW#tOu#uO&v#vO~OW&UXY%XXu&UX!P%XX&v&UX~OZ#XX~P#.VOY+uO!P+sO~O%Q(hO%U(iOZ$}i_$}i`$}ia$}ib$}ic$}ie$}ig$}ih$}ip$}iv$}iw$}iz$}i}$}i!P$}i!S$}i!T$}i!U$}i!V$}i!W$}i!X$}i!Y$}i!Z$}i![$}i!]$}i!^$}i!_$}i!u$}i!z$}i#f$}i#r$}i#t$}i#u$}i#y$}i#z$}i$W$}i$Y$}i$`$}i$c$}i$e$}i$h$}i$l$}i$n$}i$s$}i$u$}i$w$}i$y$}i$|$}i%O$}i%w$}i%}$}i&P$}i&R$}i&X$}i&t$}i|$}i$a$}i$q$}i~OZ+xO~O%Q(hO%U(iOZ%Vi_%Vi`%Via%Vib%Vic%Vie%Vig%Vih%Vip%Viv%Viw%Viz%Vi}%Vi!P%Vi!S%Vi!T%Vi!U%Vi!V%Vi!W%Vi!X%Vi!Y%Vi!Z%Vi![%Vi!]%Vi!^%Vi!_%Vi!u%Vi!z%Vi#f%Vi#r%Vi#t%Vi#u%Vi#y%Vi#z%Vi$W%Vi$Y%Vi$`%Vi$c%Vi$e%Vi$h%Vi$l%Vi$n%Vi$s%Vi$u%Vi$w%Vi$y%Vi$|%Vi%O%Vi%w%Vi%}%Vi&P%Vi&R%Vi&X%Vi&t%Vi|%Vi$a%Vi$q%Vi~Ou#OO%}TO}&oa!P&oa!m&oa~O!P,OO~Oo(tOq!fa&^!fa~Oq(vO&^&ma~O!m%gO}&li!P&li~O|,XO~P]OW,ZO~P5xOW&UXu&UX#_&UX#a&UX#b&UX#d&UX#e&UX#f&UX#g&UX#h&UX#i&UX#k&UX#o&UX#r&UX&^&UX&_&UX&n&UX&v&UX~OZ#xO!P&UX~P#8^OW$gOZ#xO&v#vO~Op,]Ow,]O~Oq,^O}&rX!P&rX~O!b,`O#]#wOY&UXZ#XX~P#8^OY&SXq&SX|&SX!P&SX~P9oO})]O|&yP~P:|OY&SXg%[Xh%[X%}%[X&P%[X&R%[Xq&SX|&SX!P&SX~Oq,cOY&zX~OY,eO~O})fO|&kP~P:|Oq&jX!P&jX|&jXY&jX~P9oO&bTa~PC[Oo)oOp)oOqna&^na~Oq)pO&^&`a~OW,mO~Ow,nO~Ou#OO%}TO&P,rO&R,qO~Og^Oh^Ov#pO!u#rO&P!wO&RWO&t#oO~Og^Oh^Ov{O|,wO!u}O%}TO&P!wO&RWO&tdO~PFdOw-SO&PSO&R!qO&_#YO~Oq*lOY&ea!P&ea~O#_ma#ama#bma#dma#ema#fma#gma#hma#ima#kma#oma#rma&_ma#pmasma|ma~PEnO|-WO~P$wOZ#xO}'^Oq!|X|!|X!P!|X~Oq-[O|&sX!P&sX~O|-_O!P-^O~O&_!hO~P5VOg^Oh^Ov{O|-cO!P*}O!u}O!z|O%}TO&P!wO&RWO&_!hO&tdO~PFdOs-dO~P9oOs-dO~P:|O}'^OW&dqu&dq!P&dq#_&dq#a&dq#b&dq#d&dq#e&dq#f&dq#g&dq#h&dq#i&dq#k&dq#o&dq#r&dq&^&dq&_&dq&n&dq&v&dqY&dq#p&dqs&dqq&dq|&dq~O|-hO~P##nO!W-lO$O-lO&PSO&R!qO~O!P-oO~O$Z-pO&PSO&R!qO~O!b%vO#p-rOq!`X!P!`X~O!P-tO~P9oO!P-tO~P:|O!P-wO~P9oO|-yO~P#)QO![$aO#p-zO~O!P-|O~O!b-}O~OY.QOZ$lO_VO`VOaVObVOcVOeVOg^Oh^Op!POwkOz!OO%}TO&P(_O&R(^O&XUO~PFdOY.QO!P.RO~O%Q(hO%U(iOZ%Vq_%Vq`%Vqa%Vqb%Vqc%Vqe%Vqg%Vqh%Vqp%Vqv%Vqw%Vqz%Vq}%Vq!P%Vq!S%Vq!T%Vq!U%Vq!V%Vq!W%Vq!X%Vq!Y%Vq!Z%Vq![%Vq!]%Vq!^%Vq!_%Vq!u%Vq!z%Vq#f%Vq#r%Vq#t%Vq#u%Vq#y%Vq#z%Vq$W%Vq$Y%Vq$`%Vq$c%Vq$e%Vq$h%Vq$l%Vq$n%Vq$s%Vq$u%Vq$w%Vq$y%Vq$|%Vq%O%Vq%w%Vq%}%Vq&P%Vq&R%Vq&X%Vq&t%Vq|%Vq$a%Vq$q%Vq~Ou#OO%}TO}&oi!P&oi!m&oi~O&n&bOq!ga&^!ga~O!m%gO}&lq!P&lq~O|.^O~P]Op.`Ow&vOz&tO&PSO&R!qO&_#YO~O!P.aO~Oq,^O}&ra!P&ra~O})]O~P:|Oq.gO|&yX~O|.iO~Oq,cOY&za~Oq.mO|&kX~O|.oO~Ow.pO~Oq!aXu!aX!P!aX!b!aX%}!aX~OZ&QX~P#N{OZUX~P#N{O!P.qO~OZ.rO~OW^yZ#XXu^y!P^y!b^y#]^y#_^y#a^y#b^y#d^y#e^y#f^y#g^y#h^y#i^y#k^y#o^y#r^y&^^y&_^y&n^y&v^yY^y#p^ys^yq^y|^y~OY%`aq%`a!P%`a~P9oO!P#nyY#ny#p#nys#nyq#ny|#ny~P9oO}'^Oq!|a|!|a!P!|a~OZ#xO}'^Oq!|a|!|a!P!|a~O%}TO&P#SO&R#SOq%jX|%jX!P%jX~PFdOq-[O|&sa!P&sa~O|!}X~P$wO|/PO~Os/QO~P9oOW%jO!P/RO~OW%jO$Q/WO&PSO&R!qO!P&|P~OW%jO$U/XO~O!P/YO~O!b%vO#p/[Oq!`X!P!`X~OY/^O~O!P/_O~P9oO#p/`O~P9oO!b/bO~OY/cOZ$lO_VO`VOaVObVOcVOeVOg^Oh^Op!POwkOz!OO%}TO&P(_O&R(^O&XUO~PFdOW#[Ou&[X%}&[X&P&[X&R&[X'O&[X~O&_#YO~P$)QOu#OO%}TO'O/eO&P%SX&R%SX~O&n&bOq!gi&^!gi~Op/iO&PSO&R!qO~OW*iOZ#xO~O!P/kO~OY&SXq&SX~P9oO})]Oq%nX|%nX~P:|Oq.gO|&ya~O!b/nO~O})fOq%cX|%cX~P:|Oq.mO|&ka~OY/qO~O!P/rO~OZ/sO~O}'^Oq!|i|!|i!P!|i~O|!}a~P$wOW%jO!P/wO~OW%jOq/xO!P&|X~OY/|O~P9oOY0OO~OY%Xq!P%Xq~P9oO'O/eO&P%Sa&R%Sa~OY0TO~O!P0WO~Ou#OO!P0YO!Z0ZO%}TO~OY0[O~Oq/xO!P&|a~O!P0_O~OW%jOq/xO!P&}X~OY0aO~P9oOY0bO~OY%Xy!P%Xy~P9oOu#OO%}TO&P%ua&R%ua'O%ua~OY0cO~O!P0dO~Ou#OO!P0eO!Z0fO%}TO~OW%jOq%ra!P%ra~Oq/xO!P&}a~O!P0jO~Ou#OO!P0jO!Z0kO%}TO~O!P0lO~O!P0nO~O#p&QXY&QXs&QXq&QX|&QX~P&bO#pUXYUXsUXqUX|UX~P(iO`Q_P#g%y&P&Xc&X~",goto:"#+S'OPPPP'P'd*x.OP'dPP.d.h0PPPPPP1nP3ZPP4v7l:[<z=d?[PPP?bPA{PPPBu3ZPDqPPElPFcFkPPPPPPPPPPPPGvH_PKjKrLOLjLpLvNiNmNmNuP! U!!^!#R!#]P!#r!!^P!#x!$S!!y!$cP!%S!%^!%d!!^!%g!%mFcFc!%q!%{!&O3Z!'m3Z3Z!)iP.hP!)mPP!*_PPPPPP.hP.h!+O.hPP.hP.hPP.h!,g!,qPP!,w!-QPPPPPPPP'PP'PPP!-U!-U!-i!-UPP!-UP!-UP!.S!.VP!-U!.m!-UP!-UP!.p!.sP!-UP!-UP!-UP!-UP!-U!-UP!-UP!.wP!.}!/Q!/WP!-U!/d!/gP!/o!0R!4T!4Z!4a!5g!5m!5{!7R!7X!7_!7i!7o!7u!7{!8R!8X!8_!8e!8k!8q!8w!8}!9T!9_!9e!9o!9uPPP!9{!-U!:pP!>WP!?[P!Ap!BW!E]3ZPPP!F|!Jm!MaPP#!P#!SP#$`#$f#&V#&f#&n#'p#(Y#)T#)^#)a#)oP#)r#*OP#*V#*^P#*aP#*lP#*o#*r#*u#*y#+PstOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,Y'urOPXY`acopx!Y![!_!a!e!f!h!i!o!x#P#T#Y#[#_#`#e#i#l#n#u#w#x#|#}$O$P$Q$R$S$T$U$V$Y$Z$[$]$_$e$l$m$n$o$p$q%O%S%V%Z%^%_%b%d%g%k%u%v%{%|&R&S&[&]&`&b&d&i'X'^'_'`'e'h'i'm'n'p'{'|(O(T(U(`(l(t(v({(})O)Q)R)])f)o)p*P*T*W*l*o*p*q*z*{+O+T+d+f+h+i+l+o+r+s+x+},W,Y,^,`,u-[-^-a-r-t-}.R.V.g.m/O/[/_/b/d/n/q0R0X0Z0[0f0h0k0r#xhO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%d%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o,Y,`-r-t-}.g.m/[/_/b/n0Z0f0kt!sT!Q!S!T!{!}$k%p+]+^+_+`-k-m/W/X/x0oQ#mdS&Y#`(}Q&l#oU&q#t$g,ZQ&x#vW(b%O+s.R/dU)Y%j'v+bQ)Z%kS)u&S,WU*f&s-R._Q*k&yQ,t*TQ-P*iQ.j,cR.t,uu!sT!Q!S!T!{!}$k%p+]+^+_+`-k-m/W/X/x0oT%l!r)l#{qO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o,Y,`-r-t-}.g.m/[/_/b/n0Z0f0k#zlO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o,Y,`-r-t-}.g.m/[/_/b/n0Z0f0kX(c%O+s.R/d$TVO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%O%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o+s,Y,`-r-t-}.R.g.m/[/_/b/d/n0Z0f0k$TkO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%O%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o+s,Y,`-r-t-}.R.g.m/[/_/b/d/n0Z0f0k&O[OPX`ceopx!O!Y![!_!a!g!i!o#Y#_#b#e#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Y$Z$[$_$f$l$m$n$o$p$q%O%_%b%d%g%k%v%{&]&b&d&i&t'^'_'`'h'i'm'{'}(O(T(U(d(t)O)Q)R)])f)o)p*P*U*W*l*o*q*{*|+O+T+d+h+i+l+o+s,Y,^,`-^-r-t-}.R.g.m/O/[/_/b/d/n0Z0f0k0rQ&Q#[Q)s&RV.T+x.X/e&O[OPX`ceopx!O!Y![!_!a!g!i!o#Y#_#b#e#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Y$Z$[$_$f$l$m$n$o$p$q%O%_%b%d%g%k%v%{&]&b&d&i&t'^'_'`'h'i'm'{'}(O(T(U(d(t)O)Q)R)])f)o)p*P*U*W*l*o*q*{*|+O+T+d+h+i+l+o+s,Y,^,`-^-r-t-}.R.g.m/O/[/_/b/d/n0Z0f0k0rV.T+x.X/e&O]OPX`ceopx!O!Y![!_!a!g!i!o#Y#_#b#e#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Y$Z$[$_$f$l$m$n$o$p$q%O%_%b%d%g%k%v%{&]&b&d&i&t'^'_'`'h'i'm'{'}(O(T(U(d(t)O)Q)R)])f)o)p*P*U*W*l*o*q*{*|+O+T+d+h+i+l+o+s,Y,^,`-^-r-t-}.R.g.m/O/[/_/b/d/n0Z0f0k0rV.U+x.X/eS#Z[.TS$f!O&tS&s#t$gQ&y#vQ)V%dQ-R*iR._,Z$kZO`copx!Y![!_!a#Y#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Y$Z$_$l$m$n$o$p$q%O%d%g%k%v&b&d'_'`'i'm(O(T(U(t)Q)R)])f)o)p*P*l*o+T+d+h+i+l+o+s,Y,^,`-r-t-}.R.g.m/[/_/b/d/n0Z0f0kQ&O#YR,k)p&P_OPX`ceopx!Y![!_!a!g!i!o#Y#_#b#e#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Y$Z$[$_$l$m$n$o$p$q%O%_%b%d%g%k%v%{&]&b&d&i'^'_'`'h'i'm'{'}(O(T(U(d(t)O)Q)R)])f)o)p*P*U*W*l*o*q*{*|+O+T+d+h+i+l+o+s+x,Y,^,`-^-r-t-}.R.X.g.m/O/[/_/b/d/e/n0Z0f0k0r!o#QY!e!x#R#T#`#n$]%R%S%V%^%u%|&S&[&`'X'|(`(l({(}*T*p*z+f+r+},W,u-a.V/q0R0X0[0h$SkO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%O%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o+s,Y,`-r-t-}.R.g.m/[/_/b/d/n0Z0f0kQ$m!UQ$n!VQ$s!ZQ$|!`R+p(WQ#yiS'q$e*hQ*e&rQ+X'rS,[)T)UQ-O*gQ-Y*vQ.b,]Q.x-QQ.{-ZQ/j.`Q/u.yR0V/iQ'a$bW*[&m'b'c'dQ+W'qU,x*]*^*_Q-X*vQ-f+XS.u,y,zS.z-Y-ZQ/t.vR/v.{]!mP!o'^*q-^/OreOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,Y[!gP!o'^*q-^/OW#b`#e%b&]Q'}$oW(d%O+s.R/dS*U&i*WS*w'e-[S*|'h+OR.X+xh#VY!W!e#n#s%V'|*T*z+f,u-aQ)j%wQ)v&WR,o)y#xnOcopx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o,Y,`-r-t-}.g.m/[/_/b/n0Z0f0k^!kP!g!o'^*q-^/Ov#TY!W#`#n#s%w&W&[&`'|(`(})y*T+f+r,u.W/hQ#g`Q$b{Q$c|Q$d}W%S!e%V*z-aS%Y!h(vQ%`!iQ&m#pQ&n#qQ&o#rQ(u%ZS(y%^({Q*R&eS*v'e-[R-Z*wU)h%v)f.mR+V'p[!mP!o'^*q-^/OT*}'h+O^!iP!g!o'^*q-^/OQ'd$bQ'l$dQ*_&mQ*d&oV*{'h*|+OQ%[!hR,S(vQ(s%YR,R(u#znO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o,Y,`-r-t-}.g.m/[/_/b/n0Z0f0kQ%c!kS(l%S(yR(|%`T#e`%bU#c`#e%bR)z&]Q%f!lQ(n%UQ(r%XQ,U(zR.],VrvOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,Y[!mP!o'^*q-^/OQ%P!bQ%a!jQ%i!pQ'[$ZQ([$|Q(k%QQ(p%WQ+z(iR.Y+yrtOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,Y[!mP!o'^*q-^/OS*V&i*WT*}'h+OQ'c$bS*^&m'dR,z*_Q'b$bQ'g$cU*]&m'c'dQ*a&nS,y*^*_R.v,zQ*u'`R+Q'iQ'k$dS*c&o'lR,}*dQ'j$dU*b&o'k'lS,|*c*dR.w,}rtOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,Y[!mP!o'^*q-^/OT*}'h+OQ'f$cS*`&n'gR,{*aQ*x'eR.|-[R-`*yQ&j#mR*Z&lT*V&i*WQ%e!lS(q%X%fR,P(rR)R%dWk%O+s.R/d#{lO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o,Y,`-r-t-}.g.m/[/_/b/n0Z0f0k$SiO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%O%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o+s,Y,`-r-t-}.R.g.m/[/_/b/d/n0Z0f0kU&r#t$g,ZS*g&s._Q-Q*iR.y-RT'o$e'p!_#|m#a$r$z$}&w&z&{'O'P'Q'R'S'W'Z)[)g+S+g+j-T-V-e-v-{.e/Z/a/}0Q!]$Pm#a$r$z$}&w&z&{'O'P'R'S'W'Z)[)g+S+g+j-T-V-e-v-{.e/Z/a/}0Q#{nO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o,Y,`-r-t-}.g.m/[/_/b/n0Z0f0ka)^%k)],`.g/n0Z0f0kQ)`%kR.k,cQ't$hQ)b%oR,f)cT+Y's+ZsvOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,YruOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,YQ$w!]R$y!^R$p!XrvOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,YR(O$oR$q!XR(V$sT+k(U+lX(f%P(g(k+{R+y(hQ.W+xR/h.XQ(j%PQ+w(gQ+|(kR.Z+{R%Q!bQ(e%OV.P+s.R/dQxOQ#lcW$`x#l)Q,YQ)Q%dR,Y)RrXOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,Yn!fP!o#e&]&i'^'e'h*W*q+O+x-[-^/Ol!zX!f#P#_#i$[%Z%_%{&R'n'{)O0r!j#PY!e!x#T#`#n$]%S%V%^%u%|&S&[&`'X'|(`(l({(}*T*p*z+f+r+},W,u-a.V/q0R0X0[0hQ#_`Q#ia#d$[op!Y!_!a#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$l%g%k%v&b&d'_'`'i'm(O(T(t)])f)o*P*l*o+T+h+i+o,^,`-r-t-}.g.m/[/_/b/n0Z0f0kS%Z!h(vS%_!i*{S%{#Y)pQ&R#[S'n$e'pY'{$o%O+s.R/dQ)O%bR0r$YQ!uUR%m!uQ)q&OR,l)q^#RY#`$]'X'|(`*px%R!e!x#n%V%^%|&S&[&`({(}*T*z+f+r,W,u-a.V0R[%t#R%R%u+}0X0hS%u#T%SQ+}(lQ0X/qR0h0[Q*m&{R-U*mQ!oPU%h!o*q/OQ*q'^R/O-^!pbOP`cx![!o#e#l$_$m$n$o$p$q%O%b%d&]&i'^'e'h(U)Q)R*W*q+O+d+l+s+x,Y-[-^.R/O/dY!yX!f#_'{)OT#jb!yQ.n,gR/p.nQ%x#VR)k%xQ&c#fS*O&c.[R.[,QQ(w%[R,T(wQ&^#cR){&^Q,_)WR.d,_Q+O'hR-b+OQ-]*xR.}-]Q*W&iR,v*WQ'p$eR+U'pQ&f#gR*S&fQ.h,aR/m.hQ,d)`R.l,dQ+Z'sR-g+ZQ-k+]R/T-kQ/y/US0^/y0`R0`/{Q+l(UR-x+lQ(g%PS+v(g+{R+{(kQ/f.VR0S/fQ+t(eR.S+t`wOcx#l%d)Q)R,YQ$t![Q']$_Q'y$mQ'z$nQ(Q$pQ(R$qS+k(U+lR-q+d'dsOPXY`acopx!Y![!_!a!e!f!h!i!o!x#P#T#Y#[#_#`#e#i#l#n#u#w#x#|#}$O$P$Q$R$S$T$U$V$Y$Z$[$]$_$e$l$m$n$o$p$q%O%S%V%Z%^%_%b%d%g%u%v%{%|&R&S&[&]&`&b&d&i'X'^'_'`'e'h'i'm'n'p'{'|(O(T(U(`(l(t(v({(})O)Q)R)f)o)p*P*T*W*l*o*p*q*z*{+O+T+d+f+h+i+l+o+r+s+x+},W,Y,^,u-[-^-a-r-t-}.R.V.m/O/[/_/b/d/q0R0X0[0h0ra)_%k)],`.g/n0Z0f0kQ!rTQ$h!QQ$i!SQ$j!TQ%o!{Q%q!}Q'x$kQ)c%pQ)l0oS-i+]+_Q-m+^Q-n+`Q/S-kS/U-m/WQ/{/XR0]/x%uSOT`cdopx!Q!S!T!Y![!_!a!{!}#`#l#o#t#u#v#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$g$k$l$m$n$o$p$q%O%d%j%k%p%v&S&d&s&y'm'v(O(T(U(})Q)R)])f*P*T*i*l*o+T+]+^+_+`+b+d+h+i+l+o+s,W,Y,Z,`,c,u-R-k-m-r-t-}.R._.g.m/W/X/[/_/b/d/n/x0Z0f0k0oQ)a%kQ,a)]S.f,`/nQ/l.gQ0g0ZQ0i0fR0m0krmOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,YS#a`$lQ$WoQ$^pQ$r!YQ$z!_Q$}!aQ&w#uQ&z#wY&{#x$o+h-t/_Q&}#|Q'O#}Q'P$OQ'Q$PQ'R$QQ'S$RQ'T$SQ'U$TQ'V$UQ'W$VQ'Z$Z^)[%k)].g/n0Z0f0kU)g%v)f.mQ*Q&dQ+S'mQ+g(OQ+j(TQ,p*PQ-T*lQ-V*oQ-e+TQ-v+iQ-{+oQ.e,`Q/Z-rQ/a-}Q/}/[R0Q/b#xgO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o,Y,`-r-t-}.g.m/[/_/b/n0Z0f0kW(a%O+s.R/dR)S%drYOcx![#l$_$m$n$p$q%d(U)Q)R+d+l,Y[!eP!o'^*q-^/OW!xX$[%{'{Q#``Q#ne#S$]op!Y!_!a#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$l%k%v&d'm(O(T)])f*P*l*o+T+h+i+o,`-r-t-}.g.m/[/_/b/n0Z0f0kQ%V!gS%^!i*{d%|#Y%g&b'_'`'i(t)o)p,^Q&S#_Q&[#bS&`#e&]Q'X$YQ'|$oW(`%O+s.R/dQ({%_Q(}%bS*T&i*WQ*p0rS*z'h+OQ+f'}Q+r(dQ,W)OQ,u*UQ-a*|S.V+x.XR0R/e&O_OPX`ceopx!Y![!_!a!g!i!o#Y#_#b#e#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Y$Z$[$_$l$m$n$o$p$q%O%_%b%d%g%k%v%{&]&b&d&i'^'_'`'h'i'm'{'}(O(T(U(d(t)O)Q)R)])f)o)p*P*U*W*l*o*q*{*|+O+T+d+h+i+l+o+s+x,Y,^,`-^-r-t-}.R.X.g.m/O/[/_/b/d/e/n0Z0f0k0rQ$e!OQ'r$fR*h&t&ZWOPX`ceopx!O!Y![!_!a!g!i!o#Y#[#_#b#e#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Y$Z$[$_$f$l$m$n$o$p$q%O%_%b%d%g%k%v%{&R&]&b&d&i&t'^'_'`'h'i'm'{'}(O(T(U(d(t)O)Q)R)])f)o)p*P*U*W*l*o*q*{*|+O+T+d+h+i+l+o+s+x,Y,^,`-^-r-t-}.R.X.g.m/O/[/_/b/d/e/n0Z0f0k0rR&P#Y$QjOcopx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%O%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o+s,Y,`-r-t-}.R.g.m/[/_/b/d/n0Z0f0kQ#f`Q&O#YQ'Y$YU)W%g'`'iQ)}&bQ*s'_Q,Q(tQ,j)oQ,k)pR.c,^Q)n%}R,i)m$SfO`copx!Y![!_!a#l#u#w#x#|#}$O$P$Q$R$S$T$U$V$Z$_$l$m$n$o$p$q%O%d%k%v&d'm(O(T(U)Q)R)])f*P*l*o+T+d+h+i+l+o+s,Y,`-r-t-}.R.g.m/[/_/b/d/n0Z0f0kT&p#t,ZQ&|#xQ(P$oQ-u+hQ/]-tR0P/_]!nP!o'^*q-^/O#PaOPX`bcx![!f!o!y#_#e#l$_$m$n$o$p$q%O%b%d&]&i'^'e'h'{(U)O)Q)R*W*q+O+d+l+s+x,Y-[-^.R/O/dU#WY!W'|Q%T!eU&k#n#s+fQ(o%VS,s*T*zT.s,u-aj#UY!W!e#n#s%V%w&W)y*T*z,u-aU&V#`&`(}Q)x&[Q+e'|Q+q(`Q-s+fQ.O+rQ/g.WR0U/hQ)i%vQ,g)fR/o.mR,h)f`!jP!o'^'h*q+O-^/OT%W!g*|R%]!hW%U!e%V*z-aQ(z%^R,V({S#d`%bR&a#eQ)X%gT*t'`'iR*y'e[!lP!o'^*q-^/OR%X!gR#h`R,b)]R)a%kT-j+]-kQ/V-mR/z/WR/z/X",nodeNames:"⚠ LineComment BlockComment Program ModuleDeclaration MarkerAnnotation Identifier ScopedIdentifier . Annotation ) ( AnnotationArgumentList AssignmentExpression FieldAccess IntegerLiteral FloatingPointLiteral BooleanLiteral CharacterLiteral StringLiteral TextBlock null ClassLiteral void PrimitiveType TypeName ScopedTypeName GenericType TypeArguments AnnotatedType Wildcard extends super , ArrayType ] Dimension [ class this ParenthesizedExpression ObjectCreationExpression new ArgumentList } { ClassBody ; FieldDeclaration Modifiers public protected private abstract static final strictfp default synchronized native transient volatile VariableDeclarator Definition AssignOp ArrayInitializer MethodDeclaration TypeParameters TypeParameter TypeBound FormalParameters ReceiverParameter FormalParameter SpreadParameter Throws throws Block ClassDeclaration Superclass SuperInterfaces implements InterfaceTypeList InterfaceDeclaration interface ExtendsInterfaces InterfaceBody ConstantDeclaration EnumDeclaration enum EnumBody EnumConstant EnumBodyDeclarations AnnotationTypeDeclaration AnnotationTypeBody AnnotationTypeElementDeclaration StaticInitializer ConstructorDeclaration ConstructorBody ExplicitConstructorInvocation ArrayAccess MethodInvocation MethodName MethodReference ArrayCreationExpression Dimension AssignOp BinaryExpression CompareOp CompareOp LogicOp LogicOp BitOp BitOp BitOp ArithOp ArithOp ArithOp BitOp InstanceofExpression instanceof LambdaExpression InferredParameters TernaryExpression LogicOp : UpdateExpression UpdateOp UnaryExpression LogicOp BitOp CastExpression ElementValueArrayInitializer ElementValuePair open module ModuleBody ModuleDirective requires transitive exports to opens uses provides with PackageDeclaration package ImportDeclaration import Asterisk ExpressionStatement LabeledStatement Label IfStatement if else WhileStatement while ForStatement for ForSpec LocalVariableDeclaration var EnhancedForStatement ForSpec AssertStatement assert SwitchStatement switch SwitchBlock SwitchLabel case DoStatement do BreakStatement break ContinueStatement continue ReturnStatement return SynchronizedStatement ThrowStatement throw TryStatement try CatchClause catch CatchFormalParameter CatchType FinallyClause finally TryWithResourcesStatement ResourceSpecification Resource ClassContent",maxTerm:276,nodeProps:[["isolate",-4,1,2,18,19,""],["group",-26,4,47,76,77,82,87,92,145,147,150,151,153,156,158,161,163,165,167,172,174,176,178,180,181,183,191,"Statement",-25,6,13,14,15,16,17,18,19,20,21,22,39,40,41,99,100,102,103,106,118,120,122,125,127,130,"Expression",-7,23,24,25,26,27,29,34,"Type"],["openedBy",10,"(",44,"{"],["closedBy",11,")",45,"}"]],propSources:[aO],skippedNodes:[0,1,2],repeatNodeCount:28,tokenData:"#'f_R!_OX%QXY'fYZ)bZ^'f^p%Qpq'fqr*|rs,^st%Qtu4euv5zvw7[wx8rxyAZyzAwz{Be{|CZ|}Dq}!OE_!O!PFx!P!Q! r!Q!R!,h!R![!0`![!]!>p!]!^!@Q!^!_!@n!_!`!BX!`!a!B{!a!b!Di!b!c!EX!c!}!LT!}#O!Mj#O#P%Q#P#Q!NW#Q#R!Nt#R#S4e#S#T%Q#T#o4e#o#p# h#p#q#!U#q#r##n#r#s#$[#s#y%Q#y#z'f#z$f%Q$f$g'f$g#BY4e#BY#BZ#$x#BZ$IS4e$IS$I_#$x$I_$I|4e$I|$JO#$x$JO$JT4e$JT$JU#$x$JU$KV4e$KV$KW#$x$KW&FU4e&FU&FV#$x&FV;'S4e;'S;=`5t<%lO4eS%VV&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QS%qO&YSS%tVOY&ZYZ%lZr&Zrs&ys;'S&Z;'S;=`'`<%lO&ZS&^VOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QS&vP;=`<%l%QS&|UOY&ZYZ%lZr&Zs;'S&Z;'S;=`'`<%lO&ZS'cP;=`<%l&Z_'mk&YS%yZOX%QXY'fYZ)bZ^'f^p%Qpq'fqr%Qrs%qs#y%Q#y#z'f#z$f%Q$f$g'f$g#BY%Q#BY#BZ'f#BZ$IS%Q$IS$I_'f$I_$I|%Q$I|$JO'f$JO$JT%Q$JT$JU'f$JU$KV%Q$KV$KW'f$KW&FU%Q&FU&FV'f&FV;'S%Q;'S;=`&s<%lO%Q_)iY&YS%yZX^*Xpq*X#y#z*X$f$g*X#BY#BZ*X$IS$I_*X$I|$JO*X$JT$JU*X$KV$KW*X&FU&FV*XZ*^Y%yZX^*Xpq*X#y#z*X$f$g*X#BY#BZ*X$IS$I_*X$I|$JO*X$JT$JU*X$KV$KW*X&FU&FV*XV+TX#tP&YSOY%QYZ%lZr%Qrs%qs!_%Q!_!`+p!`;'S%Q;'S;=`&s<%lO%QU+wV#_Q&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QT,aXOY,|YZ%lZr,|rs3Ys#O,|#O#P2d#P;'S,|;'S;=`3S<%lO,|T-PXOY-lYZ%lZr-lrs.^s#O-l#O#P.x#P;'S-l;'S;=`2|<%lO-lT-qX&YSOY-lYZ%lZr-lrs.^s#O-l#O#P.x#P;'S-l;'S;=`2|<%lO-lT.cVcPOY&ZYZ%lZr&Zrs&ys;'S&Z;'S;=`'`<%lO&ZT.}V&YSOY-lYZ/dZr-lrs1]s;'S-l;'S;=`2|<%lO-lT/iW&YSOY0RZr0Rrs0ns#O0R#O#P0s#P;'S0R;'S;=`1V<%lO0RP0UWOY0RZr0Rrs0ns#O0R#O#P0s#P;'S0R;'S;=`1V<%lO0RP0sOcPP0vTOY0RYZ0RZ;'S0R;'S;=`1V<%lO0RP1YP;=`<%l0RT1`XOY,|YZ%lZr,|rs1{s#O,|#O#P2d#P;'S,|;'S;=`3S<%lO,|T2QUcPOY&ZYZ%lZr&Zs;'S&Z;'S;=`'`<%lO&ZT2gVOY-lYZ/dZr-lrs1]s;'S-l;'S;=`2|<%lO-lT3PP;=`<%l-lT3VP;=`<%l,|T3_VcPOY&ZYZ%lZr&Zrs3ts;'S&Z;'S;=`'`<%lO&ZT3yR&WSXY4SYZ4`pq4SP4VRXY4SYZ4`pq4SP4eO&XP_4lb&YS&PZOY%QYZ%lZr%Qrs%qst%Qtu4eu!Q%Q!Q![4e![!c%Q!c!}4e!}#R%Q#R#S4e#S#T%Q#T#o4e#o$g%Q$g;'S4e;'S;=`5t<%lO4e_5wP;=`<%l4eU6RX#hQ&YSOY%QYZ%lZr%Qrs%qs!_%Q!_!`6n!`;'S%Q;'S;=`&s<%lO%QU6uV#]Q&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QV7cZ&nR&YSOY%QYZ%lZr%Qrs%qsv%Qvw8Uw!_%Q!_!`6n!`;'S%Q;'S;=`&s<%lO%QU8]V#aQ&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QT8wZ&YSOY9jYZ%lZr9jrs:xsw9jwx%Qx#O9j#O#P<S#P;'S9j;'S;=`AT<%lO9jT9oX&YSOY%QYZ%lZr%Qrs%qsw%Qwx:[x;'S%Q;'S;=`&s<%lO%QT:cVbP&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QT:{XOY&ZYZ%lZr&Zrs&ysw&Zwx;hx;'S&Z;'S;=`'`<%lO&ZT;mVbPOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QT<XZ&YSOY<zYZ%lZr<zrs=rsw<zwx9jx#O<z#O#P9j#P;'S<z;'S;=`?^<%lO<zT=PZ&YSOY<zYZ%lZr<zrs=rsw<zwx:[x#O<z#O#P%Q#P;'S<z;'S;=`?^<%lO<zT=uZOY>hYZ%lZr>hrs?dsw>hwx;hx#O>h#O#P&Z#P;'S>h;'S;=`@}<%lO>hT>kZOY<zYZ%lZr<zrs=rsw<zwx:[x#O<z#O#P%Q#P;'S<z;'S;=`?^<%lO<zT?aP;=`<%l<zT?gZOY>hYZ%lZr>hrs@Ysw>hwx;hx#O>h#O#P&Z#P;'S>h;'S;=`@}<%lO>hP@]VOY@YZw@Ywx@rx#O@Y#P;'S@Y;'S;=`@w<%lO@YP@wObPP@zP;=`<%l@YTAQP;=`<%l>hTAWP;=`<%l9j_AbVZZ&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QVBOVYR&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QVBnX$ZP&YS#gQOY%QYZ%lZr%Qrs%qs!_%Q!_!`6n!`;'S%Q;'S;=`&s<%lO%QVCbZ#fR&YSOY%QYZ%lZr%Qrs%qs{%Q{|DT|!_%Q!_!`6n!`;'S%Q;'S;=`&s<%lO%QVD[V#rR&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QVDxVqR&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QVEf[#fR&YSOY%QYZ%lZr%Qrs%qs}%Q}!ODT!O!_%Q!_!`6n!`!aF[!a;'S%Q;'S;=`&s<%lO%QVFcV&xR&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%Q_GPZWY&YSOY%QYZ%lZr%Qrs%qs!O%Q!O!PGr!P!Q%Q!Q![IQ![;'S%Q;'S;=`&s<%lO%QVGwX&YSOY%QYZ%lZr%Qrs%qs!O%Q!O!PHd!P;'S%Q;'S;=`&s<%lO%QVHkV&qR&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QTIXc&YS`POY%QYZ%lZr%Qrs%qs!Q%Q!Q![IQ![!f%Q!f!gJd!g!hKQ!h!iJd!i#R%Q#R#SNz#S#W%Q#W#XJd#X#YKQ#Y#ZJd#Z;'S%Q;'S;=`&s<%lO%QTJkV&YS`POY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QTKV]&YSOY%QYZ%lZr%Qrs%qs{%Q{|LO|}%Q}!OLO!O!Q%Q!Q![Lp![;'S%Q;'S;=`&s<%lO%QTLTX&YSOY%QYZ%lZr%Qrs%qs!Q%Q!Q![Lp![;'S%Q;'S;=`&s<%lO%QTLwc&YS`POY%QYZ%lZr%Qrs%qs!Q%Q!Q![Lp![!f%Q!f!gJd!g!h%Q!h!iJd!i#R%Q#R#SNS#S#W%Q#W#XJd#X#Y%Q#Y#ZJd#Z;'S%Q;'S;=`&s<%lO%QTNXZ&YSOY%QYZ%lZr%Qrs%qs!Q%Q!Q![Lp![#R%Q#R#SNS#S;'S%Q;'S;=`&s<%lO%QT! PZ&YSOY%QYZ%lZr%Qrs%qs!Q%Q!Q![IQ![#R%Q#R#SNz#S;'S%Q;'S;=`&s<%lO%Q_! y]&YS#gQOY%QYZ%lZr%Qrs%qsz%Qz{!!r{!P%Q!P!Q!)e!Q!_%Q!_!`6n!`;'S%Q;'S;=`&s<%lO%Q_!!wX&YSOY!!rYZ!#dZr!!rrs!%Psz!!rz{!&_{;'S!!r;'S;=`!'s<%lO!!r_!#iT&YSOz!#xz{!$[{;'S!#x;'S;=`!$y<%lO!#xZ!#{TOz!#xz{!$[{;'S!#x;'S;=`!$y<%lO!#xZ!$_VOz!#xz{!$[{!P!#x!P!Q!$t!Q;'S!#x;'S;=`!$y<%lO!#xZ!$yOQZZ!$|P;=`<%l!#x_!%SXOY!%oYZ!#dZr!%ors!'ysz!%oz{!(i{;'S!%o;'S;=`!)_<%lO!%o_!%rXOY!!rYZ!#dZr!!rrs!%Psz!!rz{!&_{;'S!!r;'S;=`!'s<%lO!!r_!&dZ&YSOY!!rYZ!#dZr!!rrs!%Psz!!rz{!&_{!P!!r!P!Q!'V!Q;'S!!r;'S;=`!'s<%lO!!r_!'^V&YSQZOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%Q_!'vP;=`<%l!!r_!'|XOY!%oYZ!#dZr!%ors!#xsz!%oz{!(i{;'S!%o;'S;=`!)_<%lO!%o_!(lZOY!!rYZ!#dZr!!rrs!%Psz!!rz{!&_{!P!!r!P!Q!'V!Q;'S!!r;'S;=`!'s<%lO!!r_!)bP;=`<%l!%o_!)lV&YSPZOY!)eYZ%lZr!)ers!*Rs;'S!)e;'S;=`!+X<%lO!)e_!*WVPZOY!*mYZ%lZr!*mrs!+_s;'S!*m;'S;=`!,b<%lO!*m_!*rVPZOY!)eYZ%lZr!)ers!*Rs;'S!)e;'S;=`!+X<%lO!)e_!+[P;=`<%l!)e_!+dVPZOY!*mYZ%lZr!*mrs!+ys;'S!*m;'S;=`!,b<%lO!*mZ!,OSPZOY!+yZ;'S!+y;'S;=`!,[<%lO!+yZ!,_P;=`<%l!+y_!,eP;=`<%l!*mT!,ou&YS_POY%QYZ%lZr%Qrs%qs!O%Q!O!P!/S!P!Q%Q!Q![!0`![!d%Q!d!e!3j!e!f%Q!f!gJd!g!hKQ!h!iJd!i!n%Q!n!o!2U!o!q%Q!q!r!5h!r!z%Q!z!{!7`!{#R%Q#R#S!2r#S#U%Q#U#V!3j#V#W%Q#W#XJd#X#YKQ#Y#ZJd#Z#`%Q#`#a!2U#a#c%Q#c#d!5h#d#l%Q#l#m!7`#m;'S%Q;'S;=`&s<%lO%QT!/Za&YS`POY%QYZ%lZr%Qrs%qs!Q%Q!Q![IQ![!f%Q!f!gJd!g!hKQ!h!iJd!i#W%Q#W#XJd#X#YKQ#Y#ZJd#Z;'S%Q;'S;=`&s<%lO%QT!0gi&YS_POY%QYZ%lZr%Qrs%qs!O%Q!O!P!/S!P!Q%Q!Q![!0`![!f%Q!f!gJd!g!hKQ!h!iJd!i!n%Q!n!o!2U!o#R%Q#R#S!2r#S#W%Q#W#XJd#X#YKQ#Y#ZJd#Z#`%Q#`#a!2U#a;'S%Q;'S;=`&s<%lO%QT!2]V&YS_POY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QT!2wZ&YSOY%QYZ%lZr%Qrs%qs!Q%Q!Q![!0`![#R%Q#R#S!2r#S;'S%Q;'S;=`&s<%lO%QT!3oY&YSOY%QYZ%lZr%Qrs%qs!Q%Q!Q!R!4_!R!S!4_!S;'S%Q;'S;=`&s<%lO%QT!4f`&YS_POY%QYZ%lZr%Qrs%qs!Q%Q!Q!R!4_!R!S!4_!S!n%Q!n!o!2U!o#R%Q#R#S!3j#S#`%Q#`#a!2U#a;'S%Q;'S;=`&s<%lO%QT!5mX&YSOY%QYZ%lZr%Qrs%qs!Q%Q!Q!Y!6Y!Y;'S%Q;'S;=`&s<%lO%QT!6a_&YS_POY%QYZ%lZr%Qrs%qs!Q%Q!Q!Y!6Y!Y!n%Q!n!o!2U!o#R%Q#R#S!5h#S#`%Q#`#a!2U#a;'S%Q;'S;=`&s<%lO%QT!7e_&YSOY%QYZ%lZr%Qrs%qs!O%Q!O!P!8d!P!Q%Q!Q![!:r![!c%Q!c!i!:r!i#T%Q#T#Z!:r#Z;'S%Q;'S;=`&s<%lO%QT!8i]&YSOY%QYZ%lZr%Qrs%qs!Q%Q!Q![!9b![!c%Q!c!i!9b!i#T%Q#T#Z!9b#Z;'S%Q;'S;=`&s<%lO%QT!9gc&YSOY%QYZ%lZr%Qrs%qs!Q%Q!Q![!9b![!c%Q!c!i!9b!i!r%Q!r!sKQ!s#R%Q#R#S!8d#S#T%Q#T#Z!9b#Z#d%Q#d#eKQ#e;'S%Q;'S;=`&s<%lO%QT!:yi&YS_POY%QYZ%lZr%Qrs%qs!O%Q!O!P!<h!P!Q%Q!Q![!:r![!c%Q!c!i!:r!i!n%Q!n!o!2U!o!r%Q!r!sKQ!s#R%Q#R#S!=r#S#T%Q#T#Z!:r#Z#`%Q#`#a!2U#a#d%Q#d#eKQ#e;'S%Q;'S;=`&s<%lO%QT!<ma&YSOY%QYZ%lZr%Qrs%qs!Q%Q!Q![!9b![!c%Q!c!i!9b!i!r%Q!r!sKQ!s#T%Q#T#Z!9b#Z#d%Q#d#eKQ#e;'S%Q;'S;=`&s<%lO%QT!=w]&YSOY%QYZ%lZr%Qrs%qs!Q%Q!Q![!:r![!c%Q!c!i!:r!i#T%Q#T#Z!:r#Z;'S%Q;'S;=`&s<%lO%QV!>wX#pR&YSOY%QYZ%lZr%Qrs%qs![%Q![!]!?d!];'S%Q;'S;=`&s<%lO%QV!?kV&vR&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QV!@XV!PR&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%Q_!@uY&_Z&YSOY%QYZ%lZr%Qrs%qs!^%Q!^!_!Ae!_!`+p!`;'S%Q;'S;=`&s<%lO%QU!AlX#iQ&YSOY%QYZ%lZr%Qrs%qs!_%Q!_!`6n!`;'S%Q;'S;=`&s<%lO%QV!B`X!bR&YSOY%QYZ%lZr%Qrs%qs!_%Q!_!`+p!`;'S%Q;'S;=`&s<%lO%QV!CSY&^R&YSOY%QYZ%lZr%Qrs%qs!_%Q!_!`+p!`!a!Cr!a;'S%Q;'S;=`&s<%lO%QU!CyY#iQ&YSOY%QYZ%lZr%Qrs%qs!_%Q!_!`6n!`!a!Ae!a;'S%Q;'S;=`&s<%lO%Q_!DrV&bX#oQ&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%Q_!E`X%}Z&YSOY%QYZ%lZr%Qrs%qs#]%Q#]#^!E{#^;'S%Q;'S;=`&s<%lO%QV!FQX&YSOY%QYZ%lZr%Qrs%qs#b%Q#b#c!Fm#c;'S%Q;'S;=`&s<%lO%QV!FrX&YSOY%QYZ%lZr%Qrs%qs#h%Q#h#i!G_#i;'S%Q;'S;=`&s<%lO%QV!GdX&YSOY%QYZ%lZr%Qrs%qs#X%Q#X#Y!HP#Y;'S%Q;'S;=`&s<%lO%QV!HUX&YSOY%QYZ%lZr%Qrs%qs#f%Q#f#g!Hq#g;'S%Q;'S;=`&s<%lO%QV!HvX&YSOY%QYZ%lZr%Qrs%qs#Y%Q#Y#Z!Ic#Z;'S%Q;'S;=`&s<%lO%QV!IhX&YSOY%QYZ%lZr%Qrs%qs#T%Q#T#U!JT#U;'S%Q;'S;=`&s<%lO%QV!JYX&YSOY%QYZ%lZr%Qrs%qs#V%Q#V#W!Ju#W;'S%Q;'S;=`&s<%lO%QV!JzX&YSOY%QYZ%lZr%Qrs%qs#X%Q#X#Y!Kg#Y;'S%Q;'S;=`&s<%lO%QV!KnV&tR&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%Q_!L[b&RZ&YSOY%QYZ%lZr%Qrs%qst%Qtu!LTu!Q%Q!Q![!LT![!c%Q!c!}!LT!}#R%Q#R#S!LT#S#T%Q#T#o!LT#o$g%Q$g;'S!LT;'S;=`!Md<%lO!LT_!MgP;=`<%l!LT_!MqVuZ&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QV!N_VsR&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QU!N{X#eQ&YSOY%QYZ%lZr%Qrs%qs!_%Q!_!`6n!`;'S%Q;'S;=`&s<%lO%QV# oV}R&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%Q_#!_Z'OX#dQ&YSOY%QYZ%lZr%Qrs%qs!_%Q!_!`6n!`#p%Q#p#q##Q#q;'S%Q;'S;=`&s<%lO%QU##XV#bQ&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QV##uV|R&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%QT#$cV#uP&YSOY%QYZ%lZr%Qrs%qs;'S%Q;'S;=`&s<%lO%Q_#%Ru&YS%yZ&PZOX%QXY'fYZ)bZ^'f^p%Qpq'fqr%Qrs%qst%Qtu4eu!Q%Q!Q![4e![!c%Q!c!}4e!}#R%Q#R#S4e#S#T%Q#T#o4e#o#y%Q#y#z'f#z$f%Q$f$g'f$g#BY4e#BY#BZ#$x#BZ$IS4e$IS$I_#$x$I_$I|4e$I|$JO#$x$JO$JT4e$JT$JU#$x$JU$KV4e$KV$KW#$x$KW&FU4e&FU&FV#$x&FV;'S4e;'S;=`5t<%lO4e",tokenizers:[0,1,2,3],topRules:{Program:[0,3],ClassContent:[1,194]},dynamicPrecedences:{27:1,232:-1,243:-1},specialized:[{term:231,get:Q=>nO[Q]||-1}],tokenPrec:7144}),oO=N.define({name:"java",parser:QO.configure({props:[D.add({IfStatement:T({except:/^\s*({|else\b)/}),TryStatement:T({except:/^\s*({|catch|finally)\b/}),LabeledStatement:F,SwitchBlock:Q=>{let O=Q.textAfter,e=/^\s*\}/.test(O),t=/^\s*(case|default)\b/.test(O);return Q.baseIndent+(e?0:t?1:2)*Q.unit},Block:L({closing:"}"}),BlockComment:()=>null,Statement:T({except:/^{/})}),B.add({"Block SwitchBlock ClassBody ElementValueArrayInitializer ModuleBody EnumBody ConstructorBody InterfaceBody ArrayInitializer":H,BlockComment(Q){return{from:Q.from+2,to:Q.to-2}}})]}),languageData:{commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case |default:|\{|\})$/}});function lO(){return new j(oO)}const w=1e4;async function hO(Q){return new Promise(O=>{const e=new Worker(new URL("/assets/worker-BjsaW8rG.js",import.meta.url),{type:"module"}),t=setTimeout(()=>{e.terminate(),O({type:"error",message:`Execution timed out after ${w/1e3} seconds. Your code may contain an infinite loop.`})},w);e.onmessage=i=>{clearTimeout(t),e.terminate(),O(i.data)},e.onerror=i=>{clearTimeout(t),e.terminate(),O({type:"error",message:i.message||"An unknown error occurred in the Java worker."})},e.postMessage({type:"run",source:Q})})}const uO=[{title:"Variables & Types",slug:"variables-types",category:"Basics",language:"java",code:`public class Main {
  public static void main(String[] args) {
    int x = 42;
    double pi = 3.14;
    boolean flag = true;
    String name = "hello";
    System.out.println(x);
    System.out.println(name);
  }
}`},{title:"For Loop",slug:"for-loop",category:"Basics",language:"java",code:`public class Main {
  public static void main(String[] args) {
    int sum = 0;
    for (int i = 1; i <= 5; i++) {
      sum += i;
    }
    System.out.println("Sum: " + sum);
  }
}`},{title:"While Loop",slug:"while-loop",category:"Basics",language:"java",code:`public class Main {
  public static void main(String[] args) {
    int n = 1;
    while (n < 100) {
      n = n * 2;
    }
    System.out.println(n);
  }
}`},{title:"Conditionals",slug:"conditionals",category:"Basics",language:"java",code:`public class Main {
  public static void main(String[] args) {
    int age = 20;
    String category;
    if (age < 13) {
      category = "child";
    } else if (age < 18) {
      category = "teenager";
    } else {
      category = "adult";
    }
    System.out.println(category);
  }
}`},{title:"Do-While & Switch",slug:"do-while-switch",category:"Basics",language:"java",code:`public class Main {
  public static void main(String[] args) {
    int day = 3;
    String name;
    switch (day) {
      case 1: name = "Monday"; break;
      case 2: name = "Tuesday"; break;
      case 3: name = "Wednesday"; break;
      default: name = "Other"; break;
    }
    System.out.println(name);

    int count = 0;
    do {
      count++;
    } while (count < 3);
    System.out.println("Count: " + count);
  }
}`},{title:"Arrays",slug:"arrays",category:"Built-in Types",language:"java",code:`public class Main {
  public static void main(String[] args) {
    int[] nums = {10, 20, 30, 40, 50};
    int sum = 0;
    for (int i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    System.out.println("Sum: " + sum);
  }
}`},{title:"String Methods",slug:"string-methods",category:"Built-in Types",language:"java",code:`public class Main {
  public static void main(String[] args) {
    String text = "Hello, World!";
    int len = text.length();
    char first = text.charAt(0);
    String upper = text.toUpperCase();
    String sub = text.substring(0, 5);
    System.out.println(len);
    System.out.println(first);
    System.out.println(upper);
    System.out.println(sub);
  }
}`},{title:"2D Array",slug:"2d-array",category:"Built-in Types",language:"java",code:`public class Main {
  public static void main(String[] args) {
    int[][] grid = {{1, 2, 3}, {4, 5, 6}};
    int total = 0;
    for (int r = 0; r < grid.length; r++) {
      for (int c = 0; c < grid[r].length; c++) {
        total += grid[r][c];
      }
    }
    System.out.println("Total: " + total);
  }
}`},{title:"Static Methods",slug:"static-methods",category:"Methods",language:"java",code:`public class Main {
  public static int add(int a, int b) {
    int result = a + b;
    return result;
  }

  public static void main(String[] args) {
    int sum = add(3, 4);
    System.out.println("3 + 4 = " + sum);
  }
}`},{title:"Recursion (Factorial)",slug:"recursion-factorial",category:"Methods",language:"java",code:`public class Main {
  public static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  public static void main(String[] args) {
    int result = factorial(5);
    System.out.println("5! = " + result);
  }
}`},{title:"Classes & Objects",slug:"classes-objects",category:"OOP",language:"java",code:`public class Main {
  int age;
  String name;

  public Main(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public void printInfo() {
    System.out.println(this.name + " is " + this.age);
  }

  public static void main(String[] args) {
    Main m = new Main("Rex", 5);
    m.printInfo();
  }
}`},{title:"List",slug:"list",category:"Data Structures",language:"java",code:`public class Main {
  static class IntList {
    private int[] data;
    private int size;

    public IntList(int capacity) {
      data = new int[capacity];
      size = 0;
    }

    public void add(int value) {
      data[size] = value;
      size++;
    }

    public int get(int index) {
      return data[index];
    }

    public int size() {
      return size;
    }
  }

  public static void main(String[] args) {
    IntList list = new IntList(5);
    list.add(10);
    list.add(20);
    list.add(30);
    System.out.println(list.get(1));
    System.out.println(list.size());
  }
}`},{title:"Linked List",slug:"linked-list",category:"Data Structures",language:"java",code:`public class Main {
  static class Node {
    int value;
    Node next;

    public Node(int value) {
      this.value = value;
    }
  }

  static class LinkedList {
    private Node head;
    private Node tail;

    public void append(int value) {
      Node node = new Node(value);
      if (head == null) {
        head = node;
        tail = node;
      } else {
        tail.next = node;
        tail = node;
      }
    }

    public int sum() {
      int total = 0;
      Node current = head;
      while (current != null) {
        total += current.value;
        current = current.next;
      }
      return total;
    }
  }

  public static void main(String[] args) {
    LinkedList list = new LinkedList();
    list.append(10);
    list.append(20);
    list.append(30);
    System.out.println(list.sum());
  }
}`},{title:"Stack",slug:"stack",category:"Data Structures",language:"java",code:`public class Main {
  static class IntStack {
    private int[] data;
    private int top;

    public IntStack(int capacity) {
      data = new int[capacity];
      top = 0;
    }

    public void push(int value) {
      data[top] = value;
      top++;
    }

    public int pop() {
      top--;
      int value = data[top];
      data[top] = 0;
      return value;
    }
  }

  public static void main(String[] args) {
    IntStack stack = new IntStack(5);
    stack.push(10);
    stack.push(20);
    stack.push(30);
    System.out.println(stack.pop());
    System.out.println(stack.pop());
  }
}`},{title:"Queue",slug:"queue",category:"Data Structures",language:"java",code:`public class Main {
  static class IntQueue {
    private int[] data;
    private int head;
    private int tail;
    private int size;

    public IntQueue(int capacity) {
      data = new int[capacity];
      head = 0;
      tail = 0;
      size = 0;
    }

    public void enqueue(int value) {
      data[tail] = value;
      tail = (tail + 1) % data.length;
      size++;
    }

    public int dequeue() {
      int value = data[head];
      data[head] = 0;
      head = (head + 1) % data.length;
      size--;
      return value;
    }
  }

  public static void main(String[] args) {
    IntQueue queue = new IntQueue(5);
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    System.out.println(queue.dequeue());
    System.out.println(queue.dequeue());
  }
}`},{title:"Priority Queue",slug:"priority-queue",category:"Data Structures",language:"java",code:`public class Main {
  static class IntPriorityQueue {
    private int[] heap;
    private int size;

    public IntPriorityQueue(int capacity) {
      heap = new int[capacity];
      size = 0;
    }

    public void offer(int value) {
      heap[size] = value;
      siftUp(size);
      size++;
    }

    public int poll() {
      int answer = heap[0];
      size--;
      heap[0] = heap[size];
      heap[size] = 0;
      siftDown(0);
      return answer;
    }

    private void siftUp(int index) {
      while (index > 0) {
        int parent = (index - 1) / 2;
        if (heap[parent] >= heap[index]) return;
        swap(parent, index);
        index = parent;
      }
    }

    private void siftDown(int index) {
      while (index * 2 + 1 < size) {
        int left = index * 2 + 1;
        int right = left + 1;
        int best = left;
        if (right < size && heap[right] > heap[left]) {
          best = right;
        }
        if (heap[index] >= heap[best]) return;
        swap(index, best);
        index = best;
      }
    }

    private void swap(int i, int j) {
      int temp = heap[i];
      heap[i] = heap[j];
      heap[j] = temp;
    }
  }

  public static void main(String[] args) {
    IntPriorityQueue queue = new IntPriorityQueue(6);
    queue.offer(25);
    queue.offer(10);
    queue.offer(40);
    queue.offer(15);
    System.out.println(queue.poll());
    System.out.println(queue.poll());
  }
}`},{title:"Binary Search Tree",slug:"binary-search-tree",category:"Data Structures",language:"java",code:`public class Main {
  static class Node {
    int value;
    Node left;
    Node right;

    public Node(int value) {
      this.value = value;
    }
  }

  static class BinarySearchTree {
    private Node root;

    public void insert(int value) {
      root = insert(root, value);
    }

    private Node insert(Node node, int value) {
      if (node == null) {
        return new Node(value);
      }
      if (value < node.value) {
        node.left = insert(node.left, value);
      } else {
        node.right = insert(node.right, value);
      }
      return node;
    }

    public boolean contains(int value) {
      return contains(root, value);
    }

    private boolean contains(Node node, int value) {
      if (node == null) return false;
      if (value == node.value) return true;
      if (value < node.value) return contains(node.left, value);
      return contains(node.right, value);
    }
  }

  public static void main(String[] args) {
    BinarySearchTree tree = new BinarySearchTree();
    tree.insert(30);
    tree.insert(20);
    tree.insert(40);
    tree.insert(35);
    System.out.println(tree.contains(35));
    System.out.println(tree.contains(25));
  }
}`},{title:"Segment Tree",slug:"segment-tree",category:"Data Structures",language:"java",code:`public class Main {
  static class SegmentTree {
    private int[] tree;
    private int n;

    public SegmentTree(int[] arr) {
      n = arr.length;
      tree = new int[4 * n];
      build(arr, 1, 0, n - 1);
    }

    private void build(int[] arr, int node, int left, int right) {
      if (left == right) {
        tree[node] = arr[left];
        return;
      }

      int mid = left + (right - left) / 2;

      build(arr, node * 2, left, mid);
      build(arr, node * 2 + 1, mid + 1, right);

      tree[node] = Math.max(tree[node * 2], tree[node * 2 + 1]);
    }

    public int queryMax(int queryLeft, int queryRight) {
      return queryMax(1, 0, n - 1, queryLeft, queryRight);
    }

    private int queryMax(int node, int left, int right, int queryLeft, int queryRight) {
      if (queryLeft <= left && right <= queryRight) {
        return tree[node];
      }

      int mid = left + (right - left) / 2;
      int answer = Integer.MIN_VALUE;

      if (queryLeft <= mid) {
        answer = Math.max(
          answer,
          queryMax(node * 2, left, mid, queryLeft, queryRight)
        );
      }

      if (queryRight > mid) {
        answer = Math.max(
          answer,
          queryMax(node * 2 + 1, mid + 1, right, queryLeft, queryRight)
        );
      }

      return answer;
    }
  }

  public static void main(String[] args) {
    int[] arr = {20, 15, 17, 35, 25, 40};

    SegmentTree segmentTree = new SegmentTree(arr);

    System.out.println(segmentTree.queryMax(0, 5));
    System.out.println(segmentTree.queryMax(2, 4));
    System.out.println(segmentTree.queryMax(1, 2));
  }
}`}],$O=[{pattern:/\bRuntime\s*\.\s*getRuntime\b/,message:"This code accesses the Java Runtime"},{pattern:/\bProcessBuilder\b/,message:"This code uses ProcessBuilder"},{pattern:/\bSystem\s*\.\s*exit\b/,message:"This code calls System.exit()"},{pattern:/\bjava\s*\.\s*io\b/,message:"This code uses java.io"},{pattern:/\bjava\s*\.\s*net\b/,message:"This code uses java.net"},{pattern:/\bjava\s*\.\s*lang\s*\.\s*reflect\b/,message:"This code uses reflection"},{pattern:/\bClass\s*\.\s*forName\b/,message:"This code uses dynamic class loading"},{pattern:/\bThread\b/,message:"This code uses threading"},{pattern:/\bFileReader\b|\bFileWriter\b|\bBufferedReader\b/,message:"This code uses file I/O"},{pattern:/\bSocket\b|\bServerSocket\b/,message:"This code uses sockets"}];function PO(Q){const O=[];for(const{pattern:e,message:t}of $O)e.test(Q)&&O.push({level:"warning",message:t});return O}const dO={id:"java",displayName:"Java",editorExtension:()=>lO(),execute:hO,examples:uO,sandboxCode:`public class Main {
  public static void main(String[] args) {
    int x = 1;
    System.out.println(x);
  }
}`,analyzeCode:PO,heapTypeConfig:{array:{label:"Array",variant:"info"},object:{label:"Object",variant:"warning"},function:{label:"Method",variant:"dark"}}};export{dO as javaEngine};
