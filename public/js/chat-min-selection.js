var bt = document.getElementById('ta');
bt.disabled = true;
const messageElement = document.getElementById("message");
      const audioElement = document.getElementById("audio");
      const message =
        "In this crucial first step, you'll need to select a mineral to focus your mining venture on. You have four enticing options: gold, platinum, diamonds, and lithium. Each mineral offers unique benefits and challenges, so choose wisely! Consider factors such as market demand, potential profits, and extraction methods as you make your decision. Your journey to becoming a mineral tycoon starts with this choice, so take your time, evaluate your options, and embark on the path to mining success!";
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