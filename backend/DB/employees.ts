export interface Employee {
    username: string;
    password: string;
    fullName: string;
    email: string;
  }
  
  export const employees: Employee[] = [
    { username: 'jgomez', password: 'password123', fullName: 'Juan Gómez', email: 'jgomez@skytech.com' },
    { username: 'mlopez', password: 'pass456', fullName: 'María López', email: 'mlopez@skytech.com' },
    { username: 'cruiz', password: 'sky789', fullName: 'Carlos Ruiz', email: 'cruiz@skytech.com' },
  ];
  