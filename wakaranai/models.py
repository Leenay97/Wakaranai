from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=20)

    def __str__(self):
        return self.title


class Lesson(models.Model):
    lesson_number = models.PositiveIntegerField()
    kanji_example = models.CharField(max_length=50, blank=True, null=True)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, null=True)
    added = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return f"lesson number - {self.lesson_number}"


class Kanji(models.Model):
    name = models.CharField(max_length=10, blank=True, null=True)
    kanji_gif = models.CharField(max_length=50, blank=True, null=True)
    reading_example_first = models.CharField(max_length=50, blank=True, null=True)
    reading_example_second = models.CharField(max_length=50, blank=True, null=True)
    words_example = models.JSONField(null=True, blank=True)
    words_translated_example = models.JSONField(null=True, blank=True)
    transcription = models.JSONField(null=True, blank=True)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, null=True)
    added = models.DateTimeField(auto_now_add=True, null=True, blank=True)
