How to get this project online

We currently have 
- react frontend
- ASP.NET Core backend
- SQL Server database in SSMS (local)

My local SQL Server cannot be used by people on the internet, so the database must move to a hosted SQL server.

Best option is **Azure SQL Database**. It behaves like a normal SQL Server database, and I can connect to it directly from SSMS, which will make migrating data straightforward. 

## Step #1: Create a cloud SQL database



Optional (but recommended next step)
When you’re ready, upgrade this to:
- Azure Managed Identity (no passwords at all)
- Or Azure Key Vault