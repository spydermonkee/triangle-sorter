var Triangle = {
  valid: function() {

    if(this.sideA >= (this.sideB + this.sideC) || this.sideB >= (this.sideA + this.sideC) || this.sideC >= (this.sideA + this.sideB)){
      return false;
    } else {
      return true;
    }
  },
  triType: function(){
    if((this.sideA === this.sideB) && (this.sideB === this.sideC)) {
      return "equilateral";
    } else if ((this.sideA === this.sideB) || (this.sideA === this.sideC) || (this.sideB === this.sideC)) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
};

$(function(){
  $('form').submit(function(event){
    event.preventDefault();
    var sideA = parseFloat($('input#new-sideA').val());
    var sideB = parseFloat($('input#new-sideB').val());
    var sideC = parseFloat($('input#new-sideC').val());

    var newTriangle = Object.create(Triangle);
    newTriangle.sideA = sideA;
    newTriangle.sideB = sideB;
    newTriangle.sideC = sideC;
  
    if((isNaN(sideA) || sideA === 0) || (isNaN(sideB) || sideB === 0) || (isNaN(sideC) || sideC === 0)){
      alert("Please enter positive numbers only!");
    } else {
      if(!newTriangle.valid()){
        alert('These side lengths do not create a valid triangle...  SORRY!');
      } else if(newTriangle.triType() === 'equilateral') {
        $('ul#equilateral').append('<li>' + sideA + "," + sideB + "," + sideC + '</li>');
      } else if(newTriangle.triType() === 'isosceles') {
        $('ul#isosceles').append('<li>' + sideA + "," + sideB + "," + sideC + '</li>');
      } else {
        $('ul#scalene').append('<li>' + sideA + "," + sideB + "," + sideC + '</li>');
      }
    }  
  });
});




/*$(function(){
  $('form#new-contact').submit(function(event){
    event.preventDefault();
    var inputFirstName = $('#new-first-name').val();
    var inputLastName = $('#new-last-name').val();
    var inputAddress = $('#new-address').val();
    
     
    var currentContact = Object.create(Contact);
    currentContact.firstName = inputFirstName;
    currentContact.lastName = inputLastName;
    currentContact.address = inputAddress;
    
    $('ul#contacts').append('<li><span class="contact">' + currentContact.fullName() + '</span></li>');
  
    $('.contact').last().click(function() {
      $('#show-contact').show();
      $('#show-contact h2').text(currentContact.fullName());
      $('.first-name').text(currentContact.firstName);
      $('.last-name').text(currentContact.lastName);
      $('.address').text(currentContact.address);
      
    });
    this.reset();
  }); 

});
*/
















