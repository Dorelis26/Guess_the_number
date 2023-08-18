

let number = Math.trunc(Math.random()* 20 + 1);
let score = 20;
let high_score = 0;

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    

    if (!guess){
        document.querySelector(".message").textContent = " ❌ No number ";
        score--;
        document.querySelector(".score").textContent = score;
    }else if(guess === number){
        document.querySelector(".message").textContent = " 👍 You got it!";
        if(score > high_score){
            high_score = score;
            document.querySelector(".highscore").textContent = high_score;
            }
        document.querySelector(".circle").textContent= number;
        document.querySelector(".cirlcer").style.position= "relative";
        document.querySelector(".number").style.width = "30rem";
        

    }else if(guess > number){
        if(score > 1){
            document.querySelector(".message").textContent = " 👇 Too High! ";   
            score--;
            document.querySelector(".score").textContent = score;
         }else{
            document.querySelector(".message").textContent = "🤬 Game Over! ";  
            document.querySelector(".score").textContent = 0;
        }
    }else if(guess < number){
        if(score > 1){
        document.querySelector(".message").textContent = " ☝️ Too Low! ";
        score--;
        document.querySelector(".score").textContent = score;
    }else{
        document.querySelector(".message").textContent = "🤬 Game Over! ";  
        document.querySelector(".score").textContent = 0;
}

    }
});

document.querySelector(".again").addEventListener("click", function(){
    document.querySelector(".message").textContent = "Start guessing...";
    score = 20;
    let number = Math.trunc(Math.random()* 20 + 1);
    document.querySelector(".score").textContent = score ;
    document.querySelector(".circle").textContent = "📦";
    document.querySelector(".cirlcer").style.position= "relative";
    document.querySelector(".guess").value= "";
    document.querySelector(".number").style.width = "15rem";
            
});
