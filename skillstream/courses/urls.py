from django.urls import path

from .views import (CoursesHomeView,
                    CourseDetail,
                    SectorCourse,
                    SearchCourse,
                    AddComment,
                    CourseStudy, )

urlpatterns = [
    path("", CoursesHomeView.as_view()),
    path("detail/<uuid:course_uuid>/", CourseDetail.as_view()),
    path("<uuid:sector_uuid>/", SectorCourse.as_view()),
    path("search/<str:search_term>/", SearchCourse.as_view()),
    path("comment/<course_uuid>/", AddComment.as_view()),
    path("study/<uuid:course_uuid>/", CourseStudy.as_view()),
]
