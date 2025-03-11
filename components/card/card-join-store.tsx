"use client";

import { useState } from "react";
import { Card, CardTitle } from "../ui/card";
import { InputOTP, InputOTPSlot } from "../ui/input-otp";
import { requestJoinStore } from "@/lib/actions/storeActions";
import FormButton from "../button/form-button";

const CardJoinStore = () => {
  const [values, setFormValues] = useState<string>();
  const [error, setError] = useState<string>();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(undefined);

    if (!values) {
      setError("Please enter the OTP");
      return;
    } else if (values.length !== 6) {
      setError("Please enter a valid OTP");
      return;
    }

    setIsPending(true);

    try {
      await requestJoinStore(values);
    } catch (error) {
      console.error(error);
      setIsPending(false);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Card className="p-6">
      <CardTitle className="text-sub-heading mb-4 text-center">
        Join a Store
      </CardTitle>
      <form onSubmit={handleSubmit}>
        <div className="flex-center mb-4 flex-col">
          <InputOTP
            maxLength={6}
            value={values}
            onChange={(value) => setFormValues(value)}
          >
            {[...Array(6)].map((_, i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTP>
          {error && <p className="form-field-error">{error}</p>}
        </div>
        <FormButton
          className="mt-2 w-full"
          text="Request Join"
          textLoading="Requesting..."
          pending={isPending}
        />
      </form>
    </Card>
  );
};

export default CardJoinStore;
