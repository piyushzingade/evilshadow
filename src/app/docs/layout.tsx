import { DocsSidebar } from "@/components/docs/layout/sidebar/docs-sidebar";
import DocsHeader from "@/components/docs/layout/header/docs-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <SidebarInset>
        {/* Header */}
        <DocsHeader />
        {/* Content */}
        <div className="docs-content-wrapper">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
