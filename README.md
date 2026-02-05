# User Authentication and Authorization with Bearer Token

1. This project is developed using Node.js, Express.js, and MongoDB (Mongoose).
2. It follows the MVC (Model–View–Controller) architecture and implements secure authentication.
3. The API is tested and documented using Postman with published documentation.

## About 

1. This project is a **User Authentication System** developed as a backend application using **Node.js, Express.js, and MongoDB**. The main goal of this project is to understand and implement **secure RESTful APIs using JWT authentication** following the **MVC (Model–View–Controller) architecture**.

2. The application allows users to:
  - Register securely with hashed passwords
  - Login and receive a JWT token
  - Access protected routes using the token
  - View user details from the token
  - Reset password
  - Update and delete user records

3. All API endpoints are tested and documented using **Postman**, with proper request and response examples. The project also includes **basic validation and error handling** to ensure reliable API behavior.

## API Endpoints (Deployed Links)

- **Register for New User** https://a-a-app.onrender.com/api/auth/register  
![Register Screenshot](./after_deploy_ss/1.Register%20New-user.png)

- **Login for Existing user** https://a-a-app.onrender.com/api/auth/login  
![Login Screenshot](./after_deploy_ss/2.Login%20Existing-User.png)

- **Get Me/current user using Token:** https://a-a-app.onrender.com/api/auth/me 
![Single Screenshot](./after_deploy_ss/3.Me%20user%20using%20Token%20from%20Login.png)

- **Get All Users using Token:** https://a-a-app.onrender.com/api/auth/users 
![All user Screenshot](./after_deploy_ss/4.All%20Users%20Using%20Token%20from%20Login.png)

- **Fully Update User (PUT):** https://a-a-app.onrender.com/api/auth/update  
![Full Update Screenshot](./after_deploy_ss/5.Fully-updating%20User%20using%20Toke%20from%20Login.png)

- **Partial Update User (PATCH):** https://a-a-app.onrender.com/api/auth/update  
![Partially Update Screenshot](./after_deploy_ss/6.Partial%20updating%20User%20using%20Token%20from%20Login.png)

- **Delete User:** https://a-a-app.onrender.com/api/auth/delete  
![Delete user Screenshot](./after_deploy_ss/7.Deleting%20user%20using%20Token%20from%20Login.png)

- **Reset Password using mail & newPassword:** https://a-a-app.onrender.com/api/auth/reset-password  
![Reset password Screenshot](./after_deploy_ss/8.Reset%20password%20using%20MAIL%20&%20NewPassowrd.png)

## **Postman Documentation (Published Link)**

**Published Postman docs URL :** https://documenter.getpostman.com/view/51980519/2sBXc7MQvL

## **API Endpoint in Postman**

### Create User Details and Register - POST
![Register Screenshot](./ss/1.Create%20User%20&%20Register.png)

### Login - Existing User - POST
![Login Screenshot](./ss/2.%20Login%20(Existing%20User).png)

### Logged In - GET
![Logged In Screenshot](./ss/3.%20Logged%20In%20(me).png)

### All users - GET
![All users Screenshot](./ss/4.All%20Users.png)

### Reset password or Forget password - POST
![Reset password Screenshot](./ss/5.%20Reset%20pwd.png)

### Full Update User - PUT
![Full update Screenshot](./ss/6.%20Full%20Upd%20-%20Put.png)

### Partial Update User - PATCH
![Partial Update Screenshot](./ss/7.%20Partial%20Upd%20-%20Patch.png)

### Delete user - DELETE
![Delete Screenshot](./ss/8.%20Delete.png)

## **Features**

- Followed **MVC pattern** with separate folders for models, views, and controllers.
- Connected to **MongoDB using Mongoose**.
- Created **User model** with `username, email, password`.
- Implemented **User Registration route & controller function.**
- **Hashed passwords** before saving.
- Returned **success message on registration** (SUCCESS RESPONSE).
- Implemented **Login route & controller**.
- Verified user credentials.
- Generated **JWT on successful login** (SUCCESS RESPONSE).
- Returned token to user.
- Created **JWT verification middleware**
- Decoded token and attached user info to request.
- Created **protected route to get user info (SINGLE USER)**
- Used middleware to protect route.
- Returned user details from token.
- Added **detailed Postman documentation**.
- Included **sample requests & responses**.
- Implemented proper **error handling & validation**.

##  **Technologies Used**
- Node.js 
- Express.js
- Mongoose(Mongo DB)
- Postman 

## **Security Implementations**

* Passwords are **hashed before saving** to the database
* JWT tokens are used for authentication
* Protected routes require a valid token
* Token is verified via middleware before accessing sensitive data






