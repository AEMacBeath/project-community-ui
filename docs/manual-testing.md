# Manual Testing Procedure
The following manual tests have been carried out on the deployed Heroku app - [project-community-ci](https://project-community-ci.herokuapp.com/)

## Homepage
1.  Open [project-community-ci](https://project-community-ci.herokuapp.
1.  Scroll through observations to test that Infinite Scroll is working. More observations will load after the first 5.
1.  Search using;
    -   an observation owners name
    -   an observation title
    -   a word from an observations content
1.  Click on an Observations image to navigate to the observations page.

## Observation Page
1.  View the Observations Comments or a message if there are no comments.
1.  Click on a Popular Observation Image to view it in the Observation Page.
1.  Click on the Observations owners profile image to navigate to their Profile Page.

## Profile Page
1.  View the users;
    -   profile image
    -   username
    -   observation count
    -   observations

## NavBar
1.  Click the Home link to return to the Homepage
1.  Click the Sign In link to access the SignInForm
1.  Click the Sign Up link to access the SignUpForm

## SignUpForm
1.  Check error feedback - warnings will appear for all of the below attempts.
    -   submit an empty form
    -   enter a username only
    -   enter passwords only
    -   enter an existing username
    -   enter different passwords
1   .  Complete the form to register an account - redirects to the SignInForm when complete

## SignInForm
1.  Check error feedback - warnings will appear for all of the below attempts.
    -   submit an empty form
    -   enter a username only
    -   enter password only
    -   enter incorrect username
    -   enter incorrect password
1.  Complete the SignInForm - redirects to the home page.

## Homepage - additional logged in features
1.  Like an observation - like count will increase and icon changes style.
1.  Click Comment in Observation Footer to navigate to ObservationPage.

## Observation Page - additional logged in features
1.  Complete the comment form under the observation.
1.  Access the edit menu for the comment - displayed as a pen icon
1.  Select Edit to access the CommentEditForm
1.  Complete the form to update the comment
1.  Select Delete to bring up the DeleteConfirmation modal.
1.  Click Delete to remove the comment.

## NavBar - additional logged in features
1.  Add Observation - opens the ObservationCreateForm
1.  Liked Observations - shows Observations the logged in user has liked
1.  *Username's* Profile - open the logged in uesrs ProfilePage
1.  Sign Out - displays the SignOutConfirmation modal

## ObservationCreateForm
1.  Check error feedback - warnings will appear for all of the below attempts.
    -   submit an empty form
    -   enter a title only
    -   enter content only
    -   submit without an image
1.  Complete the form to create an Observation - redirects to the ObservationPAge for the new Observation

## Observation Page - additional logged in features
1.  Access the edit menu for the observation - displayed as a pen icon
1.  Select Edit to access the ObservationEditForm
1.  Complete the form to update the Observation
1.  Select Delete to bring up the DeleteConfirmation modal.
1.  Click Delete to remove the Observation - redirects to the homepage.

## Liked Observations
1.  Can view all the Observations the current user has liked.

## Current Users Profile
1.  Access the edit menu for the observation - displayed as a pen icon
1.  Select Edit Profile to access the ProfileEditForm
1.  Complete the form to update the Profile
1.  Select Change Username to access the UsernameForm
1.  Complete the form to update the Username
1.  Select Change Password to access the PasswordForm
1.  Complete the form to update the Password

## Sign out
1.  Click the Sign out NavLink
2.  Click the Sign out Button - redirects to the Homepage
