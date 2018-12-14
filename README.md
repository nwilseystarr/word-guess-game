# word-guess-game

When the page loads, users will see a number of blanks that represent a US President's last name. They then can begin to guess what the word is until they guess it properly or have five incorrect guesses. 

There are a number of items I would have liked to make work with more time. I have listed those items below along with my workarounds to make the game functional:

- When the browser window goes to 600px give it a background color or change color to red 

- Reset the game when a user guesses all the correct letters OR has 5 incorrect guesses OR with a new word button
    - Created an alert for when the variables above are met telling the user they have won or lost and instructing them to reload the page

- There is a line of commented out code which represents the words that are not functional due to multiple letters in the name. This does not occur with all instances of double letters.
    - I commented out the words that weren't working to make the game functional 
    - The items that are working but require double input are still in the array, users are instructed to enter the letter twice 

- Track the wins and losses on an ongoing basis 
    - I used the alert function and commented this out for now