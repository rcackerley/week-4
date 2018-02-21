// var printNumbers = function (num1, num2) {
//     while (num1 <= num2) {
//         console.log(num1);
//         num1++;
//     }
// }

// var printNumbers = function (num1, num2) {
//     for (var i = num1; i <= num2; i++) {
//         console.log(i);
//     }
// }
// printNumbers(1, 10);

// var printSquare = function (num) {
//     for (i = 0; i < num; i++) {
//         console.log('*'.repeat(num));
//     }
// }
// printSquare(5);

// var printBox = function (x, y) {
//     for (i = 0; i < y; i++) {
//         if (i == 0 || i == y - 1) {
//             console.log('*'.repeat(x));
//         } else {
//             console.log('*' + ' '.repeat(x - 2) + '*');
//         }
//     }
// }
// printBox(6,4)

// var printBanner = function (text) {
//     i = 0;
//     while (i < 3) {
//         if (i == 0 || i == 2) {
//             console.log('*'.repeat(text.length + 2)); 
//             i++;
//         } else {
//             console.log('*' + text + '*');
//             i++;
//         }
//     }
// }
// printBanner('Welcome to Digital Crafts')

// var factors = function(num) {
//     var arrayFactors = []
//     for (i=1; i <= num; i++) {
//         if (num % i == 0) {
//             arrayFactors.push(i);
//         }
//     }
//     console.log(arrayFactors);
// }

// factors(27);

// var cipher = function (message, offset) {
//     var key = 'abcdefghijklmnopqrstuvwxyz';
//     message = message.toLowerCase()
//     key.split('');
//     var newMessage = [];
//     for (i = 0; i < message.length; i++) {
//         for (j = 0; j < key.length; j++) {
//             if (message[i] == key[j]) {
//                 if (j - offset < 0) {
//                     newMessage.push(key[(j - offset) + 26]);
//                     // console.log(key[j])
//                     // console.log(key[(j - offset) + 26]);
//                 } else if (j - offset >= 0) {
//                     newMessage.push(key[j - offset]);
//                     // console.log(key[j])
//                     // console.log(j)
//                     // console.log(key[j - offset]);
//                 }
//             }
//         }
//         if (message[i] == ' ') {
//             newMessage.push(message[i]);
//             // console.log(message[i]);
//         } 
//     }
//     console.log(newMessage.join(''));
//     return(newMessage.join(''));
// }

// cipher('Robby is the most wonderful', 13)

// var decipher = function (message, offset) {
//     var key = 'abcdefghijklmnopqrstuvwxyz';
//     key.split('');
//     var newMessage = [];
//     for (i = 0; i < message.length; i++) {
//         for (j = 0; j < key.length; j++) {
//             if (message[i] == key[j]) {
//                 if (j + offset > 25) {
//                     newMessage.push(key[(j + offset) - 26]);
//                     console.log(key[(j + offset) - 26]);
//                 }
//                 else {
//                     newMessage.push(key[j + offset]);
//                     console.log(key[j + offset]);
//                 }
//             }
//         }
//         if (message[i] == ' ') {
//             newMessage.push(message[i]);
//             // console.log(message[i]);
//         } 
//     }
//     console.log(newMessage.join(''));
// }

// decipher(cipher('Robby is the most wonderful', 13), 13)

// var leetspeak = function (message) {
//     message = message.toLowerCase()
//     for (i=0; i< message.length; i++) {
//         if (message[i] == 'a') {
//             message = message.replace('a', 4); 
//         } else if (message[i] == 'e') {
//             message = message.replace('e', 3);
//         } else if (message[i] == 'g') {
//             message = message.replace('g', 6);
//         } else if (message[i] == 'l') {
//             message = message.replace('l', 1);
//         } else if (message[i] == 'o') {
//             message = message.replace('o', 0);
//         } else if (message[i] == 's') {
//             message = message.replace('s', 5);
//         } else if (message[i] == 't') {
//             message = message.replace('t', 7);
//         } 
        
//     }
//     console.log(message);
// }

// leetspeak('Leet');

// var longLongVowels = function (message) {
//     var i=0;
//     var timer = message.length
//     while (i < timer) {
//         if (message[i] == message[i + 1]) {
//             message = message.replace(message[i], message[i].repeat(2));
//         }
//         i++;
//     }
//     console.log(message);
// }

// longLongVowels('good')

// var sumNumbers = function (list) {
//     var sum = 0;
//     for (i = 0; i < list.length; i++) {
//         sum = list[i] + sum;
//     }
//     console.log(sum);
// }

// sumNumbers([1, 2, 3, 4, 5, 6])


// var positiveNumbers = function (list) {
//     var positives = [];
//     for (i=0; i< list.length; i++) {
//         if (list[i] % 2 == 0) {
//             positives.push(list[i]);
//         }
//     }
//     console.log(positives);
// }

// positiveNumbers([1, 2, 3, 4, 5, 6])


// var example = [
//     [[1, 3],
//      [2, 4]],
     
//      [[5, 2],
//      [1,0]]
// ]

// var matrixAdd = function (matrix) {
//     var newMatrix = [
//         [
//             [],[]
//         ],
//         [
//             [],[]
//         ]
//     ]
//     for (i = 0; i < matrix.length - 1; i++) {
//         for (j = 0; j < matrix.length; j++) {
//             for (k = 0; k < matrix.length; k++) {
//                 newMatrix[i][j][k] = matrix[i][j][k] + matrix[i + 1][j][k];
//             }
//         }
//     }
//     console.log(newMatrix)
// }

// matrixAdd(example)

var example1 = [
    [2,4],
    [3,4]
]

var example2 = [
    [5,2],
    [3,1]
]

var matrixMultiply = function (matrix, matrix2) {
    var productMatrix = []
    var answer = [[],[]]
    for (r=0; r < 4; r++) {
        var entry = 0
        for (i = 0; i < matrix.length -1; i++) {
            for (j = 0; j < matrix.length; j++) {
                if (productMatrix.length == 0) {
                    entry = entry + matrix[i][j] * matrix2[j][i];
                } else if (productMatrix.length == 1) {
                    entry = entry + matrix[i][j] * matrix2[j][i + 1];
                } else if (productMatrix.length == 2) {
                    entry = entry + matrix[i + 1][j] * matrix2[j][i];
                } else if (productMatrix.length == 3) {
                    entry = entry + matrix[i + 1][j] * matrix2[j][i + 1];
                }
            }
            productMatrix.push(entry);
        }
    }
    z=0;
    for (k=0; k<productMatrix.length-2; k++) {
        for (l=0; l<productMatrix.length-2; l++) {
            answer[k][l] = productMatrix[z]
            z++;
        }
    }
    console.log(answer)
}
matrixMultiply(example1, example2)

// var rockPaperScissors = function (p1, p2) {
//     if (p1 == 'rock') {
//         p1 = 1;
//     } else if (p1 == 'paper') {
//         p1 = 2;
//     } else if (p1 == 'scissors') {
//         p1 = 3;
//     }
//     if (p2 == 'rock') {
//         p2 = 1;
//     } else if (p2 == 'paper') {
//         p2 = 2;
//     } else if (p2 == 'scissors') {
//         p2 = 3;
//     }
//     if (p1 == p2) {
//         console.log('Draw')
//     } else if ((p1 == 3 || p2 == 3) && (p1 == 1 || p2 == 1)) {
//         if (p1 == 1) {
//             console.log('P1 Wins!')
//         } else {
//             console.log('P2 Wins!')
//         }
//     } else if (p1 > p2) {
//         console.log('P1 Wins!')
//     } else {
//         console.log('P2 Wins!')
        
//     }
// }

// rockPaperScissors('paper', 'scissors')

// var ticTacToe = function (board) {
//     winner = false
//     var priorSpace
//     for (i=0; i < board.length; i++) {
//         for (j=0; j < board[i].length; j++) {
            
//             if (board[i][j] == priorSpace) {
//                 winner = true
//                 console.log(priorSpace)
//                 console.log(winner)
//             } else {
//                 winner = false;
//             }
//             priorSpace = board[i][j]
//         }
//         if (winner == true) {
//             console.log(priorSpace)
//             break
//         }
//     }
// }

// ticTacToe([
//     ['O', 'X', 'O'],
//     ['X', 'X', 'X'],
//     [null, 'X', null]
//     ])