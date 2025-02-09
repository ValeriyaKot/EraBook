from django.conf import settings
from rest_framework.routers import DefaultRouter
from .views import GenreViewSet
from django.conf.urls.static import static


router = DefaultRouter()
router.register('genres', GenreViewSet, basename='genres')


urlpatterns = router.urls