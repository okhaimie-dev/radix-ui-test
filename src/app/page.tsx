"use client"
import './styles.css'

import * as Popover from "@radix-ui/react-popover";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Popover.Root>
				<Popover.Trigger>More info</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content>
						Some more info…
						<Popover.Arrow />
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</main>
	);
}
