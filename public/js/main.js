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

    //The Environmental Considerations modal for Equipment Maintanaince

    function fourthModal(){
        setTimeout(() => {
            showModal4()
        
            
          }, 5000);
        }
    var modal4 = document.getElementById("myModal4");
    var modal5 = document.getElementById("myModal5");
    

    function showModal4() {
        modal4.style.display = "block";
    }
    function dismiss4() {
      modal4.style.display = "none";
      setTimeout(() => {
        modal5.style.display = "block";
    
        
      }, 3000);
    }

 /*****************LEVEL TWO *************************************LEVEL TWO *******************************LEVEL TWO**************** */   

 //The 6th modal for random events
function sixthModal(){
  setTimeout(() => {
      showModal6()
  
      
    }, 5000);
  }
  var modal6 = document.getElementById("myModal6");

  
  // Get the <span> element that closes the modal
  //var span = document.getElementsByClassName("close")[0];
  
  //open modal function
  function showModal6() {
      modal6.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  function dismiss6() {
      seventhModal()
    modal6.style.display = "none";
  }
  
/************************************************************************************************************************************ */
  //The 7th modal for Random Events

  function seventhModal(){
      setTimeout(() => {
          showModal7()
      
          
        }, 5000);
      }
      var modal7 = document.getElementById("myModal7");
  

  function showModal7() {
      modal7.style.display = "block";
  }
  function dismiss7() {
      eigthModal()
    modal7.style.display = "none";
  }

  /******************************************************************************************************************************* */

  //The 8th modal for Random Events

  function eigthModal(){
      setTimeout(() => {
          showModal8()
      
          
        }, 5000);
      }
      var modal8 = document.getElementById("myModal8");
  

  function showModal8() {
      modal8.style.display = "block";
  }
 
  function dismiss8() {
      ninethModal()
    modal8.style.display = "none";
  }

  /******************************************************************************************************************************* */

  //The 9th modal for Random Events

  function ninethModal(){
      setTimeout(() => {
          showModal9()
      
          
        }, 5000);
      }
  var modal9 = document.getElementById("myModal9");
  var modal10 = document.getElementById("myModal10");
  

  function showModal9() {
      modal9.style.display = "block";
  }
  function dismiss9() {
    modal9.style.display = "none";
    setTimeout(() => {
      modal10.style.display = "block";
  
      
    }, 3000);
  }

  /******************Level 3********************************Level 3********************************************Level 3**************/
   //The 11th modal For Refinement
function eleventhModal(){
  setTimeout(() => {
      showModal11()
  
      
    }, 1000);
  }
  var modal11 = document.getElementById("myModal11");

  
  // Get the <span> element that closes the modal
  //var span = document.getElementsByClassName("close")[0];
  
  //open modal function
  function showModal11() {
      modal11.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  function dismiss11() {
      twelvethModal()
    modal11.style.display = "none";
  }
  
/************************************************************************************************************************************ */
  //The 12th modal for refinement

  function twelvethModal(){
      setTimeout(() => {
          showModal12()
      
          
        }, 5000);
      }
      var modal12 = document.getElementById("myModal12");
  

  function showModal12() {
      modal12.style.display = "block";
  }
  function dismiss12() {
      thirteenthModal()
    modal12.style.display = "none";
  }

  /******************************************************************************************************************************* */

  //The thirteen modal for Refinement

  function thirteenthModal(){
      setTimeout(() => {
          showModal13()
      
          
        }, 5000);
      }
      var modal13 = document.getElementById("myModal13");
  

  function showModal13() {
      modal13.style.display = "block";
  }
 
  function dismiss13() {
      fourteenthModal()
    modal13.style.display = "none";
  }

  /******************************************************************************************************************************* */

  //The fourteenth for Refinement

  function fourteenthModal(){
      setTimeout(() => {
          showModal14()
      
          
        }, 5000);
      }
  var modal14 = document.getElementById("myModal14");
  var modal15 = document.getElementById("myModal15");
  

  function showModal14() {
      modal14.style.display = "block";
  }
  function dismiss14() {
    modal14.style.display = "none";
    setTimeout(() => {
      modal15.style.display = "block";
  
      
    }, 3000);
  }


  /******************Level 4********************************Level 4********************************************Level 4*****************/
   //

  
/************************************************************************************************************************************ */
  //Trade Policies and Regulations Modal Channel 

  function aModal(){
      setTimeout(() => {
          showModalA()
      
          
        }, 1000);
      }
      var modalA = document.getElementById("myModalA");
  

  function showModalA() {
      modalA.style.display = "block";
  }
  function dismissA() {
      bModal()
    modalA.style.display = "none";
  }

  /******************************************************************************************************************************* */

  //Branding and Reputation:

  function bModal(){
      setTimeout(() => {
          showModalB()
      
          
        }, 5000);
      }
      var modalB = document.getElementById("myModalB");
  

  function showModalB() {
      modalB.style.display = "block";
  }
 
  function dismissB() {
      cModal()
    modalB.style.display = "none";
  }

  /******************************************************************************************************************************* */

  //Market Fluctuations

  function cModal(){
      setTimeout(() => {
          showModalC()
      
          
        }, 5000);
      }
  var modalC = document.getElementById("myModalC");
  var modalD = document.getElementById("myModalD");
  

  function showModalC() {
      modalC.style.display = "block";
  }
  function dismissC() {
    modalC.style.display = "none";
    setTimeout(() => {
      //Congratulations Game Complete. You can proceed to see your results
      modalD.style.display = "block";
  
      
    }, 3000);
  }


/************************************************************************************************************************************ */
  //Equipment Maintenance The Modal

  function eModal(){
    setTimeout(() => {
        showModalE()
    
        
      }, 1000);
    }
    var modalE = document.getElementById("myModalE");


function showModalE() {
    modalE.style.display = "block";
}
function dismissE() {
    fModal()
  modalE.style.display = "none";
}

/******************************************************************************************************************************* */

//Tech Investment Stage The Modal

function fModal(){
    setTimeout(() => {
        showModalF()
    
        
      }, 5000);
    }
    var modalF = document.getElementById("myModalF");


function showModalF() {
    modalF.style.display = "block";
}

function dismissF() {
    GModal()
  modalF.style.display = "none";
}

/******************************************************************************************************************************* */
//Congratulations! Here are a list of your MMCZ Export Documents

function GModal(){
    setTimeout(() => {
        showModalG()
    
        
      }, 1000);
    }
var modalG = document.getElementById("myModalG");
var modalH = document.getElementById("myModalH");


function showModalG() {
    modalG.style.display = "block";
}
function dismissG() {
  modalE.style.display = "none";
  modalG.style.display = "none";
  setTimeout(() => {
    modalH.style.display = "block";

    
  }, 3000);
}  
