# sam2keep
Today, we made a clone of google keep. It deletes notes, adds notes and stores the info in a local server.
Important things to learn : 
1) Horizontal swipe transition was a pain. Take a look if you need reference. 
2) We use the idea of local variables over here to a great extent. Any variable inside a particular event call, stays to that even if that event is called again. We use the same variable name in each event function, but because of the different scopes, only the one required is called. 
3) This activity is very useful for understanding databases with js. We will be storing the notes in a local storage, to access next time without any issues. The localStorage and sessionStorage properties allow saving key/value pairs in a web browser. The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year. The localStorage property is read-only. To transfer items to local storage, we have to use localStorage.setItem(‘key’,’value’) both as strings. If the value is an object, we can simply write JSON.stringify(nameOfObj) and store it.
