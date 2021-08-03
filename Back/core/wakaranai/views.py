from django.shortcuts import render
from django.conf import settings
from django.conf.urls.static import static


def index_page(request):
    return render(request, "Front/index.html")
