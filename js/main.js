let elWrapper = document.querySelector(".wrapper");
let elTemplate = document.querySelector("#table__row").content;


function renderUniversities(array) {
    elWrapper.innerHTML = null
    let newFragment = document.createDocumentFragment()
    
    for (const item of array) {
        let newRow = elTemplate.cloneNode(true)
        
        newRow.querySelector(".country__name").textContent = item.title;
        newRow.querySelector(".country__code").textContent = item.code;
        newRow.querySelector(".cb-price").textContent = item.cb_price;
        newRow.querySelector(".buy-price").textContent = item.nbu_buy_price;
        newRow.querySelector(".cell-price").textContent = item.nbu_cell_price;
        
        newFragment.appendChild(newRow)
    }
    elWrapper.appendChild(newFragment)
}


fetch("https://nbu.uz/uz/exchange-rates/json/")
.then(res => res.json())
.then(data => renderUniversities(data))

// __________________________________________________
// let result
// fetch("https://nbu.uz/uz/exchange-rates/json/")
// .then(res => res.json())
// .then(data => renderUniversities(data))
// .then(function(data){
//     let result = data.sort(function(a,b){
//         return b.cb_price- a.cb_price
//     })
// console.log(result);

// })