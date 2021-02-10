// write your code here

const spiceBlendPhoto = document.getElementById('spice-blend-detail')
const ingredientContainer = document.getElementsByClassName('ingredients-container')

const spiceBlendIngred = document.querySelector('#ingredients-container')

// ********fetch request**********

window.onload = function getSpiceBlend(){
    fetch ('http://localhost:3000/spiceblends/1')
        .then(res => res.json())
        .then(data => showSpiceBlend(data))
        
        }
        
        
     window.onload =   function getSpiceBlendIng(){
            fetch ('http://localhost:3000/spiceblends/1')
                .then(res => res.json())
                .then(data => showSpiceIng(data.ingredients))
               

                }
                    
                
                
        



// *******************functons******************

function showSpiceBlend(data){
  
spiceBlendPhoto.innerHTML = `
<h2>${data.title}</h2>
<img class= 'detail-image'  src=${data.image} />
`


}
function showSpiceIng(data){
    (data.forEach(myfunction));
    function myfunction(item, index){
   (item.name)
    console.log(ingredientContainer)
    }
    
     }


   
