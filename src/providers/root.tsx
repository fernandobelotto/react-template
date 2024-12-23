import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { BrowserRouter } from "react-router";
import { Toaster } from "@/components/ui/sonner";

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="absolute top-0 right-0">
          <ModeToggle />
        </div>
        <Toaster />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};
