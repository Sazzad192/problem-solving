function timeConversion(s){
    let ampm = s.charAt(8);
    let militaryHour = "";

    if(ampm == 'A'){
        if(s.substring(0,2) == '12'){
            militaryHour = '00';
        }
        else{
            militaryHour = s.substring(0,2);
        }
    }

    else{
        if(s.substring(0,2) == '12'){
            militaryHour = s.substring(0,2);
        }
        else{
            militaryHour = parseInt(s.substring(0,2))+12;
        }
    }
    console.log(militaryHour + s.substring(2,8));
}

let time = '08:05:45PM';
timeConversion(time);