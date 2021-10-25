/*for(let i = 0; i <= 99; i++){
    console.log(i+1)
}*/

for(let i = 0; i<= 9; i ++){
    for(let j = 0; j <= 0; j++){
        if((i % 2 == 0) || (j % 2 == 0)) continue;
        console.log(i , '*' , j , '=' , i * j);  
    }
}