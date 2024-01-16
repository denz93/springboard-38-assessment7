### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  JWT stands for JSON Web Token. It is a base64-encoded string that includes 3 parts `header.payload.signature`. Servers use it to authenticate users by verifing if `header.payload` matches the `signature` via a private key.

- What is the signature portion of the JWT?  What does it do?
  
  The `signature` is used to verify if the `payload` has been modificated so that the server can trust the payload.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  Yes. They can decode the `payload` and see the information inside `payload`, but they can't modify it because they don't have the private key to compute a new coresponding `signature`.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

  1. Server accepts user's credential and verify that it is a valid credential.
  2. Server uses its private key to compute a JWT token whose payload include user's credential such as user_id, user_name, etc. The token can also include expiration time, time to become valid, hash algorithm, etc.
  3. Server send the token back to the client.
  4. Client save the token and attach it to the header of any futher requests that requires to be authenticated.
  5. For every incoming requests, server unwrap the header to see if there is any JWT token. If yes, using the above private key, verify that JWT whether or not it is valid and unaltered. Unwrap the JWT's payload to get user's credential. And treat the request as authenticated.

- Compare and contrast unit, integration and end-to-end tests.

  `Unit Test`: intent to test very fundamential functionality of codebase such as functions and classes. Easy to write and avoid effectively causing future errors and bugs. In real projects, unit tests need to mock out all other related dependency code (libraries, database, etc) in order to test a single function independently.

  `Integration Test`: test the co-working ability of all/couple components to ensure they behave correctly and compatibly as intended. It's more complicated to write because there are exponential combinations of intergation. Usually, we just write integration tests for some important and error-prone components that are more likely to cause problems under extreme circumstances.

  `End-to-End Test`: test entire app as a black box to ensure what users see is what we expect. More complicated to write and most necessary to have during development.

- What is a mock? What are some things you would mock?

  `Mock` is another term of `isolate`. During `unit test`, we want to mock all other dependency components so that our desired component/function logic can be test independently.

  Usually we want to mock database, 3rd party libraries, our own dependency code, etc.

- What is continuous integration?

  `CI` is an automatic workflow of software development. Our complete application will be implemented increasingly feature by feature which is called sprints. Each sprint, we implement a feature, test it, staging it (for end-to-end test and review), and delopy it if everything works seamlessly

- What is an environment variable and what are they used for?

  `Environment variable` is a way to pass parameters to our application at runtime. It's used to avoid exposing sensitive data to codebase such as Secret Key, 3rd API Key, etc. 

- What is TDD? What are some benefits and drawbacks?

  `TDD` stands for Test Driven Development. It's a software development strategy which writes test cases earlier based on requirements and write implementations later to pass all that tests. 

  Pros: 

    1. Software is well tested.
    2. Developers are focus on writing code to pass test cases without bothering business requirements.
  
  Cons:

    1. Software requirements need to be well defined in advance.
    2. Requirements change leads to catastrophically rewrite tests and fail early implementations.
    3. Tests written in advance takes time.

- What is the value of using JSONSchema for validation?

  It is language-proof. Frontend and backend can use it to be aware of the shape of data.

- What are some ways to decide which code to test?

  We can do risk assessment table and prioritization to determine which code should we write tests first.

- What does `RETURNING` do in SQL? When would you use it?

  `RETURNING` tell the SQL what shape of data it should return. Use it when we want to ensure and alter the shape of returning data.

- What are some differences between Web Sockets and HTTP?

  `HTTP` is stateless hyper text transfer protocol. It's a request-response model which means `client` init a request to and wait for a response from `server`. Once response arrives, the connection is terminated.

  Otherwise, `Web Sockets` is a bidirectional connection. Once a connection is established between client and server, both ends can send messages to each other.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  Flask and Express are both web frameworks help quickly build backend. While Flask is specified in Python, Express is for NodeJS.

  I prefer Express because I want to use Javascript for both frontend and backend so that I don't have to worry about language differences in primitive types.
