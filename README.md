# typeScriptDemo
Type Script Demo

# Installation
1.	Install Node.js
2.	npm install -g typescript
3.	tsc –version (type script compiler)

# To compile and run the code
tsc .\main.ts | node .\main.js

# To compile and Run
To Compile: tsc main.ts  transfile the ts file to js file and creates main.js
To run: node main.js  to execute the file

# Diffeence between var and let keywords in Typescript
Var keyword  assigns the scope of the variable to the nearest function
Function doSth() {
  For(var i=0; I < 5; i++) {
   }
   Console.log(“value of I =” + i);   prints 5
}
Let keyword  assigns the scope of the variable to the nearest block.
