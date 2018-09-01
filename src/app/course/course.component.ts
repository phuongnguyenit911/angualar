import { Component , OnInit } from '@angular/core';
import { CourseService } from '../course.service';


@Component({
  moduleId: module.id,
  selector: 'zvn-course',
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnInit {
  coursesRandom: string[] = [];
  coursesFull: string[] = [];

  constructor(private _courseService: CourseService) {
  }

  ngOnInit() {
    this.coursesFull = this._courseService.getCourses();
    this.coursesRandom = this._courseService.getRandomCourses(3);
  }

  randomCourse() {
    this.coursesRandom = this._courseService.getRandomCourses(3);
  }

  addCourse(name: string ) {
    this._courseService.addCourse(name);
  }
}
