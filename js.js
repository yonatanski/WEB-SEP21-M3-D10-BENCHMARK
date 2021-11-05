window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/movies/Action", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOWFhZmFhY2FhMjAwMTU1MmExZjIiLCJpYXQiOjE2MzU5NDkyMzEsImV4cCI6MTYzNzE1ODgzMX0.24xiPWaLOzReKWmnsqnwy14_S0j1XjOnO-Vim97ofr4",
    },
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
}
console.log("yoo")
