// var request = new XMLHttpRequest()
// request.open('GET', 'https://content.guardianapis.com/search?api-key=3d1bd118-3d6f-4211-a61e-3d0f966b08bb', true)
// request.onload = function() {
// // Begin accessing JSON data here
// var data = JSON.parse(this.response)
//   if (request.status >= 200 && request.status < 400) {
//       data.response.results.forEach(news => {
//        // console.log(news)
//       // Create a div with a card class
//      const card = document.createElement('div')
//      card.setAttribute('class', 'card')

//       // Create an h1 and set the text content to the film's title
//      const h1 = document.createElement('h1')
//      h1.textContent = news.webTitle

//      const p = document.createElement('p')
//      news.webTitle = news.webTitle.substring(0, 100) // Limit to 300 chars
//      p.textContent = `${news.webTitle}...` // End with an ellipses

//      // Append the cards to the container element
//      container.appendChild(card)
//      // Each card will contain an h1 and a p
//      card.appendChild(h1)
//      card.appendChild(p)

//     })
//   } else {
//     const errorMessage = document.createElement('marquee')
//     errorMessage.textContent = `Gah, it's not working!`
//     app.appendChild(errorMessage)
//   }
// }

// request.send()