// DOM ELEMENTS
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');


    //am /pm
    const showAmPm =true;

  //Show Time
  
  function showTime(){
 
      let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

      // Set AM or PM
      const amPm = hour>= 12 ? 'PM' : 'AM';
      
      //12hr Format
      hour = hour % 12 || 12 ;

      // O/p The Time
      time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</sapn>${addZero(sec)}
      ${showAmPm ? amPm : ''}`;
      setTimeout(showTime,1000);
  }
  // Add Zero to seconds
  function addZero(n){
      return (parseInt(n,10)<10 ? '0' : '') + n;
  }
  //Set Background and Greeting
  function setBgGreet(){
      let today = new Date(),
      hour = today.getHours();
  if (hour < 12){
document.body.style.backgroundImage = "url('green.jpg')";
greeting.textContent = 'Good Morning';
  }else if (hour < 18){
    document.body.style.backgroundImage = "url('afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
  }else {
    document.body.style.backgroundImage = "url('night.jpg')";
    greeting.textContent = 'Good Evening';
document.body.style.color = 'white';
  }
    }
    // Get Name
    function getName(){
      if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
      }else {
        name.textContent = localStorage.getItem('name');

      }
    }
    //set Name
    // we want to make sure that we have keypree like hitting Enter or 
    //or clicking out side the name field
    //not just typing 
    function setName(e){
      if(e.type === 'keypress'){
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
          localStorage.setItem('name',e.target.innerText);
          // after enter we dont want to have another line
          name.blur();
        }
      }else{
        // here for the blur 
        // we want to pass it a name and 
        // second value to save what ever we typed in !!!
        localStorage.setItem('name',e.target.innerText);
      }
    }
    // Get Focus
    function getFocus(){
      if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
      }else {
        focus.textContent = localStorage.getItem('focus');

      }
    }
    //set Focus
    function setFocus(e){
      if(e.type === 'keypress'){
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
          localStorage.setItem('focus',e.target.innerText);
          // after enter we dont want to have another line
          focus.blur();
        }
      }else{
        // here for the blur 
        // we want to pass it a name and 
        // second value to save what ever we typed in !!!
        localStorage.setItem('focus',e.target.innerText);
      }
    }

    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);


  //Run
  showTime();
  setBgGreet();
  getName();
getFocus();