from rest_framework import serializers
from .models import Genre, Author, Publisher, Book

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__' 

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        if rep['image']:  
            rep['image'] = instance.image.url  
        return rep


class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = '__all__'


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True) 
    genre = GenreSerializer(read_only=True) 
    publisher = PublisherSerializer(read_only=True)  

    class Meta:
        model = Book
        fields = '__all__'