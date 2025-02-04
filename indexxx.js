const no = document.getElementById("no")
no.addEventListener("click",increase);
no.addEventListener("mouseover",func);
no.addEventListener("mouseenter",func);
function func(){
    no.textContent="Please";
}
no.addEventListener("mouseout",func2);
function func2(){
    no.textContent="No";

}
function increase() {
    const btn = document.getElementById("yes");
    const currwidth = btn.clientWidth;
    const currheight = btn.clientHeight;
    btn.style.width = (currwidth + 20) + "px";
    btn.style.height = (currheight + 10) + "px";
} 












