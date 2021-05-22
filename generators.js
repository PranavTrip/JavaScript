// Generators in JS
function myGenerator(){
    yield 1;
    yield 2;
};
let iterator=myGenerator();
let result;
do{
    result=iterator.next();
    console.log(result);
}while(!result.done);