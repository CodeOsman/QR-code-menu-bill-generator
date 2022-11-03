let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}


window.onload = fadeOut;
/* intializing variable*/

let total=0;
let list_items=[];
let prices={
  "fries":159,"normalpizza":299,"largepizza":399,"chicken":199,"burger":150,"icecream":399,"leg":499,"waffle":50,"large burger":50,"roti":50,"pancake":50,"cupcake":50,"mocktail":50,"dessert":50,"fruitjuice":50

}
let units={

}



function order()
{
  
  
  let bill_payment=document.getElementById("bill_payment");
  console.log(bill_payment);
  bill_payment.classList.add("payment_important");
  
  /*update the customer name*/
  let invoice_name=document.getElementById("invoice_name");
  let username=document.getElementById("username");
  invoice_name.textContent=username.value;
  

  /* update the phone number*/
  let invoice_number=document.getElementById("invoice_number");
  let number=document.getElementById("number");
  invoice_number.textContent=number.value;

  /* update the email*/
  let invoice_email=document.getElementById("invoice_email");
  let email=document.getElementById("email");
  invoice_email.textContent=email.value;

  /* update the date*/
  let invoice_date=document.getElementById("invoice_date");
  let date=document.getElementById("date");
  invoice_date.textContent=date.value;

  let tbody=document.getElementById("tbody");
  for(let i of list_items){
    let tr=document.createElement("tr");
    let tr_product=document.createElement("td");
    let tr_unit=document.createElement("td");
    let tr_price=document.createElement("td");
    let tr_total=document.createElement("td");
    let line=document.createElement("br");
    tr_product.textContent=i+"    ";
    tr_unit=units[i]+"    ";
    tr_price.textContent=prices[i]+"   ";
    tr_total=units[i]*prices[i]+"  ";
    /*appending the childs to the tr*/
    tr.append(tr_product);
    tr.append(tr_unit);
    tr.append(tr_price);
    tr.append(tr_total);
    /* appending to the tbody*/
    tbody.appendChild(tr);
    tbody.append(line);
    
     
  }
  let tr=document.createElement("tr");
    let tr_product=document.createElement("td");
    let tr_unit=document.createElement("td");
    let tr_price=document.createElement("td");
    let tr_total=document.createElement("td");
    tr_price.textContent="total";
    tr_total.textContent=total;

  /*appending the childs to the tr*/
  tr.append(tr_product);
  tr.append(tr_unit);
  tr.append(tr_price);
  tr.append(tr_total);
  /* appending to the tbody*/
  tbody.appendChild(tr);


}
function Increment(name,price) {
  let counterElement = document.getElementById(arguments[0]);
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
    total+=arguments[1];
    let found=false;
    for(let i of list_items)
    {
      if(i==arguments[0]){
        found=true;
        break;
      }
    }
    if(!found){
      list_items.push(arguments[0]);
    }

    if(arguments[0] in units){
      units[arguments[0]]=units[arguments[0]]+1;
    }
    else{
      units[arguments[0]]=1;
    }
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}

function Decrement(name,price) {
  let counterElement = document.getElementById(arguments[0]);
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  console.log(updatedCounterValue);
  if (updatedCounterValue===0){
    counterElement.style.color = "green";
    total-=arguments[1];
    list_items.pop(arguments[0]);

  }
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
    total-=arguments[1];

    if(arguments[0] in units){
      units[arguments[0]]=units[arguments[0]]-1;
    }
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
    updatedCounterValue=0;
    alert("Number of Items must be positive");
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}