let nome1 = prompt("Digite seu primeiro nome:")
let nome2 = prompt("Agora, o segundo nome:")
let acronismo = nome1 + " " + nome2



let sigla = acronismo.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')

console.log("\nOlá: " + acronismo,   "\nSua sigla é: " + sigla.toUpperCase());
