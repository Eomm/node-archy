const test = require('tape')
const archy = require('../')

test('beep', function (t) {
  const s = archy({
    label: 'beep',
    nodes: [
      'ity',
      {
        label: 'boop',
        nodes: [
          {
            label: 'o_O',
            nodes: [
              {
                label: 'oh',
                nodes: ['hello', 'puny']
              },
              'human'
            ]
          },
          'party!'
        ]
      }
    ]
  }, '', { unicode: false })
  t.equal(s, [
    'beep',
    '+-- ity',
    '`-- boop',
    '  +-- o_O',
    '  | +-- oh',
    '  | | +-- hello',
    '  | | `-- puny',
    '  | `-- human',
    '  `-- party!',
    ''
  ].join('\n'))
  t.end()
})
