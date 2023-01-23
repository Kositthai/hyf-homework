const login = document.getElementById("login");

const users = [
  {
    password: "123456",
    email: "javascript@outlook.com",
    userId: "001",
  },
  {
    password: "654321",
    email: "js@outlook.com",
    userId: "002",
  },
];

let foundUser = false;

const loginFunc = (users, e) => {
  e.preventDefault();

  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const passwordValue = passwordInput.value;
  const emailValue = emailInput.value;

  for (currentUser of users) {
    if (
      passwordValue === currentUser.password &&
      emailValue === currentUser.email
    ) {
      foundUser = true;
      alert("log in successfully");
      window.location = "./app.html";
      sessionStorage.setItem("userID", currentUser.userId);
    }
  }

  if (!foundUser) {
    alert("Invalid email or password");
  }
};

login.addEventListener("submit", (e) => loginFunc(users, e));
