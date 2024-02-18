"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "שם עובד",
  },
  {
    accessorKey: "status",
    header: "סטטוס",
  },
  {
    accessorKey: "email",
    header: "אימייל",
  },
  {
    accessorKey: "amount",
    header: "כמות",
  },
  {
    accessorKey: "date",
    header: "תאריך",
  },
];
