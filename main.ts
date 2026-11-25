#!/usr/bin/env node

const LINE =
  "An app that gamifies ignoring people: you earn streaks for every unread message.";

const USAGE = [
  "Usage: node main.ts [--shout] [--help]",
  "",
  "Options:",
  "  --shout   Print the line in ALL CAPS.",
  "  --help    Show this help text.",
].join("\n");

function hasFlag(name: string): boolean {
  return process.argv.slice(2).includes(name);
}

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function main(): void {
  if (hasFlag("--help")) {
    console.error(USAGE);
    process.exit(0);
  }
  console.log(renderLine(hasFlag("--shout")));
}

main();
