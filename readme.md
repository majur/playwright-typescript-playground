# CRUD Operations Testing with Playwright and Cucumber

This project contains automated tests for CRUD operations on a web application using [Playwright](https://playwright.dev/) and [Cucumber](https://cucumber.io/). The tests are written in TypeScript and make use of Playwright's end-to-end testing capabilities.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: Version 14 or higher is required. You can download it from [nodejs.org](https://nodejs.org/).

## Setup Instructions

Follow these steps to set up the project and run the tests:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```


### 2. Install dependencies:
Navigate to the project directory and run the following command to install all necessary packages:

```bash
npm install
```
Or if you are using yarn:

```bash
yarn install
```

### 3. Install Playwright Browsers:
Playwright requires browsers to be installed. Run the following command to install them:

```bash
npx playwright install
```

Or if you are using yarn:

```bash
yarn playwright install
```

## Running Tests

You can run the tests using the following commands:

### 1. Run All Tests
To execute all the tests in the suite, run:

```bash
npx cucumber-js
```

### 2. Run Tests with Specific Tags
You can run tests that match specific tags. For example, to run tests tagged with @update, use:

```bash
npx cucumber-js --tags "@update"
```
