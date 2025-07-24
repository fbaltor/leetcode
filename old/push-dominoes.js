/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  let simple = [...dominoes];
  let double = simple.map(updateDominoes);

  while (simple.join('') != double.join('')) {
    simple = double;
    double = simple.map(updateDominoes);
  }

  return double.join('');
};

let updateDominoes = function(piece, index, arr) {
  // If the piece is in the middle
  if (0 < index && index < arr.length - 1) {
    let left = arr[index - 1];
    let right = arr[index + 1];

    return updatePiece(left, piece, right);
  }

  // If we are in the first piece
  else if (index === 0) {
    let left = '.';
    let right = arr[index + 1];

    // If the right piece exists
    if (right) {
      return updatePiece(left, piece, right);
    } else {
      return piece;
    }
  }

  // If we are in the last piece
  else if (index === arr.length - 1) {
    let left = arr[index - 1];
    let right = '.';

    return updatePiece(left, piece, right);
  }
};

let updatePiece = function(left, piece, right) {
  if (left !== 'R') {
    if (right !== 'L') {
      return piece;
    } else {
      if (piece === 'R') {
        return piece;
      } else {
        return 'L';
      }
    }
  } else {
    if (right !== 'L') {
      if (piece === 'L') {
        return piece;
      } else {
        return 'R';
      }
    } else {
      return piece;
    }
  }
};
