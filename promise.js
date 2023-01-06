const baseurl = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"

const paragraph = document.getElementById("paragraph")


const fetchingPoke = async function () {



    getPoke = await fetch(baseurl).then(res => res.json())

    console.log(`This is getPoke`, getPoke)

    getinfo = getPoke.results

    let geturl = getinfo.map(d => d.url)

    console.log(geturl)


    const getmypoki = await geturl.map(poke => {
        let shardul = fetch(poke)
        return shardul

    })
    console.log(getmypoki)

    Promise.all(getmypoki)
        .then(re => {
           return Promise.all(re.map(suraj => suraj.json()))
        })
        .then(value => value.map(a => {

            let okAdd= `<p style="text-transform: capitalize; color: red; font-size:1.3rem">${a.name}</p>`
            console.log(a.name)
            paragraph.innerHTML += okAdd
            
        }   )) 

    

       

        

        

}

fetchingPoke()












