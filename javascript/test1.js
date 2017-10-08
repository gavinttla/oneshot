/*
(function () {
    var foo = function () { return 1; }
    console.log('here1');
    foo() === 1;
    (function () {
        var foo = function () { return 2; }
        foo() === 2;
    })();
    foo() === 1;
})();*/

{
    function foo () { return 1 }
    console.log('here2')
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}
