let box = document.getElementsByTagName("img")[0];
let msg = document.getElementById("lessgo"); 
let h2 = document.getElementById("cumburger"); 
let ui = document.getElementById("ui");
start()
function start() {
    box.addEventListener("click", function() {clicked()});

}
async function clicked() {
    box.style.display = "none";
    msg.style.display = "block";
    h2.style.display = "none";
    ui.style.display = "block"
}
