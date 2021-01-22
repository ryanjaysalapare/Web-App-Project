/**
 * Author: Ryan Jay Salapare 000823653
 * Created: Nov. 15, 2020
 * 
 * A javascript file that will be linked to an html file to run in the background. 
 * The hmtl file will pass in the user's name, age, and favorite color then this simple program will let the
 * user play a card game that lets them pick 5 cards ranging from 1-100 at the same time then add the card values to be divided by the user's age.
 * If the results end up being an even number, the user get's 1 win point, but if odd then they will get 1 lose point.
 * If the user earns 5 win points, they win the game, but if they get 5 lose points then they lost.
 */



window.addEventListener("load", function () {


    //Hiding the non-form parts of the program then showing it after user submits the form 
    document.getElementById("game").style.visibility = "hidden";
    document.getElementById("pickAgain").style.visibility = "hidden";
    document.getElementById("winOrLose").style.visibility = "hidden";
    document.getElementById("again").style.visibility = "hidden";

    // Function that takes no parameters and will hide the form after completely filling up
    function hideForm() {
        document.getElementById("user_form").style.visibility = "hidden";
    }

    //Event listener for the form's submit button
    document.forms.user_form.addEventListener("submit", function (event) {
        event.preventDefault();
        hideForm();
        document.getElementById("game").style.visibility = "visible";
        document.getElementById("totalAdded").style.visibility = "hidden";
        let name = document.getElementById("name").value;
        let color = document.getElementById("color").value;

        let greet = document.getElementById("username");
        if (this.value !== "") {
            greet.style.color = color;
            greet.innerHTML = name;
        }
    })

    let rand = []
    let sum = 0
    //Function that picks a random card from 1 - 100
    function pickCards() {
        for (let i = 0; i < 5; i++) {
            rand[i] = Math.floor(Math.random() * 100 + 1);
        }

        rand.forEach(sumOfCards);

        function sumOfCards(card) {
            sum += card
        }

        console.log(rand);
        console.log(sum);

    }
    
    let win = 0;
    let lose = 0;
    let pickAgainButton = document.getElementById("pickAgain");
    let pickButton = document.getElementById("pick");

    // Event listener for the pick button
    document.getElementById("pick").addEventListener("click",
        function () {
            pickCards();
            document.getElementById("pickAgain").style.visibility = "visible";
            pickButton.disabled = true;

            document.getElementById("totalAdded").style.visibility = "visible";
            let totalAdded = document.getElementById("totalAdded");
            if (this.value === "") {
                totalAdded.innerHTML += "You've picked these card values: " + rand;
            }

            let totalOutput = document.getElementById("totalOutput");
            if (this.value === "") {
                totalOutput.innerHTML += "Your total: " + sum;
            }

            let age = document.getElementById("age").value;
            let yourAge = document.getElementById("yourAge");
            if (this.value === "") {
                yourAge.innerHTML += "Your age</strong>: " + age;
            }

            let finalResult = Math.floor(sum / age);

            let result = document.getElementById("result");
            if (this.value === "") {
                result.innerHTML += "Result = " + finalResult;
            }

            let evenResult = finalResult % 2;
            if (evenResult === 0) {
                console.log(evenResult);
                win++;
            } else {
                lose++;
            }

            let winCount = document.getElementById("winCount");
            if (this.value === "") {
                winCount.innerHTML += "Win: " + win;
            }

            let loseCount = document.getElementById("loseCount");
            if (this.value === "") {
                loseCount.innerHTML += "Fail: " + lose;
            }


            pickAgain();

            if (win === 5) {
                winOrLose.innerHTML += "Congratulations, " + document.getElementById("name").value + "!";
                pickButton.disabled = true;
                document.getElementById("winOrLose").style.visibility = "visible";
                winCount.style.color = "green";
                pickAgainButton.disabled = true;
                document.getElementById("again").style.visibility = "visible";
                tryAgain();



            }
            if (lose === 5) {
                winOrLose.innerHTML += "Better luck next time!";
                document.getElementById("winOrLose").style.visibility = "visible";
                loseCount.style.color = "red";
                pickAgainButton.disabled = true;
                document.getElementById("again").style.visibility = "visible";
                tryAgain();
            }


        });


    /**
     * Function that takes in no parameters and it will delete the past interaction with the user to reset 
     * the values for the next round.
     */
    function pickAgain() {
        document.getElementById("pickAgain").addEventListener("click", function () {
            pickAgainButton.style.visibility = "hidden";
            pickButton.disabled = false;
            totalAdded.innerHTML = "";
            sum = 0;
            totalOutput.innerHTML = "";
            yourAge.innerHTML = "";
            result.innerHTML = "";
            winCount.innerHTML = "";
            loseCount.innerHTML = "";
        });
    }

    // Function that has no paramaters and will just return the user to the index.html file when clicked
    // This function will only be visible after the user wins or losses the game. 
    function tryAgain() {
        let x = document.getElementById("tryAgain").addEventListener("click", function () {
            x.value = "<a href='index.html'></a>";
        });
    }




});