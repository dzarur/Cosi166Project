import uvicorn

if __name__ == "__main__":
    print("Running demo api with uvicorn")
    uvicorn.run(app="api:api", host="localhost", port=9000, reload=True)
