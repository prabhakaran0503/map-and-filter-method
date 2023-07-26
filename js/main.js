 var a=[12,8,5,20,25];
 document.write("a=["+a+"]"+"<br>");
 var b=["mango","banana","apple"];
 document.write("b="+"["+b+"]"+"<br>"+"<br>");
 document.write("map Method"+"<br>")
 var c=[
 {
	 id:1,
	 name:"pen",
	 price:10,
	 img:"img/img-1.jpg"
	 
 },
 {
	 id:2,
	 name:"pen",
	 price:20,
	 img:"img/img-1.jpg"
	 
 },
 {
	 id:3,
	 name:"pen",
	 price:30,
	 img:"img/img-1.jpg"
	 
 },
 {
	 id:4,
	 name:"pen",
	 price:40,
	 img:"img/img-1.jpg"
	 
 },
 {
	 id:5,
	 name:"pencil",
	 price:5,
	 img:"img/img-2.jpg"
	 
 },
 {
	 id:6,
	 name:"pencil",
	 price:10,
	 img:"img/img-2.jpg"
	 
 },
 ]
 //document.write("c="+"["+c+"]"+"<br>")
 
 //for Each Even Number
 
 a.forEach(
 function(e){
	 if(e%2==0){
		 console.log(e);
	 }
 }
 )
 
 //map use uppercase
 var output=b.map(function(e){
 return e.toUpperCase();
 })
 document.write(output+"<br>"+"<br>");
 
 //filter 
 var even=a.filter(
	function(e){
		return e%2==0;
	}
 )
 document.write("filter method in Even Numbers"+"<br>")
 document.write(even)
 
 