var exist = document.getElementById('existing'), 
		create = document.getElementById('create'), 
		canvas = document.getElementById('canvas'),
		setDraw = document.getElementById('setDraw'),
		threed = document.getElementById('threed'),
		setFilter = document.getElementById('setFilter');

		var b,c;

		var newDraw = function(c2,c3, v){
			/*
			 * this is mapped to the canvas object
			 * c2 is the 2d canvas context
			 * c3 is the webgl context
			 * v is the video element
			 */
			c2.drawImage(v, 0,0, this.width / 2, this.height / 2);
		};

		//you can chain filters together
		var newFilter = [['sepia',[1]],['vignette',[0.5,0.7]]];

		exist.addEventListener('click', function(){
			var e = wcvj.webcam('video');
		});

		create.addEventListener('click', function(){
			var a = wcvj.webcam('a');
			create.parentNode.insertBefore(a.video, create.previousSibling);
		});

		canvas.addEventListener('click', function(){
			b = wcvj.webcam('b', {canvas: true});
			canvas.parentNode.insertBefore(b.canvas, canvas.previousSibling);
		});

		setDraw.addEventListener('click', function(){
			b.setDraw(newDraw);
		});

		threed.addEventListener('click', function(){
			c = wcvj.webcam('c', {canvas: true, glfx: true});
			c.setFilter([['ink',[0.4]]]);
			threed.parentNode.insertBefore(c.canvas, threed.previousSibling);
		});

		setFilter.addEventListener('click', function(){
			c.setFilter(newFilter);
		});