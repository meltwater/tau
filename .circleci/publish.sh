#!/usr/bin/env bash

set -e
set -u

apt-get update
apt-get install -y jq

pkg_name=$(jq -r '.name' package.json)
pkg_version=$(jq -r '.version' package.json)

if [[ "$(git log -1 --pretty='%s')" == "${pkg_version}" ]]; then
  if [[ -z "$(npm view ${pkg_name}@${pkg_version})" ]]; then
    pkg_files=(*.tgz)
    npm publish $(echo $pkg_files)
    echo
    echo "> Published ${pkg_name}@${pkg_version}."
    echo
  else
    echo
    echo "> Already published ${pkg_name}@${pkg_version}."
    echo
  fi
else
  echo
  echo '> Nothing to publish: not a new version commit.'
  echo
fi

if [[ -n "$(npm view ${pkg_name})" && -n "${NPM_TEAM:-}" ]]; then
  npm access grant read-only $NPM_TEAM
  echo
  echo "> Access granted to npm team ${NPM_TEAM}."
  echo
fi
