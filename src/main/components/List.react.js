import React, {PropTypes} from 'react'
import {Base} from 'rebass'

const baseStyle = {
  margin: '0',
  padding: '0px 0px 0px 20px'
}

const List = (props) => {
  const {itemType, ordered} = props

  const tag = (ordered) ? 'ol' : 'ul'
  const defaultItemType = (ordered) ? 'decimal' : 'square'
  const itemStyleType = itemType || defaultItemType

  const style = {
    listStyleType: itemStyleType,
    ...baseStyle
  }

  return (
    <Base {...props} tagName={tag} baseStyle={style} />
  )
}

List.propTypes = {
  itemType: PropTypes.string,
  ordered: PropTypes.boolean
}

List.defaultProps = {
  ordered: false
}

export default List
