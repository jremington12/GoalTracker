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
        //public GoalTrackerDbContext _context { get; set; }

        public WeightLiftingLogController(GoalTrackerDbContext _context) : base(_context)
        {
        }

        //[HttpPost("[action]")]
        //public ActionResult Post([FromBody] WeightLiftingLog weightLiftingLog)
        //{
        //    weightLiftingLog.CreatedDate = DateTimeOffset.Now;
        //    this._context.Add(weightLiftingLog);
        //    this._context.SaveChanges();

        //    return Ok(weightLiftingLog);
        //}


        //[HttpGet("[action]/{id?}")]
        //public ActionResult WeightLifting([FromQuery] Guid UserId)
        //{
        //    var log = this._context.WeightLiftingLogs.Include("Exercises").Where(x => x.UserId == UserId).FirstOrDefault();

        //    return Ok(log);
        //}

        //[HttpPost("[action]")]
        //public ActionResult LogRecord([FromBody] LogRecord logRecord)
        //{
        //    this._context.Add(logRecord);
        //    this._context.SaveChanges();

        //    return Ok("logRecord");
        //}

        //[HttpGet("[action]")]
        //public ActionResult LogRecord([FromQuery] Guid userId)
        //{
        //    var logs = this._context.LogRecords.Where(x => x.UserId == userId);
        //    return Ok(logs);
        //}

        //[HttpPost("[action]")]
        //public ActionResult GenerateMissingLogs([FromQuery] Guid userId)
        //{
        //    var logRecords = this._context.LogRecords.Where(x => x.UserId == userId);

        //    foreach (var record in logRecords)
        //    {
        //        //GenerateMissingLog(record);
        //    }

        //    return Ok();
        //}

        //public void GenerateMissingLog(LogRecord logRecord, Guid userId)
        //{
        //    switch (logRecord.LogType)
        //    {
        //        case LogType.WeightLiftingLog:
        //            var startDate = logRecord.StartDate;
        //            var weightLiftingLogs = this._context.WeightLiftingLogs.Where(x => x.UserId == userId && x.LogType == LogType.WeightLiftingLog);
        //            var logsToAdd = new List<WeightLiftingLog>();
        //            while (startDate.Day < DateTimeOffset.Now.AddDays(1).Day)
        //            {
        //                if (!weightLiftingLogs.Any(x => x.CreatedDate.Day == startDate.Day))
        //                {
        //                    logsToAdd.Add(new WeightLiftingLog() { NoLog = true, UserId = userId, CreatedDate = startDate });
        //                }

        //                startDate = startDate.AddDays(1);
        //            }
        //            this._context.WeightLiftingLogs.AddRange(logsToAdd);
        //            return;
        //        case LogType.CardioLog:
        //            return;
        //        default:
        //            return;
        //    }
        //}
    }
}

