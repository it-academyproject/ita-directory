import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { ErrorMessage, Label, Icon } from '../atoms'
import { colors, dimensions, font } from '../../theme'
import { InputText } from '../atoms/Forms'
import { FlexBox } from '../../theme/wrappers'

type TInputGroupStyled = {
  error?: boolean | string
  hasIcon?: boolean
}

const InputGroupStyled = styled.div<TInputGroupStyled>`
  ${Label} {
    margin-bottom: ${dimensions.spacing.xs};
  }

  .error:focus-within {
    border-color: ${({ error }) => (error ? colors.redColor : 'inherit')};
  }

  .styledIcon {
    position: absolute;
    margin-left: ${dimensions.spacing.base};
    margin-top: 0.2rem;
    padding: ${dimensions.spacing.none};
  }

  ${InputText} {
    display: flex;
    height: ${dimensions.spacing.xxl};
    padding: ${dimensions.spacing.base};
    font-size: ${font.xs};
    color: ${colors.darkGrey};
    padding-left: ${({ hasIcon }) => (hasIcon ? dimensions.spacing.xxl : dimensions.spacing.base)};
  }
`
type TInputGroupText = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  error?: boolean | string
  hiddenLabel?: boolean
  labelStyles?: object
  hasIcon?: boolean
  icon?: string
}

function InputGroupText({
  value,
  name,
  id,
  label,
  hiddenLabel = false,
  className = '',
  error,
  icon,
  ...rest
}: TInputGroupText): JSX.Element {
  return (
    <InputGroupStyled hasIcon={!!icon} className={className}>
      <Label htmlFor={id} label={label} hiddenLabel={hiddenLabel} isError={!!error} />
      <FlexBox justifyContent="flex-start" alignItems="center" flexWrap="nowrap">
        {!!icon && (
          <div className="styledIcon">
            <Icon name={icon} fill={1} />
          </div>
        )}
        <InputText value={value} id={id} name={name} error={error} {...rest} />
      </FlexBox>
      {!!error && <ErrorMessage text={error} />}
    </InputGroupStyled>
  )
}

export default styled(InputGroupText)``
