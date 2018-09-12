using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoalTracker.Database;
using GoalTracker.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoalTracker.Controllers
{
    [Route("[controller]")]
    public class WeightLiftingLogController : LogController<WeightLiftingLog>
    {
        public WeightLiftingLogController(GoalTrackerDbContext _context) : base(_context, new WeightLiftingLogRepository(_context))
        {
        }
    }
}

