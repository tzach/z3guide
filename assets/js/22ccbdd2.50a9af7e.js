"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[386],{9875:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=e(3117),s=(e(7294),e(3905)),r=e(7689);const i={title:"Uninterpreted Functions and Constants",sidebar_position:4},o=void 0,c={unversionedId:"Uninterpreted-functions-and-constants",id:"Uninterpreted-functions-and-constants",title:"Uninterpreted Functions and Constants",description:"The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function.",source:"@site/docs/04 - Uninterpreted-functions-and-constants.md",sourceDirName:".",slug:"/Uninterpreted-functions-and-constants",permalink:"/rise4fun/docs/Uninterpreted-functions-and-constants",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/04 - Uninterpreted-functions-and-constants.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Uninterpreted Functions and Constants",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Propositional Logic",permalink:"/rise4fun/docs/propositional-logic"},next:{title:"Arithmetic",permalink:"/rise4fun/docs/category/arithmetic"}},u={},l=[],d={toc:l};function f(n){let{components:t,...e}=n;return(0,s.kt)("wrapper",(0,a.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function."),(0,s.kt)(r.Z,{input:{code:"(declare-fun f (Int) Int)\n(declare-fun a () Int) ; a is a constant\n(declare-const b Int) ; syntax sugar for (declare-fun b () Int)\n(assert ( a 20))\n(assert ( b a))\n(assert (= (f 10) 1))\n(check-sat)\n(get-model)",result:{output:'(error "line 4 column 15: unknown constant a (Int) \ndeclared: (declare-fun a () Int) ")\n(error "line 5 column 13: unknown constant b (Int) \ndeclared: (declare-fun b () Int) ")\nsat\n(\n  (define-fun b () Int\n    0)\n  (define-fun a () Int\n    0)\n  (define-fun f ((x!0 Int)) Int\n    1)\n)\n',error:"",status:"z3-ran",hash:"a03f6da68a2fd2181c9bb76bbcff46b914d243f9"}},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"Unlike programming languages, where functions have side-effects, can throw exceptions, or never return, functions in classical first-order logic have no side-effects and are total. That is, they are defined on all input values. This includes functions, such as division."),(0,s.kt)("p",null,"Function and constant symbols in pure first-order logic are ",(0,s.kt)("em",{parentName:"p"},"uninterpreted")," or ",(0,s.kt)("em",{parentName:"p"},"free"),", which means that no a priori interpretation is attached. This is in contrast to functions belonging to the signature of theories, such as arithmetic where the function + has a fixed standard interpretation (it adds two numbers). Uninterpreted functions and constants are maximally flexible; they allow any interpretation that is consistent with the constraints over the function or constant."),(0,s.kt)("p",null,"To illustrate uninterpreted functions and constants let us introduce an (uninterpreted) sort A, and the constants x, y ranging over A. Finally let f be an uninterpreted function that takes one argument of sort A and results in a value of sort A. The example illustrates how one can force an interpretation where f applied twice to x results in x again, but f applied once to x is different form x."),(0,s.kt)(r.Z,{input:{code:"(declare-sort A)\n(declare-const x A)\n(declare-const y A)\n(declare-fun f (A) A)\n(assert (= (f (f x)) x))\n(assert (= (f x) y))\n(assert (not (= x y)))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  ;; universe for A:\n  ;;   A!val!1 A!val!0 \n  ;; -----------\n  ;; definitions for universe elements:\n  (declare-fun A!val!1 () A)\n  (declare-fun A!val!0 () A)\n  ;; cardinality constraint:\n  (forall ((x A)) (or (= x A!val!1) (= x A!val!0)))\n  ;; -----------\n  (define-fun x () A\n    A!val!0)\n  (define-fun y () A\n    A!val!1)\n  (define-fun f ((x!0 A)) A\n    (ite (= x!0 A!val!1) A!val!0\n      A!val!1))\n)\n",error:"",status:"z3-ran",hash:"85591ba7174966e115be7f569ad7e758829f261a"}},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"The resulting model introduces abstract values for the elements in A, because the sort A is uninterpreted. The interpretation for f in the model toggles between the two values for x and y, which are different."))}f.isMDXComponent=!0}}]);