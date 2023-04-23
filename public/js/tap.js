let stepv = 1
let countNm = 1
var labour_vid = document.getElementById("labour-vid");
var labour1_vid = document.getElementById("labour1-vid");
var env_vid = document.getElementById("env-vid");
labour_vid.style.display = "none";
var paused = true;

let vvalue = document.getElementById("inp")
let tripp = document.getElementById("yeild")
let ele = document.createElement("span")
let ores = document.getElementById("ores")
let count=0
let started= false
var modal1 = document.getElementById("myModal1");
var modal1a = document.getElementById("myModal1a");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
document.getElementById("tap").addEventListener("click",(e)=>{
	let gg  = document.getElementById("step").value
   	stepv =  parseFloat(gg)
	let x = e.clientX
    let y = e.clientY 
    count+=1
    ele.innerHTML = "+"+document.getElementById("step").value
    let anime = ele
    animation1(x,y,anime,ele)
    some(vvalue,stepv)
   
    firstModal()
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
      paused = false;
        countNm+=1
    setTimeout(() => {
        paused = true
        showModal1()
        startIntro1()
        
      }, 10000);
    }

    }
    

    
    // Get the <span> element that closes the modal
    //var span = document.getElementsByClassName("close")[0];
    
    //open modal function
    function showModal1() {
        modal1.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    function dismiss1() {
      paused = false
      console.log(document.querySelector('input[name="labour"]:checked').value)
        
      modal1.style.display = "none";
      modal1a.style.display = "block";
    }
    
/************************************************************************************************************************************ */
    //The second modal for Equipment Maintanaince

    function secondModal(){
        setTimeout(() => {
            paused=true
            showModal2()
            startIntro2()
            
          }, 10000);
        }
     

    function showModal2() {
        modal2.style.display = "block";
    }
    function dismiss2() {
      done()
      paused=false
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
          document.getElementById('myVideo1a').addEventListener('ended',myHandler3,false);
          function myHandler3(e) {
            modal1a.style.display = "none";
            secondModal()
          }
          function done(){
            
            setTimeout(() => {
              modal3.style.display = "block";
              tripp.innerHTML=count
              fetch('/add-ore',{
                method: 'POST',
                body: JSON.stringify({
                  yeild: count
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            })
            }, 10000);
          }

          
          
          