from django.urls import path
from todos.views import TodoView, DeleteTodoView

urlpatterns = [
    path('todo/', TodoView.as_view(), name='todo'),
    path('todo/<int:id>/', DeleteTodoView.as_view(), name='delete-todo' )
]
