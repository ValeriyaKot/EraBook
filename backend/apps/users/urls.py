from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import AuthViewSet

router = DefaultRouter()

urlpatterns = [
    path('register/', AuthViewSet.as_view({'post': 'register'}), name='register'),
    path('login/', AuthViewSet.as_view({'post': 'login'}), name='login'),
]
