"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[886],{3822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(3117),i=(t(7294),t(3905)),s=t(7689);const o={title:"Tactics",sidebar_position:3},r=void 0,l={unversionedId:"strategies/tactics",id:"strategies/tactics",title:"Tactics",description:"Z3 comes equipped with many built-in tactics. The command (help-tactic) provides a short description of all built-in tactics.",source:"@site/docs/02 - strategies/03 - tactics.md",sourceDirName:"02 - strategies",slug:"/strategies/tactics",permalink:"/z3guide/docs/strategies/tactics",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/02 - strategies/03 - tactics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tactics",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Goals",permalink:"/z3guide/docs/strategies/goals"},next:{title:"Probes",permalink:"/z3guide/docs/strategies/probes"}},c={},p=[],d={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Z3 comes equipped with many built-in tactics. The command (help-tactic) provides a short description of all built-in tactics."),(0,i.kt)(s.Z,{input:{code:"(help-tactic)",result:{output:'(error "line 1 column 13: parallel tactic is disabled in single threaded mode")\n',error:'(error "line 1 column 13: parallel tactic is disabled in single threaded mode")\n',status:"z3-runtime-error",hash:"2856f0e6a0d1df8445d98754831b708772c4393a"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"Z3 comes equipped with the following tactic combinators (aka tacticals):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(then t s)")," applies /t to the input goal and /s to every subgoal produced by /t."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(par-then t s)")," applies /t to the input goal and /s to every subgoal produced by /t in parallel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(or-else t s)")," first applies /t to the given goal, if it fails then returns the result of /s applied to the given goal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(par-or t s)")," applies /t and /s in parallel until one of them succeed. The tractic fails if /t and /s fails."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(repeat t)")," Keep applying the given tactic until no subgoal is modified by it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(repeat t n)")," Keep applying the given tactic until no subgoal is modified by it, or the number of iterations is greater than /n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(try-for t ms)")," Apply tactic /t to the input goal, if it does not return in /ms millisenconds, it fails.\n(using-params t params) Apply the given tactic using the given parameters. ",(0,i.kt)("inlineCode",{parentName:"li"},"(! t params)")," is a shorthand for ",(0,i.kt)("inlineCode",{parentName:"li"},"(using-params t params)"),".")),(0,i.kt)("p",null,"The combinators ",(0,i.kt)("inlineCode",{parentName:"p"},"then"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"par-then"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"or-else")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"par-or")," accept arbitrary number of arguments. The following example demonstrate how to use these combinators."),(0,i.kt)(s.Z,{input:{code:'(declare-const x Real)\n(declare-const y Real)\n(declare-const z Real)\n\n(assert (or (= x 0.0) (= x 1.0)))\n(assert (or (= y 0.0) (= y 1.0)))\n(assert (or (= z 0.0) (= z 1.0)))\n(assert (> (+ x y z) 2.0))\n\n(echo "split all...")\n(apply (repeat (or-else split-clause skip)))\n\n(echo "split at most 2...")\n(apply (repeat (or-else split-clause skip) 1))\n\n(echo "split and solve-eqs...")\n(apply (then (repeat (or-else split-clause skip)) solve-eqs))',result:{output:"split all...\n(goals\n(goal\n  (= x 0.0)\n  (= y 0.0)\n  (= z 0.0)\n  (> (+ x y z) 2.0)\n  :precision precise :depth 3)\n(goal\n  (= x 0.0)\n  (= y 0.0)\n  (= z 1.0)\n  (> (+ x y z) 2.0)\n  :precision precise :depth 3)\n(goal\n  (= x 0.0)\n  (= y 1.0)\n  (= z 0.0)\n  (> (+ x y z) 2.0)\n  :precision precise :depth 3)\n(goal\n  (= x 0.0)\n  (= y 1.0)\n  (= z 1.0)\n  (> (+ x y z) 2.0)\n  :precision precise :depth 3)\n(goal\n  (= x 1.0)\n  (= y 0.0)\n  (= z 0.0)\n  (> (+ x y z) 2.0)\n  :precision precise :depth 3)\n(goal\n  (= x 1.0)\n  (= y 0.0)\n  (= z 1.0)\n  (> (+ x y z) 2.0)\n  :precision precise :depth 3)\n(goal\n  (= x 1.0)\n  (= y 1.0)\n  (= z 0.0)\n  (> (+ x y z) 2.0)\n  :precision precise :depth 3)\n(goal\n  (= x 1.0)\n  (= y 1.0)\n  (= z 1.0)\n  (> (+ x y z) 2.0)\n  :precision precise :depth 3)\n)\nsplit at most 2...\n(goals\n(goal\n  (= x 0.0)\n  (= y 0.0)\n  (or (= z 0.0) (= z 1.0))\n  (> (+ x y z) 2.0)\n  :precision precise :depth 2)\n(goal\n  (= x 0.0)\n  (= y 1.0)\n  (or (= z 0.0) (= z 1.0))\n  (> (+ x y z) 2.0)\n  :precision precise :depth 2)\n(goal\n  (= x 1.0)\n  (= y 0.0)\n  (or (= z 0.0) (= z 1.0))\n  (> (+ x y z) 2.0)\n  :precision precise :depth 2)\n(goal\n  (= x 1.0)\n  (= y 1.0)\n  (or (= z 0.0) (= z 1.0))\n  (> (+ x y z) 2.0)\n  :precision precise :depth 2)\n)\nsplit and solve-eqs...\n(goals\n(goal\n  :precision precise :depth 4)\n)\n",error:"",status:"z3-ran",hash:"32293334f8f503411820daa7e6e0b5624fc74553"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"In the last apply command, the tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"solve-eqs")," discharges all but one goal. Note that, this tactic generates one goal: the empty goal which is trivially satisfiable (i.e., feasible)"),(0,i.kt)("p",null,"A tactic can be used to decide whether a set of assertions has a solution (i.e., is satisfiable) or not. The command ",(0,i.kt)("inlineCode",{parentName:"p"},"check-sat-using")," is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"check-sat"),", but uses the given tactic instead of the Z3 default solver for solving the current set of assertions. If the tactic produces the empty goal, then check-sat-using returns sat. If the tactic produces a single goal containing ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"check-sat-using")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"unsat"),". Otherwise, it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),"."),(0,i.kt)(s.Z,{input:{code:"(declare-const x (_ BitVec 16))\n(declare-const y (_ BitVec 16))\n\n(assert (= (bvor x y) (_ bv13 16)))\n(assert (bvslt x y))\n\n(check-sat-using (then simplify solve-eqs bit-blast sat))\n(get-model)",result:{output:"sat\n(\n  (define-fun y () (_ BitVec 16)\n    #x000d)\n  (define-fun x () (_ BitVec 16)\n    #x0004)\n)\n",error:"",status:"z3-ran",hash:"6b8865515b80c34b6bb946dc0152e95e70aaa0c3"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"In the example above, the tactic used implements a basic bit-vector solver using equation solving, bit-blasting, and a propositional SAT solver."),(0,i.kt)("p",null,"In the following example, we use the combinator using-params to configure our little solver. We also include the tactic aig which tries to compress Boolean formulas using And-Inverted Graphs."),(0,i.kt)(s.Z,{input:{code:"(declare-const x (_ BitVec 16))\n(declare-const y (_ BitVec 16))\n\n(assert (= (bvadd (bvmul (_ bv32 16) x) y) (_ bv13 16)))\n(assert (bvslt (bvand x y) (_ bv10 16)))\n(assert (bvsgt y (bvneg (_ bv100 16))))\n\n(check-sat-using (then (using-params simplify :mul2concat true)\n                       solve-eqs \n                       bit-blast \n                       aig\n                       sat))\n(get-model)\n(get-value ((bvand x y)))",result:{output:"sat\n(\n  (define-fun y () (_ BitVec 16)\n    #x400d)\n  (define-fun x () (_ BitVec 16)\n    #x0600)\n)\n(((bvand x y) #x0000))\n",error:"",status:"z3-ran",hash:"40b1779833e010fe1615d1d08f8a6d260b07b32e"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"The tactic ",(0,i.kt)("inlineCode",{parentName:"p"},"smt")," wraps the main solver in Z3 as a tactic."),(0,i.kt)(s.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n\n(assert (> x (+ y 1)))\n\n(check-sat-using smt)\n(get-model)",result:{output:"sat\n(\n  (define-fun x () Int\n    0)\n  (define-fun y () Int\n    (- 2))\n)\n",error:"",status:"z3-ran",hash:"dda075f68af20e7b28fe798780ff56f4788e7a4b"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"Now, we show how to implement a solver for integer arithmetic using SAT. The solver is complete only for problems where every variable has a lower and upper bound."),(0,i.kt)(s.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(declare-const z Int)\n\n(assert (and (> x 0) (< x 10)))\n(assert (and (> y 0) (< y 10)))\n(assert (and (> z 0) (< z 10)))\n(assert (= (+ (* 3 y) (* 2 x)) z))\n\n(check-sat-using (then (using-params simplify :arith-lhs true :som true)\n                       normalize-bounds\n                       lia2pb\n                       pb2bv\n                       bit-blast\n                       sat))\n(get-model)\n\n(reset)\n\n(declare-const x Int)\n(declare-const y Int)\n(declare-const z Int)\n\n(assert (= (+ (* 3 y) (* 2 x)) z))\n\n;; The next command will fail since x, y and z are not bounded.\n(check-sat-using (then (using-params simplify :arith-lhs true :som true)\n                       normalize-bounds\n                       lia2pb\n                       pb2bv\n                       bit-blast\n                       sat))\n(get-info :reason-unknown)",result:{output:'sat\n(\n  (define-fun x () Int\n    3)\n  (define-fun z () Int\n    9)\n  (define-fun y () Int\n    1)\n)\nunknown\n(:reason-unknown "goal is in a fragment not supported by pb2bv. Offending expression: y")\n',error:"",status:"z3-ran",hash:"3a249d3d3c9bb380a97885e72cfe528a221c92cb"}},mdxType:"Z3CodeBlock"}))}u.isMDXComponent=!0}}]);