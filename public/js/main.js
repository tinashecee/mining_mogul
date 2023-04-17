const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // 👇️ hide button
  btn.style.display = 'none';

});
//The first modal for tech Investment Stage
function firstModal(){
    setTimeout(() => {
        showModal1()
    
        
      }, 5000);
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
        secondModal()
      modal1.style.display = "none";
    }
    
/************************************************************************************************************************************ */
    //The second modal for Equipment Maintanaince

    function secondModal(){
        setTimeout(() => {
            showModal2()
        
            
          }, 5000);
        }
        var modal2 = document.getElementById("myModal2");
    

    function showModal2() {
        modal2.style.display = "block";
    }
    function dismiss2() {
        thirdModal()
      modal2.style.display = "none";
    }

    /******************************************************************************************************************************* */

    //The third modal for Equipment Maintanaince

    function thirdModal(){
        setTimeout(() => {
            showModal3()
        
            
          }, 5000);
        }
        var modal3 = document.getElementById("myModal3");
    

    function showModal3() {
        modal3.style.display = "block";
    }
   
    function dismiss3() {
        fourthModal()
      modal3.style.display = "none";
    }

    /******************************************************************************************************************************* */

    //The third modal for Equipment Maintanaince

    function fourthModal(){
        setTimeout(() => {
            showModal4()
        
            
          }, 5000);
        }
        var modal4 = document.getElementById("myModal4");
    

    function showModal4() {
        modal4.style.display = "block";
    }
    function dismiss4() {
      modal4.style.display = "none";
      setTimeout(() => {
        modal5.style.display = "block";
    
        
      }, 3000);
    }