function longest(strArray)
{ let longestWord ='';
    for(let i=0; i<strArray.length; i++)
    {
        if(strArray[i].length> longestWord.length)
        {
            longestWord = strArray[i];
        }
    }
    return longestWord;
}

let long_word = longest(['aye aye','ant min nyo','khine khant ye wint','kaung htet san','May Thiri Cho matmon']);
alert(long_word);