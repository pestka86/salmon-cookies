const seattle = {
  name: "Seattle",
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  numberOfCookiesPerHour: 

  getNumberOfCustomers: function () {
    //saleByHour: function () {
    // let saleHour = [];
    //let total = 0;
    //for (let i = 0; i < 14 ; i++) {
    // let cookieSale =
    //randomCustomerNumber(this.minCustomersPerHour, this.///maxCustomersPerHour);
  },
  // },
};

seattle.getNumberOfCustomers();

function randomNumberOfCustomers(minCustomersPerHour, maxCustomersPerHour) {
  return (
    Math.floor(Math.random) * (maxCustomersPerHour - minCustomersPerHour + 1) +
    minCustomersPerHour
  );
}

//console.log(getNumberOfCustomers);
