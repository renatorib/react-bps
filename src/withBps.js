import withSizes from 'react-sizes'
import { gte, lte, asc, desc, keys, map, filter, sort, head, pipe } from './utils'

const getBreakpointsProps = (width, breakpoints, mobileFirst) => {
  const getPropsByKey = key => key && breakpoints[key] || {}

  return pipe(
    keys,
    map(Number),
    filter((mobileFirst ? gte : lte)(width)),
    sort(mobileFirst ? desc : asc), 
    head,
    getPropsByKey,
  )(breakpoints)
}

const withBps = ({ propName = 'bps', mobileFirst = false } = {}) => {
  return withSizes(({ width }, { [propName]: breakpoints = {} }) => (
    getBreakpointsProps(width, breakpoints, mobileFirst)
  ))
}

export default withBps
