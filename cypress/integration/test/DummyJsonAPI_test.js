/// <reference types="cypress" />

describe('DummyAPI testsuite', () => {
    const burl = "https://dummyjson.com";
    let token;

    // Test to authenticate and retrieve token
    it('Auth', () => {
        cy.request({
            method: "POST",
            url: burl + "/auth/login",
            headers: {
                accept: "application/json"
            },
            body: {
                username: "michaelw",
                password: "michaelwpass"
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            const res = response.body;
            token = res.token; // Store the token for future use
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to get current authenticated user
    it('Get Current Auth User', () => {
        cy.request({
            method: "GET",
            url: burl + "/auth/me",
            headers: {
                accept: "application/json",
                "Authorization": "Bearer " + token // Use the stored token in the Authorization header
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to refresh authentication token
    it('Refresh Auth Token', () => {
        cy.request({
            method: "POST",
            url: burl + "/auth/refresh",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                refreshToken: token, // Use the stored token to refresh
                // expiresInMins: 30 // optional, defaults to 60
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            const res = response.body;
            const refreshToken = res.refreshToken; // Get the new token from the response
            cy.log("Refresh Token is: " + refreshToken); // Log the refresh token
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to fetch all products
    it('Fetch All Products', () => {
        cy.request({
            method: "GET",
            url: burl + "/products",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to fetch a single product by ID
    it('Fetch Single Product', () => {
        cy.request({
            method: "GET",
            url: burl + "/products/1",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to search for products by query
    it('Search Products', () => {
        cy.request({
            method: "GET",
            url: burl + "/products/search?q=phone",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to limit and skip products for pagination
    it('Limit and Skip Products', () => {
        cy.request({
            method: "GET",
            url: burl + "/products?limit=10&skip=10&select=title,price",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to sort products by a specified field
    it('Sort Products', () => {
        cy.request({
            method: "GET",
            url: burl + "/products?sortBy=title&order=asc",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to get all product categories
    it('Get All Product Categories', () => {
        cy.request({
            method: "GET",
            url: burl + "/products/categories",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to get products category list
    it('Get Products Category List', () => {
        cy.request({
            method: "GET",
            url: burl + "/products/category-list",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to get products by a specific category
    it('Get Products By Category', () => {
        cy.request({
            method: "GET",
            url: burl + "/products/category/smartphones",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to add a new product
    it('Add New Product', () => {
        cy.request({
            method: "POST",
            url: burl + "/products/add",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                title: 'Cliper reusable lighter'
                
            }
        }).then((response) => {
            expect(response.status).to.equal(201); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to update a product
    it('Update Product', () => {
        cy.request({
            method: "PUT",
            url: burl + "/products/1",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                title: 'iPhone Galaxy +1'
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });

    // Test to delete a product
    it('Delete Product', () => {
        cy.request({
            method: "DELETE",
            url: burl + "/products/1",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.equal(200); // Validate the response status code
            cy.log(JSON.stringify(response.body)); // Log the response body
        });
    });
});
