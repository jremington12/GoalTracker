using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Models
{
    [Serializable]
    public class LogBase
    {
        [Key]
        public int Id { get; set; }
        public LogType LogType { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
        public bool NoLog { get; set; }
        public bool Deleted { get; set; }
        public Guid UserId { get; set; }
    }
}
