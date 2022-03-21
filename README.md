# Odev 4 - E Commerce Website 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# The First Page of Web-Site
- The user should be register and login for see products.
![image](https://user-images.githubusercontent.com/98026058/159251387-b8b8bb5f-7ffc-4d71-86c8-452b73f92f8e.png)


# Register Form Page 
- I use reactive form and reactive form's validators for register form.
- The user must enter a valid email addres also the password and password rerply fields must be the same.
- Also I use routing for register page.
![image](https://user-images.githubusercontent.com/98026058/159251728-d3efb70f-cb85-451a-82f8-2913c3857582.png)
![image](https://user-images.githubusercontent.com/98026058/159251838-11a62200-c46d-43c4-9698-8e436dc97335.png)
- After successful registration, user information will be registered in "go.rest/users" api.

# Login Form Page
- During the login process, the 'go.rest/users' API will be checked. If the email or password is incorrect, a warning is given.
![image](https://user-images.githubusercontent.com/98026058/159252910-b9279ca5-23e1-4e39-ad75-b81b60a62e54.png)
- If the login process is successful, the user will be automatically redirected to the products page.
![image](https://user-images.githubusercontent.com/98026058/159253031-cbc4757e-db0c-445b-93ca-09c15ee25474.png)
![image](https://user-images.githubusercontent.com/98026058/159253083-a25bd411-3781-470f-aaac-a3b54ca8cdd8.png)

# The Products Page
![image](https://user-images.githubusercontent.com/98026058/159253330-1a11ee61-d3d7-419a-8ee4-daed0c1873c0.png)
- The user can search on the products page and filter the products according to the specified categories (all products, electronic products, fashion products, jewelry products).
![image](https://user-images.githubusercontent.com/98026058/159253413-5040ae32-4e44-4c73-a45a-f5406f86e932.png)
![image](https://user-images.githubusercontent.com/98026058/159253474-1c2b507f-4cf3-4c11-9674-3590613a831b.png)
- By clicking on the "product details" button, the user can see a more detailed description of the products and product reviews. I use routing for product detail.
- I got the product comments automatically from the 'go.res/comments' api.
![image](https://user-images.githubusercontent.com/98026058/159253763-20b8f68f-1ed0-46b9-a004-15af327141a8.png)

# The Cart 
- User can add products to cart from homepage or product detail page.
![image](https://user-images.githubusercontent.com/98026058/159254054-c14d798a-140c-446b-89fc-9ddea02b27c0.png)
- With the Remove all button, you can delete the entire cart, and the payment button can make a payment.
- I recorded the payment with console.log when the payment was made.
- After payment, the entire cart is emptied.
![image](https://user-images.githubusercontent.com/98026058/159254326-9cd0ed4b-0308-4a63-94f1-77306b48e5c7.png)
![image](https://user-images.githubusercontent.com/98026058/159254429-9bcade85-f177-4dfe-8a1d-f1a3b846292d.png)
- Products that bougth
![image](https://user-images.githubusercontent.com/98026058/159254537-863bc3c4-6131-4b1b-abb6-a51f99ccee50.png)

# Mobile Verison of Project
![image](https://user-images.githubusercontent.com/98026058/159254654-28ae433b-bd1c-45b1-8fba-7e3bb83c5941.png)






