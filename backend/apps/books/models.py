from django.db import models


class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    biography = models.TextField(null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField(null=True, blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Genre(models.Model):
    name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to='genre_images/')
    
    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Publisher(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.name
    

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name='books', on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    publisher = models.ForeignKey(Publisher, related_name='books', on_delete=models.SET_NULL, null=True)
    publication_year = models.PositiveIntegerField()
    image = models.ImageField(upload_to='book_images/')
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    genre = models.ForeignKey(Genre, related_name='books', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-publication_year']