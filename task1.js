let s = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;

sArr = s.split(/[.?]/);
// console.log(sArr);

outputArr = [];
let count, elementCopy;
sArr.forEach((element) => {
    elementCopy = element;
    count = element.trim().split(" ").length;
    if (count > 3) {
        outputArr.push(elementCopy);
    }
});

// console.log(outputArr);
outputArr1 = [];
outputArr.forEach((element) => {
    wordArr = [];
    wordArr = element.trim().split(" ");
    for (let i = 0; i < wordArr.length; i++) {
        if (!isNaN(wordArr[i])) {
            let c = wordArr[i].length
            wordArr[i] = "X".repeat(c);
        }
    }
    outputArr1.push(wordArr.join(" "));
});

for (let i = 0; i < outputArr1.length; i++) {
    console.log((i + 1) + ". " + outputArr1[i]);
}