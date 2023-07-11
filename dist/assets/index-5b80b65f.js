import{r as n,R as N,u as h,j as e,F as b,a as i,t as E,S as R,e as p,b as g,c as v,s as _,d as f,f as $,g as j,h as M,i as B,L,k as C,B as y,l as k,m as F}from"./index-8e32cb88.js";const D=(t,r)=>{const[s,a]=n.useState(t);return n.useEffect(()=>{const c=setTimeout(()=>{a(t)},r);return()=>{clearTimeout(c)}},[t,r]),s},S=t=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",...t},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})),z=()=>{const[t,r]=N.useState(!1),s=h(a=>a.postSlice.posts.error);return n.useEffect(()=>{s&&r(!0)},[s]),e(b,{children:t?i(b,{children:[e("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none z-[1001]",children:e("div",{className:"relative w-auto my-6 mx-auto max-w-3xl",children:i("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[i("div",{className:"flex items-center justify-between pt-6 p-3 border-b border-solid border-slate-200 rounded-t relative",children:[e("h3",{className:"text-xl font-semibold text-red-400 mt-1",children:E("msg.errorOccured")}),e(S,{className:"absolute right-2 top-2 w-5 h-5 cursor-pointer hover:animate-pulse",onClick:()=>r(!1)})]}),i("div",{className:"relative p-6 flex-auto",children:[e(R,{className:"w-20 h-auto m-auto"}),e("p",{className:"my-4 text-lg leading-relaxed text-center",children:s==null?void 0:s.message})]})]})})}),e("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null})},A=t=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("g",{clipPath:"url(#clip0_28_487)"},n.createElement("path",{d:"M6.00001 12C5.53783 12.0003 5.09001 12.1606 4.73268 12.4538C4.37536 12.7469 4.1306 13.1548 4.04001 13.608L3.04001 18.608C2.98204 18.898 2.98912 19.1973 3.06075 19.4843C3.13237 19.7713 3.26676 20.0388 3.45423 20.2676C3.6417 20.4964 3.87758 20.6807 4.14487 20.8074C4.41217 20.934 4.70423 20.9998 5.00001 21H19C19.2958 20.9998 19.5879 20.934 19.8552 20.8074C20.1224 20.6807 20.3583 20.4964 20.5458 20.2676C20.7333 20.0388 20.8677 19.7713 20.9393 19.4843C21.0109 19.1973 21.018 18.898 20.96 18.608L19.96 13.608C19.8694 13.1548 19.6247 12.7469 19.2673 12.4538C18.91 12.1606 18.4622 12.0003 18 12",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M8.5 17H15.5",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M7.5 7.5C7.5 6.30653 7.97411 5.16193 8.81802 4.31802C9.66193 3.47411 10.8065 3 12 3C13.1935 3 14.3381 3.47411 15.182 4.31802C16.0259 5.16193 16.5 6.30653 16.5 7.5C16.5 9.487 14.26 11.607 12.94 12.684C12.6694 12.8893 12.3391 13.0004 11.9995 13.0004C11.6599 13.0004 11.3296 12.8893 11.059 12.684C9.739 11.605 7.5 9.485 7.5 7.5Z",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M12 7.25C11.9506 7.25 11.9022 7.26466 11.8611 7.29213C11.82 7.3196 11.788 7.35865 11.769 7.40433C11.7501 7.45001 11.7452 7.50028 11.7548 7.54877C11.7644 7.59727 11.7883 7.64181 11.8232 7.67678C11.8582 7.71174 11.9027 7.73555 11.9512 7.7452C11.9997 7.75484 12.05 7.74989 12.0957 7.73097C12.1414 7.71205 12.1804 7.68001 12.2079 7.63889C12.2353 7.59778 12.25 7.54945 12.25 7.5C12.2501 7.46705 12.2437 7.4344 12.2311 7.40394C12.2186 7.37348 12.2001 7.34583 12.1767 7.32257C12.1534 7.29932 12.1256 7.28093 12.0951 7.26847C12.0646 7.25601 12.032 7.24974 11.999 7.25",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_28_487"},n.createElement("rect",{width:24,height:24,fill:"white"})))),P=t=>{const r=p.errorStatuses.find(c=>c===Number(t)),s=p.infoStatuses.find(c=>c===Number(t)),a=p.successStatuses.find(c=>c===Number(t));return r?{bgColor:"bg-errorLight",textColor:"text-error"}:s?{bgColor:"bg-infoLight",textColor:"text-info"}:a?{bgColor:"bg-successLight",textColor:"text-success"}:{bgColor:"bg-infoLight",textColor:"text-info"}},I=({status:t})=>{const{t:r}=g(),{bgColor:s,textColor:a}=P(t);return i("div",{className:`flex gap-1 align-middle justify-center p-2 ${s} ${a} rounded-lg cursor-pointer text-center`,children:[r(`lbl.${p.postStatus[t]}`),e(v,{className:`w-4 h-4 my-auto ${a} dark:text-inherit`})]})},w=t=>t.postSlice.posts.data,W=t=>{const r=_(t),s=w(t);return r?s==null?void 0:s.filter(a=>a.post_status===r):s},H=t=>n.createElement("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})),O=()=>{const[t,r]=n.useState(""),s=D(t,500),a=f(),{t:c}=g(),l=d=>{r(d.target.value)};return n.useEffect(()=>{a($(s))},[s]),i("div",{className:"relative",children:[e("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e(H,{})}),e("input",{value:t,type:"text",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:c("lbl.searchInTable"),onChange:l}),e("button",{onClick:()=>r(""),className:"hover:text-black dark:hover:text-white absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",children:e(S,{className:"w-6 h-6"})})]})},x=[50,100,200],V=()=>{const[t,r]=n.useState(!1),s=h(w),[a,c]=n.useState((s==null?void 0:s.length)||100),{t:l}=g(),d=u=>{c(u),j({offset:1,limit:u})};return i("div",{className:"relative w-fit flex items-center gap-2 z-10",children:[i("p",{children:[l("lbl.list"),":"]}),i("button",{onClick:()=>r(!t),type:"button",className:`relative flex items-center w-full p-2 transition duration-75 bg-bgGray dark:bg-gray-700 dark:text-white ${t?"rounded-t-2xl":"rounded-2xl"}`,children:[e("span",{className:"flex-1 ml-3 text-left whitespace-nowrap",children:a}),e(v,{className:"w-6 h-6"}),e("ul",{className:`${t?"flex":"hidden"} overflow-hidden top-full absolute left-0 w-full bg-gray-100  dark:bg-gray-700 rounded-b-2xl flex-col`,children:x==null?void 0:x.map(u=>e("li",{className:"hover:bg-gray-200 pl-5 py-1 dark:hover:bg-gray-600 transition duration-200 text-left",onClick:()=>d(u),children:u},u))})]})]})},G=N.memo(V),Q=()=>i("div",{className:"my-4 flex gap-2 justify-between items-center",children:[e(G,{}),e(O,{})]}),U=()=>{const{loading:t}=h(o=>o.postSlice.posts),r=h(W),s=f(),a=h(M),c=h(B),{t:l}=g(),d=o=>{s(C(c.includes(o)?c.filter(m=>m!==o):[...c,o]))},u=()=>{var o;s(C(c.length===(r==null?void 0:r.length)?[]:(o=r==null?void 0:r.map(m=>m.number))!=null?o:[]))},T=r==null?void 0:r.map(o=>{const m=c.includes(o.number);return i("tr",{className:" even:bg-gray-50 dark:even:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600",children:[e("td",{className:"w-4 p-3",children:e("input",{onChange:()=>d(o.number),type:"checkbox",className:"checkbox-primary",checked:m})}),e("td",{scope:"row",className:"p-3 font-medium text-primaryBlue dark:text-darkPrimaryBlue whitespace-nowrap",children:o.number}),e("td",{className:"p-3",children:e(A,{className:"m-auto"})}),e("td",{className:`p-3 ${a&&o.sender_name.toLocaleLowerCase().includes(a.toLocaleLowerCase())?"highlighted":""}`,children:o.sender_name}),e("td",{className:`p-3 ${a&&o.recipient_name.toLocaleLowerCase().includes(a.toLocaleLowerCase())?"highlighted":""}`,children:o.recipient_name}),e("td",{className:"p-3 text-center",children:o.post_desi}),e("td",{className:"p-3",children:l(`lbl.${p.postType[o.post_type]}`)}),e("td",{className:"p-3",children:e(I,{status:o.post_status})}),e("td",{className:"p-3",children:o.created_at})]},o.number)});return i("div",{className:"relative h-full ",children:[e(Q,{}),t?e(L,{}):e("div",{className:"h-2/3 relative overflow-x-auto custom-scrollbar",children:i("table",{className:"w-full text-sm text-left text-gray-900 font-semibold dark:text-white",children:[e("thead",{className:"text-xs uppercase bg-gray-50 dark:bg-gray-700 text-primaryGrayText dark:text-white",children:i("tr",{children:[e("th",{className:"w-4 p-3",children:e("div",{className:"flex items-center",children:e("input",{onChange:()=>u(),type:"checkbox",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"})})}),e("th",{className:"px-4 py-3 text-center",children:l("lbl.orderNumber").toLocaleUpperCase("tr-TR")}),e("th",{className:"px-4 py-3 text-center",children:l("lbl.tracking").toLocaleLowerCase("tr-TR")}),e("th",{className:"px-4 py-3 text-center",children:l("lbl.sender").toLocaleLowerCase("tr-TR")}),e("th",{className:"px-4 py-3 text-center",children:l("lbl.receiver").toLocaleLowerCase("tr-TR")}),e("th",{className:"px-4 py-3 text-center",children:l("lbl.desi").toLocaleLowerCase("tr-TR")}),e("th",{className:"px-4 py-3 text-center",children:l("lbl.type").toLocaleLowerCase("tr-TR")}),e("th",{className:"px-4 py-3 text-center",children:l("lbl.sendStatus").toLocaleLowerCase("tr-TR")}),e("th",{className:"px-4 py-3 text-center",children:l("lbl.sendDate").toLocaleLowerCase("tr-TR")})]})}),e("tbody",{children:T})]})})]})},Z=()=>{const t=h(w),r=h(l=>l.common.selectedFilter),s=f(),a=Object.keys(p.postStatus).map(l=>({length:t==null?void 0:t.filter(d=>d.post_status===l).length,id:p.postStatus[l],key:l})),{loading:c}=h(l=>l.postSlice.posts);return e("div",{className:"overflow-x-auto max-w-full mb-16 custom-scrollbar",children:c?e(L,{}):i("div",{className:"flex gap-2 items-center py-4",children:[e(y,{onClick:()=>s(k(void 0)),customStyles:`${r?"btn-gray":"btn-primary"} min-w-fit text-xs`,id:"all",children:e("p",{children:`(${t==null?void 0:t.length})`})}),a.map(l=>{var d;return e(y,{onClick:()=>s(k(l.key)),customStyles:`${l.key===r?"btn-primary":"btn-gray"} min-w-fit text-xs`,id:l.id,children:e("span",{children:`(${(d=l.length)!=null?d:""})`})},l.id)})]})})},J=()=>{const{t}=g();return e(F,{children:i(b,{children:[e("h1",{className:"my-2 text-2xl text-primaryBlackText dark:text-white",children:t("lbl.posts")}),e(Z,{}),e(U,{}),e(z,{})]})})};export{J as default};
