# Automate API testing using Cypress
## Scope 
### 1. Login user and get token.
Base URL: ```https://dummyjson.com/```
Endpoint: ```/auth/login```
HTTP request: ```POST```
Request body:  ```{
  username: 'emilys',
  password: 'emilyspass',
  expiresInMins: 30, // optional, defaults to 60```
### 2. Get current auth user.
Base URL: ```https://dummyjson.com/```
Endpoint: ```/auth/me```
HTTP request ```GET```
headers: ```'Authorization': 'Bearer /* YOUR_TOKEN_HERE */'```

### 3. Refresh auth session.
Base URL: ```https://dummyjson.com/```
Endpoint: ```auth/refresh```
HTTP request: ```POST```
Request body: ```
  refreshToken: '/* YOUR_REFRESH_TOKEN_HERE */',
  expiresInMins: 30, // optional, defaults to 60```

### 4. Get all products.
Base URL: ```https://dummyjson.com/```
Endpoint: ```/products```
HTTP request: ```GET```

### 5. Get a single product.
Base URL: ```https://dummyjson.com/```
Endpoint: ```/products/1```
HTTP request: ```GET```

### 6. Search products.
Base URL: ```https://dummyjson.com/```
Endpoint: ```/api/v1/transaction_fee```
HTTP request: ```POST```
Request body  ```{
  "amount": 2.5,
  "currency": "BTC",
  "recipient_address": "0x1234567890ABCDEF"}```

### 7. Limit and skip products. 
Base URL: ```https://dummyjson.com/```
Endpoint: ```products?limit=10&skip=10&select=title,price```
HTTP request: ```GET```

### 8. Sort products. 
Base URL: ```https://dummyjson.com/```
Endpoint: ```/products?sortBy=title&order=asc```
HTTP request: ```GET```

### 9. Get all products categories. 
Base URL: ```https://dummyjson.com/```
Endpoint: ```/products/categories```
HTTP request: ```GET```

### 10. Get products category list. 
Base URL: ```https://dummyjson.com/```
Endpoint: ```products/category-listc```
HTTP request: ```GET```

### 11. Get products by a category. 
Base URL: ```https://dummyjson.com/```
Endpoint: ```/products/category/smartphones```
HTTP request: ```GET```

### 12. Add a new product. 
Base URL: ```https://dummyjson.com/```
Endpoint: ```products/add```
HTTP request: ```POST```
Request body: ```
   title: 'BMW Pencil',
   /* other product data */```

### 13. Update a product. 
Base URL: ```https://dummyjson.com/```
Endpoint: ```/products/1```
HTTP request: ```POST```
Request body: ```
  title: 'iPhone Galaxy +1'```

### 14. Delete a product. 
Base URL: ```https://dummyjson.com/```
Endpoint: ```/products/1```
HTTP request: ```DELETE```

## Test Result
### Using Cypress
Code:
![image](https://github.com/user-attachments/assets/57171ccf-27a7-4cd1-b235-efd87a22b1e5)

Output:
![image](https://github.com/user-attachments/assets/51e5d9ee-b570-45ba-8f6b-5ba4378fe22d)

## Getting started
1. Install [git](https://www.git-scm.com/) & [node.js](https://nodejs.org/en)  in your system.
2. Open your terminal
Paste this command
```bash
git clone https://github.com/janasagar/Republic-REST_074_API_Cypress.git
```
3. Open your IDE VS Code and navigate to downloaded folder.
4. Open terminal within your IDE
Paste this command
```bash
npx cypress open
```
5. Choose your Browser and start testing

Thank You :)





























