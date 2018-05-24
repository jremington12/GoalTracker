﻿// <auto-generated />
using GoalTracker.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using System;

namespace GoalTracker.Migrations
{
    [DbContext(typeof(GoalTrackerDbContext))]
    [Migration("20180521031053_Initial2")]
    partial class Initial2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("GoalTracker.Models.WeightLiftingLog", b =>
                {
                    b.Property<int>("WeightLiftingLogId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Reps");

                    b.Property<int>("Sets");

                    b.HasKey("WeightLiftingLogId");

                    b.ToTable("WeightLiftingLogs");
                });
#pragma warning restore 612, 618
        }
    }
}
