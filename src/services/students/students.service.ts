import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetStudent, CreateStudentPayload } from '../../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<GetStudent[]> {
    return this.http.get<GetStudent[]>(`${this.baseUrl}/students`);
  }

  createStudent(payload: CreateStudentPayload): Observable<GetStudent> {
    return this.http.post<GetStudent>(`${this.baseUrl}/students`, payload);
  }

  deleteStudent(studentId: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/students/${String(studentId)}`);
  }
}
