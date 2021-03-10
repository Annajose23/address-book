Deployment steps
1.	Check (& adjust) Basepath <BrowserRouter basename=”/my-app”>
I plan to serve app on my-domain.com without any specific path so not setting basename.
2.	Next is to ensure that server always returns to index.html(also for 404 cases)  file that is something all static hosts typically allow to configure and if you are not using a static host but you are using your NodeJS server, you just need to write code to set up a catch all route and return index.html and the same logic of course applies for any other server side language.
3.	Build and optimize project – npm run build in create-react-app project. This will now build our project and also create a folder “build” and that folder will contain our optimized production build.
4.	Upload build artifacts to server and deploy
Deploying on firebase
On the firebase console – click on hosting.
Follow hosting steps.
1.	Install firebase command line tools using npm : npm install -g firebase-tools
2.	Sign in to google – firebase login 
3.	Initiate your project – firebase init
•	Check hosting by pressing space after navigating to hosting option and press enter. 
•	Choose project.
•	Tell firebase which files to upload - build (we want to upload all files in the build directory )
•	With that we are done
•	This gives us a special .firebaserc file and firebase.json file to configure project. .firebaserc contains information about this project. .firebase.json – this is where the hosting is configured
4.	Deploy with firebase deploy
Now we can visit the application under this hosting URL : https://address-book-62518.web.app/



 A summary of the assignment ■ Your overall approach 
/src
1.	Components: contains stateless components, reusable UI components.
i.	Person : stateless components to show name of each person in address book. Person is a child of Persons container where fetch persons function is called. Person get props from persons container
	Person.js – stateless component
	Person.test.js – test file
	Person.css – css file
ii.	UI : Contains all reusable UI related components
	Button : Contains button tag with onclick function (passed via props) and class. Used in ContactDetails component to navigate back to home page. Text to display in button is passed as props.children.
•	Button.js 
•	Button.test.js – test file
•	Button.css – css file
	Spinner : Contains loader UI. Used in Persons container to show while fetching data from api. 
•	Spinner.js 
•	Spinner.test.js – test file
•	Spinner.css – css file
2.	Container: Contains components that connected to redux .
i.	ContactDetails : Component that shows details with name and phone number of selected contact. Connected to redux. Listens to props – selectedContact and displays only if contact is selected. Contains a button to navigate back to home page.
•	ContactDetails.js 
•	ContactDetails.test.js – test file
•	ContactDetails.css – css file
ii.	Persons : All contacts as fetched by calling onFetchPersons function called in componentDidMount which dispatches an action fetchpersons and handled by redux. Component listens to state as props and pass fetched persons data to child component - Person for displaying each person. Component also shows spinner while loading and show error message if fetch fails to execute. 
•	Persons.js 
•	Persons.test.js – test file
•	Persons.css – css file
	AddressBook: Where routing is managed. Imports both Persons and ContactDetails components and managed routing using react-router-dom library.
	AddressBook.js
	AddressBook.test.js
3.	Store: contains redux related files
i.	actions : Contains actions required for the application. Such as actions for fetch persons success, fetch persons fail, select person success and so on.
i.	actions.js – contains actions creators that return actions
ii.	actions.test.js – test file
iii.	actionTypes.js – contains all the exported constants -actions
ii.	reducers : Uses initial state as default value. Looks at actionTypes and do something based on types. Such as set loading to true when fetching starts, setting value of persons to fetched data and stop loaded when fetch was successful and so on.
i.	reducers.js – stateless component
ii.	reducers.test.js – test file
iii.	sagas : Separate area to deal with async actions. Contains personsSaga generator. Response is saved in constant and uses yield to wait for till we get response once it resolves. To handle failure, wrapped it in try catch block. Put which dispatches actions for persons fetch success and fail.
	index.js – registered it. Exported a new generator watchPersons. Listen with redux saga and saga generator can run once the fetchpersons action is recognized. takeEvery imported from redux-saga will allow to listen to fecthperson action and do if occurs.
	Imported saga middleware in root file. Called generator function in sagamiddleware run in root folder.
	persons.js – personSaga where we yield fetchpersons.

■ What features you implemented 
o	Redux
o	Redux saga
o	React unit testing – jest & enzyme is used for testing, snapshot testing
o	Aux higher order component to wrap content inside JSX.
o	Routing – react-router-dom
o	React stateless, reusable UI components
o	React containers that deals with state form redux
o	Connect to connect components with redux store
■ Given more time, what else would you have liked to complete and how long it would have taken you? 
	Hoc for error handling
	Unit testing for saga
	Pagination to display 10 contacts at a time
	Filter/search contacts from contact list
I can complete these in 2 days.
■ Given more time, what else would you have done to make the project more robust?
    Convert persons component to functional componnet with hooks
    follow naming convention to classes (styles)
    Use css modules 
