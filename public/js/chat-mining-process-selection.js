var bt = document.getElementById('ta');
bt.disabled = true;
const messageElement = document.getElementById("message");
      const audioElement = document.getElementById("audio");
      const message =
        "This is the Mining Process Selection Stage! Pick the most suitable method to extract your chosen mineral and maximize your venture's success. Your options include open-pit, underground, and placer mining, each offering its own unique blend of challenges and rewards. As you ponder your decision, consider factors such as efficiency, environmental impact, and safety, while also keeping an eye on costs and profitability.";
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