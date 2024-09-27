# Admin Panel Dashboard

This project is a React-based admin panel dashboard, bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It includes analytics features that visualize user data with dummy data for demonstration purposes.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <[repository-url](https://github.com/RohitPatil00/Admin-Panel-with-User-Management-and-Analytics)>
   cd admin-panel
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes. You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified, and the filenames include hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project, giving you full control over them. All commands except `eject` will still work, but they will point to the copied scripts.

## Features

- **Responsive Design**: The admin panel is designed to be responsive, ensuring a good user experience on various devices.
- **Analytics Dashboard**: The analytics page displays user data in a tabular format, with dummy data available for testing. 
- **User Management**: The admin panel can be extended to include features for user management, CRUD operations, and more.

### Analytics Dashboard

The Analytics Dashboard displays user analytics data in a table. Each entry includes the following fields:

- **Name**: The name of the user
- **Email**: The user's email address
- **Value**: A numeric value representing some metric (e.g., activity score)
- **Date**: The date associated with the user's activity
- **Status**: The current status of the user (e.g., active or inactive)

The current implementation uses dummy data, which can later be replaced with real data from an API.

### Dummy Data Structure

The current dummy data used in the Analytics Dashboard is as follows:

```javascript
const dummyData = [
    { id: 1, name: 'User A', email: 'usera@example.com', value: 30, date: '2024-09-25', status: 'active' },
    { id: 2, name: 'User B', email: 'userb@example.com', value: 50, date: '2024-09-24', status: 'inactive' },
    { id: 3, name: 'User C', email: 'userc@example.com', value: 20, date: '2024-09-23', status: 'active' },
    { id: 4, name: 'User D', email: 'userd@example.com', value: 10, date: '2024-09-22', status: 'inactive' },
    { id: 5, name: 'User E', email: 'usere@example.com', value: 45, date: '2024-09-21', status: 'active' },
    { id: 6, name: 'User F', email: 'userf@example.com', value: 15, date: '2024-09-20', status: 'active' },
];
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions for improvements or features.

## Learn More

You can learn more about React and Create React App in their respective documentation:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/docs/getting-started.html)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
