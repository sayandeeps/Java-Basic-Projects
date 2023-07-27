const input= document.getElementById("numofWords")
const container = document.querySelector(".container")
let paragraphs =[]

const genword = (n)=>{
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let text =""

    for (let i =0;i<n;i++){
        text+=letter[(Math.random() * (letter.length -1)).toFixed(0)]
    }



    return text;

}
console.log(input.value)

const getPara=()=>{
    

    
        const numofWords=Number(input.value)
    if(numofWords !=0){    
    const para=document.createElement("p")
    let data=""
    for(let i =0;i<Number(input.value);i++){
        data+= genword((Math.random()*13).toFixed(0))
        data+=" "
    }
    para.innerHTML=data
    para.setAttribute("class", "para")
    para.setAttribute("id",paragraphs.length)
    paragraphs.push(para)
    container.append(para)
    console.log(container)
    console.log(paragraphs)
}
else{
    alert("Please give the no. of words you want in the paragraph")
}
    
    
}
const remPara=()=>{
        
         if(paragraphs.length>0){
       try{ 
        const parag=document.getElementById(paragraphs.length - 1)
        paragraphs.pop()

        parag.remove()
        
        console.log(paragraphs.length)
       }
       catch(err){
        alert("some error occured",err)
       }}
       else{
        alert("no para to remove")
       }

    
    
}
