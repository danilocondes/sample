# Counter Web App

A simple .NET 8 C# Blazor web application with a clickable button and a counter.

## Project structure

- `CounterWebApp.sln` - Visual Studio solution file
- `CounterWebApp/CounterWebApp.csproj` - ASP.NET Core Blazor project
- `CounterWebApp/Components/Pages/Home.razor` - Counter page and C# click handler
- `global.json` - Pins the repository to the .NET 8 SDK family

## Run the app

Install the .NET 8 SDK, then run:

```bash
dotnet run --project CounterWebApp/CounterWebApp.csproj
```

Open the displayed localhost URL in a browser and click **Click me** to increment the counter.

## Visual Studio restore troubleshooting

If Visual Studio shows a NuGet restore warning such as "details for project
CounterWebApp could not be loaded" but the project still builds, make sure you
are using Visual Studio 2022 version 17.8 or later with the .NET 8 SDK installed.
The included `global.json` asks tooling to use .NET SDK 8.0.100 or a newer .NET 8
feature band.
You can also restore from the command line:

```bash
dotnet restore CounterWebApp.sln
```

## Configure PostHog

The app initializes PostHog from configuration and records each counter click as
`counter_button_clicked`.

Set your PostHog project API key in `CounterWebApp/appsettings.json` or with an
environment variable:

```bash
PostHog__ApiKey=phc_your_project_api_key
PostHog__Host=https://us.i.posthog.com
```

Use `https://eu.i.posthog.com` for EU-hosted PostHog projects. If `PostHog:ApiKey`
is empty, analytics calls are skipped.
