# Counter Web App

A simple .NET 8 C# Blazor web application with two clickable buttons and a counter.

## Project structure

- `CounterWebApp.sln` - Visual Studio solution file
- `CounterWebApp/CounterWebApp.csproj` - ASP.NET Core Blazor project
- `CounterWebApp/Components/Pages/Home.razor` - Counter page and C# click handler

## Run the app

Install the .NET 8 SDK, then run:

```bash
dotnet run --project CounterWebApp/CounterWebApp.csproj
```

Open the displayed localhost URL in a browser and click **Add 1** or **Subtract 1** to change the counter.

## Visual Studio restore troubleshooting

If Visual Studio shows a NuGet restore warning such as "details for project
CounterWebApp could not be loaded" but the project still builds, make sure you
are using Visual Studio 2022 version 17.8 or later with the .NET 8 SDK installed.
You can also restore from the command line:

```bash
dotnet restore CounterWebApp.sln
```

## Configure PostHog

The app initializes PostHog from configuration and records each counter button
click as `counter_button_clicked` with these properties:

- `action` - `increment` or `decrement`
- `count` - the updated counter value
- `delta` - `1` or `-1`

Set your PostHog project API key in `CounterWebApp/appsettings.json` or with an
environment variable:

```bash
PostHog__ApiKey=phc_your_project_api_key
PostHog__Host=https://us.i.posthog.com
```

Use `https://eu.i.posthog.com` for EU-hosted PostHog projects. If `PostHog:ApiKey`
is empty, analytics calls are skipped.
