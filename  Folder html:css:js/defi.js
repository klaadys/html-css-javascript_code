const voyal = ['a', 'e', 'i', 'o', 'u', 'y']
    let sentence= 'je ne connais pas abcde'
    magic= false
    sentence.replace("'",' ')
    sentence = sentence.toLowerCase()
    const words= sentence.split(' ');
    words.map(word => {
        if(word.length >= 5 && word.length<=7) {
            const alph1 =  word.charCodeAt(0) // 097
            const alph2 = word.charCodeAt(1) // 114
            if(alph1 + 1 == alph2) {
               const lastChar= word.slice(-1);
               if (voyal.includes(lastChar)) 
                    console.log(`${word} is magic`)
            }
        } 
    })