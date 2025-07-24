/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

Array.matrix = function(numRows, numColumns, initial) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    let columns = [];
    for (let j = 0; j < numColumns; j++) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }

  return arr;
};

Array.printMatrix = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(''));
  }

  return null;
};

let populate = function(s, initialMatrix, numRows) {
  // Number of characters in a complete 'zig-zag pattern' unit
  const unit = numRows + numRows - 2;
  // Lenght (in 'column' dimension) of a 'zig-zag pattern' unit
  const lengthColumnUnit = 1 + numRows - 2;

  let i = -1;
  while (++i < s.length) {
    console.log('i: ' + i);
    let fullUnits = Math.floor(i / unit);
    let partialUnit = i % unit;
    console.log('q: ' + fullUnits);
    console.log('r: ' + partialUnit);

    let fullColumn = Math.floor(partialUnit / numRows);

    let indexColumn = fullUnits * lengthColumnUnit;
    let indexRow = 0;
    if (fullColumn === 1) {
      indexColumn += 1 + (partialUnit % numRows);
      indexRow = numRows - (partialUnit % numRows);
    } else {
      indexRow = partialUnit;
    }

    console.log('column: ' + indexColumn);
    console.log('row: ' + indexRow);

    initialMatrix[indexRow][indexColumn] = s[i];
    console.log(`letter ${i}: ${s[i]}`);
  }

  return initialMatrix;
};

var convert = function(s, numRows) {
  let matrix = Array.matrix(numRows, 20, '0');

  let populatedMatrix = populate(s, matrix, numRows);

  return populatedMatrix;
};

console.log(Array.printMatrix(convert('PAYPALISHIRING', 3)));
