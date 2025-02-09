from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to='genre_images/')
    
    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
