using GoalTracker.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<GoalTrackerDbContext>
{
    public GoalTrackerDbContext CreateDbContext(string[] args)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json")
            .Build();

        var builder = new DbContextOptionsBuilder<GoalTrackerDbContext>();

        var connectionString = configuration.GetConnectionString("GoalTracker");

        builder.UseSqlServer(connectionString);

        return new GoalTrackerDbContext(builder.Options);
    }
}