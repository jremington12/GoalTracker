using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GoalTracker.Migrations
{
    public partial class Mig8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WeightLiftingExercise_WeightLiftingLogs_WeightLiftingLogId",
                table: "WeightLiftingExercise");

            migrationBuilder.DropPrimaryKey(
                name: "PK_WeightLiftingExercise",
                table: "WeightLiftingExercise");

            migrationBuilder.RenameTable(
                name: "WeightLiftingExercise",
                newName: "WeightLiftingExercises");

            migrationBuilder.RenameIndex(
                name: "IX_WeightLiftingExercise_WeightLiftingLogId",
                table: "WeightLiftingExercises",
                newName: "IX_WeightLiftingExercises_WeightLiftingLogId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_WeightLiftingExercises",
                table: "WeightLiftingExercises",
                column: "WeightLiftingExerciseId");

            migrationBuilder.AddForeignKey(
                name: "FK_WeightLiftingExercises_WeightLiftingLogs_WeightLiftingLogId",
                table: "WeightLiftingExercises",
                column: "WeightLiftingLogId",
                principalTable: "WeightLiftingLogs",
                principalColumn: "WeightLiftingLogId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WeightLiftingExercises_WeightLiftingLogs_WeightLiftingLogId",
                table: "WeightLiftingExercises");

            migrationBuilder.DropPrimaryKey(
                name: "PK_WeightLiftingExercises",
                table: "WeightLiftingExercises");

            migrationBuilder.RenameTable(
                name: "WeightLiftingExercises",
                newName: "WeightLiftingExercise");

            migrationBuilder.RenameIndex(
                name: "IX_WeightLiftingExercises_WeightLiftingLogId",
                table: "WeightLiftingExercise",
                newName: "IX_WeightLiftingExercise_WeightLiftingLogId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_WeightLiftingExercise",
                table: "WeightLiftingExercise",
                column: "WeightLiftingExerciseId");

            migrationBuilder.AddForeignKey(
                name: "FK_WeightLiftingExercise_WeightLiftingLogs_WeightLiftingLogId",
                table: "WeightLiftingExercise",
                column: "WeightLiftingLogId",
                principalTable: "WeightLiftingLogs",
                principalColumn: "WeightLiftingLogId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
