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
//     var key = 'abcdefghijklmnopqrstubwxyz';
//     key.split('');
//     var newMessage = [];
//     for (i = 0; i < message.length; i++) {
//         for (j = 0; j < key.length; j++) {
//             if (message[i] == key[j]) {
//                 if (j - offset < 0) {
//                     newMessage.push(key[(j - offset) + 26]);
//                     console.log(key[(j - offset) + 26]);
//                 }
//                 else {
//                     newMessage.push(key[j - offset]);
//                     console.log(key[j - offset]);
//                 }
//             }
//         }
//         if (message[i] == ' ') {
//             newMessage.push(message[i]);
//             console.log(message[i]);
//         } 
//     }
//     console.log(newMessage.join(''));
// }

// cipher('Robby is the most wonderful', 13)

var decipher = function (message, offset) {
    var key = 'abcdefghijklmnopqrstubwxyz';
    key.split('');
    var newMessage = [];
    for (i = 0; i < message.length; i++) {
        for (j = 0; j < key.length; j++) {
            if (message[i] == key[j]) {
                if (j - offset < 0) {
                    newMessage.push(key[(j - offset) + 26]);
                    console.log(key[(j - offset) + 26]);
                }
                else {
                    newMessage.push(key[j - offset]);
                    console.log(key[j - offset]);
                }
            }
        }
        if (message[i] == ' ') {
            newMessage.push(message[i]);
            console.log(message[i]);
        } 
    }
    console.log(newMessage.join(''));
}