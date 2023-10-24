# NestJS Email Microservice

A simple NestJS microservice for sending emails using the provided dependencies.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- [NestJS CLI](https://docs.nestjs.com/cli/overview)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jrm1992/email-microservice.git
   ```

2. Navigate to the project directory:

   ```bash
   cd email-microservice
   ```

3. Install project dependencies:

   ```bash
   npm install
   # OR
   yarn install
   ```

## Usage

1. Start the NestJS microservice:

   ```bash
   npm run start
   # OR
   yarn start
   ```

2. The microservice is accessible by default at `http://localhost:3000`. You can customize the port in `main.ts`.

3. Use your preferred API client (e.g., Postman, curl) to interact with the endpoints as described in the next section.

## API Endpoints

### Send an Email

- **Endpoint:** `/email/send`
- **HTTP Method:** POST
- **Request Body:**
  ```json
  {
    "to": "recipient@example.com",
    "subject": "Your Subject",
    "text": "Email Content"
  }
  ```

- **Description:** Send an email to the specified recipient with the provided subject and email content.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize this README.md to match your specific project's structure, features, and requirements. Remember to replace placeholders with your actual project details.
