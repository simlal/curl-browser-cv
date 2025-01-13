{
  pkgs ? import <nixpkgs> {},
  nextAppDir ? "curl-browser-cv",
}:
pkgs.mkShell {
  buildInputs = with pkgs; [nodejs pnpm typescript];

  shellHook = ''
    echo Requiring node, pnpm, and ts within nix-shell for development...

    # Navigate to Next.js app and install dependencies
    echo Installing dependencies for $nextAppDir...
    cd ${nextAppDir}
    pnpm install

    echo -e "\nNow inside Nix shell with environment ready!"
  '';
}
