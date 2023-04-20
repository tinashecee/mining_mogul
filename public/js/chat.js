const messageElement = document.getElementById("message");
      const audioElement = document.getElementById("audio");
      const message =
        "Great!  You've kicked off your mining adventure and are on the fast track to becoming a true Mineral Tycoon!  To stay ahead of the game and boost your mineral haul, it's time to invest in some cutting-edge technology!  So, what will it be, future tycoon? Pick your favorite equipment and gadgets to skyrocket your mining empire! ";
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
        if (index < message.length) {
          messageElement.innerHTML += message[index];
          index++;
          setTimeout(typeMessage, 50);
        } else {
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
