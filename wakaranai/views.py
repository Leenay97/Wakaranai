from django.shortcuts import render
from django.conf import settings
from django.conf.urls.static import static


def main_page(request):
    return render(request, "index.html")


def kanji_page(request):
    return render(request, "kanji.html")
