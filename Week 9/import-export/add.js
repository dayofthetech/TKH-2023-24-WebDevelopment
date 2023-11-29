import _ from "lodash"

const addNum = (num1, num2) => {
    if(_.isInteger(num1) && _.isInteger(num2)){
        return num1 + num2;
    }
};

export default addNum;

