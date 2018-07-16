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
        public int LogType { get; set; }
        public bool Deleted { get; set; }
    }
}
