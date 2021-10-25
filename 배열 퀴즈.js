const arr = ['가', '라', '다', '라', '마', '라', '라', '다', '라', '마', '라'];

let index = arr.indexOf('라')
while(index > -1){ 
    arr.splice(index, 1);
}
console.log(arr); 

