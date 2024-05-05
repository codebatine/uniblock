# UniBlock

This repo is a simple implementation of a blockchain in Node.js.

## :white_check_mark: Features

- **MVC Architecture**: The application is built around the MVC design pattern, which separates concerns into distinct components, improving manageability and scalability.

- **Error Handling**: The application implements error handling according to best practices, ensuring that any issues are caught and handled appropriately.

- **Persistent Blockchain**: The blockchain is written to a JSON file, ensuring that it persists even after the server is restarted.

- **Error Logging**: Any errors that occur are logged to a physical error log, making it easier to diagnose and fix issues.

- **ES6 Modules**: The application uses ES6 modules, which offer benefits like static typing and improved support for cyclic dependencies over CommonJS modules.

- **Test-Driven Development (TDD)**: The creation of blocks is done using TDD, ensuring that each block's functionality is thoroughly tested before it's added to the codebase.

- **Block Verification and Validation**: Each block is verified and validated using a "Proof of Work" algorithm, ensuring the integrity and security of the blockchain.

## Getting Started

To get started with this application, clone the repository and install the dependencies:

```bash
npm install
npm run dev
npm test
```
