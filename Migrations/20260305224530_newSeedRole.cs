using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace finshark.Migrations
{
    /// <inheritdoc />
    public partial class newSeedRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "47e3960f-4b9e-4e4d-bd3e-016e92934f95");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6ccdccc5-e2dd-41cb-8133-24a2c6c54393");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6e65b59f-a9e1-4f28-be57-bd88bfc3ebb6", null, "User", "USER" },
                    { "befb56fb-95a4-4b88-805b-8e494dd98ffd", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6e65b59f-a9e1-4f28-be57-bd88bfc3ebb6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "befb56fb-95a4-4b88-805b-8e494dd98ffd");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "47e3960f-4b9e-4e4d-bd3e-016e92934f95", null, "User", "USER" },
                    { "6ccdccc5-e2dd-41cb-8133-24a2c6c54393", null, "Admin", "ADMIN" }
                });
        }
    }
}
