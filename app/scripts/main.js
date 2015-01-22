
console.log('The Iron Yard Rocks!');

var container = $('section'),
    img_url,
    img_tag;

console.log(etsyData);

etsyData.results.forEach(function (listing) {

  img_url = listing.Images[0].url_fullxfull;

  img_tag = '<div class="listing">' +
      '<img src="' + img_url + '">' +
      '<p class="listing-description">Commit. Deploy. Bail. Patches | Perf...</p>' +
      '<div class="listing-info">' +
        '<div class="listing-source">Creative Treachery</div>' +
        '<div class="listing-price"><span>$9.99<span class="listing-currency">USD</span></div>' +
      '</div>'+
    '</div>'

  // img_tag = '<img src="' + img_url + '">';

  container.append(img_tag);

});

