require './lib/SassyMatrix'

Gem::Specification.new do |s|
  # Release Specific Information
  s.version = SassyMatrix::VERSION
  s.date = SassyMatrix::DATE

  # Gem Details
  s.name = "SassyMatrix"
  s.rubyforge_project = "SassyMatrix"
  s.description = %q{Sass API for matrices}
  s.summary = %q{SassyMatrix is a Sass-powered API for matrices.}
  s.authors = ["Kitty Giraudel", "Fabrice Weinberg"]
  s.email = ["kitty.giraudel@gmail.com", "fabrice@weinberg.me"]
  s.homepage = "https://github.com/KittyGiraudel/SassyMatrix/"

  # README file
  s.files = ["README.md"]

  # CHANGELOG
  s.files += ["CHANGELOG.md"]

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  s.files += Dir.glob("stylesheets/**/*.*")

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}
end
