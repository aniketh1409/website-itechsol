"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      className="btn-primary"
      onClick={() => window.print()}
      aria-label="Print capability statement as PDF"
    >
      Print / Save as PDF
    </button>
  );
}
