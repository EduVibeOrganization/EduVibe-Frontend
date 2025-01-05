"use client";
import { CustomInputText } from "@/public/components/custom-input-text.component";
import {useState } from "react";




export default function Home() {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <CustomInputText value={value} onChange={(newValue) => setValue(newValue) } />
    </div>
  );
}
