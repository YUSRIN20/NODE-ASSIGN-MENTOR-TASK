# Node-Assign Mentor-Task

**Description:**

This Task is a basic implementation of a mentoring system using Express.js and MongoDB. It provides endpoints for creating, retrieving, and assigning mentors and students.

**Features:**

1. **Mentor Management:**
   - **Create Mentor:** POST request to create a new mentor.
   - **Get All Mentors:** GET request to retrieve all mentors.
   - **Assign Students to Mentor:** PUT request to assign students to a mentor.
   - **Get Students of a Mentor:** GET request to retrieve all students assigned to a particular mentor.

2. **Student Management:**
   - **Create Student:** POST request to create a new student.
   - **Get All Students:** GET request to retrieve all students.
   - **Assign Mentor to Student:** PUT request to assign a mentor to a student.
   - **Get Mentor of a Student:** GET request to retrieve the mentor of a particular student.

**Project Structure:**

- **Database:**
  - **Config.js:** Establishes connection to MongoDB using Mongoose.
- **Routers:**
  - **Mentor.Router.js:** Defines routes related to mentor operations.
  - **Student.Router.js:** Defines routes related to student operations.
- **Controllers:**
  - **Mentor.Controller.js:** Handles mentor-related logic and operations.
  - **Student.Controller.js:** Handles student-related logic and operations.
- **Models:**
  - **MentorSchema.js:** Defines the Mentor schema and model.
  - **StudentSchema.js:** Defines the Student schema and model.
- **index.js:** Main entry point of the application. Sets up Express server, middleware, and routes.

**Setup:**

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables by creating a `.env` file and adding `PORT` and `MONGODBCONNECTIONSTRING` variables.
4. Run the server using `npm start`.

**Usage:**

- Use any API testing tool like Postman to interact with the endpoints.
- Create mentors and students.
- Assign students to mentors and vice versa.
- Retrieve lists of mentors and students.

