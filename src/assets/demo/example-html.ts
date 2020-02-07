const html = `<p>
  It's the curated collection of awesome work that is done by awesome people and community.
</p>

<h3>
  Highlights
</h3>

<ul>
  <li>Some Imaginary CSS</li>
  <li>Some hard to remember CSS Selectors</li>
  <li>Daily Developer Jokes</li>
  <li>Griddle</li>
  <li>Php In 2020</li>
  <li>IHateRegex</li>
  <li>Gradientify</li>
</ul>

<h3>Some Imaginary CSS</h3>

<p>
  It's a collection of some fancy imaginary CSS that could be possible near future.
</p>

<p>As far, none of these examples is real as of this writing… they are pure flights of fancy!</p>

<h4>
  Container Queries
</h4>

<p>
  Here’s one example: Only round an element’s corners when it’s narrower than the full viewport width
</p>

<pre>
  <code class="language-css">
    .card:media(width < 100vw) {
      border-radius: 0.5em;
    }
  </code>
</pre>


Written by <a href="#">Tyler Sticka</a>

<h2>Some hard to remember CSS Selectors</h2>

<p>Below is the list of selectors that are suitable for our use case. Enjoy!</p>

<pre>
  <code class="language-css">
    :nth-child(odd|even|n){}
    p::first-line {}
    article + p {}
    article ~ p {}
  </code>
</pre>

<h2>Daily Developer Jokes</h2>

<p>
Collection of awesome jokes. The Daily Developer Jokes bot will post programmer humour and jokes every day, both on the
Daily Developer Jokes Website, and on the Daily Developer Jokes DEV Profile.
</p>
`;

export default html;
