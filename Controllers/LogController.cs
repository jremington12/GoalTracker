using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoalTracker.Database;
using GoalTracker.Models;
using Microsoft.AspNetCore.Mvc;

namespace GoalTracker.Controllers
{
    [Route("api/[controller]")]
    public class LogController : Controller
    {
        public GoalTrackerDbContext _context { get; set; }

        public LogController(GoalTrackerDbContext context)
        {
            _context = context;
        }

        [HttpPost("[action]")]
        public ActionResult WeightLifting([FromBody] WeightLiftingLog test)
        {
            this._context.Add(test);
            this._context.SaveChanges();

            return Ok("Great");
        }
    }
    
    public class WeightLiftingModel
    {
        public string x { get; set; }
        public string y { get; set; }

        public WeightLiftingModel(string x, string y)
        {
            this.x = x;
            this.y = y;
        }
    }

    public class Dog
    {
        public string Bark { get; set; }
    }
}

