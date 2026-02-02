"use client";

import * as React from "react";
import {User} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {Button} from "@/components/ui/button";
import {SearchIcon} from "../hover-icons/search";
import {useRouter} from "next/navigation";
import {FiHome} from "react-icons/fi";
import {FaCode} from "react-icons/fa6";
import {BsTelephone} from "react-icons/bs";
import {RiUserStarLine} from "react-icons/ri";
import {BsBook} from "react-icons/bs";
import {IoCameraOutline} from "react-icons/io5";
import {MdOutlineMail} from "react-icons/md";
import {FaXTwitter} from "react-icons/fa6";
import {LuGithub} from "react-icons/lu";
import {TbMailSpark} from "react-icons/tb";
import {TbShare3} from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

type CommandDef = {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  run: () => void;
};

const RECENT_KEY = "searchbox:recent";
const MAX_RECENTS = 5;

export function SearchBox() {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!(e.metaKey || e.ctrlKey)) return;

      switch (e.key.toLowerCase()) {
        case "h":
          router.push("/");
          break;
        case "p":
          router.push("/projects");
          break;
        case "l":
          router.push("/blogs");
          break;
        // case "s":
        //   router.push("/my-story");
        //   break;
        case "q":
          router.push("/contact");
          break;
        case "y":
          router.push("/reading-list");
          break;
        case "o":
          router.push("/people");
          break;
        case "g":
          router.push("/photography");
          break;
        default:
          return;
      }

      e.preventDefault();
      setOpen(false);
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [router]);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!(e.metaKey || e.ctrlKey)) return;

      const key = e.key.toLowerCase();

      switch (key) {
        case "e": {
          // Email
          window.open("mailto:mrityunjaytiwari1873@gmail.com", "_blank");
          break;
        }

        case "m": {
          // X / Twitter
          window.open("https://x.com/mrityunjay_18", "_blank");
          break;
        }

        case "n": {
          // Share page
          if (navigator.share) {
            navigator.share({
              title: "Mrityunjay's Portfolio",
              url: window.location.href,
            });
          } else {
            navigator.clipboard.writeText(window.location.href);
          }
          break;
        }

        case "h": {
          // GitHub
          window.open("https://github.com/mrityunjay-tiwari", "_blank");
          break;
        }

        case "j": {
          document
            .getElementById("newsletter")
            ?.scrollIntoView({behavior: "smooth"});
          break;
        }

        default:
          return;
      }

      e.preventDefault();
      setOpen(false);
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const commands: CommandDef[] = React.useMemo(
    () => [
      //  Navigation
      {
        id: "home",
        label: "Go to Home",
        description: "Navigate to Home Page",
        icon: <FiHome />,
        run: () => router.push("/"),
      },
      {
        id: "projects",
        label: "Go to Projects",
        description: "See all my Projects",
        icon: <FaCode />,
        run: () => router.push("/projects"),
      },
      {
        id: "blogs",
        label: "Go to Blogs",
        description: "Read all Blog Posts",
        icon: <span className="text-xl text-muted-foreground">✍︎</span>,
        run: () => router.push("/blogs"),
      },
      {
        id: "my-story",
        label: "Go to My Story",
        description: "Read my Story",
        icon: <User />,
        run: () => router.push("/my-story"),
      },
      {
        id: "contact",
        label: "Go to Contact",
        description: "Say Hi!",
        icon: <BsTelephone />,
        run: () => router.push("/contact"),
      },
      {
        id: "reading-list",
        label: "Go to Reading List",
        description: "See my Reading List",
        icon: <BsBook />,
        run: () => router.push("/reading-list"),
      },
      {
        id: "people",
        label: "Go to People",
        description: "See people who inspire me",
        icon: <RiUserStarLine />,
        run: () => router.push("/people"),
      },
      {
        id: "photography",
        label: "Go to Photography",
        description: "See through my lens",
        icon: <IoCameraOutline />,
        run: () => router.push("/photography"),
      },

      //  Actions
      {
        id: "email",
        label: "Connect on E-mail",
        description: "Open Email in another tab",
        icon: <MdOutlineMail />,
        run: () =>
          window.open("mailto:mrityunjaytiwari1873@gmail.com", "_blank"),
      },
      {
        id: "x",
        label: "Connect on X",
        description: "Open X in another tab",
        icon: <FaXTwitter />,
        run: () => window.open("https://x.com/mrityunjay_18", "_blank"),
      },
      {
        id: "share",
        label: "Share Page",
        description: "Share my Portfolio",
        icon: <TbShare3 />,
        run: () => {
          if (navigator.share) {
            navigator.share({
              title: "Mrityunjay's Portfolio",
              url: window.location.href,
            });
          } else {
            navigator.clipboard.writeText(window.location.href);
          }
        },
      },
      {
        id: "github",
        label: "View GitHub",
        description: "View my GitHub Profile",
        icon: <LuGithub />,
        run: () =>
          window.open("https://github.com/mrityunjay-tiwari", "_blank"),
      },
      {
        id: "newsletter",
        label: "Follow my Newsletter",
        description: "Know about my Journey",
        icon: <TbMailSpark />,
        run: () =>
          document
            .getElementById("newsletter")
            ?.scrollIntoView({behavior: "smooth"}),
      },
    ],
    [router],
  );

  const saveRecent = (id: string) => {
    const prev = JSON.parse(
      localStorage.getItem(RECENT_KEY) || "[]",
    ) as string[];

    const next = [id, ...prev.filter((x) => x !== id)].slice(0, MAX_RECENTS);
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  };

  const [recentIds, setRecentIds] = React.useState<string[]>([]);

  React.useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem(RECENT_KEY) || "[]",
    ) as string[];
    setRecentIds(stored);
  }, []);

  const runCommand = (cmd: CommandDef) => {
    cmd.run();
    saveRecent(cmd.id);
    setRecentIds((prev) =>
      [cmd.id, ...prev.filter((x) => x !== cmd.id)].slice(0, 5),
    );
    setOpen(false);
  };

  return (
    <>
      <p className="text-muted-foreground text-sm hover:cursor-pointer scale-80 sm:scale-90 md:scale-100 origin-right">
        <Button
          className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)] border-none  rounded-2xl flex items-center bg-transparent font-normal hover:cursor-pointer"
          variant={"outline"}
          onClick={() => setOpen(!open)}
        >
          <SearchIcon className="hidden md:inline" />
          <CiSearch className="inline md:hidden size-4" />
          <p className="mr-0 md:mr-5">Search</p>

          <kbd className="hidden sm:inline justify-center bg-muted text-muted-foreground pointer-events-none  h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="thin-scrollbar">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandSeparator />
          {recentIds.length > 0 && (
            <>
              <CommandGroup heading="Recent">
                {recentIds
                  .map((id) => commands.find((c) => c.id === id))
                  .filter(Boolean)
                  .map((cmd) => (
                    <CommandItem
                      key={cmd!.id}
                      onSelect={() => runCommand(cmd!)}
                    >
                      {cmd!.icon}
                      <div className="flex flex-col items-start">
                        <span>{cmd!.label}</span>
                        {cmd!.description && (
                          <span className="text-xs text-muted-foreground">
                            {cmd!.description}
                          </span>
                        )}
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          )}

          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() =>
                runCommand(commands.find((c) => c.id === "home")!)
              }
            >
              <FiHome />
              <div className="flex flex-col items-start">
                <span>Go to Home</span>
                <span className="text-xs text-muted-foreground">
                  Navigate to Home Page
                </span>
              </div>
              <CommandShortcut>⌘H</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() =>
                runCommand(commands.find((c) => c.id === "projects")!)
              }
            >
              <FaCode />
              <div className="flex flex-col items-start">
                <span>Go to Projects</span>
                <span className="text-xs text-muted-foreground">
                  See all my Projects
                </span>
              </div>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() =>
                runCommand(commands.find((c) => c.id === "blogs")!)
              }
            >
              {/* <RiQuillPenAiFill /> */}
              <p className="text-xl text-muted-foreground">✍︎</p>
              <div className="flex flex-col items-start">
                <span>Go to Blogs</span>
                <span className="text-xs text-muted-foreground">
                  Read all Blogs Posts
                </span>
              </div>
              <CommandShortcut>⌘L</CommandShortcut>
            </CommandItem>

            {/* <CommandItem
              onSelect={() =>
                runCommand(commands.find((c) => c.id === "my-story")!)
              }
            >
              <User />
              <div className="flex flex-col items-start">
                <span>Go to My Story</span>
                <span className="text-xs text-muted-foreground">
                  Read my Story
                </span>
              </div>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem> */}

            <CommandItem
              onSelect={() =>
                runCommand(commands.find((c) => c.id === "contact")!)
              }
            >
              <BsTelephone />
              <div className="flex flex-col items-start">
                <span>Go to Contact</span>
                <span className="text-xs text-muted-foreground">Say Hi!</span>
              </div>
              <CommandShortcut>⌘Q</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() =>
                runCommand(commands.find((c) => c.id === "reading-list")!)
              }
            >
              <BsBook />
              <div className="flex flex-col items-start">
                <span>Go to Reading List</span>
                <span className="text-xs text-muted-foreground">
                  See my Reading List
                </span>
              </div>
              <CommandShortcut>⌘Y</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() =>
                runCommand(commands.find((c) => c.id === "people")!)
              }
            >
              <RiUserStarLine />
              <div className="flex flex-col items-start">
                <span>Go to People</span>
                <span className="text-xs text-muted-foreground">
                  See People who inspire me
                </span>
              </div>
              <CommandShortcut>⌘O</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() =>
                runCommand(commands.find((c) => c.id === "photography")!)
              }
            >
              <IoCameraOutline />
              <div className="flex flex-col items-start">
                <span>Go to Photography</span>
                <span className="text-xs text-muted-foreground">
                  See through my lens
                </span>
              </div>
              <CommandShortcut>⌘G</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Actions">
            {["email", "x", "share", "github", "newsletter"].map((id) => {
              const cmd = commands.find((c) => c.id === id)!;

              return (
                <CommandItem key={cmd.id} onSelect={() => runCommand(cmd)}>
                  {cmd.icon}
                  <div className="flex flex-col items-start">
                    <span>{cmd.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {cmd.description}
                    </span>
                  </div>

                  {/* Optional shortcuts */}
                  {cmd.id === "email" && <CommandShortcut>⌘E</CommandShortcut>}
                  {cmd.id === "x" && <CommandShortcut>⌘M</CommandShortcut>}
                  {cmd.id === "share" && <CommandShortcut>⌘N</CommandShortcut>}
                  {cmd.id === "github" && <CommandShortcut>⌘H</CommandShortcut>}
                  {cmd.id === "newsletter" && (
                    <CommandShortcut>⌘J</CommandShortcut>
                  )}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
