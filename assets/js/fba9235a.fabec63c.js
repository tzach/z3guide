"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[684],{6038:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=o(3117),a=(o(7294),o(3905));o(7689);const n={title:"Introduction",sidebar_position:1},r=void 0,s={unversionedId:"logic/intro",id:"logic/intro",title:"Introduction",description:"Z3 is a state-of-the art theorem prover from Microsoft Research. It can be used to check the satisfiability of logical formulas over one or more theories. Z3 offers a compelling match for software analysis and verification tools, since several common software constructs map directly into supported theories.",source:"@site/docs/01 - logic/01 - intro.md",sourceDirName:"01 - logic",slug:"/logic/intro",permalink:"/z3guide/docs/logic/intro",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/01 - logic/01 - intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Basic Commands",permalink:"/z3guide/docs/logic/basiccommands"}},c={},l=[],d={toc:l};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Z3 is a state-of-the art theorem prover from Microsoft Research. It can be used to check the satisfiability of logical formulas over one or more theories. Z3 offers a compelling match for software analysis and verification tools, since several common software constructs map directly into supported theories."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"}," The main objective of the tutorial is to introduce the reader on how to use Z3 effectively for logical modeling and solving. The tutorial provides some general background on logical modeling, but we have to defer a full introduction to first-order logic and decision procedures to text-books in order to develop an ",(0,a.kt)("strong",{parentName:"p"},"in depth")," understanding of the underlying concepts. To clarify: a deep understanding of logical modeling is not necessarily required to understand this tutorial and model logic with Z3, but it is necessary to understand for writing complex programs. "),(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"For an understanding of computational logic from the foundations of first-order logic to state-of-the-art decision procedures for arithmetic, data structures, and combination theories, refer to  ",(0,a.kt)("a",{parentName:"p",href:"https://theory.stanford.edu/~arbrad/book.html"},"The Calculus of Computation by Aaron Bradley and Zohar Manna"))),(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"For an understanding ",(0,a.kt)("strong",{parentName:"p"},"decision procedures"),", or an algorithm that, given a decision problem, terminates with a correct yes or no answer, refer to ",(0,a.kt)("a",{parentName:"p",href:"http://www.decision-procedures.org/"},"Decision Procedures by Daniel Kroening and Ofer Strichman"))),(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"For an overview of Satisfiability modulo theories (SMT) and Boolean satisfiability problem (SAT) solvers, examples of their theoretical application, and questions to work through, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://sat-smt.codes/SAT_SMT_by_example.pdf"},"SAT/SMT\nby Example by Dennis Yurichev")," ")))),(0,a.kt)("p",null,"Z3 is a low level tool. It is best used as a component in the context of other tools that require solving logical formulas. Consequently, Z3 exposes a number of API facilities to make it convenient for tools to map into Z3, but there are no stand-alone editors or user-centric facilities for interacting with Z3. The language syntax used in the front ends favor simplicity in contrast to linguistic convenience."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"}," Be sure to follow along with the examples by clicking the edit link in the corner. See what the tool says, try your own formulas, and experiment!"))))}m.isMDXComponent=!0}}]);