# AI Election System

## Overview
AI-based election system using facial recognition. The system allows multiple votes, user management, and detects invalid image uploads (e.g., images without a face).

## Key Features:
- **AI Face Detection**: Ensures only valid images with faces are accepted.
- **Multiple Votes**: Users can vote more than once.
- **Admin Interface**: Manage users and elections.
- **Performance**: Caching and query optimizations for fast performance.

## Technologies:
- **Frontend**: Angular
- **Backend**: .NET Core
- **Database**: SQL Server

## Setup

1. **Clone repo**:
   ```bash
Frontend
   git clone https://github.com/liorq/ai-election-system-frontend.git
Backend:
    git clone https://github.com/liorq/ai-election-system-backend.git

cd backend
dotnet restore
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run
Frontend:


cd frontend
npm install
ng serve
Usage
Access /admin to manage users.
Upload valid face images for voting.
Error Handling
Invalid images: "No face detected in the image."


To add a new user, go to the following URL: /admin. The username and password for admin access are:

Username: admin
Password: admin

https://github.com/user-attachments/assets/8ed4e78f-7954-487c-999a-85fa240d990c

