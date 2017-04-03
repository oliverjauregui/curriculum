var cv=document.querySelector('#canvasOliver'),
  		ct=cv.getContext('2d');
		cv.width=window.innerWidth;
		cv.height=window.innerHeight;
		
		function findPos(obj) {
			var curleft = 0, curtop = 0;
			if (obj.offsetParent) {
				do {
					curleft += obj.offsetLeft;
					curtop += obj.offsetTop;
				} while (obj = obj.offsetParent);
				return { x: curleft, y: curtop };
			}
			return undefined;
		}
		function drawAt(x,y){
			ct.fillStyle='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.random()*0.2+')';
			ct.strokeStyle='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.random()*0.2+')';
			ct.beginPath();
			var count=Math.floor(Math.random()*4);
			while(count--){
				if(Math.random()>0.5)ct.arc(x+50-Math.random()*100,y+50-Math.random()*100,Math.random()*40,Math.random()*Math.PI,Math.random()*Math.PI,true)
				else ct.lineTo(x+50-Math.random()*100,y+50-Math.random()*100, true);
			}
			ct.closePath();
			if(Math.random()>0.5) ct.stroke();
			else ct.fill();
		}
		var last=[0,0],
			destination=[0,0];
		function draw(){
			var reached=true;
			for(var i=0;i<2;i++){
				if(Math.abs(last[i]-destination[i])>50){
					reached=false;
					last[i]+=Math.floor(Math.random()*(destination[i]-last[i])/15);
				}
			}
			if(reached){
				destination=[
					Math.floor(Math.random()*cv.width),
					Math.floor(Math.random()*cv.height)
				]
			}
			drawAt(last[0],last[1]);
		}
		setInterval(draw,10);



