# Intent-Based Search System
We won the hackathon and became the **Champions** of the event !

This project is an implementation of an **Intent-Based Search System** developed as part of the AI Engineering Hackathon organized by **PORIDHI.IO** and **Brain Station 23**. The system aims to improve the search functionality of an e-commerce platform by leveraging advanced NLP and machine learning techniques to better understand and interpret user intent. 

## What We Built:
We developed an Intent-Based Search System designed to understand user intent and deliver highly relevant search results, even with a multilingual product dataset. Our solution ensures:
- Minimal downtime with fallback services handled via NGINX
- Preprocessing for optimized query handling
- QdrantDB as the vector database for efficient semantic search
- Multilingual support to serve a wider range of users
- Cosine similarity to match queries and retrieve top-k results
- Caching for fast retrieval
- Caching and 500ms average response time for a smooth user experience
- High accuracy, scalability, and reliability
- Mechanisms to address data drifting and ensure stability

  
## How to run
### Backend services
1. Clone from https://github.com/dipit099/Poridhi
2. Follow the readme file of that repo

### Frontend
1. Clone this repo
2. Build and run the containers using Docker Compose:
```bash
docker-compose up --build
```
3. Checkout the website at http://localhost:3000/


# Docker Services:

- **poridhi-postgres**: PostgreSQL database for storing data.
- **poridhi-qdrant**: Qdrant vector database for efficient semantic search.
- **poridhi-elasticsearch**: ElasticSearch service for keyword-based search.
- **poridhi-redis**: Redis service for caching and fast data retrieval.
- **semantic-search-svc**: Handles semantic search using embeddings.
- **keyword-search-svc**: Handles keyword search.
- **poridhi-nginx**: A reverse proxy for routing API traffic.
