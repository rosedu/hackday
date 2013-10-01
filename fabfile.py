from fabric.api import local


def deploy():
    local('jekyll build')
    local('rsync -rtv --del _site/ hackday@rosedu.org:public_html')
