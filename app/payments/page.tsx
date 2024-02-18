import React, { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

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

export default function DemoPage() {
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
    </div>
  );
}
