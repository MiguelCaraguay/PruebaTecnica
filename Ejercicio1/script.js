
function foo(day, month, year){
    const actualDate = new Date();
    const actualDay = parseInt(actualDate.getDate());
    const actualMonth = parseInt(actualDate.getMonth())+1;
    const actualYear = parseInt(actualDate.getFullYear());

    let yearAge = actualYear - year;
    let monthAge = 0;

    if (actualMonth < month) {
        yearAge--;
        monthAge = (12 - month) + actualMonth;
    }else if (actualMonth === month) {
        if (actualDay < day) {
            yearAge--;
            monthAge = 11;
        }
    }else{
        if (actualDay < day) {
            monthAge = actualMonth - month - 1;
            console.log(monthAge);

        }else{
            monthAge = actualMonth - month;
        }
    }

    let message = "Tu edad es: "+ yearAge +" años con "+ monthAge +" meses";
    return message;
}

console.log(foo(25,1,2002));