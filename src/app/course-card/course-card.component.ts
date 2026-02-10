import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  
course = input.required<Course>()
index = input.required<number>()
courseSelected = output<Course>()
//   @Input({
//     required:true
//   })
//   course:Course;
  
  
//   @Input({
//     required:true
//   })
//   index:number;




//   @Output()
// courseSelected = new EventEmitter<Course>()


onCourseView() {
console.log('soy el course-card');
 this.courseSelected.emit(this.course())
}



  
}
