import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

export function Separator ({
  marginVertical = 8,
  borderBottomColor = '#9f'
}) {
  return <View style={{
    marginVertical,
    borderBottomColor,
    borderBottomWidth: StyleSheet.hairlineWidth
  }} />
}

Separator.propTypes = {
  marginVertical: PropTypes.number,
  borderBottomColor: PropTypes.string
}
