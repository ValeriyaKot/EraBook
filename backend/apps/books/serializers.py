from rest_framework import serializers
from .models import Genre

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__' 

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        if rep['image']:  
            rep['image'] = instance.image.url  
        return rep
