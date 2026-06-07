
# RESTFul User & Product Clean Arch

[![Repo](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/PressmenX/restful-user-product-clean-arch)

A robust and structured RESTful API for managing users and products, built on top of Node.js, Express, and TypeScript using Clean Architecture principles.

## 📋 Table of Contents
- [🚀 Main Features](#-main-features)
- [🤖 Application of AI](#-application-of-ai)
- [📚 STACK](#-stack)
- [🔧 TOOLS](#-tools)
- [⚡ Installation & How to Run](#-installation--how-to-run)
- [📁 Structure Directory](#-structure-directory)

## 🚀 Main Features
- **User Authentication**: Secure user registration and login utilizing JWT (JSON Web Tokens) and password hashing with bcrypt.
- **Product & Category CRUD**: Complete endpoints to manage products linked to their respective categories.
- **Input Validation**: Strictly enforced request payload schemas using Zod middleware.
- **Centralized Error Handling**: Uniform API error responses structured via custom HTTP error wrappers.
- **API Documentation**: Interactive API documentation generated using Swagger UI, accessible directly at `/docs`.
- **Graceful Shutdown**: Properly handles termination signals (`SIGINT`, `SIGTERM`) to clean up resources before exiting.

## 🤖 Application of AI

- ![AI-Generated](https://img.shields.io/badge/AI--Generated-orange)
  AI was used to generate configuration boilerplates (pino logger setup, TypeScript configuration), the Swagger API specification (`swagger.yaml`), and the initial mock database template (`mock-db.ts`).

- ![AI-Assisted](https://img.shields.io/badge/AI--Assisted-blue)
  Since this was my first backend project, AI was utilized extensively as a learning aid. It helped suggest architectural patterns, explain core backend concepts (Clean Architecture, Repositories, Use Cases, DTOs), and helped troubleshoot and debug errors during development. I wrote the logic code myself by hand.
## 📚 STACK
[![My Skills](https://skillicons.dev/icons?i=nodejs,express,typescript,zod)](https://skillicons.dev)

## 🔧 TOOLS
[![My Tools](https://skillicons.dev/icons?i=vscode,github,git)](https://skillicons.dev)

## ⚡ Installation & How to Run

1. Clone this repository:
```bash
git clone https://github.com/PressmenX/restful-user-product-clean-arch.git
```
2. Go to the project directory:
```bash
cd restful-user-product-clean-arch
```
3. Install dependencies:
```bash
npm install
```
4. Configure your environment variables by creating a `.env` file in the root directory:
```env
PORT=8080
NODE_ENV=development
JWT_SECRET=your_minimum_32_characters_secret_key_here
```
5. Run the development server:
```bash
npm run dev
```

## 📁 Structure Directory
```text
src/
├── config/
│   ├── env.ts
│   └── logger.ts
├── controllers/
│   ├── product.controller.ts
│   └── user.controller.ts
├── docs/
│   └── swagger.yaml
├── dto/
│   ├── product/
│   │   └── productDTO.ts
│   └── user/
│       ├── loginUserDTO.ts
│       ├── registerUserDTO.ts
│       └── updateUserDTO.ts
├── entities/
│   ├── Category.ts
│   ├── Product.ts
│   └── User.ts
├── middlewares/
│   ├── authCheck.ts
│   ├── errorHandler.ts
│   ├── index.ts
│   ├── requireJsonContent.ts
│   └── validate.ts
├── repository/
│   ├── in-memory/
│   │   ├── InMemoryCategoryRepository.ts
│   │   ├── InMemoryProductRepository.ts
│   │   └── InMemoryUserRepository.ts
│   ├── interfaces/
│   │   ├── ICategoryRepository.ts
│   │   ├── IProductRepository.ts
│   │   └── IUserRepository.ts
│   └── mock-db.ts
├── requests/
│   ├── api.http
│   ├── product.http
│   └── sign.http
├── routes/
│   ├── health.route.ts
│   ├── index.ts
│   ├── product.route.ts
│   └── user.route.ts
├── schemas/
│   ├── product/
│   │   ├── createProductSchema.ts
│   │   └── updateProductSchema.ts
│   ├── user/
│   │   ├── loginInput.ts
│   │   ├── registerInput.ts
│   │   └── updateInput.ts
│   └── env.ts
├── types/
│   ├── user/
│   │   └── LoginUser.ts
│   ├── AuthPayload.ts
│   └── express.d.ts
├── use-cases/
│   ├── product/
│   │   ├── createProduct.ts
│   │   ├── deleteProduct.ts
│   │   ├── getAllProduct.ts
│   │   ├── getProductById.ts
│   │   ├── index.ts
│   │   └── updateProduct.ts
│   └── user/
│       ├── deleteMyAccount.ts
│       ├── getProfile.ts
│       ├── index.ts
│       ├── loginUser.ts
│       ├── registerUser.ts
│       └── updateMyProfile.ts
├── utils/
│   ├── AppError.ts
│   ├── asyncError.ts
│   ├── generateProductId.ts
│   └── shutdown.ts
├── app.ts
└── server.ts
```
