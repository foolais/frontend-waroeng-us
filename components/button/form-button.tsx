"use client";
import { Button } from "@/components/ui/button";

interface iProps {
  text: string;
  textLoading: string;
  className?: string;
  pending?: boolean;
  form?: string;
}

const FormButton = ({
  text,
  textLoading,
  className,
  pending,
  form,
}: iProps) => {
  return (
    <Button type="submit" form={form} className={className} disabled={pending}>
      {pending ? textLoading : text}
    </Button>
  );
};

export default FormButton;
