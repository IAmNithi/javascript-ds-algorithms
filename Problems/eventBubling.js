process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = '';
process.stdin.on('data', function (chunk) {
  stdin += chunk;
}).on('end', function() {
  var lines = stdin.trim().split('\n');
  var time = lines[0].split(" ")[0]
  var debounceTime = lines[0].split(" ")[1]
  
  var _fh,_ev;
  var addEventListener = (ev,fh)=>{_ev = ev;_fh = fh;}
  var runner = ()=>{
    var i = 0
    var timer = setInterval(()=>{
      i+=100;
      if(i == 2000) clearInterval(timer);
      process.stdout.write(`tick ${i}ms,\n`)
      if(i<time){
        _fh(_ev, i);
        process.stdout.write(`event ${_ev},\n`)
      }
    }, 100);
  }
  
  /////////////////////////////////////////////////////////////
  /////////////    Put your code here . ///////////////////////
  
  function foo(){
    process.stdout.write(`event handler,\n`)
  }
  
  addEventListener('scroll', foo);
  
  /////////////////////////////////////////////////////////////
  runner()
});