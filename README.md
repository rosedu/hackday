Source of [hack day][] website, written for the [Jekyll][] static site
generator.

Building the static pages:

    jekyll --url .

Deploying:

    rsync -rtv --del _site/ hackday@rosedu.org:public_html


[hack day]: http://hackday.rosedu.org/
[jekyll]: http://jekyllrb.com/
