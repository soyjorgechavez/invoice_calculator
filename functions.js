/*
Calculadora de montos en factura.
1. Obtener monto.
2. Seleccionar IVA inc o sin IVA.
3. Calcular base grabable y el IVA.
4. Mostrar Monto, IVA Y Total.

FIN */

var amount = 2500;
var mode = "after_tax";
var tax_rate = 16;
var tax = tax_rate / 100;
var taxin = 1 + tax;

function calcInvoice(pay,mod){
	  if(mod == "after_tax"){
		      let primitive = pay / taxin;
		      let iva = primitive * tax;
		      let total = primitive + iva;
		      console.log (primitive);
		      console.log (iva);
		      console.log (total);
		    }else if(mod == "before_tax"){
			        let iva = pay * tax;
			        let total = pay + iva;
			        console.log (pay);
			        console.log (iva);
			        console.log (total);
			      }
}

calcInvoice(amount,mode);
