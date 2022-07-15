const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  let newMatrix = []
  for (i = 0; i < matrix.length; i++) {
    console.log(matrix[i])
    newMatrix = newMatrix.concat(matrix[i])
  }
  console.log(newMatrix)