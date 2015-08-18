# SimplyBinary.com

The Simply Binary website is a static pages site built with
[Hugo](http://gohugo.io) and hosted on GitHub.io using their "Organization"
Pages. This means that the `master` branch acts as a "public" document root and
files placed there will be served accordingly.

## Setting up for Development (and Deployment)

1. Install Hugo
	* If your on a Mac this is easy with `brew update && brew install hugo`
	* Ensure you have at least version `0.14` with `hugo version`
2. Clone the repo and make it your workign directory
	* `git@github.com:SimplyBinary/simplybinary.github.io.git && cd simplybinary.github.io`
3. Ensure you have Node.js and NPM installed
4. Install Node dependencies
	* `npm install`
5. Install Bower dependencies
	* `bower install`

## Contributing

Even if your not modifing style sheets or script it's important that
`gulp watch` is running. This is because gulp runs a process called "uncss"
which looks at the generated `*.html` files and strips css rules from the stream
that will never match the given files. Failure to do so may cause elements to
appear incorrectly styled even though the correct CSS is being generated by
SASS.

### Adding Features or Fixing Bugs

* Create a topic branch from the `dev` branch
* If you want to be extra clear, prefix feature brances with `f/` and bugfix branches with `b/`
* Ensure `gulp watch` is running.
* Start Hugo's server and have it watch for changes with `hugo server --watch`
* Make, verify, and commit changes
* Submit a PR if you're feeling nice.
* Once the branch is merged into `dev`, checkout `dev` and deploy changes to the
master branch by running `bin/deploy`

### Adding, Editing, and Removing Content

* Create a topic branch from the `dev` branch
* If you're feeling nice, prefix brances with `c/` ("c" for **c**ontent)
* Ensure `gulp watch` is running.
* Start Hugo's server and have it watch for changes with `hugo server --watch`
* Make, verify, and commit changes

If you are creating new content:

* Run `hugo new TYPE/TITLE.md`
  * Where `TYPE` is the content type like "work" or "class"
  * And `Title` is the title of the content such as "Intermediate-Git"
  * Ex. `hugo new class/Intermediate-Git.md`

* Submit a PR if you're feeling nice.
* Once the branch is merged into `dev`, checkout `dev` and deploy changes to the
master branch by running `bin/deploy`
