v_rate = document.getElementById("v_Rate").value;
if(v_rate>10 && v_rate<=100){
    document.getElementById("danger_grade").innerHTML = "초고위험";
}
else if(v_rate>1 && v_rate<=10){
    document.getElementById("danger_grade").innerHTML = "고위험";
}
else if(v_rate>0.1 && v_rate<=1){
    document.getElementById("danger_grade").innerHTML = "고위험(경계)";
}
else if(v_rate>0.05 && v_rate<=0.1){
    document.getElementById("danger_grade").innerHTML = "중위험";
}
else if(v_rate>0.01 && v_rate<=0.05){
    document.getElementById("danger_grade").innerHTML = "중위험(경계)";
}
else if(v_rate>0.005 && v_rate<=0.01){
    document.getElementById("danger_grade").innerHTML = "저위험";
}
else if(v_rate>0.0001 && v_rate<=0.005){
    document.getElementById("danger_grade").innerHTML = "저위험(경계)";
}
else if(v_rate>=0 && v_rate<=0.0001){
    document.getElementById("danger_grade").innerHTML = "초저위험";
}