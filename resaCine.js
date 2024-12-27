document.addEventListener('DOMcontentloaded',function(){
  const seats=document.querrySelectorAll('seat')
  const selecteadSeats=document.getElementById
  ('selected-seats');
  const statusMessage=document.getElementById
  ('status-message');
  const reserveButton=document.getElementById
  ('btn-reserve');

  let selectedSeatCount=0;

  function updateSelectedSeatCount(){
    selecteadSeats.innerText='Places selectionnés'
      selectedSeatCount
    
  }

  function seatClickHandler(){
    if(this.classList.contains('selected')){
      this.classList.remove('delected');
      selectedSeatCount--
    }else this.classList('selected')
    selectedSeatCount++;
  }
  function updateSelectedSeatCount(){
    seats.forEach(function(seat){
      seataddEventListner('click',seatClickHandler)
    })
     
  }

  seats.forEach(function(seat){
    seat.addEventListner('click',seatClickHandler)
  })

  function reserveSeats(){
    if(selectedSeatCount > 0){
      statusMessage.innerText="Places reservées"
      statusMessage.style.Color="green";
    }else{
      statusMessage.innerText="Selectionner une place"
      statusMessage.style.Color="red";
    }
  }
  reserveButton.addEventListener('click',reserveSeats)
})

