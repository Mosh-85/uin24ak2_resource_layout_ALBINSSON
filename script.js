//variabel med ul start tag
let navCategory = "<ul>"
//henter ut alle kategorier fra resources.js og legger til i navCategory
resources.map(category => navCategory +=`<li><a href="#${category.category}">${category.category}</a></li>`)
//legger til ul end tag i navCategory
navCategory += "</ul>"
//skriver ut navCategory i nav
const nav = document.getElementsByTagName("nav")
nav[0].innerHTML = navCategory


//søker i ul, med eventlistner mouseover som starter queryselector 
document.querySelector('ul').addEventListener('mouseover', function(event) {
    //visst event.target.tagName er lik A
    if (event.target.tagName === 'A') {

        const tabs = document.querySelectorAll('ul a')
        console.log(tabs)
        //fjerner klassen active fra alle tabs
        tabs.forEach(tabs => tabs.classList.remove('active'))
        //legger til klassen active i style.css på den som er markert.
        event.target.classList.add('active')


        //fjerner # fra href og lagrer denne i id sånn at vi kan få samme id som artikkelen
        const id = event.target.getAttribute('href').slice(1)
        console.log(id)
        //lagrer resursen som har samme id som href i article
        const article = resources.find(resource => resource.category === id)
        console.log(article)

        //
        const main = document.getElementsByTagName("main")
        main[0].innerHTML = `
            <article id="${article.category}">
            <h2>${article.category}</h2>
            <p>${article.text}</p>
            <ul>${article.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}</ul>
            </article>`
    }
    console.log(event.target.tagName)
});
