import dataBase from"./dataBase.json" assert{type:"json"}
const header = document.querySelector('.header-main-container')
const headerEl = document.querySelector('header')
const headerMain = document.querySelector("header")
const boody = document.querySelector('body')



function createELE(ele,ment,name){
    let a = document.createElement(ele)
    let b = document.querySelector(ment)

    b.appendChild(a)
    a.classList.add(name)
    return(a)
}
let svgPathAll,flipKartLogo,mobileName,sortImg,sortByFixedImg,imageData,name,rating,logo,realPrice,discount,discountTag,deliveryStatus,offer,srcAd,borderImg,ratingLogo,ratingNumber,deviceSpec,deviceDim,battery,camera,sortByFixed,luvSvg,imageHref,imageTopDeals,image,topDealsText;
const svgPath = dataBase.map((a)=>{
    if(a.name==="header"){
        svgPathAll = a.svgpath
        flipKartLogo = a.headerimage
        mobileName = a.headerTag.split(',')
    }
    
    if(a.name==="headersort"){
     sortImg = a.imgandtext
    }
    if(a.name ==="sortBy"){
     sortByFixed = a.tags.split(',')
     sortByFixedImg = a.popularityMarker.split(',')
    }
    if(a.name === "advertisement"){
        srcAd = a.src
    }
    if(a.name === "cardOne"){
        imageData =  a.img.split('!')
        name = a.mobileName.split('-')
        rating = a.rating.split(',')
        logo =a.plusLogo
        realPrice = a.realPrice.split(',')
        discount = a.discount.split(',')
        console.log(discount)
        discount = discount.map((a)=>{
     return a.trim('')
        })
        discountTag = a.discountTag.split(',')
        deliveryStatus = a.deliveryStatus
        offer = a.Offer.split(',')
        // spec = a.spec.split(',')
        ratingLogo = a.ratingLogo
        ratingNumber = a.ratingNumber.split('-')
        deviceSpec = a.deviceSpec.split(',')
        deviceDim = a.deviceDim.split(',')
        battery = a.battery.split(',')
        camera = a.camera.split(',')
        luvSvg = a.luvSvg
        
    }
    if(a.name ==="header-border"){
    borderImg =  a.src
    }
    if(a.name === "topDeals"){
        imageTopDeals = a.imageHref.split(',')
        console.log(imageTopDeals)
        topDealsText = a.text.split(',')
    }
    // if(a.name === "cardTwo"){
    //      imageDatatwo =  a.img
    //      nametwo = a.mobileName
    //      ratingtwo = a.rating.split(',')
    //      logotwo =a.plusLogo
    //      realPricetwo = a.realPrice
    //      discounttwo = a.discount
    //      discountTagtwo = a.discountTag
    //      deliveryStatustwo = a.deliveryStatus
    //      offertwo = a.Offer
    //      spectwo = a.spec
    //  }
})
console.log(imageData)
console.log(sortByFixedImg)
sortImg = sortImg.split(',')
console.log(sortImg[0])
let priceCalc=[]
 parseInt(realPrice)
for(let i=0;i<3;i++){
    priceCalc[i]= realPrice.shift()
}
console.log(realPrice)
console.log(priceCalc)

svgPathAll = svgPathAll.split(',')
header.innerHTML = `<div class="header-flex-box-one"><div class="image-div"><a href=""><svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">${svgPathAll[0]}</svg></a></div><div class="header-flipkart-logo"><img src="${flipKartLogo}"></div><div class="header-span"><span>${mobileName[0]}</span></div></div><div class="header-flex-box-two"><div class="header-search-bar"><a href=""><svg fill="#fff" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">${svgPathAll[1]}</svg></a></div><div class="shopping-cart-svg-header"><a href=""><svg width="16" height="16" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">${svgPathAll[2]}</svg></a></div><div class="header-login-div"><a href=""><span>${mobileName[1]}</span><a></div>`
headerMain.innerHTML += `<div class="border-image"><img src="${borderImg}"></div><div class="header-second-container"><a class="sort-container"><div class="header-sort-container"><div class="header-sort"><img src="${sortImg[0]}"></div><div>${sortImg[2]}</div></div></a><div class="border-div"></div><div class="header-popularity-main-container"><div class="header-popularity-container"><div class="filter"><img src="${sortImg[1]}"</div></div><div class="filter-text">${sortImg[3]}</div></div></div>`
const sortAnchorTag = document.querySelector('.sort-container')
console.log(sortAnchorTag)
////// sort on click
sortAnchorTag.addEventListener('click',()=>{
    boody.classList.toggle('no-scroll') 
createELE('div','header','sort-div-fixed')
const sortDivFixed = document.querySelector('.sort-div-fixed')
sortDivFixed.innerHTML = `<div class="sort-div-fixed-chid"><div class="sort-by-div-first-child">${sortByFixed[0]}</div><div class="fixed-border-div"></div><div class="sort-by-fixed-div-child-three"></div></div></div>`



for(let i = 0;i <4 ;i++){
    const sortByChildThree = document.querySelector('.sort-by-fixed-div-child-three')

    let createElm = document.createElement('div')
    let createElmTwo = document.createElement('div')
    let createElmFour = document.createElement('div')
    createElmFour.innerHTML = `${sortByFixed[i+1]}`
    createElmFour.classList.add('sort-text-container-div')
    createElm.appendChild(createElmTwo)
createElmTwo.appendChild(createElmFour)

    let createElmThree = document.createElement('div')
    createElm.appendChild(createElmThree)
    createElmThree.classList.add('fixed-sort-by-icon')
    createElmThree.innerHTML = `<img src="${sortByFixedImg[0]}">`
    
    createElm.classList.add('sort-by-fixed-child-three')
    console.log(createElm)
      sortByChildThree.appendChild(createElm)

const hideDiv = document.querySelector(".sort-div-fixed")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
 console.log(hideDiv)
hideDiv.addEventListener('click',function fooi(){
    boody.classList.remove('no-scroll') 
    console.log('removedone')
setTimeout(()=>{
    hideDiv.remove('sort-div-fixed')
},300)
})

// let createDiv = sortByChildThree.appendChild('createElm')
// createElm.classList.add('sorting-third-child-child')

}
const sortByFixedChildThree = document.querySelectorAll('.sort-by-fixed-child-three')
sortByFixedChildThree.forEach((a)=>{a.addEventListener('click',()=>{
    console.log('hoooyyy')
    const sortByFixedIcon = a.querySelectorAll('.fixed-sort-by-icon')
sortByFixedIcon[0].innerHTML = `<img src="${sortByFixedImg[1]}">`
console.log(sortByFixedIcon)
console.log(sortByFixedImg[1])
fooi()
function fooi(){
    console.log('removed')
    
   
setTimeout(()=>{
    console.log('removed')
    const hideDiv = document.querySelector(".sort-div-fixed")  
    hideDiv.remove('sort-div-fixed')
},300)
}

})})
// createELE('div','.sort-div-fixed','sort-div-fixed-child')
// createELE('div','.sort-div-fixed-child','sort-div-first-child') ///// first
//  createELE('div','.sort-div-first-child','sort-by-div')
// const data = document.querySelector('.sort-by-div')
// console.log(data)
// console.log(sortByFixed[0])
// data.innerHTML = `${sortByFixed[0]}`
// const fixedSort = document.querySelector('.sort-div-fixed-child')
// fixedSort.innerHTML += `<div class="sort-div-second-child></div>`

// })
// const headerDiv = document.querySelector('.sort-div-fixed')
// const body = document.querySelector('body')
// body.addEventListener('click',()=>{
// console.log('hiii')

// console.log(headerDiv)
//     headerDiv.remove()
})
const body = document.querySelector('body')
const sectionBody = document.createElement('section')
body.appendChild(sectionBody)
sectionBody
sectionBody.innerHTML = `<div class="image-div-ad"><img src="${srcAd}"></div><div class="section-main-container"></div>`
for(let i = 0;i<rating.length; i++){
    const sectionMainContainer = sectionBody.querySelector('.section-main-container')

    if(i===2){
        sectionMainContainer.innerHTML += `<div class="top-sale-deals-container"><div class="top-sale-deals-conatainer-child"><div class="top-sale-deals-content-container"><div class="image-top-deals"><img src="${imageTopDeals[0]}"></div><div class="top-deals-text"><div class="top-deals-flex-container-one">${topDealsText[0]}</div><div class="top-deals-flex-container-two">${topDealsText[1]}</div></div><div class="arrow-top-deals"><img src="${imageTopDeals[1]}"></div></div></div></div>`
    }
    let discountAmount = (priceCalc[i] * discount[i])/100
    console.log(discountAmount)

     let discountPrice = parseInt(priceCalc[i]-discountAmount)
     discountPrice = discountPrice.toString()
     console.log(typeof discountPrice)
 let discountPriceArray = discountPrice.split('')
 discountPriceArray.splice(0,0,'₹')
 if(discountPriceArray.length===4){
     discountPriceArray.splice(1,0,',')
 }else{
    discountPriceArray.splice(2,0,',')
 }
 discountPriceArray=discountPriceArray.join('')
     console.log(discountPriceArray)


sectionMainContainer.innerHTML += `<div class ="section-card-main-container">
                                     <div class="card-first-section">
                                     <div class="card-luv-logo"><div class="luv-svg-container"><img src="${luvSvg}"></div></div>
                                       <div class="card-first-section-mobile-image" data-rating="${rating[i]}"><img src ="${imageData[i]}"> </div>
                                       <div class="card-first-section-flex-container">
                                       <div class="card-second-section-container"><div class="second-card-mobile-details">${name[i]}</div><div class="second-card-second-child"><div class="popularity"><div class="second-card-second-child-first-child"><div class="second-card-second-child-first-child-rating">${rating[i]}</div><div class="second-card-second-child-first-child-logo">${ratingLogo}</div></div><div class="rated-count">${ratingNumber[i]}</div></div><div></div><div class="second-card-second-child-second-child"><img src="${logo}"></div></div><div class="second-section-third-child-flex"><div class="second-card-third-child"><div class="second-card-third-child-price">${priceCalc[i].strike()}</div><div class="third-child-discount-price">${discountPriceArray}</div><div class="second-card-third-child-text">${discount[i]}${discountTag}</div></div><div class="delivery-status">${deliveryStatus}</div></div><div class="second-card-last-child">${offer[i]}</div></div>
                                     </div></div>
        
                                     <div class="card-second-section">
                                     <div class="card-second-section-child">
                                     <div class="card-second-section-child-child">${deviceSpec[i]}</div></div>
                                  

                                     <div class="card-second-section-child">
                                     <div class="card-second-section-child-child">${deviceDim[i]}
                                     </div>
                                     </div>
            
                                     <div class="card-second-section-child">
                                     <div class="card-second-section-child-child">${battery[i]}</div></div>
                                     
                                     <div class="card-second-section-child">
                                     <div class="card-second-section-child-child">${camera[i]}</div>
                                     
                                    </div>`                                   
}

