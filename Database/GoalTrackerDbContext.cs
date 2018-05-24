using GoalTracker.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Database
{
    public class GoalTrackerDbContext : DbContext
    {
        public GoalTrackerDbContext(DbContextOptions dbContextOptions)
            : base(dbContextOptions) { }

        public DbSet<WeightLiftingLog> WeightLiftingLogs { get; set; }
        public DbSet<WeightLiftingExercise> WeightLiftingExercises { get; set; }
    }
}
