const html = 
`
 <div class="main">

    <div class="img">
      <img class="logo" src="logo.png">
    </div>

    <div class="discription">
      <p class="name">My Weather App</p>
      <p class="message">Welcome! Get real-time weather updates and plan your day.</p>
      <button class="button">Your Weather</button>
    </div>

  </div>`;

  document.querySelector('.MAIN').innerHTML=html;

  const buttton = document.querySelector('.button');
  buttton.addEventListener('click', ()=>{
    window.location.href='./index1.html';
  })