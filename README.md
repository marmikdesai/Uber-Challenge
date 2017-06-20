Uber Challenge

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project create for coding challenge (https://github.com/uber/coding-challenge-tools/blob/master/coding_challenge.md)

Departure Times
Transport for London Unified API (London)

Create a service that gives real-time departure time for public transportation (use freely available public API). The app should geolocalize the user. I didn't find right API to get real-time departure time. I am assuming "Live Northan Line" page satisfy this challenge. 

I added 3 different service for this app.
1) home page -> Here user can see Tube service status
2) Live Northan Line -> Here user can see Northan line train Arrival timing (Honestly I am guessing about this data. I haven't found any documentation for this api.) I use setInterval function for data update. In feature I will add websocket service for data update.
3) Tube Line Details -> This page display starting and end point for each tube service.
