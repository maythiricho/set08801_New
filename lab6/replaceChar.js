
function replace(stringA, start, replacement)
{
    //let  target= stringA.slice(start,start+1);
    return stringA.slice(0,start)+replacement+stringA.slice(start+1,stringA.length+1);
    
}


function replaceCharNext(word)
{   let chars ="abcdefghijklmnopqrstuvwxyz";
    let wordLength = word.length;
   // console.log(`word length ${wordLength}`);
    let old = word;
    //let wordArr = new Array(wordLength);
   // console.log(`${word}  ${wordLength}`);
    //alert(`word length  ${word} ${wordLength}`);
    for(let i=0; i<wordLength; i++)
    {   
        let index = chars.indexOf(word[i]);// getting current word
        
        console.log(` char in alphabet ${chars.charAt(index+1)}`); // outputing to console.
        
        word = replace(word,i,chars.charAt(index+1));
        console.log(`replacing after ${word}`)
    }
   // alert(`old  ${old}  manipulated new  ${word}`);
console.log(`old  ${old}  manipulated new  ${word}`);
}
replaceCharNext("kfd");