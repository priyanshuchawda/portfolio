'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import {
  Search,
  Folder,
  Terminal,
  User,
  BookOpen,
  ExternalLink,
  Command as CmdIcon,
  Home,
  Activity,
  Mail,
  BriefcaseBusiness,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { commandPaletteNav, externalNav } from '@/data/navigation';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      // Also open on /
      if (
        e.key === '/' &&
        !open &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette (Press / or Ctrl+K)"
        className="border-border bg-muted/50 text-muted-foreground hover:bg-muted/80 hover:text-foreground focus-visible:ring-accent fixed right-4 bottom-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border text-sm shadow-lg backdrop-blur-md transition-colors focus-visible:ring-2 focus-visible:outline-none sm:right-6 sm:bottom-6 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2"
      >
        <CmdIcon className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">Press / to navigate</span>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] sm:pt-[20vh]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="bg-background/80 fixed inset-0 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="border-border bg-background relative z-50 w-full max-w-lg overflow-hidden rounded-lg border shadow-2xl"
            >
              <Command className="flex w-full flex-col" shouldFilter={true}>
                <div className="border-border flex items-center border-b px-3">
                  <Search className="text-muted-foreground mr-2 h-4 w-4 shrink-0" />
                  <Command.Input
                    autoFocus
                    placeholder="Type a command or search…"
                    className="placeholder:text-muted-foreground focus-visible:ring-accent flex h-12 w-full rounded-md bg-transparent py-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
                  />
                </div>
                <Command.List className="max-h-[18.75rem] overflow-x-hidden overflow-y-auto p-2">
                  <Command.Empty className="text-muted-foreground py-6 text-center text-sm">
                    No results found.
                  </Command.Empty>

                  <Command.Group
                    heading="Navigation"
                    className="text-muted-foreground px-2 py-1.5 text-xs font-medium"
                  >
                    {commandPaletteNav.map((item) => {
                      const Icon =
                        item.icon === 'home'
                          ? Home
                          : item.icon === 'user'
                            ? User
                            : item.icon === 'folder'
                              ? Folder
                              : item.icon === 'briefcase'
                                ? BriefcaseBusiness
                                : item.icon === 'book'
                                  ? BookOpen
                                  : item.icon === 'activity'
                                    ? Activity
                                    : item.icon === 'mail'
                                      ? Mail
                                      : Terminal;

                      return (
                        <Command.Item
                          key={item.href}
                          onSelect={() => {
                            router.push(item.href);
                            setOpen(false);
                          }}
                          className="text-foreground aria-selected:bg-muted focus-visible:ring-accent relative flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm select-none focus-visible:ring-2 focus-visible:outline-none data-disabled:pointer-events-none data-disabled:opacity-50"
                        >
                          <Icon className="mr-2 h-4 w-4" />
                          {item.label}
                        </Command.Item>
                      );
                    })}
                  </Command.Group>

                  <Command.Group
                    heading="External"
                    className="text-muted-foreground mt-2 px-2 py-1.5 text-xs font-medium"
                  >
                    {externalNav.map((item) => (
                      <Command.Item
                        key={item.href}
                        onSelect={() => {
                          window.open(item.href, '_blank');
                          setOpen(false);
                        }}
                        className="text-foreground aria-selected:bg-muted focus-visible:ring-accent relative flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm select-none focus-visible:ring-2 focus-visible:outline-none data-disabled:pointer-events-none data-disabled:opacity-50"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {item.label}
                      </Command.Item>
                    ))}
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
