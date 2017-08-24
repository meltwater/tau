#!/usr/bin/env bash

set -e
set -u

help () {
  echo
  echo '# This will set all required environment variables on the CircleCI project.'
  echo
  echo '# Supply values to set when prompted.'
  echo '# Values left blank will not be updated.'
  echo
  echo 'Values may also be provided via' \
       'the corresponding environment variable (prefixed with CI_).'
  echo 'Optionally, set NONINTERACTIVE=true to skip all prompts.'
  echo
  echo 'For example, assuming CIRCLE_TOKEN was set in your environment,' \
       'update NPM_TOKEN with'
  echo
  echo '    $ NONINTERACTIVE=true CI_NPM_TOKEN=token .circleci/envvars.sh'
}

help_circleci () {
  echo
  echo '> Get a personal CircleCI API Token at' \
       'https://circleci.com/account/api'
}

help_npm_token () {
  echo
  echo '> Use a valid token for the meltwater-mlabs user'
}

help_npm_team () {
  echo
  echo '> Use meltwater:read-only'
}

help_codecov () {
  echo
  echo '> Get the Repository Upload Token at' \
       "https://codecov.io/gh/${circle_repo}/settings"
}

command -v jq > /dev/null \
  || echo 'jq required: https://stedolan.github.io/jq/'

command -v http > /dev/null \
  || echo 'HTTPie required: https://httpie.org/'

envvar () {
  name=$1
  value=${2:-}
  if [[ -n $value ]]; then
    if [[ -z $circle_token ]]; then
      echo
      echo 'Error: missing CircleCI token.'
      exit 2
    fi
    http -a "${circle_token}:" \
      "https://circleci.com/api/v1.1/project/github/${circle_repo}/envvar" \
      name=$name value=$value
  fi
}

main () {
  noninteractive=$1
  circle_repo=$(jq -r .repository package.json)

  circle_token=${CIRCLE_TOKEN:-}
  [[ -n "${circle_token}" || $noninteractive == 'true' ]] || help_circleci
  if [[ -z $circle_token && $noninteractive != 'true' ]]; then
    read -p '> CircleCI API token (CIRCLE_TOKEN): ' circle_token
  fi

  npm_token=${CI_NPM_TOKEN:-}
  [[ -n "${npm_token}" || $noninteractive == 'true' ]] || help_npm_token
  if [[ -z $npm_token && $noninteractive != 'true' ]]; then
    read -p '> NPM token (NPM_TOKEN): ' npm_token
  fi

  npm_team=${CI_NPM_TEAM:-}
  [[ -n "${npm_team}" || $noninteractive == 'true' ]] || help_npm_team
  if [[ -z $npm_team && $noninteractive != 'true' ]]; then
    read -p '> NPM team (NPM_TEAM): ' npm_team
  fi

  codecov_token=${CI_CODECOV_TOKEN:-}
  [[ -n "${codecov_token}" || $noninteractive == 'true' ]] || help_codecov
  if [[ -z $codecov_token && $noninteractive != 'true' ]]; then
    read -p '> Codecov token (CODECOV_TOKEN): ' codecov_token
  fi

  envvar 'NPM_TOKEN' "${npm_token}"
  envvar 'NPM_TEAM' "${npm_team}"
  envvar 'CODECOV_TOKEN' "${codecov_token}"
}

noninteractive=${NONINTERACTIVE:-false}
if [[ $noninteractive != 'true' ]]; then
  help
fi
main $noninteractive
