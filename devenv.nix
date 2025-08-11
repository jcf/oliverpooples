{pkgs, ...}: {
  claude.code.enable = true;

  packages = with pkgs; [
    alejandra
    shfmt
    treefmt
  ];

  process.manager.implementation = "process-compose";
  process.managers.process-compose.tui.enable = false;

  languages.javascript.enable = true;
  languages.javascript.pnpm.enable = true;

  processes.astro.exec = "pnpm dev";
}
