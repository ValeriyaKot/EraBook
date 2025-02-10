from django.contrib import admin
from .models import Genre, Author, Publisher, Book


admin.site.register(Genre)
admin.site.register(Author)
admin.site.register(Publisher)
admin.site.register(Book)
