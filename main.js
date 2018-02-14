$(document).ready( function() {

  function updateTotal() {
    var total = 0
    var entries = $('.entry')

    if (entries.length) {
      $('#empty').show()
    } else {
      $('#empty').hide()
      $('#total').text('$' + total)
    }

    entries.each( function(index, entry) {
      var data = $(entry).data()
      var price = parseFloat(data.price)
      var installment = data.plan
      switch(installment) {
        case 'monthly':
          total += price
          break
        case 'quarterly':
          total += price * 3
          break
        case 'yearly':
          total += price * 12
      }

      $('#total').text('$' + total)
    });
  }

  $('#empty').on('click', function() {
    $('#in_cart').empty()
    updateTotal()
  })

  $('#add').on('click', function() {
    var plan = $('#plan')
    var installment = plan.val()
    var price = $('#price').text()
    var inCart = $('#in_cart')
    var numeric = price.replace(/[A-Za-z$\/\s]/g, '')
    var data = 'data-price="' + numeric + '" data-plan="' + installment + '"'
    inCart.append('<li class="entry"' + data + '>' + installment + ' - ' + price + '<button class="remove">X</button></li>')
    updateTotal()
  })

  $(document).on('click', '.remove', function() {
    $(this).parents('li').remove()
    updateTotal()
  });


  $('#plan').on('change', function() {
    var priceText

    switch(this.value) {
      case 'monthly':
        priceText = '$10.00 /mo'
        break
      case 'quarterly':
        priceText = '$9.00 /mo'
        break
      case 'yearly':
        priceText = '$7.00 /mo'
    }

    $('#price').text(priceText)
  });
});
