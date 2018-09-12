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
    public class LogRecordController : Controller
    {
        public GoalTrackerDbContext _context { get; set; }

        public LogRecordController(GoalTrackerDbContext context)
        {
            this._context = context;
        }

        [HttpPost("[action]")]
        public ActionResult Post([FromBody] LogRecord logRecord)
        {
            logRecord.StartDate = DateTimeOffset.Now;
            this._context.Add(logRecord);
            this._context.SaveChanges();

            return Ok(logRecord);
        }


        [HttpGet("[action]/{id?}")]
        public ActionResult Get([FromQuery] Guid UserId)
        {
            var logRecords = this._context.LogRecords.Where(x => x.UserId == UserId).ToList();

            return Ok(logRecords);
        }
    }
}

