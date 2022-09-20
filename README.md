Listed - a real estate home - listing platform 
    REALTORS: Sign up for our database and post your listings
    USERS: Browse listings in your city and connect with a local realtor
    
Deployed: https://project2listed2.herokuapp.com/

User Experience: 
Home Page: 
    User will see a carousel of the first three listings in the database that will allow them to click the picture and take them to the listing. They will also see pictures of our three cities (DC, Chicago, and Dallas) that they can click to see listings in that city specifically.  There is a Search Bar at the top that user can search for a property listing name and be taken to its show page (if there are no matches, they are taken to a no results page where they can click back to see all listings)
    Nav Bar: 
        -Home- will take you to the home page
        -Realtors link: will take you to an index page of all realtors in the database
         -Listings link: will take you to an index page of all listings in the database sorted by city


MVC: 
Models: connected to MongoDB : Listings model and Realtor model (one realtor to many listings)
Views: Home Page, Listings Index, City Index (one page for each of the 3 cities) New Listings, Edit Listings, Search Bar Result Page, Show Page for Listing, Realtor Show Page, Realtor Index, Realtor Edit, Realtor New 
Controllers: House controller and realtor controller all connected to server.js


FAQ: 
How do I post a listing? 
    Realtors have a link on their page where they can post a listing that will be connected to them
Can I edit my  listing once its posted?
    Yes, in the show page for the individual listing there is a edit button
Will my listing ever be deleted? 
    Yes, if your house is sold or taken off the market, there is a Delete button on the listing show page
Can I post a listing without a realtor? 
    No, all listings are tied to a specific realtor in our database
I am a realtor interested in posting a listing. What do I do? 
    First you must join our database with your information and then you can post a listing! Welcome!

Coding Challenges: 
SEARCH BAR 
    One of our trickiest features was creating the search bar that would actually populate a matching listing OR take you to a no results page. 
    We were able to do so by creating a input form on the search bar and using req.query to find matching names.  We used a for loop to go through all of the listings for a matching name. 


Future Stretch: 
    In the future, we would like to add some auth features so only realtors logged in can post, edit, or delete a listing
