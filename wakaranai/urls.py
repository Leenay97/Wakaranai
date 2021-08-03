from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main_page, name='index'),
    path('kanji', views.kanji_page, name='kanji'),
]
