# FinShark
A financial platform where people can get real-time stock data, manage their own stock portfolios, post and read comments on stocks. 

# Tech stacks
  * Frontend: React, TypeScript, TailwindCSS
  * Backend: C# ASP.NET, Entity Framework Core
  * Database: SQLServer
  * User Authentication: JWT

# Run the app

If you want to run the app on your local server, please follow the instructions:

1) Clone the repository into your computer.
   
2) Create a SQLServer database on Azure data studio or SQL Server Management Studio, get the connection string.
   
3) Add a "appsettings.json" file under the "api" directory, set all the secret keys including the database connection string, JWT signing key, ASP.NET default IP address (eg. http://localhost:5710), FMP API key (you can get a key at https://site.financialmodelingprep.com/). The following is an example of the file.
```json
{
  "ConnectionStrings": {
    "DefaultConnection": <database connection string>
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "FMPKey": <your FMP API key>,
  "JWT": {
    "Issuer": <ASP.NET default IP address>,
    "Audience": <ASP.NET default IP address>,
    "SigningKey": <JWT SigningKey>
  }
}
```

4) Enter the "api" directory, run the backend app on C# ASP.NET default port:
```unit
cd api
dotnet watch run
```

5) Open another terminal, enter the "frontend" directory, run the frontend app on React default port:
```unit
cd frontend
npm start
```

6) If you do the above right, you can visit the app at http://localhost:3000. You have to log in to visit Search & Portfolio Page and Stock Detail Page.

* Homepage
  
![image](https://github.com/YaruZeng/FinShark/assets/91594306/7e4b62ac-cac0-4da5-a3c3-9462b5255a88)

* Log-in Page
  
![image](https://github.com/YaruZeng/FinShark/assets/91594306/9a828d9c-0a2a-4820-8e57-6ccb22a7b98b)

* Sign-up Page
  
![image](https://github.com/YaruZeng/FinShark/assets/91594306/6a753ad0-0f23-483b-9327-fd497c928af8)

* Search & Portfolio Page
  
![image](https://github.com/YaruZeng/FinShark/assets/91594306/937062fc-e736-49c0-8ed1-cbe619f91af5)

* Stock Detail Page, including children routes to company profile, income statement, balance sheet, and cashflow statement
  
![image](https://github.com/YaruZeng/FinShark/assets/91594306/a92e8bcd-b64a-4811-a5fe-e391e22528a7)
![image](https://github.com/YaruZeng/FinShark/assets/91594306/5f4b7b46-1791-49a7-a130-c278727519df)

