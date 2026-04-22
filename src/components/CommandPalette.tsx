'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import {
  Search,
  Folder,
  Terminal,
  User,
  BookOpen,
  ExternalLink,
  Command as CmdIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

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
        className="border-border bg-muted/50 text-muted-foreground hover:bg-muted/80 hover:text-foreground fixed right-6 bottom-6 z-40 flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-lg backdrop-blur-md transition-all"
      >
        <CmdIcon className="h-4 w-4" aria-hidden="true" />
        <span>Press / to navigate</span>
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
              className="border-border bg-background relative z-50 w-full max-w-lg overflow-hidden rounded-xl border shadow-2xl"
            >
              <Command className="flex w-full flex-col" shouldFilter={true}>
                <div className="border-border flex items-center border-b px-3">
                  <Search className="text-muted-foreground mr-2 h-4 w-4 shrink-0" />
                  <Command.Input
                    autoFocus
                    placeholder="Type a command or search..."
                    className="placeholder:text-muted-foreground flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none"
                  />
                </div>
                <Command.List className="max-h-[300px] overflow-x-hidden overflow-y-auto p-2">
                  <Command.Empty className="text-muted-foreground py-6 text-center text-sm">
                    No results found.
                  </Command.Empty>

                  <Command.Group
                    heading="Navigation"
                    className="text-muted-foreground px-2 py-1.5 text-xs font-medium"
                  >
                    <Command.Item
                      onSelect={() => {
                        window.location.hash = '#hero';
                        setOpen(false);
                      }}
                      className="text-foreground aria-selected:bg-muted relative flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Home
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        window.location.hash = '#projects';
                        setOpen(false);
                      }}
                      className="text-foreground aria-selected:bg-muted relative flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <Folder className="mr-2 h-4 w-4" />
                      Projects
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        window.location.hash = '#journey';
                        setOpen(false);
                      }}
                      className="text-foreground aria-selected:bg-muted relative flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Journey
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        window.location.hash = '#skills';
                        setOpen(false);
                      }}
                      className="text-foreground aria-selected:bg-muted relative flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <Terminal className="mr-2 h-4 w-4" />
                      Skills
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        window.location.hash = '#contact';
                        setOpen(false);
                      }}
                      className="text-foreground aria-selected:bg-muted relative flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Contact
                    </Command.Item>
                  </Command.Group>

                  <Command.Group
                    heading="External"
                    className="text-muted-foreground mt-2 px-2 py-1.5 text-xs font-medium"
                  >
                    <Command.Item
                      onSelect={() => {
                        window.open(
                          'https://github.com/priyanshuchawda',
                          '_blank',
                        );
                        setOpen(false);
                      }}
                      className="text-foreground aria-selected:bg-muted relative flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      GitHub Profile
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        window.open(
                          'https://www.linkedin.com/in/priyanshuchawda',
                          '_blank',
                        );
                        setOpen(false);
                      }}
                      className="text-foreground aria-selected:bg-muted relative flex cursor-pointer items-center rounded-sm px-2 py-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <Terminal className="mr-2 h-4 w-4" />
                      Contact Me
                    </Command.Item>
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
