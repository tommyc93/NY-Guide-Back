# NY-Guide-Back
Back End

Question:
1) What went well for your group?
We were able to do just about all of our stretch goals.  We were also able to communicate and support each other throughout the project.

2) What was your groups biggest struggle?
Our biggest struggles were trying to finish our stretch goals.  The login and filtering functionality took 2 days.

3) What was the most useful tool that your group relied on the most?
The most useful tool we relied on were our cohorts, TA's and instructors.  Everyone was helpful and patient throughout.

4) What was the most surprising aspect of working in a group/a thing (or things) you didn’t anticipate?
The most surprising aspect was how much I enjoyed working with another.  The thing I didn't enjoy was the pushing and pulling, because I missed just working on my own for instantaneous changes.

//Technologies
Mongoose
Express
react
Node
bootstrap
Skeleteon
axios
models
components


//Everything Else
Day 1

I learned that if you update your schema on the backend, you have to remember to push up to heroku if you're referencing your api with the heroku link.  Finished the back end and added create, edit, and delete functionality on the front end.

Day 2

Starting to work on the sign up and login aspect of the project.  Had to change the backend logic to compensate for jsx, remove all console.log alerts.

Day 3

Added modals to our project.  Noticed how or handles using the put/post routes were not working without the event.preventDefault().  To make it cleaner we put it in a modal and added the closemodal() to close the modal application to get around the preventDefault making it stay.  Also add the event.currentTarget.reset() to reset the data preset that was leftover from the create form.  Was able to make the edit modal differentiate between each dataset by making the hook/state === the param of the map._id.  That way it will only choose the matching id component of the data when editing.

Day 4

Tried testing out carousel images.  Wanted to make it so the user can add multiple images to an object.  Was able to make that work by adding new image hooks to differentiate between each image and create corresponding image input links.  Hid it with a dropdown tag called "Add more images".  Could not finish to make this work.  Started to make the filter function.  Kept on saying react doesn't recognize filter as a function.

Day 5

Created the filter function, so the user can filter the dataset by category (All, outdoor, food, museum, night-life, sight-seeing).  Was finally able to make it work by using my entire dataset.filter and then specified it by category equalled to the filtered state.  Afterwards I mapped through my entire showpage dataset.  At the end at iterated a && conditional where if a user chooses the option 'All', it would show the entire dataset.
