from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"status": "online"}

@app.post("/assign-shipping-profile")
def assign():
    return {"success": True}