# Counter Web App

A simple .NET 8 C# Blazor web application with a clickable button and a counter.

## Project structure

- `CounterWebApp.sln` - Visual Studio solution file
- `CounterWebApp/CounterWebApp.csproj` - ASP.NET Core Blazor project
- `CounterWebApp/Components/Pages/Home.razor` - Counter page and C# click handler

## Run the app

Install the .NET 8 SDK, then run:

```bash
dotnet run --project CounterWebApp/CounterWebApp.csproj
```

Open the displayed localhost URL in a browser and click **Click me** to increment the counter.
