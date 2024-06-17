 // debouncing concept
let timeout;
function DebbugingCalculate(){
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        CalculateSI();
    },1000);
}

function CalculateSI(){
    let p = document.getElementById("p").value;
    let r = document.getElementById("r").value;
    let t = document.getElementById("t").value;
    fetch("http://localhost:3000/simpleinterest?p= " + p + "&r=" + r + "&t="+t).then((res)=>{
        res.text().then((ans)=>{
            document.getElementById("d").innerHTML = ans;
        })
    })

}

// by dafault fetch gave get request , if you want to specially define then you define methoud.{
    method : post
//}