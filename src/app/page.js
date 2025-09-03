"use client";

import { useState } from "react";
import { BasicForm } from "./basicForm";
import { AlhmForm } from "./alhmForm";
import { CompleteForm } from "./complete";
import { EndForm } from "./end";
export default function Home() {
  const [step, setStep] = useState("basic");
  const [form, setForm] = useState({
    first: "",
    last: "",
    user: "",
    email: "",
    phone: "",
    password: "",
    passwords: "",
  });
  function Continue() {
    setStep("alhm");
  }
  if (step === "basic") {
    return  <BasicForm form={form} onChange={setForm} onChangeStep={setStep} />
  }
  if (step === "alhm") {
    return (
      <AlhmForm form={form} onChange={setForm} onChangeStep={setStep} />
    );
  }
  if (step === "complete") {
    return (
      <CompleteForm form={form} onChange={setForm} onChangeStep={setStep} />
    );
  }
  if (step === "end") {
    return (
      <EndForm form={form} onChange={setForm} onChangeStep={setStep} />
    );
  }
}