import { Children, type ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar({ children }: Readonly<{ children: ReactNode }>) {
  const items = Children.toArray(children);

  return (
    <Sidebar>
      <SidebarHeader>{items[0]}</SidebarHeader>

      <SidebarContent>
        {Children.map(items.slice(1, -1), (child) => (
          <SidebarGroup>{child}</SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>{items[items.length - 1]}</SidebarFooter>
    </Sidebar>
  );
}
