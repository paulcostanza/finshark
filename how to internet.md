How to get this project online

We currently have 
- react frontend
- ASP.NET Core backend
- SQL Server database in SSMS (local)

My local SQL Server cannot be used by people on the internet, so the database must move to a hosted SQL server.

Best option is **Azure SQL Database**. It behaves like a normal SQL Server database, and I can connect to it directly from SSMS, which will make migrating data straightforward. 

---

Optional (but recommended next step)
When you’re ready, upgrade this to:
- Azure Managed Identity (no passwords at all)
- Or Azure Key Vault

---

Clean up tokens

Right now we use localStorage to set and get tokens. This is not good because it is a security risk and adds repetitious code. 

Instead of manually adding headers everywhere, we can automatically include the token in all requests with some code. 

We can allso use HTTP-only cookies to prevent XSS attacks. 
- add interceptor
- add cookies

