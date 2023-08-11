// Function to apply on each retrieved element
  // List of URLs for the 5 HTML pages
const pageURLs = [
    'about.html',
    'blog.html',
    'shop2.html',
    'cart2.html'
  ];
  
  //Fetch and process each HTML page
  function displayQuantity(){
  pageURLs.forEach(url => {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
       
        //  class name 
        const elements = document.querySelectorAll('.cart-items-no');
       
        elements.forEach((item)=>{
       
                item.innerHTML=localStorage.length;
               
            })
      })
      .catch(error => {
        console.error(`Error fetching ${url}: ${error}`);
      });
  });}

  displayQuantity();