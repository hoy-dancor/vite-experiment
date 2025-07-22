export const threeAndFive = (upperLimit) => {
    if(upperLimit < 3){
        return 0
    }

    let aggregate = 0
    for(let i = 1; i <= upperLimit; i++){
        if(i % 3 === 0 || (i % 5 === 0 && i % 3 !== 0)){
            aggregate += i
        }
    } 
    return aggregate
}