# Map branch to repo and set the correct domain
if [ $TRAVIS_BRANCH = "master" ]
then
  GH_REF="github.com/BUREAUDONALD-ORG/to-dont-list.git"
  # echo todontlist.net > build/CNAME
elif [ $TRAVIS_BRANCH = "production" ]
then
  GH_REF="github.com/BUREAUDONALD-ORG/to-dont-list.git"
  # echo offcourse.io > build/CNAME
fi

# Deploy
cd public
git init
git config user.name "Zaturrby"
git config user.email "rjkorteschiel@gmail.com"
git add -A
git commit -m "deploy"
git push -f --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
