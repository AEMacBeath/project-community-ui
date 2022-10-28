# Project Community - React App

## Project Description
Project Community is a social media platform designed for users to share safety observation reports. The application is made up of a Django API and a React app.

### API
GitHub Repository - [project-community-api](https://github.com/AEMacBeath/project-community-api)<br>
Heroku App - [project-community-api](https://project-community-api.herokuapp.com/)

### React App
GitHub Repository - [project-community-ui](https://github.com/AEMacBeath/project-community-ui)<br>
Heroku App - [project-community-ci](https://project-community-ci.herokuapp.com)

## Responsive Screenshot

## User Stories
The user stories for this API where written in conjuncion with the React application using [@AEMacBeath's Project Community](https://github.com/users/AEMacBeath/projects/11/views/1) GitHub Project.

The GitHub project is grouped by Milestones broken down into User Stories and Tasks. 

### React App User Stories
| Milestone      | User Story                                                                                                                                          | Task                                                                   |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| Authentication | Sign up - As a user I can create an account so that I can access all the features.                                                                  | Create SignUp form                                                     |
| Authentication | Sign In - As a user I can sign into my account so that I can access the signed in features.                                                         | Create SignIn form                                                     |
| Authentication | Remain logged in - As a user I can remain logged in until I choose to log out so that I do not need to repeatedly log in.                           | Install Access Refresh Tokens                                          |
| Navigation     | Navigation - As a user I can access a navbar from every page so that I can easily move around the application.                                      | Add NavBar component                                                   |
| Navigation     | Routing - As a user I can I can move between pages quickly so that I can view content without waiting for the page to refresh.                      | Install react-router-dom and add NavLinks                              |
| Navigation     | Conditional nav links - As a logged out user I can view sign in / up links so that I can sign in / up.                                              | Add user context to display NavLinks based on user state.              |
| Navigation     | User Status - As a user I can see my log in status so that I know if I am logged in or not.                                                         | useContext to set and use logged in status                             |
| Navigation     | Infinite scroll - As a user I can continue scrolling through content without navigating to new pages so that I can view observations without delay. | Set up react-infinite-scroll-component                                 |
| Profiles       | Other User's Profiles - As a user I can view other user's profiles so that I can read their observations.                                           | Create ProfilePage to display users profile information                |
| Profiles       | Edit My Profile - As a user I can edit my profile so that I can keep it up to date.                                                                 | Create ProfileEditForm                                                 |
| Profiles       | Update Credentials - As a user I can change my username and password so that keep my account secure.                                                | Add edit user name and password to user's profile                      |
| Profiles       | Other user's Avatars - As a user I can see user's avatars so that I can easily identify users.                                                      | Create Avatar component to be used throughout the app                  |
| Observations   | Create Observation - As a user I can create an observation so that it can be viewed by other users.                                                 | Add ObservationCreateForm                                              |
| Observations   | View Observation - As a user I can view an observations so that I can read the details.                                                             | Create ObservationPage                                                 |
| Observations   | View Observations List - As a user I can view a list of observations so that I can choose which one to read.                                        | Create ObervationsPage                                                 |
| Observations   | Update Observation - As a user I can update my observations so that I can maintain the content.                                                     | Create ObservationEditForm                                             |
| Observations   | Delete Observations - As a user I can delete my observations so that I can remove any that are not required.                                        | Add handleDelete function                                              |
| Observations   | Search - As a user I can search for observations so that I can easily find ones I am interested in.                                                 | Add Search bar to ObservationsPage                                     |
| Comments       | Create Comment - As a user I can create comments on observations so that I can give feedback to other users.                                        | Add CommentCreateForm                                                  |
| Comments       | View Comments - As a user I can view comments so that I can see other users feedback.                                                               | Create Comment component and attach to Observation page.               |
| Comments       | Update Comment - As a user I can update my comments so that I can correct errors and maintain the content.                                          | Add CommentEdit Form                                                   |
| Comments       | Delete Comments - As a user I can delete my comments so that I can remove any un-required comments.                                                 | Add handleDelete function to Comments                                  |
| Comments       | Comment date - As a user I can see when a comment was created so that I can see how old it is.                                                      | Display updated date on each comment                                   |
| Likes          | Like and Unlike Observations - As a user I can like / unlike observations and comments so that I can highlight my interest in the content.          | Add handleLike and handleUnlike functions to Observation               |
| Likes          | View liked observations - As a user I can easily locate observations I have liked so that I can stay up to date with comments / updates.            | Add Liked NavLink to filtered ObservationsPage                         |
| Likes          | View popular observations - As a user I can view a list of the most liked observations so that I can see what is popular.                           | Create PopularObservations to display observations with the most likes |

## Page and Compenend Breakdown
![page_component_breakdown](/docs/images/page_component_breakdown.png)

## Deployment
1.  In Heroku click on the “new” button and follow the steps to create an app.
2.  Select Region then click “Create app”.
3.  Connect App to Github repository.
    -  From the “Deploy” tab, select “Github” in the “Deployment method” section.
    -  Enter the name of the repository and then click “Connect”.
4. Click “deploy branch” which will trigger Heroku to start building the application.

## Bugs
1.  Bug:    opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ]<br>
    Fix:    [Link to Solution by trashcoder](https://github.com/facebook/create-react-app/issues/11562#issuecomment-949320790)

2.  Bug:    Buttons and MoreDropDown menu items have a blue background and shadow.
    Fix:    [button:focus {box-shadow:none !important;}](https://stackoverflow.com/questions/63593788/react-button-has-blue-border-around-it-when-clicking)

3.  Bug:    Refresh required to see updated content.
    Fix:    


## Technologies Used
-   HTML
-   CSS
-   React JS
-   React-Bootstrap
-   GitHub
-   GitPod
-   Heroku
-   Cloudinary

## Testing
### Automated
### Manual
The below functionality had been tested on the deployed [Project Communeity](https://project-community-ci.herokuapp.com/) app

### General functionality
1.  View observations on the homepage
1.  View popular observations component
1.  View observation Like & Comment count
1.  Search observations by
        -   owner
        -   title
        -   content = no
1.  View a single Observation by clicking on it
1.  View comments for selected observation
1.  View a uses profile

### Logged out specific functionality
1.  See logged out navigation links
    -   Home
    -   Sign up
    -   Sign in
1.  Create account using the sign up form

### Logged in specific functionality
1.  See logged in navigation links
    -   Home
    -   Add Observation
    -   Username Profile
    -   Liked Observations
    -   Sign out
1.  Create and Observation with an image
1.  Like / Unlike an Observation (if i am not the owner)
1.  Add, updated and delete a comment
1.  Update my profile
    -   Add / change bio (not visible anywhere)
    -   Updae username
    -   Change password
1.  View Liked observations
1.  Sign out

### Validator

## Libraries
-   react-inifinite-scroll-component
-   react-bootstrap

## Contexts
-   CurrentUserContext exposes the user state to the entire app. Relevany components can subscribe to its changes.
-   PopularObservationContext exposes the observations state to the entire app. Enables the PopularObservations component to be in sync with the ObservationPage.
<!-- ProfileDataContext exposes the profile state to the entire app. Am i using this??-->

## Hooks
-   useClickOutsideToggle enables toggle on the burger menu.
-   useRedirect enables redirect for users who are either logged in or logged out.

## Credits
<!-- https://thisdavej.com/copy-table-in-excel-and-paste-as-a-markdown-table/ -->
<!--Credits - https://safetyrisk.net/safety-photos-funny-fails/-->
<!--https://icons8.com/-->

