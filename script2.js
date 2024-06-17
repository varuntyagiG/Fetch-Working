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