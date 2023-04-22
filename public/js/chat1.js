
var bt = document.getElementById('ta');
var bt1 = document.getElementById('ta1');
var bt2 = document.getElementById('ta2');
var first_section = document.getElementById('first-section');
var second_section = document.getElementById('second-section');
var third_section = document.getElementById('third-section');
second_section.style.display = "none";
third_section.style.display = "none";
bt1.style.display = "none";
bt2.style.display = "none";
bt.disabled = true;
const messageElement = document.getElementById("message");
      const audioElement = document.getElementById("audio");
      const message =
        "Are you ready to start mining? Tap the screen to increase your ore and watch as your mining operations take off! With each tap, you'll collect more minerals and move closer to becoming the ultimate Mineral Tycoon. Remember throughout the game you are going to face different obstacles in your quest. Take decisive and calculated actions . So let's see how far you can go!";
      let index = 0;


      function typeMessage() {
        
        if (index < message.length) {
          messageElement.innerHTML += message[index];
          index++;
          audioElement.currentTime = 0;
          audioElement.play();
          setTimeout(typeMessage, 50);
        }
      }


      typeMessage();
      // ...
      function typeMessage() {
        var x = document.getElementById("myAudio"); 
         //x.play();
         
        if (index < message.length) {
          messageElement.innerHTML += message[index];
          index++;
          setTimeout(typeMessage, 120);
        } else {
          bt.disabled = false;

          fadeOutDialogueBox();
        }
      }


      typeMessage();



      function fadeOutDialogueBox() {
        setTimeout(() => {
          const dialogueBox = document.querySelector(".dialogue-box");
          dialogueBox.classList.add("fade-out");
        }, 1000); // Adjust the delay before the fade-out animation starts
      }

         
    function next(){
      if(document.querySelector('input[name="option1"]:checked').value != ""){
      first_section.style.display = "none";
      bt.style.display = "none";
      second_section.style.display = "block";
      bt1.style.display = "block";
      }
      
    }
    function submit(){
      if(document.querySelector('input[name="option1"]:checked').value != ""){
      first_section.style.display = "none";
      bt.style.display = "none";
      second_section.style.display = "block";
      bt1.style.display = "block";
      }
    }
    function complete(){
      if(document.querySelector('input[name="option1"]:checked').value != ""){
      first_section.style.display = "none";
      bt.style.display = "none";
      second_section.style.display = "block";
      bt1.style.display = "block";
      }
    }