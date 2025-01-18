"use client";
import { Button } from "@/components/ui/button";

interface iProps {
  text: string;
  textLoading: string;
  className?: string;
  pending?: boolean;
}

const ActionButton = ({ text, textLoading, className, pending }: iProps) => {
  return (
    <Button type="submit" className={className} disabled={pending}>
      {pending ? textLoading : text}
    </Button>
  );
};

export default ActionButton;
