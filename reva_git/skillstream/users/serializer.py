from rest_framework.serializers import ModelSerializer,Serializer

from .models import User

class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = [
            'name',
        ]