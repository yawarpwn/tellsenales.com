class Calculator {
    method = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }

    calculate(str) {
        const split = str.split('')
        const a = split[0]
        const b = split[2]
        const op = split[1]

        return method[op](a, b)
    }
}
