
//Quiz
function foo(a) {
    var b = a;
    return a + b;
}

var c = foo( 2 );

/** RHS:  = a  , a +, + b;
 * LHS: b = , c =, a = 2, foo(a)
 */

// Lexical Scope

function foo(a) {

    var b = a * 2;

    function bar(c) {
        console.log(a, b, c);
    }

    bar(b * 3);
}

foo( 2 ); // 2 4 12


//Chapter 3

function foo(a) {
  var b = 2;

  function bar() {

  }

  var c = 3;
}

//////

function doSomething(a) {
  b = a + doSomethingElse( a * 2 );

  console.log( b * 3 );

}

function doSomethingElse(a) {
  return a - 1;
}

var b;

doSomething( 2 );


//////


function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1
  }

  var b;

  b = a + doSomethingElse( a * 2 );

  console.log( B * 3 );
}

doSomething( 2 ); //15

////

function foo() {
  function bar(a) {
    i = 3;
    console.log( a + 1 );
  }

  for (var i=0; i<10; i++) {
    bar( i * 2 );
  }
}

foo();

////

var MyReallyCoolLibrary = {
  awesome: "stuff",
  doSomething: function() {
    //...
  },
  doAnotherThing: function() {
    //...
  }
};

///

var a = 2;

(function foo(){
  var a = 3;
  console.log( a );
})();

console.log( a );

////

setTimeout( function(){
  console.log( "I waited 1 second!" );
}, 1000);

setTimeout( function timeoutHandler(){
  console.log( "I waited 1 second!" )
}, 1000 );

////

var a = 2;

(function foo(){

  var a = 3;
  console.log( a );

})();

console.log( a );

////

var a = 2;

(function IIFE( global ){

  var a = 3;
  console.log( a );
  console.log( global.a );

})( window );

console.log( a );

////

undefine = true;

(function IIFE( undefined ){

  var a;
  if (a === undefined) {
    console.log( "Undefined is safe here!");
  }
})();

////

var a = 2;

(function IIFE( def ){
  def( window );
})(function def( global ){

  var a = 3;
  console.log( a );
  console.log( global.a );

});

////

var foo = true;

if (foo) {
  let bar = foo * 2;
  bar = something( bar );
  console.log( bar );
}

console.log( bar );

////

var foo = true;

if (foo) {
  {
    let bar = foo * 2;
    bar = something( bar );
    console.log( bar );
  }
}

console.log( bar );

////

function process(data) {

}
{
  let someReallyBigData = { .. };

  process( someReallyBigData );
}

var btn = document.getElementByID( "my_button" );

btn.addEventListener( "click", function click(evt){
  console.log("button clicked");
}, /*capturingPhase=*/ false );


////

var foo = true;

if (foo) {
  var a = 2;
  const b = 3;

  a = 3;
  b = 4;
}

console.log( a );
console.log( b );


/** Chapter 4: Hoisting */

foo();

function foo() {
  console.log( 1 );
}

var foo = function() {
  console.log( 2 );
};

function foo() {
  console.log( 3 );
}


/** Chapter 5: scope closure */

var fn;

function foo() {
  var a = 2;

  function baz() {
    console.log( a );
  }

  fn = baz;
}

function bar() {
  fn();
}

foo();

bar();

////

function setupBot(name,selector) {
  $( selector ).click( function activator(){
    console.log( "Activating: " + name );
  });
}

setupBot( "Closure Bot 1", "#bot_1" );
setupBot( "Closure Bot 2", "#bot_2" );

////

for (var i=1; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i );
  }, i*1000 );
}

for(var i=1; i<=5; i++) {
  (function(){
    setTimeout( function timer(){
      console.log( i );
    }, i*1000 );
  })();
}

for(var i=1; i<=5; i++) {
  (function(){
    var j = i;
    setTimeout( function timer(){
      console.log( j );
    }, j*1000 );
  })( i );
}

for (var i=1; i<=5; i++) {
  let j = i;
  setTimeout( function timer(){
    console.log( j );
  }, j*1000);
}

for (let i=1; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i );
  }, i*1000);
}

////

function CoolModule()  {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log( something );
  }

  function doAnother() {
    console.log( another.join( " ! ") );
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}

var foo = CoolModule();

foo.doSomething();
foo.doAnother();

////

var foo = (function CoolModule() {
  var another = [1, 2, 3];

  function doSomething() {
    console.log( something );
  }

  function doAnother() {
    console.log( another.join( " ! ") );
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
})();

foo.doSomething();
foo.doAnother();


var foo = (function CoolModule(id) {

  function change(){
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log( id );
  }

  function identify2() {
    console.log( id.toUpperCase() );
  }

  var publicAPI = {
    change: change,
    identify: identify1
  };

  return {
    doSomething: publicAPI;
  };
})( "foo module" );

foo.identify();
foo.change();
foo.identify();

/////
/////

















































































