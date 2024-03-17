from fastapi import APIRouter

from api.api_v1.estimation import estimator
from api.api_v1.users import user_authentication
from api.api_v1.volapp import volmain 

api_router = APIRouter()
api_router.include_router(volmain.router, prefix = "/volmain", tags=["volmain"])
api_router.include_router(estimator.router, prefix = "/estimator", tags=["estimator"])
api_router.include_router(user_authentication.router, prefix = "/user_authentication", tags=["user_authentication"])