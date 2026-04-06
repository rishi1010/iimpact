import { RefreshCcwIcon, Origami } from "lucide-react";

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

export function EmptyMuted() {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Origami className="text-impact-orange" />
        </EmptyMedia>
        <EmptyTitle className="text-impact-orange">No Blogs Yet :(</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty text-impact-blue/60">
          There are no blogs published yet!
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <Link href="/blogs" className="flex gap-2 items-center">
            <RefreshCcwIcon />
            Refresh
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
