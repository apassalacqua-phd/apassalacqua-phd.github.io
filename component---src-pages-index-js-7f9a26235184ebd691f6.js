"use strict";(self.webpackChunkandrea_passalacqua=self.webpackChunkandrea_passalacqua||[]).push([[293],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),l=new RegExp(i.source+r.source,"gu"),s=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,o=!1,l=!1;for(let s=0;s<e.length;s++){const c=e[s];i&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),i=!1,l=o,o=!0,s++):o&&l&&a.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),l=o,o=!1,i=!0):(i=n(c)===c&&r(c)!==c,l=o,o=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,s.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return S},P:function(){return w},S:function(){return q},_:function(){return l},a:function(){return o},b:function(){return d},g:function(){return m},h:function(){return s}});var n=a(6540),r=(a(2729),a(5556)),i=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,i,l,s){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,u);return n.createElement(n.Fragment,null,n.createElement(p,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:s}=e,c=l(e,h);return n.createElement("img",o({},c,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:i}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=l(e,f);const s=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,o({},i,t,{sizes:s,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:s})})),c):c};var b;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=l(e,v);return t?n.createElement(E,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(b=E.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const S=function(e){return n.createElement(n.Fragment,null,n.createElement(E,o({},e)),n.createElement("noscript",null,n.createElement(E,o({},e,{shouldLoad:!0}))))};S.displayName="MainImage",S.propTypes=E.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],I=e=>e.replace(/\n/g,""),k=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},O={image:i().object.isRequired,alt:k},P=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],T=new Set;let R,L;const x=function(e){let{as:t="div",image:r,style:i,backgroundColor:d,className:m,class:u,onStartLoad:p,onLoad:g,onError:h}=e,f=l(e,P);const{width:y,height:E,layout:b}=r,v=c(y,E,b),{style:w,className:S}=v,N=l(v,A),C=(0,n.useRef)(),I=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(m=u);const k=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(b,y,E);return(0,n.useEffect)((()=>{R||(R=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(I);if(L&&T.has(I))return;let t,n;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(o({isLoading:!0,isLoaded:T.has(I),image:r},f)),T.has(I)||(t=requestAnimationFrame((()=>{C.current&&(n=l(C.current,I,T,i,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{T.has(I)&&L&&(C.current.innerHTML=L(o({isLoading:T.has(I),isLoaded:T.has(I),image:r},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,o({},N,{style:o({},w,i,{backgroundColor:d}),className:`${S}${m?` ${m}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},M=(0,n.memo)((function(e){return e.image?(0,n.createElement)(x,e):null}));M.propTypes=O,M.displayName="GatsbyImage";const j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function D(e){return function(t){let{src:a,__imageData:r,__error:i}=t,s=l(t,j);return i&&console.warn(i),r?n.createElement(e,o({image:r},s)):(console.warn("Image not loaded",a),null)}}const Y=D((function(e){let{as:t="div",className:a,class:r,style:i,image:s,loading:u="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:E}=e,b=l(e,N);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),h=o({objectFit:y,objectPosition:E,backgroundColor:f},h);const{width:v,height:k,layout:O,images:P,placeholder:A,backgroundColor:T}=s,R=c(v,k,O),{style:L,className:x}=R,M=l(R,C),j={fallback:void 0,sources:[]};return P.fallback&&(j.fallback=o({},P.fallback,{srcSet:P.fallback.srcSet?I(P.fallback.srcSet):void 0})),P.sources&&(j.sources=P.sources.map((e=>o({},e,{srcSet:I(e.srcSet)})))),n.createElement(t,o({},M,{style:o({},L,i,{backgroundColor:f}),className:`${x}${a?` ${a}`:""}`}),n.createElement(g,{layout:O,width:v,height:k},n.createElement(w,o({},m(A,!1,O,v,k,T,y,E))),n.createElement(S,o({"data-gatsby-image-ssr":"",className:p},b,d("eager"===u,!1,j,u,h)))))})),U=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},F=new Set(["fixed","fullWidth","constrained"]),H={src:i().string.isRequired,alt:k,width:U,height:U,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};Y.displayName="StaticImage",Y.propTypes=H;const q=D(M);q.displayName="StaticImage",q.propTypes=H},1394:function(e,t,a){a.d(t,{A:function(){return l}});var n=a(6540),r=a(4794),i=a(6462);var o=()=>{const e=(0,i.useLocation)(),t=e=>{const t=document.getElementById(e);if(t){const e=document.querySelector("header"),a=e?e.offsetHeight:0,n=t.getBoundingClientRect().top+window.pageYOffset-a;window.scrollTo({top:n,behavior:"smooth"})}},a=e=>{let{path:a,id:n,shouldRedirect:i}=e;i?((0,r.navigate)(a,{replace:!0}),setTimeout((()=>{t(n)}),300)):t(n)},o=[{name:"About",link:"/"},{name:"Work Experience",link:"work-experience"},{name:"Education",link:"education"},{name:"Research",link:"research"},{name:"Discussions",link:"discussions"},{name:"Teaching Material",link:"teaching-material"}];return n.createElement("div",{className:"Header-module--globalHeader--52253"},o.map(((t,i)=>n.createElement(n.Fragment,{key:t.name},n.createElement("span",{className:"header-link-home",onClick:()=>{"/"===t.link?(0,r.navigate)(t.link):"/"!==e.pathname?a({path:"/",id:t.link,shouldRedirect:!0}):a({path:"/",id:t.link,shouldRedirect:!1})}},String(t.name).toUpperCase()),i<o.length-1&&n.createElement("span",{style:{color:"var(--color-heading)"}},"|")))))};var l=e=>{let{location:t,children:a}=e;const r="/"===t.pathname;return n.createElement("div",{className:"global-wrapper","data-is-root-path":r},n.createElement(o,null),n.createElement("main",null,a))}},2166:function(e,t,a){var n=a(4794),r=a(6540),i=a(6462);t.A=e=>{var t,a,o,l,s;let{description:c,title:d,children:m,onlyDefaultTitle:u}=e;const{site:p}=(0,n.useStaticQuery)("3343187749"),g=c||p.siteMetadata.description,h=p.siteMetadata.image,f=null===(t=p.siteMetadata)||void 0===t?void 0:t.title,y=null===(a=p.siteMetadata)||void 0===a?void 0:a.siteUrl;let E=f?`${d} | ${f}`:d;u&&(E=f);const b=(0,i.useLocation)();return r.createElement(r.Fragment,null,r.createElement("title",null,E),r.createElement("link",{rel:"canonical",href:b.href}),r.createElement("meta",{name:"description",content:g}),r.createElement("meta",{name:"robots",content:"index, follow"}),r.createElement("meta",{name:"keywords",content:"Andrea Passalacqua",key:"og-keywords"}),r.createElement("meta",{property:"og:title",content:E}),r.createElement("meta",{property:"og:description",content:g}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",content:h}),r.createElement("meta",{property:"og:url",content:null!==(o=b.href)&&void 0!==o?o:y,key:"og-url"}),r.createElement("meta",{property:"og:logo",content:"/images/profile-pic-circle.png",key:"og-logo"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(l=p.siteMetadata)||void 0===l||null===(s=l.social)||void 0===s?void 0:s.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:d}),r.createElement("meta",{name:"twitter:description",content:g}),m)}},140:function(e,t,a){a.r(t),a.d(t,{Head:function(){return C},default:function(){return N}});var n=a(4506),r=a(6540),i=a(2532),o=a(8027),l=a(9879),s="SocialIcons-module--socialLinkContainer--17f6b";var c=()=>r.createElement("div",{className:"SocialIcons-module--socialIconsContainer--c8ca3"},r.createElement("a",{href:"https://www.linkedin.com/in/andrea-passalacqua-158b305b",target:"_blank",rel:"noopener noreferrer"},r.createElement("div",{className:s},r.createElement(o.QEs,{size:"30px"}))),r.createElement("a",{href:"https://twitter.com/passalacquaand?lang=en",target:"_blank",rel:"noopener noreferrer"},r.createElement("div",{className:s},r.createElement(o.feZ,{size:"30px"}))),r.createElement("a",{href:"mailto:andrea.passalacqua@outlook.com",itemProp:"url"},r.createElement("div",{className:s},r.createElement(l.mm2,{size:"30px"}))));var d=()=>r.createElement("div",{className:"Intro-module--introContainer--7ff3e"},r.createElement("div",{className:"Intro-module--mainImageContainer--89d05"},r.createElement(i.S,{className:"Intro-module--mainImage--b9af1",layout:"fullWidth",src:"../../images/andrea-teaching.jpg",alt:"Andrea Teaching",__imageData:a(7171)})),r.createElement("div",{className:"Intro-module--introDetailsContainer--18b08"},r.createElement("h1",{className:"Intro-module--nameTitle--610b7"},"Andrea Passalacqua"),r.createElement("h2",{className:"Intro-module--subTitle--12839"},"Financial Economist at JPMorgan Chase & Co."),r.createElement("h3",{className:"Intro-module--subSubTitle--74c10"},"Research Interest in Finance, Macroeconomics and Financial Intermediation"),r.createElement(c,null),r.createElement("div",{className:"Intro-module--aboutMeContainer--f6e75"},r.createElement("h5",null,"Personal Biography & Research Background"),r.createElement("p",null,"I am a financial economist with a strong background in applying economic and financial analysis to policy-related questions. I have held positions in both the government and the private sector and have extensive experience working with large financial datasets, sophisticated econometric models, simulations and forecasting."),r.createElement("p",null,"I currently serve as Vice President and Data Research Lead at JPMorgan Chase & Co. I also hold a position as an Adjunct Instructor at [John Hopkins University Carey Business School](https://carey.jhu.edu/faculty/andrea-passalacqua-phd) and I am a Visiting Research Fellow at the AI, Analytics, and the Future of Work Initiative within [Georgetown University McDonough School of Business](https://gufaculty360.georgetown.edu/s/contact/003UH00000FAg8cYAD/andrea-passalacqua)."),r.createElement("p",null,"Previously, I was an associate at Analysis Group, a leading financial consulting firm in the litigation industry. I began my career as a financial economist at the Board of Governors of the Federal Reserve System where I worked on issues related to the microeconomic and macroeconomic implications of banking regulations and supervision for the financial markets and the real economy."),r.createElement("p",null,"My research interests include financial intermediation, macroeconomics, household finance, corporate finance, venture capital, private equity, and entrepreneurship."),r.createElement("p",null,"I obtained a Ph.D. from Harvard University in Spring 2020 under the supervision of Jeremy Stein (chair), Josh Lerner, David Scharfstein, Marco Di Maggio, and Adi Sunderam. I received a BSc and MSc in Economics from Bocconi University.")),r.createElement("a",{className:"Intro-module--getMyResume--7e93a",href:"/Passalacqua_CV_Academic_September2024.docx",target:"_blank",rel:"noopener noreferrer"},r.createElement("h5",null,"DOWNLOAD RESUME")))),m=a(1394),u=a(4794),p=a(7613);var g=e=>{let{iconSrc:t,title:a}=e;const n=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(t.target.classList.add("SectionTitleAndIcon-module--animateBorder--a8390"),e.unobserve(t.target))}))}),{threshold:.5});return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}}),[]),r.createElement("div",{className:"SectionTitleAndIcon-module--titleAndIconContainer--5007c"},r.createElement("div",{ref:n,className:"SectionTitleAndIcon-module--logoContainer--13295"},r.createElement("img",{src:t,alt:a,className:"SectionTitleAndIcon-module--logoImage--e325b"})),r.createElement("h3",null,a))},h="PostsContainer-module--continueReading--b0588",f="PostsContainer-module--continueReadingIcon--a4e8b";var y=e=>{let{posts:t,iconSrc:a,title:n,id:i}=e;const o=e=>{switch(e){case"Publications":return"var(--color-publication)";case"Working Papers":return"var(--color-working-papers)";default:return"var(--color-work-in-progress)"}};return r.createElement("div",{id:i,className:"PostsContainer-module--postsContainer--80beb"},r.createElement(g,{iconSrc:a,title:n}),r.createElement("div",{className:"PostsContainer-module--postsListContainer--0f1d5"},t.map((e=>{var t,a;const n=e.frontmatter.title||e.fields.slug,i=null===(t=e.frontmatter.cover)||void 0===t?void 0:t.publicURL;return r.createElement("li",{key:e.fields.slug},r.createElement("article",{className:"PostsContainer-module--postListItem--38d65",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("div",{className:"PostsContainer-module--contentContainer--ff7cb"},i&&r.createElement("img",{src:i,alt:n,className:"PostsContainer-module--coverImage--bbd50"}),r.createElement("h4",null,r.createElement(u.Link,{to:e.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},n))),e.frontmatter.subCategory&&r.createElement("small",{style:{backgroundColor:o(null==e||null===(a=e.frontmatter)||void 0===a?void 0:a.subCategory)},className:"PostsContainer-module--subCategory--f88ec"},e.frontmatter.subCategory),r.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}),r.createElement(u.Link,{className:h,to:e.fields.slug,itemProp:"url"},r.createElement("span",null,"READ SUMMARY"),r.createElement(p.kVF,{className:f})),r.createElement(u.Link,{className:h,to:e.fields.slug,itemProp:"url"},r.createElement("span",null,"READ SUMMARY"),r.createElement(p.kVF,{className:f})))))}))))},E=a(2166),b="Timeline-module--timelineHeading--30302";var v=e=>{let{title:t,iconSrc:a,data:n,id:i}=e;return r.createElement("div",{id:i,className:"Timeline-module--container--9a1e5"},r.createElement(g,{iconSrc:a,title:t}),r.createElement("div",{className:"Timeline-module--timeline--dad01"},n.length>0&&n.map(((e,t)=>{var a;return r.createElement("div",{key:t,className:"Timeline-module--timelineItem--408f8"},r.createElement("div",{className:"Timeline-module--timelineDate--1d0b9"},e.startYear,e.isPresent?" - Present":e.endYear?` - ${e.endYear}`:""),r.createElement("div",{className:"Timeline-module--timelineContent--359a1"},r.createElement("div",{className:"Timeline-module--entityNameAndLocationContainerDesktop--66721"},r.createElement("h4",{className:b},e.entityName),r.createElement("h4",{className:b},r.createElement(l.Cud,{className:"Timeline-module--locationIcon--86b7d"}),e.location)),r.createElement("div",{className:"Timeline-module--entityNameAndLocationContainerMobile--eb6c2"},r.createElement("h4",{className:b},`${e.entityName} - ${e.location}`)),e.position&&r.createElement("h5",{style:{marginBottom:t+1===n.length?0:"45px"},className:"Timeline-module--timelinePosition--8858b"},e.position),(null==e||null===(a=e.data)||void 0===a?void 0:a.length)>0&&r.createElement("ul",null,e.data.map(((a,i)=>r.createElement("li",{style:{marginBottom:t+1===n.length?0:i+1<e.data.length?"0px":"47px"},key:i},a))))))}))))};var w=[{startYear:2013,endYear:2020,isPresent:!1,entityName:"HARVARD UNIVERSITY",location:"Cambridge, MA, USA",data:["Ph.D. and Master of Arts in Political Economy and Government (Econ track).","Advisors: Jeremy Stein (chair), Marco Di Maggio, Josh Lerner, David Scharfstein, and Adi Sunderam."]},{startYear:2009,endYear:2012,isPresent:!1,entityName:"BOCCONI UNIVERSITY",location:"Milan, Italy",data:["Master of Arts in Economics and Social Sciences (Summa Cum Laude)"]},{startYear:2005,endYear:2008,isPresent:!1,entityName:"BOCCONI UNIVERSITY",location:"Milan, Italy",data:["Bachelor of Arts in Economics and Social Sciences (Summa Cum Laude)","One semester Exchange Program at Helsinki School of Economics (HSE, Fall 2007) "]}];var S=[{startYear:2024,isPresent:!0,entityName:"JPMORGAN CHASE & CO.",location:"Washington, DC, US",data:["Vice President & Research Lead"]},{startYear:2024,isPresent:!0,entityName:"GEORGETOWN UNIVERSITY",location:"Washington, DC, US",data:["Visiting Research Fellow at the AI, Analytics, and the Future of Work Initiative"]},{startYear:2024,isPresent:!0,entityName:"JOHN HOPKINS CAREY BUSINESS SCHOOL",location:"Washington, DC, US",data:["Adjunct Lecturer"]},{startYear:2020,endYear:2024,isPresent:!1,entityName:"ANALYSIS GROUP",location:"Washington, DC, US",data:["Associate"]},{startYear:2020,endYear:2022,isPresent:!1,entityName:"BOARD OF THE GOVERNORS OF THE FEDERAL RESERVE SYSTEM",location:"Washington, DC, US",data:["Economist"]},{startYear:2019,endYear:2020,isPresent:!1,entityName:"BANK OF ITALY",location:"Cagliari, Italy",data:["Visiting Researcher"]},{startYear:2013,isPresent:!1,entityName:"THE UNIVERSITY OF CHICAGO, BOOTH SCHOOL OF BUSINESS",location:"Chicago, Illinois, US",data:["Visiting Scholar"]},{startYear:2012,endYear:2013,isPresent:!1,entityName:"UCLA Anderson School of Management",location:"Milan, Italy",data:["External Research Assistant"]},{startYear:2012,endYear:2013,isPresent:!1,entityName:"IGIER - Innocenzo Gasparini Institute for Economic Research",location:"Milan, Italy",data:["Research Assistant"]},{startYear:2012,isPresent:!1,entityName:"OECD, CENTER FOR ENTREPRENEURSHIP, SME, REGIONS, AND CITIES",location:"Trento, Italy",data:["Policy Intern"]}];var N=e=>{var t;let{data:a,location:i}=e;const o=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",l=a.allMarkdownRemark.nodes;if(0===l.length)return r.createElement(m.A,{location:i,title:o},r.createElement("p",null,"No blog posts found. Add markdown posts to the content directory."));const s=(0,n.A)(new Set(l.map((e=>e.frontmatter.category)))),c=["research","discussions","teaching-material"];return s.sort(((e,t)=>c.indexOf(e)-c.indexOf(t))),r.createElement(r.Fragment,null,r.createElement(m.A,{location:i,title:o},r.createElement(d,null),r.createElement("div",{className:"timelines-and-posts-container"},r.createElement(v,{id:"work-experience",title:"Work Experience",iconSrc:"/images/work-experience.svg",data:S}),r.createElement(v,{id:"education",title:"Education",iconSrc:"/images/education.svg",data:w}),s.map((e=>{return r.createElement(y,{id:e,key:e,posts:l.filter((t=>t.frontmatter.category===e)),iconSrc:`/images/${e}.svg`,title:(t=e,t.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "))});var t})))),r.createElement("footer",{className:"Layout-module--footer--daa62"},r.createElement("em",null,r.createElement("strong",null," Disclaimer: "),"The opinions expressed on this website are solely those of Andrea Passalacqua and do not necessarily reflect the views or opinions of his employer.")))};const C=()=>r.createElement(E.A,{onlyDefaultTitle:!0})},2225:function(e,t,a){a.d(t,{k5:function(){return p}});var n=a(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(r),o=["attr","size","title"];function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e){return e&&e.map(((e,t)=>n.createElement(e.tag,d({key:t},e.attr),u(e.child))))}function p(e){return t=>n.createElement(g,s({attr:d({},e.attr)},t),u(e.child))}function g(e){var t=t=>{var a,{attr:r,size:i,title:c}=e,m=l(e,o),u=i||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,m,{className:a,style:d(d({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(e=>t(e))):t(r)}},7171:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#98d8f8","images":{"fallback":{"src":"/static/aabf912412d79a7dabd30cc4de49cb17/bdc3f/andrea-teaching.jpg","srcSet":"/static/aabf912412d79a7dabd30cc4de49cb17/b7a4e/andrea-teaching.jpg 750w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/f0845/andrea-teaching.jpg 1080w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/04331/andrea-teaching.jpg 1366w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/bdc3f/andrea-teaching.jpg 1407w","sizes":"100vw"},"sources":[{"srcSet":"/static/aabf912412d79a7dabd30cc4de49cb17/593af/andrea-teaching.webp 750w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/c9339/andrea-teaching.webp 1080w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/7f6ff/andrea-teaching.webp 1366w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/efb87/andrea-teaching.webp 1407w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.9864960909737028}')}}]);
//# sourceMappingURL=component---src-pages-index-js-7f9a26235184ebd691f6.js.map