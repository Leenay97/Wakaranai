from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('', views.main_page, name='index'),
    path('kanji', views.book_page, name='kanji'),
    url(r'^lesson/(?P<pk>[^/]+)$', views.lesson_page, name='lesson'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
