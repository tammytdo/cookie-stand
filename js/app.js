'use strict';

// //helper functions
// var _random = function(min, max){
//   return Math.random()*(max-min) + min;
// };

// =====================================================================
// Constructor Function

var Store = function(min_cust, max_cust, avg_cookies_per_customer, store_name, store_open, store_close, cookies_sold_each_hour) {
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookies_per_customer = avg_cookies_per_customer;
  this.store_name = store_name;
  this.store_open = store_open;
  this.store_close = store_close;
  this.cookies_sold_each_hour = [];
  this.avg_cookies_per_customer = avg_cookies_per_customer || 6.3;
};

// Calculates the average number of cookies, per customer, needed each hour
Store.prototype.cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

// Calculates the average number of cookies, per customer, needed each hour
Store.prototype.calculate_cookies_per_hour = function() {
  for (var i = this.store_opens; i < this.store_close; i++) { //change to 6am/8pm?
    var cookies_sold = this.cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

// ==============================================================
// rendering the hard way

var render_all_stores_table = function() {
  this.cookies_sold_each_hour();

  var target = document.getElementById('cookie-table');

  var store_row = document.createElement('tr');


  var name_td = document.createElement('td');     // field for name of store
  name_td.textContent = firstAndPike.store_name;  // gave field storename
  store_row.appendChild(name_td);                 // append text to the store row

  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var cookie_hour_td = document.createElement('td');
    cookie_hour_td.textContent = this.cookies_sold_each_hour[i];
    store_row.appendChild(cookie_hour_td);
  }

  target.appendChild(store_row);
};

Store.prototype.render_as_a_table_row = render_one_stores_table;


// Store.prototype.render = function () {
//   var target = document.getElementById('cookie-table');
//   var tr_el = document.createElement('tr');
//   var td_el = document.createElement('td');

//   td_el.textContent = this.min_cust;
//   tr_el.appendChild(td_el);

//   td_el = document.createElement('td');
//   td_el.textContent = this.max_cust;
//   tr_el.appendChild(td_el);

//   td_el = document.createElement('td');
//   td_el.textContent = this.avg_cookies_per_customer;
//   tr_el.appendChild(td_el);

//   td_el = document.createElement('td');
//   td_el.textContent = this.store_name;
//   tr_el.appendChild(td_el);
  
//   td_el = document.createElement('td');
//   td_el.textContent = this.store_open;
//   tr_el.appendChild(td_el);

//   td_el = document.createElement('td');
//   td_el.textContent = this.store_close;
//   tr_el.appendChild(td_el);

//   td_el = document.createElement('td');
//   td_el.textContent = this.cookies_sold_each_hour;
//   tr_el.appendChild(td_el);  
// };
// for (var i = 6; i < 20; i++){
//   td_el = document.createElement('td');
//   td_el.textContent = this.cookies_sold_each_hour;
//   tr_el.appendChild(td_el);
// }

// target.appendChild(tr_el);


// instantiating
var firstAndPike = new Store(23, 65, 6.3, '1st & Pike', 6, 20, []);
var seaTac = new Store(3, 24, 1.2, 'SeaTac Airport', 6, 20, []);
var seattleCenter	= new Store(11, 38, 3.7, 'Seattle Center', 6, 20, []);
var capHill	= new Store(20, 38, 2.3, 'Capitol Hill', 6, 20, []);
var alki = new Store(2, 16, 4.6, 'Alki', 6, 20, []);


// make them render
firstAndPike.render();
seaTac.render();
seattleCenter.render();
capHill.render();
alki.render();

render_all_stores_table();



/* OBJECT LITERALS
// =====================================================================


// List of Stores
//     List of hours a store is open paired with total numbers

// Store Objects {}
    
//     min_cust
//     max_cust
//     avg_cookies_per_customer
//     store_name
//     store_open: 6
//     store_close: 20

//     cookies_sold_each_hour []

//     calculate_cookies_per_hour (method)
//     calculate_cookies_all_hours (method)
//     render
// }


// =====================================================================
// Render Alki Object

var Alki = {
  min_cust : 2,
  max_cust : 16,
  avg_cookies_per_customer: 4.6,
  store_name : 'Alki',
  store_open: 6,
  store_close: 20,
  cookies_sold_each_hour: [],
};

// Calculates the average number of cookies, per customer, needed each hour
Alki.calculate_cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

// Calculates the number of cookies sold each hour
Alki.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    // The .push method adds an amount to the end of the cookies_sold array
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

// Render function. Storing everything inside a list item.
Alki.render = function() {
  // Creates elements for each list item
  // li > h2(name), ul(store_hours) > li (9am: 30 cookies)
  
  // Represents the unordered list item that is already on the page
  var target = document.getElementById('store-container');
  var li_el =  document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  // Grabs the store name attached to the Alki object
  h2_el.textContent = this.store_name;
    
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  // Puts h2 inside of list item element
  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
};

// init
Alki.calculate_cookies_sold_each_hour();

Alki.render();


// =====================================================================
// Render Cap Hill Object

var CapHill = {
  min_cust : 20,
  max_cust : 38,
  avg_cookies_per_customer : 2.3, 
  store_name : 'Cap Hill',
  store_open : 6,
  store_close : 20,
  cookies_sold_each_hour : [],
};

CapHill.calculate_cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

CapHill.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

CapHill.render = function() {
  var target = document.getElementById('store-container');
  var li_el =  document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;
    
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
};

CapHill.calculate_cookies_sold_each_hour();
CapHill.render(); 


// =====================================================================
// Render 1st & Pike Object

var FirstAndPike = {
  min_cust : 23,
  max_cust : 65,
  avg_cookies_per_customer : 6.3,
  store_name : '1st & Pike',
  store_open : 6,
  store_close : 20,
  cookies_sold_each_hour : [],
};

FirstAndPike.calculate_cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

FirstAndPike.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

FirstAndPike.render = function() {
  var target = document.getElementById('store-container');
  var li_el =  document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;
    
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
};

FirstAndPike.calculate_cookies_sold_each_hour();
FirstAndPike.render();


// =====================================================================
// Render SeaTac Airport Object

var SeaTac = {
  min_cust : 3,
  max_cust : 24,
  avg_cookies_per_customer : 1.2, 
  store_name : 'SeaTac Airport',
  store_open : 6,
  store_close : 20,
  cookies_sold_each_hour : [],
};

SeaTac.calculate_cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

SeaTac.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

SeaTac.render = function() {
  var target = document.getElementById('store-container');
  var li_el =  document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;
    
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
};

// init
SeaTac.calculate_cookies_sold_each_hour();
SeaTac.render();


// =====================================================================
// Render Seattle Center Object

var SeattleCenter = {
  min_cust : 11,
  max_cust : 38,
  avg_cookies_per_customer : 3.7,
  store_name : 'Seattle Center',
  store_open : 6,
  store_close : 20,
  cookies_sold_each_hour : [],
};

SeattleCenter.calculate_cookies_per_hour = function() {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

SeattleCenter.calculate_cookies_sold_each_hour = function() {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

SeattleCenter.render = function() {
  var target = document.getElementById('store-container');
  var li_el =  document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;
    
  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
};

SeattleCenter.calculate_cookies_sold_each_hour();
SeattleCenter.render();

*/

// var all_Stores = [firstAndPike, seaTac, seattleCenter, capHill, alki];

// for (var i = 0; i < all_Stores.length; i++) {
//   all_Stores[i].render_as_a_table_row();
// }