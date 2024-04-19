// confirmation password
// check password and confirm password

const password = document.getElementById("password");
const password_password = document.getElementById("password_password");
const message_error = document.querySelector(".message_error");

password_password.onkeyup = () => {
  // evenement lorsqu'on ecrit dans le champs : confirmation du mot de passe

  if (password.value !== password_password.value) {
    message_error.innerText = "Les mots de passes ne sont pas conformes";
  } else {
    message_error.innerText = "";
  }
};
