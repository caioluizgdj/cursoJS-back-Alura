const palindromo = (palavra) => {
    const inverso = palavra.split('').reverse().join('');
    if(inverso === palavra){
        return `A palavra ${palavra} é palíndroma!`;
    }else{ 
        return `A palavra ${palavra} NÃO É palíndroma!`;
    }
}

console.log(palindromo("arroz"));
