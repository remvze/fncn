import type { Metadata } from "next";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}

export const metadata: Metadata = {
  title: "fncn: Utility Function Registry for shadcn/ui",
  description: "A simple helper function registry for shadcn/ui.",
};
