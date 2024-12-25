import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//theme provider
import { ThemeProvider } from "@/components/theme/theme-provider";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

//global styles
import "./index.css";

// Create a new router instance
const router = createRouter({ routeTree });

const queryClient = new QueryClient();

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme="system" storageKey="theme">
					<RouterProvider router={router} />
				</ThemeProvider>
				{process.env.NODE_ENV === "development" && (
					<ReactQueryDevtools
						initialIsOpen={false}
						position="bottom"
						buttonPosition="bottom-right"
					/>
				)}
			</QueryClientProvider>
		</StrictMode>,
	);
}
