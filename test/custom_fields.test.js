const { test } = require('tap')
const archy = require('../')

test('beep', function (t) {
  const s = archy({
    name: 'beep',
    children: [
      'ity',
      {
        name: 'boop',
        children: [
          {
            name: 'o_O',
            children: [
              {
                name: 'oh',
                children: ['hello', 'puny']
              },
              'human'
            ]
          },
          'party!'
        ]
      }
    ]
  }, undefined, { labelField: 'name', nodesField: 'children' })
  t.equal(s, [
    'beep',
    '├── ity',
    '└─┬ boop',
    '  ├─┬ o_O',
    '  │ ├─┬ oh',
    '  │ │ ├── hello',
    '  │ │ └── puny',
    '  │ └── human',
    '  └── party!',
    ''
  ].join('\n'))
  t.end()
})
