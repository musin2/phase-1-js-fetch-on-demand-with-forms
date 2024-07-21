const init = () => {
    let form = document.querySelector('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = document.querySelector('input#searchByID')
  
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(data => {
      let title = document.querySelector('section#movieDetails h4')
      let summary = document.querySelector('section#movieDetails p')
  
      title.innerText = data.title
      summary.innerText = data.summary
    })
  })
}

document.addEventListener('DOMContentLoaded', init);