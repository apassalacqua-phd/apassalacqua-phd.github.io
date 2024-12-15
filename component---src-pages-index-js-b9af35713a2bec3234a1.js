"use strict";(self.webpackChunkandrea_passalacqua=self.webpackChunkandrea_passalacqua||[]).push([[293],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),l=new RegExp(o.source+r.source,"gu"),s=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,n,r)=>{let o=!1,i=!1,l=!1;for(let s=0;s<e.length;s++){const c=e[s];o&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),o=!1,l=i,i=!0,s++):i&&l&&a.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),l=i,i=!1,o=!0):(o=n(c)===c&&r(c)!==c,l=i,i=r(c)===c&&n(c)!==c)}return e})(e,o,c)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,o):o(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,s.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return N},P:function(){return w},S:function(){return B},_:function(){return l},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return s}});a(6910);var n=a(6540),r=(a(2729),a(5556)),o=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(a=o[n])>=0||(r[a]=e[a]);return r}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,o,l,s){const c={};o&&(c.backgroundColor=o,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=o,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,m);return n.createElement(n.Fragment,null,n.createElement(p,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:r,alt:o="",shouldLoad:s}=e,c=l(e,f);return n.createElement("img",i({},c,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:o}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,o=l(e,h);const s=o.sizes||(null==t?void 0:t.sizes),c=n.createElement(v,i({},o,t,{sizes:s,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:o}=e;return n.createElement("source",{key:t+"-"+o+"-"+a,type:o,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:s})})),c):c};var y;v.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const b=["fallback"],w=function(e){let{fallback:t}=e,a=l(e,b);return t?n.createElement(E,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(y=E.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return n.createElement(n.Fragment,null,n.createElement(E,i({},e)),n.createElement("noscript",null,n.createElement(E,i({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=E.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],k=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:o().object.isRequired,alt:I},A=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],P=["style","className"],T=new Set;let R,x;const L=function(e){let{as:t="div",image:r,style:o,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=l(e,A);const{width:v,height:E,layout:y}=r,b=c(v,E,y),{style:w,className:N}=b,S=l(b,P),C=(0,n.useRef)(),k=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(u=m);const I=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(y,v,E);return(0,n.useEffect)((()=>{R||(R=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(k);if(x&&T.has(k))return;let t,n;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(i({isLoading:!0,isLoaded:T.has(k),image:r},h)),T.has(k)||(t=requestAnimationFrame((()=>{C.current&&(n=l(C.current,k,T,o,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{T.has(k)&&x&&(C.current.innerHTML=x(i({isLoading:T.has(k),isLoaded:T.has(k),image:r},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},S,{style:i({},w,o,{backgroundColor:d}),className:N+(u?" "+u:""),ref:C,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},M=(0,n.memo)((function(e){return e.image?(0,n.createElement)(L,e):null}));M.propTypes=O,M.displayName="GatsbyImage";const j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function D(e){return function(t){let{src:a,__imageData:r,__error:o}=t,s=l(t,j);return o&&console.warn(o),r?n.createElement(e,i({image:r},s)):(console.warn("Image not loaded",a),null)}}const H=D((function(e){let{as:t="div",className:a,class:r,style:o,image:s,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:v,objectPosition:E}=e,y=l(e,S);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),f=i({objectFit:v,objectPosition:E,backgroundColor:h},f);const{width:b,height:I,layout:O,images:A,placeholder:P,backgroundColor:T}=s,R=c(b,I,O),{style:x,className:L}=R,M=l(R,C),j={fallback:void 0,sources:[]};return A.fallback&&(j.fallback=i({},A.fallback,{srcSet:A.fallback.srcSet?k(A.fallback.srcSet):void 0})),A.sources&&(j.sources=A.sources.map((e=>i({},e,{srcSet:k(e.srcSet)})))),n.createElement(t,i({},M,{style:i({},x,o,{backgroundColor:h}),className:L+(a?" "+a:"")}),n.createElement(g,{layout:O,width:b,height:I},n.createElement(w,i({},u(P,!1,O,b,I,T,v,E))),n.createElement(N,i({"data-gatsby-image-ssr":"",className:p},y,d("eager"===m,!1,j,m,f)))))})),U=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},Y=new Set(["fixed","fullWidth","constrained"]),F={src:o().string.isRequired,alt:I,width:U,height:U,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!Y.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};H.displayName="StaticImage",H.propTypes=F;const B=D(M);B.displayName="StaticImage",B.propTypes=F},1394:function(e,t,a){a.d(t,{A:function(){return l}});var n=a(6540),r=a(8693),o=a(6462);var i=()=>{const e=(0,o.useLocation)(),t=e=>{const t=document.getElementById(e);if(t){const e=document.querySelector("header"),a=e?e.offsetHeight:0,n=t.getBoundingClientRect().top+window.pageYOffset-a;window.scrollTo({top:n,behavior:"smooth"})}},a=e=>{let{path:a,id:n,shouldRedirect:o}=e;o?((0,r.navigate)(a,{replace:!0}),setTimeout((()=>{t(n)}),300)):t(n)},i=[{name:"About",link:"/"},{name:"Work Experience",link:"work-experience"},{name:"Education",link:"education"},{name:"Research",link:"research"},{name:"Discussions",link:"discussions"},{name:"Teaching Material",link:"teaching-material"}];return n.createElement("div",{className:"Header-module--globalHeader--52253"},i.map(((t,o)=>n.createElement(n.Fragment,{key:t.name},n.createElement("span",{className:"header-link-home",onClick:()=>{"/"===t.link?(0,r.navigate)(t.link):"/"!==e.pathname?a({path:"/",id:t.link,shouldRedirect:!0}):a({path:"/",id:t.link,shouldRedirect:!1})}},String(t.name).toUpperCase()),o<i.length-1&&n.createElement("span",{style:{color:"var(--color-heading)"}},"|")))))};var l=e=>{let{location:t,children:a}=e;const r="/"===t.pathname;return n.createElement("div",{className:"global-wrapper","data-is-root-path":r},n.createElement(i,null),n.createElement("main",null,a))}},2166:function(e,t,a){var n=a(8693),r=a(6540),o=a(6462);t.A=e=>{var t,a,i,l,s;let{description:c,title:d,children:u,onlyDefaultTitle:m}=e;const{site:p}=(0,n.useStaticQuery)("3343187749"),g=c||p.siteMetadata.description,f=p.siteMetadata.image,h=null===(t=p.siteMetadata)||void 0===t?void 0:t.title,v=null===(a=p.siteMetadata)||void 0===a?void 0:a.siteUrl;let E=h?d+" | "+h:d;m&&(E=h);const y=(0,o.useLocation)();return r.createElement(r.Fragment,null,r.createElement("title",null,E),r.createElement("link",{rel:"canonical",href:y.href}),r.createElement("meta",{name:"description",content:g}),r.createElement("meta",{name:"robots",content:"index, follow"}),r.createElement("meta",{name:"keywords",content:"Andrea Passalacqua",key:"og-keywords"}),r.createElement("meta",{property:"og:title",content:E}),r.createElement("meta",{property:"og:description",content:g}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",content:f}),r.createElement("meta",{property:"og:url",content:null!==(i=y.href)&&void 0!==i?i:v,key:"og-url"}),r.createElement("meta",{property:"og:logo",content:"/images/profile-pic-circle.png",key:"og-logo"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(l=p.siteMetadata)||void 0===l||null===(s=l.social)||void 0===s?void 0:s.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:d}),r.createElement("meta",{name:"twitter:description",content:g}),u)}},113:function(e,t,a){a.r(t),a.d(t,{Head:function(){return H},default:function(){return D}});var n={};a.r(n),a.d(n,{_G:function(){return S},W7:function(){return C},NR:function(){return k},IO:function(){return I},zc:function(){return O},ar:function(){return A},CI:function(){return P},ZI:function(){return T},Dj:function(){return R}});var r=a(4506),o=(a(6910),a(6540)),i=a(2532),l=a(8027),s=a(9879),c="SocialIcons-module--socialLinkContainer--17f6b";var d=()=>o.createElement("div",{className:"SocialIcons-module--socialIconsContainer--c8ca3"},o.createElement("a",{href:"https://www.linkedin.com/in/andrea-passalacqua-158b305b",target:"_blank",rel:"noopener noreferrer"},o.createElement("div",{className:c},o.createElement(l.QEs,{size:"30px"}))),o.createElement("a",{href:"https://twitter.com/passalacquaand?lang=en",target:"_blank",rel:"noopener noreferrer"},o.createElement("div",{className:c},o.createElement(l.feZ,{size:"30px"}))),o.createElement("a",{href:"mailto:andrea.passalacqua@outlook.com",itemProp:"url"},o.createElement("div",{className:c},o.createElement(s.mm2,{size:"30px"}))));var u=()=>o.createElement("div",{className:"Intro-module--introContainer--7ff3e"},o.createElement("div",{className:"Intro-module--mainImageContainer--89d05"},o.createElement(i.S,{className:"Intro-module--mainImage--b9af1",layout:"fullWidth",src:"../../images/andrea-teaching.jpg",alt:"Andrea Teaching",__imageData:a(7171)})),o.createElement("div",{className:"Intro-module--introDetailsContainer--18b08"},o.createElement("h1",{className:"Intro-module--nameTitle--610b7"},"Andrea Passalacqua"),o.createElement("h2",{className:"Intro-module--subTitle--12839"},"Financial Economist at JPMorgan Chase & Co."),o.createElement("h3",{className:"Intro-module--subSubTitle--74c10"},"Research Interest in Finance, Macroeconomics and Financial Intermediation"),o.createElement(d,null),o.createElement("div",{className:"Intro-module--aboutMeContainer--f6e75"},o.createElement("h5",null,"Personal Biography & Research Background"),o.createElement("p",null,"I am a financial economist with a strong background in applying economic and financial analysis to answer policy-related questions. I have held positions in both the government and the private sector and have extensive experience working with large financial datasets, sophisticated econometric models, simulations and forecasting."),o.createElement("p",null,"I currently serve as ",o.createElement("b",null,"Vice President and Research Lead")," at ",o.createElement("b",null,"JPMorgan Chase & Co"),". I also hold a position as an ",o.createElement("b",null,"Adjunct Instructor")," at"," ",o.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://carey.jhu.edu/faculty/andrea-passalacqua-phd"},"John Hopkins University Carey Business School")," ","and I am a ",o.createElement("b",null,"Visiting Research Fellow")," at the"," ",o.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://futureofwork.georgetown.edu/faculty-research/"},"AI, Analytics, and the Future of Work Initiative")," ","within "," ",o.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://gufaculty360.georgetown.edu/s/contact/003UH00000FAg8cYAD/andrea-passalacqua"},"Georgetown University McDonough School of Business"),"."),o.createElement("p",null,"Previously, I was an associate at Analysis Group, a leading financial consulting firm in the litigation industry. I began my career as a financial economist at the Board of Governors of the Federal Reserve System where I worked on issues related to the microeconomic and macroeconomic implications of banking regulations and supervision for the financial markets and the real economy."),o.createElement("p",null,"My research interests include financial intermediation, macroeconomics, household finance, corporate finance, venture capital, private equity, and entrepreneurship."),o.createElement("p",null,"I obtained a Ph.D. and a M.A. from"," ",o.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://scholar.harvard.edu/apassalacqua/home"},"Harvard University")," ","in Spring 2020 under the supervision of Jeremy Stein (chair), Josh Lerner, David Scharfstein, Marco Di Maggio, and Adi Sunderam. I received a BSc and MSc in Economics from Bocconi University.")),o.createElement("a",{className:"Intro-module--getMyResume--7e93a",href:"/Passalacqua_CV_Academic_September2024.docx",target:"_blank",rel:"noopener noreferrer"},o.createElement("h5",null,"DOWNLOAD RESUME")))),m=a(1394),p=a(8693),g=a(7613),f=a(6512);var h=e=>{let{title:t,content:a,onCloseHandler:n}=e;return o.createElement("div",{onClick:n,className:"Modal-module--popupOverlay--951a0"},o.createElement("div",{onClick:e=>e.stopPropagation(),className:"Modal-module--popupContainer--ea341"},o.createElement("div",null,o.createElement("div",{className:"Modal-module--popupHeader--b83d2"},o.createElement("p",{className:"Modal-module--popupTitle--19a43"},t),o.createElement(f.oxH,{onClick:n,style:{fontSize:"28px",cursor:"pointer"}})),o.createElement("div",{className:"Modal-module--horizontalDivider--ed639"})),o.createElement("span",{className:"Modal-module--popupContentHeading--1d494"},"ABSTRACT"),o.createElement("p",{className:"Modal-module--popupContent--78089"},a)))};var v=e=>{let{iconSrc:t,title:a}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(t.target.classList.add("SectionTitleAndIcon-module--animateBorder--a8390"),e.unobserve(t.target))}))}),{threshold:.5});return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}}),[]),o.createElement("div",{className:"SectionTitleAndIcon-module--titleAndIconContainer--5007c"},o.createElement("div",{ref:n,className:"SectionTitleAndIcon-module--logoContainer--13295"},o.createElement("img",{src:t,alt:a,className:"SectionTitleAndIcon-module--logoImage--e325b"})),o.createElement("h3",null,a))},E="PostsContainer-module--actionButton--bd325",y="PostsContainer-module--actionButtonIcon--f887d",b="PostsContainer-module--coverImage--bbd50";var w=e=>{let{posts:t,iconSrc:a,title:n,id:r}=e;const{0:i,1:l}=(0,o.useState)(!1),{0:s,1:c}=(0,o.useState)(""),{0:d,1:u}=(0,o.useState)(""),m=e=>{switch(e){case"Publications":return"var(--color-publication)";case"Working Papers":return"var(--color-working-papers)";default:return"var(--color-work-in-progress)"}},f=t.sort(((e,t)=>{const a=e.frontmatter.sortOrder?parseInt(e.frontmatter.sortOrder):null,n=t.frontmatter.sortOrder?parseInt(t.frontmatter.sortOrder):null;return null!==a&&null!==n?a-n:null!==a?-1:null!==n?1:e.frontmatter.title.localeCompare(t.frontmatter.title)})),w=f.some((e=>null!==e.frontmatter.cover)),N=(0,o.useRef)([]);return(0,o.useEffect)((()=>{const e=()=>{let e=0;N.current.forEach((t=>{if(t){const a=t.offsetHeight;a>e&&(e=a)}})),N.current.forEach((t=>{t&&(t.style.height=e+"px")}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[t]),o.createElement(o.Fragment,null,o.createElement("div",{id:r},o.createElement(v,{iconSrc:a,title:n}),o.createElement("div",{className:"PostsContainer-module--postsListContainer--0f1d5"},f.map(((e,t)=>{var a,n,r,i,s,d,f,h,v;const S=e.frontmatter.title||e.fields.slug,C=null===(a=e.frontmatter.cover)||void 0===a?void 0:a.publicURL;return o.createElement("li",{key:e.fields.slug},o.createElement("article",{className:"PostsContainer-module--postListItem--38d65",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("div",{className:"PostsContainer-module--contentContainer--ff7cb"},w?o.createElement(p.Link,{to:e.fields.slug,itemProp:"url"},o.createElement("div",null,C&&o.createElement("img",{src:C,alt:S,className:b}))):C&&o.createElement("div",{style:{backgroundColor:C&&"white"},className:"PostsContainer-module--coverImageContainer--81eb4"},o.createElement("img",{src:C,alt:S,className:b})),o.createElement("h4",{ref:e=>N.current[t]=e},o.createElement(p.Link,{to:e.fields.slug,itemProp:"url"},o.createElement("span",{itemProp:"headline"},S))),e.frontmatter.subCategory&&o.createElement("small",{style:{backgroundColor:m(null==e||null===(n=e.frontmatter)||void 0===n?void 0:n.subCategory)},className:"PostsContainer-module--subCategory--f88ec"},e.frontmatter.subCategory),o.createElement("p",{className:"PostsContainer-module--description--2425a",dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}),o.createElement("div",{className:"PostsContainer-module--buttonsContainer--6d719"},(null===(r=e.frontmatter)||void 0===r?void 0:r.secondaryButtonTitle)&&(null===(i=e.frontmatter)||void 0===i?void 0:i.secondaryButtonLink)&&o.createElement("a",{className:E,href:null===(s=e.frontmatter)||void 0===s?void 0:s.secondaryButtonLink,target:"_blank",rel:"noopener noreferrer"},o.createElement("span",null,String(e.frontmatter.secondaryButtonTitle).toUpperCase()),o.createElement(g.kVF,{className:y})),(null===(d=e.frontmatter)||void 0===d?void 0:d.tertiaryButtonTitle)&&(null===(f=e.frontmatter)||void 0===f?void 0:f.tertiaryButtonContent)&&o.createElement("div",{onClick:()=>{var t;c(S),u(null===(t=e.frontmatter)||void 0===t?void 0:t.tertiaryButtonContent),l(!0)},className:E},o.createElement("span",null,String(e.frontmatter.tertiaryButtonTitle).toUpperCase()),o.createElement(g.kVF,{className:y})),o.createElement(p.Link,{className:E,to:e.fields.slug,itemProp:"url"},o.createElement("span",null,String(null!==(h=null==e||null===(v=e.frontmatter)||void 0===v?void 0:v.primaryButtonTitle)&&void 0!==h?h:"READ SUMMARY").toUpperCase()),o.createElement(g.kVF,{className:y}))))))})))),i&&o.createElement(h,{onCloseHandler:()=>l(!1),title:s,content:d}))},N=a(2166),S="Timeline-module--entityNameAndLocationContainerDesktop--66721",C="Timeline-module--entityNameAndLocationContainerMobile--eb6c2",k="Timeline-module--locationIcon--86b7d",I="Timeline-module--timeline--dad01",O="Timeline-module--timelineContent--359a1",A="Timeline-module--timelineDate--1d0b9",P="Timeline-module--timelineHeading--30302",T="Timeline-module--timelineItem--408f8",R="Timeline-module--timelinePosition--8858b";var x=e=>{let{title:t,iconSrc:a,data:r,id:i}=e;return o.createElement("div",{id:i,className:n.container},o.createElement(v,{iconSrc:a,title:t}),o.createElement("div",{className:I},r.length>0&&r.map(((e,t)=>{var a;return o.createElement("div",{key:t,className:T},o.createElement("div",{className:A},e.startYear,e.isPresent?" - Present":e.endYear?" - "+e.endYear:""),o.createElement("div",{className:O},o.createElement("div",{className:S},o.createElement("h4",{className:P},e.entityName),o.createElement("h4",{className:P},o.createElement(s.Cud,{className:k}),e.location)),o.createElement("div",{className:C},o.createElement("h4",{className:P},e.entityName+" - "+e.location)),e.position&&o.createElement("h5",{style:{marginBottom:t+1===r.length?0:"45px"},className:R},e.position),(null==e||null===(a=e.data)||void 0===a?void 0:a.length)>0&&o.createElement("ul",null,e.data.map(((a,n)=>o.createElement("li",{style:{marginBottom:t+1===r.length?0:n+1<e.data.length?"0px":"47px"},key:n},a))))))}))))};var L=[{startYear:2013,endYear:2020,isPresent:!1,entityName:"HARVARD UNIVERSITY",location:"Cambridge, MA, USA",data:["Ph.D. and Master of Arts in Political Economy and Government (Econ track).","Advisors: Jeremy Stein (chair), Marco Di Maggio, Josh Lerner, David Scharfstein, and Adi Sunderam."]},{startYear:2009,endYear:2012,isPresent:!1,entityName:"BOCCONI UNIVERSITY",location:"Milan, Italy",data:["Master of Arts in Economics and Social Sciences (Summa Cum Laude)"]},{startYear:2005,endYear:2008,isPresent:!1,entityName:"BOCCONI UNIVERSITY",location:"Milan, Italy",data:["Bachelor of Arts in Economics and Social Sciences (Summa Cum Laude)","One semester Exchange Program at Helsinki School of Economics (HSE, Fall 2007) "]}];var M=[{startYear:2024,isPresent:!0,entityName:"JPMORGAN CHASE & CO.",location:"Washington, DC, US",data:["Vice President & Research Lead"]},{startYear:2024,isPresent:!0,entityName:"GEORGETOWN UNIVERSITY",location:"Washington, DC, US",data:["Visiting Research Fellow at the AI, Analytics, and the Future of Work Initiative"]},{startYear:2024,isPresent:!0,entityName:"JOHN HOPKINS UNIVERSITY CAREY BUSINESS SCHOOL",location:"Washington, DC, US",data:["Adjunct Lecturer"]},{startYear:2020,endYear:2024,isPresent:!1,entityName:"ANALYSIS GROUP",location:"Washington, DC, US",data:["Associate"]},{startYear:2020,endYear:2022,isPresent:!1,entityName:"BOARD OF THE GOVERNORS OF THE FEDERAL RESERVE SYSTEM",location:"Washington, DC, US",data:["Economist"]},{startYear:2019,endYear:2020,isPresent:!1,entityName:"BANK OF ITALY",location:"Cagliari, Italy",data:["Visiting Researcher"]},{startYear:2013,isPresent:!1,entityName:"THE UNIVERSITY OF CHICAGO, BOOTH SCHOOL OF BUSINESS",location:"Chicago, Illinois, US",data:["Visiting Scholar"]},{startYear:2012,endYear:2013,isPresent:!1,entityName:"UCLA UNIVERSITY ANDERSON SCHOOL OF MANAGEMENT",location:"Milan, Italy",data:["External Research Assistant"]},{startYear:2012,endYear:2013,isPresent:!1,entityName:"IGIER INNOCENZO GASPARINI INSTITUTE FOR ECONOMIC RESEARCH",location:"Milan, Italy",data:["Research Assistant"]},{startYear:2012,isPresent:!1,entityName:"OECD, CENTER FOR ENTREPRENEURSHIP, SME, REGIONS, AND CITIES",location:"Trento, Italy",data:["Policy Intern"]}];var j=()=>o.createElement("div",{className:"NewsBanner-module--globalHeader--8fda1"},o.createElement("div",{className:"global-wrapper"},o.createElement("strong",null,"NEWS"),": A new version of the paper "," ",o.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.apassalacqua.net/research/disciplining-banks-through-disclosure-evidence-from-cfpb-consumer-complaints"},'"Disciplining Banks through Disclosure: Evidence from CFPB Consumer Complaints"')," ","is finally posted online!"));var D=e=>{var t;let{data:a,location:n}=e;const i=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",l=a.allMarkdownRemark.nodes;if(0===l.length)return o.createElement(m.A,{location:n,title:i},o.createElement("p",null,"No blog posts found. Add markdown posts to the content directory."));const s=(0,r.A)(new Set(l.map((e=>e.frontmatter.category)))),c=["research","discussions","teaching-material"];return s.sort(((e,t)=>c.indexOf(e)-c.indexOf(t))),o.createElement(o.Fragment,null,o.createElement(j,null),o.createElement(m.A,{location:n,title:i},o.createElement(u,null),o.createElement("div",{className:"timelines-and-posts-container"},o.createElement(x,{id:"work-experience",title:"Work Experience",iconSrc:"/images/work-experience.svg",data:M}),o.createElement(x,{id:"education",title:"Education",iconSrc:"/images/education.svg",data:L}),s.map((e=>{return o.createElement(w,{id:e,key:e,posts:l.filter((t=>t.frontmatter.category===e)),iconSrc:"/images/"+e+".svg",title:(t=e,t.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "))});var t})))),o.createElement("footer",{className:"Layout-module--footer--daa62"},o.createElement("div",{className:"global-wrapper"},o.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center"}},o.createElement("span",null,"© ",(new Date).getFullYear()," Andrea Passalacqua. All Rights Reserved.")," ",o.createElement("em",null,o.createElement("strong",null," Disclaimer: "),"The opinions expressed on this website are solely those of Andrea Passalacqua and do not necessarily reflect the views or opinions of his employer.")))))};const H=()=>o.createElement(N.A,{onlyDefaultTitle:!0})},2217:function(e,t,a){var n=a(9039);e.exports=function(e,t){var a=[][e];return!!a&&n((function(){a.call(null,t||function(){return 1},1)}))}},7680:function(e,t,a){var n=a(9504);e.exports=n([].slice)},4488:function(e,t,a){var n=a(7680),r=Math.floor,o=function(e,t){var a=e.length;if(a<8)for(var i,l,s=1;s<a;){for(l=s,i=e[s];l&&t(e[l-1],i)>0;)e[l]=e[--l];l!==s++&&(e[l]=i)}else for(var c=r(a/2),d=o(n(e,0,c),t),u=o(n(e,c),t),m=d.length,p=u.length,g=0,f=0;g<m||f<p;)e[g+f]=g<m&&f<p?t(d[g],u[f])<=0?d[g++]:u[f++]:g<m?d[g++]:u[f++];return e};e.exports=o},6955:function(e,t,a){var n=a(2140),r=a(4901),o=a(2195),i=a(8227)("toStringTag"),l=Object,s="Arguments"===o(function(){return arguments}());e.exports=n?o:function(e){var t,a,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=l(e),i))?a:s?o(t):"Object"===(n=o(t))&&r(t.callee)?"Arguments":n}},4606:function(e,t,a){var n=a(6823),r=TypeError;e.exports=function(e,t){if(!delete e[t])throw new r("Cannot delete property "+n(t)+" of "+n(e))}},3709:function(e,t,a){var n=a(2839).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},3763:function(e,t,a){var n=a(2839);e.exports=/MSIE|Trident/.test(n)},3607:function(e,t,a){var n=a(2839).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},2140:function(e,t,a){var n={};n[a(8227)("toStringTag")]="z",e.exports="[object z]"===String(n)},655:function(e,t,a){var n=a(6955),r=String;e.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string");return r(e)}},6910:function(e,t,a){var n=a(6518),r=a(9504),o=a(9306),i=a(8981),l=a(6198),s=a(4606),c=a(655),d=a(9039),u=a(4488),m=a(2217),p=a(3709),g=a(3763),f=a(9519),h=a(3607),v=[],E=r(v.sort),y=r(v.push),b=d((function(){v.sort(void 0)})),w=d((function(){v.sort(null)})),N=m("sort"),S=!d((function(){if(f)return f<70;if(!(p&&p>3)){if(g)return!0;if(h)return h<603;var e,t,a,n,r="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(n=0;n<47;n++)v.push({k:t+n,v:a})}for(v.sort((function(e,t){return t.v-e.v})),n=0;n<v.length;n++)t=v[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));n({target:"Array",proto:!0,forced:b||!w||!N||!S},{sort:function(e){void 0!==e&&o(e);var t=i(this);if(S)return void 0===e?E(t):E(t,e);var a,n,r=[],d=l(t);for(n=0;n<d;n++)n in t&&y(r,t[n]);for(u(r,function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:c(t)>c(a)?1:-1}}(e)),a=l(r),n=0;n<a;)t[n]=r[n++];for(;n<d;)s(t,n++);return t}})},2225:function(e,t,a){a.d(t,{k5:function(){return p}});var n=a(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(r),i=["attr","size","title"];function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e){return e&&e.map(((e,t)=>n.createElement(e.tag,d({key:t},e.attr),m(e.child))))}function p(e){return t=>n.createElement(g,s({attr:d({},e.attr)},t),m(e.child))}function g(e){var t=t=>{var a,{attr:r,size:o,title:c}=e,u=l(e,i),m=o||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:a,style:d(d({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(e=>t(e))):t(r)}},7171:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#98d8f8","images":{"fallback":{"src":"/static/aabf912412d79a7dabd30cc4de49cb17/bdc3f/andrea-teaching.jpg","srcSet":"/static/aabf912412d79a7dabd30cc4de49cb17/b7a4e/andrea-teaching.jpg 750w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/f0845/andrea-teaching.jpg 1080w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/04331/andrea-teaching.jpg 1366w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/bdc3f/andrea-teaching.jpg 1407w","sizes":"100vw"},"sources":[{"srcSet":"/static/aabf912412d79a7dabd30cc4de49cb17/593af/andrea-teaching.webp 750w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/c9339/andrea-teaching.webp 1080w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/7f6ff/andrea-teaching.webp 1366w,\\n/static/aabf912412d79a7dabd30cc4de49cb17/efb87/andrea-teaching.webp 1407w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.9864960909737028}')}}]);
//# sourceMappingURL=component---src-pages-index-js-b9af35713a2bec3234a1.js.map