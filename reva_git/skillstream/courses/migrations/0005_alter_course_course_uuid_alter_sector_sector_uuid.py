# Generated by Django 4.2.6 on 2023-10-30 18:18

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0004_alter_course_comments_alter_course_course_uuid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='course_uuid',
            field=models.UUIDField(default=uuid.uuid4, unique=True),
        ),
        migrations.AlterField(
            model_name='sector',
            name='sector_uuid',
            field=models.UUIDField(default=uuid.UUID('60b3ef41-64c0-4b37-bdf2-3eb9b2aeb285'), unique=True),
        ),
    ]
