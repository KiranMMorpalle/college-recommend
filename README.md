Project Title:
College Recommendation & Comparison System
Project Purpose:
The purpose of this system is to help students identify the best-fit colleges based on their academic rank, budget, preferred branch, location, and college performance metrics.
 Instead of browsing hundreds of college websites, students get a filtered, ranked, personalized list of colleges automatically.
This system also provides colleges with admin access to manage their information such as fees, cutoffs, facilities, placement stats, and reviews.

🎯 Core Objectives
Provide accurate & personalized college recommendations.


Allow students to filter and compare colleges.


Give admins the ability to manage college data using a secure portal.


Present data clearly through cards, tables, and graph-based comparisons.


Ensure a scalable architecture suitable for real production.




🌐 Target Users
1. Students
Explore colleges


Apply filters


Compare fees & placements


Get recommendations


Save colleges


2. Admins
Manage college database


Add/edit/delete colleges


Update placement and fee information



🧩 Scope of the System
The system allows:
Student Login (Optional)


Admin Login (Mandatory)


Complete college CRUD operations


Branch, Fee, Category, and Location-based filtering


Cutoff matching


Recommendation algorithm


College comparison feature


Graphs for fees & placement


Reviews/Ratings (optional future module)



🧠 Tech Stack Overview
Frontend: React.js, Tailwind CSS, Axios


Backend: Node.js, Express.js


Database: MongoDB Atlas


Auth: JWT, bcrypt


Deployment: Vercel / Netlify / Render / AWS



System Architecture



🧱 Component-Level Architecture Explanation

1. Client Layer (React Frontend)
Components
CollegeList.jsx


Filters.jsx


Compare.jsx


RecommendationForm.jsx


AdminDashboard.jsx


AddCollege.jsx


EditCollege.jsx


State Management
Context API or Redux


Stores: authContext, collegeContext, compareContext


API Layer
Axios instance → auto sends JWT token


Interceptor handles 401 → logout automatically




2. API Gateway Layer (Express Router)
Routes:
/api/auth


/api/colleges


/api/admin


/api/compare


Middlewares:
authMiddleware → validates JWT


adminMiddleware → allows only admin



3. Application Service Layer
This is the core logic layer.
✔ Auth Service
Hashing passwords


Token generation


Token validation


✔ College Service
Insert new colleges


Update fees, cutoffs, branches


Delete colleges


Search by name, location


Advanced filtering


✔ Recommendation Service
Creates a score for every college based on:
Rank match


Fees match


Branch match


Location proximity


College rating


Placement performance


Sorts & returns best 10.
✔ Compare Service
Fetch multiple colleges


Generate fees & salary graph data


Normalize values for UI chart




4. Data Access Layer (Repositories)
Collections:
colleges


users


reviews


Each repository handles:
Query optimization


Indexing


Aggregation pipelines


Validation using Mongoose schema



5. Database Layer (MongoDB)
Indexes important fields:
name: 1
location: 1
branches: 1
cutoff_rank: 1
fees.general: 1
rating: 1

This increases filter speed by 5–10x.


🧬 System Workflow (End-to-End)
1. Student Recommendation Flow
User Input → React form
      ↓
Axios → POST /api/recommend
      ↓
Backend Recommendation Engine
      ↓
Filter + Score + Rank
      ↓
Return Top 10 Colleges
      ↓
Frontend renders cards + comparison graphs


2. Admin College Management Flow
Admin Login → get JWT
      ↓
Add/Edit/Delete colleges via API
      ↓
Backend validates & updates DB
      ↓
Frontend updates list instantly


3. College Comparison Flow
User selects colleges (max 4)
      ↓
Frontend sends IDs to backend
      ↓
Backend returns fees + placement stats
      ↓
React charts display column graphs



🏢 Final Architecture Diagram (Production Ready)



 


 
 

 

 
 
 






