var names=[];
var nam=[];
var products=[];
var totalprice;
var product=$(".ProductName").val();
var amount=$(".ProductPrice").val();
var producted=$(".Description").val();
$(".buttonOne").click(function(){

var priceNum= parseInt($(".ProductPrice").val());
names.push(product);
nam.push(amount);
$(".items").append("<p>"+product+" "+priceNum+"</p>");
console.log(priceNum);

var priceNumber= parseInt($(".Description").val());
names.push(producted);
nam.push(amount);
$(".items").append("<p>"+producted+" "+priceNumber+"</p>");
console.log(priceNumber);



$(".Description").html(nam.length);
totalprice=0;
nam.forEach(function(sum){
totalprice=totalprice+parseInt(sum);
});
});
$(".totalcost").html(totalprice);

