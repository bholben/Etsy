
var listingsContainer = $('section.main'),
    fragment,
    imgUrl,
    description,
    shopName,
    price,
    currencyCode;

etsyListingsData.results.forEach(function (listing) {

  imgUrl = listing.Images[0].url_fullxfull,
  description = listing.description,
  shopName = listing.Shop.shop_name,
  price = listing.price,
  currencyCode = listing.currency_code;

  fragment = '<div class="listing">' +
      '<img src="' + imgUrl + '">' +
      '<p class="listing-description">' + description + '</p>' +
      '<div class="listing-info">' +
        '<div class="listing-source">' + shopName +'</div>' +
        '<div class="listing-price"><span>$' + price + '<span class="listing-currency">' + currencyCode + '</span></div>' +
      '</div>'+
    '</div>'

  listingsContainer.append(fragment);

});

$('.sidebar > ul li.radio').on('click', function () {
  $(this).parent().children().removeClass('selected');
  $(this).addClass('selected');
});

