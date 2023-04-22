var bt = document.getElementById('ta');
bt.disabled = true;
const messageElement = document.getElementById("message");
      const audioElement = document.getElementById("audio");
      const message =
        "Welcome to the Land Selection Stage. Here, you'll choose the perfect location and size for your mining block to kick off your mining operations. As you evaluate your options, consider factors such as proximity to resources, infrastructure, and the mineral deposit's potential yield. Keep in mind that the size of your mining block will influence your initial investment, operational costs, and overall mining capabilities. So, take your time, weigh the pros and cons of each location, and make a strategic decision that will set you on the path to becoming a mining industry leader!";
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