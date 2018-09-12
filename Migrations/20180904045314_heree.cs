using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace GoalTracker.Migrations
{
    public partial class heree : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WeightLiftingExercises_WeightLiftingLogs_WeightLiftingLogId",
                table: "WeightLiftingExercises");

            migrationBuilder.DropPrimaryKey(
                name: "PK_WeightLiftingLogs",
                table: "WeightLiftingLogs");

            migrationBuilder.DropColumn(
                name: "WeightLiftingLogId",
                table: "WeightLiftingLogs");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "WeightLiftingLogs",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_WeightLiftingLogs",
                table: "WeightLiftingLogs",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_WeightLiftingExercises_WeightLiftingLogs_WeightLiftingLogId",
                table: "WeightLiftingExercises",
                column: "WeightLiftingLogId",
                principalTable: "WeightLiftingLogs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WeightLiftingExercises_WeightLiftingLogs_WeightLiftingLogId",
                table: "WeightLiftingExercises");

            migrationBuilder.DropPrimaryKey(
                name: "PK_WeightLiftingLogs",
                table: "WeightLiftingLogs");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "WeightLiftingLogs");

            migrationBuilder.AddColumn<int>(
                name: "WeightLiftingLogId",
                table: "WeightLiftingLogs",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_WeightLiftingLogs",
                table: "WeightLiftingLogs",
                column: "WeightLiftingLogId");

            migrationBuilder.AddForeignKey(
                name: "FK_WeightLiftingExercises_WeightLiftingLogs_WeightLiftingLogId",
                table: "WeightLiftingExercises",
                column: "WeightLiftingLogId",
                principalTable: "WeightLiftingLogs",
                principalColumn: "WeightLiftingLogId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
