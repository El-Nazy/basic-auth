# basic-auth
This is a basic password authentication project

To TEST USE;
    For Signup
        METHOD: POST
        URL: localhost:8080/api/user/signup
        JSON body format: {
            "firstname": "Emmanuel",
            "lastname": "Ngene",
            "email": "mail@example.com",
            "password": "password"
        }

    For Signin
        METHOD: POST
        URL: localhost:8080/api/user/signin
        JSON body format: {
            "email": "mail@example.com",
            "password": "password"
        }