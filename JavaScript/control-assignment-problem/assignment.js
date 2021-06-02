
/* JS Hoisting  */
let authUser = true;
console.log('var:xyz due to hoisting',xyz);
ifBlock : {
    if(authUser){
        var xyz = 'abc';
        console.log('var:shoppingCart in block',shoppingCart);
    }
}
console.log('var:shoppingCart due to hoisting',shoppingCart);
console.log('functn due to hoisting',varTest);

var shoppingCart = ['Eggs', 'Breads' , 'Wines'];
function varTest() {
    var hobbies = ['Music', 'Playing'];
    var hobbies = ['Movies', 'Dating'];
    console.log('var:hobbies inside fuction',hobbies);
    return hobbies;
}

