from django.shortcuts import render
from .models import Book, Lesson, Kanji


def main_page(request):
    return render(request, "index.html")


def book_page(request):
    context = []
    books = Book.objects.all().values()
    for book in books:
        lessons = Lesson.objects.filter(book_id=book["id"]).values()
        context.append(
            {
                "book": book,
                "lessons": lessons,
            }
        )
    return render(request, "book.html", {"context": context})


def lesson_page(request, pk):
    return render(
        request,
        "lesson.html",
        {
            "lesson_number": Lesson.objects.get(id=pk).lesson_number,
            "kanjis": Kanji.objects.filter(lesson_id=pk).values().order_by('added')
        }
    )

# TODO after testing sentry
def trigger_error(request):
    division_by_zero = 1 / 0