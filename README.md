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

### API Specific User Stories
| Milestone      | User Story                                                                                                                                 | Task                                    |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| Authentication | Sign up - As a user I can create an account so that I can access all the features.                                                         | Install dj-rest-auth                    |
| Navigation     | Routing - As a user I can I can move between pages quickly so that I can view content without waiting for the page to refresh.             | Add Root Route                          |
| Profiles       | Create Profile - As a user I can create a profile so that I can express myself.                                                            | Start Profiles App                      |
| Profiles       | Create Profile - As a user I can create a profile so that I can express myself.                                                            | Create Profile Model                    |
| Profiles       | Create Profile - As a user I can create a profile so that I can express myself.                                                            | Add Signal to Profile Model             |
| Profiles       | Other User's Profiles - As a user I can view other user's profiles so that I can read their observations.                                  | Create Profiles Serializer              |
| Profiles       | Other User's Profiles - As a user I can view other user's profiles so that I can read their observations.                                  | Create ProfileList View                 |
| Profiles       | Other User's Profiles - As a user I can view other user's profiles so that I can read their observations.                                  | Create ProfileDetail View               |
| Observations   | Create Observation - As a user I can create an observation so that it can be viewed by other users.                                        | Start Observations App                  |
| Observations   | Create Observation - As a user I can create an observation so that it can be viewed by other users.                                        | Create Observation Model                |
| Observations   | View Observation - As a user I can view an observations so that I can read the details.                                                    | Create ObservationDetail View           |
| Observations   | View Observation - As a user I can view an observations so that I can read the details.                                                    | Create Observations Serializer          |
| Observations   | View Observations List - As a user I can view a list of observations so that I can choose which one to read.                               | Create ObservationList View             |
| Observations   | Search - As a user I can search for observations so that I can easily find ones I am interested in.                                        | Refactor Observation Views to Generics  |
| Observations   | Search - As a user I can search for observations so that I can easily find ones I am interested in.                                        | Add Observation Search                  |
| Observations   | View latest Observations - As a user I can view latest observations first so that I can stay up to date with content.                      | Sort ObservationList by created_at date |
| Observations   | User Observations - As a user I can view observations made by a specific user so that I can view their latest observations.                | Add Observation Filter functionality    |
| Comments       | Create Comment - As a user I can create comments on observations so that I can give feedback to other users.                               | Start Comments App                      |
| Comments       | Create Comment - As a user I can create comments on observations so that I can give feedback to other users.                               | Create Comment Model                    |
| Comments       | Create Comment - As a user I can create comments on observations so that I can give feedback to other users.                               | Create Comments Serializer              |
| Comments       | View Comments - As a user I can view comments so that I can see other users feedback.                                                      | Create CommentList View                 |
| Comments       | View Comments - As a user I can view comments so that I can see other users feedback.                                                      | Create CommentDetail View               |
| Likes          | Like and Unlike Observations - As a user I can like / unlike observations and comments so that I can highlight my interest in the content. | Start Likes App                         |
| Likes          | Like and Unlike Observations - As a user I can like / unlike observations and comments so that I can highlight my interest in the content. | Create Like Model                       |
| Likes          | Like and Unlike Observations - As a user I can like / unlike observations and comments so that I can highlight my interest in the content. | Create Likes Serializer                 |
| Likes          | View liked observations - As a user I can easily locate observations I have liked so that I can stay up to date with comments / updates.   | Create LikeList View                    |
| Likes          | View liked observations - As a user I can easily locate observations I have liked so that I can stay up to date with comments / updates.   | Create LikeDetail View                  |

## Page and Compenend Breakdown
<!--Example: https://camo.githubusercontent.com/1d53f17b964eeea7bcd3b49b4e3ba4ee1d62f61092777819361b1813e1bff462/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64676a72727664626c2f696d6167652f75706c6f61642f76313634393135353030302f6d6f6d656e74732d636f6d706f6e656e742d6d61705f7266746836712e706e67-->

## Re-used components


## Deployment

## Bugs
1.  Bug:    opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ]<br>
    Fix:    [Updated Package.json to fix error in Heroku.](https://github.com/AEMacBeath/project-community-ui/commit/bd9df922f9df2b69aba6d8d3d196b8b365a7d5c0)<br>
    Credit: [Link to Solution on stackoverflow](https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os)


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

<!--Credits - https://safetyrisk.net/safety-photos-funny-fails/-->

