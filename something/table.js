const tablebtn = document.getElementsByClassName("table-row");
const drop = document.getElementById("drop-r");

for(i=0; i < tablebtn.length; i++){
    const tableClick = tablebtn[i];

    tableClick.addEventListener("click", ()=>{
        drop.classList.toggle("uuu");
    })
}


// $(document).ready(function(){
//     $(".table-row").click(function(){
//       $("#table-drp").toggle();
//     });
//   });