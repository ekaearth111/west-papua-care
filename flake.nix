{
  description = "West Papua Care - SvelteKit Development Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            nodePackages.pnpm
            playwright-driver.browsers
            git
          ];

          shellHook = ''
            export PLAYWRIGHT_BROWSERS_PATH=${pkgs.playwright-driver.browsers}
            export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

            echo ""
            echo "🌊 West Papua Care Development Environment"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
            echo ""
            echo "📦 Available Commands:"
            echo "  pnpm dev              - Start development server"
            echo "  pnpm build            - Build for production"
            echo "  pnpm preview          - Preview production build"
            echo "  pnpm test:e2e         - Run Playwright tests"
            echo "  pnpm test:e2e:ui      - Run Playwright with UI"
            echo "  pnpm storybook        - Start Storybook"
            echo "  pnpm check            - Type check"
            echo ""
            echo "🔧 Node.js: $(node --version)"
            echo "📦 pnpm: $(pnpm --version)"
            echo "🎭 Playwright browsers: ${pkgs.playwright-driver.browsers}"
            echo ""
            echo "Ready to build! 🚀"
            echo ""
          '';
        };
      }
    );
}
