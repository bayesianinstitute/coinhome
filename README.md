# Coinhome Chat Assistant

Welcome to the CoinHome Chat Assistant, a powerful tool designed to help you navigate and interact with CoinHome, the world's leading encrypted digital asset trading platform.

## Features

This chat assistant allows users to ask questions related to CoinHome Exchange, providing them with instant support and information. Whether you're looking for details about trading services, account management, or general inquiries, the CoinHome Chat Assistant is here to help.

## Technology

This project leverages the Assistants API to deliver a seamless and efficient user experience. By integrating with the CoinHome platform, the assistant can provide accurate and up-to-date information tailored to your needs.

## AWS EC2 Instance Setup

1. **Create an AWS Account:**

   - If you don't have an AWS account, sign up for one at [AWS Console](https://aws.amazon.com/).

2. **Access AWS Console:**

   - Log in to the [AWS Management Console](https://aws.amazon.com/console/).

3. **Navigate to EC2 Dashboard:**

   - In the AWS Management Console, navigate to the "EC2 Dashboard."

4. **Launch an Instance:**

   - Click on "Launch Instance" to create a new EC2 instance.

5. **Choose an Amazon Machine Image (AMI):**

   - Select an Ubuntu Server AMI (choose the latest Ubuntu LTS version).

6. **Choose an Instance Type:**

   - Select the "t2.medium" instance type from the list.

7. **Configure Instance:**

   - In the "Configure Instance Details" section, you can leave most settings as default.
   - Optionally, you can configure details like IAM role, user data, etc.

8. **Add Storage:**

   - In the "Add Storage" section, set the storage size to 20 GB.

9. **Add Tags (Optional):**

   - Add any tags you want to help identify your instance.

10. **Configure Security Group:**

- - If there isn't an existing rule for your application, add a new rule to allow TCP traffic for your application's port (e.g., 5000).
- Type: Custom TCP Rule
- Add Port : 8080 (or the port your application uses)
- Source: 0.0.0.0/0 (Allow traffic from anywhere)

11. **Review and Launch:**

- Review your instance configuration and click "Launch."

12. **Create a Key Pair:**

- Choose an existing key pair or create a new one. This key pair is essential for SSH access to your instance.

13. **Launch Instance:**

- Click "Launch Instance."

14. **Access Your EC2 Instance:**

- Once the instance is running, use the generated key pair to SSH into your instance. Example:
  ```bash
  ssh -i /path/to/your/key.pem ubuntu@your-instance-ip
  ```

## Prerequisites

- get your api key from https://ai.google.dev/pricing

Make sure you have installed all of the following prerequisites on your development machine:

- Node Js & Npm [Download and Install](https://nodejs.org/en)
- Git [Download and Install](https://git-scm.com/downloads)

## Node.js and npm Versions

This project is developed and tested using the following versions of Node.js and npm:

- Node.js: 18.16.1
- npm: 9.51.1

## Node js

1. **Install NVM as your regular user:**

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```

2. **Load NVM into the shell:**

   ```bash
   source ~/.nvm/nvm.sh
   ```

3. **Install the desired Node.js version:**
   ```bash
   nvm install 18.16.1
   ```

## npm install

```bash
nvm install 9.5.1
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the root directory

`OPENAI_API_KEY` = ``

`ASSISTANT_ID` = ``

## Run Locally

Clone the project

```bash
  git clone https://github.com/bayesianinstitute/coinhome.git
```

##To Start BackEnd

Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start

```bash
  npm run dev
```

##To Start FrontEnd

#### Go to the client directory

```bash
  cd client
```

#### Install dependencies

```bash
  npm install
```

#### Build

```bash
   npm run dev
```
