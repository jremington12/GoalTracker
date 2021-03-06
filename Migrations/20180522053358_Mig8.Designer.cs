﻿// <auto-generated />
using GoalTracker.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace GoalTracker.Migrations
{
    [DbContext(typeof(GoalTrackerDbContext))]
    [Migration("20180522053358_Mig8")]
    partial class Mig8
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("GoalTracker.Models.WeightLiftingExercise", b =>
                {
                    b.Property<int>("WeightLiftingExerciseId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int>("Reps");

                    b.Property<int>("Sets");

                    b.Property<int>("Weight");

                    b.Property<int>("WeightLiftingLogId");

                    b.HasKey("WeightLiftingExerciseId");

                    b.HasIndex("WeightLiftingLogId");

                    b.ToTable("WeightLiftingExercises");
                });

            modelBuilder.Entity("GoalTracker.Models.WeightLiftingLog", b =>
                {
                    b.Property<int>("WeightLiftingLogId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTimeOffset>("Date");

                    b.Property<bool>("NoLog");

                    b.Property<int>("TotalSets");

                    b.Property<string>("UserId");

                    b.HasKey("WeightLiftingLogId");

                    b.ToTable("WeightLiftingLogs");
                });

            modelBuilder.Entity("GoalTracker.Models.WeightLiftingExercise", b =>
                {
                    b.HasOne("GoalTracker.Models.WeightLiftingLog")
                        .WithMany("Exercises")
                        .HasForeignKey("WeightLiftingLogId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
