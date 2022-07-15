function getMathResult(expression) {
    let mathSigns = [">", "<", "=", "+", "-", "*", "/"]
    if (expression.length > 3) {
        expression = expression.filter(item => !!Number(item) || mathSigns.includes(item))
    }    
    if (expression.length === 3) {
        let value1 = Number(expression[0])
        let value2 = Number(expression[2])    
        if (value1 && value2 && mathSigns.indexOf(expression[1]) >= 0) {
            switch (expression[1]) {
                case mathSigns[0]:
                    console.log(value1 > value2)
                    break
                case mathSigns[1]:
                    console.log(value1 < value2)
                    break
                case mathSigns[2]:
                    console.log(value1 === value2)
                    break
                case mathSigns[3]:
                    console.log(value1 + value2)
                    break
                case mathSigns[4]:
                    console.log(value1 - value2)
                    break
                case mathSigns[5]:
                    console.log(value1 * value2)
                    break
                case mathSigns[6]:
                    console.log(value1 / value2)
                    break
                } 
        } else {
            console.log('Ошибка')
        }
    }  else {
        console.log('Ошибка')
    }
}
getMathResult(["100", "hello", "javascript", , "help200", "+", 4]); // ["100", "+", 4]
getMathResult(["200", "+", 300]); // 500
getMathResult(["20", "-", "5"]); // 15
getMathResult([100, "/", 100]); // 1
getMathResult([2, "-", 2]); // 0
getMathResult(["5", ">", "10"]); // false
getMathResult(["5", "<", "10"]); // true
getMathResult(["1", "=", 1]); // true
getMathResult(["1", "**", 1]); // 'Ошибка'