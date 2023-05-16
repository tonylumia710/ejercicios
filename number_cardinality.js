function number_cardinality(N) {
    if(N%10 == 0){
        return 'zero'
    }else if(N%10 == 5){
        return 'five'
    }else if(N%2 === 0 && N%10 !== 0){
        return 'even'
    }else{
        return 'odd'
    }
}
console.log(number_cardinality(88))