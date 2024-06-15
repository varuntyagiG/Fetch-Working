function populateDiv(){
    let a = document.getElementById("firstnum").value;
    let b = document.getElementById("secondnum").value;
    fetch("http://localhost:3000/xyz?a="+ a + "&b=" + b).then((data)=>{
        data.text().then((ans)=>{
            console.log(ans);
            document.getElementById("finalSum").innerHTML = ans;
        })
    });
}