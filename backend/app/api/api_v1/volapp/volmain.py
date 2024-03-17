from fastapi import FastAPI, APIRouter , logger,HTTPException, Body, Depends,UploadFile,File
from pydantic import BaseModel

app = FastAPI()
router = APIRouter()

class Dimensions(BaseModel):
    length: float
    breadth: float
    height: float

@router.post("/calculate_volume/")
def calculate_volume(dimensions: Dimensions):
    volume = dimensions.length * dimensions.breadth * dimensions.height
    return {"volume": volume}
