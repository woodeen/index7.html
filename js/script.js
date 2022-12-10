let text = document.getElementsByTagName('body')[0];
  text.innerHTML += `<input type="text" id="mag"><br>`
 
 let div = document.createElement("div");
 div.classList.add("center");
 document.body.appendChild(div);

  var answers = [ 'Так','Ні','Можливо','Напевно так',
'Напевно ні','Більше так чим ні','Більше ні чим так',
'Найближчим часом','Нескоро, але так','Краще загугли','Тут я тобі не помічник' ];
  

  
   text.addEventListener("keypress", e =>{
    if(e.key==="Enter"){
      var answer=answers[Math.floor(Math.random() * answers.length)];
     div.innerHTML = answer
    }
  })