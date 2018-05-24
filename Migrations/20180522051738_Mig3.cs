using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GoalTracker.Migrations
{
    public partial class Mig3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Reps",
                table: "WeightLiftingLogs");

            migrationBuilder.DropColumn(
                name: "Sets",
                table: "WeightLiftingLogs");

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "Date",
                table: "WeightLiftingLogs",
                type: "datetimeoffset",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));

            migrationBuilder.AddColumn<bool>(
                name: "NoLog",
                table: "WeightLiftingLogs",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "TotalSets",
                table: "WeightLiftingLogs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "WeightLiftingLogs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "WeightLiftingExercise",
                columns: table => new
                {
                    WeightLiftingExerciseId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Reps = table.Column<int>(type: "int", nullable: false),
                    Sets = table.Column<int>(type: "int", nullable: false),
                    Weight = table.Column<int>(type: "int", nullable: false),
                    WeightLiftingLogId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WeightLiftingExercise", x => x.WeightLiftingExerciseId);
                    table.ForeignKey(
                        name: "FK_WeightLiftingExercise_WeightLiftingLogs_WeightLiftingLogId",
                        column: x => x.WeightLiftingLogId,
                        principalTable: "WeightLiftingLogs",
                        principalColumn: "WeightLiftingLogId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_WeightLiftingExercise_WeightLiftingLogId",
                table: "WeightLiftingExercise",
                column: "WeightLiftingLogId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WeightLiftingExercise");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "WeightLiftingLogs");

            migrationBuilder.DropColumn(
                name: "NoLog",
                table: "WeightLiftingLogs");

            migrationBuilder.DropColumn(
                name: "TotalSets",
                table: "WeightLiftingLogs");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "WeightLiftingLogs");

            migrationBuilder.AddColumn<int>(
                name: "Reps",
                table: "WeightLiftingLogs",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Sets",
                table: "WeightLiftingLogs",
                nullable: false,
                defaultValue: 0);
        }
    }
}
