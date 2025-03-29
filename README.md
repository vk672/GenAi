# GenAi
# GenAI Query Simulator  

## 📌 Overview  
**GenAI Query Simulator** is a Node.js-based API that simulates responses to AI-generated queries. It provides functionalities such as query processing, validation, and explanation to help understand how AI models interpret user input.  

## 🚀 Features  
- **Query Processing**: Handles user queries and generates simulated AI responses.  
- **Query Explanation**: Provides insights into how a query is interpreted.  
- **Validation**: Ensures that input queries follow specific rules.  
- **Authentication**: Secures endpoints using basic authentication mechanisms.  
- **Database Mocking**: Simulates a database for query storage.  
- **API Testing**: Includes Postman collection for testing API routes.  

## 📂 Project Structure  
GenAI-Query-Simulator/
│── src/                 # Main source directory
│   ├── index.js         # Main server entry point
│   ├── auth.js          # Authentication logic
│   ├── database.js      # Mock database connection
│   ├── queryLogic.js    # Query processing logic
│   ├── routes/          # API route handlers (Inside `src`)
│   │   ├── query.js     # Handles /query requests
│   │   ├── explain.js   # Handles /explain requests
│   │   ├── validate.js  # Handles /validate requests
│── tests/               # Unit tests
│── .env                 # Environment variables
│── package.json         # Dependencies
│── README.md            # Documentation
│── postman_collection.json # API testing collection
