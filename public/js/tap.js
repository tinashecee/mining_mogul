let stepv = 1
let countNm = 1
var labour_vid = document.getElementById("labour-vid");
var env_vid = document.getElementById("env-vid");
labour_vid.style.display = "none";
document.getElementById("tap").addEventListener("click",(e)=>{
	let gg  = document.getElementById("step").value
   	stepv =  parseFloat(gg)
	let x = e.clientX
    let y = e.clientY 
    let vvalue = document.getElementById("inp")
    let ele = document.createElement("span")
    let ores = document.getElementById("ores")
    ele.innerHTML = "+"+document.getElementById("step").value
    let anime = ele
    animation1(x,y,anime,ele)
    some(vvalue,stepv)
   
    firstModal(vvalue)
})
function log(valor){
    console.log(valor)
}
function animation1(x,y,anime,ele)
{
    anime.setAttribute("class","anime")
    anime.setAttribute("style",`top:${y}px;left:${x}px;`)
    anime.setAttribute("onclick","deleteSelf(this)")
    body = document.querySelector("body")
    body.appendChild(anime)
  
    var anm = anime.animate([
         {visibility:'visible'},{transform:"scale(1.90)"}, {visibility:'hidden'}
       ], 100);
         anm.addEventListener('finish', function() {
        anime.click()
       });
}
function some(ele,stv){
    let valor = parseFloat(ele.value)
    console.log(valor+1)
    if ((valor+stv)<10&&(valor+stv)>=1) {
        ele.value = "0"+(valor+stv)
    }else{ele.value = valor+stv}
   
}
function some1(ele,stv){
  let valor = parseFloat(ele.value)
  if ((valor+stv)<10&&(valor+stv)>=1) {
      ele.value = "0"+(valor+stv)
  }else{ele.value = valor+stv}
 
}
function deleteSelf(me){
    setTimeout(()=>{me.parentNode.removeChild(me);},1000)
    
}
function reset()
{
    document.getElementById("step").value="1"
	document.getElementById("inp").value="00"
}


function stepy(inst)
{
    
    let ele =  document.getElementById("step")
    let valor = parseFloat(ele.value)
	switch(inst)
	{
		case "+":
			
			valor = parseFloat(ele.value)
			ele.value = valor+1
		break;
		
		case "-":

			valor = parseFloat(ele.value)
			ele.value = valor-1
		
		break;
	}
}
function firstModal(){
    
    if(countNm == 1){
      console.log(countNm)
        countNm+=1
    setTimeout(() => {
        showModal1()
        startIntro1()
        
      }, 10000);
    }

    }
    var modal1 = document.getElementById("myModal1");

    
    // Get the <span> element that closes the modal
    //var span = document.getElementsByClassName("close")[0];
    
    //open modal function
    function showModal1() {
        modal1.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    function dismiss1() {
      console.log(document.querySelector('input[name="labour"]:checked').value)
        secondModal()
      modal1.style.display = "none";
    }
    
/************************************************************************************************************************************ */
    //The second modal for Equipment Maintanaince

    function secondModal(){
        setTimeout(() => {
            showModal2()
            startIntro2()
            
          }, 5000);
        }
        var modal2 = document.getElementById("myModal2");
    

    function showModal2() {
        modal2.style.display = "block";
    }
    function dismiss2() {
      console.log(document.querySelector('input[name="environment"]:checked').value)
      modal2.style.display = "none";
    }

    /******************************************************************************************************************************* */

    

    function startIntro1(){
      var x = document.getElementById("myVideo1"); 
      x.play();
        labour_vid.style.display = "block";
      }
      function startIntro2(){
  
        env_vid.style.display = "block";
      }
      document.getElementById('myVideo1').addEventListener('ended',myHandler1,false);
          function myHandler1(e) {
            labour_vid.style.display = "none";
          }
          document.getElementById('myVideo2').addEventListener('ended',myHandler2,false);
          function myHandler2(e) {
            env_vid.style.display = "none";
          }


