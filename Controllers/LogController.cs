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
    public class LogController<T> : Controller where T : LogBase
    {
        public GoalTrackerDbContext _context { get; set; }

        public ILogRepository<T> _repository { get; set; }

        public LogController(GoalTrackerDbContext context, ILogRepository<T> repository)
        {
            _context = context;
            _repository = repository;
        }

        [HttpGet("[action]")]
        public ActionResult Get([FromQuery] Guid UserId)
        {
            var weightLiftingLog = _repository.QueryByUserId(UserId);
            return Ok(weightLiftingLog);
        }

        [HttpGet("[action]")]
        public ActionResult GetToday([FromQuery] Guid UserId)
        {
            var log = _repository.QueryTodayByUserId(UserId);
            return Ok(log);
        }

        [HttpPost("[action]")]
        public ActionResult Post([FromBody] T log)
        {
            log.CreatedDate = DateTimeOffset.Now;
            this._repository.Add(log);

            return Ok(log);
        }

        [HttpPut("[action]")]
        public ActionResult Put([FromBody] T log)
        {
            this._repository.Update(log);
            return Ok(log);
        }

        [HttpPut("[action]")]
        public ActionResult Delete([FromBody] T log)
        {
            this._repository.Remove(log);
            return Ok(log);
        }
        

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

