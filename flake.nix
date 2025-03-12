{
  description = "Node.js Dev Env";

  inputs = {
    nixpkgs.url = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        pname = "blog-vp";
        version = "0.0.1";
        buildInputs = with pkgs; [
          nodejs_20
          nodePackages.pnpm
        ];
        nativeBuildInputs = buildInputs;
      in
      {
        devShells.default = pkgs.mkShell {
          inherit buildInputs;
          shellHook = ''
            export PS1="(devShell ${pname}) \w \$ "
          '';
        };
      }
    );
}
