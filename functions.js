var tax_rate = 16;
var tax = tax_rate / 100;
var taxin = 1 + tax;

function calcInvoice(){
	let amount = parseFloat(document.getElementById('monto').value);
	let mode = document.getElementById("mode").value;
	
	if(amount != null && !isNaN(amount) && amount >= 0){
		if(mode == "after_tax"){
		      let primitive = amount / taxin;
		      let iva = primitive * tax;
		      let total = primitive + iva;
		      let result = document.getElementById("result");
			  result.innerHTML ="<ul><li>Monto facturado: $"+primitive.toFixed(2)+"</li><li>IVA: $"+iva.toFixed(2)+"</li><li>Total: $"+total.toFixed(2)+"</li></ul>";
		    }else if(mode == "before_tax"){
			  let iva = amount * tax;
			  let total = amount + iva;
			  let result = document.getElementById("result");
			  result.innerHTML ="<ul><li>Monto facturado: $"+amount.toFixed(2)+"</li><li>IVA: $"+iva.toFixed(2)+"</li><li>Total: $"+total.toFixed(2)+"</li></ul>";
			}
	}
	
	
				  
}


