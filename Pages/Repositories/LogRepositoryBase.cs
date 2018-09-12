using GoalTracker.Database;
using GoalTracker.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoalTracker
{
    public class LogRepositoryBase<T> where T : LogBase  
    {
        private readonly GoalTrackerDbContext context;
        private DbSet<T> logs;

        private DbSet<T> Logs
        {
            get
            {
                if (logs == null)
                {
                    logs = context.Set<T>();
                }
                return logs;
            }
        }

        public LogRepositoryBase(GoalTrackerDbContext context)
        {
            this.context = context;
        }

        public T QueryById(int id)
        {
            return this.Logs.Find(id);
        }

        public T QueryByUserId(Guid id)
        {
            return this.Logs.Where(x => x.UserId == id).FirstOrDefault();
        }

        public T QueryTodayByUserId(Guid id)
        {
            var result = this.Logs.Where(x => x.UserId == id && x.CreatedDate.Day == DateTimeOffset.Now.Day).IncludeAll<T>();
            return result.FirstOrDefault();
        }

        public void Add(T log)
        {
            if (log == null)
            {
                throw new ArgumentNullException("entity");
            }

            this.Logs.Add(log);
            this.context.SaveChanges();
        }

        public virtual void Update(T log)
        {
            if (log == null)
            {
                throw new ArgumentNullException("log");
            }

            var originalLog = this.Logs.Where(x => x.Id == log.Id).SingleOrDefault();           

            if (originalLog != null)
            {                
                this.Logs.Update(originalLog);
                this.context.SaveChanges();
            }
        }

        public void Remove(T log)
        {
            if (log == null)
            {
                throw new ArgumentNullException("log");
            }

            this.Logs.Remove(log);
            this.context.SaveChanges();
        }

        public virtual IQueryable Query()
        {
            return this.Logs;
        }
    }
}
