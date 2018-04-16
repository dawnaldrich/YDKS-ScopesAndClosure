
/** Chapter 1 */

function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I'm " + identify.call( this );
  console.log( greeting );
}

var me = {
  name: "Kyle"
};

var you = {
  name: "Reader"
};

identify.call( me );
identify.call( you );

speak.call( me );
speak.call( you );

////

function foo(num) {
  console.log( "foo: " + num );
  this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
  if (i > 5) {
    foo.call( foo, i );
  }
}

console.log( foo.count );

////

function foo() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo();

////

function foo() {
  console.log( this.a );
}

var obj2 = {
  a: 42,
  foo: foo
};

var obj1 = {
  a: 2,
  obj2: obj2
};


ob1.obj2.foo();

////

function foo() {
  console.log( this.a );
}

function doFoo(fn){
  fn();
}

var obj = {
  a:2,
  foo: foo
};

var a = "oops, global";

doFoo( obj.foo );

////


function foo() {
  console.log( this.a );
}

var obj = {
  a:2
};

var bar = function() {
  foo.call( obj );
};

bar();
setTimeout( bar, 100 );

bar.call( window );

////

function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}

var obj = {
  a:2
};

var bar = foo.bind( obj );

var b = bar( 3 );
console.log( b );

////
function foo(a) {
  this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a );

////

function foo(something) {
  this.a = something;
}

var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a );

var baz = new bar( 3 );
console.log( obj1.a );
console.log( baz.a );

////

function foo(a, b) {
  console.log( "a:" + a + ", b:" + b );
}

var ø = Object.create( null );

foo.apply( ø, [2, 3] );

var bar = foo.bind( ø, 2 );
bar( 3 );

////

function foo() {
  console.log("name: " + this.name);
}

var obj = { name: "obj" };
    obj2 = { name: "obj2" };
    obj3 = { name: "obj3" };

var fooOBJ = foo.softBind(obj);

obj2.foo = foo.softBind(obj);
obj2.foo();

fooOBJ.call( obj3 );

setTimeout( obj2.foo, 10 );

////

function foo() {
  var self = this;
  setTimout( function(){
    console.log( self.a );
  }, 100 );
}

var obj = {
  a: 2
};

foo.call( obj );


/** Chapter 3 */

var wantA = true;
var myObject = {
  a: 2
};

var idx;

fi (wantA) {
  idx = "a";
}

console.log( myObject['idx'] );

////

var myObject = {};

Object.defineProperty( myObject, "a", {
  value: 2,
  writable: true,
  configurable: true,
  enumerable: true
});

myObject.a;

////

var myObject = {};

Object.defineProperty( myObject, "FAVORITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false
} );

////

var myObject = {
  a: 2
};

Object.preventExtensions( myObject );

myobject.b = 3;
myObject.b; // undefined


////

var myObject = {
  get a() {
    return 2;
  }
};

Object.defineProperty(
  myObject,
  "b",
  {
      get: function(){ return this.a * 2 },

      enumerable: true
  }
);

myObject.a;

myObject.b;

////

var myObject = {
  a: 2
};

("a" in myObject);
("b" in myObject);

myObject.hasOwnProperty( "a" );
myObject.hasOwnProperty( "b" );

////

var myObect = {};

Object.defineProperty((
  myObject,
    "a",
    { enumberable: true, value: 2 }
));

Object.defineProperty(
  myObject,
  "b",
  {enumerable: false, value: 3}
);

myObject.propertyIsEnumerable( "a" );
myObject.propertyIsEnumerable( "b" )
;

Object.keys( myObject );
Object.getOwnPropertyNames( myObject );

////

var myArray = [ 1, 2, 3 ];

for (var v of myArray) {
  console.log( v );
}

////

var myArray = [ 1, 2, 3 ];

var it = myArray.[Symbol.iterator]();

it.next();
it.next();
it.next();
it.next();

////


var randoms = {
  [Symbol.iterator]: function(){
    return {
      next: function() {
        return { value: Math.random() };
      }
    };
  }
};

var randoms_pool = [];
for (var n of randoms) {
  randoms_pool.push( n );

  if (randoms_pool.length === 100) break;
}


/** Chapter 4 */

class Vehicle {
  engines = 1

  ignition() {
    output( "Turning on my engine." )
  }

  drive() {
    ignition()
    output( "Steering and moving forward!" )
  }
}

class Car inherits Vehicle {
  wheels = 4

  drive() {
    inherited:drive()
    output( "Rolling on all ", wheels, " wheels!")
  }
}

class SpeedBoat inherits Vehicle {
  engines = 2

  ignition() {
    output( "Turning on my ", engine, " engine." )
  }

  pilot() {
    inherited:drive()
    output( "Speeding through the water with ease!" )
  }
}

/** Chapter 5 */

function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
};

Bar.prototype = Object.create( Foo.prototype );

Bar.prototype.myLabel = function() {
  return this.label;
};

var a = new Bar( "a", "obj a");

a.myName();
a.myLabel();


////

if (!Object.create) {
  Object.create = function(o) {
    function F(){}
    F.prototype = o;
    return new F();
  };
}

////


var anotherObject = {
  cool: function() {
    console.log( "cool!" );
  }
};

var myObject = Object.create( anotherObject );

myObject.doCool = function() {
  this.cool();
};

myObject.doCool();


/** Chapter 6 */

var Task = {
  setID: function(ID) { this.id = ID; },
  outputID: function() { console.log( this.id ); }
};

var XYZ = Object.create( Task );

XYZ = Object.create( Task );

XYZ.prepareTask = function(ID,Label) {
  this.setID( ID );
  this.label = label;
};

XYZ.outputTaskDeails = function() {
  this.outputID();
  console.log( this.Label )''
};

////

var LoginController = {
  errors: [],
  getUser: function() {
    return document.getElementByID( "login_username" ).value;
  },
  getPassword: function() {
    return document.getElementById( "login_password" ).value;
  },
  validateEntry: function(user, pw) {
    user = user || this.getUser();
    pw = pw || this.getPassword();

    if (!(user && pw)){
      return this.failure( "Please enter a username & password!" );
    }
    else if (pw.length < 5) {
      return this.failure( "Password must be 5+ characters!" );
    }

    return true;
  },
  showDialog: function(title,msg){

  },
  failure: function(err){
    this.errors.push( err );
    this.showDialog( "Error", "Login invalid: " + err);
  }
};

var AuthController = Object.create( LoginController );

AuthController.errors = [];
AuthController.checkAuth = function(){
  var user = this.getUser();
  var pw = this.getPassword();

  if (this.validateEntry( user, pw )) {
    this.server( "/check-auth", {
      user: user,
      pw: pw
    })
      .then( this.accepted.bind( this ))
      .fail( this.rejected.bind( this ));
  }
};

AuthController.server = function(url,data) {
  return $.ajax( {
    url: url,
    data: data
  } );
};
AuthController.accepted = function() {
  this.showDialog( "Success", "Authenticated!" )
};
AuthController.rejected = function(err) {
  this.failure( "Auth Failed: " + err );
};

AuthController.checkAuth();

var controller1 = Object.create( AuthController );
var controller2 = Object.create( AuthController );
///////









































































































































