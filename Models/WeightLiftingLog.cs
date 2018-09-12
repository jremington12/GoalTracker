using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker.Models
{
    [Serializable]
    public class WeightLiftingLog : LogBase
    {
        //public int WeightLiftingLogId { get; set; } 

        [ForeignKey("WeightLiftingLogId")]
        public virtual List<WeightLiftingExercise> Exercises { get; set; }
        public int TotalSets { get; set; }
    }
}