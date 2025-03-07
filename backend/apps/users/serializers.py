from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Profile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class RegisterSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(max_length=255)
    phone_number = serializers.CharField(max_length=20)
    birthday = serializers.DateField(required=False)
    country = serializers.CharField(required=False)
    gender = serializers.ChoiceField(choices=Profile.GENDER_CHOICES, required=False)
    age_range = serializers.ChoiceField(choices=Profile.AGE_CHOICES, required=False)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'full_name', 'phone_number', 'birthday', 'country', 'gender', 'age_range']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):

        profile_data = {
            'full_name': validated_data.pop('full_name'),
            'phone_number': validated_data.pop('phone_number'),
            'birthday': validated_data.pop('birthday', None),
            'country': validated_data.pop('country', None),
            'gender': validated_data.pop('gender', None),
            'age_range': validated_data.pop('age_range', None),
        }


        user = User.objects.create_user(**validated_data)
        Profile.objects.filter(user=user).update(**profile_data)

        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        from django.contrib.auth import authenticate
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise serializers.ValidationError("Неверные учетные данные")

        refresh = RefreshToken.for_user(user)
        return {
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user": UserSerializer(user).data
        }
