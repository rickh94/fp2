import { Dialog } from "@ark-ui/solid";
import { Component, For, Show } from "solid-js";
import { Pattern } from "~/common/patterns";
import { FingerDisplay } from "./FingerDisplay";
import { Portal } from "solid-js/web";
import { Link } from "./Link";

export const PatternCard: Component<{
  pattern: Pattern;
  patternId: string;
}> = function (props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        class="focus-within:border-fucshia-500 group relative flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-pink-100 bg-white px-4 py-4 shadow-sm focus-within:ring-2 focus-within:ring-fuchsia-500 hover:border-fuchsia-500 focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus-visible:ring-fuchsia-500"
      >
        <div class="flex w-full justify-between">
          <h2 class="text-left text-xl tracking-wide">{props.pattern.name}</h2>
        </div>
        <div class="invisible absolute right-0 top-0 mr-2 mt-2 text-right text-base tracking-wide text-fuchsia-700 group-hover:visible group-focus:visible">
          More Info
        </div>
        <FingerDisplay
          baseId={props.patternId}
          radius={2}
          widths={props.pattern.widths}
        />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop class="overlay fixed inset-0 z-20 bg-fuchsia-200 bg-opacity-60 backdrop-blur" />
        <Dialog.Positioner class="fixed inset-0 z-30 overflow-y-auto">
          <div class="flex min-h-full w-screen items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Dialog.Content class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div class="relative z-50 flex w-full items-center justify-between">
                <Dialog.Title class="flex-grow text-center text-2xl font-bold">
                  {props.pattern.name}
                </Dialog.Title>
                <Dialog.CloseTrigger class="rounded border-2 border-white hover:text-rose-500 focus:text-rose-500 focus-visible:ring-2 focus-visible:ring-rose-500">
                  <span class="sr-only">Close Navigation</span>
                  <span class="icon-[heroicons--x-mark-solid] size-6" />
                </Dialog.CloseTrigger>
              </div>
              <Dialog.Description>
                <div
                  class="relative z-50 mx-auto mt-4 flex w-full flex-col items-center justify-center gap-2 text-left"
                  aria-label="primary"
                >
                  <FingerDisplay
                    baseId={`${props.patternId}-pattern-more-info`}
                    radius={2}
                    widths={props.pattern.widths}
                  />

                  <div class="flex w-full items-center justify-center pb-8">
                    <Link
                      href={`/practice?patternId=${props.patternId}`}
                      class="text-xl"
                    >
                      Practice Now
                    </Link>
                  </div>
                  <For each={props.pattern.description}>
                    {(desc) => <p>{desc}</p>}
                  </For>
                  <Show
                    when={
                      props.pattern.exercises &&
                      props.pattern.exercises?.length > 0
                    }
                  >
                    <h4 class="text-xl font-bold">Exercises</h4>
                    <ul>
                      <For each={props.pattern.exercises}>
                        {(ex) => (
                          <li class="mb-1">
                            <Link href={ex.link} external>
                              {ex.name}
                            </Link>
                          </li>
                        )}
                      </For>
                    </ul>
                  </Show>
                </div>
              </Dialog.Description>
            </Dialog.Content>
          </div>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
