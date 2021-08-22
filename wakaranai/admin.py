from django.contrib import admin
from .models import Book, Lesson, Kanji


class BookAdmin(admin.ModelAdmin):
    list_display = [
        "title"
    ]

    ordering = [
        "title"
    ]

    fields = [
        "title"
    ]


class LessonAdmin(admin.ModelAdmin):
    list_display = [
        "lesson_number",
        "kanji_example",
        "added",
    ]

    ordering = [
        "lesson_number"
    ]

    fields = [
        "lesson_number",
        "kanji_example",
        "book",
    ]


class KanjiAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "added",
    ]

    ordering = [
        "pk"
    ]

    fields = [
        "name",
        "meaning",
        "kanji_gif",
        "reading_example_first",
        "reading_example_second",
        "words_example",
        "words_translated_example",
        "transcription",
        "lesson",
    ]


admin.site.register(Book, BookAdmin)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(Kanji, KanjiAdmin)
