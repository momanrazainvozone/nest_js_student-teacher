export class FindStudentsResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class CreateStudentDto {
  name: string;
  teacher: string;
  email: string;
  password: string;
}

export class CreateStudentResponseDto {
  name: string;
  teacher: string;
  email: string;
  password: string;
  accessToken: string;
}

export class StudentResponseDto {
  id: string;
  name: string;
  email: string;
  password: string;
  teacher: string;
}

export class UpdateStudentDto {
  name: string;
  teacher: string;
}

export class loginStudentDto {
  email: string;
  password: string;
}

export class logoutStudentDto {
  access_token: string;
}
