//  QUESTION : you want to print each element of a 2D array (matrix) in a tabular format.   
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];

    for(let i=0 ;i<matrix.length;i++){
    for(let j=0 ;j<matrix[i].length;j++){
        console.log(matrix[i][j]);
    }}