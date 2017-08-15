#!/usr/bin/env bash

set -e
set -u

help () {
  echo
  echo 'This will set all required environment variables on the CircleCI project.'
  echo
  echo 'Supply values to set when prompted.' \
       'Values left blank will not be updated.'
  echo
  echo 'Values may also be provided via the corresponding environment variable' \
       '(set NONINTERACTIVE=true to skip all prompts), e.g.,'
  echo
  echo '    $ NONINTERACTIVE=true NPM_TOKEN=token .circleci/envvars.sh'
  echo
}

command -v jq > /dev/null \
  || echo 'jq required: https://stedolan.github.io/jq/'

command -v http > /dev/null \
  || echo 'HTTPie required: https://httpie.org/'

envvar () {
  token=$1
  name=$2
  value=${3:-}
  if [[ -n $value ]]; then
    if [[ -z $token ]]; then
      echo
      echo 'Error: missing CircleCI token.'
      exit 2
    fi
    http -a "${token}:" \
      "https://circleci.com/api/v1.1/project/github/${repo}/envvar" \
      name=$name value=$value
  fi
}

main () {
  noninteractive=$1
  repo=$(jq -r .repository package.json)

  circle_token=${CIRCLE_TOKEN:-}
  if [[ -z $circle_token && $noninteractive != 'true' ]]; then
    read -p 'CircleCI API token (CIRCLE_TOKEN): ' circle_token
  fi

  npm_token=${NPM_TOKEN:-}
  if [[ -z $npm_token && $noninteractive != 'true' ]]; then
    read -p 'NPM token (NPM_TOKEN): ' npm_token
  fi

  npm_team=${NPM_TEAM:-}
  if [[ -z $npm_team && $noninteractive != 'true' ]]; then
    read -p 'NPM team (NPM_TEAM): ' npm_team
  fi

  codecov_token=${CODECOV_TOKEN:-}
  if [[ -z $codecov_token && $noninteractive != 'true' ]]; then
    read -p 'Codecov token (CODECOV_TOKEN): ' codecov_token
  fi

  envvar "${circle_token}" 'NPM_TOKEN' "${npm_token}"
  envvar "${circle_token}" 'NPM_TEAM' "${npm_team}"
  envvar "${circle_token}" 'CODECOV_TOKEN' "${codecov_token}"
}

noninteractive=${NONINTERACTIVE:-false}
if [[ $noninteractive != 'true' ]]; then
  help
fi
main $noninteractive
