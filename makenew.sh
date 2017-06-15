#!/usr/bin/env sh

set -e
set -u

find_replace () {
  git grep --cached -Il '' | xargs sed -i.sedbak -e "$1"
  find . -name "*.sedbak" -exec rm {} \;
}

sed_insert () {
  sed -i.sedbak -e "$2\\"$'\n'"$3"$'\n' $1
  rm $1.sedbak
}

sed_delete () {
  sed -i.sedbak -e "$2" $1
  rm $1.sedbak
}

check_env () {
  test -d .git || (echo 'This is not a Git repository. Exiting.' && exit 1)
  for cmd in ${1}; do
    command -v ${cmd} >/dev/null 2>&1 || \
      (echo "Could not find '$cmd' which is required to continue." && exit 2)
  done
  echo
  echo 'Ready to bootstrap your new project!'
  echo
}

stage_env () {
  echo
  echo 'Removing origin and tags.'
  git tag | xargs git tag -d
  git branch --unset-upstream
  git remote rm origin
  echo
  git rm -f makenew.sh
  echo
  echo 'Staging changes.'
  git add --all
  echo
  echo 'Done!'
  echo
}

makenew () {
  echo 'Answer all prompts.'
  echo 'There are no defaults: examples shown in parentheses.'
  echo
  read -p '> Package title (My Package): ' mk_title
  read -p '> Package name (my-package): ' mk_slug
  read -p '> Short package description (Foos and bars.): ' mk_description
  read -p '> Author name (Linus Torvalds): ' mk_author
  read -p '> Author email (linus@example.com): ' mk_email
  read -p '> GitHub repository name (my-package): ' mk_repo

  sed_delete README.md '9,120d'
  sed_insert README.md '9i' "${mk_description}"

  find_replace "s/\"version\": \".*\"/\"version\": \"0.0.0\"/g"
  find_replace "s/0\.0\.0\.\.\./0.0.1.../g"
  find_replace "s/Node\.js npm Package Skeleton/${mk_title}/g"
  find_replace "s/npm package skeleton for Meltwater Node\.js libraries\./${mk_description}/g"
  find_replace "s/Evan Sosenko/${mk_author}/g"
  find_replace "s/evan.sosenko@meltwater\.com/${mk_email}/g"
  find_replace "s/@meltwater\/makenew-node-lib/@meltwater\/${mk_slug}/g"
  find_replace "s/meltwater\/makenew-node-lib/meltwater\/${mk_repo}/g"
  find_replace "s/makenew-node-lib/${mk_repo}/g"
  find_replace "s/makenew--node--lib/$(echo ${mk_slug} | sed 's/-/--/g')/g"

  echo
  echo 'Replacing boilerplate.'
}

check_env 'git read sed xargs'
makenew
stage_env
exit
