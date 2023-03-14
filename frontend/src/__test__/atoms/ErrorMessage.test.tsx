import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ErrorMessage } from '../../components/atoms'
import { font, colors } from '../../theme'

describe('ErrorMessage', () => {
  it('should render the correct style for error message', () => {
    render(<ErrorMessage data-testid="error-message" />)
    const errorMessage = screen.getByTestId('error-message')

    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveStyle(`font-size: ${font.xss}`)
    expect(errorMessage).toHaveStyle(`color: ${colors.bloodRed}`)
    expect(errorMessage).toHaveStyle('margin: 0px 0px 8px 10px')
    expect(errorMessage).toHaveStyle('font-style: oblique')
  })
})
