function calculatAge() {

    let zeros = 0;
    let strs = 0;
    let countables = 0;
    let uncountables = 0;
    let nulls = 0;

    let array = [10, 23, 47,'!', 96, 0, 54, 2, null];
    for (let i = 0; i < array.length; i++) {

    if (typeof array[i]  == 'string') {
        nulls++
    } else if (array[i] == 0) {
        zeros++;
    } else if (array[i]  === null) {
        strs++;
    }else if (array[i] % 2 === 0) {
        countables++;
    }else {
        uncountables++;
    }
}
        
    console.log(`Нулей - ${zeros} \n Строк - ${strs} \n Нуллов - ${nulls} \n Четных - ${countables} \n Нечетных - ${uncountables}`)
      }
      calculatAge()
    