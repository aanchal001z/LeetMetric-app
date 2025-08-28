// Sample users (dummy login system)
const users = {
  "admin": "1234",
  "user": "password"
};

// Sample questions by level
const questions = {
  easy: [
    "Reverse a string",
    "Find the maximum number in an array",
    "Check if a number is prime"
  ],
  medium: [
    "Find the longest substring without repeating characters",
    "Implement binary search",
    "Check if two strings are anagrams"
  ],
  hard: [
    "Solve the N-Queens problem",
    "Implement a Trie data structure",
    "Find shortest path using Dijkstra's Algorithm"
  ]
};

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMsg = document.getElementById("login-error");

  if (users[username] && users[username] === password) {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Invalid Username or Password!";
  }
}

function showQuestions(level) {
  let questionList = document.getElementById("question-list");
  questionList.innerHTML = `<h3>${level.toUpperCase()} Questions:</h3>`;
  questions[level].forEach(q => {
    let p = document.createElement("p");
    p.textContent = q;
    questionList.appendChild(p);
  });
}

function logout() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("login-container").classList.remove("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
