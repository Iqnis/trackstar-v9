### Trackstar

Trackstar project is a comprehensive solution designed to streamline and enhance the efficiency of managing employee-related tasks within an organization. Built on the MERN (MongoDB, Express.js, React, Node.js) stack, this system integrates cutting-edge technologies to provide a robust, scalable, and user-friendly platform for effective employee administration.
The main motive of to build this application to manage the employee, teams, leaders, and targets of a company.


## Roles
- Admin
- Leader
- Employee

## Current Backend Features
### Auth
- Login
- Forgot Password
- Reset Password
- Logout
- Refresh Access Token

### Admin
- Create User
- Update User
- Employees
- Free Employees
- Check Attendance
- Check Attendance of Specific Employee
- Check Attendance of particular time period
- View Leave Applications
- Approve and Disapprove Leave Applications
- Employee
- User - No Filter (Admin,Leader,Employee)
- Admins
- Admin
- Leaders
- Leader
- Create Team
- Update Team
- Teams
- Team
- Team Members
- Add Team Member
- Remove Team Member
- Add Team Leader
- Remove Team Member
- Counts

### Leader
- Update Self Account
- Mark Attendance
- View Self Attendance
- View Self Attendance of Specific time period
- Apply for Leave 
- Check status for Leave

### Employee
- Update Self Account
- Mark Attendance
- View Self Attendance
- View Self Attendance of Specific time period
- Apply for Leave 
- Check status for Leave

### Admin object
Add to MongoDB Compass!

```
{
"_id":{"$oid":"64ca3376893ac9f719ea5c4d"},
"name":"Admin",
"email":"admin@admin.com",
"username":"admin",
"mobile":{"$numberDouble":"8840532578.0"},
"password":"$2b$10$PENEG9O8u5.LZfZznEMQp.YomtW.Z7tFgW7yLPXq0XmU3.UcsFlhi",
"type":"admin","status":"active",
"image":"profile-1690973045739-766059788passport_photo.jpg",
"address":"Lucknow",
"createdAt":{"$date":{"$numberLong":"1690973046137"}},
"updatedAt":{"$date":{"$numberLong":"1692765336607"}},
"__v":{"$numberInt":"0"}
}
```

### Admin Login

```
admin@admin.com
12345678
```

At clint application
```
npm run start
```

At server application
```
npm run dev
```