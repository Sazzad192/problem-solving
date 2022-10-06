const n=4;
let string='';

for(let row=1; row<=5; row++){
    for(let col=1; col<=row; col++){
        string = string + '*';
    }
    string += "\n";
}

console.log(string);