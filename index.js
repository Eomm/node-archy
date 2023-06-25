'use strict'

module.exports = function archy (obj, prefix, opts) {
  if (prefix === undefined) prefix = ''
  if (!opts) opts = {}
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

  if (typeof obj === 'string') obj = { label: obj }

  const nodes = obj.nodes || []
  const lines = (obj.label || '').split('\n')
  const splitter = '\n' + prefix + (nodes.length ? chr('│') : ' ') + ' '

  return prefix +
    lines.join(splitter) + '\n' +
    nodes.map(function (node, ix) {
      const last = ix === nodes.length - 1
      const more = node.nodes && node.nodes.length
      const prefix_ = prefix + (last ? ' ' : chr('│')) + ' '

          return prefix +
            (last ? chr('└') : chr('├')) + chr('─') +
            (more ? chr('┬') : chr('─')) + ' ' +
            archy(node, prefix_, opts).slice(prefix.length + 2)
        }).join('')
}
