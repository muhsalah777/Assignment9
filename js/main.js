var siteNameInput= document.getElementById("siteName")
var siteURLInput= document.getElementById("siteURL")
var siteList=[];
if(localStorage.getItem("sites")){
    siteList=JSON.parse(localStorage.getItem("sites"))
    displaylist()
}
function sub(){
  
    var product={
        siteName: siteNameInput.value,
        siteurl: siteURLInput.value
    }

    siteList.push(product)
    localStorage.setItem("sites",JSON.stringify(siteList))
    displaylist()
}
function displaylist(){
    var temp=""
    for (var i=0;i<siteList.length;i++){
        temp+= `<tr>
        <td>`+(i+1)+`</td>
        <td>`+ siteList[i].siteName +`</td>
        <td>
        <button onclick="viewbutton(`+i+`)" class="btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
  </svg> View </button>
        </td>
        <td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
        </svg> Delete </button></td>
    </tr>`
    }
    document.getElementById("myData").innerHTML=temp;
}
function viewbutton(i){
    var tmp=JSON.parse(localStorage.getItem("sites"))[i].siteurl
    window.open(tmp);
    // window.open(`https://`+siteList[i].siteURLInput);
}

function deleteProduct(index){
    siteList.splice(index,1)
    localStorage.setItem("sites",JSON.stringify(siteList));
    displaylist()
}

