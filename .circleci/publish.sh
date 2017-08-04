#!/usr/bin/env bash

set -e
set -u

if [[ "${CIRCLE_BRANCH}" == 'master' || "${CIRCLE_BRANCH}" =~ ^v[0-9] ]]; then
  apt-get update
  apt-get install -y jq
  pkg_name=$(jq -r '.name' package.json)
  pkg_version=$(jq -r '.version' package.json)
  if [[ "$(git log -1 --pretty='%s')" == "${pkg_version}" ]]; then
    if [[ -z "$(npm view ${pkg_name}@${pkg_version})" ]]; then
      pkg_files=(*.tgz)
      npm publish $(echo $pkg_files)
    fi
  fi
fi
