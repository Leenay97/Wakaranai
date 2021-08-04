from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from . import views

urlpatterns = [
    path('', views.main_page, name='index'),
    path('kanji', views.kanji_page, name='kanji'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
