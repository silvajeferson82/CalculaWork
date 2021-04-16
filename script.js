form.addEventListener('submit', function (event) {
  event.preventDefault();
  //Captura de eventos.
  const nome = document.getElementById('nome').value;
  const salarioMes = parseFloat(document.getElementById('salario').value);
	const horasMes = parseInt(document.getElementById('horas').value);
	const qtdDependentes = parseInt(document.getElementById('dependentes').value);
  
  //Soma de horas e dependentes ao salario mensal
	const valorHoras= horasMes*12.00;
	const valorDependentes = qtdDependentes*40.00;
	const salarioBruto = (salarioMes + valorHoras + valorDependentes).toFixed(2);

	//Calculo de descontos
	const inss = (salarioBruto*0.085).toFixed(2);
	const ir = (salarioBruto*0.05).toFixed(2);
	const salarioLiquido = (salarioBruto - inss) - ir ;

	console.log(salarioMes,salarioBruto,inss,ir,salarioLiquido);

	const resultado = `Funcionario: ${nome}<br>
	Salario Bruto: R$${salarioBruto}<br>
	Valor INSS: R$${inss}<br>
	Valor IR: R$${ir}<br>
	Salario Liquido: R$${salarioLiquido}`;
	
	mostraValor(resultado);
	
});

//Criar paragrafo no HTML
function criaP(){
const p = document.createElement('p');
return p;
}

//Aplica um paragro no HTML com as informações de Saída.
function mostraValor(msg){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  const p = criaP();
  p.classList.add('resultado','form-control');
  p.innerHTML = msg;
  resultado.appendChild(p);
}