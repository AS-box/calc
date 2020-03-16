'use strict';

class Calc{
  constructor(leftNum, rightNum){
    this.leftNum = leftNum;
    this.rightNum = rightNum
  }
  get result(){
    this.increment()
  }
  increment(){
    console.log(this.leftNum + this.rightNum)
  }
}
export default Calc;