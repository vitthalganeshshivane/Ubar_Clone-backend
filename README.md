# Backend API Documentation

## Endpoint: `/api/users/register`

### Description

This endpoint allows a new user to register. It requires the user's full name, email, and password. The password is hashed before storage, and a JSON Web Token (JWT) is generated upon successful registration.

### HTTP Method

`POST`

### Request Body

- **fullName** (object):
  - `firstname` (string, required): Must be at least 3 characters long.
  - `lastname` (string, optional): Must be at least 3 characters long if provided.
- **email** (string, required): Must be a valid email format.
- **password** (string, required): Must be at least 6 characters long.

**Example:**

```json
- {
-  "fullName": {
-    "firstname": "John",
-    "lastname": "Doe"
-  },
-  "email": "john.doe@example.com",
-  "password": "securePassword"
- }

## Code 201 Created

Description: User registered successfully.
Response Body:


{
  "message": "User registered successfully",
  "token": "<jwt-token>",
  "user": { /* User object details */ }
}

400 Bad Request

Description: Input validation errors.
Response Body:
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
    // Additional error objects if applicable
  ]
}
```
