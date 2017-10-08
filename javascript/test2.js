function f (x, y, ...a) {
    console.log(a.length);
    return (x + y) * a.length
}

if(f(1, 2, "hello", true, 7, 'man', false) === 9){
    console.log('correct');
}else{
    console.log('wrong');
}