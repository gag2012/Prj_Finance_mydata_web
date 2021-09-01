var job = "";
var sold = "";
var jobinfo = "";
var rate = "";
var insurance = "";
var insurance2 = "";

var foot_dong="";
var foot_grade="";
var foot_rate="";

var rent_dong="";
var rent_grade="";

var virus_grade=4;

var salary_job="";
var salary_m1="";
var salary_m2="";

var year_fee_insurance = 0;
var month_fee_insurance = 0;


function btn_isr_click(){
    var job_select = document.getElementById("job_select").value;
    var duration_select = document.getElementById("duration_select").value;
    var location_select = document.getElementById("location_select").value;

    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        nodeValFunc(this, job_select);
        }
    };
    req.open("GET", "../data/insurance_info3.xml", true);
    req.send();

    var req_foot = new XMLHttpRequest();
    req_foot.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        foot_Func(this, location_select);
        }
    };
    if (duration_select=="1차 유행") req_foot.open("GET", "../data/wave1.xml", true);
    else if (duration_select=="2차 유행") req_foot.open("GET", "../data/wave2.xml", true);
    else if (duration_select=="3차 유행") req_foot.open("GET", "../data/wave3.xml", true);
    else req_foot.open("GET", "../data/wave1.xml", true);
    req_foot.send();

    var req_rent = new XMLHttpRequest();
    req_rent.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        rent_Func(this, location_select);
        }
    };
    req_rent.open("GET", "../data/rent.xml", true);
    req_rent.send();

    var req_salary = new XMLHttpRequest();
    req_salary.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        insurance_Func(this, job_select);
        }
    };
    req_salary.open("GET", "../data/insurance_salary.xml", true);
    req_salary.send();

    write();
}

function nodeValFunc(xml, job_select) {
    var parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml.responseText, "application/xml");

    var infoNode = xmlDoc.getElementsByTagName("info");
    var jobNode = xmlDoc.getElementsByTagName("job");
    var soldNode = xmlDoc.getElementsByTagName("sold");
    var jobinfoNode = xmlDoc.getElementsByTagName("jobinfo");
    var rateNode = xmlDoc.getElementsByTagName("rate");
    var insuNode = xmlDoc.getElementsByTagName("insurance");
    var insu2Node = xmlDoc.getElementsByTagName("insurance2");

    for(var idx = 0; idx < infoNode.length; idx++){
        job = jobNode[idx].childNodes[0].nodeValue;
        sold = soldNode[idx].childNodes[0].nodeValue;
        jobinfo = jobinfoNode[idx].childNodes[0].nodeValue;
        rate = rateNode[idx].childNodes[0].nodeValue;
        insurance = insuNode[idx].childNodes[0].nodeValue;
        insurance2 = insu2Node[idx].childNodes[0].nodeValue;

        if(jobinfo==null){
            alert("해당 직종의 데이터가 존재하지 않습니다. 문의바랍니다.");
            break;
        }
        else if(job==job_select){
            //console.log(job);
            //console.log(sold);
            //console.log(jobinfo);
            //console.log(rate);
            //console.log(insurance);
            console.log("보험가액/3 : " + insurance2);
            break;
        }
    }
}

function foot_Func(xml, location_select){
    var parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml.responseText, "application/xml");

    var infoNode = xmlDoc.getElementsByTagName("info");
    var dongNode = xmlDoc.getElementsByTagName("dong");
    var gradeNode = xmlDoc.getElementsByTagName("grade");
    var footNode = xmlDoc.getElementsByTagName("foot");

    for(var idx = 0; idx < infoNode.length; idx++){
        foot_dong = dongNode[idx].childNodes[0].nodeValue;
        foot_grade = gradeNode[idx].childNodes[0].nodeValue;
        foot_rate = footNode[idx].childNodes[0].nodeValue;
        foot_rate = Math.round(foot_rate);

        if(foot_dong==location_select){
            console.log("[유동인구]");
            console.log(foot_dong);
            console.log(foot_grade);
            break;
        }
    }
}

function rent_Func(xml, location_select){
    var parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml.responseText, "application/xml");

    var infoNode = xmlDoc.getElementsByTagName("info");
    var dongNode = xmlDoc.getElementsByTagName("dong");
    var gradeNode = xmlDoc.getElementsByTagName("grade");

    for(var idx = 0; idx < infoNode.length; idx++){
        rent_dong = dongNode[idx].childNodes[0].nodeValue;
        rent_grade = gradeNode[idx].childNodes[0].nodeValue;

        if(rent_dong==location_select){
            console.log("[임대료]");
            console.log(rent_dong);
            console.log(rent_grade);
            insurance_fee();
            break;
        }
    }
}

function insurance_Func(xml, job_select){
    var parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml.responseText, "application/xml");

    var infoNode = xmlDoc.getElementsByTagName("info");
    var jobNode = xmlDoc.getElementsByTagName("job");
    var m1Node = xmlDoc.getElementsByTagName("m1_mul3");
    var m2Node = xmlDoc.getElementsByTagName("m2_mul3");

    for(var idx = 0; idx < infoNode.length; idx++){
        salary_job = jobNode[idx].childNodes[0].nodeValue;
        salary_m1 = m1Node[idx].childNodes[0].nodeValue;
        salary_m2 = m2Node[idx].childNodes[0].nodeValue;

        if((salary_job==job_select)){
            break;
        }
    }

    
}

function insurance_fee(){
    var GTR_foot = [5, 4.375, 3.75, 3.125, 2.5, 1.875, 1.25, 0.625]; // 상권변화 등급 to 보험율
    var GTR_virus = [5, 4.375, 3.75, 3.125, 2.5, 1.875, 1.25, 0.625]; // 전염병 등급 to 보혐율
    var GTR_rent = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]; // 임대료 등급 to 보험율

    year_fee_insurance = Number(insurance2)*GTR_foot[Number(foot_grade)-1]/100
                    +Number(insurance2)*GTR_virus[Number(virus_grade)-1]/100
                    +Number(insurance2)*GTR_rent[Number(rent_grade)-1]/100;
    month_fee_insurance = Math.round(year_fee_insurance/12);
            
    console.log("[보험비 산출]");
    console.log("유동인구 요율" + GTR_foot[Number(foot_grade)-1]);
    console.log("바이러스 요율" + GTR_virus[Number(virus_grade)-1]);
    console.log("임대료 요율" + GTR_rent[Number(rent_grade)-1]);
    console.log("연간 보험비" + year_fee_insurance);
    console.log("월간 보험비" + month_fee_insurance);
}

function write(){
    document.getElementById("table_job_select").innerHTML = document.getElementById("job_select").value;
    document.getElementById("table_location").innerHTML = document.getElementById("location_select").value;
    document.getElementById("table_duration").innerHTML = document.getElementById("duration_select").value;
    document.getElementById("table_location").innerHTML = foot_dong;
    document.getElementById("table_virus").innerHTML = document.getElementById("virus_select").value;
    document.getElementById("table_bo_rate").innerHTML = (rate*100)+"%";
    document.getElementById("table_foot_rate").innerHTML = foot_rate+"%";

    document.getElementById("Utable_foot").innerHTML = foot_grade;
    document.getElementById("Utable_rent").innerHTML = rent_grade;
    document.getElementById("Utable_virus").innerHTML = virus_grade;
    
    document.getElementById("table_avg_salary").innerHTML = salary_m1.toString() .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");;
    document.getElementById("table_my_salary").innerHTML = document.getElementById("income_select").value; 
 
    document.getElementById("month_fee_insurance").innerHTML = month_fee_insurance;

    mydata.data = [parseInt(foot_grade), parseInt(rent_grade), parseInt(virus_grade)];
    avgdata.data = [5, 5, parseInt(virus_grade)];
    myRadarChart.update();

}