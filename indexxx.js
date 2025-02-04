const no = document.getElementById("no")
no.addEventListener("mouseover",func);
no.addEventListener("mouseenter",func);
function func(){
    no.textContent="Please";
}
no.addEventListener("mouseout",func2);
function func2(){
    no.textContent="No";

}











