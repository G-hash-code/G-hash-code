const loginForm = document.getElementById("loginForm");
const accountInfo = document.getElementById("accountInfo");
const balanceElement = document.getElementById("balance");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username === "user123" && password === "password123") {
        showAccountInfo(1000); // 
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

function showAccountInfo(balance) {
    loginForm.classList.add("hidden");
    accountInfo.classList.remove("hidden");
    updateBalance(balance);
}

function updateBalance(balance) {
    balanceElement.textContent = "$" + balance.toFixed(2);
}

function logout() {
    loginForm.reset();
    loginForm.classList.remove("hidden");
    accountInfo.classList.add("hidden");
}
