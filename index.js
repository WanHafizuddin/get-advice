async function fetchData() {

    const url = `https://api.adviceslip.com/advice`

    try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error("Could not fetch data");
    }
  
    const data = await response.json();
    console.log(data.slip.advice);
    
    document.getElementById("advice").textContent = data.slip.advice;
    
    }
    catch(error){
      console.error("Error: ",error);
      
      }  
  }

  