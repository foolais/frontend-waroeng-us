"use client";

import { useState } from "react";
import { Card, CardTitle } from "../ui/card";
import { InputOTP, InputOTPSlot } from "../ui/input-otp";
import { requestJoinStore } from "@/lib/actions/storeActions";
import FormButton from "../button/form-button";
import { Button } from "../ui/button";
import { TriangleAlert } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useOnboarding } from "@/store/useOnboarding";
import { deleteStoreRequest } from "@/lib/actions/storeRequestAction";
import { useSession } from "next-auth/react";

const PendingRequestView = ({ onCancel }: { onCancel: () => void }) => (
  <div className="flex-center h-full w-full flex-col">
    <h1 className="text-sub-heading mb-6 text-center">Waiting for approval</h1>
    <div className="h-20 w-20">
      <div className="loader" />
    </div>
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <span>Cancel Request</span>
          <TriangleAlert />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent aria-description="logout" aria-describedby="logout">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to cancel your request?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onCancel}
            className="rounded-xl bg-destructive px-3 text-destructive-foreground hover:bg-destructive hover:opacity-80"
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
);

const RejectedRequestView = ({ onRetry }: { onRetry: () => void }) => (
  <div className="flex-center h-full w-full flex-col">
    <h1 className="text-sub-heading text-center text-red-500">
      Your request was rejected
    </h1>
    <div className="py-2">
      <TriangleAlert className="text-red-500" size={40} />
    </div>
    <p className="text-center text-sm text-gray-600">
      Unfortunately, your request to join the store was not approved.
    </p>
    <Button onClick={onRetry} className="mt-4 w-full bg-primary text-white">
      Join Another Store
    </Button>
  </div>
);

const JoinStoreForm = ({
  values,
  setValues,
  error,
  isLoading,
  onSubmit,
}: {
  values: string | undefined;
  setValues: (value: string) => void;
  error: string | undefined;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}) => (
  <>
    <CardTitle className="text-sub-heading text-center">Join a Store</CardTitle>
    <form onSubmit={onSubmit}>
      <div className="flex-center my-6 flex-col">
        <InputOTP
          maxLength={6}
          value={values}
          onChange={setValues}
          disabled={isLoading}
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
        pending={isLoading}
      />
    </form>
  </>
);

const CardJoinStore = () => {
  const [values, setFormValues] = useState<string>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const { isRequestedJoin, requestType, setIsRequestedJoin, setRequestType } =
    useOnboarding();
  const { data: session } = useSession();

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

    setIsLoading(true);
    setIsRequestedJoin(true);

    try {
      await requestJoinStore(values);
      setIsRequestedJoin(true);
      setRequestType("pending");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
      setIsRequestedJoin(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelRequest = async () => {
    if (!session) return;

    try {
      await deleteStoreRequest(session.user.id);
      setRequestType("pending");
      setIsRequestedJoin(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="h-[220px] border-primary p-6">
      {isRequestedJoin && requestType === "pending" ? (
        <PendingRequestView onCancel={handleCancelRequest} />
      ) : requestType === "rejected" ? (
        <RejectedRequestView onRetry={handleCancelRequest} />
      ) : (
        <JoinStoreForm
          values={values}
          setValues={setFormValues}
          error={error}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />
      )}
    </Card>
  );
};

export default CardJoinStore;
