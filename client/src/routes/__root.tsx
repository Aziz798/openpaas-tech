import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ModeToggle } from "@/components/theme/mode-toggle";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-2 flex gap-2">
				<ModeToggle />
			</div>
			<hr />
			<Outlet />
			{process.env.NODE_ENV === "development" && (
				<TanStackRouterDevtools
					initialIsOpen={false}
					position="bottom-left"
				/>
			)}
		</>
	),
});
