#!/usr/bin/env bash

set -e
set -u

echo
echo 'This will set all required environment variables on the CircleCI project.'
echo
echo 'Supply all missing values when prompted.'
echo 'Values may also be provided via the corresponding environment variable.'
echo 'Values left blank will not be updated.'
echo

command -v jq > /dev/null \
  || echo 'jq required: https://stedolan.github.io/jq/'

command -v http > /dev/null \
  || echo 'HTTPie required: https://httpie.org/'

envvar () {
  token=$1
  name=$2
  value=${3:-}
  if [[ -n $value ]]; then
    http -a "${token}:" \
      "https://circleci.com/api/v1.1/project/github/${repo}/envvar" \
      name=$name value=$value
  fi
}

main () {
  repo=$(jq -r .repository package.json)
  circle_token=${CIRCLE_TOKEN:-}
  npm_token=${NPM_TOKEN:-}
  codecov_token=${CODECOV_TOKEN:-}

  if [[ -z $circle_token ]]; then
    read -p 'CircleCI API token (CIRCLE_TOKEN): ' circle_token
  fi

  if [[ -z $npm_token ]]; then
    read -p 'NPM token (NPM_TOKEN): ' npm_token
  fi

  if [[ -z $codecov_token ]]; then
    read -p 'Codecov token (CODECOV_TOKEN): ' codecov_token
  fi

  envvar $circle_token 'NPM_TOKEN' "${npm_token}"
  envvar $circle_token 'CODECOV_TOKEN' "${codecov_token}"
}

main
