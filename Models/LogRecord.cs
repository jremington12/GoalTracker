using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Models
{
    public class LogRecord 
    {
        public int LogRecordId { get; set; }
        public Guid UserId { get; set; }
        public LogType LogType { get; set; }
        public DateTimeOffset StartDate { get; set; }
        public bool Deleted { get; set; }
    }
}
