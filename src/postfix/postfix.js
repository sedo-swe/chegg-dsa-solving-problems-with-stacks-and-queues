const Stack = require("../lib/stack");

const precedence = {
    "+" : 0,
    "-" : 0,
    "*" : 1,
    "/" : 1
};

const postfix = (expression) => {
    const s = new Stack();
    let result = [];

    expression = expression.replace(/\s/g, "");

    expression.split("").forEach((character) => {
        if (character === "(")
            s.push(character);
        else {
            if (character === ")") {
                let t = s.pop();
                while (t !== "(") {
                    result.push(t);
                    t = s.pop();
                }
            } else {
                if ("+-*/".includes(character)) {
                    if (!s.top ||
                        s.top.value === "(" ||
                        precedence[character] > precedence[s.top.value]) {
                            s.push(character);
                    } else {
                        while (s.top && precedence[s.top.value] >= precedence[character]) {
                            result.push(s.pop());
                        }

                        s.push(character);
                    }
                } else {
                    result.push(character);
                }
            }
        }
    });

    while (s.top) {
        result.push(s.pop());
    }
    
    return result.join(" ");
};

module.exports = postfix;
