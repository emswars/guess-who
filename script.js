function toggleEliminated(element) {
    element.classList.toggle('eliminated')
}

let cardArray = [
    {
    name: 'Sakura',
    image: 'IMAGES/characters_01.jpg'
},
{
    name: 'Kaede',
    image: 'IMAGES/characters_02.jpg'
},
{
    name: 'Aya',
    image: 'IMAGES/characters_03.jpg'
},
{
    name: 'Yuuki',
    image: 'IMAGES/characters_04.jpg'
},
{
    name: 'Mikoto',
    image: 'IMAGES/characters_05.jpg'
},
{
    name: 'Ren',
    image: 'IMAGES/characters_06.jpg'
},
{
    name: 'Ryo',
    image: 'IMAGES/characters_07.jpg'
},
{
    name: 'Yori',
    image: 'IMAGES/characters_08.jpg'
},
{
    name: 'Hana',
    image: 'IMAGES/characters_09.jpg'
},
{
    name: 'Tatsuya',
    image: 'IMAGES/characters_10.jpg'
},
{
    name: 'Taro',
    image: 'IMAGES/characters_11.jpg'
},
{
    name: 'Mai',
    image: 'IMAGES/characters_12.jpg'
},
{
    name: 'Emiko',
    image: 'IMAGES/characters_13.jpg'
},
{
    name: 'Ayumi',
    image: 'IMAGES/characters_14.jpg'
},
{
    name: 'Hotaru',
    image: 'IMAGES/characters_15.jpg'
},
{
    name: 'Haru',
    image: 'IMAGES/characters_16.jpg'
},
{
    name: 'Kazuya',
    image: 'IMAGES/characters_17.jpg'
},
{
    name: 'Akira',
    image: 'IMAGES/characters_18.jpg'
},
{
    name: 'Saki',
    image: 'IMAGES/characters_19.jpg'
},
{
    name: 'Kazuo',
    image: 'IMAGES/characters_20.jpg'
},
]

function selectRandomCard(element) {
    let cardNum = Math.floor(Math.random() * 20)
    let randomCard = cardArray[cardNum]
    let randomImg = randomCard.image
    let img = document.querySelector('.mystery')
    img.src = randomImg
    document.querySelector('.mystery-name').innerHTML = randomCard.name
}
selectRandomCard()

function populateCards() {
    let cardsSelect = document.querySelector('.cards')
    for (let i = 0; i < cardArray.length; i++){
        cardsSelect.innerHTML += '<div class="card" onclick=' + `toggleEliminated(this)` + '>' +
        '<img src=' + cardArray[i].image + '>' +
        '<span>' + cardArray[i].name + '</span>' +
        '</div>'
    }
}
populateCards()
