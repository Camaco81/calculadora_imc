const {createApp}=Vue

createApp({
	data(){
		return{
			titulo:"Calculadora de IMC",
			altura:"",
			peso:"",
			resultado:"",


		}
	},
	methods:{
		calculadoraIMC(){
		var pesoKg=parseFloat(this.peso);
		var alturaCm=parseFloat(this.altura);
		var alturaM=alturaCm/100;
		var imc=Math.round(pesoKg/(alturaM*alturaM));
		console.log(imc);
		
		if (imc<18.5) {
			this.resultado="Estas muy delgado";
		}else if(imc<25){
			this.resultado="Estas saludable";
		}else{
			this.resultado="Estas con sobre peso";
		}
		
	}
}
}).mount("#calculadoraIMC")