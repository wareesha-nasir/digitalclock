function showTime(){
    let date=new Date();
    let hours=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let formathours= converthours(hours)

    hours=checktime(hours)
    min=addzero(min)
    sec=addzero(sec)
hours=addzero(hours)

document.getElementById('clock').innerHTML=`${hours} : ${min} : ${sec}: ${formathours}`
}


function converthours(time){
let format="A.M"
if(time >= 12){
    format="P.M";
}
return format;
}

function checktime(time){
    if(time > 12){
        time=time-12;
    }
    if(time == 0){
        time=12;
    }
    return time;
}

function addzero(time){
    if(time<10){
        time="0"+time;
    }
    return time;
}

showTime();
setInterval(showTime ,1000)