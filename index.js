const searchinput=document.getElementById('searchinput')
const getHero=document.getElementById('getHero')
const randomHero=document.getElementById('randomHero')
const heroImage=document.getElementById('heroImage')

const token=112069548637544
const url=`https://superheroapi.com/api.php/${token}`

const getRandomhero=(id)=>{
    fetch(`${url}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            console.log(json.powerstats)
            showInfo(json)
        })
}

const searchHero=(name)=>{
    fetch(`${url}/search/${name}`)
        .then(response=>response.json())
        .then(json=>{
            const hero=json.results[0]
            showInfo(hero)
        })
}

const statToEmoji={
    intelligence:'🧠',
    strength:'💪',
    speed:'⚡',
    power:'📊',
    combat:'⚔️',
    durability:'🏋️'
}

const showInfo=(character)=>{
    const name=`<h2>${character.name}</h2>`
    const img=`<img src="${character.image.url}" heigth=300 width=300/>`
    const stat=Object.keys(character.powerstats).map(stat=>{
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()} ${character.powerstats[stat]}</p>`
    }).join('')
    heroImage.innerHTML=`${name}${img}${stat}`
}

const getID=()=>{
    const g=Math.floor(Math.random() * 732) + 1
    return g
}

randomHero.onclick=()=>getRandomhero(getID())
getHero.onclick=()=>searchHero(searchinput.value)
