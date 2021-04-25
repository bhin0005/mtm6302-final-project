function currentTime() {
    let date = new Date(); 
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; 
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); 
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; 
    let t = setTimeout(currentTime, 1000);
  }
  
  function updateTime(k) { 
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();
  
  async function sendAPODRequest(){
      let API_KEY = "KGDykZVJkddwvBybyMv4KFdiQ38WeusC1bdQqThx"
      let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
      let data = await response.json();
      readJsonResponse(data)
      console.log(data);
  }

  function readJsonResponse(data){
      if(data.media_type == "video"){
        document.querySelector("#apod-image").innerHTML = `<iframe width="560" height="315" src="${data.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }else{
        document.querySelector("#apod-image").innerHTML = `<img src="${data.url}">`
      }
      document.querySelector("#explaination").innerHTML = data.explanation
  }
  sendAPODRequest()


  function displayInfo(){
    let d = new Date();
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    let info = 'Day of the week: ' + d.getDay() + "<br>" + 'Day of the month: '+d.getDate() + "<br>" +'Day of year: ' + day;
    document.getElementById("info").innerHTML = info;
    
  }

  function changeTextColor(){
    document.getElementById("clock").style.color = "#ff0000";
  }

  function changeBackColor(){
    document.getElementById("clock").style.background = "magenta";
  }