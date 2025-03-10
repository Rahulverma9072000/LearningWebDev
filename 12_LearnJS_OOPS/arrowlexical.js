let obj = {
	x : 1,
	y : 2,
	fn : function(){
		x = 3;
		y = 4;
		const printVariables = () =>{
			console.log(this.x,this.y);
			console.log(x,y);
		}
		printVariables()
	}
}
obj.fn()