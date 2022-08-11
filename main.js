// compte à rebours

let questionIdx = 0;
let count;
let interval;
let scores = 0;
const questions = [
  { question: "Question 1", assertssions: ["a", "b", "c", "d"], good: 0 },
  { question: "Question 2", assertssions: ["E", "F", "G", "H"], good: 1 },
  { question: "Question 3", assertssions: ["a", "b", "c", "d"], good: 2 },
  { question: "Question 4", assertssions: ["a", "b", "c", "d"], good: 3 },
  { question: "questions5", assertssions: ["a", "b", "c", "d"], good: 0 },
  { question: "questions6", assertssions: ["a", "b", "c", "d"], good: 1 },
  { question: "questions7", assertssions: ["a", "b", "c", "d"], good: 2 },
  { question: "questions8", assertssions: ["a", "b", "c", "d"], good: 3 },
  { question: "questions9", assertssions: ["a", "b", "c", "d"], good: 0 },
  { question: "questions10", assertssions: ["a", "b", "c", "d"], good: 1 },
  { question: "questions11", assertssions: ["a", "b", "c", "d"], good: 2 },
  { question: "questions12", assertssions: ["a", "b", "c", "d"], good: 3 },
  { question: "questions13", assertssions: ["a", "b", "c", "d"], good: 0 },
  { question: "questions14", assertssions: ["a", "b", "c", "d"], good: 1 },
  { question: "questions15", assertssions: ["a", "b", "c", "d"], good: 3 },
];
function compte() {
  clearInterval(interval);
  count = 61;
  interval = setInterval(function () {
    count--;
    document.querySelector("span").innerHTML = count;
    document.querySelector(".progress-Time").style.display = "block";
    if (count == 0) {
      clearInterval(interval);
      if (count == 0 && questionIdx == 14) {
        const bascule = document.getElementById("frame");
        bascule.innerHTML = `
            <div class="content">
                <h2>${valuer}</h2>
                <p>Josephngyamba98@gmail.com</p>
                <img src="https://icon-library.com/images/check-icon/check-icon-10.jpg" alt="">
                <p>${scores}/15</p>
                <button class="bouton-Accueil"  name="Accueil" >Accueil</button>
            </div>
  `;
        goback(bascule);
      }
      questionIdx++;
      const bascule = document.getElementById("frame");
      const question = questions[questionIdx];
      const assertssions = question.assertssions
        .map(
          (assertssion, idx) => `
    <div class="form-quiz">
      <input  class='rdio' type="radio" id="${idx}" name="reponse"/>
      <p>.${assertssion}</p>
    </div>
  `
        )
        .join("");
      bascule.innerHTML = `<div class="container-content-Quiz">
    <p>${question.question}</p>
    <p class="paragraph-quiz">
      Question ${questionIdx + 1}/15 <span class="paragraph-time"></span>
    </p>
    <div class="progress-bar">
      <div class="progress-Time"></div>
    </div>
    <form>
      <div class="form-elemenntPage2">
        ${assertssions}
        <div class="button1">
          <button class="btn-2" id="btn1">Quitter</button>
          <button class="btn-3" type="submit" id="btn2" disabled>Suivant</button>
        </div>
      </div>
    </form>
  </div>`;
      bindEventNext();
      const radios = document.querySelectorAll(".rdio");
      radios.forEach((radio) => {
        radio.addEventListener("change", function (e) {
          const suivant = document.querySelector(".btn-3");
          suivant.disabled = false;
          suivant.style.backgroundColor = "green";
          const answer = question.good;
          if (radio.id == answer) {
            scores++;
          }
        });
      });

      compte();
    }
  }, 1000);
}

const action = document.querySelector(".btn-1");
let valuer = document.getElementById("nom").value;
let email = document.getElementById("mail").value;

action.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("nom").style.borderColor = "red";
  document.getElementById("mail").style.borderColor = "red";
  console.log(document.getElementById("erreur-message"));
  document.getElementById(
    "erreur-message"
  ).innerHTML = `N’oubliez pas de renseigner votre nom avant de commencer le Quiz. `;
  document.getElementById(
    "mail-error"
  ).innerHTML = `N’oubliez pas de renseigner votre email avant de commencer le Quiz. `;
  setQuestion();
  compte();
});

function setQuestion() {
  const bascule = document.getElementById("frame");
  const question = questions[questionIdx];
  const assertssions = question.assertssions
    .map(
      (assertssion, idx) => `
    <div class="form-quiz">
      <input  class='rdio' type="radio" id="${idx}" name="reponse"/>
      <p>.${assertssion}</p>
    </div>
  `
    )
    .join("");
  bascule.innerHTML = `<div class="container-content-Quiz">
    <p>${question.question}</p>
    <p class="paragraph-quiz">
      Question ${questionIdx + 1}/15 <span class="paragraph-time"></span>
    </p>
    <div class="progress-bar">
      <div class="progress-Time"></div>
    </div>
    <form>
      <div class="form-elemenntPage2">
        ${assertssions}
        <div class="button1">
          <button class="btn-2" id="btn1">Quitter</button>
          <button class="btn-3" type="submit" id="btn2" disabled>Suivant</button>
        </div>
      </div>
    </form>
  </div>`;
  document.querySelector(".progress-Time").style.display = "none";
  bindEventNext();
  const radios = document.querySelectorAll(".rdio");
  radios.forEach((radio) => {
    radio.addEventListener("change", function (e) {
      const suivant = document.querySelector(".btn-3");
      suivant.disabled = false;
      suivant.style.backgroundColor = "green";
      const answer = question.good;
      if (radio.id == answer) {
        scores++;
      }
    });
  });
  const quit = document.querySelector(".btn-2");
  quit.addEventListener("click", function (e) {
    e.preventDefault();
    const bascule = document.getElementById("frame");
    if (scores <= 7) {
      bascule.innerHTML = `
            <div class="content">
                <h2>${valuer}</h2>
                <p>Josephngyamba98@gmail.com</p>
                <img src="https://static.vecteezy.com/system/resources/previews/001/200/274/original/check-png.png" alt="">
                <p>${scores}/15</p>
                <button class="bouton-Accueil"  name="Accueil" >Accueil</button>
            </div>     
   `;
    } else {
      bascule.innerHTML = `
            <div class="content">
                <h2>${valuer}</h2>
                <p>Josephngyamba98@gmail.com</p>
                <img src="https://icon-library.com/images/check-icon/check-icon-10.jpg" alt="">
                <p>${scores}/15</p>
                <button class="bouton-Accueil"  name="Accueil" >Accueil</button>
            </div>     
   `;
    }

    goback(bascule);
  });
}

function bindEventNext() {
  const suivant = document.querySelector(".btn-3");
  suivant.addEventListener("click", (e) => {
    e.preventDefault();
    questionIdx++;
    setQuestion();
    compte();
  });
  if (questionIdx == 14) {
    const suivant = document.querySelector(".btn-3");
    suivant.textContent = `Terminer`;
    suivant.addEventListener("click", (e) => {
      e.preventDefault();
      const bascule = document.getElementById("frame");
      bascule.innerHTML = `
            <div class="content">
                <h2>${valuer}</h2>
                <p>Josephngyamba98@gmail.com</p>
                <img src="https://icon-library.com/images/check-icon/check-icon-10.jpg" alt="">
                <p>${scores}/15</p>
                <button class="bouton-Accueil"  name="Accueil" >Accueil</button>
            </div>
       
   `;

      const back = document.querySelector(".bouton-Accueil");
      goback(bascule);
    });
  }
}

function goback(bascule) {
  const back = document.querySelector(".bouton-Accueil");
  back.addEventListener("click", function (e) {
    e.preventDefault();
    bascule.innerHTML = `<div class="container-content">
          <h1>Java Script Quiz</h1>
          <p>
            Évaluez vos connaissances en JavaScript en <br />
            répondant aux questions que nous avons <br />
            spécialement sélectionnées pour vous. <br />
            C'est fun et c'est gratuit.
          </p>
          <form>
            <div class="form-element">
              <label for="">Nom</label>
              <input type="text" name="nom" id="nom" />
              <p id="erreur-message"></p>
            </div>
            <div class="form-element">
              <label for="mail">Email</label>
              <input type="email" name="email" id="mail" required />
              <p id="mail-error"></p>
            </div>
            <div class="button">
              <button class="btn-1" type="submit">Commencer</button>
            </div>
          </form>
        </div>`;
  });
}
