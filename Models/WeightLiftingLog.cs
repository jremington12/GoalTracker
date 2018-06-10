using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Models
{
    public class WeightLiftingLog
    {
        public int WeightLiftingLogId { get; set; }
        public List<WeightLiftingExercise> Exercises { get; set; }
        public DateTimeOffset Date { get; set; }
        public string UserId { get; set; }
        public int TotalSets { get; set; }
        public bool NoLog { get; set; }
        public int LogType { get; set; }
    }
}