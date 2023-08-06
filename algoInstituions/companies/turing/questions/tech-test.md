1. We are designing a url shortner. Rearrange the following tasks in the order vou would perform
them
 Design the database schema (second)
 Design the backend APIs (thirdd)
 Gather requirements     (first)
 Ans: 3-1-2


2. Your Product Manager gives vou some requirements for this system. Which of them are functional
requirements (as opposed to non-functional requirements)
1. Given a URL.
our service should generate a shorter and unique alias of it.
2. URL redirection should happen in real-time with minimal latencv.
3. When users access a short link our service should redirect them to the original link
4. The system should be highly available
5. The links will expire after a standard default timespan. Users should be able to specify the expiration time.

Ans: 1, 3, 5 
The functional requirements are:
1. Given a URL.
our service should generate a shorter and unique alias of it.
3. When users access a short link our service should redirect them to the original link
5. The links will expire after a standard default timespan. Users should be able to specify the expiration time.

The non-functional requirements are:
2. Real-time URL redirection with minimal latency.
4. High availability of the system

3. Now we need to do some back-of-envelope calculations. Please fill in the table with your estimations (Round down to the closest integer). Assume
1. 500M (millions) new URL Shortenings are created per month
2. It takes 500 bytes to store each URL shortening record in the database
3. There are 30 days in a month
4. Read/write ratio IS 100:1 (For each writes, the system gets on average 100 reads.)
5. Records on average have an expiration or 5 years
What is the expected read QPS (queries per
second)? Please write down your answer as it might
be useful in other questions.
Ans: 19,290

4. You are now designing the backend's RESTful API for this URL shortening system What collection/resource does this RESTful API manage?
A. Registered Users
B. The original URLs
C. The CPU power of the machines hosting this API
D. The shortened URLs
Ans: D: The shortened URLs


5.


6. When the CreateShortURI API fails a request because the browser client that sent the request is
outdated. which HTTP status is most appropriate to return from the server?
Ans: 4**
426 upgrade required


7. You are now designing the database. Given the requirements and load estimations
which of the following is best:
MySQL
PostgresQ
NoSQL
Redis

Ans: D: Redis

8. If we use MD5 to hash the original URL and then encode the hash output with base64url to generate a shortened ID (pseudocode: base64URL(MD5(original url)) --> shortened ID ). how many characters would we have in the shortened ID?
Ans: B: 22

9. Our system is live! You want to set up some alert that would fire when the database is overloaded by reads. But vou don't yet know how much load can the database handle. So which two metrics
below are best for this situation?
A. Backend API response latency measured from our API
gateway
B. Frontend response latency measured
from proxy server
C. Database read latency measured from the backend
D. Database machine disk usage percentage
Ans: C, D
C. Database read latency measured from the backend
This metric directly measures the time taken by the database to respond to read requests. If the database is overloaded with read operations, the read latency will increase, indicating potential performance issues.
D. Database machine disk usage percentage
Disk usage percentage indicates how much of the database machine's storage is being utilized. An overloaded database may result in increased disk usage as it stores more data, leading to a higher disk usage percentage. Monitoring this metric can help identify when 

10. We are getting too many read requests and our database is overloaded. What approach could alleviate this problem for either short term or the long term?
(select all that apply)
ans: All


11. we decide to add a cache in front of the database to handle the large number or reads. what replacement policy is the best suited for this case
ANS: A) LRU
Least Recently Used (LRU): The LRU policy removes the data that has not been accessed for the longest time. This policy is based on the assumption that data that hasn't been used recently is unlikely to be used in the near future.