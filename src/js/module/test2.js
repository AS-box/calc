function func (x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

const array = [1, 2, 3]
func(...array); // => 1
                // => 2
                // => 3