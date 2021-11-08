async function getData(url){
let res=await fetch(url)
let data=await res.json()
console.log(data.meals)
return data.meals
}
function append(data,container){
    container.innerHTML=null
    data.forEach((prod)=>{
        let div=document.createElement("div")
        let img=document.createElement("img")
        let addtoCartbtn=document.createElement("button")
        addtoCartbtn.onclick=()=>{
            addtoCart(prod)
        }
        addtoCartbtn.style.backgroundColor="yellow"
        addtoCart.innerText="Add To Cart"
        img.src=prod.strMealThumb

        let p1=document.createElement("p")
        p1.innerText=prod.strMeal
        div.append(img,p1,addtoCartbtn)
        div.style.width="60%"
        container.append(div)
        img.style.width="60%"
    })
}
if(localStorage.getItem("foodCart")==null){
localStorage.setItem("foodCart",JSON.stringify([]))
}
 function addtoCart(p){
     let fooditem=JSON.parse(localStorage.getItem("foodCart"))
     fooditem.push(p)
     localStorage.setItem("foodCart",JSON.stringify(fooditem))

 }
export{getData,append,addtoCart}