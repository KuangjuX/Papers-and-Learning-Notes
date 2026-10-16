# 并发控制

## 事务
A transaction is the execution of a sequence of 
one or more operations (e.g., SQL queries) on a 
database to perform some higher-level function.  
  
事务是在 DB 上执行一系列一个或多个操作，用来执行一些更加高级的功能。  
  
## ACID
- Atomicity: All actions in the txn happen, or none 
happen.
- Consistency: If each txn is consistent and the DB 
starts consistent, then it ends up consistent.
- Isolation: Execution of one txn is isolated from 
that of other txns.   
- Durability: If a txn commits, its effects persist.

