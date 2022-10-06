let star = '';

for(let row=5; row>=1; row--){
    for(let col=row; col>=1; col--){
        star += '*';
    }
    star += '\n';
}

console.log(star);