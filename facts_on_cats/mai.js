

// const mybtn=document.querySelector("button")




// const printname=(namee)=>{
//     console.log(new Date(Date.now())
//     )}
// const timeout= setInterval(printname,1000,"Sayan")
// mybtn.addEventListener("click",()=>{
//     clearInterval(timeout)
// })
// class myclass{
//     constructor(a,b){
//         this.weight=Number(a)
//         this.height=Number(b)
//     }
//     avg(){
//         return this.weight+this.height;
//     }

// }
// class your extends myclass{
//     constructor(a,b,c){
//         super(a,b)
//         this.rizz=c
//     }
//     avg(){
//         return (this.height+this.rizz+this.weight)/3
//     }
// }
// const a=new your(10,10,10);
// console.log(a.avg());
// setTimeout(() => {
    
// }, timeout);

//call back
//function called as arguments
//  function sum (a,b,c){
//     const result= a+b;
//     c(result); // example of call back function

//  }
//  function displaysum(result){
//     const h1 = document.querySelector("h1");
//     h1.innerText=result;
//  }
// sum(11,3,displaysum)
// sum(22,2,alert)
// const arr=[1,2,43,5,22]
// function cal(arr=[],c){
//     const ans=[]
//     for (let i =0;i<arr.length;i++){
//         ans.push(c(arr[i]))
//     }
//     console.log(ans);
// }

// cal(arr,(a)=>
//     a*10
// )
// cal(arr,(a)=>a/10)

// call back asycn
// let i=0
// const gamelist=[]
// const game={}
// const fetchData=(callback) => {
//   setTimeout((callback) => {
//     gamelist.push({
//         name:"GTA5",
//         id:++i
//     },
//     {
//         name:"AOT",
//         id:++i
//     },
//     {
//         name:"Genshin Impact",
//         id:++i
//     },)
//     callback()
//     console.log(gamelist)
//   }, 4000,callback);
// }

// const displaygame=() => {
//   setTimeout(() => {
//     for(let i =0;i<gamelist.length;i++){
        
//         const p=document.createElement("p")
//         p.innerText=gamelist[i].name
//         document.body.append(p)
//     }
//   }, 1000);
// }
// fetchData(displaygame)
//call back hell
//promise .......
// const a = new Promise((resolve, reject) => {
//   let success=prompt("Please enter you number")
//   if(success==1){
//     resolve("Promise fulfilled")
//   }
//   else{
//     reject("Some Technical Error")
//   }
// }
// )
// a.then((parameter) => {
//   console.log(parameter)
// }).catch((error) => {
//   console.log(error)
// })
//json file is itself an object 

 const url = "https://catfact.ninja/fact"
 const p = document.getElementById("facts")
 const mybtn=document.getElementById("mybtn")

//  const fetchdata=() => {
//     p.innerText="Loading....."
//    fetch(url).
//    then((response)=>response.json()).
//    then((data)=>p.innerText=data.fact).
//    catch((e)=> alert(e))
//  }

const fetchcode=async () => {
  p.innerText="loading"
  const response = await fetch(url)
  const data = await response.json()
  p.innerText=data.fact

}

