with ((import (builtins.fetchTarball {
  # https://github.com/NixOS/nixpkgs/pull/197095
  #url = "https://github.com/NixOS/nixpkgs/archive/dd18ee8dade6d95d31134abd8367bd000f66bbe7.tar.gz";
  # https://github.com/NixOS/nixpkgs/pull/197291
  url = "https://github.com/NixOS/nixpkgs/archive/bff3c5c4782008ac46982b37ade3d897c3d184be.tar.gz";
})) { });

mkShell {
  buildInputs =
    [
      yarn
    ];

  PLAYWRIGHT_BROWSERS_PATH = "${playwright.browsers}";
}
