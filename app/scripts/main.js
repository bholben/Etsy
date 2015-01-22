
console.log('The Iron Yard Rocks!');

var container = $('section'),
    img_url,
    img_tag;

console.log(etsyListingsData);

etsyListingsData.results.forEach(function (listing) {

  img_url = listing.Images[0].url_fullxfull;

  img_tag = '<div class="listing">' +
      '<img src="' + img_url + '">' +
      '<p class="listing-description">' + listing.description + '</p>' +
      '<div class="listing-info">' +
        '<div class="listing-source">' + listing.Shop.shop_name +'</div>' +
        '<div class="listing-price"><span>$' + listing.price + '<span class="listing-currency">' + listing.currency_code + '</span></div>' +
      '</div>'+
    '</div>'

  // img_tag = '<img src="' + img_url + '">';

  container.append(img_tag);

});

