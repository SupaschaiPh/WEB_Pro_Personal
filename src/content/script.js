let contents = []

function createContentCard(title = "", desc = "", coverURL = "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", contentId) {
    const card = document.createElement("div")
    const figure = document.createElement("figure")
    const cover = document.createElement("img")
    const cardBody = document.createElement("div")
    const cardTitle = document.createElement("h2")
    const cardDesc = document.createElement("p")
    const goButton = document.createElement("a")


    card.setAttribute("class", "card bg-base-100 shadow")
    cardTitle.setAttribute("class", "card-title")
    cardBody.setAttribute("class", "card-body")
    goButton.setAttribute("class", "btn w-full rounded-t-none")

    cover.setAttribute("src", coverURL)
    figure.appendChild(cover)

    cardTitle.appendChild(document.createTextNode(title))
    cardDesc.appendChild(document.createTextNode(desc))
    cardBody.appendChild(cardTitle, cardDesc)

    goButton.appendChild(document.createTextNode('อ่านเพิ่มเติม'))

    card.appendChild(figure)
    card.appendChild(cardBody)
    card.appendChild(goButton)

    $("#contents").append(card)
}

async function loadContent() {
    try{
    contents = await $.getJSON("../api/content.json")
    console.log(contents)
    for (let content of contents) {
        createContentCard(content.title, content.desc, undefined, Math.floor(Math.random() * 100))
    }
    $("#loaddingContent").remove()
    }catch (err){
        $("#loaddingContent").text("Not Found Any Content.")
        console.error(err)

    }
}

function searchContent() {
    const keyword = $("#keyword").val()
    $("#contents").html("")
    for (let content of [...contents].filter((k) => k.title?.toUpperCase().includes(keyword.toUpperCase())  ||keyword == "")) {
        createContentCard(content.title, content.desc, undefined, Math.floor(Math.random() * 100))
    }
}

function initContent() {
   
    loadContent()

}
initContent()