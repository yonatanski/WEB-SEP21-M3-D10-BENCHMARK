const title = document.querySelector(".title")
const genre = document.querySelector(".genre")
const url = document.querySelector(".url")
let result = ""

const postForm = document.querySelector(".post-form")

postForm.addEventListener("submit", (e) => {
  e.preventDefault()
  fetch("https://striveschool-api.herokuapp.com/api/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOWFhZmFhY2FhMjAwMTU1MmExZjIiLCJpYXQiOjE2MzU5NDkyMzEsImV4cCI6MTYzNzE1ODgzMX0.24xiPWaLOzReKWmnsqnwy14_S0j1XjOnO-Vim97ofr4",
    },
    body: JSON.stringify({
      name: title.value,
      category: genre.value,
      imageUrl: url.value,
      description: "lorem",
    }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err))
})
