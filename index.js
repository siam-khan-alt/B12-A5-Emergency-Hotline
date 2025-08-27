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

       const parent = call.parentElement;
      const serviceCd = parent.parentElement;

       const service = serviceCd.querySelector(".service").innerText
       const number = serviceCd.querySelector(".number") .innerText
       alert(`${service}, ${number}`)

       const date = new Date().toLocaleTimeString()

       const allhistory = getId("history")
       const history = document.createElement("div")
       history.innerHTML =`
       <div class="flex justify-between items-center bg-[#FAFAFA] p-4 rounded-lg hind-madurai">
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


let copycount = 0
const copyall = document.querySelectorAll(".copy-btn")
for (const copy of copyall) {
    copy.addEventListener("click", function (e) {
       e.preventDefault() 
       const parent = copy.parentElement;
      const service = parent.parentElement;
       const number = service.querySelector(".number") .innerText
       navigator.clipboard.writeText(number).then(() => {
            alert(`নম্বর কপি হয়েছে: ${number}`)
        })
       copycount++
       getId("copy-count").innerText = copycount
    
    })}


