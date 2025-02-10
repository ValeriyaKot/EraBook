from django.conf import settings
from rest_framework.routers import DefaultRouter
from .views import GenreViewSet, BookViewSet, AuthorViewSet, PublisherViewSet
from django.conf.urls.static import static


router = DefaultRouter()
router.register('genres', GenreViewSet, basename='genres')
router.register('books', BookViewSet, basename='books')
router.register('authors', AuthorViewSet, basename='authors')
router.register('publishers', PublisherViewSet, basename='publishers')


urlpatterns = router.urls