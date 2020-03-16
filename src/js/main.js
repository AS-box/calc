'use strict';

import Calc  from './module/calc.js';


window.onload = () =>{
  const calc = new Calc(24, 35);

  calc.result();
}