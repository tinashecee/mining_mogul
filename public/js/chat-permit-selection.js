var bt = document.getElementById('ta');
bt.disabled = true;
const messageElement = document.getElementById("message");
      const audioElement = document.getElementById("audio");
      const message =
        "As a responsible and forward-thinking mining entrepreneur, you know that obtaining the necessary permits is key to ensuring the legality and sustainability of your mining venture. In this stage, you'll have the opportunity to apply for essential permits, such as the Environmental Impact Assessment (EIA) from the Environmental Management Agency (EMA). Acquiring the right permits will not only help you adhere to environmental regulations but also demonstrate your commitment to responsible mining practices. So, take your time, gather the required documentation, and secure the appropriate permits to set your mining enterprise on the path to success while maintaining a strong reputation as an eco-conscious mineral tycoon!";
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
      second_section.style.display = "block";
      }
    }