const str = '((((5-3))))))';
const leftArr = [];
const rightArr = [];
const centerArr = [];
let newStr = '';

function truth(str) {
str.split('').forEach(item => {
if(item === '(')leftArr.push(item);
else if(item === ')')rightArr.push(item);
else centerArr.push(item);
});
if(leftArr.length === rightArr.length)return true;
else makeNewStr();
}

function makeNewStr() {
    const diff = leftArr.length - rightArr.length;
    if (diff > 0) {
      leftArr.pop();
        makeNewStr();
        }
    else if(diff < 0) {
        rightArr.pop();
        makeNewStr();
        
    }
    else {
  newStr = leftArr.join('') + centerArr.join('') + rightArr.join('');
    }
  return newStr;
}
truth(str);
console.log(newStr);


