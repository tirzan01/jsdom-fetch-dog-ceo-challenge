console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',()=>{

    // fetch('https://dog.ceo/api/breeds/image/random/4')
    //     .then(resp=>{return resp.json()})
    //     .then(json=>{   
    //         json.message.forEach(e => {
    //             let img = document.createElement('img')
    //             img.src = e
    //             document.getElementById('dog-image-container').appendChild(img)
    //         });
    //     })

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json=>{
            let breeds = Object.keys(json.message)
            let subbreeds = Object.values(json.message)
            
                breeds.forEach(e=>{
                    // if(json.message[e].length !== 0){
                    //     let breed = document.createElement('li')
                    //     breed.textContent = e
                    //     let subbreed = document.createElement('ul')
                    //     json.message[e].forEach(elem=>{
                    //         let li = document.createElement('li')
                    //         li.textContent = elem
                    //         subbreed.appendChild(li)
                    //     }
                            // )
                    //     document.getElementById('dog-breeds').appendChild(breed)
                    //     document.getElementById('dog-breeds').appendChild(subbreed)
                    //     breed.addEventListener('click', ()=>{
                    //         if(breed.style.color === 'green'){
                    //             breed.style.color = 'black'
                    //         }else{
                    //             breed.style.color = 'green'
                    //         }
                    //     })
                    // }else{
                        let breed = document.createElement('li')
                        breed.textContent = e
                        document.getElementById('dog-breeds').appendChild(breed)
                        breed.addEventListener('click', e=>{
                            if(breed.style.color === 'green'){
                                breed.style.color = 'black'
                            }else{
                                breed.style.color = 'green'
                            }
                        breedss.push(breed)                            
                        })
                    // }
                })
        })
        
    
    function onChange(){
        
        document.getElementById('breed-dropdown').addEventListener('change', ()=>{       
        let letter = document.getElementById('breed-dropdown').value
        let y = document.querySelectorAll('li')
        const breed = document.getElementById('dog-breeds').innerText.split('\n')               
            console.log(breed)
            for (let i = 0; i < breed.length; i++) {
                if (breed[i].startsWith(letter)){
                y[i].style.display = 'block' 
                          
            }else{
                y[i].style.display = 'none'
            }}
        })
        
    }
    onChange()
   

})