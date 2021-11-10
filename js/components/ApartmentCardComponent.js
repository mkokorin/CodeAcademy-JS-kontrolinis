class ApartmentCardComponent {
    static USD_EUR = 1.17;
    constructor(props) {
      this.props = props;
      this.htmlElement = document.createElement("article");
  
      console.log(props);
      this.init();
    }
  
    converter = (curr, amount) => {
      let converted;
  
      switch (curr) {
        case "$":
          converted = Math.round(amount * ApartmentCardComponent.USD_EUR)
          break;
        case "€":
          return amount;
      }
      return converted
    };
  
  
    init = () => {
      const { type, owner, roomCount, squares, adress, price, imgSrc, onDelete } = this.props;

      const adressEdited = `${adress.street} ${adress.number}, ${adress.city}, ${adress.country}`
  
      this.htmlElement.className = "card p-3 shadow";
      this.htmlElement.innerHTML = `
      <img class="card-img-top" src="${imgSrc}">
      <div class="card-body">
        <h4 class="card-title text-center">${type}</h5>
        <div>
          <p>Adress: ${adressEdited}</p>
          <p>Room Count: ${roomCount}</p>
          <p>Squares: ${squares}</p>
        </div>
        <div>
           <p class="text-center">Owner</p>
           <p>Name: ${owner.fullname} </p>
           <p>Email: ${owner.email} </p>
           <p>Phone: ${owner.phone} </p>
         </div>
         <p>Price: ${this.converter(price.currency, price.amount)} € </p>
    </div>
    </div>
    <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-2 me-2">✕</button>
    `
    const btn = this.htmlElement.querySelector('.btn');
    btn.addEventListener('click', onDelete);
    };
  }