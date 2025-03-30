# xyz

## Project Overview

This project is a web application for a moving company based in Berlin. The application provides information about the company's services, pricing, and contact details. It also allows users to place orders for moving and packing services online.

## Setup Instructions

To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/crimecrypto/xyz.git
   ```
2. Navigate to the project directory:
   ```
   cd xyz
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Usage

Once the development server is running, you can access the application in your web browser at `http://localhost:3000`. From there, you can explore the different pages and features of the application.

## Contribution Guidelines

We welcome contributions to the project! If you would like to contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bugfix.
2. Make your changes and ensure that the code passes all tests and linting checks.
3. Submit a pull request with a clear description of your changes and the problem they solve.

## Deployment to GitHub Pages

To deploy the application to GitHub Pages, follow these steps:

1. Ensure that the repository is set up with the necessary GitHub Actions workflow for deployment. The workflow file is located at `.github/workflows/nuxtjs.yml`.
2. The workflow is triggered on pushes to the `main` branch and can also be manually triggered from the Actions tab.
3. The workflow consists of two jobs: `build` and `deploy`.
4. The `build` job checks out the code, detects the package manager, sets up Node.js, configures Pages, restores cache, installs dependencies, lints the code, runs tests, generates static HTML with Nuxt, and uploads the artifact.
5. The `deploy` job deploys the generated static site to GitHub Pages.

Make sure to push your changes to the `main` branch to trigger the deployment process. You can also manually trigger the workflow from the Actions tab in your GitHub repository. Once the deployment is complete, your site will be available at the URL specified in the `CNAME` file, which is `pulstg.xyz`.

For more details, refer to the `.github/workflows/nuxtjs.yml` file.

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for more details.
