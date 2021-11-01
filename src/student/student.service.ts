import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      name: 'Moman Raza',
      address: 'Okara Pakistan',
      bio: 'My name is Moman Raza and I am full stack Developer',
      social_media: ['facebook', 'LinkedIn'],
    },
  ];
  getStudents() {
    return this.students;
  }
  createStudent() {
    return this.students[0];
  }
  getStudentById() {
    return this.students[0];
  }
  updateStudentById() {
    return this.students[0];
  }
}
