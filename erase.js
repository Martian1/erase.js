var erase = function (id){
	var canvas = document.getElementById(id);
	var ctx=canvas.getContext('2d');
	var offsetX = canvas.offsetLeft;
    var offsetY = canvas.offsetTop;
    var mousedown = false;
	
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fill();
	ctx.globalCompositeOperation = 'destination-out';

    function eventDown(e){
        e.preventDefault();
        mousedown=true;
    }

    function eventUp(e){
        e.preventDefault();
        mousedown=false;
    }

    function eventMove(e){
    	e.preventDefault();
        if(mousedown) {console.log(e);
            if(e.changedTouches){
                e=e.changedTouches[e.changedTouches.length-1];
            }
            var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
            var y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 20);
            ctx.fill();
        }
    }
    
    canvas.addEventListener('touchstart', eventDown);
    canvas.addEventListener('touchend', eventUp);
    canvas.addEventListener('touchmove', eventMove);
    canvas.addEventListener('mousedown', eventDown);
    canvas.addEventListener('mouseup', eventUp);
    canvas.addEventListener('mousemove', eventMove);
	 
}