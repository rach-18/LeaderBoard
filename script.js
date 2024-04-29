var scores = [
    { 
      firstname: "Akhil",
      lastname: "Sharma",
      country: "India",
      score: 85,
      submissionDateTime:"4/28/2022, 2:27:47 PM"
    },
    { 
      firstname: "Laxmi",
      lastname: "Sharma",
      country: "India",
      score: 95,
      submissionDateTime:"5/22/2021, 3:21:57 PM"
    },
    { 
      firstname: "Rahul",
      lastname: "Sharma",
      country: "India",
      score: 70,
      submissionDateTime:"8/11/2015, 5:50:55 PM"
    },
  ];

function compareScore(a, b) {
    if (a["score"] > b["score"]) {
        return -1;
    } else if (a["score"] < b["score"]) {
        return 1;
    } else {
        return 0; 
    }
}

function displayData(data) {
    let main = document.getElementById("info");
  
    // Clear previous data
    main.innerHTML = "";
  
    // Sort the data
    data.sort(compareScore);
  
    // Load the data
    data.forEach((item, index) => {
        // Create div
        let box = document.createElement("div");
        box.classList.add("player");
  
        // Create name elements
        let name = document.createElement("p");
        name.innerText = item["firstname"] + " " + item["lastname"];
        // Append submission date and time below name
        name.innerHTML += "<br><small>" + item["submissionDateTime"] + "</small>";
  
        // Create country element
        let country = document.createElement("p");
        country.innerText = item["country"];
  
        // Create score element
        let score = document.createElement("p");
        score.innerText = item["score"];
  
        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.addEventListener("click", () => deleteItem(index));
        deleteBtn.classList.add("delete");
  
        // Create +5 button
        let plus5Btn = document.createElement("button");
        plus5Btn.innerText = "+5";
        plus5Btn.addEventListener("click", () => incrementScore(index));
        plus5Btn.classList.add("add-sub-btn");
  
        // Create -5 button
        let minus5Btn = document.createElement("button");
        minus5Btn.innerText = "-5";
        minus5Btn.addEventListener("click", () => decrementScore(index));
        minus5Btn.classList.add("add-sub-btn");
  
        // Append elements to player div
        box.appendChild(name);
        box.appendChild(country);
        box.appendChild(score);
        box.appendChild(deleteBtn);
        box.appendChild(plus5Btn);
        box.appendChild(minus5Btn);
  
        // Append player div to main container
        main.appendChild(box);
    });
}

function deleteItem(index) {
    scores.splice(index, 1);
    displayData(scores);
}

function incrementScore(index) {
    scores[index]["score"] += 5;
    displayData(scores);
}

function decrementScore(index) {
    scores[index]["score"] -= 5;
    displayData(scores);
}

function addData(fname, lname, score, country) {
    let obj = {
        "firstname": fname,
        "lastname": lname,
        "score": score,
        "country": country,
        "submissionDateTime": new Date().toLocaleString()  // Add current date and time
    };
    scores.push(obj);
    displayData(scores);
    // Clear the form fields after submission
    document.getElementById("scoreForm").reset();
}

window.addEventListener("load", () => {
    // Show all data
    displayData(scores);
  
    // Add event listener on the form
    document.getElementById("scoreForm").addEventListener("submit", (e) => {
        // Prevent page reload 
        e.preventDefault();
      
        // Fetch data from form 
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let country = document.getElementById("country").value;
        let score = parseInt(document.getElementById("score").value);
      
        // Add the values
        addData(fname, lname, score, country);
    });
});
