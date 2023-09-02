import Image from "next/image";
import { initClients } from "@/lib/contentful";

export default async function Home() {
  const data = await initClients();
  const { items } = data;
  const fields = items.map((item) => item.fields);
  //fields.forEach((field) => console.log(JSON.stringify(field.description)));
  return (
    <>
      <h1 className="text-xl">Blog</h1>
      {fields.map((field) => (
        <div key={field.title as string} className="border">
          <h3>{field.title as string}</h3>
          <h5></h5>
        </div>
      ))}
    </>
  );
}
