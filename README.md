# @eomm/archy

Render nested hierarchies `npm ls` style with unicode pipes.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![ci](https://github.com/Eomm/node-archy/actions/workflows/ci.yml/badge.svg)](https://github.com/Eomm/node-archy/actions/workflows/ci.yml)

> This is a fork of `substack/node-archy`.  
> The original repository doesn't exist anymore - so here is my fork.
> This version has an additional feature to customize the fields name of `obj` input.

# example

``` js
const archy = require('@eomm/archy');
const s = archy({
  label : 'beep',
  nodes : [
    'ity',
    {
      label : 'boop',
      nodes : [
        {
          label : 'o_O',
          nodes : [
            {
              label : 'oh',
              nodes : [ 'hello', 'puny' ]
            },
            'human'
          ]
        },
        'party\ntime!'
      ]
    }
  ]
});
console.log(s);
```

output

```
beep
├── ity
└─┬ boop
  ├─┬ o_O
  │ ├─┬ oh
  │ │ ├── hello
  │ │ └── puny
  │ └── human
  └── party
      time!
```

# methods

  const archy = require('@eomm/archy')

## archy(obj, prefix='', opts={ labelField: 'label', nodesField: 'nodes' })

Return a string representation of `obj` with unicode pipe characters like how
`npm ls` looks.

`obj` should be a tree of nested objects with `'label'` and `'nodes'` fields.
`'label'` is a string of text to display at a node level and `'nodes'` is an
array of the descendents of the current node.

If a node is a string, that string will be used as the `'label'` and an empty
array of `'nodes'` will be used.

`prefix` gets prepended to all the lines and is used by the algorithm to
recursively update.

If `'label'` has newlines they will be indented at the present indentation level
with the current prefix.

To disable unicode results in favor of all-ansi output set `opts.unicode` to
`false`.

You can customize the fields name of `obj` specifing a string in `opts.labelField`
and `opts.nodesField`, so you don't need to adapt your tree.

# install

```
npm install @eomm/archy
```

# license

MIT
