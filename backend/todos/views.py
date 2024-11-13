from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView

from todos.serializers import TodoSerializer
from todos.models import Todo
# Create your views here.

class TodoView(ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
