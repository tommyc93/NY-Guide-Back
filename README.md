# [NY Guide](http://ny-guide-front-end-rina-tommy.herokuapp.com/)

## Authors
- Tommy Chung |[LinkedIn](https://www.linkedin.com/in/tommy-chung93)|  |[GitHub](https://github.com/tommyc93)|
- Rina Joy Abu |[LinkedIn](https://www.linkedin.com/in/rinajoyabu/)| |[GitHub](https://github.com/rinajabu)|

### Approach
#### Picking a Project Idea
We discussed a few different ideas ranging from travel guide for places to ratings blog and thought a travel guide would give us a wide range of opportunities to add a lot of functionality.

#### Splitting the work
We were able to decide how we would delegate the tasks for our projects.  I would work on the backend and work on components for the front end.  Rina would work on the front end.  After that we would peer program together on parts we may need assistance on.  We cloned our repos and created separate branches for both us to work on independently so we wouldn't have merge conflicts with one another.

#### Data Structure
- Created the backend and frontend in a separate repos.
- Created the backend using jsx, cors, express, and Javascript.
- Created the frontend using React.
- Linked the backend with MongoDB Atlas.

## User Stories
#### Core
- User should be able to add recommendations
- Edit recommendations
- Delete recommendations
- Filter through the guide
- Adding likes and comments to recommendations
- User should be able to sign-up and login

#### Stretch
- Create a sticky nav-bar
- Image Carousel for input tabs
- Filtering option
- Adding comments
- Adding Likes
- Using bootstrap
- Make ratings into stars
- Add sign-up/sign-in
- Add modals

## Technologies/Languages Used
#### MERN Stack
- MongoDB
- Express
- React
- Node.js
- Bootstrap
- Skeleton

#### Project Management, hosting, and deployed
- GitHub
- Heroku
- Trello/Agile board
- MongoDB Atlas

#### Unsolved Problems
- Was not able to do lifting states.

#### Solved Problems
- Was able to get filter functionality working
- Was able to create star ratings by just using && conditionals to the value, and inputting the hexcode into it.
- Was able to use Modal's fairly easily by just wrapping things in the jsx with Modal HTML tags.  We just had to install a Modal package 'react-responsive-modal'.
- Solved the issue with event.preventDefault() staying on the page and not resetting by throwing everything into modals and adding the close modal functionality into the form.

#### Reflection Section
- If we update the schema on the backend and it's connected to heroku/atlas, we would need to push our changes to heroku.
- Couldn't use our submit forms without event.preventDefault().
- Finally figured out how to make filtering work by mapping our dataset and throwing everything we wrote into it.
