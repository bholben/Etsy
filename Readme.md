Deliverables:
*
*

### Part 1

Re-Create An Etsy Page - https://www.etsy.com/search?q=whiskey

> Specifically you need to focus on the sidebar and the main content of items.

1. Utilize the data for whatever search term you use - [DATA HERE](https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop)
2. Use Bourbon / Neat to help you out (optional, but suggested)
3. You are free to change the search term to whatever you'd like.
4. We haven't covered how to fetch data using JavaScript, so just copy the data and store it in a variable.
5. Everything should be styled as closely as possible, including the Header/Footer
6. You should implement hover events and link the items to their proper Etsy product pages
7. Unless you do the bonus question #2, you can just put random links in your sidebar.
8. Also, no need to make any of the form elements work.
9. Lastly, worry about the structure first, the JS second and the fine details of the design last

### Part 2

1. Using the `excercises.js` file, complete each exercise

## Deliverables

1. Push to Github and comment with a link to your repo
2. Deploy to Github Pages and comment with a link to that (think `gulp deploy`) - only for Part 1
3. Close the Issue


## Bonus 1
1. Create your own API token by signing up as an [Etsy developer](https://www.etsy.com/developers/)
2. Pull the categories from the data to create the sidebar, with links that filter the listings.
3. Implement the sorting dropdown.

## Bonus 2
1. Write a function that will decode the following quote.
2. Write a function that will endcode the decoded message back to the message below.

> Lnl! Lbh unir qrpbqrq zl frperg zrffntr!

HINT: [Read This](http://en.wikipedia.org/wiki/ROT13)

You'll need to use:

* [`String.prototype.charCodeAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
* [`String.fromCharCode()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)


## Resources

1. [Etsy API Documentation](https://www.etsy.com/developers/documentation/reference/listing)
2. [Etsy Payload Example](https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop)
3. [Etsy Page Example](https://www.etsy.com/search?q=whiskey)
