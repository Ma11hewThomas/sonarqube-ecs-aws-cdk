# Running SonarQube on ECS using AWS CDK (Typescript)

This project demonstrates how to quickly deploy an instance of the latest SonarQube using Amazon Elastic Container Service (ECS) with AWS Cloud Development Kit (CDK) in TypeScript. SonarQube is an open-source platform for continuous code quality inspection.

# Prerequisites

Install Node.js and the AWS CDK.
Ensure that your AWS credentials are configured on your system.

# Deploy

Run the following commands to deploy the stack.

```bash
npm install
npx aws-cdk deploy
```

The task URL will be output to the terminal

# Clean up

Run the following command to delete the stack.

```bash
npx aws-cdk destroy
```
