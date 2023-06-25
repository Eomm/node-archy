'use strict'

module.exports = function archy (obj, prefix, opts) {
  if (prefix === undefined) prefix = ''
  opts = Object.assign({ labelField: 'label', nodesField: 'nodes' }, opts)
  const chr = function (s) {
    const chars = {
      '│': '|',
      '└': '`',
      '├': '+',
      '─': '-',
      '┬': '-'
    }
    return opts.unicode === false ? chars[s] : s
  }

  if (typeof obj === 'string') obj = { [opts.labelField]: obj }

  const nodes = obj[opts.nodesField] || []
  const lines = (obj[opts.labelField]).split('\n')
  const splitter = '\n' + prefix + (nodes.length ? chr('│') : ' ') + ' '

  return prefix +
    lines.join(splitter) + '\n' +
    nodes.map(function (node, ix) {
      const last = ix === nodes.length - 1
      const more = node[opts.nodesField] && node[opts.nodesField].length
      const prefix_ = prefix + (last ? ' ' : chr('│')) + ' '

      return prefix +
        (last ? chr('└') : chr('├')) + chr('─') +
        (more ? chr('┬') : chr('─')) + ' ' +
        archy(node, prefix_, opts).slice(prefix.length + 2)
    }).join('')
}
