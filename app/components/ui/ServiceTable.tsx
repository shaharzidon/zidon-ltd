import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";

import { Payment, columns } from "../../payments/columns";
import { DataTable } from "../../payments/data-table";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "~/components/ui/sheet";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "בתהליך",
      email: "m@example.com",
      date: "2021-10-01",
      name: "משה",
    },
    {
      id: "728ed52s",
      amount: 3,
      status: "בוצע",
      email: "s@example.com",
      date: "2021-10-02",
      name: "שלמה",
    },
    // ...
  ];
}

export default function ServiceTable() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    fetchData();
  }, []); // The empty array [] means this effect runs once on mount

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
      <div className="grid grid-cols-2 gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="mt-4">דיווח נוסף</Button>
          </SheetTrigger>
          <SheetContent side="bottom" dir="rtl">
            <SheetHeader>
              <SheetTitle>מתן דיווח</SheetTitle>
              <SheetDescription>
                ערכו שינויים בשביל הדיווח. לחצו שמירת דיווח כשסיימתם.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  שם עובד
                </Label>
                <Input type="email" placeholder="שם עובד" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  סטטוס
                </Label>
                <Input type="email" placeholder="סטטוס" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  אימייל
                </Label>
                <Input type="email" placeholder="אימייל" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  כמות
                </Label>
                <Input type="email" placeholder="כמות" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  תאריך
                </Label>
                <Input type="email" placeholder="תאריך" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">שמירת דיווח</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
