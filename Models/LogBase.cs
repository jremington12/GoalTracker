using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Models
{
    public class LogBase
    {
        public LogType LogType { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
        public bool NoLog { get; set; }
        public bool Deleted { get; set; }
    }
}
