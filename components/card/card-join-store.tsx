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
import { cancelStoreRequest } from "@/lib/actions/storeRequestAction";
import { useSession } from "next-auth/react";

const CardJoinStore = () => {
  const [values, setFormValues] = useState<string>();
  const [error, setError] = useState<string>();
  const [isPending, setIsPending] = useState(false);

  const { isRequestedJoin, setIsRequestedJoin, setRequestType } =
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

    setIsPending(true);

    try {
      await requestJoinStore(values);
      setIsRequestedJoin(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
      setIsPending(false);
    } finally {
      setIsPending(false);
    }
  };

  const handleCancelRequest = async () => {
    if (!session) return;

    try {
      await cancelStoreRequest(session?.user.id);
      setRequestType("canceled");
      setIsRequestedJoin(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="h-[220px] p-6">
      {isRequestedJoin ? (
        <div className="flex-center h-full w-full flex-col">
          <h1 className="text-sub-heading mb-6 text-center">
            Waiting for approval
          </h1>
          <div className="h-20 w-20">
            <div className="loader" />
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"destructive"}>
                <span>Cancel Request</span>
                <TriangleAlert />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent
              aria-description="logout"
              aria-describedby="logout"
            >
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure want to cancel request?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleCancelRequest}
                  className="rounded-xl bg-destructive px-3 text-destructive-foreground hover:bg-destructive hover:opacity-80"
                >
                  Yes
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ) : (
        <>
          <CardTitle className="text-sub-heading text-center">
            Join a Store
          </CardTitle>
          <form onSubmit={handleSubmit}>
            <div className="flex-center my-6 flex-col">
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
        </>
      )}
    </Card>
  );
};

export default CardJoinStore;
