const highScoresList = document.getElementById("highScoresList");
const cat = document.querySelector("#mythology"); 
const cat2 = document.querySelector("#animals"); 

const selectedCategory = 0;
 
function getCategory(){
  const highScores = JSON.parse(localStorage.getItem("20")) || [];
  console.log(highScores)
  highScoresList.innerHTML = highScores.map(score => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
  }).join("");
}

function getCategory2(){
  const highScores = JSON.parse(localStorage.getItem("27")) || [];
  highScoresList.innerHTML = highScores.map(score => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
  }).join("");
}

cat.addEventListener("click", getCategory); 
cat2.addEventListener("click", getCategory2);