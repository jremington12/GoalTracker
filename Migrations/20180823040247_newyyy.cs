using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GoalTracker.Migrations
{
    public partial class newyyy : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "LogRecords");

            migrationBuilder.DropColumn(
                name: "LogType",
                table: "LogRecords");

            migrationBuilder.DropColumn(
                name: "StartDate",
                table: "LogRecords");

            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "WeightLiftingLogs",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "WeightLiftingLogs");

            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "LogRecords",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "LogType",
                table: "LogRecords",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "StartDate",
                table: "LogRecords",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));
        }
    }
}
