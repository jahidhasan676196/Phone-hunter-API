const loadData =async()=>{
    const res =await fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json()
    const phones =data.data;
    displayPhone(phones);
}
const displayPhone = phones=>{
    // get elements
    const cardcontainer=document.getElementById('card-container')
    phones.forEach(phone => {
        // create section
        const phonecard = document.createElement('div')
        phonecard.classList=`card w-96 bg-base-100 shadow-xl`
        phonecard.innerHTML=`                <div class="">
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div`
    //   show data
    cardcontainer.appendChild(phonecard);

        // console.log(phone);
    });
}
loadData();