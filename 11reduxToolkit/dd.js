

function check() {
    throw new Error('Param required');
 }
 
 function show(name = check()) {
   console.log(name);
 }
 
 show();
 