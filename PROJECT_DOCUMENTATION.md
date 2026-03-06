# 🎓 School Management Dashboard - Complete Documentation

**Version:** 1.0.0  
**Project Name:** Lama Dev Next.js School Management Dashboard  
**Description:** A comprehensive role-based school management system with admin, teacher, student, and parent dashboards.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Architecture](#architecture)
5. [Components Documentation](#components-documentation)
6. [Pages & Routes](#pages--routes)
7. [Data Models](#data-models)
8. [User Roles & Permissions](#user-roles--permissions)
9. [Setup & Installation](#setup--installation)
10. [Running the Project](#running-the-project)
11. [Database Integration Guide](#database-integration-guide)
12. [API Routes Implementation](#api-routes-implementation)
13. [Authentication & Authorization](#authentication--authorization)
14. [Styling & Customization](#styling--customization)
15. [Best Practices](#best-practices)
16. [Troubleshooting](#troubleshooting)
17. [Future Enhancements](#future-enhancements)

---

## Project Overview

### What is this project?

A **multi-role school management dashboard** built with Next.js 14, providing interfaces for Admins, Teachers, Students, and Parents to manage school operations including:

- 👥 **Student Management** - Track student information, grades, attendance
- 👨‍🏫 **Teacher Management** - Manage teachers, their subjects, and classes
- 📚 **Class Management** - Organize classes, assign teachers
- 📝 **Academic Features** - Assignments, exams, results, lessons
- 📅 **Calendar & Events** - Schedule events, manage timetables
- 📣 **Announcements** - Share school-wide messages
- 📊 **Analytics & Reports** - Dashboard statistics and charts
- 👶 **Parent Portal** - Parents can view student progress

### Key Features

- ✅ **Role-Based Access Control** - Different views for each user type
- ✅ **Responsive Design** - Works on desktop, tablet, mobile
- ✅ **Data Visualization** - Charts and graphs for analytics
- ✅ **Form Management** - Create, update, delete operations
- ✅ **Search & Filter** - Find data quickly
- ✅ **Pagination** - Handle large datasets
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Lazy Loading** - Performance optimized with dynamic imports

---

## Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with SSR | 14.2.5 |
| **React** | UI library | 18 |
| **TypeScript** | Type safety | 5 |
| **Tailwind CSS** | Styling framework | 3.4.1 |
| **React Hook Form** | Form state management | 7.52.2 |
| **Zod** | Schema validation | 3.23.8 |
| **Recharts** | Data visualization | 2.12.7 |
| **React Big Calendar** | Calendar component | 1.13.2 |
| **Lucide React** | Icon library | 0.577.0 |

### Styling
- **Tailwind CSS** - Utility-first CSS framework with custom color theme
- **PostCSS** - CSS transformation tool

### Development Tools
- **ESLint** - Code linting
- **Node.js** - Runtime environment

---

## Project Structure

```
next-dashboard-ui-completed/
├── src/
│   ├── app/                                   # Next.js App Router
│   │   ├── globals.css                       # Global styles
│   │   ├── layout.tsx                        # Root layout
│   │   ├── page.tsx                          # Home page
│   │   ├── sign-in/
│   │   │   └── page.tsx                      # Login page
│   │   ├── sign-up/
│   │   │   └── page.tsx                      # Registration page
│   │   └── (dashboard)/                      # Protected routes group
│   │       ├── layout.tsx                    # Dashboard layout
│   │       ├── admin/
│   │       │   └── page.tsx                  # Admin dashboard
│   │       ├── teacher/
│   │       │   └── page.tsx                  # Teacher dashboard
│   │       ├── student/
│   │       │   └── page.tsx                  # Student dashboard
│   │       ├── parent/
│   │       │   └── page.tsx                  # Parent dashboard
│   │       └── list/                         # Data management pages
│   │           ├── students/
│   │           │   ├── page.tsx              # Students list
│   │           │   └── [id]/
│   │           │       └── page.tsx          # Student details
│   │           ├── teachers/
│   │           │   ├── page.tsx              # Teachers list
│   │           │   └── [id]/
│   │           │       └── page.tsx          # Teacher details
│   │           ├── parents/page.tsx          # Parents list
│   │           ├── classes/page.tsx          # Classes list
│   │           ├── subjects/page.tsx         # Subjects list
│   │           ├── lessons/page.tsx          # Lessons list
│   │           ├── exams/page.tsx            # Exams list
│   │           ├── assignments/page.tsx      # Assignments list
│   │           ├── results/page.tsx          # Results list
│   │           ├── announcements/page.tsx    # Announcements list
│   │           └── events/page.tsx           # Events list
│   │
│   ├── components/                           # Reusable components
│   │   ├── Announcements.tsx                 # Announcements widget
│   │   ├── AttendanceChart.tsx               # Attendance chart
│   │   ├── BigCalender.tsx                   # Large calendar
│   │   ├── CountChart.tsx                    # Count statistics chart
│   │   ├── EventCalendar.tsx                 # Event calendar widget
│   │   ├── FinanceChart.tsx                  # Finance data chart
│   │   ├── FormModal.tsx                     # Form modal wrapper
│   │   ├── InputField.tsx                    # Reusable input component
│   │   ├── Menu.tsx                          # Sidebar navigation
│   │   ├── Navbar.tsx                        # Top navigation bar
│   │   ├── Pagination.tsx                    # Pagination component
│   │   ├── Performance.tsx                   # Performance chart
│   │   ├── Table.tsx                         # Generic table component
│   │   ├── TableSearch.tsx                   # Table search widget
│   │   ├── UserCard.tsx                      # User info card
│   │   └── forms/
│   │       ├── StudentForm.tsx               # Student form
│   │       └── TeacherForm.tsx               # Teacher form
│   │
│   ├── lib/
│   │   └── data.ts                           # Mock data (to be replaced with API)
│   │
│   └── api/                                  # API routes (when implemented)
│       └── [future] API endpoints
│
├── public/                                   # Static assets
│   ├── logo.png
│   ├── avatar.png
│   ├── *.png                                 # Various icons
│   └── ...
│
├── package.json                              # Dependencies
├── tsconfig.json                             # TypeScript config
├── tailwind.config.ts                        # Tailwind config
├── postcss.config.mjs                        # PostCSS config
├── next.config.mjs                           # Next.js config
└── README.md                                 # Project readme
```

---

## Architecture

### Current Architecture (Mock Data)

```
┌─────────────────────────────────────────────────────┐
│              Next.js Frontend                        │
├──────────────────────┬──────────────────────────────┤
│  Pages (SSR/SSG)     │  UI Components               │
│  - Home              │  - Table                     │
│  - Dashboard         │  - Forms                     │
│  - Lists             │  - Charts                    │
│  - Details           │  - Calendar                  │
├──────────────────────┴──────────────────────────────┤
│              State & Data                            │
│  src/lib/data.ts (Mock Data)                        │
├─────────────────────────────────────────────────────┤
│              Styling                                 │
│  Tailwind CSS + Custom Colors                      │
└─────────────────────────────────────────────────────┘
```

### Target Architecture (With Backend)

```
┌──────────────────────────────────────────────────────────────┐
│                    Client (Browser)                          │
│              Next.js Frontend Application                    │
│  - Pages (Server Components)                                │
│  - Components (Client & Server)                             │
│  - Forms with validation                                    │
│  - Authentication state                                    │
└────────────────────────┬─────────────────────────────────────┘
                         │ HTTP/REST API
                         │ (JSON)
                         ↓
┌──────────────────────────────────────────────────────────────┐
│                Backend API Server                            │
│  (Node.js + Express/Fastify OR Python + FastAPI)           │
├──────────────────────────────────────────────────────────────┤
│  - Authentication (JWT/OAuth)                               │
│  - Authorization (Role-Based Access Control)                │
│  - Business Logic                                           │
│  - Data Validation                                          │
│  - Routes:                                                  │
│    • POST /api/auth/login                                   │
│    • POST /api/auth/register                                │
│    • GET /api/students                                      │
│    • POST /api/students                                     │
│    • PUT /api/students/:id                                  │
│    • DELETE /api/students/:id                               │
│    • [Similar for teachers, classes, etc.]                  │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         ↓
┌──────────────────────────────────────────────────────────────┐
│           Database (PostgreSQL/MongoDB)                      │
├──────────────────────────────────────────────────────────────┤
│  Tables:                                                     │
│  - users (authentication)                                   │
│  - students, teachers, parents                              │
│  - classes, subjects                                        │
│  - lessons, assignments, exams, results                     │
│  - attendance, announcements, events                        │
│  - messages                                                 │
└──────────────────────────────────────────────────────────────┘
```

### Data Flow

**Reading Data:**
```
User visits page → Next.js Page Component → 
Calls API/data → Returns Promise → 
Renders HTML → Browser displays
```

**Creating Data:**
```
User fills form → FormModal component → 
Validation (react-hook-form + Zod) → 
POST to API → Backend validates → 
Saves to database → Returns response → 
Revalidate/refresh data → UI updates
```

**Updating Data:**
```
User clicks edit → FormModal with data → 
Form pre-populated → User modifies → 
PUT to API → Backend validates → 
Updates database → Returns updated object → 
Revalidate data → UI reflects changes
```

**Deleting Data:**
```
User clicks delete → Confirmation dialog → 
DELETE API request → Backend validates → 
Soft/hard delete from database → 
Returns success → Refresh list → 
Item removed from UI
```

---

## Components Documentation

### Layout Components

#### **Navbar.tsx**
**Purpose:** Top navigation bar with search, notifications, and user info

**Props:** None (uses hardcoded data)

**Features:**
- Search bar (hidden on mobile)
- Message icon
- Notification badge
- User profile dropdown
- Responsive design

**Usage:**
```tsx
<Navbar />
```

**States:**
- Desktop: Full search bar visible
- Mobile: Search bar hidden

---

#### **Menu.tsx**
**Purpose:** Sidebar navigation with role-based menu items

**Features:**
- Dynamic menu based on user role
- Icon + label navigation
- Collapsible on mobile
- Current active route highlighting
- Separate "MENU" and "OTHER" sections

**Role-Based Visibility:**
```
MENU Section:
- Home: all roles
- Teachers: admin, teacher
- Students: admin, teacher
- Parents: admin, teacher
- Subjects: admin only
- Classes: admin, teacher
- Lessons: admin, teacher
- Exams: all roles
- Assignments: all roles
- Results: all roles
- Attendance: all roles
- Events: all roles
- Messages: all roles
- Announcements: all roles

OTHER Section:
- Profile: all roles
- Settings: all roles
- Logout: all roles
```

**Current Role:** Controlled by `role` variable in `data.ts`

---

### Data Display Components

#### **Table.tsx**
**Purpose:** Generic, reusable table component

**Props:**
```typescript
interface TableProps {
  columns: {
    header: string;          // Column header text
    accessor: string;        // Data field to display
    className?: string;      // Custom CSS classes
  }[];
  renderRow: (item: any) => React.ReactNode;  // Custom row renderer
  data: any[];               // Array of data to display
}
```

**Features:**
- Dynamic column definition
- Custom row rendering for flexibility
- Responsive design
- Striped rows

**Example Usage:**
```tsx
const columns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
];

<Table
  columns={columns}
  data={studentsData}
  renderRow={(student) => (
    <tr>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>
        <FormModal table="student" type="update" data={student} />
      </td>
    </tr>
  )}
/>
```

---

#### **TableSearch.tsx**
**Purpose:** Search/filter widget for tables

**Props:**
- `onSearch`: Callback when search input changes
- `placeholder`: Search placeholder text

**Features:**
- Real-time search input
- Search icon

---

#### **Pagination.tsx**
**Purpose:** Navigate through paginated data

**Props:**
```typescript
{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
```

**Features:**
- Previous/next buttons
- Page number indicator
- Disabled state for first/last pages

---

### Form Components

#### **FormModal.tsx**
**Purpose:** Modal wrapper for create/update/delete operations

**Props:**
```typescript
{
  table: "teacher" | "student" | "parent" | "subject" | "class" | 
         "lesson" | "exam" | "assignment" | "result" | "attendance" | 
         "event" | "announcement";
  type: "create" | "update" | "delete";
  data?: any;    // For update/delete operations
  id?: number;   // For delete operations
}
```

**Features:**
- Dynamic form loading based on table type
- Lazy loading (code splitting) for performance
- Color-coded buttons (blue=create, purple=update, red=delete)
- Modal dialog UI

**Supported Forms:**
- `StudentForm` - Student creation/editing
- `TeacherForm` - Teacher creation/editing
- Other forms can be added following the same pattern

---

#### **InputField.tsx**
**Purpose:** Reusable form input component

**Props:**
```typescript
{
  label: string;
  type: string;
  placeholder?: string;
  register: any;      // react-hook-form register function
  name: string;       // Field name
  error?: string;     // Error message
  inputType?: string; // HTML input type
}
```

**Features:**
- Label + input combination
- Error message display
- Integration with react-hook-form
- Responsive styling

---

#### **StudentForm.tsx** / **TeacherForm.tsx**
**Purpose:** Specific CRUD forms for students/teachers

**Features:**
- Form validation with Zod
- Pre-population on edit
- Multiple input types
- Error handling
- Submit to backend API (when integrated)

---

### Chart & Visualization Components

#### **CountChart.tsx**
**Purpose:** Display count statistics in chart format

**Data:**
- Boy/Girl ratio visualization
- Uses Recharts for rendering

---

#### **AttendanceChart.tsx**
**Purpose:** Show attendance-related statistics

**Visualization:**
- Bar chart or area chart
- Attendance trends over time

---

#### **FinanceChart.tsx**
**Purpose:** Display financial/fee-related statistics

**Data:**
- Income vs Expenses
- Fee collection status

---

#### **Performance.tsx**
**Purpose:** Student performance metrics

**Shows:**
- Grade distribution
- Subject-wise performance
- Top performers

---

#### **BigCalender.tsx** / **EventCalendar.tsx**
**Purpose:** Calendar displays

**Features:**
- `BigCalender`: Full-featured calendar with events
- `EventCalendar`: Mini calendar widget
- Event highlighting
- Click to view event details

---

### Widget Components

#### **UserCard.tsx**
**Purpose:** Display user profile information

**Shows:**
- User avatar
- Name
- Role
- Contact info

---

#### **Announcements.tsx**
**Purpose:** Display latest announcements

**Features:**
- List of announcements
- Timestamp
- Author info
- Message preview

---

---

## Pages & Routes

### Authentication Pages

#### **/sign-in**
- User login form
- Email and password validation
- Remember me option
- Forgot password link

#### **/sign-up**
- User registration form
- Email, password, role selection
- Form validation
- Terms & conditions acceptance

---

### Dashboard Pages

#### **/ (Home / Dashboard)**
**Path:** `/` (after login redirects to role-specific dashboard)

**Components:**
- Welcome greeting
- Quick stats (total students, teachers, etc.)
- Recent announcements
- Upcoming events
- Performance charts
- Attendance summary

**Accessible to:** All authenticated users

---

#### **/admin**
**Purpose:** Admin dashboard

**Key Metrics:**
- Total students, teachers, parents
- Class count
- Upcoming events
- System statistics
- Financial overview

**Actions:**
- Manage all data
- View reports
- System settings

---

#### **/teacher**
**Purpose:** Teacher dashboard

**Key Metrics:**
- My classes
- My students
- Upcoming lessons
- Pending assignments to grade
- Class attendance

**Actions:**
- Create assignments
- Grade submissions
- Mark attendance
- Create announcements

---

#### **/student**
**Purpose:** Student dashboard

**Key Metrics:**
- My classes
- My grades
- Pending assignments
- Coming exams
- Class materials

**Actions:**
- View assignments
- Submit work
- View grades
- Check attendance

---

#### **/parent**
**Purpose:** Parent dashboard

**Key Metrics:**
- Child's grades
- Child's attendance
- Upcoming school events
- School announcements

**Actions:**
- View child progress
- Message teacher
- View payments

---

### List Pages

All list pages follow the pattern: `/list/{resource}`

#### **/list/students**
- **Table columns:** ID, Name, Class, Email, Phone, Actions
- **Features:** Search, filter by class, pagination
- **Actions:** View details, Edit, Delete, Create new

#### **/list/students/[id]**
- **Shows:** Detailed student information
- **Sections:** Profile, Academic Record, Attendance, Grades
- **Actions:** Edit profile, View assignments, View results

#### **/list/teachers**
- **Table columns:** ID, Name, Email, Phone, Subjects, Classes, Actions
- **Features:** Search by name/email, filter by subject
- **Actions:** View details, Edit, Delete, Create new

#### **/list/teachers/[id]**
- **Shows:** Detailed teacher information
- **Sections:** Profile, Subjects, Classes, Schedule
- **Actions:** Edit profile, View classes

#### **/list/parents**
- **Table columns:** ID, Name, Email, Phone, Children, Actions
- **Features:** Search, filter by child
- **Actions:** View details, Edit, Contact

#### **/list/classes**
- **Table columns:** ID, Name, Grade, Teacher, Students Count, Actions
- **Features:** Search, filter by grade/teacher
- **Actions:** View details, Edit, Delete, Create new

#### **/list/subjects**
- **Table columns:** ID, Subject Name, Teacher, Classes, Actions
- **Features:** Search
- **Actions:** Edit, Delete, Create new

#### **/list/lessons**
- **Table columns:** ID, Title, Class, Teacher, Date, Time, Actions
- **Features:** Filter by class/date
- **Actions:** View details, Edit, Delete, Create new

#### **/list/exams**
- **Table columns:** ID, Title, Class, Date, Teacher, Actions
- **Features:** Filter by class/subject/date
- **Actions:** View details, Grades, Schedule

#### **/list/assignments**
- **Table columns:** ID, Title, Class, assigned Date, Due Date, Actions
- **Features:** Filter by class/subject/date
- **Actions:** View submissions, Grade, Download files

#### **/list/results**
- **Table columns:** Student Name, Class, Subject, Score, Grade, Date, Actions
- **Features:** Filter by student/class/subject
- **Actions:** View details, Print

#### **/list/announcements**
- **Table columns:** ID, Title, Author, Date, Category, Actions
- **Features:** Search, filter by date/category
- **Actions:** View full text, Edit, Delete

#### **/list/events**
- **Table columns:** ID, Event Name, Date, Time, Location, Audience, Actions
- **Features:** Filter by date/type
- **Actions:** View details, Edit, Delete, Calendar add

---

## Data Models

### User Model
```typescript
interface User {
  id: string;
  email: string;
  password: string;           // Hashed
  name: string;
  photo?: string;            // Avatar URL
  phone?: string;
  address?: string;
  role: "admin" | "teacher" | "student" | "parent";
  createdAt: Date;
  updatedAt: Date;
}
```

### Student Model
```typescript
interface Student {
  id: number;
  studentId: string;         // Unique student ID
  name: string;
  email: string;
  photo: string;             // Photo URL
  phone: string;
  grade: number;             // Class year
  class: string;             // Class name (e.g., "5A")
  address: string;
  parentId?: number;         // Foreign key to parent
  enrollmentDate: Date;
  classId?: number;          // Foreign key to class
}
```

### Teacher Model
```typescript
interface Teacher {
  id: number;
  teacherId: string;         // Unique teacher ID
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];        // Array of subject names
  classes: string[];         // Array of class names
  address: string;
  hireDate?: Date;
  qualifications?: string[];
}
```

### Parent Model
```typescript
interface Parent {
  id: number;
  name: string;
  students: string[];        // Array of student names
  email: string;
  phone: string;
  address: string;
  relationship?: string;     // e.g., "Mother", "Father"
}
```

### Class Model
```typescript
interface Class {
  id: number;
  name: string;
  grade: number;
  capacity: number;
  teacherId: number;         // Foreign key
  students: number[];        // Array of student IDs
}
```

### Subject Model
```typescript
interface Subject {
  id: number;
  name: string;
  code: string;              // Subject code
  teacherId: number;         // Foreign key
  creditHours?: number;
}
```

### Lesson Model
```typescript
interface Lesson {
  id: number;
  title: string;
  classId: number;           // Foreign key
  teacherId: number;         // Foreign key
  subjectId: number;         // Foreign key
  date: string;
  startTime: string;
  endTime: string;
  room?: string;
}
```

### Assignment Model
```typescript
interface Assignment {
  id: number;
  title: string;
  description: string;
  classId: number;           // Foreign key
  createdBy: number;         // Teacher ID
  assignedDate: Date;
  dueDate: Date;
  totalPoints?: number;
}
```

### Exam Model
```typescript
interface Exam {
  id: number;
  title: string;
  description?: string;
  classId: number;           // Foreign key
  subjectId: number;         // Foreign key
  date: Date;
  startTime: string;
  endTime: string;
  totalMarks?: number;
  createdBy: number;         // Teacher ID
}
```

### Result Model
```typescript
interface Result {
  id: number;
  studentId: number;         // Foreign key
  examId: number;            // Foreign key
  score: number;
  grade: string;             // A, B, C, D, F
  percentage: number;
  remarks?: string;
}
```

### Attendance Model
```typescript
interface Attendance {
  id: number;
  studentId: number;         // Foreign key
  classId: number;           // Foreign key
  date: Date;
  status: "present" | "absent" | "late" | "excused";
  remarks?: string;
}
```

### Announcement Model
```typescript
interface Announcement {
  id: number;
  title: string;
  content: string;
  createdBy: number;         // User ID
  category?: string;         // e.g., "General", "Academic"
  audience: ("admin" | "teacher" | "student" | "parent")[];
  attachments?: string[];    // File URLs
  createdAt: Date;
  updatedAt: Date;
}
```

### Event Model
```typescript
interface Event {
  id: number;
  title: string;
  description?: string;
  date: string;
  startTime: string;
  endTime: string;
  location?: string;
  audience: ("admin" | "teacher" | "student" | "parent")[];
  category?: string;         // e.g., "Academic", "Sports"
  createdBy: number;
}
```

### Message Model
```typescript
interface Message {
  id: number;
  senderId: number;
  recipientId: number;
  subject: string;
  content: string;
  read: boolean;
  createdAt: Date;
  attachments?: string[];
}
```

---

## User Roles & Permissions

### 1. Admin
**Access Level:** Full system access

**Permissions:**
- ✅ View/Create/Edit/Delete students
- ✅ View/Create/Edit/Delete teachers
- ✅ View/Create/Edit/Delete parents
- ✅ Manage classes
- ✅ Manage subjects
- ✅ Manage lessons
- ✅ View/Create exams
- ✅ View results
- ✅ Manage system settings
- ✅ View financial reports
- ✅ Create announcements
- ✅ Manage users

**Dashboard Shows:**
- Total students/teachers/parents
- System statistics
- Financial overview
- Recent activities

**Menu Access:** All items

---

### 2. Teacher
**Access Level:** Class and student data

**Permissions:**
- ✅ View own students
- ✅ Create assignments for own classes
- ✅ Grade assignments/exams
- ✅ Create exams for own classes
- ✅ Mark attendance
- ✅ View own performance data
- ✅ Create announcements for students
- ✅ Message parents/students
- ❌ View salaries
- ❌ Delete students/teachers
- ❌ System administration

**Dashboard Shows:**
- My classes
- My students
- Pending assignments to grade
- Class attendance summary

**Menu Access:** Home, Teachers, Students, Parents, Classes, Lessons, Exams, Assignments, Results, Attendance, Events, Messages, Announcements

---

### 3. Student
**Access Level:** Own academic data

**Permissions:**
- ✅ View own profile
- ✅ View own grades
- ✅ Submit assignments
- ✅ View assignments
- ✅ View exam schedule
- ✅ View attendance
- ✅ Message teacher
- ✅ View announcements
- ❌ View other students' data
- ❌ Edit profile (limited)
- ❌ Create content

**Dashboard Shows:**
- My classes
- My grades
- Pending assignments
- Coming exams
- My attendance

**Menu Access:** Home, Exams, Assignments, Results, Attendance, Events, Messages, Announcements

---

### 4. Parent
**Access Level:** Child's academic data

**Permissions:**
- ✅ View child's grades
- ✅ View child's attendance
- ✅ View school announcements
- ✅ Message teacher
- ✅ View school events
- ✅ View payment history
- ❌ View other students' data
- ❌ Edit student record
- ❌ Create content

**Dashboard Shows:**
- Child's grades
- Child's attendance
- Upcoming events
- School announcements

**Menu Access:** Home, Exams, Assignments, Results, Attendance, Events, Messages, Announcements

---

## Setup & Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** (for version control)

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/next-dashboard-ui-completed.git
cd next-dashboard-ui-completed
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Create environment variables file**
```bash
# Create .env.local file
touch .env.local
```

4. **Configure environment variables**
```
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=SchooLama
```

5. **Install additional packages (if needed for backend integration)**
```bash
npm install axios dotenv
```

---

## Running the Project

### Development Mode
```bash
npm run dev
```
- Access at: `http://localhost:3000`
- Hot reload enabled
- Source maps for debugging

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

### Common Issues During Setup

**Issue:** Port 3000 already in use
```bash
# Find process using port 3000
netstat -ano | findstr :3000
# Kill process (Windows)
taskkill /PID <PID> /F
```

**Issue:** Cache issues
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## Database Integration Guide

### Step 1: Choose Your Backend Technology

**Option A: Node.js + Express**
```bash
npm init -y
npm install express cors dotenv bcryptjs jsonwebtoken
npm install --save-dev nodemon
```

**Option B: Python + FastAPI**
```bash
pip install fastapi uvicorn sqlalchemy python-dotenv
```

**Option C: Use Backend-as-a-Service**
- Firebase
- Supabase
- MongoDB Realm

---

### Step 2: Set Up Database Connection

**PostgreSQL Example:**
```javascript
// backend/db/connection.js
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;
```

**MongoDB Example:**
```javascript
// backend/db/connection.js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
```

---

### Step 3: Create Database Schema

**PostgreSQL Schema:**
```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  photo VARCHAR(255),
  phone VARCHAR(20),
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Students table
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  student_id VARCHAR(50) UNIQUE NOT NULL,
  user_id INT REFERENCES users(id),
  grade INT,
  class VARCHAR(20),
  parent_id INT REFERENCES users(id),
  enrollment_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Teachers table
CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  teacher_id VARCHAR(50) UNIQUE NOT NULL,
  user_id INT REFERENCES users(id),
  qualifications TEXT[],
  hire_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Classes table
CREATE TABLE classes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  grade INT,
  capacity INT,
  teacher_id INT REFERENCES teachers(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subjects table
CREATE TABLE subjects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  code VARCHAR(20) UNIQUE,
  teacher_id INT REFERENCES teachers(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lessons table
CREATE TABLE lessons (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  class_id INT REFERENCES classes(id),
  teacher_id INT REFERENCES teachers(id),
  subject_id INT REFERENCES subjects(id),
  date DATE,
  start_time TIME,
  end_time TIME,
  room VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Assignments table
CREATE TABLE assignments (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  class_id INT REFERENCES classes(id),
  created_by INT REFERENCES users(id),
  assigned_date DATE,
  due_date DATE,
  total_points INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exams table
CREATE TABLE exams (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  class_id INT REFERENCES classes(id),
  subject_id INT REFERENCES subjects(id),
  date DATE,
  start_time TIME,
  end_time TIME,
  total_marks INT,
  created_by INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Results table
CREATE TABLE results (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  exam_id INT REFERENCES exams(id),
  score INT,
  grade VARCHAR(2),
  percentage DECIMAL(5,2),
  remarks TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Attendance table
CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  class_id INT REFERENCES classes(id),
  date DATE,
  status VARCHAR(20),
  remarks TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Announcements table
CREATE TABLE announcements (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  created_by INT REFERENCES users(id),
  category VARCHAR(50),
  audience TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Events table
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  date DATE,
  start_time TIME,
  end_time TIME,
  location VARCHAR(255),
  audience TEXT[],
  category VARCHAR(50),
  created_by INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Messages table
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  sender_id INT REFERENCES users(id),
  recipient_id INT REFERENCES users(id),
  subject VARCHAR(255),
  content TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## API Routes Implementation

### Overview of Required API Endpoints

```
Authentication:
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - Login user
POST   /api/auth/logout        - Logout user
POST   /api/auth/refresh       - Refresh JWT token

Students:
GET    /api/students           - Get all students (with filters)
GET    /api/students/:id       - Get student details
POST   /api/students           - Create student
PUT    /api/students/:id       - Update student
DELETE /api/students/:id       - Delete student

Teachers:
GET    /api/teachers           - Get all teachers
GET    /api/teachers/:id       - Get teacher details
POST   /api/teachers           - Create teacher
PUT    /api/teachers/:id       - Update teacher
DELETE /api/teachers/:id       - Delete teacher

Classes:
GET    /api/classes            - Get all classes
GET    /api/classes/:id        - Get class details
POST   /api/classes            - Create class
PUT    /api/classes/:id        - Update class
DELETE /api/classes/:id        - Delete class

Subjects:
GET    /api/subjects           - Get all subjects
POST   /api/subjects           - Create subject
PUT    /api/subjects/:id       - Update subject
DELETE /api/subjects/:id       - Delete subject

Lessons:
GET    /api/lessons            - Get all lessons
POST   /api/lessons            - Create lesson
PUT    /api/lessons/:id        - Update lesson
DELETE /api/lessons/:id        - Delete lesson

Assignments:
GET    /api/assignments        - Get all assignments
GET    /api/assignments/:id    - Get assignment details
POST   /api/assignments        - Create assignment
PUT    /api/assignments/:id    - Update assignment
DELETE /api/assignments/:id    - Delete assignment

Exams:
GET    /api/exams              - Get all exams
GET    /api/exams/:id          - Get exam details
POST   /api/exams              - Create exam
PUT    /api/exams/:id          - Update exam
DELETE /api/exams/:id          - Delete exam

Results:
GET    /api/results            - Get results
GET    /api/results/:studentId - Get student results
POST   /api/results            - Submit result

Attendance:
GET    /api/attendance         - Get attendance records
POST   /api/attendance         - Mark attendance

Announcements:
GET    /api/announcements      - Get announcements
POST   /api/announcements      - Create announcement
PUT    /api/announcements/:id  - Update announcement
DELETE /api/announcements/:id  - Delete announcement

Events:
GET    /api/events             - Get events
POST   /api/events             - Create event
PUT    /api/events/:id         - Update event
DELETE /api/events/:id         - Delete event

Messages:
GET    /api/messages           - Get user messages
POST   /api/messages           - Send message
```

### Example API Implementation (Node.js + Express)

```javascript
// backend/routes/students.js
const express = require('express');
const router = express.Router();
const pool = require('../db/connection');
const auth = require('../middleware/auth');

// Get all students
router.get('/', auth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single student
router.get('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create student
router.post('/', auth, async (req, res) => {
  try {
    const { student_id, grade, class: className, parent_id } = req.body;
    const result = await pool.query(
      'INSERT INTO students (student_id, grade, class, parent_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [student_id, grade, className, parent_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update student
router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { grade, class: className } = req.body;
    const result = await pool.query(
      'UPDATE students SET grade = $1, class = $2 WHERE id = $3 RETURNING *',
      [grade, className, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete student
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM students WHERE id = $1', [id]);
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

### Updating Next.js Frontend to Use API

**Replace mock data with API calls:**

```typescript
// app/(dashboard)/list/students/page.tsx
'use client'

import { useEffect, useState } from 'react';
import Table from '@/components/Table';

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/students');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setStudents(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Students</h1>
      <Table
        columns={[
          { header: 'Name', accessor: 'name' },
          { header: 'Email', accessor: 'email' },
          { header: 'Class', accessor: 'class' },
        ]}
        data={students}
        renderRow={(student) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.class}</td>
          </tr>
        )}
      />
    </div>
  );
}
```

---

## Authentication & Authorization

### JWT Token Implementation

```javascript
// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = auth;
```

### Role-Based Access Control

```javascript
// backend/middleware/authorize.js
const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    next();
  };
};

module.exports = authorize;

// Usage
router.delete('/:id', auth, authorize(['admin']), (req, res) => {
  // Only admin can delete
});
```

### Frontend Token Management

```typescript
// lib/auth.ts
export const logout = () => {
  localStorage.removeItem('token');
  document.location.href = '/sign-in';
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};
```

---

## Styling & Customization

### Tailwind CSS Theme

Your custom colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  lamaSky: "#C3EBFA",           // Light blue
  lamaSkyLight: "#EDF9FD",      // Very light blue
  lamaPurple: "#CFCEFF",        // Light purple
  lamaPurpleLight: "#F1F0FF",   // Very light purple
  lamaYellow: "#FAE27C",        // Yellow
  lamaYellowLight: "#FEFCE8",   // Very light yellow
}
```

### Using Custom Colors

```tsx
// In components
<div className="bg-lamaSky text-lamaPurple">
  Content
</div>

// Responsive classes
<div className="md:w-[8%] lg:w-[16%]">
  Responsive width
</div>
```

### Modifying Theme Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  lamaSky: "#YOUR_COLOR_CODE",
  // ... update other colors
}
```

### Common Tailwind Classes Used

```
Layout:
- flex, grid, absolute, relative
- p-4, m-2 (padding/margin)
- w-full, h-screen (sizing)

Colors:
- bg-white, bg-gray-500, bg-lamaSky
- text-white, text-gray-500
- text-xs, text-sm, text-lg (font sizes)

Borders & Shadows:
- rounded-lg, rounded-full
- border, border-[1.5px]
- shadow-md

Responsive:
- hidden md:flex, hidden lg:block
- w-[86%] md:w-[92%] lg:w-[84%]
```

---

## Best Practices

### 1. **State Management**
```typescript
// ✅ Use React hooks for simple state
const [data, setData] = useState([]);

// ✅ Use useEffect for side effects
useEffect(() => {
  fetchData();
}, []);

// ❌ Avoid prop drilling
// Use Context API for deeply nested data
```

### 2. **Error Handling**
```typescript
// ✅ Handle all API calls with try-catch
try {
  const data = await fetch('/api/data');
} catch (error) {
  console.error('Error:', error);
  // Show user-friendly error message
}

// ❌ Don't ignore errors silently
```

### 3. **Performance**
```typescript
// ✅ Use dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <div>Loading...</div>,
});

// ✅ Use React.memo for components
export default React.memo(MyComponent);

// ✅ Use useCallback to prevent unnecessary re-renders
const handleClick = useCallback(() => { ... }, []);
```

### 4. **Validation**
```typescript
// ✅ Validate on both client and server
// Client: use react-hook-form + Zod
// Server: validate before database operations

import { z } from 'zod';

const studentSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  class: z.string(),
});

const validData = studentSchema.parse(formData);
```

### 5. **Security**
```typescript
// ✅ Store sensitive data in environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const SECRET_KEY = process.env.SECRET_KEY; // Not exposed to client

// ✅ Use HTTPS for all API calls
// ✅ Validate user input
// ✅ Implement CSRF protection
// ✅ Sanitize user data before storing
```

### 6. **Code Organization**
```
✅ Components in src/components/
✅ Pages in src/app/
✅ Utilities in src/lib/
✅ Type definitions in separate files
✅ One component per file
✅ Meaningful file names
```

### 7. **Comments & Documentation**
```typescript
// ✅ Comment complex logic
// ✅ Document function parameters
// ✅ Add JSDoc comments

/**
 * Fetches student data for a specific ID
 * @param id - The student's unique identifier
 * @returns Promise<Student> - The student data
 */
async function getStudent(id: string) {
  // Implementation
}

// ❌ Don't over-comment obvious code
```

---

## Troubleshooting

### Common Issues & Solutions

#### Issue 1: Components not rendering
```
Solution:
1. Check if component is properly exported/imported
2. Verify async/await syntax if using server components
3. Check console for error messages
4. Ensure data is available before rendering
```

#### Issue 2: Styles not applying
```
Solution:
1. Clear .next folder: rm -rf .next
2. Verify Tailwind classes are spelled correctly
3. Check if Tailwind config includes the file path
4. Browser cache: Ctrl+Shift+Delete (clear cache)
```

#### Issue 3: API calls failing
```
Solution:
1. Check network tab in DevTools
2. Verify backend server is running
3. Check CORS configuration
4. Verify API endpoint URL
5. Check authentication token
```

#### Issue 4: "Module not found" error
```
Solution:
1. Check file path spelling
2. Verify @ alias in tsconfig.json
3. Restart development server
4. Clear node_modules: rm -rf node_modules && npm install
```

#### Issue 5: Form validation not working
```
Solution:
1. Ensure react-hook-form is installed
2. Check Zod schema definition
3. Verify register() is connected to input
4. Check form submit handler
```

### Performance Issues

**Slow page load:**
```
Solution:
1. Use dynamic imports for heavy components
2. Optimize images (use Next.js Image component)
3. Implement pagination for large lists
4. Use React.memo for memoization
5. Check browser DevTools 'Performance' tab
```

**High memory usage:**
```
Solution:
1. Unsubscribe from useEffect subscriptions
2. Clean up timers and intervals
3. Limit data fetching
4. Use pagination instead of loading all data
```

---

## Future Enhancements

### Short Term (v1.1)
- [ ] Complete API integration with backend
- [ ] JWT authentication implementation
- [ ] Email notifications
- [ ] File upload for assignments
- [ ] Advanced search filters
- [ ] Export data to Excel/PDF

### Medium Term (v2.0)
- [ ] Real-time notifications (WebSockets)
- [ ] Mobile app (React Native)
- [ ] Payment gateway integration
- [ ] Advanced analytics dashboard
- [ ] Bulk import (CSV/Excel)
- [ ] SMS notifications
- [ ] Multi-language support

### Long Term (v3.0)
- [ ] AI-powered recommendations
- [ ] Predictive analytics
- [ ] Virtual classroom integration
- [ ] Video conferencing
- [ ] AI grading assistant
- [ ] Mobile app plugins
- [ ] API marketplace

---

## Environment Variables Reference

```
# .env.local

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=SchooLama

# Backend
BACKEND_URL=http://localhost:5000
BACKEND_API_KEY=your_api_key

# Database (if using direct connection)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=school_management
DB_USER=postgres
DB_PASSWORD=your_password

# Authentication
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# File Upload
MAX_FILE_SIZE=5242880  # 5MB in bytes
ALLOWED_FILE_TYPES=pdf,doc,docx,xls,xlsx

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_email_password

# Third-party Services
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

---

## Resources & Links

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev)

### Libraries Used
- [Recharts](https://recharts.org) - Charts
- [React Big Calendar](https://jquense.github.io/react-big-calendar/) - Calendar
- [Lucide Icons](https://lucide.dev) - Icons
- [Moment.js](https://momentjs.com) - Date handling

### Backend Guides
- [Express.js Tutorial](https://expressjs.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [MongoDB Docs](https://docs.mongodb.com/)

---

## Contributing Guidelines

### Before submitting changes:
1. Test all functionality
2. Follow code style
3. Add comments for complex logic
4. Update documentation
5. Test on different screen sizes

---

## License

This project is part of the Lama Dev Next.js learning series.

---

## Support & Contact

For issues and questions:
1. Check this documentation
2. Review error messages
3. Check browser console
4. Create GitHub issue with:
   - Description of the problem
   - Steps to reproduce
   - Expected vs actual result
   - Error screenshots/logs

---

**Last Updated:** March 5, 2026
**Documentation Version:** 1.0.0

---

