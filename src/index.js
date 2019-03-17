module.exports = function check(str, bracketsConfig) {
    // your solution
    function getNewStr(oldStr) {
        let newStr=[];
        for (let i = 0; i <oldStr.length ; i++) {
            if ((conf.indexOf(oldStr[i])) % 2 === 0) {
                if (oldStr[i + 1] === conf[(conf.indexOf(oldStr[i])) + 1]) {
                    i++;
                } else {
                    newStr.push(oldStr[i]);
                }
            } else {
                newStr.push(oldStr[i]);
            }
        }
        return newStr;
    }
    let conf=[];
    for (let i = 0; i <bracketsConfig.length ; i++) {
        for (let j = 0; j <bracketsConfig[i].length ; j++) {
            conf.push(bracketsConfig[i][j]);
        }
    }
    let arrOfStr;
    let controlArr;
    //console.log(str);
    arrOfStr=getNewStr(str);
   while (arrOfStr.length!==0){
        controlArr=arrOfStr;
        arrOfStr=getNewStr(arrOfStr);
        if (controlArr.length===arrOfStr.length) {break;}

   }
    // console.log('newStr');
    // console.log(arrOfStr);
    return arrOfStr.length === 0;
}
