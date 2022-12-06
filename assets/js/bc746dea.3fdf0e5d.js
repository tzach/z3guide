"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9449],{5016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(3117),l=(n(7294),n(3905)),i=n(7634),r=n.n(i);const o={title:"Tactics Summary",sidebar_position:5},d=void 0,p={unversionedId:"strategies/summary",id:"strategies/summary",title:"Tactics Summary",description:"Tactic demodulator",source:"@site/docs-smtlib/03 - strategies/05 - summary.md",sourceDirName:"03 - strategies",slug:"/strategies/summary",permalink:"/z3guide/docs/strategies/summary",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/03 - strategies/05 - summary.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Tactics Summary",sidebar_position:5},sidebar:"smtlibSidebar",previous:{title:"Probes",permalink:"/z3guide/docs/strategies/probes"},next:{title:"Introduction",permalink:"/z3guide/docs/optimization/intro"}},s={},m=[{value:"Tactic demodulator",id:"tactic-demodulator",level:2},{value:"Short Description:",id:"short-description",level:3},{value:"Long Description",id:"long-description",level:3},{value:"Example",id:"example",level:3},{value:"Notes",id:"notes",level:3},{value:"Tactic elim-uncnstr",id:"tactic-elim-uncnstr",level:2},{value:"Short Description",id:"short-description-1",level:3},{value:"Long Description",id:"long-description-1",level:3},{value:"Boolean Connectives",id:"boolean-connectives",level:4},{value:"Arithmetic",id:"arithmetic",level:4},{value:"Bit-vectors",id:"bit-vectors",level:4},{value:"Arrays",id:"arrays",level:4},{value:"Algebraic Datatypes",id:"algebraic-datatypes",level:4},{value:"Example",id:"example-1",level:3},{value:"Notes",id:"notes-1",level:3},{value:"Tactic propagate-values",id:"tactic-propagate-values",level:2},{value:"Short Description:",id:"short-description-2",level:3},{value:"Long Description",id:"long-description-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Notes",id:"notes-2",level:3},{value:"Tactic simplify",id:"tactic-simplify",level:2},{value:"Short Description:",id:"short-description-3",level:3},{value:"Long Description",id:"long-description-3",level:3},{value:"Example",id:"example-3",level:3},{value:"Notes",id:"notes-3",level:3},{value:"Tactic solve-eqs",id:"tactic-solve-eqs",level:2},{value:"Short Description",id:"short-description-4",level:3},{value:"Long Description",id:"long-description-4",level:3},{value:"Example",id:"example-4",level:3},{value:"Notes",id:"notes-4",level:3}],u={toc:m};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tactic-demodulator"},"Tactic demodulator"),(0,l.kt)("h3",{id:"short-description"},"Short Description:"),(0,l.kt)("p",null,"Extracts equalities from quantifiers and applies them for simplification"),(0,l.kt)("h3",{id:"long-description"},"Long Description"),(0,l.kt)("p",null,"In first-order theorem proving (FOTP), a demodulator is a universally quantified formula of the form:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Forall X1, ..., Xn.  L[X1, ..., Xn] = R[X1, ..., Xn]"),"\nWhere ",(0,l.kt)("inlineCode",{parentName:"p"},"L[X1, ..., Xn]")," contains all variables in ",(0,l.kt)("inlineCode",{parentName:"p"},"R[X1, ..., Xn]"),", and\n",(0,l.kt)("inlineCode",{parentName:"p"},"L[X1, ..., Xn]"),' is "bigger" than ',(0,l.kt)("inlineCode",{parentName:"p"},"R[X1, ...,Xn]"),"."),(0,l.kt)("p",null,"The idea is to replace something big ",(0,l.kt)("inlineCode",{parentName:"p"},"L[X1, ..., Xn]")," with something smaller ",(0,l.kt)("inlineCode",{parentName:"p"},"R[X1, ..., Xn]"),"."),(0,l.kt)("p",null,"After selecting the demodulators, we traverse the rest of the formula looking for instances of ",(0,l.kt)("inlineCode",{parentName:"p"},"L[X1, ..., Xn]"),".\nWhenever we find an instance, we replace it with the associated instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"R[X1, ..., Xn]"),"."),(0,l.kt)("p",null,"For example, suppose we have"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Forall x, y.  f(x+y, y) = y\nand\nf(g(b) + h(c), h(c)) <= 0\n")),(0,l.kt)("p",null,"The term ",(0,l.kt)("inlineCode",{parentName:"p"},"f(g(b) + h(c), h(c))")," is an instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"f(x+y, y)")," if we replace ",(0,l.kt)("inlineCode",{parentName:"p"},"x <- g(b)")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y <- h(c)"),".\nSo, we can replace it with ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," which is bound to ",(0,l.kt)("inlineCode",{parentName:"p"},"h(c)")," in this example. So, the result of the transformation is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Forall x, y.  f(x+y, y) = y\nand\nh(c) <= 0\n")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  (declare-sort S 0)\n  (declare-sort S1 0)\n  (declare-sort S2 0)\n  (declare-fun f () S)\n  (declare-fun f1 () S)\n  (declare-fun f2 (S1 S) S)\n  (declare-fun f3 (S2 S) S1)\n  (declare-fun f4 () S)\n  (declare-fun f5 () S2)\n  (assert (not (= f1 (f2 (f3 f5 f4) f))))\n  (assert (forall ((q S) (v S)) (or (= q v) (= f1 (f2 (f3 f5 q) v)) (= (f2 (f3 f5 v) q) f1))))\n  (assert (forall ((q S) (x S)) (not (= (f2 (f3 f5 q) x) f1))))\n  (apply demodulator)\n")),(0,l.kt)("p",null,"It generates"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  (goals\n  (goal\n    (forall ((q S) (v S)) (= q v))\n    (forall ((q S) (x S)) (not (= (f2 (f3 f5 q) x) f1)))\n    :precision precise :depth 1)\n  )\n")),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"supports unsat cores"),(0,l.kt)("li",{parentName:"ul"},"does not support fine-grained proofs")),(0,l.kt)("h2",{id:"tactic-elim-uncnstr"},"Tactic elim-uncnstr"),(0,l.kt)("h3",{id:"short-description-1"},"Short Description"),(0,l.kt)("p",null,"Eliminate Unconstrained uninterpreted constants"),(0,l.kt)("h3",{id:"long-description-1"},"Long Description"),(0,l.kt)("p",null,"The tactic eliminates uninterpreted constants that occur only once in a goal and such that the immediate context\nwhere they occur can be replaced by a fresh constant. We call these occurrences invertible.\nIt relies on a series of theory specific invertibility transformations.\nIn the following assume ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"x'")," occur in a unique subterm and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," is a fresh uninterpreted constant."),(0,l.kt)("h4",{id:"boolean-connectives"},"Boolean Connectives"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Original Context"),(0,l.kt)("th",{parentName:"tr",align:null},"New Term"),(0,l.kt)("th",{parentName:"tr",align:null},"Updated solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(if c x x')")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = x' = y"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(if x x' e)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = true, x' = y"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(if x t x')")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = false, x' = y"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(not x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (not y)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(and x x')")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = y, x' = true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(or  x x')")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = y, x' = false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(= x t)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (if y t (diff t))"))))),(0,l.kt)("p",null,"where diff is a diagnonalization function available in domains of size ",(0,l.kt)("inlineCode",{parentName:"p"},">")," 1."),(0,l.kt)("h4",{id:"arithmetic"},"Arithmetic"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Original Context"),(0,l.kt)("th",{parentName:"tr",align:null},"New Term"),(0,l.kt)("th",{parentName:"tr",align:null},"Updated solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(+ x t)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = y - t"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(* x x')")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = y, x' = 1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(* -1 x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = -y"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(<= x t)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (if y t (+ t 1))"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(<= t x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (if y t (- t 1))"))))),(0,l.kt)("h4",{id:"bit-vectors"},"Bit-vectors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Original Context"),(0,l.kt)("th",{parentName:"tr",align:null},"New Term"),(0,l.kt)("th",{parentName:"tr",align:null},"Updated solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(bvadd x t)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = y - t"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(bvmul x x')")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = y, x' = 1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(bvmul odd x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = inv(odd)*y"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"((extract sz-1 0) x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = y"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"((extract hi lo) x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (concat y1 y y2)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(udiv x x')")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = y, x' = 1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(concat x x')")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (extract hi1 lo1 y)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(bvule x t)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(or y (= t MAX))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (if y t (bvadd t 1))"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(bvule t x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(or y (= t MIN))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (if y t (bvsub t 1))"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(bvnot x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (bvnot y)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(bvand x x')")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = y, x' = MAX"))))),(0,l.kt)("p",null,"In addition there are conversions for shift and bit-wise or and signed comparison."),(0,l.kt)("h4",{id:"arrays"},"Arrays"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Original Context"),(0,l.kt)("th",{parentName:"tr",align:null},"New Term"),(0,l.kt)("th",{parentName:"tr",align:null},"Updated solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(select x t)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (const y)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(store x x1 x2)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x2 = (select x x1), x = y, x1 = arb"))))),(0,l.kt)("h4",{id:"algebraic-datatypes"},"Algebraic Datatypes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Original Context"),(0,l.kt)("th",{parentName:"tr",align:null},"New Term"),(0,l.kt)("th",{parentName:"tr",align:null},"Updated solution"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(head x)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x = (cons y arb)"))))),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)(r(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(declare-fun p (Int) Bool)    \n(assert (>= (+ y (+ x y)) y))\n(assert (p y))\n(apply elim-uncnstr)\n(assert (p (+ x y)))\n(apply elim-uncnstr)",result:{output:"(goals\n(goal\n  k!2\n  (p y)\n  :precision precise :depth 1)\n)\n(goals\n(goal\n  (>= (+ y k!3) y)\n  (p y)\n  (p k!3)\n  :precision precise :depth 1)\n)\n",error:"",status:"z3-ran",hash:"da308012d49419493d7a21bc91da035f425d2f72"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,l.kt)("h3",{id:"notes-1"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"supports unsat cores"),(0,l.kt)("li",{parentName:"ul"},"does not support fine-grained proofs")),(0,l.kt)("h2",{id:"tactic-propagate-values"},"Tactic propagate-values"),(0,l.kt)("h3",{id:"short-description-2"},"Short Description:"),(0,l.kt)("p",null,"Tactic for propagating equalities ",(0,l.kt)("inlineCode",{parentName:"p"},"(= t v)")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"v")," is a value"),(0,l.kt)("h3",{id:"long-description-2"},"Long Description"),(0,l.kt)("p",null,"In a context where terms are equated to constants it is invariably beneficial to\nreplace terms, that can be compound, with the constants and then simplify the resulting formulas.\nThe propagate-values tactic accomplishes the task of replacing such terms."),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)(r(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(declare-fun f (Int) Int)\n(assert (= 1 (f (+ x y))))\n(assert (= 2 x))\n(assert (> (f (+ 2 y)) y))\n(apply propagate-values)",result:{output:"(goals\n(goal\n  (= 1 (f (+ 2 y)))\n  (= 2 x)\n  (not (<= 1 y))\n  :precision precise :depth 1)\n)\n",error:"",status:"z3-ran",hash:"a5f5914280908c04bd6beea1009f56b9f9a9c8df"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,l.kt)("h3",{id:"notes-2"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"supports unsat cores")),(0,l.kt)("h2",{id:"tactic-simplify"},"Tactic simplify"),(0,l.kt)("h3",{id:"short-description-3"},"Short Description:"),(0,l.kt)("p",null,"The tactic performs algebraic simplifcations on formulas"),(0,l.kt)("h3",{id:"long-description-3"},"Long Description"),(0,l.kt)("p",null,"The simplify tactic invokes z3's main rewriting engine.\nThe rewriting engine contains support for theory specific simplifications.\nThe set of simplifications invoked is open ended. Useful algebraic simplifications\nare added to the rewrite engine as they are discovered to be useful."),(0,l.kt)("p",null,"Note that the simplifier does not ensure that equivalent formulas are simplified to the same form.\nIn other words it does not guarantee canonicity. This contrasts with BDD packages where BDDs constructed\nfrom two equivalent formulas are guaranteed to be equal."),(0,l.kt)("h3",{id:"example-3"},"Example"),(0,l.kt)(r(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"  (declare-const x Int)\n  (declare-const y Int)\n  (assert (> x (+ x y)))\n  (apply simplify)",result:{output:"(goals\n(goal\n  (not (<= 0 y))\n  :precision precise :depth 1)\n)\n",error:"",status:"z3-ran",hash:"f5510ddd1aa3661e9a7ede81d143d66e01adcdb4"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,l.kt)("h3",{id:"notes-3"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"supports unsat cores, proof terms")),(0,l.kt)("h2",{id:"tactic-solve-eqs"},"Tactic solve-eqs"),(0,l.kt)("h3",{id:"short-description-4"},"Short Description"),(0,l.kt)("p",null,"Solve for variables"),(0,l.kt)("h3",{id:"long-description-4"},"Long Description"),(0,l.kt)("p",null,"The tactic eliminates variables that can be brought into solved form.\nFor example, the assertion ",(0,l.kt)("inlineCode",{parentName:"p"},"x = f(y + z)")," can be solved for ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),", replacing ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\neverywhere by ",(0,l.kt)("inlineCode",{parentName:"p"},"f(x + y)"),". It depends on a set of theory specific equality solvers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Basic equations"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"equations between uninterpreted constants and terms. "),(0,l.kt)("li",{parentName:"ul"},"equations written as ",(0,l.kt)("inlineCode",{parentName:"li"},"(if p (= x t) (= x s))")," are solved as ",(0,l.kt)("inlineCode",{parentName:"li"},"(= x (if p t s))"),"."),(0,l.kt)("li",{parentName:"ul"},"asserting ",(0,l.kt)("inlineCode",{parentName:"li"},"p")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"(not p)")," where ",(0,l.kt)("inlineCode",{parentName:"li"},"p")," is uninterpreted, causes ",(0,l.kt)("inlineCode",{parentName:"li"},"p")," to be replaced by ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),")."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Arithmetic equations"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"It solves ",(0,l.kt)("inlineCode",{parentName:"li"},"x mod k = s")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"x = k * m' + s"),", where m'` is a fresh constant. "),(0,l.kt)("li",{parentName:"ul"},"It finds variables with unit coefficients in integer linear equations."),(0,l.kt)("li",{parentName:"ul"},"It solves for ",(0,l.kt)("inlineCode",{parentName:"li"},"x * Y = Z$ under the side-condition "),"Y != 0",(0,l.kt)("inlineCode",{parentName:"li"},"as"),"x = Z/Y`.")))),(0,l.kt)("p",null,"It also allows solving for uninterpreted constants that only appear in a single disjuction. For example,\n",(0,l.kt)("inlineCode",{parentName:"p"},"(or (= x (+ 5 y)) (= y (+ u z)))")," allows solving for ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),". "),(0,l.kt)("h3",{id:"example-4"},"Example"),(0,l.kt)(r(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)\n(declare-const y Int)\n(declare-const z Int)\n(declare-const u Int)\n(assert (or (and (= x (+ 5 y)) (> u z)) (= y (+ u z))))\n(apply solve-eqs)",result:{output:"(goals\n(goal\n  (or (= y (+ u z)) (and (= x (+ 5 y)) (not (<= u z))))\n  :precision precise :depth 1)\n)\n",error:"",status:"z3-ran",hash:"a0f6dd1dc9bf283bc03555062ebe180e2f7c62f0"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,l.kt)("p",null,"It produces the goal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(goal\n  (or (not (<= u z)) (= y (+ u z)))\n  :precision precise :depth 1)\n")),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," was solved as ",(0,l.kt)("inlineCode",{parentName:"p"},"(+ 5 y)"),"."),(0,l.kt)("h3",{id:"notes-4"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"supports unsat cores"),(0,l.kt)("li",{parentName:"ul"},"does not support fine-grained proofs")))}k.isMDXComponent=!0}}]);