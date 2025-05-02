import { describe, it, expect } from "vitest";
import { formatDate } from "../src";

describe("formatDate", () => {
  const date = new Date("2025-05-02T14:05:09");

  it("should format YYYY-MM-DD", () => {
    expect(formatDate(date, "YYYY-MM-DD")).toBe("2025-05-02");
  });

  it("should format DD/MM/YYYY HH:mm", () => {
    expect(formatDate(date, "DD/MM/YYYY HH:mm")).toBe("02/05/2025 14:05");
  });

  it("should format full timestamp", () => {
    expect(formatDate(date, "YYYY-MM-DD HH:mm:ss")).toBe("2025-05-02 14:05:09");
  });
  it("should format with French month name", () => {
    const date = new Date("2025-05-02T14:05:09");
    const result = formatDate(date, "DD MMMM YYYY", "fr");
    expect(result).toBe("02 mai 2025");
  });
});
