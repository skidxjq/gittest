var arr = ['a', 'b', 'c', 'd', 'a', 'a', 'a', 'b'];
var str = arr.join(""); //将原始数组转换为字符串。
var index = 0; //为了最后输出方便记录的标志。
var max = 0; //max用来存放字符出现最多的次数。
var result = ""; //result用来存放返回的结果。
while (str != '') { //用while遍历整个字符串。
    var oldStr = str; //用oldStr存放每次没有替换之前的字符串。
    var getStr = str.substr(0, 1); //获取字符串的第一位置的字符。
    str = str.replace(new RegExp(getStr, 'g'), ''); //用正则表达式把一个位置的字符去掉。
    if (oldStr.length - str.length > max) {
        // 如果没有替换之前的长度减去替换之前的长度，如果它们的差值大于原来的max，则将现在的长度差赋值为max.
        max = oldStr.length - str.length;
        result = "数组中出现最多的字符为" + getStr + ":共" + max + "次。";
        mark = getStr; //用mark记录下出现次数最多的字符。
    }
}
document.write("原数组为" + "[" + arr + "]" + "</br>");
document.write(result + "</br>");
// 将数组进行遍历，如果所在索引的字符等于mark的值就输出该索引。
for (var i = 0; i < arr.length; i++) {
    if (mark == arr[i]) {
        index = index + 1;
        document.write(mark + "第" + index + "次出现的位置的索引为" + i + "</br>");
    }
}

alert("abcd **dev1");