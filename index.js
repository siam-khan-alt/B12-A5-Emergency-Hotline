function getId(id) {
  const element = document.getElementById(id);
  return element;
}

let count = 0
const hearts = document.querySelectorAll(".heart")
for (const heart of hearts) {
    heart.addEventListener("click", function (e) {
     e.preventDefault() 
    count ++
    getId("heart-count").innerText = count
    })
}

const calls = document.querySelectorAll(".call-button")
for (const call of calls) {
    call.addEventListener("click", function (e) {
       e.preventDefault() 
       const coin = getId("coin").innerText

       
     


        if (Number(coin) >= Number(20)) {
            const coinCust = Number(coin)-Number(20)
       getId("coin").innerText = coinCust

       const forA =call.closest(".service-card")
       const service = forA.querySelector(".service").innerText
       const number = forA.querySelector(".number") .innerText
       alert(`${service}, ${number}`)

       const date = new Date().toLocaleTimeString()

       const allhistory = getId("history")
       const history = document.createElement("div")
       history.innerHTML =`
       <div class="flex justify-between items-center bg-[#FAFAFA] p-4 rounded-lg">
            <div class="">
                <h4>${service}</h4>
                <p>${number}</p>
            </div>
            <div>${date} </div>
         </div>`;

         allhistory.append(history)
       }
       else {
        return alert (" ❌ আপনার পর্যাপ্ত কয়েন নাই,কল করতে কমপক্ষে ২০ কয়েন লাগবে ")
       }
    
       
    })
}



 
getId("clear-btn").addEventListener("click",function() {
   
  getId ("history").innerText=" ";
})