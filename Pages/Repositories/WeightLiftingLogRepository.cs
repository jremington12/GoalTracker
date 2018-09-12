using GoalTracker.Database;
using GoalTracker.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker
{
    public class WeightLiftingLogRepository : LogRepositoryBase<WeightLiftingLog>, ILogRepository<WeightLiftingLog>
    {
        GoalTrackerDbContext context;
        public WeightLiftingLogRepository(GoalTrackerDbContext context) : base(context)
        {
            this.context = context;
        }

        public override void Update(WeightLiftingLog log)
        {
            if (log == null)
            {
                throw new ArgumentNullException("log");
            }

            var originalLog = context.WeightLiftingLogs.Where(x => x.Id == log.Id).SingleOrDefault();
            var originalExercises = context.WeightLiftingExercises.Where(x => x.WeightLiftingLogId == log.Id);

            if (originalLog == null)
            {
                throw new ArgumentNullException("log");
            }

            var exercisesToDelete = originalExercises.Where(x => !log.Exercises.Any(y => y.WeightLiftingExerciseId == x.WeightLiftingExerciseId)).ToList();

            foreach (var exercise in exercisesToDelete)
            {
                this.context.Entry(exercise).State = EntityState.Deleted;
            }

            foreach (var exercise in log.Exercises)
            {
                if (exercise.WeightLiftingExerciseId == 0)
                {
                    exercise.WeightLiftingLogId = log.Id;
                    context.Entry(exercise).State = EntityState.Added;
                } else
                {
                    context.Entry(exercise).State = EntityState.Modified;
                }
            }

            this.context.SaveChanges();
        }
    }
}
