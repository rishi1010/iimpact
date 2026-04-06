import { RefreshCcwIcon, Construction, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

export function EmptyPyq() {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Construction className="text-impact-orange" />
        </EmptyMedia>
        <EmptyTitle className="text-impact-orange">No paper yet!</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty text-impact-blue/60">
          This paper is under construction, come back later!
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button
          variant="outline"
          className="hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Link href="/pyqs" className="flex gap-2 items-center">
            <ArrowLeft className="hover:rotate-360 transition-all duration-200" />
            Go Back
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
