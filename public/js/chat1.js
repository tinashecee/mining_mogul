
var bt = document.getElementById('ta');
var bt1 = document.getElementById('ta1');
var bt2 = document.getElementById('ta2');
var first_section = document.getElementById('first-section');
var second_section = document.getElementById('second-section');
var third_section = document.getElementById('third-section');
var modal1a = document.getElementById("myModal1a");
var modal1b = document.getElementById("myModal1b");
var modal1c = document.getElementById("myModal1c");
var modal1d = document.getElementById("myModal1d");
second_section.style.display = "none";
third_section.style.display = "none";
bt1.style.display = "none";
bt2.style.display = "none";

const messageElement = document.getElementById("message");
      const audioElement = document.getElementById("audio");
      const message =
        "Are you ready to start mining? Tap the screen to increase your ore and watch as your mining operations take off! With each tap, you'll collect more minerals and move closer to becoming the ultimate Mineral Tycoon. Remember throughout the game you are going to face different obstacles in your quest. Take decisive and calculated actions . So let's see how far you can go!";
      let index = 0;

      document.getElementById('myVideo1a').addEventListener('ended',myHandler2,false);
      function myHandler2(e) {
        modal1a.style.display = "none";
       
      }
      document.getElementById('myVideo1b').addEventListener('ended',myHandler3,false);
      function myHandler3(e) {
        modal1b.style.display = "none";
       
      }
      document.getElementById('myVideo1c').addEventListener('ended',myHandler4,false);
      function myHandler4(e) {
        modal1c.style.display = "none";
       
      }
      function showModal1() {
        modal1a.style.display = "block";
    }
    function showModal2() {
      modal1b.style.display = "block";
  }
  function showModal3() {
    modal1c.style.display = "block";
}
function showModal4() {
  modal1d.style.display = "block";
}
    showModal1()
         
    function next(){
      if(document.querySelector('input[name="option1"]:checked').value != ""){
      first_section.style.display = "none";
      bt.style.display = "none";
      second_section.style.display = "block";
      bt1.style.display = "block";
      showModal2()
      }
      
    }
    function submit(){
      if(document.querySelector('input[name="option2"]:checked').value != ""){
      second_section.style.display = "none";
      bt1.style.display = "none";
      third_section.style.display = "block";
      bt2.style.display = "block";
      showModal3()
      }
    }
    function complete(){
     
      showModal4()
    }
    function playWinningSound() {
      const winningSound = document.getElementById("winning-sound");
      winningSound.play();
    }