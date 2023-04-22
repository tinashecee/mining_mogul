var bt = document.getElementById('ta');
bt.disabled = true;
const messageElement = document.getElementById("message");
      const audioElement = document.getElementById("audio");
      const message =
        "As a savvy mining entrepreneur, you know that choosing the right tools is critical for the success of your venture. Here, you'll have the opportunity to select the most efficient and cost-effective equipment to kick off your mining operations. Keep in mind factors such as the mineral you're mining, the chosen mining process, and the terrain of your mining block as you evaluate the options.";
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

 