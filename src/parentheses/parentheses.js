const Stack = require("../lib/stack");

const match = (expression) => {
    const s = new Stack();
    for (let i=0; i<expression.length; i++) {
        if(expression[i] === "(")
            s.push("(");
        else {
            if (expression[i] === ")") {
                if (s.top != null) {
                    s.pop();
                } else {
                    return false;
                }
            }
        }
    }
    if (s.top == null)
        return true;
    else
        return false;
};

module.exports = match;
