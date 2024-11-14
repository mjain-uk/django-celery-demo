from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, DestroyAPIView

from todos.serializers import TodoSerializer
from todos.models import Todo
# Create your views here.

class TodoView(ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class DeleteTodoView(DestroyAPIView):
    lookup_field='id'
    
    def get_queryset(self ):
        return Todo.objects.filter(id=self.kwargs['id'])
    
    

