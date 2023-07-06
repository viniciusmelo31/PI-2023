function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "gustavo-mangini" && password === "1234") {
    alert("Login bem-sucedido! Redirecionando para a página principal...");
    // Redirecionar para outra página
    window.location.href = "home.html";
  } else {
    alert("Usuário ou senha incorretos. Por favor, tente novamente.");
  }
}