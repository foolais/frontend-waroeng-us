"use client";

import { getStoreRequestById } from "@/lib/actions/storeRequestAction";
import { useOnboarding } from "@/store/useOnboarding";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CardCreateStore from "./card-create-store";
import CardJoinStore from "./card-join-store";
import LoadingComponents from "../loading/loading-components";

const CardOnboarding = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [isLoading, setIsLoading] = useState(false);

  const { isRequestedJoin, requestType, setIsRequestedJoin, setRequestType } =
    useOnboarding();
  const { data: session } = useSession();

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchData = async () => {
        if (session) {
          const requested = await getStoreRequestById(session.user.id);
          if (!requested) {
            setIsRequestedJoin(false);
            setRequestType("pending");
            setActiveTab("create");
          }

          if (requested && "status" in requested) {
            setRequestType(requested.status);
            setIsRequestedJoin(true);
            setActiveTab("join");
          }
        }
      };

      fetchData();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [session, setIsRequestedJoin, setRequestType]);

  useEffect(() => {
    if (requestType !== "pending") {
      setActiveTab("join");
    }
  }, [requestType]);

  return (
    <div className="flex-center flex h-4/5">
      <div className="flex-center mx-auto h-[400px] w-max flex-col gap-4 rounded-xl bg-white p-6">
        {isLoading ? (
          <div className="w-[400px]">
            <LoadingComponents text="Loading..." isFullScreen={false} />
          </div>
        ) : (
          <>
            <h1 className="text-heading text-center text-primary">
              Let’s Get Started {requestType}{" "}
              {isRequestedJoin ? "Req" : "No Req"}
            </h1>
            <Tabs value={activeTab} className="my-3 w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="create"
                  disabled={isRequestedJoin && requestType !== "canceled"}
                  onClick={() => setActiveTab("create")}
                >
                  Create Store
                </TabsTrigger>
                <TabsTrigger
                  value="join"
                  disabled={isRequestedJoin && requestType !== "canceled"}
                  onClick={() => setActiveTab("join")}
                >
                  Join Store
                </TabsTrigger>
              </TabsList>
              <TabsContent value="create">
                <CardCreateStore />
              </TabsContent>
              <TabsContent value="join">
                <CardJoinStore />
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};

export default CardOnboarding;
