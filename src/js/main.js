'use strict';

import Calc  from './module/calc.js';


window.onload = () =>{
  const calc = new Calc(54, 54);

  calc.result();
}