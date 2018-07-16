﻿using GoalTracker.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Database
{
    public class GoalTrackerDbContext : IdentityDbContext<ApplicationUser>
    {
        public GoalTrackerDbContext(DbContextOptions dbContextOptions)
            : base(dbContextOptions) { }

        public DbSet<WeightLiftingLog> WeightLiftingLogs { get; set; }
        public DbSet<WeightLiftingExercise> WeightLiftingExercises { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<LogRecord> LogRecords { get; set; }
    }
}
