import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  courses: string[];

  constructor() {
    this.courses = ['angualar', 'typescript', 'php', 'nodejs', 'reactjs', 'vue.js'];
  }

  getRandomCourses(total: number): string[] {
    return this.getRandomArrayElements(this.courses, 3);
  }

  getCourses(): string[] {
    return this.courses;
  }

  addCourse(name: string) {
    this.courses.push(name);
  }

  private getRandomArrayElements(arr, count) {
    const shuffled = arr.slice(0);
    let i = arr.length;
    const min = i - count;
    let temp;
    let index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }

}