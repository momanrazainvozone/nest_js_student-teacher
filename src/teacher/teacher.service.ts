import { Injectable } from '@nestjs/common';

@Injectable()
export class TeacherService {
  private teachers = [
    {
      id: '112233',
      name: 'Moman Raza',
      address: 'Okara Pakistan',
      bio: 'My name is Moman Raza and I am full stack Developer',
      social_media: ['facebook', 'LinkedIn'],
    },
  ];
  getStudents() {
    return this.teachers;
  }
  updateTeacherStudent() {
    return this.teachers[0];
  }
  updateTeacherById() {
    return this.teachers[0];
  }

  createTeacher() {
    return this.teachers[0];
  }
  getTeacherById() {
    return this.teachers[0];
  }
}
