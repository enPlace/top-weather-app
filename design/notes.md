Main components: 
    1. Main weather section. Shows the weather from today
        a. an auto complete searchbar
        b. high/low, current temp, feels like
        c. Name of city 
        d. Icon of the current weather 
        e. a description fo the current weather conditions 
        f. a scrollable section that contains hourly info 
    
    2. Daily Weather section. Shows the forecast for the coming days. 
        a. Each card will display: 
            i. the name of the day
            ii. description of conditions 
            iii. precipitation
            iv. wind, humidity, uv index, surise/sunset
            v. the icon for the weather conditions 
            vi. high/low 
        
        b. in this section, the first card will be a detailed description of today's weather. 
    


Getting the info: 
    -Open weather API
    -google places api for search bar
    -the open weather api doesn't have a good search(typing brooklyn will return brooklyn OH, for instance), so I'll use a geocoding api to get specific location data from search. 
    ^^This will also help with user mispelling, requiring users to enter correct info. 


Steps for implementing code: 
    eventually I want to automatically use geolocation to get the weather for the user, but for now I will start off only using the searchbar. 

    --this means that for my initial page, I'll only need a searchbar, some design, and a message to the user. 
    --next, user searches for a place: 
        1. delete initial message to the user
        2. insert loading animation in the DOM 
        3. Fetch API data from search menu input 
        4. delete loading animation and format the DOM from the data I get back. 


To do's : 
    add loading screen
    what happens when there is an error getting user location
    what happens when a user says no to supplying user location


    change background depending on current weather
 
    style for larger screens, 
    
    allow user to save places locally in the browser. 
    Automatically save unit of measurement preference. 

    when you click on a city in the google places searchbar, it should submit without the user having to press enter
    
